import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { useHeroSlides } from "../../api/hooks";
import { useUIStore } from "../../store/useUIStore";
import Button from "../common/Button";

export default function HeroSlider() {
  const { data, isLoading, isError } = useHeroSlides();
  const activeSlide = useUIStore((state) => state.activeSlide);
  const setActiveSlide = useUIStore((state) => state.setActiveSlide);
  const setDonateModalOpen = useUIStore((state) => state.setDonateModalOpen);
  const pointerStart = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [imagesReady, setImagesReady] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);
  const slides = data?.slides ?? [];

  useEffect(() => {
    if (!slides.length) return undefined;

    let isCancelled = false;
    setImagesReady(false);
    setHasImageError(false);

    Promise.all(
      slides.map(
        (slide) =>
          new Promise((resolve) => {
            const image = new Image();
            image.onload = () => resolve(true);
            image.onerror = () => resolve(false);
            image.src = slide.image;
            if (image.complete) resolve(image.naturalWidth > 0);
          }),
      ),
    ).then((results) => {
      if (isCancelled) return;
      setHasImageError(results.some((loaded) => !loaded));
      setImagesReady(true);
    });

    return () => {
      isCancelled = true;
    };
  }, [slides]);

  useEffect(() => {
    if (slides.length < 2 || isPaused || !imagesReady) return undefined;
    const timer = window.setTimeout(
      () => setActiveSlide((activeSlide + 1) % slides.length),
      3000,
    );
    return () => window.clearTimeout(timer);
  }, [activeSlide, imagesReady, isPaused, setActiveSlide, slides.length]);

  const moveSlide = (direction) => {
    if (slides.length) {
      setActiveSlide((activeSlide + direction + slides.length) % slides.length);
    }
  };

  const slide = slides[activeSlide % Math.max(slides.length, 1)];

  return (
    <section
      id="home"
      className="relative isolate flex h-[80vh] items-center overflow-hidden bg-teal text-white"
      aria-label="Foundation highlights"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerDown={(event) => {
        pointerStart.current = event.clientX;
      }}
      onPointerUp={(event) => {
        if (pointerStart.current === null) return;
        const distance = event.clientX - pointerStart.current;
        if (Math.abs(distance) > 55) moveSlide(distance < 0 ? 1 : -1);
        pointerStart.current = null;
      }}
    >
      {slide && (
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={slide.id}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={slide.image}
              alt={slide.imageAlt}
              className="h-full w-full object-cover"
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 3, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#102b25]/85 via-[#102b25]/60 to-[#102b25]/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102b25]/45 via-transparent to-[#102b25]/15" />
          </motion.div>
        </AnimatePresence>
      )}

      {isLoading && (
        <div
          className="absolute inset-0 animate-pulse bg-teal"
          role="status"
          aria-label={data?.loadingLabel ?? "Loading foundation highlights"}
        />
      )}
      {isError && (
        <p className="section-wrap relative z-10 pt-28 text-white">
          {data?.error ?? "The highlights are temporarily unavailable. Please refresh the page to try again."}
        </p>
      )}
      {hasImageError && (
        <p role="status" className="section-wrap absolute bottom-20 z-10 text-sm text-white/90">
          {data?.imageError ?? "One or more highlight images could not be loaded."}
        </p>
      )}

      {slide && (
        <div className="section-wrap relative z-10 pb-24 pt-32 md:pb-28">
          <motion.div
            key={`copy-${slide.id}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="max-w-3xl"
          >
            <h1 className="max-w-3xl font-heading text-5xl font-medium leading-[1.15] capitalize">
              {slide.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg capitalize">
              {slide.subtitle}
            </p>
            <p className="mt-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-saffron">
              <span className="h-px w-9 bg-saffron" />
              {slide.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={() => setDonateModalOpen(true)}>
                {data.donateLabel}
              </Button>
              <Button href="#about" variant="secondary">
                {data.learnLabel}
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      {slides.length > 1 && (
        <>
          <div className="section-wrap absolute inset-x-0 bottom-8 z-10 flex items-center justify-between">
            <div className="hero-dots flex items-center gap-2" aria-label="Choose a slide">
              {slides.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  aria-label={`${data.chooseSlideLabel} ${index + 1}`}
                  aria-current={activeSlide === index ? "true" : undefined}
                  onClick={() => setActiveSlide(index)}
                  className="flex h-8 items-center"
                >
                  <span className="h-1 w-3 rounded-full bg-white/70 transition-all duration-300" />
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => moveSlide(-1)}
                aria-label={data.previousLabel}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/45 text-white transition hover:bg-white hover:text-teal"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => moveSlide(1)}
                aria-label={data.nextLabel}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/45 text-white transition hover:bg-white hover:text-teal"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
