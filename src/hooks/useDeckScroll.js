import { useCallback, useEffect, useRef, useState } from 'react';
import { getLenis, scrollByOffset } from '../lib/lenis';

function padIndex(n) {
  return String(n).padStart(2, '0');
}

// Ease factor for horizontal pan / scrub — higher = snappier, lower = silkier.
const LERP = 0.11;
const LERP_SCRUB = 0.09;
const SNAP_IDLE_MS = 320;
const SNAP_THRESHOLD = 10;

export default function useDeckScroll(slides) {
  const wrapRefs = useRef([]);
  const metaRef = useRef([]);
  const currentsRef = useRef([]); // lerped pixel / progress values per slide
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideStates, setSlideStates] = useState(() =>
    slides.map(() => ({
      panelIndex: 0,
      cueDown: false,
      cueText: 'Scroll to continue',
      indexText: '',
      progress: 0,
    })),
  );

  const setWrapRef = useCallback((index) => (el) => {
    wrapRefs.current[index] = el;
  }, []);

  const measure = useCallback(() => {
    const vh = window.innerHeight;
    // Vertical layout for narrow screens AND any portrait viewport (e.g. large
    // tablets like iPad Pro at 1024px portrait, where a width-only check misses).
    const isMobile = window.matchMedia('(max-width: 900px), (orientation: portrait)').matches;
    const meta = slides.map((slide, i) => {
      const wrap = wrapRefs.current[i];
      if (!wrap) return null;

      const slideEl = wrap.querySelector('.deck-slide');
      const track = wrap.querySelector('.deck-track');
      const panelEls = Array.from(wrap.querySelectorAll('.deck-panel'));
      const panels = panelEls.length;
      const isScrub = Boolean(slide.scrub);

      // Mobile (non-scrub): unfold the horizontal track into a vertical stack.
      // Clear any inline sizing so the responsive CSS owns the layout.
      if (isMobile && !isScrub) {
        panelEls.forEach((p) => {
          p.style.width = '';
        });
        track.style.width = '';
        track.style.transform = '';
        wrap.style.height = '';
        return { wrap, slideEl, track, panels, pan: 0, isScrub: false, mobile: true };
      }

      const slideWidth = slideEl.clientWidth;
      panelEls.forEach((p) => {
        p.style.width = `${slideWidth}px`;
      });
      track.style.width = `${panels * slideWidth}px`;

      // Scrub slides don't pan horizontally — they expose scroll progress as
      // a CSS variable that drives an in-panel animation (e.g. the swivel door).
      let pan = 0;
      if (isScrub) {
        const amount = slide.scrubAmount || 1.2;
        pan = vh * amount;
        wrap.style.height = `${vh + pan}px`;
      } else if (panels <= 1) {
        wrap.style.height = `${vh}px`;
      } else {
        pan = (panels - 1) * slideWidth;
        wrap.style.height = `${vh + pan}px`;
      }

      return { wrap, slideEl, track, panels, pan, isScrub, slideWidth, mobile: isMobile };
    });

    metaRef.current = meta;
    if (currentsRef.current.length !== meta.length) {
      currentsRef.current = meta.map(() => 0);
    }
    return meta;
  }, [slides]);

  // Read scroll → target values; write lerped transforms every frame.
  const sampleTargets = useCallback(() => {
    const vh = window.innerHeight;
    const meta = metaRef.current;
    if (!meta.length) return { activeIdx: 0, nextStates: null };

    let activeIdx = 0;
    const nextStates = slides.map((slide, i) => {
      const m = meta[i];
      if (!m) {
        return {
          panelIndex: 0,
          cueDown: false,
          cueText: 'Scroll to continue',
          indexText: '',
          progress: 0,
          target: 0,
        };
      }

      const rect = m.wrap.getBoundingClientRect();

      // Mobile (non-scrub): natural vertical flow — only track the active slide.
      if (m.mobile && !m.isScrub) {
        if (rect.top <= vh * 0.5) activeIdx = i;
        return { panelIndex: 0, cueDown: false, cueText: '', indexText: '', progress: 0, target: 0 };
      }

      const raw = Math.min(Math.max(-rect.top, 0), m.pan);
      const progress = m.pan > 0 ? raw / m.pan : 0;

      let panelIndex = 0;
      let cueDown = false;
      let cueText = 'Scroll to continue';
      let indexText = '';

      if (m.isScrub) {
        cueDown = progress > 0.85;
      } else if (m.pan > 0 && m.panels > 1) {
        panelIndex = Math.min(m.panels - 1, Math.round(progress * (m.panels - 1)));
        const isLast = panelIndex >= m.panels - 1;
        cueDown = isLast;
        cueText = isLast ? 'Scroll for next chapter' : 'Scroll to continue';
        indexText = `${padIndex(panelIndex + 1)} / ${padIndex(m.panels)}`;
      }

      if (rect.top <= vh * 0.5) {
        activeIdx = i;
      }

      // Scrub targets are 0..1; pan targets are pixel offsets.
      const target = m.isScrub ? progress : raw;
      return { panelIndex, cueDown, cueText, indexText, progress, target };
    });

    return { activeIdx, nextStates };
  }, [slides]);

  const applyLerped = useCallback((nextStates, reduceMotion) => {
    const meta = metaRef.current;
    let moving = false;

    for (let i = 0; i < meta.length; i++) {
      const m = meta[i];
      const state = nextStates[i];
      if (!m || !state || (m.mobile && !m.isScrub)) continue;

      const target = state.target ?? 0;
      let current = currentsRef.current[i] ?? 0;
      const ease = m.isScrub ? LERP_SCRUB : LERP;

      if (reduceMotion) {
        current = target;
      } else {
        const delta = target - current;
        if (Math.abs(delta) > 0.05) {
          current += delta * ease;
          moving = true;
        } else {
          current = target;
        }
      }
      currentsRef.current[i] = current;

      if (m.isScrub) {
        m.slideEl.style.setProperty('--p', current.toFixed(4));
        state.progress = current;
      } else if (m.pan > 0) {
        m.track.style.transform = `translate3d(${-current}px,0,0)`;
        if (m.panels > 1 && m.slideWidth) {
          const progress = m.pan > 0 ? current / m.pan : 0;
          state.progress = progress;
          state.panelIndex = Math.min(
            m.panels - 1,
            Math.round(progress * (m.panels - 1)),
          );
        }
      }
    }

    return moving;
  }, []);

  useEffect(() => {
    let resizeTimer;
    let idleTimer;
    let isSnapping = false;
    let snapClearTimer;
    let raf = 0;
    let running = false;
    let idleFrames = 0;
    let lastActive = -1;
    let lastStatesKey = '';

    const reduceMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // When scrolling pauses mid-panel inside a multi-panel slide, gently settle
    // to the nearest panel so viewers never rest on two half-panels. Never runs
    // during an active scroll, on the swivel/scrub slide, or under reduced motion.
    const maybeSnap = () => {
      if (isSnapping) return;
      const vh = window.innerHeight;
      const meta = metaRef.current;

      for (const m of meta) {
        if (!m || m.isScrub || m.panels <= 1 || m.pan <= 0) continue;

        const rect = m.wrap.getBoundingClientRect();
        const isPinned = rect.top <= 0 && rect.bottom >= vh;
        if (!isPinned) continue;

        const raw = Math.min(Math.max(-rect.top, 0), m.pan);
        const step = m.slideWidth;
        if (!step) break;

        const targetRaw = Math.min(m.pan, Math.round(raw / step) * step);
        const delta = targetRaw - raw;

        if (Math.abs(delta) > SNAP_THRESHOLD) {
          isSnapping = true;
          scrollByOffset(delta, { duration: 0.9 });
          clearTimeout(snapClearTimer);
          snapClearTimer = setTimeout(() => {
            isSnapping = false;
          }, 900);
        }
        break;
      }
    };

    const scheduleSnap = () => {
      if (reduceMotion) return;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(maybeSnap, SNAP_IDLE_MS);
    };

    const tick = () => {
      const { activeIdx, nextStates } = sampleTargets();
      if (!nextStates) {
        running = false;
        return;
      }

      const moving = applyLerped(nextStates, reduceMotion);
      const lenisBusy = Boolean(getLenis()?.isScrolling);

      // Avoid React state thrash — only publish when the visible cue/index changes.
      const key = nextStates
        .map((s) => `${s.panelIndex}|${s.cueDown}|${s.indexText}|${s.cueText}`)
        .join(';');
      if (activeIdx !== lastActive || key !== lastStatesKey) {
        lastActive = activeIdx;
        lastStatesKey = key;
        setActiveSlide(activeIdx);
        setSlideStates(
          nextStates.map(({ panelIndex, cueDown, cueText, indexText, progress }) => ({
            panelIndex,
            cueDown,
            cueText,
            indexText,
            progress,
          })),
        );
      }

      if (moving || lenisBusy) {
        idleFrames = 0;
        raf = requestAnimationFrame(tick);
        return;
      }

      if (++idleFrames < 20) {
        raf = requestAnimationFrame(tick);
        return;
      }

      running = false;
    };

    const kick = () => {
      if (!isSnapping) scheduleSnap();
      if (!running) {
        running = true;
        idleFrames = 0;
        raf = requestAnimationFrame(tick);
      }
    };

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        measure();
        currentsRef.current = metaRef.current.map((m) => {
          if (!m || (m.mobile && !m.isScrub)) return 0;
          const rect = m.wrap.getBoundingClientRect();
          const raw = Math.min(Math.max(-rect.top, 0), m.pan);
          return m.isScrub ? (m.pan > 0 ? raw / m.pan : 0) : raw;
        });
        kick();
      }, 150);
    };

    measure();
    kick();

    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('wheel', kick, { passive: true });
    window.addEventListener('touchmove', kick, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', kick);
      window.removeEventListener('wheel', kick);
      window.removeEventListener('touchmove', kick);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      clearTimeout(idleTimer);
      clearTimeout(snapClearTimer);
    };
  }, [measure, sampleTargets, applyLerped]);

  return { activeSlide, slideStates, setWrapRef };
}
