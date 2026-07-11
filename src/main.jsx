import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Enable scroll-reveal styling before first paint (avoids a flash of visible
// content before the IntersectionObserver kicks in). Scoped so no-JS = visible.
document.documentElement.classList.add('reveal-ready');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
