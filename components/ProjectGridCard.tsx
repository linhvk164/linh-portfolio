import Link from "next/link";
import { CardHoverOverlay } from "@/components/CardHoverOverlay";
import { CoverMedia } from "@/components/CoverMedia";
import type { FeaturedProject } from "@/data/featuredProjects";
import { PlaceholderCover } from "@/components/PlaceholderCover";
import { ProjectTags } from "@/components/ProjectTags";
import { ProjectTitleRow } from "@/components/ProjectTitleRow";
import { gridCardShell } from "@/lib/layout";

type ProjectGridCardProps = {
  project: FeaturedProject;
};

export function ProjectGridCard({ project }: ProjectGridCardProps) {
  const isExternal = project.hoverType === "website" && Boolean(project.externalUrl);
  const href = isExternal ? project.externalUrl! : `/projects/${project.slug}`;
  const hasCover = project.coverVideo || project.coverImage;
  const linkClassName = "group block w-full min-w-0";
  const media = (
    <div className={gridCardShell}>
      <CardHoverOverlay
        type={project.hoverType}
        className="aspect-[3/2] rounded-[var(--radius-card)]"
      >
        {hasCover ? (
          <CoverMedia
            alt={project.title}
            coverImage={project.coverImage}
            coverVideo={project.coverVideo}
            className="h-full w-full object-cover object-center bg-bg transition-transform duration-200 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        ) : (
          <PlaceholderCover accent={project.accent} bordered={false} fill />
        )}
      </CardHoverOverlay>
    </div>
  );

  return (
    <article className="flex w-full min-w-0 flex-col gap-4">
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {media}
        </a>
      ) : (
        <Link href={href} className={linkClassName}>
          {media}
        </Link>
      )}

      <div className="min-w-0 text-left">
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <ProjectTitleRow {...project} />
          </a>
        ) : (
          <Link href={href} className="block">
            <ProjectTitleRow {...project} />
          </Link>
        )}
        <ProjectTags tags={project.tagList} />
      </div>
    </article>
  );
}
