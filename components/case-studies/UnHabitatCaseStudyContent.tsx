import {
  CaseStudyList,
  CaseStudySection,
} from "@/components/case-studies/CaseStudySection";
import type { UnHabitatCaseStudy } from "@/data/unHabitatCaseStudies";

type UnHabitatCaseStudyContentProps = {
  study: UnHabitatCaseStudy;
};

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
    </>
  );
}

export function UnHabitatCaseStudyContent({
  study,
}: UnHabitatCaseStudyContentProps) {
  const { sections } = study;

  return (
    <div className="space-y-12">
      <p className="text-base leading-relaxed text-ink-muted">{study.summary}</p>

      <CaseStudySection title="Overview">
        <Paragraphs paragraphs={sections.overview} />
      </CaseStudySection>

      <CaseStudySection title="The challenge">
        <Paragraphs paragraphs={sections.challenge} />
      </CaseStudySection>

      <CaseStudySection title="My process">
        <Paragraphs paragraphs={sections.process} />
      </CaseStudySection>

      <CaseStudySection title="UX decisions">
        <CaseStudyList items={sections.uxDecisions} />
      </CaseStudySection>

      <CaseStudySection title="Reflection">
        <Paragraphs paragraphs={sections.reflection} />
      </CaseStudySection>
    </div>
  );
}
