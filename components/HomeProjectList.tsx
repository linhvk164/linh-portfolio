"use client";

import { ProjectGridCard } from "@/components/ProjectGridCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { homeFeaturedProjects } from "@/data/featuredProjects";

export function HomeProjectList() {
  return (
    <>
      {homeFeaturedProjects.map((project, index) => (
        <ScrollReveal key={project.slug} className="w-full" delay={index * 120}>
          <ProjectGridCard index={index} project={project} />
        </ScrollReveal>
      ))}
    </>
  );
}
