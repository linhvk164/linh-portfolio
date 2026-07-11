import type { CaseStudyTldr as CaseStudyTldrContent } from "@/data/caseStudyTldr";

export function CaseStudyTldr({ content }: { content: CaseStudyTldrContent }) {
  return (
    <p className="max-w-3xl text-base leading-8 text-case-study-body">
      {content.summary}
    </p>
  );
}
