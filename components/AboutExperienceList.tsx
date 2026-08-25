"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { AboutExperience } from "@/data/about";

const sectionHeadingClassName =
  "text-xl font-semibold tracking-tight text-ink md:text-2xl";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-semibold text-ink">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}

function ExperienceAccordionItem({
  job,
  isOpen,
  onToggle,
}: {
  job: AboutExperience;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();
  const hasBody = Boolean(job.description || job.bullets?.length);

  return (
    <div className="border-b border-border">
      <button
        id={buttonId}
        type="button"
        onClick={hasBody ? onToggle : undefined}
        aria-expanded={hasBody ? isOpen : undefined}
        aria-controls={hasBody ? panelId : undefined}
        disabled={!hasBody}
        className={`flex w-full items-start justify-between gap-4 py-4 text-left md:py-5 ${
          hasBody ? "" : "cursor-default"
        }`}
      >
        <div className="min-w-0 flex-1 space-y-0.5">
          <h3 className="text-base font-semibold tracking-tight text-ink">
            {job.role}
          </h3>
          {job.org ? (
            <p className="text-sm leading-snug text-ink-muted">{job.org}</p>
          ) : null}
        </div>
        <div className="flex shrink-0 items-start gap-3">
          <p className="pt-0.5 text-xs text-ink-soft sm:text-sm">{job.dates}</p>
          {hasBody ? (
            <ChevronDown
              size={18}
              strokeWidth={2.25}
              aria-hidden
              className={`mt-0.5 text-ink-soft transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          ) : null}
        </div>
      </button>

      {hasBody ? (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className={`grid transition-[grid-template-rows] duration-200 ease-out ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-2 pb-4 md:pb-5">
              {job.description ? (
                <p className="text-base leading-relaxed text-case-study-body">
                  <RichText text={job.description} />
                </p>
              ) : null}
              {job.bullets?.length ? (
                <ul className="space-y-2 text-base leading-relaxed text-case-study-body">
                  {job.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 64)} className="flex gap-2.5">
                      <span
                        className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-ink"
                        aria-hidden
                      />
                      <RichText text={bullet} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function AboutExperienceList({
  heading,
  jobs,
  defaultOpenFirst = false,
}: {
  heading: string;
  jobs: AboutExperience[];
  defaultOpenFirst?: boolean;
}) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>(() => {
    if (!defaultOpenFirst || jobs.length === 0) return {};
    const first = jobs[0];
    return { [`${first.role}-${first.org}-${first.dates}`]: true };
  });

  return (
    <div>
      <h2 className={sectionHeadingClassName}>{heading}</h2>
      <div className="mt-2 border-t border-border md:mt-3">
        {jobs.map((job) => {
          const key = `${job.role}-${job.org}-${job.dates}`;
          return (
            <ExperienceAccordionItem
              key={key}
              job={job}
              isOpen={Boolean(openItems[key])}
              onToggle={() =>
                setOpenItems((current) => ({
                  ...current,
                  [key]: !current[key],
                }))
              }
            />
          );
        })}
      </div>
    </div>
  );
}
