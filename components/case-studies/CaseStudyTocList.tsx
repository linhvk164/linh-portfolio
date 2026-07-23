"use client";

import { useEffect, useState } from "react";
import {
  getCaseStudyToc,
  type CaseStudyTocItem,
} from "@/data/caseStudyToc";

type CaseStudyTocListProps = {
  slug: string;
  className?: string;
};

export function CaseStudyTocList({ slug, className }: CaseStudyTocListProps) {
  const items = getCaseStudyToc(slug);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let rafId = 0;
    let attempts = 0;
    let cancelled = false;

    function setup() {
      if (cancelled) return;

      const tocItems = getCaseStudyToc(slug);
      const sections = tocItems
        .map((item) => document.getElementById(item.href.replace(/^#/, "")))
        .filter((el): el is HTMLElement => Boolean(el));

      if (sections.length === 0 && attempts < 40) {
        attempts += 1;
        rafId = window.setTimeout(setup, 50);
        return;
      }

      if (sections.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) =>
                a.boundingClientRect.top - b.boundingClientRect.top,
            );

          if (visible[0]?.target.id) {
            setActiveHref(`#${visible[0].target.id}`);
          }
        },
        {
          rootMargin: "-20% 0px -65% 0px",
          threshold: [0, 0.25, 0.5],
        },
      );

      for (const section of sections) observer.observe(section);
    }

    setup();

    return () => {
      cancelled = true;
      window.clearTimeout(rafId);
      observer?.disconnect();
    };
  }, [slug]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Case study contents" className={className}>
      <ol>
        {items.map((item) => (
          <TocLink
            key={item.href}
            item={item}
            active={activeHref === item.href}
          />
        ))}
      </ol>
    </nav>
  );
}

function TocLink({
  item,
  active,
}: {
  item: CaseStudyTocItem;
  active: boolean;
}) {
  return (
    <li>
      <a
        href={item.href}
        className={`block rounded-[var(--radius-sm)] px-2.5 py-1 text-sm leading-snug transition-colors ${
          active
            ? "bg-[#f3f3f3] font-semibold text-ink"
            : "text-ink-muted hover:bg-[#f7f7f7] hover:text-ink"
        }`}
      >
        {item.label}
      </a>
    </li>
  );
}
