import { useCallback, useEffect, useRef, useState } from 'react';

function padIndex(n) {
  return String(n).padStart(2, '0');
}

export default function useDeckScroll(slides) {
  const wrapRefs = useRef([]);
  const metaRef = useRef([]);
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
    return meta;
  }, [slides]);

  const render = useCallback(() => {
    const vh = window.innerHeight;
    const meta = metaRef.current;
    if (!meta.length) return;

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
        };
      }

      const rect = m.wrap.getBoundingClientRect();

      // Mobile (non-scrub): natural vertical flow — only track the active slide.
      if (m.mobile && !m.isScrub) {
        if (rect.top <= vh * 0.5) activeIdx = i;
        return { panelIndex: 0, cueDown: false, cueText: '', indexText: '', progress: 0 };
      }

      const raw = Math.min(Math.max(-rect.top, 0), m.pan);
      const progress = m.pan > 0 ? raw / m.pan : 0;

      let panelIndex = 0;
      let cueDown = false;
      let cueText = 'Scroll to continue';
      let indexText = '';

      if (m.isScrub) {
        // Feed scroll progress to the panel via a CSS custom property.
        m.slideEl.style.setProperty('--p', progress.toFixed(4));
        cueDown = progress > 0.85;
      } else if (m.pan > 0) {
        m.track.style.transform = `translate3d(${-raw}px,0,0)`;

        if (m.panels > 1) {
          panelIndex = Math.min(m.panels - 1, Math.round(progress * (m.panels - 1)));
          const isLast = panelIndex >= m.panels - 1;
          cueDown = isLast;
          cueText = isLast ? 'Scroll for next chapter' : 'Scroll to continue';
          indexText = `${padIndex(panelIndex + 1)} / ${padIndex(m.panels)}`;
        }
      }

      if (rect.top <= vh * 0.5) {
        activeIdx = i;
      }

      return { panelIndex, cueDown, cueText, indexText, progress };
    });

    setActiveSlide(activeIdx);
    setSlideStates(nextStates);
  }, [slides]);

  useEffect(() => {
    let ticking = false;
    let resizeTimer;
    let idleTimer;
    let isSnapping = false;
    let snapClearTimer;

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

        // Only settle when meaningfully off a boundary — avoids micro-nudges.
        if (Math.abs(delta) > 6) {
          isSnapping = true;
          window.scrollTo({ top: window.scrollY + delta, behavior: 'smooth' });
          clearTimeout(snapClearTimer);
          snapClearTimer = setTimeout(() => {
            isSnapping = false;
          }, 600);
        }
        break;
      }
    };

    const scheduleSnap = () => {
      if (reduceMotion) return;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(maybeSnap, 130);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          render();
        });
      }
      if (!isSnapping) scheduleSnap();
    };

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        measure();
        render();
      }, 150);
    };

    measure();
    render();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
      clearTimeout(idleTimer);
      clearTimeout(snapClearTimer);
    };
  }, [measure, render]);

  return { activeSlide, slideStates, setWrapRef };
}
