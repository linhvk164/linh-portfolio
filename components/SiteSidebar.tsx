"use client";

import { usePathname } from "next/navigation";
import { CaseStudySidebarNav } from "@/components/case-studies/CaseStudySidebarNav";

function useCaseStudySlug(): string | null {
  const pathname = usePathname();
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
  return match?.[1] ?? null;
}

/** Case study TOC only — profile sidebar / bottom nav removed in favor of SiteTopNav. */
export function SiteSidebar() {
  const caseStudySlug = useCaseStudySlug();

  if (!caseStudySlug) return null;

  return (
    <aside
      className="fixed top-14 left-0 z-40 hidden h-[calc(100vh-3.5rem)] w-[320px] flex-col p-4 md:top-16 md:h-[calc(100vh-4rem)] lg:flex"
      aria-label="Case study navigation"
    >
      <div className="h-full min-h-0">
        <CaseStudySidebarNav slug={caseStudySlug} />
      </div>
    </aside>
  );
}
