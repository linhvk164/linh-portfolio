"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 320;

/** Fixed bottom-right; Folio play/reel sits above this when present. */
export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      className="fixed right-4 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-[90] inline-flex h-12 items-center gap-2 rounded-full border border-[#d0d0d0] bg-white px-4 text-sm font-medium text-ink shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-colors duration-200 hover:border-ink-soft hover:bg-[#f7f7f7] lg:bottom-4"
      aria-label="Scroll to top"
    >
      <ArrowUp size={16} strokeWidth={2.25} aria-hidden />
      Back to top
    </button>
  );
}
