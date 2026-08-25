"use client";

type InputFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  multiline?: boolean;
};

export function InputField({
  label,
  value,
  onChange,
  placeholder,
  multiline = false,
}: InputFieldProps) {
  const fieldClassName =
    "mt-1.5 w-full rounded-xl border border-[var(--proposal-border)] bg-surface px-3.5 py-2.5 text-left text-sm leading-relaxed text-[var(--proposal-ink)] outline-none transition-colors placeholder:text-[var(--proposal-muted)]/70 focus:border-[var(--proposal-accent)]";

  return (
    <label className="block w-full">
      <span className="block text-sm font-medium text-[var(--proposal-ink)]">
        {label}
      </span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          rows={3}
          className={`${fieldClassName} min-h-[5.5rem] resize-y`}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={fieldClassName}
        />
      )}
    </label>
  );
}
