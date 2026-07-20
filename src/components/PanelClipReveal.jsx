import { useEffect } from 'react';

// Ensures a depth veil on every parallaxable surface across the page.
export default function PanelClipReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return;

    const ensureVeils = () => {
      const nodes = document.querySelectorAll(
        '.deck-panel:not(.is-swivel), .gallery-col, .inquiry-form, footer',
      );
      nodes.forEach((panel) => {
        if (panel.querySelector(':scope > .parallax-veil')) return;
        const veil = document.createElement('div');
        veil.className = 'parallax-veil';
        veil.setAttribute('aria-hidden', 'true');
        panel.appendChild(veil);
      });
    };

    ensureVeils();
    const mo = new MutationObserver(() => {
      clearTimeout(mo._t);
      mo._t = setTimeout(ensureVeils, 80);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const t = setTimeout(() => window.dispatchEvent(new Event('scroll')), 150);

    return () => {
      clearTimeout(t);
      clearTimeout(mo._t);
      mo.disconnect();
      document.querySelectorAll('.parallax-veil').forEach((n) => n.remove());
    };
  }, []);

  return null;
}
