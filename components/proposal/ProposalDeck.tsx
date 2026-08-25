"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Progress } from "@/components/proposal/Progress";
import { Slide } from "@/components/proposal/Slide";
import { ProposalSlideBody } from "@/components/proposal/ProposalSlideBody";
import {
  createEmptyProposalAnswers,
  ownershipItems,
  proposalSlides,
  type ProposalAnswers,
} from "@/data/proposal";
import {
  loadProposalAnswers,
  saveProposalAnswers,
} from "@/lib/proposalStorage";

export function ProposalDeck() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<ProposalAnswers>(
    createEmptyProposalAnswers,
  );
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setAnswers(loadProposalAnswers());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveProposalAnswers(answers);
  }, [answers, ready]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        setIndex((current) => Math.min(current + 1, proposalSlides.length - 1));
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        setIndex((current) => Math.max(current - 1, 0));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const slide = proposalSlides[index];
  const isFirst = index === 0;
  const isLast = index === proposalSlides.length - 1;

  const patch = (partial: Partial<ProposalAnswers>) => {
    setAnswers((current) => ({ ...current, ...partial }));
  };

  return (
    <div className="proposal-deck flex min-h-[calc(100vh-3.5rem)] flex-col md:min-h-[calc(100vh-4rem)]">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-5 md:px-6 md:py-6 lg:px-8">
        <Progress
          index={index}
          total={proposalSlides.length}
          phase={slide.phase}
          onJump={setIndex}
        />

        <div
          key={slide.id}
          className="mt-5 flex min-h-0 flex-1 flex-col proposal-slide-enter"
        >
          <Slide
            number={slide.number}
            title={slide.title}
            intro={slide.intro}
            interactive={slide.interactive}
            aside={
              slide.id === "ownership" ? (
                <div className="rounded-2xl bg-surface px-4 py-4 text-left">
                  <ul className="mt-3 space-y-3">
                    {ownershipItems.map((item) => (
                      <li key={item.title}>
                        <p className="text-sm font-semibold text-[var(--proposal-ink)]">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-sm text-[var(--proposal-muted)]">
                          {item.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : undefined
            }
          >
            <ProposalSlideBody
              slideId={slide.id}
              answers={answers}
              patch={patch}
            />
          </Slide>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-[var(--proposal-border)] pt-4">
          <button
            type="button"
            onClick={() => setIndex((current) => Math.max(current - 1, 0))}
            disabled={isFirst}
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--proposal-border)] bg-surface px-4 py-2.5 text-sm font-semibold text-[var(--proposal-ink)] transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronLeft size={16} strokeWidth={2.25} aria-hidden />
            Back
          </button>
          <p className="hidden text-xs text-[var(--proposal-muted)] sm:block">
            use arrow keys to navigate
          </p>
          <button
            type="button"
            onClick={() =>
              setIndex((current) =>
                Math.min(current + 1, proposalSlides.length - 1),
              )
            }
            disabled={isLast}
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--proposal-accent)] px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:scale-100"
          >
            Next
            <ChevronRight size={16} strokeWidth={2.25} aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
