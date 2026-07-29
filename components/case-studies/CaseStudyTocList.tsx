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

/** Reading line as a fraction of the viewport height from the top. */
const ACTIVE_LINE = 0.28;

function getActiveHref(items: CaseStudyTocItem[]): string | null {
  if (items.length === 0) return null;

  const marker = window.innerHeight * ACTIVE_LINE;
  let active: string | null = null;

  for (const item of items) {
    const el = document.getElementById(item.href.replace(/^#/, ""));
    if (!el) continue;

    // Last section whose top has crossed the reading line wins
    // (document order), so nested subsections beat their parent.
    if (el.getBoundingClientRect().top <= marker) {
      active = item.href;
    }
  }

  // Above the first section (e.g. hero): keep the first TOC item active.
  return active ?? items[0]?.href ?? null;
}

export function CaseStudyTocList({ slug, className }: CaseStudyTocListProps) {
  const items = getCaseStudyToc(slug);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    let rafId = 0;
    let retryId = 0;
    let attempts = 0;
    let cancelled = false;
    let ticking = false;

    function update() {
      if (cancelled) return;
      setActiveHref(getActiveHref(getCaseStudyToc(slug)));
      ticking = false;
    }

    function onScrollOrResize() {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(update);
    }

    function setup() {
      if (cancelled) return;

      const tocItems = getCaseStudyToc(slug);
      const ready = tocItems.some((item) =>
        document.getElementById(item.href.replace(/^#/, "")),
      );

      if (!ready && attempts < 40) {
        attempts += 1;
        retryId = window.setTimeout(setup, 50);
        return;
      }

      update();
      window.addEventListener("scroll", onScrollOrResize, { passive: true });
      window.addEventListener("resize", onScrollOrResize);
      window.addEventListener("hashchange", update);
    }

    setup();

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(retryId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("hashchange", update);
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
    <li className={item.nested ? "pl-3" : undefined}>
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
