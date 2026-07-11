import { useEffect } from 'react';

// Adds `.in-view` to each panel as it scrolls into the viewport, so content can
// animate in on mobile (where the desktop `.is-live` reveal doesn't apply to
// stacked panels past the first). Reveal-once, then unobserve. Harmless on
// desktop — no desktop CSS reacts to `.in-view`.
export default function ScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      // No observer support — reveal everything so nothing stays hidden.
      document.querySelectorAll('.deck-panel').forEach((p) => p.classList.add('in-view'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    const panels = document.querySelectorAll('.deck-panel');
    panels.forEach((p) => io.observe(p));

    return () => io.disconnect();
  }, []);

  return null;
}
