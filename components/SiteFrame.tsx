"use client";

import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { mainArea } from "@/lib/layout";

export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isExplore =
    pathname.startsWith("/explore") || pathname.startsWith("/side-quests");
  const isDesignStudio = pathname.startsWith("/designstudio");

  useEffect(() => {
    document.body.classList.toggle("explore-page", isExplore);
    return () => {
      document.body.classList.remove("explore-page");
    };
  }, [isExplore]);

  return (
    <div
      className={`min-h-screen ${
        isDesignStudio
          ? ""
          : "pb-[calc(4.25rem+env(safe-area-inset-bottom))] lg:pb-0"
      } ${isExplore ? "explore-page" : "bg-bg"}`}
    >
      {children}
    </div>
  );
}

/** Offsets main content for the desktop sidebar, except on Design Studio. */
export function MainColumn({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isDesignStudio = pathname.startsWith("/designstudio");

  return (
    <div className={isDesignStudio ? "" : "lg:pl-[320px]"}>
      <div className={mainArea}>{children}</div>
    </div>
  );
}
