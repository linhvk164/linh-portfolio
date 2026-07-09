import Link from "next/link";
import { CoverMedia } from "@/components/CoverMedia";
import { PlaceholderCover } from "@/components/PlaceholderCover";
import type { FeaturedProject } from "@/data/featuredProjects";
import { gridCardShell, pillTag } from "@/lib/layout";

export function CaseStudyProjectCard({ project }: { project: FeaturedProject }) {
  const hasCover = project.coverVideo || project.coverImage;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group min-w-0 text-left"
    >
      <div className={gridCardShell}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-border bg-bg transition-transform duration-300 ease-out group-hover:scale-[1.02]">
          {hasCover ? (
            <CoverMedia
              alt={project.title}
              coverImage={project.coverImage}
              coverVideo={project.coverVideo}
              className={`h-full w-full bg-bg transition-transform duration-300 ease-out group-hover:scale-[1.03] ${
                project.coverFit === "contain"
                  ? "object-contain object-center"
                  : "object-cover object-center"
              }`}
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
            />
          ) : (
            <PlaceholderCover accent={project.accent} bordered={false} fill />
          )}
        </div>
      </div>
      <p className="article-card-title mt-2 capitalize text-ink">
        {project.title}
      </p>
      <span className={`mt-2 inline-flex ${pillTag}`}>{project.year}</span>
    </Link>
  );
}
