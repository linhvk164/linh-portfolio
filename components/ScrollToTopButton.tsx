"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SHOW_AFTER_PX = 320;
const FOOTER_GAP_PX = 16;
/** Mobile clearance above bottom nav: 4.75rem ≈ 76px */
const MOBILE_BASE_BOTTOM_PX = 76;
const DESKTOP_BASE_BOTTOM_PX = 16;

function getBaseBottom() {
  return window.matchMedia("(min-width: 1024px)").matches
    ? DESKTOP_BASE_BOTTOM_PX
    : MOBILE_BASE_BOTTOM_PX;
}

/**
 * Fixed at the viewport bottom while scrolling. When the footer arrives,
 * switches to absolute and stays parked just above it — no fluid tracking.
 */
export function ScrollToTopButton() {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [parked, setParked] = useState(false);
  const [baseBottom, setBaseBottom] = useState(DESKTOP_BASE_BOTTOM_PX);

  useEffect(() => {
    const update = () => {
      const base = getBaseBottom();
      setBaseBottom(base);

      const anchor = anchorRef.current;
      const scrolledEnough = window.scrollY > SHOW_AFTER_PX;

      if (!anchor) {
        setParked(false);
        setVisible(scrolledEnough);
        document.documentElement.style.setProperty(
          "--scroll-top-bottom",
          `${base}px`,
        );
        return;
      }

      const anchorTop = anchor.getBoundingClientRect().top;
      // Park when footer reaches the resting button; absolute bottom:GAP keeps it flush
      const shouldPark =
        anchorTop <= window.innerHeight - base + FOOTER_GAP_PX;
      setParked(shouldPark);
      setVisible(scrolledEnough);

      // Reel / other UI keep the resting viewport offset (not the parked absolute gap)
      document.documentElement.style.setProperty(
        "--scroll-top-bottom",
        `${base}px`,
      );
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.documentElement.style.setProperty("--scroll-top-bottom", "0px");
    };
  }, []);

  return (
    <div
      ref={anchorRef}
      className="pointer-events-none relative h-0 w-full"
      aria-hidden={!visible}
    >
      {visible ? (
        <button
          type="button"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          style={
            parked
              ? { position: "absolute", right: 16, bottom: FOOTER_GAP_PX }
              : { position: "fixed", right: 16, bottom: baseBottom }
          }
          className="pointer-events-auto z-[90] inline-flex h-12 items-center gap-2 rounded-full border border-[#d0d0d0] bg-white px-4 text-sm font-medium text-ink shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-colors duration-200 hover:border-ink-soft hover:bg-[#f7f7f7]"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} strokeWidth={2.25} aria-hidden />
          Back to top
        </button>
      ) : null}
    </div>
  );
}
