import {
  CaseStudySection,
  CaseStudySections,
} from "@/components/case-studies/CaseStudySection";
import type { CaseStudyTldr as CaseStudyTldrContent } from "@/data/caseStudyTldr";

export function CaseStudyTldr({ content }: { content: CaseStudyTldrContent }) {
  return (
    <CaseStudySections>
      <CaseStudySection eyebrow="Problem" title="Problem">
        <p>{content.problem}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow="Solution" title="Solution">
        <p>{content.solution}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow="Outcome" title="Outcome">
        <p>{content.outcome}</p>
      </CaseStudySection>
    </CaseStudySections>
  );
}
