"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { designStudio } from "@/data/designStudio";
import { publicPath } from "@/lib/assets";

const DURATION_MS = 650;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (reduceMotion) {
        setDisplay(value);
        return;
      }

      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / DURATION_MS, 1);
        setDisplay(Math.round(easeOutCubic(progress) * value));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={nodeRef}>
      {display}
      {suffix}
    </span>
  );
}

export function DesignStudioStats() {
  return (
    <dl className="design-studio-stats divide-y divide-border">
      {designStudio.about.stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center justify-between gap-4 py-6 first:pt-0 last:pb-0"
        >
          <div>
            <dt className="sr-only">{stat.label}</dt>
            <dd className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </dd>
            <p className="mt-1 text-sm text-ink-muted md:text-base">{stat.label}</p>
          </div>
          <div className="design-studio-stat-photo shrink-0">
            <div className="relative h-[6.5rem] w-[9.75rem] overflow-hidden rounded-[var(--radius-sm)]">
              <Image
                src={publicPath(stat.image)}
                alt={stat.imageAlt}
                fill
                className="object-cover"
                sizes="156px"
                style={{
                  objectPosition: stat.imagePosition,
                  transform: `scale(${stat.imageZoom})`,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </dl>
  );
}
