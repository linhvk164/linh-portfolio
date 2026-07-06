"use client";

import { CaseStudyTldr } from "@/components/case-studies/CaseStudyTldr";
import { ViewWebsiteButton } from "@/components/ViewWebsiteButton";
import { getProjectExternalUrl } from "@/data/featuredProjects";
import { getCaseStudyTldr } from "@/data/caseStudyTldr";
import { useState, type ReactNode } from "react";

type CaseStudyView = "detailed" | "tldr";

type CaseStudyShellProps = {
  slug: string;
  header: ReactNode;
  children: ReactNode;
};

export function CaseStudyShell({ slug, header, children }: CaseStudyShellProps) {
  const tldr = getCaseStudyTldr(slug);
  const externalUrl = getProjectExternalUrl(slug);
  const [view, setView] = useState<CaseStudyView>("detailed");

  return (
    <>
      <header className="case-study-header mt-8 pb-8">
        {header}
        {(tldr || externalUrl) && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {tldr && (
              <div
                className="inline-flex rounded-full border border-border p-1"
                role="tablist"
                aria-label="Case study view"
              >
                <ViewToggleButton
                  active={view === "detailed"}
                  onClick={() => setView("detailed")}
                >
                  Detailed
                </ViewToggleButton>
                <ViewToggleButton
                  active={view === "tldr"}
                  onClick={() => setView("tldr")}
                >
                  TL;DR
                </ViewToggleButton>
              </div>
            )}
            {externalUrl && <ViewWebsiteButton href={externalUrl} />}
          </div>
        )}
      </header>

      <div className="mt-10">
        {view === "detailed" || !tldr ? children : <CaseStudyTldr content={tldr} />}
      </div>
    </>
  );
}

function ViewToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
        active
          ? "bg-ink text-[var(--bg)]"
          : "text-ink-muted hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
