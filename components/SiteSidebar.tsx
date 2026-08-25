"use client";

import { usePathname } from "next/navigation";
import { CaseStudySidebarNav } from "@/components/case-studies/CaseStudySidebarNav";
import { caseStudyTocGutter, caseStudyTocWidth } from "@/lib/layout";

function useCaseStudySlug(): string | null {
  const pathname = usePathname();
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
  return match?.[1] ?? null;
}

/** Case study TOC — centered in the left gutter beside the reading column. */
export function SiteSidebar() {
  const caseStudySlug = useCaseStudySlug();

  if (!caseStudySlug) return null;

  return (
    <aside
      className={`fixed top-14 left-0 z-40 hidden h-[calc(100vh-3.5rem)] flex-col items-center md:top-16 md:h-[calc(100vh-4rem)] lg:flex ${caseStudyTocGutter}`}
      aria-label="Case study navigation"
    >
      <div className={`${caseStudyTocWidth} h-full min-h-0 shrink-0`}>
        <CaseStudySidebarNav slug={caseStudySlug} />
      </div>
    </aside>
  );
}
