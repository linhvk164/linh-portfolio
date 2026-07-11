import type { CaseStudyMetaItem } from "@/components/case-studies/CaseStudySection";

export type CaseStudyMetaData = {
  role: string;
  timeline: string;
  team: string;
  skills: string[];
};

export const caseStudyMetaBySlug: Record<string, CaseStudyMetaData> = {
  folio: {
    role: "Co-founder, Founding UX/UI Designer",
    timeline: "May 2026 — present",
    team: "2 co-founders (designer + engineer)",
    skills: ["Startup Founder", "EdTech", "User Research"],
  },
  chordio: {
    role: "Founder, UX/UI Designer",
    timeline: "2023 · 1 year",
    team: "2 co-founders",
    skills: ["UX/UI", "AI Prototype", "Branding", "Music"],
  },
  lofu: {
    role: "UX/UI Designer, Researcher",
    timeline: "August 2020 · 4 months",
    team: "7 Designers + Researchers",
    skills: ["UX/UI Designer", "Branding", "Mobile", "Mental Health"],
  },
  "un-habitat-urban-data": {
    role: "UX/UI Designer",
    timeline: "2025 · Contract",
    team: "UN-Habitat Quality of Life Initiative team",
    skills: ["UX/UI", "Data Visualization", "Civic Tech"],
  },
  "un-habitat-admin": {
    role: "UX/UI Designer",
    timeline: "2025 · Contract",
    team: "UN-Habitat Quality of Life Initiative team",
    skills: ["UX/UI", "Admin Dashboard", "Workflow Design"],
  },
  "un-habitat-design-system": {
    role: "UX/UI Designer",
    timeline: "2024 · Contract",
    team: "UN-Habitat Quality of Life Initiative team",
    skills: ["UX/UI", "Design Systems", "Accessibility"],
  },
};

export function getCaseStudyMetaItems(slug: string): CaseStudyMetaItem[] {
  const meta = caseStudyMetaBySlug[slug];
  if (!meta) return [];

  return [
    { label: "Role", value: meta.role },
    { label: "Timeline", value: meta.timeline },
    { label: "Team", value: meta.team },
    { label: "Skills", value: meta.skills.join(", ") },
  ];
}
