"use client";

import { useEffect } from "react";

/** Legacy side-quests URL — same destination as Explore. */
export default function SideQuestsRedirectPage() {
  useEffect(() => {
    window.location.replace("/#discover");
  }, []);

  return (
    <main className="flex min-h-[50vh] items-center justify-center px-4">
      <p className="text-sm text-ink-muted">
        Redirecting to{" "}
        <a href="/#discover" className="font-medium text-accent underline">
          Discover more
        </a>
        …
      </p>
    </main>
  );
}
