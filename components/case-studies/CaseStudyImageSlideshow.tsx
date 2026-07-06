"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { publicPath } from "@/lib/assets";

type Slide = {
  src: string;
  alt: string;
};

type CaseStudyImageSlideshowProps = {
  slides: Slide[];
  intervalMs?: number;
  fadeMs?: number;
};

export function CaseStudyImageSlideshow({
  slides,
  intervalMs = 2500,
  fadeMs = 1000,
}: CaseStudyImageSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [slides.length, intervalMs]);

  if (slides.length === 0) return null;

  return (
    <div
      className="relative w-full"
      aria-roledescription="carousel"
      aria-label="Prototype fidelity progression"
    >
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        const shouldRender =
          isActive ||
          index === (activeIndex + 1) % slides.length ||
          index === (activeIndex - 1 + slides.length) % slides.length;

        if (!shouldRender) return null;

        return (
          <Image
            key={slide.src}
            src={publicPath(slide.src)}
            alt={slide.alt}
            width={1200}
            height={800}
            loading={isActive ? "eager" : "lazy"}
            className={`h-auto w-full ${
              isActive ? "relative z-10 opacity-100" : "absolute left-0 top-0 z-0 opacity-0"
            }`}
            style={{
              transitionProperty: "opacity",
              transitionDuration: `${fadeMs}ms`,
              transitionTimingFunction: "ease-in-out",
            }}
            sizes="(max-width: 768px) 100vw, 672px"
            aria-hidden={!isActive}
          />
        );
      })}
      <p className="sr-only" aria-live="polite">
        Showing {slides[activeIndex]?.alt}
      </p>
    </div>
  );
}
