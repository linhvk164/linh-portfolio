export type CaseStudyTldr = {
  summary: string;
};

export const caseStudyTldrBySlug: Record<string, CaseStudyTldr> = {
  "un-habitat-urban-data": {
    summary:
      "Designed accessible (WCAG 2.1) data visualizations that turned multi-source urban datasets from 80+ cities into a clear Quality of Life exploration experience. Mapped indicator relationships before screens, then rebuilt the core visualization as a half-sunburst fan chart so users see the big picture first and drill into detail only when they need it. Shipped a working prototype in 5 months; the platform launched globally in February 2025.",
  },
  "un-habitat-admin": {
    summary:
      "Designed enterprise CMS experiences that replaced manual Excel uploads and fragmented city workflows with clearer Joining, Onboarding, and Implementing flows. Automated repetitive tasks, simplified multi-step paths, standardized statuses and error states, and partnered with engineers to design an AI-powered chatbot for city administrators—accelerating front-end and CMS work with Cursor and Windsurf. Result: admins spend less time decoding the interface and more time keeping city data accurate.",
  },
  "un-habitat-design-system": {
    summary:
      "Built a 200+ component design system that unified buttons, spacing, color, iconography, and interaction patterns across a growing global platform. Redesigned the nine Quality of Life domain icons, tested color against WCAG guidelines, and established a shared visual language for dashboards, marketing, and future features—improving consistency and cutting cognitive load as the product scaled.",
  },
  folio: {
    summary:
      "Founded and designed Folio, a distraction-free writing space that keeps language learners in flow instead of bouncing between Translate, dictionaries, and flashcard apps. Shipped write, translate, practice, and track—inline translation, CEFR-level prompts, auto-saved vocabulary, and visible progress—grounded in six user interviews. Live in open beta at folioapp.ca with support for 160+ languages.",
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
