import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import type { AppScreen } from "../lib/app-screens";

const AUTOPLAY_INTERVAL_MS = 4000;

export interface AppShowcaseProps {
  screens: AppScreen[];
}

export function AppShowcase({ screens }: AppShowcaseProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (!emblaApi) {
      return;
    }
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi || isPaused) {
      return;
    }
    if (typeof window === "undefined") {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [emblaApi, isPaused]);

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label="Capturas de pantalla de la app RodarLibre"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onPointerDown={() => setIsPaused(true)}
    >
      <div
        ref={emblaRef}
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      >
        <div className="flex touch-pan-y items-center">
          {screens.map((screen, index) => (
            <div
              key={screen.src}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`Pantalla ${index + 1} de ${screens.length}`}
              className="flex-[0_0_62%] sm:flex-[0_0_40%] md:flex-[0_0_30%] min-w-0 px-3 py-4"
            >
              <div
                className={cn(
                  "relative aspect-[1206/2622] rounded-[2rem] overflow-hidden border border-border bg-card shadow-2xl shadow-black/40 transition-all duration-500",
                  index === selectedIndex ? "opacity-100 scale-100" : "opacity-40 scale-90",
                )}
              >
                <img
                  src={screen.src}
                  alt={screen.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  sizes="(max-width: 640px) 62vw, (max-width: 768px) 40vw, 280px"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Pantalla anterior"
          className="p-2 rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary transition-colors"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="flex gap-2" role="tablist" aria-label="Seleccionar pantalla">
          {screens.map((screen, index) => (
            <button
              key={screen.src}
              type="button"
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`Ir a la pantalla ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === selectedIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Pantalla siguiente"
          className="p-2 rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary transition-colors"
        >
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default AppShowcase;
