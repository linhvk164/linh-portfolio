import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Check, Globe2, Handshake, Target } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { DesignStudioFaq } from "@/components/DesignStudioFaq";
import { DesignStudioStats } from "@/components/DesignStudioStats";
import { TrustedFeaturedSection } from "@/components/TrustedFeaturedSection";
import { designStudio, designStudioCallHref } from "@/data/designStudio";
import { publicPath } from "@/lib/assets";
import { labelCaps, pillButton } from "@/lib/layout";

const sectionHeadingClassName =
  "scroll-mt-28 text-xl font-semibold tracking-tight text-ink md:scroll-mt-24 md:text-2xl";

const HERO_PROFILE_SRC = "/images/general/profile-cropped.webp";

const whyMeIcons = {
  globe: Globe2,
  target: Target,
  handshake: Handshake,
  story: BookOpen,
} as const;

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
    <div className="min-w-0 flex-1 overflow-hidden" aria-label="Companies I've worked with">
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
  const toX = (side === "left" ? [18, 10, 24] : [-16, -8, -22])[index] ?? 0;
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

export function DesignStudioContent() {
  const {
    hero,
    about,
    offer,
    whyMe,
    process,
  } = designStudio;

  return (
    <div id="top" className="mx-auto w-full max-w-5xl">
      <section
        className="relative flex min-h-[min(72vh,40rem)] flex-col items-center justify-center px-2 py-16 text-center md:py-24"
        aria-labelledby="design-studio-hero-title"
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
          <div className="pointer-events-none absolute top-1/2 right-full hidden -translate-y-1/2 flex-col items-end gap-8 pr-1 md:flex lg:pr-2">
            {hero.tagsLeft.map((tag, index) => (
              <HeroTag key={tag} tag={tag} index={index} side="left" />
            ))}
          </div>
          <div className="pointer-events-none absolute top-1/2 left-full hidden -translate-y-1/2 flex-col items-start gap-8 pl-1 md:flex lg:pl-2">
            {hero.tagsRight.map((tag, index) => (
              <HeroTag key={tag} tag={tag} index={index} side="right" />
            ))}
          </div>

          <div className="page-enter-item flex items-center justify-center gap-2.5">
            <h1
              id="design-studio-hero-title"
              className="design-studio-hero-title tracking-tight text-ink"
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
            className="design-studio-hero-sub page-enter-item mt-2 text-ink"
            style={{ animationDelay: "90ms" }}
          >
            {hero.subheadingLines.map((line, index) => {
              const isLast = index === hero.subheadingLines.length - 1;

              return (
                <span key={line} className="block">
                  {line}
                  {isLast ? (
                    <>
                      {" "}
                      <em>{hero.subheadingEmphasis}</em>
                      {hero.subheadingAfter}
                    </>
                  ) : null}
                </span>
              );
            })}
          </p>
        </div>

        <div
          className="page-enter-item mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          style={{ animationDelay: "180ms" }}
        >
          <a
            href={designStudioCallHref}
            target="_blank"
            rel="noopener noreferrer"
            className={pillButton}
          >
            {hero.cta}
          </a>
          <p className="design-studio-hero-note text-left">
            {hero.availabilityLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
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
            <p className={`${labelCaps} text-ink-soft`}>{about.kicker}</p>
            <h2
              id="about"
              className="design-studio-about-title mt-2 scroll-mt-28 tracking-tight md:scroll-mt-24"
            >
              {about.headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-8 md:mt-10">
              <p className="design-studio-about-copy">{about.lead}</p>
              <p className="design-studio-about-copy mt-5">{about.body}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={90}>
            <DesignStudioStats />
          </ScrollReveal>
        </section>

        <section aria-labelledby="process">
          <ScrollReveal>
            <p className={`${labelCaps} text-ink-soft`}>{process.brow}</p>
            <h2 id="process" className={`${sectionHeadingClassName} mt-2`}>
              {process.heading}
            </h2>
          </ScrollReveal>
          <ol className="mt-6 space-y-6 md:mt-7 md:space-y-8">
            {process.steps.map((step, index) => (
              <li key={step.number}>
                <ScrollReveal delay={index * 80}>
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 md:gap-5">
                    <span className="mt-0.5 inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-accent text-xs font-semibold tabular-nums text-white">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-ink md:text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-base leading-relaxed text-ink-muted md:text-lg">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>

          <ScrollReveal delay={120}>
            <aside
              className="brand-dna-promo mt-10 rounded-2xl bg-accent px-6 py-8 md:mt-12 md:px-8 md:py-10"
              aria-labelledby="brand-dna-promo"
            >
              <p className={`${labelCaps}`}>{process.brandDna.brow}</p>
              <h2
                id="brand-dna-promo"
                className="design-studio-about-title mt-3 tracking-tight"
              >
                {process.brandDna.heading}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed md:text-lg">
                {process.brandDna.body}
              </p>
              <Link
                href={process.brandDna.href}
                className="mt-8 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-accent transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
              >
                {process.brandDna.cta}
              </Link>
            </aside>
          </ScrollReveal>
        </section>

        <section
          className="design-studio-why-me relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 bg-accent py-16 md:py-20"
          aria-labelledby="why-me"
        >
          <div className="mx-auto w-full max-w-5xl px-2">
            <ScrollReveal>
              <h2
                id="why-me"
                className={`${sectionHeadingClassName} text-white`}
              >
                {whyMe.heading}
              </h2>
            </ScrollReveal>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10 md:mt-10">
              {whyMe.items.map((item, index) => {
                const Icon = whyMeIcons[item.icon];

                return (
                  <ScrollReveal key={item.title} delay={index * 80}>
                    <div>
                      <Icon
                        size={22}
                        strokeWidth={1.6}
                        className="text-white/70"
                        aria-hidden
                      />
                      <h3 className="mt-4 text-base font-semibold tracking-tight text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/75 md:text-[0.9375rem]">
                        {item.body}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <TrustedFeaturedSection />

        <section className="pb-16 md:pb-20" aria-labelledby="pricing">
          <ScrollReveal>
            <p className={`${labelCaps} text-ink-soft`}>{offer.brow}</p>
            <h2 id="pricing" className={`${sectionHeadingClassName} mt-2`}>
              {offer.heading}
            </h2>
          </ScrollReveal>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 md:mt-6 md:gap-5">
            <ScrollReveal className="h-full">
              <div className="flex h-full flex-col rounded-2xl bg-[#f3f3f3] p-6 md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold tracking-tight text-ink">
                    {offer.landing.name}
                  </h3>
                  <p className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold tracking-tight text-accent">
                      {offer.landing.price}
                    </span>
                    <span className="text-sm text-ink-soft">
                      {offer.landing.cadence}
                    </span>
                  </p>
                </div>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  {offer.landing.description}
                </p>
                <ul className="mt-5 space-y-2.5 text-base leading-relaxed text-ink-muted">
                  {offer.landing.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <Check
                        size={16}
                        strokeWidth={2.5}
                        className="shrink-0 text-accent"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal className="h-full" delay={100}>
              <div className="flex h-full flex-col rounded-2xl bg-[#f3f3f3] p-6 md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold tracking-tight text-ink">
                    {offer.support.name}
                  </h3>
                  <p className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold tracking-tight text-accent">
                      {offer.support.price}
                    </span>
                    <span className="text-sm text-ink-soft">
                      {offer.support.cadence}
                    </span>
                  </p>
                </div>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  {offer.support.description}
                </p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={80}>
            <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
              {offer.note}
            </p>
            <a
              href={designStudioCallHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${pillButton} mt-7`}
            >
              {hero.cta}
            </a>
          </ScrollReveal>
        </section>

        <section aria-labelledby="faq">
          <DesignStudioFaq />
        </section>
      </div>
    </div>
  );
}
