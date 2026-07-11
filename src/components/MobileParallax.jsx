import { useEffect } from 'react';

// Scroll-driven "reveal" for mobile/portrait. As each full-screen page moves
// toward the centre of the screen it settles into focus — the photo zooms out
// and drifts (parallax), and the text fades + rises in; as the page leaves it
// recedes again. A continuous, cinematic reveal tied to scroll, not a flat
// scroll. Off under reduced motion.
const PAGE_SEL = [
  '.deck-panel.is-cover',
  '.deck-panel.is-text',
  '.deck-panel.is-media',
  '.deck-panel.is-vertical',
].join(',');
const IMG_SEL = '.deck-panel-bg-img, .media-fill, .deck-panel-media';

const DRIFT = 8;        // photo parallax drift, % of page height
const ZOOM_MIN = 1.12;  // zoom when the page is centred (in focus)
const ZOOM_MAX = 1.30;  // zoom when the page is at the edge (entering/leaving)
const RISE = 26;        // content rise, px
const DIM = 0.9;        // how far content fades toward the edges (0..1)

export default function MobileParallax() {
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px), (orientation: portrait)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let pages = [];
    let raf = 0;

    const clear = () =>
      pages.forEach(({ img, content }) => {
        if (img) img.style.removeProperty('transform');
        if (content) {
          content.style.removeProperty('opacity');
          content.style.removeProperty('transform');
        }
      });

    const update = () => {
      if (!mq.matches || reduce.matches) {
        clear();
        return;
      }
      const vh = window.innerHeight;
      // Read all geometry first, then write — avoids layout thrash.
      const rects = pages.map((p) => p.panel.getBoundingClientRect());
      for (let i = 0; i < pages.length; i++) {
        const { img, content } = pages[i];
        const rect = rects[i];
        const centred = (rect.top + rect.height / 2 - vh / 2) / vh; // 0 = centre
        const far = rect.bottom < -vh * 0.6 || rect.top > vh * 1.6;
        const p = Math.max(-1, Math.min(1, centred));
        const a = Math.abs(p);

        if (img) {
          if (far) {
            img.style.setProperty('transform', `scale(${ZOOM_MIN})`, 'important');
          } else {
            const zoom = (ZOOM_MIN + a * (ZOOM_MAX - ZOOM_MIN)).toFixed(3);
            const drift = (p * -DRIFT).toFixed(2);
            img.style.setProperty(
              'transform',
              `translate3d(0, ${drift}%, 0) scale(${zoom})`,
              'important',
            );
          }
        }
        if (content) {
          content.style.opacity = (1 - Math.min(1, a / 0.85) * DIM).toFixed(3);
          content.style.transform = `translate3d(0, ${(p * RISE).toFixed(1)}px, 0)`;
        }
      }
    };

    // Drive from a rAF loop that samples scrollY every frame while the page is
    // moving, rather than from `scroll` events — iOS Safari throttles scroll
    // events during momentum, which makes event-driven effects stutter or stall.
    // The loop idles itself after the scroll settles and restarts on interaction.
    let running = false;
    let lastY = -1;
    let idle = 0;

    const tick = () => {
      const y = window.scrollY;
      if (y !== lastY) {
        lastY = y;
        idle = 0;
        update();
      } else if (++idle > 24) {
        running = false;
        return;
      }
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
      pages = Array.from(document.querySelectorAll(PAGE_SEL)).map((panel) => ({
        panel,
        img: panel.querySelector(IMG_SEL),
        content: panel.querySelector(':scope > .deck-panel-content'),
      }));
      update();
    };

    setup();
    ['scroll', 'touchmove', 'wheel', 'touchstart'].forEach((ev) =>
      window.addEventListener(ev, kick, { passive: true }),
    );
    window.addEventListener('resize', setup);
    return () => {
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
