import { ViewTransition } from "react";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/BackLink";
import { FolioInstagramReel } from "@/components/FolioInstagramReel";
import { CaseStudyContent } from "@/components/case-studies/CaseStudyContent";
import { CaseStudyImagePlaceholder } from "@/components/case-studies/CaseStudySection";
import { LatestProjectsSection } from "@/components/case-studies/LatestProjectsSection";
import { CaseStudyShell } from "@/components/case-studies/CaseStudyShell";
import { ProjectTitleRow } from "@/components/ProjectTitleRow";
import { PageFooter } from "@/components/SiteShell";
import { getProjectBySlug, projects } from "@/data/projects";
import { caseStudyLayout } from "@/lib/layout";
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

  if (!project) {
    notFound();
  }

  const fallbackContent = (
    <div className="space-y-12">
      {project.sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2 className="mb-4">{section.label}</h2>
          {section.content ? (
            <p className="leading-relaxed text-case-study-body">{section.content}</p>
          ) : (
            <p className="italic text-ink-soft">Content coming soon.</p>
          )}
        </section>
      ))}
    </div>
  );

  return (
    <>
      <ViewTransition
        enter={{
          "nav-forward": "content-from-right",
          "nav-back": "content-from-left",
          default: "content-from-right",
        }}
        exit={{
          "nav-forward": "content-exit-left",
          "nav-back": "content-exit-right",
          default: "none",
        }}
        default="none"
      >
        <article className="case-study-content-enter">
          <div className={caseStudyLayout}>
            <div className="lg:hidden">
              <BackLink
                label="Back to home"
                href="/"
                transitionTypes={["nav-back"]}
              />
            </div>

            <CaseStudyShell
              slug={slug}
              hero={
                slug === "folio" ? (
                  <CaseStudyImagePlaceholder
                    label="Folio cover video"
                    src="/images/folio/folio-cover-casestudy.mov"
                  />
                ) : undefined
              }
              header={
                <ProjectTitleRow
                  layout="stacked"
                  titleAs="h1"
                  titleClassName="case-study-header-title text-balance text-ink"
                  metaClassName="pt-1 text-ink-soft"
                  slug={project.slug}
                  year={project.year}
                  productName={project.productName}
                  title={
                    slug === "folio"
                      ? "From Research to a Working Beta in 2 Months"
                      : "About the project"
                  }
                />
              }
            >
              <CaseStudyContent slug={slug} fallback={fallbackContent} />
            </CaseStudyShell>

            <LatestProjectsSection currentSlug={slug} />

            <div className="mt-12 pt-8">
              <BackLink
                label="Back to home"
                href="/"
                transitionTypes={["nav-back"]}
              />
            </div>
          </div>
        </article>
      </ViewTransition>
      {slug === "folio" && <FolioInstagramReel />}
      <PageFooter />
    </>
  );
}
