"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { FunItem } from "@/data/fun";
import { publicPath } from "@/lib/assets";
import { labelCaps } from "@/lib/layout";

type FunModalProps = {
  item: FunItem | null;
  onClose: () => void;
};

export function FunModal({ item, onClose }: FunModalProps) {
  useEffect(() => {
    if (!item) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button
        type="button"
        aria-label="Close dialog"
        className="about-modal-backdrop absolute inset-0 bg-ink/40"
        onClick={onClose}
      />

      <div className="about-modal-panel relative z-10 flex max-h-[min(90vh,860px)] w-full max-w-3xl flex-col overflow-hidden rounded-[var(--radius-card)] bg-surface">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-bg text-ink transition-all duration-200 hover:scale-105 hover:bg-surface-muted md:top-7 md:right-7"
        >
          <X size={18} strokeWidth={2} />
        </button>

        <div className="overflow-y-auto px-8 py-10 md:px-12 md:py-12">
          <p className={`${labelCaps} text-case-study-body/70`}>{item.category}</p>
          <h2 className="mt-2 text-2xl font-medium tracking-tight text-ink md:text-3xl">
            {item.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-case-study-body md:text-lg">
            {item.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {item.images.map((src, index) => (
              <div
                key={`${item.id}-${index}`}
                className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-bg"
              >
                <Image
                  src={publicPath(src)}
                  alt={`${item.title} image ${index + 1}`}
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
