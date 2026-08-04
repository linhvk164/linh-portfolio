"use client";

import { ViewTransition } from "react";
import { BackLink } from "@/components/BackLink";
import { CaseStudyTocList } from "@/components/case-studies/CaseStudyTocList";
import { getCaseStudyToc } from "@/data/caseStudyToc";

type CaseStudySidebarNavProps = {
  slug: string;
};

export function CaseStudySidebarNav({ slug }: CaseStudySidebarNavProps) {
  const items = getCaseStudyToc(slug);

  return (
    <div className="flex h-full flex-col gap-10 overflow-y-auto pt-10 pr-2 pb-2">
      <div className="case-study-nav-collapse">
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
