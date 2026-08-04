"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArticlesSection } from "@/components/ArticlesSection";
import { ProjectGridCard } from "@/components/ProjectGridCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  homeOtherProjects,
  homeSelectedProjects,
  type FeaturedProject,
} from "@/data/featuredProjects";
import { publicPath } from "@/lib/assets";
import { notifyHomeCoversSettled, resetHomeCoversSettled } from "@/lib/homeFlight";

const leftColumnSlugs = ["folio", "un-habitat-admin"] as const;

const rightColumnSlugs = ["un-habitat-urban-data", "lofu"] as const;

const mobileSelectedOrderSlugs = [
  "folio",
  "un-habitat-urban-data",
  "un-habitat-admin",
  "lofu",
] as const;

const sectionHeadingClassName =
  "text-xl font-semibold tracking-tight text-ink md:text-2xl";

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

const STACK_WIDTH_PX = 450;
const STACK_ASPECT = 0.75;

/** Deal onto the stack */
const INTRO_START_DELAY_MS = 120;
const INTRO_STAGGER_MS = 75;
const INTRO_DURATION_MS = 440;
/** Pause while the full stack is visible */
const STACK_HOLD_MS = 150;
/** Auto-fly into grid slots */
const FLIGHT_DURATION_MS = 880;
const FLIGHT_STAGGER_MS = 65;
/** Crossfade flyers → real covers before revealing chrome */
const CROSSFADE_MS = 280;

function projectsBySlugs(
  slugs: readonly string[],
  source: FeaturedProject[] = homeSelectedProjects,
): FeaturedProject[] {
  return slugs
    .map((slug) => source.find((project) => project.slug === slug))
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
      sizes="450px"
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
    return homeSelectedProjects.filter((project) => !placed.has(project.slug));
  }, []);
  const mobileSelectedProjects = useMemo(
    () => projectsBySlugs(mobileSelectedOrderSlugs),
    [],
  );
  const otherProjects = useMemo(() => homeOtherProjects, []);

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
    let crossfadeTimer = 0;

    const dealEndMs =
      INTRO_START_DELAY_MS +
      Math.max(0, flightProjects.length - 1) * INTRO_STAGGER_MS +
      INTRO_DURATION_MS;
    const flightStartMs = dealEndMs + STACK_HOLD_MS;
    const flightEndMs =
      flightStartMs +
      Math.max(0, flightProjects.length - 1) * FLIGHT_STAGGER_MS +
      FLIGHT_DURATION_MS;

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

      // Pin flyers to final slots, reveal covers underneath, then fade flyers out.
      flightProjects.forEach((project) => {
        const flyer = flyerRefs.current.get(project.slug);
        const target = coverRefs.current.get(project.slug);
        if (!flyer || !target) return;
        const endRect = target.getBoundingClientRect();
        flyer.style.transition = `opacity ${CROSSFADE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`;
        flyer.style.width = `${endRect.width}px`;
        flyer.style.height = `${endRect.height}px`;
        flyer.style.transform = `translate3d(${endRect.left}px, ${endRect.top}px, 0)`;
        flyer.style.opacity = "0";
      });

      setCoversHidden(false);
      notifyHomeCoversSettled();

      crossfadeTimer = window.setTimeout(() => {
        setFlyersLive(false);
      }, CROSSFADE_MS + 40);
    };

    const update = (now = performance.now()) => {
      raf = 0;
      if (finished) return;

      if (startedAt === null) startedAt = now;
      const elapsed = now - startedAt;

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
        // Soft settle into the slot — ease out more in the last stretch.
        const flightEased = easeInOutCubic(flightT);
        const settle = easeOutCubic(flightT);

        const left = lerp(origin.left, endRect.left, flightEased);
        const top = lerp(stackTop, endRect.top, flightEased);
        const width = lerp(origin.width, endRect.width, settle);
        const height = lerp(origin.height, endRect.height, settle);
        const rotate = lerp(stackRotate, 0, settle);
        const scale = lerp(stackScale, 1, settle);
        const opacity = lerp(stackOpacity, 1, Math.min(1, flightEased * 1.15));

        if (dealT <= 0) {
          flyer.style.opacity = "0";
          flyer.style.visibility = "hidden";
          return;
        }

        flyer.style.willChange = "transform, opacity";
        flyer.style.transition = "none";
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
      if (crossfadeTimer) window.clearTimeout(crossfadeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, [flightActive, flyersLive, flightProjects]);

  const deferHeavyMedia = flightActive && coversHidden;
  const hideCopy = flightActive && coversHidden;

  const renderCard = (
    project: FeaturedProject,
    delay = 0,
    options: { trackCover?: boolean; uniformCover?: boolean } = {},
  ) => {
    const trackCover = options.trackCover ?? false;
    const uniformCover = options.uniformCover ?? false;
    const card = (
      <ProjectGridCard
        project={project}
        coverRef={trackCover ? setCoverRef(project.slug) : undefined}
        coverHidden={trackCover && flightActive && coversHidden}
        deferHeavyMedia={trackCover && deferHeavyMedia}
        uniformCover={uniformCover}
        copyHidden={hideCopy}
      />
    );

    if (flightActive) {
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
      {/* Invisible origin for the flyer stack — viewport center */}
      {flightActive ? (
        <div
          ref={stackAnchorRef}
          aria-hidden
          className="pointer-events-none fixed top-1/2 left-1/2 z-0 aspect-[4/3] w-[420px] max-w-[55vw] -translate-x-1/2 -translate-y-1/2 opacity-0"
        />
      ) : null}

      <div className="flex w-full flex-col gap-16 md:gap-16 lg:gap-14">
        <section id="work" ref={workRef} className="flex w-full flex-col gap-14 md:gap-16">
          <div className="flex w-full flex-col gap-6 md:gap-8">
            <h2
              className={`${sectionHeadingClassName}${
                hideCopy ? " invisible" : ""
              }`}
              aria-hidden={hideCopy || undefined}
            >
              Selected work
            </h2>
            {!isDesktop ? (
              <div className="flex min-w-0 flex-col gap-5">
                {mobileSelectedProjects.map((project, index) =>
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
          </div>

          <div className="flex w-full flex-col gap-6 md:gap-8">
            <h2
              className={`${sectionHeadingClassName}${
                hideCopy ? " invisible" : ""
              }`}
              aria-hidden={hideCopy || undefined}
            >
              Discover more
            </h2>
            <div className="grid w-full grid-cols-1 items-start gap-5 sm:grid-cols-2 sm:gap-x-5 md:grid-cols-3 md:gap-x-6">
              {otherProjects.map((project, index) =>
                renderCard(project, index * 80, {
                  trackCover: false,
                  uniformCover: true,
                }),
              )}
            </div>
          </div>

          {!hideCopy ? <ArticlesSection instant /> : null}
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
