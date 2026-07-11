import { useEffect, useState } from 'react';
import darkLogo from '../../images/dark-logo.svg';

const KEY = 'villa-entered';

// A brief "tap to enter" cover. The visitor's tap is a real user gesture, which
// (a) unlocks the ambient audio — AmbientAudio's window listener starts it on
// that same tap — and (b) fades the gate away to reveal the walkthrough. Shown
// once per session.
export default function EnterGate() {
  const [entered, setEntered] = useState(() => {
    try {
      return sessionStorage.getItem(KEY) === '1';
    } catch {
      return false;
    }
  });
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (entered) return undefined;
    // Freeze the page behind the gate.
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [entered]);

  if (entered) return null;

  const enter = () => {
    if (leaving) return;
    setLeaving(true);
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      /* ignore */
    }
    // Let the fade play out, then unmount.
    window.setTimeout(() => setEntered(true), 900);
  };

  return (
    <div
      className={`enter-gate${leaving ? ' is-leaving' : ''}`}
      onClick={enter}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') enter();
      }}
      role="button"
      tabIndex={0}
      aria-label="Enter Villa TimTavio"
    >
      <div className="enter-gate-inner">
        <div className="enter-eyebrow">Puerto Escondido, Oaxaca · Mexico</div>
        <img src={darkLogo} alt="Villa TimTavio" className="enter-logo" />
        <div className="enter-cue">
          <span className="enter-cue-line" />
          <span className="enter-cue-text">Tap to enter</span>
        </div>
      </div>
    </div>
  );
}
