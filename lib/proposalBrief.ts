import {
  goalOptions,
  maintenanceOptions,
  miniBrandQuestions,
  visualDirectionOptions,
  type ProposalAnswers,
} from "@/data/proposal";
import { getMiniBrandDnaResult } from "@/lib/proposalStorage";

function valueOrBlank(value: string | undefined | null) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : "[blank]";
}

function listOrBlank(values: string[]) {
  return values.length ? values.join(", ") : "[blank]";
}

function line(label: string, value: string | undefined | null) {
  return `${label}\n${valueOrBlank(value)}`;
}

function listLine(label: string, values: string[]) {
  return `${label}\n${listOrBlank(values)}`;
}

/** Full discovery brief: questions + answers + Brand DNA. */
export function formatProposalBrief(answers: ProposalAnswers): string {
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
  const checklistDone = Object.entries(answers.clientChecklist)
    .filter(([, checked]) => checked)
    .map(([item]) => item);

  const brandDnaAnswers = miniBrandQuestions
    .map((question) => {
      const answerId = answers.brandDnaAnswers[question.id];
      if (!answerId) return `Q: ${question.prompt}\nA: [blank]`;
      const answer = question.answers.find((item) => item.id === answerId);
      if (!answer) return `Q: ${question.prompt}\nA: [blank]`;
      return `Q: ${question.prompt}\nA: ${answer.title}`;
    })
    .join("\n\n");

  const sections = [
    "CLIENT'S PROFILE",
    "Generated from the proposal deck",
    "",
    "ABOUT THE PROJECT",
    line("Tell me about your business", answers.aboutTold),
    line("What is the problem you want to solve?", answers.aboutUnderstand),
    "",
    "GOALS",
    listLine("Selected goals", goalLabels),
    line("Success looks like", answers.successLooksLike),
    "",
    "AUDIENCE",
    line("They're looking for", answers.audienceLookingFor),
    line("They're probably feeling", answers.audienceFeeling),
    line("They should leave thinking", answers.audienceLeaveThinking),
    line("And ideally, they'll", answers.audienceThen),
    "",
    "BRAND DNA",
    brandDnaAnswers,
    dna
      ? [
          `Traits: ${dna.feelLabels.join(" · ")}`,
          dna.personality,
          `Voice: ${dna.voice}`,
          `Should feel: ${dna.shouldFeel.join(", ")}`,
          `Avoid: ${dna.avoid.join(", ")}`,
          "",
          "Copy-ready Brand DNA",
          dna.copyText,
        ].join("\n")
      : "Traits: [blank]",
    "",
    "VISUAL DIRECTION",
    listLine("Selected directions", visualLabels),
    listLine("Wanted words", answers.wantWords),
    listLine("Avoid words", answers.avoidWords),
    "",
    "MESSAGING",
    line("We help", answers.helpWho),
    line("People come to us because", answers.comeBecause),
    line("What makes us different is", answers.differentBecause),
    line("One thing to remember", answers.rememberOneThing),
    listLine("Words to use", answers.wordsUse),
    listLine("Words to avoid", answers.wordsAvoid),
    "",
    "STRUCTURE",
    line("Notes", answers.structureNotes),
    "",
    "CLIENT ASSETS CHECKLIST",
    checklistDone.length
      ? checklistDone.map((item) => `- ${item}`).join("\n")
      : "[blank]",
    "",
    "MAINTENANCE",
    maintenance
      ? `${maintenance.title}\n${maintenance.description}`
      : "[blank]",
  ];

  return sections.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

export function downloadProposalBrief(text: string, filename = "client-discovery-brief.txt") {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
