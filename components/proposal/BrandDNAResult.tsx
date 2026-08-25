"use client";

import { useState } from "react";
import type { BrandDnaResult } from "@/lib/brandDna";
import { brandDnaPage } from "@/data/brandDna";

export function BrandDNAResult({ result }: { result: BrandDnaResult }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result.copyText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-4 rounded-2xl border border-[var(--proposal-border)] bg-surface p-4 md:p-5">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--proposal-muted)]">
          Your Brand DNA
        </p>
        <p className="mt-1.5 text-xl font-semibold tracking-tight text-[var(--proposal-ink)]">
          {result.feelLabels.join(" · ")}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-[var(--proposal-muted)]">
        {result.personality}
      </p>
      <button
        type="button"
        onClick={handleCopy}
        className="rounded-full bg-[var(--proposal-accent)] px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-[1.02]"
      >
        {copied ? brandDnaPage.copiedCta : brandDnaPage.copyCta}
      </button>
    </div>
  );
}
