"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import type { ProjectHoverType } from "@/data/featuredProjects";
import { Eye } from "lucide-react";

export type CardHoverVariant = ProjectHoverType | "project" | "article";

type CardHoverOverlayProps = {
  type: CardHoverVariant;
  children: ReactNode;
  className?: string;
};

const labels: Record<CardHoverVariant, string> = {
  website: "View website",
  "case-study": "View case study",
  project: "View project",
  article: "Read article",
};

const DRAG_EASE = 0.16;

export function CardHoverOverlay({
  type,
  children,
  className = "",
}: CardHoverOverlayProps) {
  const labelRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const hovering = useRef(false);
  const [isHovering, setIsHovering] = useState(false);
  const isWebsite = type === "website" || type === "article";

  function runDragLoop() {
    current.current.x += (target.current.x - current.current.x) * DRAG_EASE;
    current.current.y += (target.current.y - current.current.y) * DRAG_EASE;

    if (labelRef.current) {
      labelRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(0, -50%)`;
    }

    if (hovering.current) {
      rafId.current = requestAnimationFrame(runDragLoop);
    }
  }

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    target.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    if (!hovering.current) {
      hovering.current = true;
      current.current = { ...target.current };
      setIsHovering(true);

      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(0, -50%)`;
      }

      rafId.current = requestAnimationFrame(runDragLoop);
    }
  }

  function handleMouseLeave() {
    hovering.current = false;
    setIsHovering(false);

    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  }

  return (
    <div
      className={`relative overflow-visible ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-full w-full overflow-hidden">{children}</div>
      {isHovering && (
        <>
          <div
            className="pointer-events-none absolute inset-0 z-[1] overflow-hidden rounded-[inherit] bg-[var(--cursor-hover-overlay)] transition-opacity duration-200"
            aria-hidden
          />
          <div
            ref={labelRef}
            className="pointer-events-none absolute left-0 top-0 z-10 flex items-center gap-2 whitespace-nowrap rounded-full bg-cursor-hover-bg px-4 py-2.5 text-sm font-bold text-white will-change-transform"
            style={{ transform: "translate(0px, 0px) translate(0, -50%)" }}
          >
            {labels[type]}
            {isWebsite ? (
              <ArrowUpRightIcon size={16} className="shrink-0" />
            ) : (
              <Eye size={16} className="shrink-0" strokeWidth={2.25} aria-hidden />
            )}
          </div>
        </>
      )}
    </div>
  );
}
