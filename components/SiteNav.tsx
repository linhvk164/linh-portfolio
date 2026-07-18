"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useAboutModal } from "@/components/AboutModalProvider";
import {
  homeFeaturedProjects,
  getProjectFooterLabel,
} from "@/data/featuredProjects";
import { footerNavItems, site } from "@/data/site";
import { labelCaps, footerColumns, mainContent } from "@/lib/layout";

const footerLink =
  "interactive-link group inline-flex items-center gap-1.5 text-base text-ink-muted hover:text-accent-hover";

export function SiteFooter() {
  const { openAbout } = useAboutModal();

  return (
    <footer id="contact" className="bg-surface">
      <div className={`${mainContent} py-8 md:py-10`}>
        <div className={footerColumns}>
          <div className="flex shrink-0 flex-col items-start gap-2">
            <p className={`${labelCaps} text-ink`}>Connect</p>
            <a
              href={site.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLink}
            >
              LinkedIn
              <ArrowUpRight
                size={14}
                strokeWidth={2.25}
                aria-hidden
                className="shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
              />
            </a>
            <a
              href={site.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLink}
            >
              YouTube
              <ArrowUpRight
                size={14}
                strokeWidth={2.25}
                aria-hidden
                className="shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
              />
            </a>
            <a href={`mailto:${site.email}`} className={footerLink}>
              Email
            </a>
          </div>
          <div className="shrink-0">
            <p className={`${labelCaps} mb-2 text-ink`}>Navigation</p>
            <ul className="space-y-1.5">
              {footerNavItems.map((item) => (
                <li key={item.label}>
                  {item.label === "About" ? (
                    <button
                      type="button"
                      onClick={openAbout}
                      className={footerLink}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link href={item.href} className={footerLink}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 md:max-w-sm md:flex-1">
            <p className={`${labelCaps} mb-3 text-ink`}>Featured Projects</p>
            <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-1">
              {homeFeaturedProjects.map((project) => {
                const label = getProjectFooterLabel(project);
                const isExternal =
                  project.hoverType === "website" && Boolean(project.externalUrl);
                const className =
                  "interactive-link group flex items-baseline justify-between gap-3 rounded-[var(--radius-sm)] py-1 text-sm leading-snug text-ink-muted transition-colors duration-200 hover:text-accent-hover";

                const content = (
                  <>
                    <span className="min-w-0 font-medium text-ink group-hover:text-accent-hover">
                      {label}
                    </span>
                    <span className="shrink-0 tabular-nums text-xs text-ink-soft">
                      {project.year}
                    </span>
                  </>
                );

                return (
                  <li key={project.slug}>
                    {isExternal ? (
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        href={`/projects/${project.slug}`}
                        className={className}
                      >
                        {content}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className={`${mainContent} bg-surface-muted py-5`}>
        <p className="text-base text-ink-soft">{site.copyright}</p>
      </div>
    </footer>
  );
}
