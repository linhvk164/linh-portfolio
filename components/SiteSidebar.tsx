"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ViewTransition } from "react";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { CaseStudySidebarNav } from "@/components/case-studies/CaseStudySidebarNav";
import { PrimaryNav } from "@/components/PrimaryNav";
import { TypewriterTagline } from "@/components/TypewriterTagline";
import { publicPath } from "@/lib/assets";
import { HOME_COVERS_SETTLED_EVENT, peekHomeCoversSettled } from "@/lib/homeFlight";
import { site } from "@/data/site";

const BANNER_SRC = "/images/general/lofu-background.png";
const PROFILE_SRC = "/images/general/profile-cropped.webp";

function useCaseStudySlug(): string | null {
  const pathname = usePathname();
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
  return match?.[1] ?? null;
}

/** On home, show the desktop panel once case-study covers have settled in place. */
function useHomeCoversSettled(isHome: boolean) {
  const [settled, setSettled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setSettled(true);
      return;
    }

    setSettled(false);
    const onSettled = () => setSettled(true);
    window.addEventListener(HOME_COVERS_SETTLED_EVENT, onSettled);
    // Effects may notify before this listener attaches — catch up after both run.
    queueMicrotask(() => {
      if (peekHomeCoversSettled()) setSettled(true);
    });
    return () => {
      window.removeEventListener(HOME_COVERS_SETTLED_EVENT, onSettled);
    };
  }, [isHome]);

  return settled;
}

function SidebarCard({
  showNav = true,
  wide = false,
  instant = false,
}: {
  showNav?: boolean;
  /** Full-width mobile/tablet header — banner beside content from md up */
  wide?: boolean;
  /** Skip staggered enter animations */
  instant?: boolean;
}) {
  const pathname = usePathname();
  const isExplore = pathname.startsWith("/explore");
  const headline = isExplore ? site.exploreHeadline : site.name;
  const tagline = isExplore ? site.exploreTagline : site.tagline;

  const introItem = instant ? "" : "sidebar-intro-item ";

  return (
    <div
      className={`${instant ? "" : "sidebar-card-enter "}overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${
        wide
          ? "md:grid md:grid-cols-[minmax(0,0.75fr)_minmax(16rem,1.25fr)] md:items-stretch"
          : ""
      }`}
    >
      {/* Banner — top on phone; right column on tablet+ when wide */}
      <div
        className={`${instant ? "" : "sidebar-banner-enter "}relative overflow-hidden ${
          wide
            ? "aspect-[4/3] md:order-2 md:aspect-auto md:min-h-[17rem]"
            : "aspect-[687/372]"
        }`}
      >
        <Image
          src={publicPath(BANNER_SRC)}
          alt=""
          fill
          priority
          className={`${instant ? "" : "sidebar-banner-image "}scale-[1.12] object-cover object-center`}
          sizes="(max-width: 1024px) 60vw, 320px"
        />
        <Link
          href="/#contact"
          className="absolute top-3 right-3 z-[1] inline-flex items-center rounded-full bg-white/85 px-4 py-3 text-sm font-semibold text-ink-muted backdrop-blur-sm transition-colors hover:bg-white hover:text-ink"
        >
          Get in touch <span className="ml-2">👋</span>
        </Link>
      </div>

      {/* Body */}
      <div
        className={`px-5 pb-5 ${
          wide
            ? "pt-0 md:order-1 md:flex md:flex-col md:justify-center md:px-6 md:py-6"
            : "pt-0"
        }`}
      >
        <div
          className={`relative z-[1] flex flex-col gap-5 ${
            wide
              ? "-mt-10 items-center md:mt-0 md:items-start"
              : "-mt-10 items-center"
          }`}
        >
          <div
            className={`flex min-w-0 flex-col ${
              wide
                ? "items-center text-center md:items-start md:text-left"
                : "items-center text-center"
            }`}
          >
            <Image
              src={publicPath(PROFILE_SRC)}
              alt={site.name}
              width={88}
              height={88}
              className={`${introItem}h-[5.5rem] w-[5.5rem] rounded-full border-[3px] border-white object-cover shadow-[0_1px_2px_rgba(0,0,0,0.04)]`}
              priority
            />
            <div className={`${introItem}mt-3 w-full min-w-0`}>
              <p className="sidebar-name tracking-tight">{headline}</p>
              <p className="sidebar-role">{site.title}</p>
            </div>
            <TypewriterTagline
              key={tagline}
              text={tagline}
              instant={instant}
              className={`sidebar-tagline ${introItem}${
                wide ? "text-center md:text-left" : "text-center"
              }`}
            />
          </div>

          <div
            className={`${introItem}flex w-full items-center ${
              wide
                ? "justify-center text-center md:w-auto md:justify-start md:text-left"
                : "justify-center text-center"
            }`}
          >
            <div
              className={`min-w-0 flex-1 pr-4 ${wide ? "md:flex-none md:pr-5" : ""}`}
            >
              <p className="text-[0.7rem] font-medium text-ink-soft">Previously</p>
              <p className="mt-0.5 text-sm font-bold text-ink">{site.previously}</p>
            </div>
            <div className="h-7 w-px shrink-0 bg-border" aria-hidden />
            <div
              className={`min-w-0 flex-1 pl-4 ${wide ? "md:flex-none md:pl-5" : ""}`}
            >
              <p className="text-[0.7rem] font-medium text-ink-soft">Experience</p>
              <p className="mt-0.5 text-sm font-bold text-ink">{site.experience}</p>
            </div>
          </div>
        </div>

        {showNav ? (
          <div className={`${introItem}mt-5 rounded-2xl border border-border bg-white/95 p-1.5 backdrop-blur-md`}>
            <PrimaryNav className="flex items-stretch gap-1.5" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function SiteSidebar() {
  const pathname = usePathname();
  const caseStudySlug = useCaseStudySlug();
  const isHome = pathname === "/";
  const coversSettled = useHomeCoversSettled(isHome);
  const showDesktopChrome = !isHome || coversSettled;

  return (
    <>
      {/* Mobile / tablet — profile card in page flow (hidden on case studies) */}
      {!caseStudySlug ? (
        <header
          className="px-4 py-5 md:px-6 md:py-6 lg:hidden"
          aria-label="Site introduction"
        >
          <SidebarCard showNav={false} wide />
        </header>
      ) : null}

      {/* Desktop — fixed left panel (home: after flyer intro settles) */}
      <aside
        className={`fixed top-0 left-0 z-40 hidden h-screen w-[320px] flex-col p-4 lg:flex ${
          showDesktopChrome ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-label={caseStudySlug ? "Case study navigation" : "Site navigation"}
        aria-hidden={isHome && !coversSettled ? true : undefined}
      >
        {caseStudySlug ? (
          <ViewTransition name="site-side-panel" share="sidebar-collapse">
            <div className="h-full min-h-0">
              <CaseStudySidebarNav slug={caseStudySlug} />
            </div>
          </ViewTransition>
        ) : showDesktopChrome ? (
          <ViewTransition name="site-side-panel" share="sidebar-collapse">
            <div className={isHome ? "sidebar-panel-enter" : undefined}>
              <SidebarCard showNav />
            </div>
          </ViewTransition>
        ) : null}
      </aside>

      {/* Mobile / tablet — floating bottom nav (not on case studies) */}
      {!caseStudySlug ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
          <div className="pointer-events-auto w-full max-w-[22rem] rounded-2xl border border-border bg-white/95 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.1)] backdrop-blur-md">
            <PrimaryNav className="flex items-stretch gap-1.5" />
          </div>
        </div>
      ) : null}

      {/* Floating resume — bottom left (home: with the side panel) */}
      {showDesktopChrome ? (
        <a
          href={publicPath(site.resume)}
          target="_blank"
          rel="noopener noreferrer"
          className="cv-button-enter group fixed left-4 bottom-5 z-50 hidden items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-lg font-semibold text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-accent-hover lg:inline-flex"
        >
          CV
          <ArrowUpRightIcon
            size={18}
            className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      ) : null}
    </>
  );
}
