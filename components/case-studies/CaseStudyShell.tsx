import { CaseStudyMeta } from "@/components/case-studies/CaseStudySection";
import { CaseStudyTldr } from "@/components/case-studies/CaseStudyTldr";
import { ViewWebsiteButton } from "@/components/ViewWebsiteButton";
import { getCaseStudyMetaItems } from "@/data/caseStudyMeta";
import { getProjectExternalUrl } from "@/data/featuredProjects";
import { getCaseStudyTldr } from "@/data/caseStudyTldr";
import type { ReactNode } from "react";

type CaseStudyShellProps = {
  slug: string;
  header: ReactNode;
  children: ReactNode;
};

export function CaseStudyShell({ slug, header, children }: CaseStudyShellProps) {
  const tldr = getCaseStudyTldr(slug);
  const metaItems = getCaseStudyMetaItems(slug);
  const externalUrl = getProjectExternalUrl(slug);
  const meta =
    metaItems.length > 0 ? <CaseStudyMeta items={metaItems} /> : null;
  const hasOverview = Boolean(tldr) || Boolean(meta);

  return (
    <>
      <header className="case-study-header mt-8 pb-4">
        {header}
        {externalUrl && (
          <div className="mt-6">
            <ViewWebsiteButton href={externalUrl} />
          </div>
        )}
      </header>

      {hasOverview && (
        <section className="mt-6">
          {tldr ? <CaseStudyTldr content={tldr} meta={meta} /> : meta}
        </section>
      )}

      <div className="mt-10">{children}</div>
    </>
  );
}
