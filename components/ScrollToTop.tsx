"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function isReload() {
  const nav = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;
  return nav?.type === "reload";
}

function scrollHomeTarget(behavior: ScrollBehavior = "smooth") {
  const { hash } = window.location;

  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior, block: "start" });
      return;
    }
  }

  window.scrollTo({ top: 0, left: 0, behavior });
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

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    // Reloads should always land at the top, even if a #work / #contact hash remains.
    if (isReload()) {
      resetToTop();
      return;
    }

    requestAnimationFrame(() => scrollHomeTarget("smooth"));
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const onHashChange = () => scrollHomeTarget("smooth");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  return null;
}
