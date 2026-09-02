"use client";

import { ClientBriefActions } from "@/components/proposal/ClientBriefActions";
import {
  goalOptions,
  maintenanceOptions,
  visualDirectionOptions,
  type ProposalAnswers,
} from "@/data/proposal";
import { getMiniBrandDnaResult } from "@/lib/proposalStorage";

function blank(value: string | undefined | null) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : "[blank]";
}

function blankList(values: string[]) {
  return values.length ? values.join(", ") : "[blank]";
}

function ProfileField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const empty = value === "[blank]";
  return (
    <div className="space-y-0.5">
      <p className="text-[11px] font-medium lowercase tracking-normal text-[var(--proposal-muted)]">
        {label}
      </p>
      <p
        className={`text-sm leading-snug ${
          empty
            ? "italic text-[var(--proposal-muted)]"
            : "font-medium text-[var(--proposal-ink)]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function ProfileColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2.5 rounded-xl bg-white/80 px-3.5 py-3">
      <p className="text-[11px] font-semibold lowercase tracking-normal text-[var(--proposal-accent)]">
        {title}
      </p>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

export function ClientProfile({
  answers,
  onClearForm,
}: {
  answers: ProposalAnswers;
  onClearForm: () => void;
}) {
  const dna = getMiniBrandDnaResult(answers.brandDnaAnswers);
  const goalLabels: string[] = goalOptions
    .filter((option) => answers.goals.includes(option.id))
    .map((option) => option.title);
  if (answers.goals.includes("other") && answers.goalOther.trim()) {
    goalLabels.push(answers.goalOther.trim());
  }
  const visualLabels = visualDirectionOptions
    .filter((option) => answers.visualDirections.includes(option.id))
    .map((option) => option.label);
  const maintenance = maintenanceOptions.find(
    (option) => option.id === answers.maintenancePreference,
  );

  const headline = dna
    ? dna.feelLabels.join(" · ")
    : goalLabels.length
      ? goalLabels.join(" · ")
      : "Discovery in progress";

  return (
    <section className="w-full overflow-hidden rounded-2xl border border-[var(--proposal-border)] bg-surface text-left">
      <div className="flex flex-col gap-4 border-b border-[var(--proposal-border)] px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--proposal-muted)]">
            Client&apos;s Profile
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-[var(--proposal-ink)]">
            {headline}
          </h3>
        </div>
        <ClientBriefActions
          answers={answers}
          align="end"
          onClearForm={onClearForm}
        />
      </div>

      <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProfileColumn title="About">
          <ProfileField
            label="Tell me about your business"
            value={blank(answers.aboutTold)}
          />
          <ProfileField
            label="What is the problem you want to solve?"
            value={blank(answers.aboutUnderstand)}
          />
        </ProfileColumn>

        <ProfileColumn title="Goals">
          <ProfileField label="Primary goals" value={blankList(goalLabels)} />
          <ProfileField
            label="Success looks like"
            value={blank(answers.successLooksLike)}
          />
        </ProfileColumn>

        <ProfileColumn title="Audience">
          <ProfileField
            label="Looking for"
            value={blank(answers.audienceLookingFor)}
          />
          <ProfileField
            label="Feeling"
            value={blank(answers.audienceFeeling)}
          />
          <ProfileField
            label="Leave thinking"
            value={blank(answers.audienceLeaveThinking)}
          />
          <ProfileField label="Then they'll" value={blank(answers.audienceThen)} />
        </ProfileColumn>

        <ProfileColumn title="Brand DNA">
          <ProfileField
            label="Traits"
            value={dna ? dna.feelLabels.join(" · ") : "[blank]"}
          />
          <ProfileField
            label="Personality"
            value={blank(dna?.personality)}
          />
          <ProfileField label="Voice" value={blank(dna?.voice)} />
        </ProfileColumn>

        <ProfileColumn title="Visual">
          <ProfileField label="Direction" value={blankList(visualLabels)} />
          <ProfileField label="Wanted words" value={blankList(answers.wantWords)} />
          <ProfileField label="Avoid words" value={blankList(answers.avoidWords)} />
        </ProfileColumn>

        <ProfileColumn title="Messaging">
          <ProfileField label="We help" value={blank(answers.helpWho)} />
          <ProfileField
            label="People come because"
            value={blank(answers.comeBecause)}
          />
          <ProfileField
            label="What makes us different"
            value={blank(answers.differentBecause)}
          />
          <ProfileField
            label="One thing to remember"
            value={blank(answers.rememberOneThing)}
          />
          <ProfileField label="Words to use" value={blankList(answers.wordsUse)} />
          <ProfileField
            label="Words to avoid"
            value={blankList(answers.wordsAvoid)}
          />
        </ProfileColumn>

        <ProfileColumn title="Structure">
          <ProfileField
            label="Page notes"
            value={blank(answers.structureNotes)}
          />
        </ProfileColumn>

        <ProfileColumn title="Maintenance">
          <ProfileField
            label="Preference"
            value={blank(maintenance?.title)}
          />
          <ProfileField
            label="Details"
            value={blank(maintenance?.description)}
          />
        </ProfileColumn>
      </div>
    </section>
  );
}
