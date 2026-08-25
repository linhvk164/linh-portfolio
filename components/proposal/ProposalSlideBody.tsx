"use client";

import { ChoiceCard } from "@/components/proposal/ChoiceCard";
import { BrandDNAResult } from "@/components/proposal/BrandDNAResult";
import { ClientProfile } from "@/components/proposal/ClientProfile";
import { InputField } from "@/components/proposal/InputField";
import { TagInput } from "@/components/proposal/TagInput";
import {
  brandAvoidSeed,
  brandWantSeed,
  clientNeedItems,
  defaultPages,
  deliverableGroups,
  goalOptions,
  miniBrandQuestions,
  maintenanceOptions,
  nextSteps,
  proposalConfig,
  timelineDays,
  visualDirectionOptions,
  workSteps,
  type ProposalAnswers,
} from "@/data/proposal";
import { getMiniBrandDnaResult, toggleInList } from "@/lib/proposalStorage";

type SlideBodyProps = {
  slideId: string;
  answers: ProposalAnswers;
  patch: (partial: Partial<ProposalAnswers>) => void;
};

export function ProposalSlideBody({ slideId, answers, patch }: SlideBodyProps) {
  switch (slideId) {
    case "welcome":
      return (
        <>
          <p className="text-lg font-medium leading-snug text-[var(--proposal-ink)] md:text-xl">
            Let&apos;s build something that feels like you!
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { title: "Discover", body: "Goals, audience, brand feel" },
              { title: "Propose", body: "Scope, timeline, expectations" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-surface px-4 py-3"
              >
                <p className="text-sm font-semibold text-[var(--proposal-ink)]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-[var(--proposal-muted)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </>
      );

    case "about-project":
      return (
        <>
          <InputField
            label="Tell me about your business"
            value={answers.aboutTold}
            onChange={(aboutTold) => patch({ aboutTold })}
            placeholder="Your business, the problem, what you want..."
            multiline
          />
          <InputField
            label="What is the problem you want to solve?"
            value={answers.aboutUnderstand}
            onChange={(aboutUnderstand) => patch({ aboutUnderstand })}
            placeholder="I'm looking for a website that..."
            multiline
          />
        </>
      );

    case "goals":
      return (
        <>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {goalOptions.map((option) => (
              <ChoiceCard
                key={option.id}
                title={option.title}
                description={option.description}
                selected={answers.goals.includes(option.id)}
                onClick={() =>
                  patch({ goals: toggleInList(answers.goals, option.id) })
                }
              />
            ))}
          </div>
          {answers.goals.includes("other") ? (
            <InputField
              label="Tell me more"
              value={answers.goalOther}
              onChange={(goalOther) => patch({ goalOther })}
              placeholder="What should it accomplish?"
            />
          ) : null}
          <InputField
            label='What would make you say "this website worked"?'
            value={answers.successLooksLike}
            onChange={(successLooksLike) => patch({ successLooksLike })}
            placeholder="More inquiries, clearer story, easier bookings..."
            multiline
          />
        </>
      );

    case "audience":
      return (
        <>
          <InputField
            label="They're looking for..."
            value={answers.audienceLookingFor}
            onChange={(audienceLookingFor) => patch({ audienceLookingFor })}
            placeholder="A clear offer, proof, a next step..."
          />
          <InputField
            label="They're probably feeling..."
            value={answers.audienceFeeling}
            onChange={(audienceFeeling) => patch({ audienceFeeling })}
            placeholder="Curious, unsure, excited, overwhelmed..."
          />
          <InputField
            label="They should leave thinking..."
            value={answers.audienceLeaveThinking}
            onChange={(audienceLeaveThinking) =>
              patch({ audienceLeaveThinking })
            }
            placeholder="This is exactly who I need..."
          />
          <InputField
            label="And ideally, they'll..."
            value={answers.audienceThen}
            onChange={(audienceThen) => patch({ audienceThen })}
            placeholder="Book a call, buy, follow, share..."
          />
        </>
      );

    case "brand-dna": {
      const result = getMiniBrandDnaResult(answers.brandDnaAnswers);
      return (
        <>
          {miniBrandQuestions.map((question) => (
            <div key={question.id} className="space-y-2">
              <p className="text-sm font-medium text-[var(--proposal-ink)]">
                {question.prompt}
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {question.answers.map((answer) => (
                  <ChoiceCard
                    key={answer.id}
                    title={answer.title}
                    selected={
                      answers.brandDnaAnswers[question.id] === answer.id
                    }
                    onClick={() =>
                      patch({
                        brandDnaAnswers: {
                          ...answers.brandDnaAnswers,
                          [question.id]: answer.id,
                        },
                      })
                    }
                  />
                ))}
              </div>
            </div>
          ))}
          {result ? <BrandDNAResult result={result} /> : null}
        </>
      );
    }

    case "visual":
      return (
        <>
          <p className="text-sm font-medium text-[var(--proposal-ink)]">
            What feels like you?
          </p>
          <div className="flex flex-wrap gap-2 p-1">
            {visualDirectionOptions.map((option) => {
              const selected = answers.visualDirections.includes(option.id);
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() =>
                    patch({
                      visualDirections: toggleInList(
                        answers.visualDirections,
                        option.id,
                      ),
                    })
                  }
                  className={`rounded-full border-2 px-3.5 py-1.5 text-sm font-semibold text-white transition-transform ${
                    selected
                      ? "scale-[1.03] border-[var(--proposal-accent)] ring-2 ring-[var(--proposal-accent)] ring-offset-2"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: option.color }}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          <TagInput
            label="Pick 3 words that reflects your brand"
            values={answers.wantWords}
            onChange={(wantWords) => patch({ wantWords })}
            suggestions={brandWantSeed}
            max={3}
          />
          <TagInput
            label="Pick 3 words that DON'T reflect your brand"
            values={answers.avoidWords}
            onChange={(avoidWords) => patch({ avoidWords })}
            suggestions={brandAvoidSeed}
            max={3}
          />
        </>
      );

    case "messaging":
      return (
        <>
          <InputField
            label="We help..."
            value={answers.helpWho}
            onChange={(helpWho) => patch({ helpWho })}
          />
          <InputField
            label="People come to us because..."
            value={answers.comeBecause}
            onChange={(comeBecause) => patch({ comeBecause })}
          />
          <InputField
            label="What makes us different is..."
            value={answers.differentBecause}
            onChange={(differentBecause) => patch({ differentBecause })}
          />
          <InputField
            label="If someone remembers one thing about us, it should be..."
            value={answers.rememberOneThing}
            onChange={(rememberOneThing) => patch({ rememberOneThing })}
          />
          <TagInput
            label="Words we should use"
            values={answers.wordsUse}
            onChange={(wordsUse) => patch({ wordsUse })}
            max={10}
          />
          <TagInput
            label="Words we should avoid"
            values={answers.wordsAvoid}
            onChange={(wordsAvoid) => patch({ wordsAvoid })}
            max={10}
          />
        </>
      );

    case "structure":
      return (
        <>
          <p className="text-sm font-medium text-[var(--proposal-ink)]">
            Suggested pages
          </p>
          <ul className="space-y-2">
            {defaultPages.map((page) => (
              <li
                key={page}
                className="rounded-xl bg-surface px-3.5 py-2.5 text-sm font-medium text-[var(--proposal-ink)]"
              >
                {page}
              </li>
            ))}
          </ul>
          <InputField
            label="Anything to add or change?"
            value={answers.structureNotes}
            onChange={(structureNotes) => patch({ structureNotes })}
            placeholder="Extra pages, sections, must-haves..."
            multiline
          />
        </>
      );

    case "deliverables":
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {deliverableGroups.map((group) => (
            <div
              key={group.number}
              className="rounded-2xl bg-surface px-4 py-4"
            >
              <p className="text-[11px] font-semibold tracking-[0.12em] text-[var(--proposal-muted)]">
                {group.number}
              </p>
              <p className="mt-1 text-base font-semibold text-[var(--proposal-ink)]">
                {group.title}
              </p>
              <ul className="mt-2 space-y-1">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-[var(--proposal-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case "how-we-work":
      return (
        <div className="space-y-3">
          {workSteps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-3 rounded-2xl bg-surface px-4 py-3 text-left"
            >
              <span className="shrink-0 text-sm font-semibold text-[var(--proposal-sage)]">
                {step.number}
              </span>
              <div className="min-w-0 text-left">
                <p className="text-sm font-semibold text-[var(--proposal-ink)]">
                  {step.title}
                </p>
                <p className="mt-0.5 text-sm text-[var(--proposal-muted)]">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      );

    case "revisions":
      return (
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3">
          <div className="w-full rounded-2xl bg-surface px-5 py-4 text-center">
            <p className="text-sm font-semibold text-[var(--proposal-ink)]">
              Round 01
            </p>
            <p className="mx-auto mt-1 max-w-xl text-sm leading-snug text-[var(--proposal-muted)]">
              We review the first complete direction together and identify what
              needs to change.
            </p>
          </div>
          <p className="text-[var(--proposal-muted)]">↓</p>
          <div className="w-full rounded-2xl bg-surface px-5 py-4 text-center">
            <p className="text-sm font-semibold text-[var(--proposal-ink)]">
              Round 02
            </p>
            <p className="mx-auto mt-1 max-w-xl text-sm leading-snug text-[var(--proposal-muted)]">
              I refine the design based on your feedback and prepare the final
              website.
            </p>
          </div>
          <p className="max-w-xl text-sm leading-snug text-[var(--proposal-muted)]">
            Additional pages, functionality, or major changes to the agreed
            direction may need an extra quote.
          </p>
        </div>
      );

    case "needs":
      return (
        <>
          <ul className="space-y-2">
            {clientNeedItems.map((item) => {
              const checked = Boolean(answers.clientChecklist[item]);
              return (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() =>
                      patch({
                        clientChecklist: {
                          ...answers.clientChecklist,
                          [item]: !checked,
                        },
                      })
                    }
                    className="flex w-full items-center gap-3 rounded-xl bg-surface px-3.5 py-2.5 text-left"
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-md border text-xs ${
                        checked
                          ? "border-[var(--proposal-accent)] bg-[var(--proposal-accent)] text-white"
                          : "border-[var(--proposal-border)]"
                      }`}
                    >
                      {checked ? "✓" : ""}
                    </span>
                    <span className="text-sm text-[var(--proposal-ink)]">
                      {item}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      );

    case "timeline":
      return (
        <>
          <p className="text-lg font-semibold text-[var(--proposal-ink)]">
            One focused week
          </p>
          <div className="mx-auto w-full max-w-3xl space-y-2">
            {timelineDays.map((item) => (
              <div
                key={item.day}
                className="flex items-baseline justify-between gap-4 rounded-xl bg-surface px-5 py-3"
              >
                <p className="shrink-0 text-[11px] font-semibold tracking-[0.06em] text-[var(--proposal-sage)]">
                  {item.day}
                </p>
                <p className="text-right text-sm font-medium leading-snug text-[var(--proposal-ink)]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto max-w-3xl text-sm leading-snug text-[var(--proposal-muted)]">
            The timeline assumes all required content, assets, feedback, and
            approvals are provided on schedule.
          </p>
        </>
      );

    case "investment":
      return (
        <>
          <p className="text-4xl font-semibold tracking-tight text-[var(--proposal-ink)] md:text-5xl">
            {proposalConfig.investment}
          </p>
          <p className="text-base font-medium text-[var(--proposal-muted)]">
            {proposalConfig.depositNote}
          </p>
          <div className="rounded-2xl bg-surface px-4 py-4">
            <p className="text-sm leading-relaxed text-[var(--proposal-muted)]">
              Your deposit reserves the project week and lets development
              begin.
            </p>
          </div>
        </>
      );

    case "ownership":
      return (
        <>
          <p className="text-sm font-medium text-[var(--proposal-ink)]">
            How do you want to maintain the website?
          </p>
          <div className="grid gap-2.5">
            {maintenanceOptions.map((option) => (
              <ChoiceCard
                key={option.id}
                title={option.title}
                description={option.description}
                selected={answers.maintenancePreference === option.id}
                onClick={() =>
                  patch({ maintenancePreference: option.id })
                }
              />
            ))}
          </div>
        </>
      );

    case "next":
      return (
        <>
          <p className="text-lg font-semibold text-[var(--proposal-ink)]">
            Ready to make it happen?
          </p>
          <ol className="mx-auto w-full max-w-3xl space-y-2">
            {nextSteps.map((step, index) => (
              <li
                key={step}
                className="flex items-baseline justify-between gap-4 rounded-xl bg-surface px-5 py-3"
              >
                <p className="shrink-0 text-[11px] font-semibold text-[var(--proposal-sage)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-right text-sm font-medium leading-snug text-[var(--proposal-ink)]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
          <p className="text-base font-medium text-[var(--proposal-ink)]">
            Let&apos;s build something that feels like you!
          </p>
        </>
      );

    case "agreement":
      return (
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center space-y-5 text-center">
          <p className="max-w-xl text-sm leading-relaxed text-[var(--proposal-muted)] md:text-base">
            A full agreement that covers scope, timeline, payment, revisions, and
            will be sent to you for review and signature.
          </p>
          <ClientProfile answers={answers} />
        </div>
      );

    default:
      return null;
  }
}
