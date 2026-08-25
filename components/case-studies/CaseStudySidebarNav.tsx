"use client";

import { BackLink } from "@/components/BackLink";
import { CaseStudyTocList } from "@/components/case-studies/CaseStudyTocList";
import { getCaseStudyToc } from "@/data/caseStudyToc";

type CaseStudySidebarNavProps = {
  slug: string;
};

export function CaseStudySidebarNav({ slug }: CaseStudySidebarNavProps) {
  const items = getCaseStudyToc(slug);

  return (
    <div className="flex h-full flex-col gap-8 overflow-y-auto pt-10 pb-2">
      <BackLink label="Back to home" href="/" />

      {items.length > 0 ? <CaseStudyTocList slug={slug} /> : null}
    </div>
  );
}
