export type CaseStudyTldr = {
  summary: string;
};

export const caseStudyTldrBySlug: Record<string, CaseStudyTldr> = {
  "un-habitat-urban-data": {
    summary:
      "Designed a global Quality of Life data platform that grew city adoption from 62 to 170+ cities and helped secure $20M in pro bono support. Built WCAG 2.1 AA accessible visualizations, a 200+ component design system, and clearer onboarding so city officials could explore complex urban data and make policy decisions at scale within a 6-month timeline.",
  },
  "un-habitat-admin": {
    summary:
      "Redesigned Joining, Onboarding, and Implementing workflows so city administrators could upload and maintain Quality of Life data without manual Excel handoffs. Automated reminders, document signing, and error flagging reduced admin friction and helped scale adoption from 62 to 170+ cities in six months.",
  },
  "un-habitat-design-system": {
    summary:
      "Built a 200+ component design system that unified buttons, spacing, color, iconography, and interaction patterns across a growing global platform. Redesigned the nine Quality of Life domain icons, tested color against WCAG guidelines, and established a shared visual language for dashboards, marketing, and future features—improving consistency and cutting cognitive load as the product scaled.",
  },
  folio: {
    summary:
      "In 2 months, I led Folio from research to a live beta — a distraction-free writing space for language learners, now live at folioapp.ca with 160+ languages.",
  },
  chordio: {
    summary:
      "Founded and shipped Chordio, a web app that unifies how musicians capture lyrics, chords, and recordings in one place. Led research with musicians, explored concepts through Crazy 8s and wireframes, then leveraged AI-assisted development to turn high-fidelity designs into a working prototype—proof that removing tool-switching friction matters more than adding features.",
  },
  lofu: {
    summary:
      "Designed and researched Lofu, a gentler mental wellness app that lowers the barrier to self-care for Asian communities facing stigma, privacy norms, and language barriers. Pairing hand-drawn virtual pets with short reflection activities, warm visuals, and multilingual support, then validated through two rounds of usability testing so users can build small daily habits without feeling like therapy on day one.",
  },
  "qol-hackathon": {
    summary:
      "Designed an interactive experience for 300+ students to explore Quality of Life domains, turning civic data into something playful and hands-on for the Quality of Life Hackathon program.",
  },
};

export function getCaseStudyTldr(slug: string): CaseStudyTldr | undefined {
  return caseStudyTldrBySlug[slug];
}
