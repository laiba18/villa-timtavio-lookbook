import Nav from './components/Nav';
import ProgressRail from './components/ProgressRail';
import DeckSlide from './components/DeckSlide';
import Footer from './components/InquiryForm';
import { IconSymbols } from './components/Icons';
import { SLIDES } from './data/slides';
import useDeckScroll from './hooks/useDeckScroll';
import { useMediaPreload } from './hooks/useMediaPreload';
import { enrichSlides } from './lib/resolveMedia';

const slides = enrichSlides(SLIDES);

export default function App() {
  useMediaPreload(slides);
  const { activeSlide, slideStates, setWrapRef } = useDeckScroll(slides);

  return (
    <>
      <IconSymbols />
      <Nav />
      <ProgressRail activeSlide={activeSlide} slides={slides} />

      {slides.map((slide, i) => (
        <DeckSlide
          key={slide.id}
          slide={slide}
          slideState={slideStates[i]}
          wrapRef={setWrapRef(i)}
          isActive={activeSlide === i}
          isNearActive={Math.abs(activeSlide - i) <= 1}
        />
      ))}

      <Footer />
    </>
  );
}
