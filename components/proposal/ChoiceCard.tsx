"use client";

type ChoiceCardProps = {
  title: string;
  description?: string;
  selected?: boolean;
  onClick: () => void;
};

export function ChoiceCard({
  title,
  description,
  selected = false,
  onClick,
}: ChoiceCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border px-4 py-3.5 text-left transition-all duration-200 ${
        selected
          ? "border-[var(--proposal-accent)] bg-[var(--proposal-accent)] text-white"
          : "border-[var(--proposal-border)] bg-surface text-[var(--proposal-ink)] hover:border-[var(--proposal-accent)]"
      }`}
    >
      <span className="block text-sm font-semibold tracking-tight">
        {title}
      </span>
      {description ? (
        <span
          className={`mt-1 block text-sm leading-snug ${
            selected ? "text-white/85" : "text-[var(--proposal-muted)]"
          }`}
        >
          {description}
        </span>
      ) : null}
    </button>
  );
}
