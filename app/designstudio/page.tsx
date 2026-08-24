"use client";

import { useEffect } from "react";

/** Old Design Studio URL — redirect to Freelance. */
export default function DesignStudioRedirectPage() {
  useEffect(() => {
    window.location.replace("/freelance");
  }, []);

  return (
    <main className="flex min-h-[50vh] items-center justify-center px-4">
      <p className="text-sm text-ink-muted">
        Redirecting to{" "}
        <a href="/freelance" className="font-medium text-accent underline">
          Freelance
        </a>
        …
      </p>
    </main>
  );
}
