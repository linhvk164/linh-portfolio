import {
  brandDnaDimensionLabels,
  brandDnaDimensions,
  brandDnaQuestions,
  brandDnaTraitCopy,
  type BrandDnaAnswer,
  type BrandDnaDimension,
  type BrandDnaScores,
} from "@/data/brandDna";

export type BrandDnaResult = {
  topTraits: BrandDnaDimension[];
  feelLabels: string[];
  personality: string;
  voice: string;
  visuals: string[];
  shouldFeel: string[];
  avoid: string[];
  copyText: string;
};

export function createEmptyScores(): BrandDnaScores {
  return {
    warm: 0,
    bold: 0,
    refined: 0,
    playful: 0,
    thoughtful: 0,
    experimental: 0,
  };
}

export function getQuestionCount() {
  return brandDnaQuestions.length;
}

export function getAnswerById(
  questionId: string,
  answerId: string,
): BrandDnaAnswer | undefined {
  const question = brandDnaQuestions.find((item) => item.id === questionId);
  return question?.answers.find((answer) => answer.id === answerId);
}

/** Accumulate scores from a map of questionId → answerId. */
export function calculateScores(
  answers: Record<string, string>,
): BrandDnaScores {
  const scores = createEmptyScores();

  for (const question of brandDnaQuestions) {
    const answerId = answers[question.id];
    if (!answerId) continue;
    const answer = question.answers.find((item) => item.id === answerId);
    if (!answer) continue;

    for (const dimension of brandDnaDimensions) {
      const value = answer.scores[dimension];
      if (value) scores[dimension] += value;
    }
  }

  return scores;
}

export function rankDimensions(scores: BrandDnaScores): BrandDnaDimension[] {
  return [...brandDnaDimensions].sort((a, b) => {
    const diff = scores[b] - scores[a];
    if (diff !== 0) return diff;
    return brandDnaDimensions.indexOf(a) - brandDnaDimensions.indexOf(b);
  });
}

function uniquePreserveOrder(items: string[]) {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const item of items) {
    if (seen.has(item)) continue;
    seen.add(item);
    result.push(item);
  }
  return result;
}

function blendPersonality(traits: BrandDnaDimension[]) {
  const [primary, secondary, tertiary] = traits;
  const primaryCopy = brandDnaTraitCopy[primary].personality;
  const secondaryLabel = brandDnaDimensionLabels[secondary].toLowerCase();
  const tertiaryLabel = brandDnaDimensionLabels[tertiary].toLowerCase();

  return `${primaryCopy} It also carries a ${secondaryLabel} and ${tertiaryLabel} edge that keeps the personality from feeling one-dimensional.`;
}

function blendVoice(traits: BrandDnaDimension[]) {
  const [primary, secondary] = traits;
  const primaryVoice = brandDnaTraitCopy[primary].voice;
  const secondaryLabel = brandDnaDimensionLabels[secondary].toLowerCase();
  return `${primaryVoice} There's also a ${secondaryLabel} undertone that keeps the tone from feeling one-note.`;
}

export function generateBrandDna(
  answers: Record<string, string>,
): BrandDnaResult {
  const scores = calculateScores(answers);
  const ranked = rankDimensions(scores);
  const topTraits = ranked.slice(0, 3);
  const [primary, secondary, tertiary] = topTraits;

  const visuals = uniquePreserveOrder([
    ...brandDnaTraitCopy[primary].visuals,
    ...brandDnaTraitCopy[secondary].visuals,
    ...brandDnaTraitCopy[tertiary].visuals,
  ]).slice(0, 6);

  const shouldFeel = uniquePreserveOrder([
    ...brandDnaTraitCopy[primary].shouldFeel,
    ...brandDnaTraitCopy[secondary].shouldFeel,
    ...brandDnaTraitCopy[tertiary].shouldFeel,
  ]).slice(0, 4);

  const avoid = uniquePreserveOrder([
    ...brandDnaTraitCopy[primary].avoid,
    ...brandDnaTraitCopy[secondary].avoid,
    ...brandDnaTraitCopy[tertiary].avoid,
  ]).slice(0, 4);

  const feelLabels = topTraits.map((trait) => brandDnaDimensionLabels[trait]);
  const personality = blendPersonality(topTraits);
  const voice = blendVoice(topTraits);

  const copyText = [
    `My brand is ${feelLabels.map((label) => label.toLowerCase()).join(", ")}.`,
    personality,
    voice,
    `Visually, I prefer ${visuals
      .map((item) => item.toLowerCase())
      .join(", ")}.`,
    `My brand should feel ${shouldFeel.map((item) => item.toLowerCase()).join(", ")}.`,
    `Avoid ${avoid.map((item) => item.toLowerCase()).join("; ")}.`,
  ].join(" ");

  return {
    topTraits,
    feelLabels,
    personality,
    voice,
    visuals,
    shouldFeel,
    avoid,
    copyText,
  };
}

export function resetQuizAnswers(): Record<string, string> {
  return {};
}
