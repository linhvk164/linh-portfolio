"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { brandDnaPage, brandDnaQuestions } from "@/data/brandDna";
import { designStudioCallHref } from "@/data/designStudio";
import {
  generateBrandDna,
  getQuestionCount,
  resetQuizAnswers,
  type BrandDnaResult,
} from "@/lib/brandDna";
import { labelCaps, pillButton, pillButtonSecondary } from "@/lib/layout";

type Phase = "quiz" | "result";

const TOTAL = getQuestionCount();

function ProgressBar({
  currentIndex,
  total,
}: {
  currentIndex: number;
  total: number;
}) {
  const percent = Math.round(((currentIndex + 1) / total) * 100);

  return (
    <div className="w-full">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className={`${labelCaps} text-ink-soft`}>{brandDnaPage.brow}</p>
          <p className="mt-1 text-sm font-semibold text-ink">
            Question {currentIndex + 1} of {total}
          </p>
        </div>
        <p className="text-sm tabular-nums text-ink-muted">
          {currentIndex + 1} / {total}
          <span className="mx-1.5 text-ink-soft">·</span>
          {percent}%
        </p>
      </div>
      <div
        className="mt-4 h-1.5 overflow-hidden rounded-full bg-border"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-label={`Quiz progress: ${percent}%`}
      >
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function AnswerCard({
  title,
  description,
  selected,
  onSelect,
  index,
}: {
  title: string;
  description?: string;
  selected: boolean;
  onSelect: () => void;
  index: number;
}) {
  const letter = String.fromCharCode(65 + index);

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group w-full rounded-2xl border px-4 py-4 text-left transition-all duration-200 md:px-5 md:py-5 ${
        selected
          ? "border-accent bg-accent text-white shadow-[0_0_0_1px_var(--accent)]"
          : "border-border bg-surface hover:border-ink-soft hover:bg-surface-muted focus-visible:border-accent"
      }`}
    >
      <span className="flex items-start gap-3 md:gap-4">
        <span
          className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
            selected
              ? "bg-white/20 text-white"
              : "bg-bg text-ink-muted group-hover:text-ink"
          }`}
          aria-hidden
        >
          {letter}
        </span>
        <span className="min-w-0">
          <span
            className={`block text-base font-semibold tracking-tight md:text-lg ${
              selected ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </span>
          {description ? (
            <span
              className={`mt-1 block text-sm leading-relaxed md:text-[0.9375rem] ${
                selected ? "text-white/80" : "text-ink-muted"
              }`}
            >
              {description}
            </span>
          ) : null}
        </span>
      </span>
    </button>
  );
}

function ResultView({
  result,
  onRetake,
}: {
  result: BrandDnaResult;
  onRetake: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const copyResetRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyResetRef.current) window.clearTimeout(copyResetRef.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result.copyText);
      setCopied(true);
      if (copyResetRef.current) window.clearTimeout(copyResetRef.current);
      copyResetRef.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <ScrollReveal>
        <p className={`${labelCaps} text-ink-soft`}>{brandDnaPage.resultBrow}</p>
        <h2 className="design-studio-about-title mt-2 tracking-tight text-ink">
          {brandDnaPage.resultFeelLabel}
        </h2>
        <p className="mt-4 text-xl font-semibold tracking-tight text-ink md:text-2xl">
          {result.feelLabels.join(" · ")}
        </p>
      </ScrollReveal>

      <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
        <ScrollReveal delay={60}>
          <h3 className="text-sm font-semibold tracking-[0.08em] text-ink-soft uppercase">
            {brandDnaPage.personalityLabel}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-ink-muted md:text-lg">
            {result.personality}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={90}>
          <h3 className="text-sm font-semibold tracking-[0.08em] text-ink-soft uppercase">
            {brandDnaPage.voiceLabel}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-ink-muted md:text-lg">
            {result.voice}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <h3 className="text-sm font-semibold tracking-[0.08em] text-ink-soft uppercase">
            {brandDnaPage.visualLabel}
          </h3>
          <ul className="mt-3 space-y-2">
            {result.visuals.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-base text-ink-muted md:text-lg"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold tracking-[0.08em] text-ink-soft uppercase">
                {brandDnaPage.shouldFeelLabel}
              </h3>
              <ul className="mt-3 space-y-2">
                {result.shouldFeel.map((item) => (
                  <li key={item} className="text-base font-medium text-ink md:text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-[0.08em] text-ink-soft uppercase">
                {brandDnaPage.avoidLabel}
              </h3>
              <ul className="mt-3 space-y-2">
                {result.avoid.map((item) => (
                  <li key={item} className="text-base text-ink-muted md:text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <h3 className="text-sm font-semibold tracking-[0.08em] text-ink-soft uppercase">
            {brandDnaPage.dnaLabel}
          </h3>
          <div className="mt-3 rounded-2xl border border-border bg-surface p-5 md:p-6">
            <p className="text-base leading-relaxed text-ink md:text-lg">
              {result.copyText}
            </p>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className={`${pillButton} mt-5`}
            aria-live="polite"
          >
            {copied ? (
              <>
                <Check size={16} strokeWidth={2.5} aria-hidden />
                {brandDnaPage.copiedCta}
              </>
            ) : (
              brandDnaPage.copyCta
            )}
          </button>
        </ScrollReveal>

        <ScrollReveal delay={210}>
          <div className="border-t border-border pt-10 text-center">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              {brandDnaPage.workTogetherHeading}
            </h3>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={designStudioCallHref}
                target="_blank"
                rel="noopener noreferrer"
                className={pillButton}
              >
                {brandDnaPage.workTogetherCta}
              </a>
              <button
                type="button"
                onClick={onRetake}
                className={pillButtonSecondary}
              >
                {brandDnaPage.retakeCta}
              </button>
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              Or explore{" "}
              <Link href="/freelance" className="font-medium text-ink underline underline-offset-2">
                freelance web design
              </Link>
              .
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

export function BrandDnaContent() {
  const [phase, setPhase] = useState<Phase>("quiz");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>(
    resetQuizAnswers,
  );
  const [result, setResult] = useState<BrandDnaResult | null>(null);
  const [transitionKey, setTransitionKey] = useState(0);
  const questionHeadingId = useId();
  const quizTopRef = useRef<HTMLDivElement>(null);
  const skipInitialScroll = useRef(true);

  const question = brandDnaQuestions[currentIndex];
  const selectedAnswerId = question ? answers[question.id] : undefined;

  useEffect(() => {
    if (skipInitialScroll.current) {
      skipInitialScroll.current = false;
      return;
    }
    quizTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [phase, currentIndex]);

  const goBack = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((value) => value - 1);
    setTransitionKey((value) => value + 1);
  };

  const selectAnswer = (answerId: string) => {
    if (!question) return;

    const nextAnswers = {
      ...answers,
      [question.id]: answerId,
    };
    setAnswers(nextAnswers);

    window.setTimeout(() => {
      if (currentIndex >= TOTAL - 1) {
        setResult(generateBrandDna(nextAnswers));
        setPhase("result");
        setTransitionKey((value) => value + 1);
        return;
      }
      setCurrentIndex((value) => value + 1);
      setTransitionKey((value) => value + 1);
    }, 220);
  };

  const retake = () => {
    setPhase("quiz");
    setCurrentIndex(0);
    setAnswers(resetQuizAnswers());
    setResult(null);
    setTransitionKey((value) => value + 1);
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div ref={quizTopRef} className="scroll-mt-28 md:scroll-mt-24" />

      {phase === "quiz" && question ? (
        <section
          aria-labelledby={questionHeadingId}
          className="mx-auto max-w-2xl px-1 pt-4 pb-16 md:pt-6 md:pb-24"
        >
          <ProgressBar currentIndex={currentIndex} total={TOTAL} />

          <div className="mt-6">
            {currentIndex > 0 ? (
              <button
                type="button"
                onClick={goBack}
                className={`${pillButtonSecondary} gap-2`}
              >
                <ArrowLeft size={16} strokeWidth={2} aria-hidden />
                {brandDnaPage.backLabel}
              </button>
            ) : (
              <Link href="/freelance" className={`${pillButtonSecondary} gap-2`}>
                <ArrowLeft size={16} strokeWidth={2} aria-hidden />
                Back to Freelance
              </Link>
            )}
          </div>

          <div key={transitionKey} className="brand-dna-question-enter mt-8">
            <h2
              id={questionHeadingId}
              className="text-xl font-semibold tracking-tight text-ink md:text-2xl"
            >
              {question.prompt}
            </h2>
            {question.hint ? (
              <p className="mt-2 text-sm text-ink-muted">{question.hint}</p>
            ) : null}

            <div
              className="mt-6 flex flex-col gap-3 md:mt-8 md:gap-3.5"
              role="group"
              aria-labelledby={questionHeadingId}
            >
              {question.answers.map((answer, index) => (
                <AnswerCard
                  key={answer.id}
                  title={answer.title}
                  description={answer.description}
                  selected={selectedAnswerId === answer.id}
                  onSelect={() => selectAnswer(answer.id)}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {phase === "result" && result ? (
        <section
          aria-labelledby="brand-dna-result"
          className="brand-dna-question-enter px-1 pt-4 pb-16 md:pt-6 md:pb-24"
        >
          <h2 id="brand-dna-result" className="sr-only">
            Your Brand DNA result
          </h2>
          <ResultView result={result} onRetake={retake} />
        </section>
      ) : null}
    </div>
  );
}
