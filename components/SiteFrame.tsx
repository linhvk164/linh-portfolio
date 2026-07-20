"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isExplore = pathname.startsWith("/explore");

  return (
    <div
      className={`min-h-screen pb-[calc(4.25rem+env(safe-area-inset-bottom))] lg:pb-0 ${
        isExplore ? "explore-page" : "bg-bg"
      }`}
    >
      {children}
    </div>
  );
}
