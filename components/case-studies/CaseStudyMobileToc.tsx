import { CaseStudyTocList } from "@/components/case-studies/CaseStudyTocList";

/** In-page TOC for breakpoints where the left side panel is hidden. */
export function CaseStudyMobileToc({ slug }: { slug: string }) {
  return (
    <div className="lg:hidden">
      <p className="mb-3 text-[7px] font-semibold uppercase tracking-[0.01em] text-case-study-body/70">
        Table of contents
      </p>
      <CaseStudyTocList slug={slug} />
    </div>
  );
}
