"use client";

import { ViewTransition } from "react";
import { BackLink } from "@/components/BackLink";
import { CaseStudyTocList } from "@/components/case-studies/CaseStudyTocList";
import { PrimaryNav } from "@/components/PrimaryNav";
import { getCaseStudyToc } from "@/data/caseStudyToc";

type CaseStudySidebarNavProps = {
  slug: string;
};

export function CaseStudySidebarNav({ slug }: CaseStudySidebarNavProps) {
  const items = getCaseStudyToc(slug);

  return (
    <div className="flex h-full flex-col gap-10 overflow-y-auto py-2 pr-2">
      <div className="case-study-nav-collapse space-y-6">
        <div className="rounded-2xl border border-border bg-white/95 p-1.5 backdrop-blur-md">
          <PrimaryNav className="flex items-stretch gap-1.5" alwaysShowIcon />
        </div>
        <BackLink label="Back to home" href="/" transitionTypes={["nav-back"]} />
      </div>

      {items.length > 0 ? (
        <ViewTransition
          enter={{ "nav-forward": "toc-from-left", default: "toc-from-left" }}
          exit={{ "nav-back": "toc-exit-left", default: "none" }}
          default="none"
        >
          <CaseStudyTocList
            slug={slug}
            className="case-study-toc-enter"
          />
        </ViewTransition>
      ) : null}
    </div>
  );
}
