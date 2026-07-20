import { useEffect } from 'react';
import { getLenis } from '../lib/lenis';

// Page-wide parallax: every deck panel, gallery column, and page section
// (inquiry / footer). Images lag, copy leads, soft clip + veil on focus.
// Content & assets unchanged — transforms / CSS vars only.
const PANEL_SEL = '.deck-panel:not(.is-swivel)';
const GALLERY_SEL = '.deck-panel.is-gallery .gallery-col';
const SECTION_SEL = '.inquiry-form, footer';
const IMG_SEL = [
  '.deck-panel-bg-img',
  '.media-fill',
  '.deck-panel-media',
  '.gallery-col-media',
  '.vt-media',
].join(', ');

// Mobile — vertical story scroll
const M = {
  imgDrift: 11,
  imgZoomMin: 1.07,
  imgZoomMax: 1.16,
  copyRise: 24,
  copyDim: 0.4,
  clipMax: 14,
};

// Desktop — horizontal chapter scrub
const D = {
  imgDrift: 8.5,
  imgZoom: 1.1,
  copyDrift: 2.8,
  copyRise: 16,
  clipMax: 16,
};

const LERP = 0.1;
const GALLERY_DEPTH = [0.65, 1, 1.4];
const SECTION_DEPTH = 0.55; // footer / form — gentler

function isMobileLayout() {
  return window.matchMedia('(max-width: 900px), (orientation: portrait)').matches;
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function easeOut(t) {
  return 1 - (1 - t) ** 2;
}

function blankState() {
  return { tx: 0, ty: 0, scale: 1, opacity: 1, cx: 0, cy: 0, clip: 0, veil: 0 };
}

function trackSample() {
  // Horizontal pans move panels without changing scrollY — sample all tracks.
  return Array.from(document.querySelectorAll('.deck-track'))
    .map((t) => t.style.transform || '')
    .join('|');
}

export default function MobileParallax() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let pages = [];
    let raf = 0;
    let running = false;
    let lastSample = '';
    let idle = 0;
    let unsubLenis = null;

    const clear = () => {
      pages.forEach(({ img, content, el, imgs, state }) => {
        if (img) img.style.removeProperty('transform');
        (imgs || []).forEach((node) => node.style.removeProperty('transform'));
        if (content) {
          content.style.removeProperty('opacity');
          content.style.removeProperty('transform');
        }
        if (el) {
          el.style.removeProperty('--px');
          el.style.removeProperty('--clip');
          el.style.removeProperty('--veil');
          el.classList.remove('is-parallaxing');
        }
        if (state) Object.assign(state, blankState());
      });
    };

    const readTargets = () => {
      const mobile = isMobileLayout();
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const rects = pages.map((p) => p.el.getBoundingClientRect());

      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const rect = rects[i];
        const depth = page.depth ?? 1;
        const clipScale = page.clipScale ?? 1;
        const far =
          rect.bottom < -vh * 0.8 ||
          rect.top > vh * 1.8 ||
          rect.right < -vw * 0.7 ||
          rect.left > vw * 1.7;

        if (far) {
          page.target = {
            ...blankState(),
            scale: mobile ? M.imgZoomMin : D.imgZoom,
            skip: true,
          };
          continue;
        }

        if (mobile || page.forceVertical) {
          const centred = (rect.top + rect.height / 2 - vh / 2) / vh;
          const p = clamp(centred, -1, 1);
          const a = Math.abs(p);
          const visible = clamp(1 - (a - 0.12) / 0.88, 0, 1);
          const focus = easeOut(visible);

          page.target = {
            tx: 0,
            ty: p * -M.imgDrift * depth,
            scale: M.imgZoomMin + a * (M.imgZoomMax - M.imgZoomMin) * depth,
            opacity: 1 - Math.min(1, a / 0.85) * M.copyDim,
            cx: 0,
            cy: p * M.copyRise * depth,
            clip: (1 - focus) * M.clipMax * clipScale,
            veil: a * 0.28 * clipScale,
            skip: false,
          };
        } else {
          const centred = (rect.left + rect.width / 2 - vw / 2) / vw;
          const p = clamp(centred, -1, 1);
          const overlap =
            clamp(Math.min(rect.right, vw) - Math.max(rect.left, 0), 0, rect.width) /
            Math.max(rect.width, 1);
          const focus = easeOut(overlap);

          page.target = {
            tx: p * -D.imgDrift * depth,
            ty: p * -1.4 * depth,
            scale: D.imgZoom,
            opacity: 0.78 + focus * 0.22,
            cx: p * D.copyDrift * depth,
            cy: (1 - focus) * D.copyRise,
            clip: (1 - focus) * D.clipMax * clipScale,
            veil: (1 - focus) * 0.22 * clipScale,
            skip: false,
          };
        }
      }
    };

    const applyImg = (node, s, depthMul = 1) => {
      if (!node) return;
      node.style.setProperty(
        'transform',
        `translate3d(${(s.tx * depthMul).toFixed(2)}%, ${(s.ty * depthMul).toFixed(2)}%, 0) scale(${s.scale.toFixed(3)})`,
        'important',
      );
    };

    const write = () => {
      let moving = false;

      for (const page of pages) {
        const t = page.target;
        if (!t || !page.state) continue;
        const s = page.state;
        const keys = ['tx', 'ty', 'scale', 'opacity', 'cx', 'cy', 'clip', 'veil'];

        if (reduce.matches || t.skip) {
          keys.forEach((k) => {
            s[k] = t[k];
          });
        } else {
          let delta = 0;
          keys.forEach((k) => {
            const d = t[k] - s[k];
            delta += Math.abs(d);
            s[k] += d * LERP;
          });
          if (delta > 0.002) moving = true;
          else {
            keys.forEach((k) => {
              s[k] = t[k];
            });
          }
        }

        page.el.classList.add('is-parallaxing');
        page.el.style.setProperty('--px', s.tx.toFixed(3));
        page.el.style.setProperty('--clip', `${s.clip.toFixed(2)}%`);
        page.el.style.setProperty('--veil', s.veil.toFixed(3));

        applyImg(page.img, s, 1);
        (page.imgs || []).forEach((node, idx) => {
          // Extra layers drift a bit more for depth
          applyImg(node, s, 1 + idx * 0.15);
        });

        if (page.content) {
          // Page sections (form/footer): drift only — never dim the whole block.
          if (page.forceVertical && page.clipScale === 0) {
            page.content.style.removeProperty('opacity');
            page.content.style.transform = `translate3d(0, ${(s.cy * 0.45).toFixed(1)}px, 0)`;
          } else {
            page.content.style.opacity = s.opacity.toFixed(3);
            page.content.style.transform = `translate3d(${s.cx.toFixed(2)}%, ${s.cy.toFixed(1)}px, 0)`;
          }
        }
      }
      return moving;
    };

    const tick = () => {
      const sample = `${window.scrollY}|${trackSample()}`;
      if (sample !== lastSample) {
        lastSample = sample;
        idle = 0;
        readTargets();
      } else if (++idle > 45) {
        const moving = write();
        if (!moving) {
          running = false;
          return;
        }
        raf = requestAnimationFrame(tick);
        return;
      }

      write();
      raf = requestAnimationFrame(tick);
    };

    const kick = () => {
      if (!running) {
        running = true;
        idle = 0;
        raf = requestAnimationFrame(tick);
      }
    };

    const setup = () => {
      clear();

      const panels = Array.from(document.querySelectorAll(PANEL_SEL)).map((el) => {
        const isEditorial = /is-(program|amenities|spec|village|scale|siteplan|service)/.test(
          el.className,
        );
        const imgs = Array.from(el.querySelectorAll(IMG_SEL));
        return {
          el,
          img: imgs[0] || null,
          imgs: imgs.slice(1),
          content: el.querySelector(':scope > .deck-panel-content'),
          depth: isEditorial ? 0.75 : 1,
          clipScale: isEditorial ? 0.45 : 1,
          forceVertical: false,
          state: blankState(),
          target: { ...blankState(), skip: true },
        };
      });

      // Gallery columns get their own staggered depth (skip parent gallery panel imgs)
      const galleries = Array.from(document.querySelectorAll(GALLERY_SEL)).map((el, i) => ({
        el,
        img: el.querySelector(IMG_SEL),
        imgs: [],
        content: null,
        depth: GALLERY_DEPTH[i % GALLERY_DEPTH.length],
        clipScale: 0.85,
        forceVertical: false,
        state: blankState(),
        target: { ...blankState(), skip: true },
      }));

      // Page sections below the deck (inquiry + footer) — always vertical parallax
      const sections = Array.from(document.querySelectorAll(SECTION_SEL)).map((el) => ({
        el,
        img: null,
        imgs: [],
        content: el,
        depth: SECTION_DEPTH,
        clipScale: 0,
        forceVertical: true,
        state: blankState(),
        target: { ...blankState(), skip: true },
      }));

      // Prefer column-level gallery entries; drop whole-gallery panel duplicates
      const galleryParents = new Set(
        galleries.map((g) => g.el.closest('.deck-panel')).filter(Boolean),
      );
      const filteredPanels = panels.filter((p) => !galleryParents.has(p.el));

      pages = [...filteredPanels, ...galleries, ...sections];
      readTargets();
      write();
    };

    setup();
    ['scroll', 'touchmove', 'wheel', 'touchstart'].forEach((ev) =>
      window.addEventListener(ev, kick, { passive: true }),
    );
    window.addEventListener('resize', setup);

    const bindLenis = () => {
      const lenis = getLenis();
      if (!lenis || unsubLenis) return;
      const onScroll = () => kick();
      lenis.on('scroll', onScroll);
      unsubLenis = () => lenis.off('scroll', onScroll);
    };
    bindLenis();
    const lenisTimer = setTimeout(bindLenis, 120);

    // Re-scan when deck mounts / media swaps in
    const mo = new MutationObserver(() => {
      clearTimeout(mo._t);
      mo._t = setTimeout(setup, 80);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(lenisTimer);
      clearTimeout(mo._t);
      mo.disconnect();
      unsubLenis?.();
      ['scroll', 'touchmove', 'wheel', 'touchstart'].forEach((ev) =>
        window.removeEventListener(ev, kick),
      );
      window.removeEventListener('resize', setup);
      cancelAnimationFrame(raf);
      clear();
    };
  }, []);

  return null;
}
