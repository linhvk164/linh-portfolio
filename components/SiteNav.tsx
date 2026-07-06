"use client";

import Link from "next/link";
import { useAboutModal } from "@/components/AboutModalProvider";
import { caseStudyProjects, getProjectFooterLabel } from "@/data/featuredProjects";
import { footerNavItems, site } from "@/data/site";
import { labelCaps, footerColumns, mainContent } from "@/lib/layout";

const footerLink =
  "interactive-link block text-base text-ink-muted hover:text-accent-hover";

export function SiteFooter() {
  const { openAbout } = useAboutModal();

  return (
    <footer id="contact" className="bg-surface">
      <div className={`${mainContent} py-8 md:py-10`}>
        <div className={footerColumns}>
          <div className="shrink-0 space-y-2">
            <p className={`${labelCaps} text-ink`}>Get in touch</p>
            <a href={`mailto:${site.email}`} className={footerLink}>
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className={footerLink}
            >
              {site.phone}
            </a>
            <a
              href={site.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLink}
            >
              LinkedIn
            </a>
          </div>
          <div className="shrink-0">
            <p className={`${labelCaps} mb-2 text-ink`}>Navigation</p>
            <ul className="space-y-1.5">
              {footerNavItems.map((item) => (
                <li key={item.label}>
                  {item.label === "About" ? (
                    <button type="button" onClick={openAbout} className={footerLink}>
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
            <p className={`${labelCaps} mb-3 text-ink`}>Case studies</p>
            <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-1">
              {caseStudyProjects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="interactive-link group flex items-baseline justify-between gap-3 rounded-[var(--radius-sm)] py-1 text-sm leading-snug text-ink-muted transition-colors duration-200 hover:text-accent-hover"
                  >
                    <span className="min-w-0 font-medium text-ink group-hover:text-accent-hover">
                      {getProjectFooterLabel(project)}
                    </span>
                    <span className="shrink-0 tabular-nums text-xs text-ink-soft">
                      {project.year}
                    </span>
                  </Link>
                </li>
              ))}
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
