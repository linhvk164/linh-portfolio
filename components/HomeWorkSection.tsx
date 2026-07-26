"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PageEnter } from "@/components/PageEnter";
import { ProjectGridCard } from "@/components/ProjectGridCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  homeFeaturedProjects,
  type FeaturedProject,
} from "@/data/featuredProjects";
import { publicPath } from "@/lib/assets";
import { notifyHomeCoversSettled, resetHomeCoversSettled } from "@/lib/homeFlight";

const leftColumnSlugs = [
  "folio",
  "un-habitat-admin",
  "lofu",
] as const;

const rightColumnSlugs = [
  "un-habitat-urban-data",
  "qol-hackathon",
  "un-habitat-design-system",
] as const;

const mobileOrderSlugs = [
  "folio",
  "un-habitat-urban-data",
  "un-habitat-admin",
  "qol-hackathon",
  "un-habitat-design-system",
  "lofu",
  "chordio",
] as const;

/** Lightweight stills for the flying stack — never load cover videos here. */
const STACK_STILL_FALLBACK: Record<string, string> = {
  folio: "/images/folio/folio-static-cover.webp",
};

/** Fan layout for the stacked covers (origin state). */
const STACK_POSE: ReadonlyArray<{
  x: number;
  y: number;
  rotate: number;
  z: number;
}> = [
  { x: -12, y: 18, rotate: -14, z: 1 },
  { x: 22, y: -8, rotate: 10, z: 2 },
  { x: -4, y: 4, rotate: -4, z: 3 },
  { x: 14, y: 22, rotate: 13, z: 4 },
  { x: -18, y: -10, rotate: -9, z: 5 },
  { x: 8, y: 8, rotate: 5, z: 6 },
  { x: -3, y: -3, rotate: -2, z: 7 },
];

const STACK_WIDTH_PX = 300;
const STACK_ASPECT = 0.75;

/** Deal onto the stack */
const INTRO_START_DELAY_MS = 160;
const INTRO_STAGGER_MS = 95;
const INTRO_DURATION_MS = 560;
/** Pause while the full stack is visible */
const STACK_HOLD_MS = 210;
/** Auto-fly into grid slots */
const FLIGHT_DURATION_MS = 980;
const FLIGHT_STAGGER_MS = 75;

function projectsBySlugs(slugs: readonly string[]): FeaturedProject[] {
  return slugs
    .map((slug) => homeFeaturedProjects.find((project) => project.slug === slug))
    .filter((project): project is FeaturedProject => Boolean(project));
}

function getStackStill(project: FeaturedProject): string | undefined {
  return project.coverImage || STACK_STILL_FALLBACK[project.slug];
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

type CoverRect = {
  left: number;
  top: number;
  width: number;
  height: number;
  rotate: number;
};

function FlyerCover({
  project,
  priority,
}: {
  project: FeaturedProject;
  priority?: boolean;
}) {
  const still = getStackStill(project);
  if (!still) return null;

  return (
    <Image
      src={publicPath(still)}
      alt=""
      width={720}
      height={540}
      sizes="300px"
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      draggable={false}
      className="h-full w-full object-cover object-center"
    />
  );
}

export function HomeWorkSection() {
  const stackAnchorRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const coverRefs = useRef(new Map<string, HTMLDivElement>());
  const flyerRefs = useRef(new Map<string, HTMLDivElement>());
  const [flightActive, setFlightActive] = useState(false);
  const [coversHidden, setCoversHidden] = useState(false);
  const [flyersLive, setFlyersLive] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [mountedFlyerCount, setMountedFlyerCount] = useState(0);

  const leftProjects = useMemo(() => projectsBySlugs(leftColumnSlugs), []);
  const rightProjects = useMemo(() => projectsBySlugs(rightColumnSlugs), []);
  const overflowProjects = useMemo(() => {
    const placed = new Set<string>([...leftColumnSlugs, ...rightColumnSlugs]);
    return homeFeaturedProjects.filter((project) => !placed.has(project.slug));
  }, []);
  const mobileProjects = useMemo(() => projectsBySlugs(mobileOrderSlugs), []);

  const flightProjects = useMemo(() => {
    return [...leftProjects, ...rightProjects, ...overflowProjects].filter(
      (project) => Boolean(getStackStill(project)),
    );
  }, [leftProjects, rightProjects, overflowProjects]);

  const setCoverRef = useCallback(
    (slug: string) => (node: HTMLDivElement | null) => {
      if (node) coverRefs.current.set(slug, node);
      else coverRefs.current.delete(slug);
    },
    [],
  );

  const setFlyerRef = useCallback(
    (slug: string) => (node: HTMLDivElement | null) => {
      if (node) flyerRefs.current.set(slug, node);
      else flyerRefs.current.delete(slug);
    },
    [],
  );

  useEffect(() => {
    const syncMode = () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      // Two-col case study layout from tablet up; flyer stack only on desktop.
      const tabletUp = window.matchMedia("(min-width: 640px)").matches;
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      setIsDesktop(tabletUp);
      const active = !reduce && desktop;
      setFlightActive(active);
      setCoversHidden(active);
      setFlyersLive(active);
      if (!active) {
        setMountedFlyerCount(0);
        notifyHomeCoversSettled();
      } else {
        resetHomeCoversSettled();
      }
    };

    syncMode();
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const tabletQuery = window.matchMedia("(min-width: 640px)");
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    motionQuery.addEventListener("change", syncMode);
    tabletQuery.addEventListener("change", syncMode);
    desktopQuery.addEventListener("change", syncMode);
    return () => {
      motionQuery.removeEventListener("change", syncMode);
      tabletQuery.removeEventListener("change", syncMode);
      desktopQuery.removeEventListener("change", syncMode);
    };
  }, []);

  // Progressively mount flyer images as the deal-in advances.
  useEffect(() => {
    if (!flightActive || !flyersLive) return;

    setMountedFlyerCount(1);
    const timers: number[] = [];
    for (let i = 1; i < flightProjects.length; i += 1) {
      timers.push(
        window.setTimeout(
          () => setMountedFlyerCount((count) => Math.max(count, i + 1)),
          INTRO_START_DELAY_MS + i * INTRO_STAGGER_MS,
        ),
      );
    }
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [flightActive, flyersLive, flightProjects.length]);

  // One-shot: deal into a stack, then auto-fly to grid slots. Reload-only.
  useEffect(() => {
    if (!flightActive || !flyersLive) return;

    let raf = 0;
    let startedAt: number | null = null;
    let finished = false;
    let sidebarRevealed = false;

    const dealEndMs =
      INTRO_START_DELAY_MS +
      Math.max(0, flightProjects.length - 1) * INTRO_STAGGER_MS +
      INTRO_DURATION_MS;
    const flightStartMs = dealEndMs + STACK_HOLD_MS;
    const flightEndMs =
      flightStartMs +
      Math.max(0, flightProjects.length - 1) * FLIGHT_STAGGER_MS +
      FLIGHT_DURATION_MS;
    // Reveal chrome once the first covers are mostly home — don't wait for the last stagger.
    const sidebarRevealMs = flightStartMs + FLIGHT_DURATION_MS * 0.35;

    const readStackOrigin = (index: number): CoverRect | null => {
      const anchor = stackAnchorRef.current;
      if (!anchor) return null;
      const rect = anchor.getBoundingClientRect();
      const pose = STACK_POSE[index % STACK_POSE.length];
      const width = Math.min(STACK_WIDTH_PX, Math.max(180, rect.width * 0.92));
      const height = width * STACK_ASPECT;
      return {
        left: rect.left + rect.width / 2 - width / 2 + pose.x,
        top: rect.top + rect.height / 2 - height / 2 + pose.y,
        width,
        height,
        rotate: pose.rotate,
      };
    };

    const finish = () => {
      if (finished) return;
      finished = true;
      setCoversHidden(false);
      setFlyersLive(false);
      if (!sidebarRevealed) {
        sidebarRevealed = true;
        notifyHomeCoversSettled();
      }
    };

    const update = (now = performance.now()) => {
      raf = 0;
      if (finished) return;

      if (startedAt === null) startedAt = now;
      const elapsed = now - startedAt;

      if (!sidebarRevealed && elapsed >= sidebarRevealMs) {
        sidebarRevealed = true;
        notifyHomeCoversSettled();
      }

      if (elapsed >= flightStartMs) {
        setMountedFlyerCount(flightProjects.length);
      }

      if (elapsed >= flightEndMs) {
        finish();
        return;
      }

      flightProjects.forEach((project, index) => {
        const flyer = flyerRefs.current.get(project.slug);
        const target = coverRefs.current.get(project.slug);
        const origin = readStackOrigin(index);
        if (!flyer || !target || !origin) return;

        const pose = STACK_POSE[index % STACK_POSE.length];
        const endRect = target.getBoundingClientRect();
        if (endRect.width < 2 || endRect.height < 2) return;

        const dealElapsed =
          elapsed - INTRO_START_DELAY_MS - index * INTRO_STAGGER_MS;
        const dealT = clamp(dealElapsed / INTRO_DURATION_MS, 0, 1);
        const dealEased = easeOutCubic(dealT);

        const stackTop = lerp(origin.top + 64, origin.top, dealEased);
        const stackRotate = lerp(origin.rotate * 1.45, origin.rotate, dealEased);
        const stackScale = lerp(0.84, 1, dealEased);
        const stackOpacity = dealEased;

        const cardFlightStart =
          flightStartMs + index * FLIGHT_STAGGER_MS;
        const flightElapsed = elapsed - cardFlightStart;
        const flightT = clamp(flightElapsed / FLIGHT_DURATION_MS, 0, 1);
        const flightEased = easeInOutCubic(flightT);

        const left = lerp(origin.left, endRect.left, flightEased);
        const top = lerp(stackTop, endRect.top, flightEased);
        const width = lerp(origin.width, endRect.width, flightEased);
        const height = lerp(origin.height, endRect.height, flightEased);
        const rotate = lerp(stackRotate, 0, flightEased);
        const scale = lerp(stackScale, 1, flightEased);
        const opacity = lerp(stackOpacity, 1, Math.min(1, flightEased * 1.2));

        if (dealT <= 0) {
          flyer.style.opacity = "0";
          flyer.style.visibility = "hidden";
          return;
        }

        flyer.style.willChange = "transform";
        flyer.style.visibility = "visible";
        flyer.style.opacity = String(opacity);
        flyer.style.width = `${width}px`;
        flyer.style.height = `${height}px`;
        flyer.style.zIndex = String(50 + pose.z);
        flyer.style.transform = `translate3d(${left}px, ${top}px, 0) rotate(${rotate}deg) scale(${scale})`;
      });

      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);

    const onResize = () => {
      if (!finished && !raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("resize", onResize);

    return () => {
      finished = true;
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [flightActive, flyersLive, flightProjects]);

  const deferHeavyMedia = flightActive && coversHidden;

  const renderCard = (
    project: FeaturedProject,
    delay = 0,
    options: { trackCover?: boolean } = {},
  ) => {
    const trackCover = options.trackCover ?? false;
    const card = (
      <ProjectGridCard
        project={project}
        coverRef={trackCover ? setCoverRef(project.slug) : undefined}
        coverHidden={trackCover && flightActive && coversHidden}
        deferHeavyMedia={trackCover && deferHeavyMedia}
      />
    );

    if (flightActive && trackCover) {
      return (
        <div key={project.slug} className="w-full min-w-0">
          {card}
        </div>
      );
    }

    return (
      <ScrollReveal
        key={project.slug}
        className="w-full min-w-0"
        delay={delay}
      >
        {card}
      </ScrollReveal>
    );
  };

  return (
    <>
      <div className="flex w-full flex-col gap-16 md:gap-16 lg:gap-5">
        <section
          aria-label="Introduction continued"
          className="grid w-full grid-cols-1 items-start justify-items-start gap-4 pt-1 text-left md:gap-5 lg:grid-cols-[auto_auto] lg:items-end lg:justify-start lg:gap-14"
        >
          <div className="home-intro-enter-support w-full lg:mb-8">
            <div className="flex w-full max-w-[30rem] flex-col items-start gap-3 md:max-w-[34rem] md:gap-4 lg:max-w-[min(100%,34rem)]">
              <p className="home-intro-support max-w-none">
                I specialize in taking abstract social good concepts and turning
                them into <strong> digital products.</strong> My
                background in <strong>non-profits</strong> fuels a drive to{" "}
                <strong>solve real user problems.</strong> I recently shipped a
                global quality-of-life platform across 82+ cities, designing
                accessible data visualizations and CMS tools.
              </p>
              <div className="home-intro-enter-hint">
                <p className="intro-scroll-hint flex items-center justify-start gap-1.5 text-sm text-ink-soft">
                  <span className="intro-scroll-hint-glyph" aria-hidden>
                    ↓
                  </span>
                  Scroll down to explore !
                </p>
              </div>
            </div>
          </div>

          <PageEnter
            delay={80}
            className="relative hidden min-h-[300px] w-[340px] max-w-full lg:block"
          >
            <div
              ref={stackAnchorRef}
              className="relative aspect-[4/3] w-[340px] max-w-full"
              aria-hidden
            />
          </PageEnter>
        </section>

        <section id="work" ref={workRef} className="w-full">
          {!isDesktop ? (
            <div className="flex min-w-0 flex-col gap-5">
              {mobileProjects.map((project, index) =>
                renderCard(project, index * 80, { trackCover: false }),
              )}
            </div>
          ) : (
            <div className="grid w-full grid-cols-1 items-start gap-5 sm:grid-cols-2 sm:gap-x-5 md:gap-x-6">
              <div className="flex min-w-0 flex-col gap-5 sm:gap-6 md:gap-8">
                {[...leftProjects, ...overflowProjects].map((project, index) =>
                  renderCard(project, index * 80, { trackCover: true }),
                )}
              </div>
              <div className="flex min-w-0 flex-col gap-5 sm:gap-6 md:gap-8">
                {rightProjects.map((project, index) =>
                  renderCard(project, 40 + index * 80, { trackCover: true }),
                )}
              </div>
            </div>
          )}
        </section>
      </div>

      {flyersLive
        ? flightProjects.slice(0, mountedFlyerCount).map((project, index) => (
            <div
              key={`flyer-${project.slug}`}
              ref={setFlyerRef(project.slug)}
              aria-hidden
              className="pointer-events-none fixed top-0 left-0 overflow-hidden border border-border bg-bg will-change-transform"
              style={{
                width: STACK_WIDTH_PX,
                height: STACK_WIDTH_PX * STACK_ASPECT,
                opacity: 0,
                visibility: "hidden",
                transformOrigin: "center center",
                contain: "paint",
              }}
            >
              <FlyerCover project={project} priority={index < 2} />
            </div>
          ))
        : null}
    </>
  );
}
