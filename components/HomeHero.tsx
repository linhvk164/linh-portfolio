"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { hero } from "@/data/hero";
import { publicPath } from "@/lib/assets";

const VINYL_COVER_SRC = "/images/general/vinyl-cover.png";

const TORONTO_TZ = "America/Toronto";
const HERO_CARD =
  "rounded-[1.75rem] bg-white shadow-[0_1px_0_rgba(26,43,36,0.04)]";
const heroWidgetLabel =
  "text-[0.65rem] font-semibold leading-snug tracking-wide text-ink-soft";
const heroWidgetTitle =
  "text-xl font-bold leading-snug tracking-tight text-ink md:text-2xl";

function RoleTag({ children }: { children: string }) {
  return (
    <span className="inline-block bg-white px-2 py-0.5 font-semibold text-ink">
      {children}
    </span>
  );
}

function formatTorontoTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: TORONTO_TZ,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
    .format(date)
    .replace(/\s/g, "")
    .toLowerCase();
}

function torontoAbbrev(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TORONTO_TZ,
    timeZoneName: "short",
  }).formatToParts(date);
  return parts.find((part) => part.type === "timeZoneName")?.value ?? "ET";
}

function MusicWidget() {
  return (
    <div className={`${HERO_CARD} relative flex min-h-[9.5rem] flex-col justify-center overflow-hidden px-4 py-6 md:min-h-[10.5rem] md:px-5 md:py-7`}>
      <div className="relative z-[1] min-w-0 pr-24 md:pr-28">
        <p className={heroWidgetLabel}>Currently listening to</p>
        <p className={`mt-0.5 ${heroWidgetTitle}`}>
          {hero.currentlyPlaying.title}
        </p>
        {hero.currentlyPlaying.artist && (
          <p className="mt-0.5 text-sm text-ink-soft">
            {hero.currentlyPlaying.artist}
          </p>
        )}
        <a
          href={hero.currentlyPlaying.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex w-fit items-center gap-1.5 text-xs font-medium text-ink-muted transition-colors hover:text-accent-hover"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-badge text-ink">
            <ArrowUpRight size={12} strokeWidth={2.5} aria-hidden />
          </span>
          view playlist
        </a>
      </div>
      <div
        className="pointer-events-none absolute top-1/2 right-[-0.75rem] z-0 h-28 w-28 -translate-y-1/2 md:right-[-1rem] md:h-32 md:w-32"
        aria-hidden
      >
        <div className="hero-vinyl relative h-full w-full">
          <Image
            src={publicPath(VINYL_COVER_SRC)}
            alt=""
            width={128}
            height={128}
            className="hero-vinyl-cover absolute top-1/2 left-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
          />
          <span className="hero-vinyl-hole" />
        </div>
      </div>
    </div>
  );
}

function ClockWidget() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const time = now ? formatTorontoTime(now) : "—:—";
  const abbrev = now ? torontoAbbrev(now) : "EDT";

  return (
    <div
      className={`${HERO_CARD} flex aspect-square h-full w-auto flex-col items-start justify-end px-4 py-5 text-left md:px-5 md:py-6`}
    >
      <p className={heroWidgetLabel}>
        Ontario, CA ({abbrev})
      </p>
      <p className={`mt-0.5 tabular-nums ${heroWidgetTitle}`}>
        {time}
      </p>
    </div>
  );
}

export function HomeHero() {
  return (
    <section
      aria-label="Introduction"
      className="grid w-full grid-cols-1 items-center gap-10 py-10 md:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-10 lg:py-16"
    >
      <div className="hero-intro min-w-0">
        <h1 className="hero-intro-line text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15] font-bold tracking-[-0.03em] text-ink">
          {hero.greeting}
        </h1>
        <p
          className="hero-intro-line mt-4 text-[clamp(1.25rem,3vw,2rem)] leading-[1.35] font-bold tracking-[-0.02em] text-ink"
          style={{ "--hero-delay": "80ms" } as CSSProperties}
        >
          a <RoleTag>{hero.roles[0]}</RoleTag>, a{" "}
          <RoleTag>{hero.roles[1]}</RoleTag>
        </p>
        <p
          className="hero-intro-line mt-4 text-[clamp(1.25rem,3vw,2rem)] leading-[1.35] font-bold tracking-[-0.02em] text-ink"
          style={{ "--hero-delay": "160ms" } as CSSProperties}
        >
          {hero.chatLead}{" "}
          <a
            href="#contact"
            className="underline decoration-ink/25 underline-offset-[0.2em] transition-colors hover:text-accent-hover hover:decoration-accent-hover"
          >
            {hero.chatCta}
          </a>
        </p>
      </div>

      <div
        className="hero-widgets grid grid-cols-[1fr_auto] items-stretch gap-3 sm:gap-4"
        style={{ "--hero-delay": "120ms" } as CSSProperties}
      >
        <MusicWidget />
        <ClockWidget />
      </div>
    </section>
  );
}
