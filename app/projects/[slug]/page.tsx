import { notFound } from "next/navigation";
import { BackLink } from "@/components/BackLink";
import { ChordioContent } from "@/components/case-studies/ChordioContent";
import { FolioContent } from "@/components/case-studies/FolioContent";
import { LofuContent } from "@/components/case-studies/LofuContent";
import { UnHabitatCaseStudyContent } from "@/components/case-studies/UnHabitatCaseStudyContent";
import { ProjectTitleRow } from "@/components/ProjectTitleRow";
import { CoverMedia } from "@/components/CoverMedia";
import { PlaceholderCover } from "@/components/PlaceholderCover";
import { PageFooter } from "@/components/SiteShell";
import { getProjectBySlug, projects } from "@/data/projects";
import { getUnHabitatCaseStudy } from "@/data/unHabitatCaseStudies";
import { mainContent } from "@/lib/layout";
import { formatProjectMeta } from "@/lib/projectTitle";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  const displayTitle = formatProjectMeta(project);
  return {
    title: `${displayTitle} — linhvk`,
    description: displayTitle,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const unHabitatStudy = getUnHabitatCaseStudy(slug);

  if (!project) {
    notFound();
  }

  const caseStudyContent = unHabitatStudy ? (
    <UnHabitatCaseStudyContent study={unHabitatStudy} />
  ) : slug === "folio" ? (
    <FolioContent />
  ) : slug === "chordio" ? (
    <ChordioContent />
  ) : slug === "lofu" ? (
    <LofuContent />
  ) : (
    <div className="space-y-12">
      {project.sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2 className="mb-4">{section.label}</h2>
          {section.content ? (
            <p className="leading-relaxed text-ink-muted">{section.content}</p>
          ) : (
            <p className="italic text-ink-soft">Content coming soon.</p>
          )}
        </section>
      ))}
    </div>
  );

  return (
    <>
      <article>
        <div className={mainContent}>
          <div
            className={`relative w-full overflow-hidden rounded-[var(--radius-card)] bg-surface ${
              project.coverVideo ? "" : "aspect-[21/10]"
            }`}
          >
            {project.coverVideo || project.coverImage ? (
              <CoverMedia
                alt={project.title}
                coverImage={project.coverImage}
                coverVideo={project.coverVideo}
              />
            ) : (
              <PlaceholderCover
                accent={project.accent}
                bordered={false}
                fill
                className="h-full"
              />
            )}
          </div>
        </div>

        <div className={mainContent}>
          <BackLink />

          <header className="case-study-header mt-8 pb-8">
            <p className="label-caps text-ink-soft">{project.homeCaption}</p>
            <ProjectTitleRow
              layout="split"
              className="mt-4"
              titleAs="h1"
              titleClassName="case-study-header-title text-balance text-ink"
              metaClassName="pt-1 text-ink-soft"
              {...project}
            />
          </header>

          <div className="mt-10">{caseStudyContent}</div>

          <div className="mt-12 pt-8">
            <BackLink />
          </div>
        </div>
      </article>
      <PageFooter />
    </>
  );
}
