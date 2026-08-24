"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function isReload() {
  const nav = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;
  return nav?.type === "reload";
}

function scrollToHash(hash: string, behavior: ScrollBehavior) {
  const target = document.querySelector(hash);
  if (!target) return false;
  target.scrollIntoView({ behavior, block: "start" });
  return true;
}

function resetToTop() {
  if (window.location.hash) {
    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function hashFromHref(href: string, pathname: string): string | null {
  if (href.startsWith("#") && href.length > 1) return href;
  if (pathname === "/" && href.startsWith("/#") && href.length > 2) {
    return href.slice(1);
  }
  return null;
}

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (pathname === "/" && isReload()) {
      resetToTop();
      return;
    }

    // Instant jump on route change unless landing on an in-page anchor.
    requestAnimationFrame(() => {
      const { hash } = window.location;
      if (hash) {
        scrollToHash(hash, "smooth");
        return;
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      const { hash } = window.location;
      if (hash) scrollToHash(hash, "smooth");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor || anchor.target === "_blank") return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const hash = hashFromHref(href, pathname);
      if (!hash) return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      if (window.location.hash !== hash) {
        history.pushState(null, "", `${pathname === "/" ? "" : pathname}${hash}`);
      }
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}
