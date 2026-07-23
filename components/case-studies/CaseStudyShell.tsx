import {
  CaseStudyImagePlaceholder,
  CaseStudyMeta,
} from "@/components/case-studies/CaseStudySection";
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
  /** Optional media shown above the main case study header */
  hero?: ReactNode;
};

export function CaseStudyShell({
  slug,
  header,
  children,
  hero,
}: CaseStudyShellProps) {
  const tldr = getCaseStudyTldr(slug);
  const metaItems = getCaseStudyMetaItems(slug);
  const externalUrl = getProjectExternalUrl(slug);
  const meta =
    metaItems.length > 0 ? <CaseStudyMeta items={metaItems} /> : null;
  // Folio folds TL;DR into the Overview section; other studies keep the TL;DR block.
  const showTldrBlock = slug !== "folio" && Boolean(tldr);

  return (
    <>
      {hero ? <div className="mt-8">{hero}</div> : null}

      <header className={`case-study-header pb-4 ${hero ? "mt-6" : "mt-8"}`}>
        {header}
        {externalUrl && (
          <div className="mt-6">
            <ViewWebsiteButton href={externalUrl} />
          </div>
        )}
      </header>

      {showTldrBlock ? (
        <section className="mt-6">
          <CaseStudyTldr content={tldr!} meta={meta} />
        </section>
      ) : null}

      <div className="mt-10">{children}</div>
    </>
  );
}
