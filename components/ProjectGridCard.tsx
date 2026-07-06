import Link from "next/link";
import { CardHoverOverlay } from "@/components/CardHoverOverlay";
import { CoverMedia } from "@/components/CoverMedia";
import type { FeaturedProject } from "@/data/featuredProjects";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { PlaceholderCover } from "@/components/PlaceholderCover";
import { ProjectTags } from "@/components/ProjectTags";
import { ProjectTitleRow } from "@/components/ProjectTitleRow";
import { gridCardShell, pillButton } from "@/lib/layout";

type ProjectGridCardProps = {
  project: FeaturedProject;
  index: number;
};

function ViewWebsiteButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`mt-5 self-center ${pillButton} md:self-start`}
    >
      View website
      <ArrowUpRightIcon size={14} />
    </a>
  );
}

function ProjectTextContent({ project }: { project: FeaturedProject }) {
  return (
    <div className="flex min-w-0 flex-[0.7] flex-col justify-center text-center md:text-left">
      <ProjectTitleRow {...project} />
      <ProjectTags tags={project.tagList} />
      <p className="mt-4 text-base leading-relaxed text-ink-muted">
        {project.overview}
      </p>
      {project.externalUrl && (
        <ViewWebsiteButton href={project.externalUrl} />
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
      className="group block w-full min-w-0 flex-[1.2] md:max-w-[58%]"
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
      className={`flex w-full flex-col items-center gap-8 md:gap-8 ${
        imageFirst ? "md:flex-row-reverse" : "md:flex-row"
      } md:items-center`}
    >
      <ProjectTextContent project={project} />
      <ProjectMedia project={project} href={projectHref} />
    </article>
  );
}
