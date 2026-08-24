"use client";

import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { isFullBleedPage } from "@/lib/fullBleed";
import { mainArea } from "@/lib/layout";

export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isExplore =
    pathname.startsWith("/explore") || pathname.startsWith("/side-quests");

  useEffect(() => {
    document.body.classList.toggle("explore-page", isExplore);
    return () => {
      document.body.classList.remove("explore-page");
    };
  }, [isExplore]);

  return (
    <div className={`min-h-screen ${isExplore ? "explore-page" : "bg-bg"}`}>
      {children}
    </div>
  );
}

/** Offsets main content for the case study TOC panel. */
export function MainColumn({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const fullBleed = isFullBleedPage(pathname);

  return (
    <div className={fullBleed ? "" : "lg:pl-[320px]"}>
      <div className={mainArea}>{children}</div>
    </div>
  );
}
