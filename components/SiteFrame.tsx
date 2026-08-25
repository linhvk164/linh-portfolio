"use client";

import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
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

/** Main page column — case study TOC is fixed and does not shift layout. */
export function MainColumn({ children }: { children: ReactNode }) {
  return <div className={mainArea}>{children}</div>;
}
