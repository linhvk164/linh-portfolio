import Link from "next/link";
import type { CSSProperties } from "react";
import Image from "next/image";
import { DesignStudioStats } from "@/components/DesignStudioStats";
import { HomeDiscoverCarousel } from "@/components/HomeDiscoverCarousel";
import { HomeHiringFaq } from "@/components/HomeHiringFaq";
import { ProjectGridCard } from "@/components/ProjectGridCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TrustedFeaturedSection } from "@/components/TrustedFeaturedSection";
import { homeAbout } from "@/data/about";
import { designStudio } from "@/data/designStudio";
import { homeSelectedProjects } from "@/data/featuredProjects";
import { publicPath } from "@/lib/assets";
import { labelCaps, pillButton } from "@/lib/layout";

const HERO_PROFILE_SRC = "/images/general/profile-cropped.webp";

const sectionHeadingClassName =
  "scroll-mt-28 text-xl font-semibold tracking-tight text-ink md:scroll-mt-24 md:text-2xl";

function CompanyLogo({
  company,
}: {
  company: (typeof designStudio.companies)[number];
}) {
  return (
    <div className="flex h-8 shrink-0 items-center">
      <Image
        src={publicPath(company.src)}
        alt={company.name}
        width={160}
        height={32}
        className="h-8 w-auto object-contain grayscale"
        style={{ width: "auto", height: "2rem" }}
      />
    </div>
  );
}

function CompanyLogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  const logos = [...designStudio.companies, ...designStudio.companies];

  return (
    <div
      className="flex shrink-0 items-center gap-12 pr-12"
      aria-hidden={ariaHidden}
    >
      {logos.map((company, index) =>
        "href" in company && company.href ? (
          <a
            key={`${company.name}-${index}`}
            href={company.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            tabIndex={ariaHidden ? -1 : undefined}
          >
            <CompanyLogo company={company} />
          </a>
        ) : (
          <div key={`${company.name}-${index}`}>
            <CompanyLogo company={company} />
          </div>
        ),
      )}
    </div>
  );
}

function CompanyLogos() {
  return (
    <div
      className="min-w-0 flex-1 overflow-hidden"
      aria-label="Companies I've worked with"
    >
      <div className="company-logo-track flex w-max items-center">
        <CompanyLogoRow />
        <CompanyLogoRow ariaHidden />
      </div>
    </div>
  );
}

function HeroTag({
  tag,
  index,
  side,
}: {
  tag: string;
  index: number;
  side: "left" | "right";
}) {
  const rotate = (side === "left" ? [-7, 4, -3] : [6, -5, 3])[index] ?? 0;
  const toX = (side === "left" ? [2, -2, 4] : [-2, 2, -4])[index] ?? 0;
  const fromX = side === "left" ? "7.5rem" : "-7.5rem";

  return (
    <span
      className="design-studio-hero-tag-fly pointer-events-auto"
      style={
        {
          "--tag-from-x": fromX,
          "--tag-delay": `${140 + index * 100 + (side === "right" ? 50 : 0)}ms`,
        } as CSSProperties
      }
    >
      <span
        className="design-studio-hero-tag w-fit cursor-pointer whitespace-nowrap rounded-full border border-ink px-3.5 py-1.5 text-sm text-ink"
        style={
          {
            "--tag-rotate": `${rotate}deg`,
            "--tag-to-x": `${toX}px`,
          } as CSSProperties
        }
      >
        {tag}
      </span>
    </span>
  );
}

export function HomeContent() {
  const { hero } = designStudio;

  return (
    <div id="top" className="w-full">
      <div className="mx-auto w-full max-w-5xl">
        <section
          className="relative flex min-h-[min(72vh,40rem)] flex-col items-center justify-center px-2 py-16 text-center md:py-24"
          aria-labelledby="home-hero-title"
        >
          <div className="mb-8 flex flex-wrap justify-center gap-2 md:hidden">
            {[...hero.tagsLeft, ...hero.tagsRight].map((tag, index) => (
              <span
                key={tag}
                className="design-studio-hero-tag-fly"
                style={
                  {
                    "--tag-from-x": "0px",
                    "--tag-delay": `${80 + index * 70}ms`,
                  } as CSSProperties
                }
              >
                <span className="design-studio-hero-tag cursor-pointer rounded-full border border-ink px-3 py-1 text-xs font-medium text-ink">
                  {tag}
                </span>
              </span>
            ))}
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="pointer-events-none absolute top-1/2 right-full hidden -translate-y-1/2 flex-col items-end gap-8 pr-10 md:flex lg:pr-14">
              {hero.tagsLeft.map((tag, index) => (
                <HeroTag key={tag} tag={tag} index={index} side="left" />
              ))}
            </div>
            <div className="pointer-events-none absolute top-1/2 left-full hidden -translate-y-1/2 flex-col items-start gap-8 pl-10 md:flex lg:pl-14">
              {hero.tagsRight.map((tag, index) => (
                <HeroTag key={tag} tag={tag} index={index} side="right" />
              ))}
            </div>

            <div className="page-enter-item flex flex-wrap items-center justify-center gap-2.5">
              <h1
                id="home-hero-title"
                className="design-studio-hero-title text-center tracking-tight text-ink"
              >
                {hero.headline}
              </h1>
              <Image
                src={publicPath(HERO_PROFILE_SRC)}
                alt="Linh Khuong, web designer in Waterloo, Ontario"
                width={104}
                height={104}
                className="design-studio-hero-avatar shrink-0 rounded-full object-cover"
                priority
              />
            </div>
            <p
              className="design-studio-hero-sub page-enter-item mt-2 max-w-xl text-ink"
              style={{ animationDelay: "90ms" }}
            >
              Strategic UX/UI Product Designer in
              civic tech and early stage startups.
            </p>
          </div>

          <div
            className="page-enter-item mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
            style={{ animationDelay: "180ms" }}
          >
            <a href="#work" className={pillButton}>
              Explore My Work
            </a>
            <p className="design-studio-hero-note text-left">
              <Link
                href="/freelance"
                className="block underline decoration-ink-soft/40 underline-offset-[3px] transition-colors hover:text-ink hover:decoration-ink"
              >
                Open to freelance
              </Link>
            </p>
          </div>
        </section>

        <div
          className="page-enter-item flex flex-col gap-4 md:flex-row md:items-center md:gap-6"
          style={{ animationDelay: "260ms" }}
        >
          <p className="w-fit shrink-0 rounded-full bg-[#ececec] px-3.5 py-1.5 text-sm font-medium text-ink">
            {hero.socialProof}
          </p>
          <CompanyLogos />
        </div>

        <div className="mt-20 space-y-16 md:mt-24 md:space-y-20">
          <section
            aria-labelledby="about"
            className="mt-6 grid gap-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,0.75fr)] md:items-center md:gap-16"
          >
            <ScrollReveal>
              <p className={`${labelCaps} text-ink-soft`}>{homeAbout.brow}</p>
              <h2
                id="about"
                className="design-studio-about-title mt-2 scroll-mt-28 tracking-tight md:scroll-mt-24"
              >
                {homeAbout.heading}
              </h2>
              <div className="mt-8 flex flex-col gap-5 md:mt-10">
                {homeAbout.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="design-studio-about-copy">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={90}>
              <DesignStudioStats />
            </ScrollReveal>
          </section>

          <section
            id="work"
            aria-labelledby="work-heading"
            className="scroll-mt-28 md:scroll-mt-24"
          >
            <ScrollReveal>
              <p className={`${labelCaps} text-ink-soft`}>Selected case studies</p>
              <h2
                id="work-heading"
                className={`${sectionHeadingClassName} mt-2`}
              >
                Discover Projects I&apos;ve Worked On
              </h2>
            </ScrollReveal>
            <div className="mt-6 grid w-full grid-cols-1 items-start gap-5 sm:grid-cols-2 sm:gap-x-5 md:mt-8 md:gap-x-6">
              {homeSelectedProjects.map((project, index) => (
                <ScrollReveal
                  key={project.slug}
                  className="w-full min-w-0"
                  delay={index * 80}
                >
                  <ProjectGridCard project={project} uniformCover />
                </ScrollReveal>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <HomeDiscoverCarousel />
      </div>

      <div className="mx-auto w-full max-w-5xl pb-16 md:pb-20">
        <div className="mt-0 pt-16 md:pt-20">
          <TrustedFeaturedSection />
          <HomeHiringFaq />
        </div>
      </div>
    </div>
  );
}
