import { useEffect } from 'react';

// Idle invitation for the swivel door: while the swivel slide is in view and
// barely scrolled, the door rests slightly ajar and gently "breathes" — a hint
// that it opens. The breathe angle is written to `--sw-breathe` on the swivel
// slide and fades to 0 as the scroll progress (`--p`) grows, so the user's
// scroll takes over seamlessly (no snap). Skipped under reduced motion.
export default function SwivelInvite() {
  useEffect(() => {
    const reduce =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const AJAR = -5;        // resting open angle, degrees (softer invite)
    const WOBBLE = 1.2;     // breathe amplitude, degrees
    const PERIOD = 4600;    // breathe cycle, ms
    const FADE_BY = 0.14;   // progress at which the breathe fully yields to scroll

    let raf = 0;

    const loop = () => {
      const wrap = document.querySelector('.deck-wrap.is-scrub');
      const slide = wrap && wrap.querySelector('.deck-slide');
      if (slide) {
        const rect = wrap.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          const p = parseFloat(slide.style.getPropertyValue('--p')) || 0;
          const factor = Math.max(0, Math.min(1, 1 - p / FADE_BY));
          if (factor > 0) {
            const wobble = Math.sin((performance.now() / PERIOD) * Math.PI * 2) * WOBBLE;
            slide.style.setProperty('--sw-breathe', `${(factor * (AJAR + wobble)).toFixed(2)}deg`);
          } else {
            slide.style.setProperty('--sw-breathe', '0deg');
          }
        } else {
          slide.style.setProperty('--sw-breathe', '0deg');
        }
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return null;
}
