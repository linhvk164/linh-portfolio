"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    function onMove(event: MouseEvent) {
      dot!.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
      setVisible(true);
    }

    function onLeave() {
      setVisible(false);
    }

    function onEnter() {
      setVisible(true);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className={`custom-cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] transition-opacity duration-150 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
