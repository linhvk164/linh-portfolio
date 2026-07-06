import Link from "next/link";
import { CardHoverOverlay } from "@/components/CardHoverOverlay";
import { CoverMedia } from "@/components/CoverMedia";
import { ViewWebsiteButton } from "@/components/ViewWebsiteButton";
import type { FeaturedProject } from "@/data/featuredProjects";
import { PlaceholderCover } from "@/components/PlaceholderCover";
import { ProjectTags } from "@/components/ProjectTags";
import { ProjectTitleRow } from "@/components/ProjectTitleRow";
import { gridCardShell } from "@/lib/layout";

type ProjectGridCardProps = {
  project: FeaturedProject;
  index: number;
};

function ProjectTextContent({ project }: { project: FeaturedProject }) {
  return (
    <div className="flex min-w-0 w-full flex-col justify-center text-left lg:flex-[0.7]">
      <ProjectTitleRow {...project} />
      <ProjectTags tags={project.tagList} />
      <p className="mt-4 text-base leading-relaxed text-ink-muted">
        {project.overview}
      </p>
      {project.externalUrl && (
        <ViewWebsiteButton href={project.externalUrl} className="mt-5 self-start" />
      )}
    </div>
  );
}

const coverAspectClass = {
  "3/2": "aspect-[3/2]",
  "16/10": "aspect-[16/10]",
} as const;

function ProjectMedia({
  project,
  href,
}: {
  project: FeaturedProject;
  href: string;
}) {
  const hasCover = project.coverVideo || project.coverImage;
  const aspect = coverAspectClass[project.coverAspect ?? "3/2"];
  const objectFit =
    project.coverFit === "contain" ? "object-contain" : "object-cover";

  return (
    <Link
      href={href}
      className="group block w-full min-w-0 lg:flex-[1.2] lg:max-w-[58%]"
    >
      <div className={gridCardShell}>
        <CardHoverOverlay
          type={project.hoverType}
          className={`${aspect} rounded-[var(--radius-card)]`}
        >
          {hasCover ? (
            <CoverMedia
              alt={project.title}
              coverImage={project.coverImage}
              coverVideo={project.coverVideo}
              className={`h-full w-full ${objectFit} object-center bg-bg transition-transform duration-200 group-hover:scale-[1.03]`}
              sizes="(max-width: 768px) 100vw, 480px"
            />
          ) : (
            <PlaceholderCover accent={project.accent} bordered={false} fill />
          )}
        </CardHoverOverlay>
      </div>
    </Link>
  );
}

export function ProjectGridCard({ project, index }: ProjectGridCardProps) {
  const projectHref = `/projects/${project.slug}`;
  const imageFirst = index % 2 === 1;

  return (
    <article
      className={`flex w-full flex-col items-stretch gap-8 ${
        imageFirst ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:items-center`}
    >
      <ProjectTextContent project={project} />
      <ProjectMedia project={project} href={projectHref} />
    </article>
  );
}
