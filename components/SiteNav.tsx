import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { designStudio, designStudioCallHref } from "@/data/designStudio";
import { footerNavItems, site } from "@/data/site";
import { publicPath } from "@/lib/assets";
import { labelCaps } from "@/lib/layout";

const LOGO_SRC = "/images/general/logo/linhvk logo white.png";
const PROFILE_SRC = "/images/general/profile-cropped.webp";

const footerPad =
  "w-full min-w-0 px-8 pt-16 pb-10 md:px-10 md:pt-24 md:pb-14 lg:px-12";
const footerLabel = `${labelCaps} text-white/55`;
const footerLink =
  "group inline-flex items-center gap-1.5 text-base text-white/85 transition-colors duration-200 hover:text-white";

export function SiteFooter() {
  const { footer } = designStudio;

  return (
    <footer
      id="contact"
      className="design-studio-footer scroll-mt-24 overflow-hidden rounded-tl-[2.75rem] rounded-tr-[2.75rem] bg-accent md:rounded-tl-[3.5rem] md:rounded-tr-[3.5rem]"
    >
      <div className={footerPad}>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="min-w-0">
            <h2 className="design-studio-footer-heading !text-[1.875rem] font-bold leading-tight tracking-tight text-white md:!text-[2.5rem]">
              {footer.heading}
            </h2>
            <div className="design-studio-footer-sub mt-5 max-w-3xl space-y-1 text-white/70">
              {footer.subheadingLines.map((line) => (
                <p
                  key={line}
                  className="text-sm leading-relaxed md:text-[0.9375rem]"
                >
                  {line}
                </p>
              ))}
            </div>
            <a
              href={designStudioCallHref}
              target="_blank"
              rel="noopener noreferrer"
              className="design-studio-footer-cta mt-8 inline-flex items-center rounded-full bg-white px-6 py-2.5 text-sm font-bold text-accent transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
            >
              {footer.cta}
            </a>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-x-12 lg:gap-x-16">
            <div className="flex shrink-0 flex-col items-start gap-2 lg:items-end">
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
                <ArrowUpRight
                  size={14}
                  strokeWidth={2.25}
                  aria-hidden
                  className="shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
                />
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

            <div className="shrink-0 lg:text-right">
              <p className={`${footerLabel} mb-2`}>Navigation</p>
              <ul className="space-y-1.5">
                {footerNavItems.map((item) => (
                  <li key={item.label}>
                    {"comingSoon" in item ? (
                      <span
                        className="group relative cursor-default text-base text-white/35"
                        aria-disabled="true"
                      >
                        {item.label}
                        <span className="pointer-events-none absolute top-full right-0 z-10 mt-1.5 whitespace-nowrap rounded-md bg-white px-2 py-1 text-[0.65rem] font-medium tracking-wide text-accent opacity-0 transition-opacity duration-150 group-hover:opacity-100 lg:right-0">
                          Coming soon
                        </span>
                      </span>
                    ) : (
                      <Link href={item.href} className={footerLink}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-end md:mt-20">
          <div className="inline-flex max-w-full shrink-0 items-center gap-2.5 sm:gap-3 md:gap-4">
            <Link href="/" className="inline-block shrink-0">
              <Image
                src={publicPath(LOGO_SRC)}
                alt="linhvk"
                width={320}
                height={80}
                className="design-studio-footer-logo"
              />
            </Link>
            <Image
              src={publicPath(PROFILE_SRC)}
              alt=""
              width={56}
              height={56}
              className="design-studio-footer-avatar shrink-0 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full min-w-0 border-t border-white/10 px-8 py-5 md:px-10 lg:px-12">
        <p className="text-right text-base text-white/50">
          © 2026. Made with love &{" "}
          <a
            href={site.spotifyPlaylist}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-white"
          >
            Hozier ♫
          </a>
          . Last updated August 2026.
        </p>
      </div>
    </footer>
  );
}
