"use client";

import { useEffect, useId, useState } from "react";
import { Copy, Download, Eye, X } from "lucide-react";
import type { ProposalAnswers } from "@/data/proposal";
import {
  downloadProposalBrief,
  formatProposalBrief,
} from "@/lib/proposalBrief";

export function ClientBriefActions({
  answers,
  align = "center",
}: {
  answers: ProposalAnswers;
  align?: "center" | "end";
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dialogTitleId = useId();
  const brief = formatProposalBrief(answers);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const handleDownload = () => {
    downloadProposalBrief(brief);
  };

  const iconButtonClassName =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--proposal-border)] bg-white text-[var(--proposal-ink)] transition-colors hover:border-[var(--proposal-accent)] hover:bg-[var(--proposal-accent)] hover:text-white";

  return (
    <>
      <div
        className={`flex flex-col gap-1 ${
          align === "end" ? "items-end" : "items-center"
        }`}
      >
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={iconButtonClassName}
            aria-label="View client info"
            title="View"
          >
            <Eye size={18} strokeWidth={2.25} aria-hidden />
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className={iconButtonClassName}
            aria-label="Download client info"
            title="Download"
          >
            <Download size={18} strokeWidth={2.25} aria-hidden />
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className={iconButtonClassName}
            aria-label="Copy client info"
            title={copied ? "Copied" : "Copy"}
          >
            <Copy size={18} strokeWidth={2.25} aria-hidden />
          </button>
        </div>
        {copied ? (
          <p className="text-xs font-medium text-[var(--proposal-accent)]">
            Copied to clipboard
          </p>
        ) : null}
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            className="flex max-h-[min(85vh,40rem)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-[var(--proposal-border)] px-5 py-4">
              <h2
                id={dialogTitleId}
                className="text-base font-semibold text-[var(--proposal-ink)]"
              >
                Client discovery brief
              </h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className={iconButtonClassName}
                  aria-label="Copy client info"
                >
                  <Copy size={16} strokeWidth={2.25} aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={handleDownload}
                  className={iconButtonClassName}
                  aria-label="Download client info"
                >
                  <Download size={16} strokeWidth={2.25} aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className={iconButtonClassName}
                  aria-label="Close"
                >
                  <X size={16} strokeWidth={2.25} aria-hidden />
                </button>
              </div>
            </div>
            <pre className="flex-1 overflow-y-auto whitespace-pre-wrap px-5 py-4 text-left text-sm leading-relaxed text-[var(--proposal-ink)]">
              {brief || "No discovery answers yet."}
            </pre>
          </div>
        </div>
      ) : null}
    </>
  );
}
