"use client";

import { useEffect, useRef, useState } from "react";

const CURSOR_EASE = 0.14;
const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, summary, label[for], .interactive-link, .interactive-card';

export function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const outer = outerRef.current;
    if (!outer) return;

    function setPosition(x: number, y: number) {
      outer!.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    }

    function tick() {
      const ease = reducedMotion.current ? 1 : CURSOR_EASE;
      current.current.x += (target.current.x - current.current.x) * ease;
      current.current.y += (target.current.y - current.current.y) * ease;
      setPosition(current.current.x, current.current.y);

      const settled =
        Math.abs(target.current.x - current.current.x) < 0.5 &&
        Math.abs(target.current.y - current.current.y) < 0.5;

      if (settled) {
        setPosition(target.current.x, target.current.y);
        current.current = { ...target.current };
        rafId.current = null;
        return;
      }

      rafId.current = requestAnimationFrame(tick);
    }

    function startLoop() {
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(tick);
      }
    }

    function onMove(event: MouseEvent) {
      target.current = { x: event.clientX, y: event.clientY };
      setVisible(true);
      startLoop();
    }

    function onLeave() {
      setVisible(false);
    }

    function onEnter() {
      setVisible(true);
    }

    function onPointerOver(event: PointerEvent) {
      const el = (event.target as Element).closest(INTERACTIVE_SELECTOR);
      setInteractive(Boolean(el));
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    document.addEventListener("pointerover", onPointerOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("pointerover", onPointerOver);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div
      ref={outerRef}
      aria-hidden
      className={`custom-cursor pointer-events-none fixed left-0 top-0 z-[10001] transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`custom-cursor-dot transition-[transform,opacity] duration-300 ease-out ${
          interactive ? "custom-cursor-dot--interactive" : ""
        }`}
      />
    </div>
  );
}
