"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SHOW_AFTER_PX = 320;
const FOOTER_GAP_PX = 16;
const BASE_BOTTOM_PX = 16;

/**
 * Fixed at the viewport bottom while scrolling. When the footer arrives,
 * switches to absolute and stays parked just above it — no fluid tracking.
 */
export function ScrollToTopButton() {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [parked, setParked] = useState(false);

  useEffect(() => {
    const update = () => {
      const anchor = anchorRef.current;
      const scrolledEnough = window.scrollY > SHOW_AFTER_PX;

      if (!anchor) {
        setParked(false);
        setVisible(scrolledEnough);
        document.documentElement.style.setProperty(
          "--scroll-top-bottom",
          `${BASE_BOTTOM_PX}px`,
        );
        return;
      }

      const anchorTop = anchor.getBoundingClientRect().top;
      const shouldPark =
        anchorTop <= window.innerHeight - BASE_BOTTOM_PX + FOOTER_GAP_PX;
      setParked(shouldPark);
      setVisible(scrolledEnough);

      document.documentElement.style.setProperty(
        "--scroll-top-bottom",
        `${BASE_BOTTOM_PX}px`,
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
              : { position: "fixed", right: 16, bottom: BASE_BOTTOM_PX }
          }
          className="pointer-events-auto z-[90] inline-flex h-12 items-center gap-2 rounded-full border border-[#d0d0d0] bg-white px-4 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink-soft hover:bg-[#f7f7f7]"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} strokeWidth={2.25} aria-hidden />
          Back to top
        </button>
      ) : null}
    </div>
  );
}
