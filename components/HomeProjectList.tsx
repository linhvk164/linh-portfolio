"use client";

import { ProjectGridCard } from "@/components/ProjectGridCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { homeFeaturedProjects } from "@/data/featuredProjects";

export function HomeProjectList() {
  return (
    <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 md:gap-x-8 md:gap-y-12">
      {homeFeaturedProjects.map((project, index) => (
        <ScrollReveal key={project.slug} className="w-full min-w-0" delay={index * 80}>
          <ProjectGridCard project={project} />
        </ScrollReveal>
      ))}
    </div>
  );
}
