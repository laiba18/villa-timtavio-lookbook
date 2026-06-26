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
    })),
  );

  const setWrapRef = useCallback((index) => (el) => {
    wrapRefs.current[index] = el;
  }, []);

  const measure = useCallback(() => {
    const vh = window.innerHeight;
    const meta = slides.map((slide, i) => {
      const wrap = wrapRefs.current[i];
      if (!wrap) return null;

      const slideEl = wrap.querySelector('.deck-slide');
      const track = wrap.querySelector('.deck-track');
      const panelEls = Array.from(wrap.querySelectorAll('.deck-panel'));
      const panels = panelEls.length;
      const slideWidth = slideEl.clientWidth;

      panelEls.forEach((p) => {
        p.style.width = `${slideWidth}px`;
      });
      track.style.width = `${panels * slideWidth}px`;

      let pan = 0;
      if (panels <= 1) {
        wrap.style.height = `${vh}px`;
      } else {
        pan = (panels - 1) * slideWidth;
        wrap.style.height = `${vh + pan}px`;
      }

      return { wrap, slideEl, track, panels, pan };
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
        };
      }

      const rect = m.wrap.getBoundingClientRect();
      const raw = Math.min(Math.max(-rect.top, 0), m.pan);

      if (m.pan > 0) {
        m.track.style.transform = `translate3d(${-raw}px,0,0)`;
      }

      let panelIndex = 0;
      let cueDown = false;
      let cueText = 'Scroll to continue';
      let indexText = '';

      if (m.panels > 1) {
        panelIndex = Math.min(m.panels - 1, Math.round((raw / m.pan) * (m.panels - 1)));
        const isLast = panelIndex >= m.panels - 1;
        cueDown = isLast;
        cueText = isLast ? 'Scroll for next chapter' : 'Scroll to continue';
        indexText = `${padIndex(panelIndex + 1)} / ${padIndex(m.panels)}`;
      }

      if (rect.top <= vh * 0.5) {
        activeIdx = i;
      }

      return { panelIndex, cueDown, cueText, indexText };
    });

    setActiveSlide(activeIdx);
    setSlideStates(nextStates);
  }, [slides]);

  useEffect(() => {
    let ticking = false;
    let resizeTimer;

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          render();
        });
      }
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
    };
  }, [measure, render]);

  return { activeSlide, slideStates, setWrapRef };
}
