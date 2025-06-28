import { useState, useEffect, useCallback } from "react";

export function useCarousel(totalSlides: number, autoAdvanceInterval: number = 5000) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoAdvancing(false);
    setTimeout(() => setIsAutoAdvancing(true), 10000);
  }, []);

  useEffect(() => {
    if (!isAutoAdvancing) return;

    const interval = setInterval(nextSlide, autoAdvanceInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoAdvanceInterval, isAutoAdvancing]);

  return {
    currentSlide,
    nextSlide,
    previousSlide,
    goToSlide,
    setIsAutoAdvancing,
  };
}
