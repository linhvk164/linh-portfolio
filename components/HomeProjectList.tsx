"use client";

import { ProjectGridCard } from "@/components/ProjectGridCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  homeFeaturedProjects,
  type FeaturedProject,
} from "@/data/featuredProjects";

const leftColumnSlugs = [
  "folio",
  "un-habitat-admin",
  "lofu",
] as const;

const rightColumnSlugs = [
  "un-habitat-urban-data",
  "qol-hackathon",
  "un-habitat-design-system",
] as const;

const mobileOrderSlugs = [
  "folio",
  "un-habitat-urban-data",
  "un-habitat-admin",
  "qol-hackathon",
  "un-habitat-design-system",
  "lofu",
  "chordio",
] as const;

function projectsBySlugs(slugs: readonly string[]): FeaturedProject[] {
  return slugs
    .map((slug) => homeFeaturedProjects.find((project) => project.slug === slug))
    .filter((project): project is FeaturedProject => Boolean(project));
}

function Column({
  projects,
  startDelay = 0,
  className = "",
}: {
  projects: FeaturedProject[];
  startDelay?: number;
  className?: string;
}) {
  return (
    <div className={`flex min-w-0 flex-col gap-5 sm:gap-6 md:gap-8 ${className}`}>
      {projects.map((project, index) => (
        <ScrollReveal
          key={project.slug}
          className="w-full min-w-0"
          delay={startDelay + index * 80}
        >
          <ProjectGridCard project={project} />
        </ScrollReveal>
      ))}
    </div>
  );
}

export function HomeProjectList() {
  const leftProjects = projectsBySlugs(leftColumnSlugs);
  const rightProjects = projectsBySlugs(rightColumnSlugs);
  const placed = new Set<string>([...leftColumnSlugs, ...rightColumnSlugs]);
  const overflowProjects = homeFeaturedProjects.filter(
    (project) => !placed.has(project.slug),
  );
  const mobileProjects = projectsBySlugs(mobileOrderSlugs);

  return (
    <>
      <Column projects={mobileProjects} className="sm:hidden" />
      <div className="hidden w-full grid-cols-1 items-start gap-5 sm:grid sm:grid-cols-2 sm:gap-x-5 md:gap-x-6">
        <Column projects={[...leftProjects, ...overflowProjects]} />
        <Column projects={rightProjects} startDelay={40} />
      </div>
    </>
  );
}
