"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { ToolStackMarquee } from "@/components/ToolStackMarquee";
import { site } from "@/data/site";
import { publicPath } from "@/lib/assets";

const PROFILE_IMAGE = "/images/general/Profile pic.JPG";

type AboutModalProps = {
  open: boolean;
  onClose: () => void;
};

export function AboutModal({ open, onClose }: AboutModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="About Linh Khuong"
    >
      <button
        type="button"
        aria-label="Close about dialog"
        className="about-modal-backdrop absolute inset-0 bg-ink/40"
        onClick={onClose}
      />

      <div className="about-modal-panel relative z-10 flex max-h-[min(90vh,860px)] w-full max-w-5xl flex-col overflow-hidden rounded-[var(--radius-card)] bg-surface">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-bg text-ink transition-all duration-200 hover:scale-105 hover:bg-surface-muted md:top-7 md:right-7"
        >
          <X size={18} strokeWidth={2} />
        </button>

        <div className="overflow-y-auto px-8 py-10 md:px-14 md:py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
            <div className="mx-auto w-full max-w-[240px] shrink-0 md:mx-0 md:max-w-[280px] md:flex-[0.9]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-card)] border border-border bg-bg">
                <Image
                  src={publicPath(PROFILE_IMAGE)}
                  alt="Linh Khuong"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 240px, 280px"
                />
              </div>
            </div>

            <div className="min-w-0 flex-1 space-y-5 pr-8 text-base leading-relaxed text-ink-muted md:space-y-6 md:text-lg">
              {site.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <ToolStackMarquee />
        </div>
      </div>
    </div>
  );
}
