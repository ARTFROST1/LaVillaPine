import { useCarousel } from "@/hooks/use-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselSlide {
  image: string;
  alt: string;
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
  autoAdvanceInterval?: number;
  showControls?: boolean;
  showDots?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function ImageCarousel({
  slides,
  autoAdvanceInterval = 5000,
  showControls = true,
  showDots = true,
  className = "",
  children,
}: ImageCarouselProps) {
  const { currentSlide, nextSlide, previousSlide, goToSlide } = useCarousel(
    slides.length,
    autoAdvanceInterval
  );

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-gradient" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}

      {/* Navigation Controls */}
      {showControls && slides.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
            onClick={previousSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-opacity duration-300 ${
                index === currentSlide ? "bg-white opacity-100" : "bg-white opacity-50"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
