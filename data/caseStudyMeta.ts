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
    team: "1 designer + 1 engineer",
    skills: ["Product Design", "User Research", "EdTech Founder"],
  },
  chordio: {
    role: "UX/UI Designer",
    timeline: "2023 · 1 year",
    team: "2 designers",
    skills: ["AI Prototype", "UX/UI", "Branding"],
  },
  lofu: {
    role: "UX/UI Designer, Researcher",
    timeline: "August 2020 · 4 months",
    team: "5 UI Designers + 2 UX Researchers",
    skills: ["Mobile UX", "Branding", "Mental Health"],
  },
  "un-habitat-urban-data": {
    role: "UX/UI Designer",
    timeline: "2025 · Contract",
    team: "Team of 20: engineers, PM, designers, and researchers",
    skills: ["Data Visualization", "Accessibility", "Civic Tech"],
  },
  "un-habitat-admin": {
    role: "UX/UI Designer",
    timeline: "2025 · Contract",
    team: "Team of 20: engineers, PM, designers, and researchers",
    skills: ["Admin Dashboard", "Workflow Design", "UX/UI"],
  },
  "un-habitat-design-system": {
    role: "UX/UI Designer",
    timeline: "2024 · Contract",
    team: "Team of 20: engineers, PM, designers, and researchers",
    skills: ["Design Systems", "Accessibility", "Design Ops"],
  },
  "qol-hackathon": {
    role: "UX/UI Designer",
    timeline: "2025 · Contract",
    team: "Team of 10: engineers, PM, designers, and researchers",
    skills: ["Interactive Design", "EdTech", "Gamification"],
  },
};

export function getCaseStudyMetaItems(slug: string): CaseStudyMetaItem[] {
  const meta = caseStudyMetaBySlug[slug];
  if (!meta) return [];

  return [
    { label: "Role", value: meta.role },
    { label: "Timeline", value: meta.timeline },
    { label: "Skills", value: meta.skills.join(", ") },
    { label: "Team", value: meta.team },
  ];
}
