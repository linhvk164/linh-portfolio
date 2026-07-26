"use client";

import { useEffect, useState } from "react";
import {
  HOME_COVERS_RESET_EVENT,
  HOME_COVERS_SETTLED_EVENT,
  peekHomeCoversSettled,
} from "@/lib/homeFlight";

function useHeroCompactPadding() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const sync = () => {
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      setCompact(desktop && peekHomeCoversSettled());
    };

    sync();
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    desktopQuery.addEventListener("change", sync);
    window.addEventListener(HOME_COVERS_SETTLED_EVENT, sync);
    window.addEventListener(HOME_COVERS_RESET_EVENT, sync);
    return () => {
      desktopQuery.removeEventListener("change", sync);
      window.removeEventListener(HOME_COVERS_SETTLED_EVENT, sync);
      window.removeEventListener(HOME_COVERS_RESET_EVENT, sync);
    };
  }, []);

  return compact;
}

export function HomeIntro() {
  const compact = useHeroCompactPadding();

  return (
    <section
      aria-label="Introduction"
      className={`home-intro-hero flex w-full flex-col items-start gap-4 text-left ${
        compact ? "is-compact" : ""
      }`}
    >
      <p className="home-intro-lead home-intro-enter-lead">Hi, I'm Linh 👋</p>
      <p className="home-intro-lead home-intro-enter-lead">
        <strong>UX/UI + Product Designer</strong> who simplifies complex civic and educational processes {" "}
        <strong>into intuitive and meaningful 0→1 digital tools </strong>
        that provide <strong>measurable value</strong>.
      </p>
    </section>
  );
}
