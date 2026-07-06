"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

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

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

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
