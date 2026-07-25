"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useState } from "react";
import type { AboutCarouselSlide } from "@/data/about";
import { publicPath } from "@/lib/assets";

type AboutCarouselProps = {
  slides: AboutCarouselSlide[];
};

/**
 * Horizontal photo strip — same height, natural widths, tight gaps,
 * rounded corners, edges clipped (like a film strip).
 */
export function AboutCarousel({ slides }: AboutCarouselProps) {
  const [paused, setPaused] = useState(false);

  if (slides.length === 0) {
    return (
      <div
        className="h-[200px] w-full bg-surface-muted sm:h-[260px] md:h-[320px]"
        aria-hidden
      />
    );
  }

  // Duplicate for seamless marquee when there are enough photos
  const loopSlides = slides.length > 2 ? [...slides, ...slides] : slides;
  const shouldMarquee = slides.length > 2;

  return (
    <div
      className="relative z-[100] -mx-4 overflow-hidden md:-ml-5 md:-mr-10 lg:-ml-6"
      aria-roledescription="carousel"
      aria-label="About photos"
    >
      <div
        className={`flex h-[200px] w-max gap-1.5 sm:h-[260px] md:h-[300px] lg:h-[340px] ${
          shouldMarquee ? "about-photo-track" : ""
        } ${shouldMarquee && paused ? "is-paused" : ""}`}
      >
        {loopSlides.map((slide, index) => (
          <div
            key={`${slide.src}-${index}`}
            className="h-full shrink-0 overflow-hidden rounded-lg"
            aria-hidden={shouldMarquee && index >= slides.length}
          >
            <Image
              src={publicPath(slide.src)}
              alt={shouldMarquee && index >= slides.length ? "" : slide.alt}
              width={900}
              height={600}
              priority={index < 3}
              className="block h-full w-auto max-w-none select-none"
              style={{ width: "auto", height: "100%" }}
              sizes="(max-width: 768px) 70vw, 40vw"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {shouldMarquee ? (
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
          aria-label={paused ? "Play photo carousel" : "Pause photo carousel"}
          className="absolute right-3 bottom-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-white/90 text-ink shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
        >
          {paused ? (
            <Play size={12} fill="currentColor" strokeWidth={0} aria-hidden />
          ) : (
            <Pause size={12} fill="currentColor" strokeWidth={0} aria-hidden />
          )}
        </button>
      ) : null}
    </div>
  );
}
