"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { publicPath } from "@/lib/assets";

const LOGO_SRC = "/images/general/logo/linhvk logo white.png";
const SESSION_KEY = "linhvk-opening-seen";
const BOOT_ID = "opening-boot";

type Phase = "enter" | "hold" | "exit" | "done";

function shouldSkipOpening() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  return reducedMotion || sessionStorage.getItem(SESSION_KEY) === "1";
}

function removeBootCover() {
  document.getElementById(BOOT_ID)?.remove();
}

export function OpeningAnimation() {
  const [phase, setPhase] = useState<Phase | null>(null);

  useEffect(() => {
    if (shouldSkipOpening()) {
      removeBootCover();
      setPhase("done");
      return;
    }

    setPhase("enter");

    const timers = [
      window.setTimeout(() => setPhase("hold"), 480),
      window.setTimeout(() => {
        removeBootCover();
        setPhase("exit");
      }, 1100),
      window.setTimeout(() => {
        sessionStorage.setItem(SESSION_KEY, "1");
        setPhase("done");
      }, 1900),
    ];

    return () => {
      timers.forEach(clearTimeout);
      removeBootCover();
    };
  }, []);

  if (!phase || phase === "done") return null;

  return (
    <div
      className={`opening-overlay opening-overlay--${phase}`}
      aria-hidden="true"
    >
      <div className="opening-mark">
        <Image
          src={publicPath(LOGO_SRC)}
          alt=""
          width={120}
          height={32}
          className="opening-logo h-7 w-auto md:h-8"
          priority
        />
        <span className="opening-rule" />
      </div>
    </div>
  );
}
