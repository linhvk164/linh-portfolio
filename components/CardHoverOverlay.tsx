"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
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

export function CardHoverOverlay({
  type,
  children,
  className = "",
}: CardHoverOverlayProps) {
  const labelRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isWebsite = type === "website" || type === "article";

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!isHovering || !labelRef.current) return;
    const { x, y } = position.current;
    labelRef.current.style.transform = `translate(${x}px, ${y}px) translate(0, -50%)`;
  }, [isHovering]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    position.current = { x: event.clientX, y: event.clientY };

    if (labelRef.current) {
      labelRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(0, -50%)`;
    }

    if (!isHovering) setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  const label =
    isHovering && mounted
      ? createPortal(
          <div
            ref={labelRef}
            className="pointer-events-none fixed left-0 top-0 z-[10002] flex items-center gap-2 whitespace-nowrap rounded-full bg-cursor-hover-bg px-4 py-2.5 text-sm font-bold text-white"
            style={{ transform: "translate(-9999px, -9999px)" }}
            aria-hidden
          >
            {isWebsite ? (
              <ArrowUpRightIcon size={16} className="shrink-0" />
            ) : (
              <Eye
                size={16}
                className="shrink-0"
                strokeWidth={2.25}
                aria-hidden
              />
            )}
            {labels[type]}
          </div>,
          document.body,
        )
      : null;

  return (
    <div
      className={`relative overflow-visible ${isHovering ? "cursor-none" : ""} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-full w-full overflow-hidden">{children}</div>
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 z-[1] overflow-hidden rounded-[inherit] bg-[var(--cursor-hover-overlay)]"
          aria-hidden
        />
      )}
      {label}
    </div>
  );
}
