"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { CardHoverOverlay } from "@/components/CardHoverOverlay";
import { FunModal } from "@/components/FunModal";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  FUN_PLACEHOLDER_IMAGE,
  homeDiscoverItems,
  type FunItem,
} from "@/data/fun";
import { publicPath } from "@/lib/assets";
import { labelCaps } from "@/lib/layout";

const sectionHeadingClassName =
  "scroll-mt-28 text-xl font-semibold tracking-tight text-ink md:scroll-mt-24 md:text-2xl";

const SCROLL_SPEED = 0.45;

function DiscoverCard({
  item,
  onSelect,
}: {
  item: FunItem;
  onSelect: (item: FunItem) => void;
}) {
  const thumb = item.coverImage ?? FUN_PLACEHOLDER_IMAGE;

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="group w-[14.5rem] shrink-0 snap-start text-left sm:w-[16.5rem] md:w-[18rem]"
      aria-label={`View project: ${item.name}`}
    >
      <CardHoverOverlay type="project">
        <div className="overflow-hidden bg-[#f3f3f3]">
          {item.coverVideo ? (
            <video
              src={publicPath(item.coverVideo)}
              poster={publicPath(thumb)}
              autoPlay
              muted
              loop
              playsInline
              className="h-auto w-full transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <Image
              src={publicPath(thumb)}
              alt={item.name}
              width={800}
              height={800}
              className="h-auto w-full transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 232px, (max-width: 768px) 264px, 288px"
            />
          )}
        </div>
      </CardHoverOverlay>
      <p className="mt-3 text-sm font-medium tracking-tight text-ink md:text-base">
        {item.context}
      </p>
    </button>
  );
}

function DiscoverRow({
  items,
  ariaHidden = false,
  onSelect,
}: {
  items: FunItem[];
  ariaHidden?: boolean;
  onSelect: (item: FunItem) => void;
}) {
  return (
    <div
      className="flex shrink-0 items-start gap-4 pr-4 sm:gap-5 sm:pr-5 md:gap-6 md:pr-6"
      aria-hidden={ariaHidden}
    >
      {items.map((item, index) => (
        <DiscoverCard
          key={`${ariaHidden ? "dup" : "main"}-${item.id}-${index}`}
          item={item}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export function HomeDiscoverCarousel() {
  const [activeItem, setActiveItem] = useState<FunItem | null>(null);
  const [mounted, setMounted] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let frame = 0;
    let resumeTimer = 0;

    const tick = () => {
      if (!pausedRef.current) {
        scroller.scrollLeft += SCROLL_SPEED;
        const loopAt = scroller.scrollWidth / 2;
        if (loopAt > 0 && scroller.scrollLeft >= loopAt) {
          scroller.scrollLeft -= loopAt;
        }
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    const pause = () => {
      pausedRef.current = true;
      window.clearTimeout(resumeTimer);
    };
    const resume = () => {
      window.clearTimeout(resumeTimer);
      pausedRef.current = false;
    };
    const pauseTemporarily = () => {
      pausedRef.current = true;
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        pausedRef.current = false;
      }, 1800);
    };

    scroller.addEventListener("pointerdown", pause);
    scroller.addEventListener("touchstart", pause, { passive: true });
    scroller.addEventListener("wheel", pauseTemporarily, { passive: true });
    scroller.addEventListener("mouseenter", pause);
    scroller.addEventListener("mouseleave", resume);
    scroller.addEventListener("pointerup", resume);
    scroller.addEventListener("pointercancel", resume);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(resumeTimer);
      scroller.removeEventListener("pointerdown", pause);
      scroller.removeEventListener("touchstart", pause);
      scroller.removeEventListener("wheel", pauseTemporarily);
      scroller.removeEventListener("mouseenter", pause);
      scroller.removeEventListener("mouseleave", resume);
      scroller.removeEventListener("pointerup", resume);
      scroller.removeEventListener("pointercancel", resume);
    };
  }, []);

  return (
    <>
      <section
        id="discover"
        aria-labelledby="discover-more"
        className="home-discover-grid relative scroll-mt-28 py-16 md:scroll-mt-24 md:py-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-bg to-transparent md:h-28"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-bg to-transparent md:h-28"
        />

        <div className="relative z-[2] mx-auto w-full max-w-5xl px-4 md:px-5 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
              <div className="min-w-0 max-w-3xl">
                <p className={`${labelCaps} text-ink-soft`}>Discover more</p>
                <h2
                  id="discover-more"
                  className={`${sectionHeadingClassName} mt-2`}
                >
                  <span className="block">
                    Vibe-coding, mix-media, music production,
                  </span>
                  <span className="block">
                    and other projects I do in my free time
                  </span>
                </h2>
              </div>
              <p
                className="mb-0.5 hidden shrink-0 items-center gap-1.5 text-sm text-ink-soft sm:inline-flex"
                aria-hidden
              >
                scroll horizontally
                <ArrowRight size={16} strokeWidth={2} />
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div
          ref={scrollerRef}
          className="relative z-[2] mt-8 overflow-x-auto overflow-y-hidden overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] md:mt-10 [&::-webkit-scrollbar]:hidden"
          aria-label="Side projects carousel"
        >
          <div className="flex w-max items-start">
            <DiscoverRow items={homeDiscoverItems} onSelect={setActiveItem} />
            <DiscoverRow
              items={homeDiscoverItems}
              ariaHidden
              onSelect={setActiveItem}
            />
          </div>
        </div>
      </section>

      {mounted
        ? createPortal(
            <FunModal item={activeItem} onClose={() => setActiveItem(null)} />,
            document.body,
          )
        : null}
    </>
  );
}
