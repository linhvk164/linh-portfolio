import type { CaseStudyTldr as CaseStudyTldrContent } from "@/data/caseStudyTldr";
import type { ReactNode } from "react";

type CaseStudyTldrProps = {
  content: CaseStudyTldrContent;
  meta?: ReactNode;
  media?: ReactNode;
};

export function CaseStudyTldr({ content, meta, media }: CaseStudyTldrProps) {
  return (
    <div className="space-y-3">
      <p className="text-[7px] font-semibold uppercase tracking-[0.01em] text-case-study-body/70">
        TL;DR
      </p>
      <p className="max-w-3xl text-base leading-8 text-case-study-body">
        {content.summary}
      </p>
      {media ? <div className="pt-3">{media}</div> : null}
      {meta}
    </div>
  );
}
