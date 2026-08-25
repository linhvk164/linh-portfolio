"use client";

import { proposalPhases, type ProposalPhase } from "@/data/proposal";

type ProgressProps = {
  index: number;
  total: number;
  phase: ProposalPhase;
  onJump?: (index: number) => void;
};

export function Progress({ index, total, phase, onJump }: ProgressProps) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {proposalPhases.map((item) => (
            <span
              key={item}
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${
                item === phase
                  ? "bg-[var(--proposal-accent)] text-white"
                  : "bg-surface text-[var(--proposal-muted)]"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <p className="text-xs font-medium text-[var(--proposal-muted)]">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>
      {onJump ? (
        <div className="flex gap-1">
          {Array.from({ length: total }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => onJump(i)}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i <= index
                  ? "bg-[var(--proposal-accent)]"
                  : "bg-[var(--proposal-border)]"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
