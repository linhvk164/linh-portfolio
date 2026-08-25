"use client";

import { useState } from "react";

type TagInputProps = {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
  suggestions?: readonly string[];
  max?: number;
  placeholder?: string;
};

export function TagInput({
  label,
  values,
  onChange,
  suggestions = [],
  max = 8,
  placeholder = "Add a word",
}: TagInputProps) {
  const [draft, setDraft] = useState("");

  const add = (word: string) => {
    const next = word.trim().toLowerCase();
    if (!next || values.includes(next) || values.length >= max) return;
    onChange([...values, next]);
    setDraft("");
  };

  return (
    <div>
      <p className="text-sm font-medium text-[var(--proposal-ink)]">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {values.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => onChange(values.filter((item) => item !== value))}
            className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-[var(--proposal-ink)]"
          >
            {value} ×
          </button>
        ))}
      </div>
      <div className="mt-2 flex gap-2">
        <input
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              add(draft);
            }
          }}
          placeholder={placeholder}
          className="min-w-0 flex-1 rounded-full border border-[var(--proposal-border)] bg-surface px-3.5 py-2 text-sm outline-none focus:border-[var(--proposal-accent)]"
        />
        <button
          type="button"
          onClick={() => add(draft)}
          className="rounded-full bg-[var(--proposal-accent)] px-3.5 py-2 text-xs font-semibold text-white"
        >
          Add
        </button>
      </div>
      {suggestions.length > 0 ? (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {suggestions
            .filter((item) => !values.includes(item))
            .slice(0, 8)
            .map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => add(item)}
                className="rounded-full border border-[var(--proposal-border)] px-2.5 py-1 text-[11px] font-medium text-[var(--proposal-muted)] hover:border-[var(--proposal-accent)] hover:text-[var(--proposal-ink)]"
              >
                + {item}
              </button>
            ))}
        </div>
      ) : null}
    </div>
  );
}
