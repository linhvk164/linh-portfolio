import Link from "next/link";
import type { Ref } from "react";
import { CardHoverOverlay } from "@/components/CardHoverOverlay";
import { CoverMedia } from "@/components/CoverMedia";
import type { FeaturedProject } from "@/data/featuredProjects";
import { PlaceholderCover } from "@/components/PlaceholderCover";
import { ProjectTags } from "@/components/ProjectTags";
import { ProjectTitleRow } from "@/components/ProjectTitleRow";

type ProjectGridCardProps = {
  project: FeaturedProject;
  coverRef?: Ref<HTMLDivElement>;
  /** Hide cover media while a scroll-flight clone is visible */
  coverHidden?: boolean;
  /**
   * During the home cover-flight, skip heavy videos and load a still only
   * so we do not download every cover video twice on first paint.
   */
  deferHeavyMedia?: boolean;
};

export function ProjectGridCard({
  project,
  coverRef,
  coverHidden = false,
  deferHeavyMedia = false,
}: ProjectGridCardProps) {
  const isExternal =
    project.hoverType === "website" && Boolean(project.externalUrl);
  const href = isExternal ? project.externalUrl! : `/projects/${project.slug}`;
  const hasCover = project.coverVideo || project.coverImage;
  const linkClassName = "group relative block w-full min-w-0";
  const showLightweightStill = deferHeavyMedia && Boolean(project.coverImage);
  const showDeferredPlaceholder = deferHeavyMedia && !project.coverImage && hasCover;

  const media = (
    <>
      <div
        ref={coverRef}
        data-project-cover={project.slug}
        className={coverHidden ? "opacity-0" : "opacity-100"}
      >
        <CardHoverOverlay
          type={project.hoverType}
          className="overflow-hidden border border-border bg-bg"
        >
          {showLightweightStill ? (
            <CoverMedia
              alt={project.title}
              coverImage={project.coverImage}
              natural
              stillOnly
              loading="lazy"
              className="h-auto w-full bg-bg transition-transform duration-200 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          ) : showDeferredPlaceholder ? (
            <div className="aspect-[16/10] w-full bg-surface-muted" aria-hidden />
          ) : hasCover ? (
            <CoverMedia
              alt={project.title}
              coverImage={project.coverImage}
              coverVideo={project.coverVideo}
              natural
              loading="lazy"
              videoPreload="metadata"
              className="h-auto w-full bg-bg transition-transform duration-200 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          ) : (
            <PlaceholderCover accent={project.accent} bordered={false} />
          )}
        </CardHoverOverlay>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <ProjectTags tags={project.tagList} />
      </div>
    </>
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
        <Link
          href={href}
          transitionTypes={["nav-forward"]}
          className={linkClassName}
        >
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
          <Link href={href} transitionTypes={["nav-forward"]} className="block">
            <ProjectTitleRow {...project} />
          </Link>
        )}
      </div>
    </article>
  );
}
