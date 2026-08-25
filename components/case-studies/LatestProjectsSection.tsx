import { CaseStudyProjectCard } from "@/components/case-studies/CaseStudyProjectCard";
import {
  caseStudyProjects,
  type FeaturedProject,
} from "@/data/featuredProjects";
import { labelCaps } from "@/lib/layout";

/** Case studies with full write-ups ready to browse. */
const readableCaseStudySlugs = new Set([
  "folio",
  "un-habitat-urban-data",
  "un-habitat-admin",
  "lofu",
]);

export function getOtherCaseStudies(currentSlug: string): FeaturedProject[] {
  return caseStudyProjects.filter(
    (project) =>
      project.slug !== currentSlug && readableCaseStudySlugs.has(project.slug),
  );
}

type LatestProjectsSectionProps = {
  currentSlug: string;
};

export function LatestProjectsSection({
  currentSlug,
}: LatestProjectsSectionProps) {
  const projects = getOtherCaseStudies(currentSlug);

  if (projects.length === 0) return null;

  return (
    <section className="mt-16 border-t border-border pt-12 md:mt-20 md:pt-16">
      <p className={`${labelCaps} mb-5 text-case-study-body/70`}>
        Latest Projects
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <CaseStudyProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
