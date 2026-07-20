import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  homeFeaturedProjects,
  getProjectFooterLabel,
} from "@/data/featuredProjects";
import { footerNavItems, site } from "@/data/site";
import { publicPath } from "@/lib/assets";
import { labelCaps } from "@/lib/layout";

const footerPad = "w-full min-w-0 px-8 py-8 md:px-10 md:py-10";
const footerLabel = `${labelCaps} text-white/55`;
const footerLink =
  "group inline-flex items-center gap-1.5 text-base text-white/85 transition-colors duration-200 hover:text-white";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="overflow-hidden rounded-tl-[2.75rem] bg-accent md:rounded-tl-[3.5rem]"
    >
      <div className={footerPad}>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-x-12 lg:gap-x-16">
            <div className="flex shrink-0 flex-col items-start gap-2">
              <p className={footerLabel}>Connect</p>
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
              <a
                href={publicPath(site.resume)}
                target="_blank"
                rel="noopener noreferrer"
                className={footerLink}
              >
                Resume
                <ArrowUpRight
                  size={14}
                  strokeWidth={2.25}
                  aria-hidden
                  className="shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
                />
              </a>
            </div>

            <div className="shrink-0">
              <p className={`${footerLabel} mb-2`}>Navigation</p>
              <ul className="space-y-1.5">
                {footerNavItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className={footerLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="min-w-0 md:max-w-sm md:shrink-0 md:text-left">
            <p className={`${footerLabel} mb-3`}>Featured Projects</p>
            <ul className="grid grid-cols-1 gap-1.5">
              {homeFeaturedProjects.map((project) => {
                const label = getProjectFooterLabel(project);
                const isExternal =
                  project.hoverType === "website" &&
                  Boolean(project.externalUrl);
                const className =
                  "group flex items-baseline justify-between gap-20 rounded-[var(--radius-sm)] py-1 text-sm leading-snug text-white/85 transition-colors duration-200 hover:text-white sm:gap-20";

                const content = (
                  <>
                    <span className="min-w-0 font-medium text-white/90 group-hover:text-white">
                      {label}
                    </span>
                    <span className="shrink-0 tabular-nums text-xs text-white/45">
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
      <div className="w-full min-w-0 border-t border-white/10 px-8 py-5 md:px-10">
        <p className="text-right text-base text-white/50">{site.copyright}</p>
      </div>
    </footer>
  );
}
