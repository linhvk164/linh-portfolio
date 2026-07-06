"use client";

import Link from "next/link";
import { useAboutModal } from "@/components/AboutModalProvider";
import { caseStudyProjects } from "@/data/featuredProjects";
import { footerNavItems, site } from "@/data/site";
import { labelCaps, mainContent } from "@/lib/layout";

const footerLink =
  "interactive-link block text-base text-ink-muted hover:text-accent-hover";

export function SiteFooter() {
  const { openAbout } = useAboutModal();

  return (
    <footer id="contact" className="bg-surface">
      <div
        className={`${mainContent} grid gap-6 py-8 md:grid-cols-3 md:gap-x-8 md:py-10`}
      >
        <div className="space-y-2">
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
        <div>
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
        <div>
          <p className={`${labelCaps} mb-2 text-ink`}>Case studies</p>
          <ul className="space-y-1.5">
            {caseStudyProjects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className={footerLink}
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`${mainContent} bg-surface-muted py-5`}>
        <p className="text-base text-ink-soft">{site.copyright}</p>
      </div>
    </footer>
  );
}
