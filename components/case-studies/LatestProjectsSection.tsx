import { CaseStudyProjectCard } from "@/components/case-studies/CaseStudyProjectCard";
import {
  caseStudyProjects,
  type FeaturedProject,
} from "@/data/featuredProjects";
import { labelCaps } from "@/lib/layout";

export function getOtherCaseStudies(currentSlug: string): FeaturedProject[] {
  return caseStudyProjects.filter((project) => project.slug !== currentSlug);
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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
        {projects.map((project) => (
          <CaseStudyProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
