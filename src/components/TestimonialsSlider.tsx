import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export type Testimonial = {
  name: string;
  role: string;
  location: string;
  rating: number; // out of 5
  text: string;
};

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const active = i < full || (i === full && hasHalf);
        return (
          <Star
            key={i}
            className={`w-4 h-4 ${active ? "fill-primary text-primary" : "text-muted-foreground/40"}`}
          />
        );
      })}
      <span className="ml-1 text-sm font-semibold text-primary">{rating.toFixed(1)}/5</span>
    </div>
  );
}

export function TestimonialsSlider({ items }: { items: Testimonial[] }) {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: reduce ? 0 : 25,
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Gentle auto-advance; disabled when the user prefers reduced motion.
  useEffect(() => {
    if (!emblaApi || reduce) return;
    timer.current = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [emblaApi, reduce]);

  const stop = () => timer.current && clearInterval(timer.current);

  return (
    <div className="mt-10" onPointerDown={stop} onMouseEnter={stop}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-5">
          {items.map((t, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-5">
              <figure className="h-full rounded-2xl border border-border bg-card p-7 shadow-card flex flex-col">
                <div className="flex items-center justify-between">
                  <Quote className="w-8 h-8 text-primary/40" />
                  <Stars rating={t.rating} />
                </div>
                <blockquote className="mt-4 text-base text-foreground/80 leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-display font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {t.role} · {t.location}
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-7 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => { stop(); emblaApi?.scrollPrev(); }}
          aria-label="Previous testimonial"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-card transition-smooth hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => { stop(); emblaApi?.scrollTo(i); }}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={selected === i}
              className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                selected === i ? "w-7 bg-primary" : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => { stop(); emblaApi?.scrollNext(); }}
          aria-label="Next testimonial"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-card transition-smooth hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
