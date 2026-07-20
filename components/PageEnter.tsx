"use client";

import { type ReactNode } from "react";

type PageEnterProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms for cascading children with .page-enter-item */
  delay?: number;
};

/** Fades and lifts page content in on mount. */
export function PageEnter({
  children,
  className = "",
  delay = 0,
}: PageEnterProps) {
  return (
    <div
      className={`page-enter ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
