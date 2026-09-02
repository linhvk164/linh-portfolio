import {
  createEmptyProposalAnswers,
  proposalConfig,
  type ProposalAnswers,
} from "@/data/proposal";
import {
  createEmptyScores,
  generateBrandDnaFromScores,
  type BrandDnaResult,
} from "@/lib/brandDna";
import { miniBrandQuestions } from "@/data/proposal";
import type { BrandDnaScores } from "@/data/brandDna";

export function loadProposalAnswers(): ProposalAnswers {
  if (typeof window === "undefined") return createEmptyProposalAnswers();
  try {
    const raw = window.localStorage.getItem(proposalConfig.storageKey);
    if (!raw) return createEmptyProposalAnswers();
    const parsed = JSON.parse(raw) as Partial<ProposalAnswers>;
    return {
      ...createEmptyProposalAnswers(),
      ...parsed,
      brandDnaAnswers: parsed.brandDnaAnswers ?? {},
      clientChecklist: {
        ...createEmptyProposalAnswers().clientChecklist,
        ...parsed.clientChecklist,
      },
    };
  } catch {
    return createEmptyProposalAnswers();
  }
}

export function saveProposalAnswers(answers: ProposalAnswers) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      proposalConfig.storageKey,
      JSON.stringify(answers),
    );
  } catch {
    // Ignore quota / private mode failures.
  }
}

export function clearProposalAnswers() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(proposalConfig.storageKey);
  } catch {
    // Ignore private mode failures.
  }
}

export function scoreMiniBrandDna(
  answers: Record<string, string>,
): BrandDnaScores {
  const scores = createEmptyScores();
  for (const question of miniBrandQuestions) {
    const answerId = answers[question.id];
    if (!answerId) continue;
    const answer = question.answers.find((item) => item.id === answerId);
    if (!answer) continue;
    for (const [key, value] of Object.entries(answer.scores)) {
      const dim = key as keyof BrandDnaScores;
      if (value) scores[dim] += value;
    }
  }
  return scores;
}

export function getMiniBrandDnaResult(
  answers: Record<string, string>,
): BrandDnaResult | null {
  const answered = miniBrandQuestions.every((q) => answers[q.id]);
  if (!answered) return null;
  return generateBrandDnaFromScores(scoreMiniBrandDna(answers));
}

export function toggleInList(list: string[], id: string, max?: number) {
  if (list.includes(id)) return list.filter((item) => item !== id);
  if (max && list.length >= max) return list;
  return [...list, id];
}
