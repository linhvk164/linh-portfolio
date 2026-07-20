"use client";

import { ArrowUp } from "lucide-react";
import { pillButtonSecondary } from "@/lib/layout";

export function ScrollToTopButton() {
  return (
    <div className="flex justify-end px-4 py-8 md:px-10 md:py-10">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        className={pillButtonSecondary}
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} strokeWidth={2.25} aria-hidden />
        Back to top
      </button>
    </div>
  );
}
