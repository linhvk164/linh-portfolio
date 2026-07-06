export type CaseStudyTldr = {
  problem: string;
  solution: string;
  outcome: string;
};

export const caseStudyTldrBySlug: Record<string, CaseStudyTldr> = {
  "un-habitat-urban-data": {
    problem:
      "UN-Habitat's Quality of Life platform held data from 82+ cities across hundreds of indicators. Researchers, government officials, and the public all had different goals—but everyone hit the same wall: too much information, no clear starting point.",
    solution:
      "I mapped how indicators related before designing screens, then rebuilt the core visualization as a half sunburst fan chart. Users see the big picture first and drill into details only when they need them—progressive disclosure instead of a wall of numbers.",
    outcome:
      "A working prototype shipped in 5 months; the platform launched globally in February 2025. Dense urban data became something people could actually explore with confidence.",
  },
  "un-habitat-admin": {
    problem:
      "Behind every public dashboard was an admin system full of forms, tables, permissions, and edge cases—much of it still handled manually through Excel uploads and back-and-forth with cities. Confusing workflows didn't just frustrate staff—they slowed entire organizations and risked inaccurate data going live.",
    solution:
      "I mapped the end-to-end workflow first—Joining, Onboarding, and Implementing—then targeted friction: automated repetitive tasks, simplified multi-step flows, grouped related actions, cut unnecessary page-hopping, and standardized status indicators and error states across the platform.",
    outcome:
      "Administrators spend less time decoding the interface and more time keeping city data accurate. Efficiency became the UX goal—get in, get it done, get out.",
  },
  "un-habitat-design-system": {
    problem:
      "As the platform scaled, buttons, spacing, colors, and interactions started drifting. The initiative lacked a unified digital experience—and small inconsistencies piled up, increasing cognitive load and making the product feel less trustworthy.",
    solution:
      "I helped establish the visual foundation, redesigned the nine Quality of Life domain icons, expanded reusable components, standardized interaction patterns, tested colors against WCAG guidelines, and built a shared visual language for dashboards, marketing, and future features.",
    outcome:
      "A design system that scales with the team—and is now live across the platform. When interactions feel familiar everywhere, users spend less energy learning the interface and more energy on their actual goals.",
  },
  folio: {
    problem:
      "Language learners lose their train of thought the moment they leave a sentence to open Google Translate, a dictionary, or a conjugation site. Most apps teach consumption—flashcards, lessons, quizzes—not the messy work of actually producing language.",
    solution:
      "Folio is a distraction-free writing space built around four features—write, translate, practice, and track: inline translation without leaving the page, CEFR-level prompts to beat the blank page, vocabulary auto-saved as flashcards, and progress you can watch grow. Every feature protects one thing—writing momentum.",
    outcome:
      "Grounded in six user interviews, Folio is live in open beta at folioapp.ca with support for 160+ languages. We built what learners asked for: fewer tools, less friction, more time actually using the language.",
  },
  chordio: {
    problem:
      "Musicians capture ideas across voice memos, Notes, chord apps, and messages to friends. The tools work fine on their own—but switching between them constantly breaks creative momentum.",
    solution:
      "I interviewed musicians, explored dozens of concepts through Crazy 8s and wireframes, and prototyped around one job: capture lyrics, chords, and recordings in one place. Then I used AI-assisted development to ship a functioning web app from the designs.",
    outcome:
      "A working Chordio web app that unifies the songwriter's workflow—from research and wireframes through branding to a live demo. Proof that removing friction matters more than adding features.",
  },
  lofu: {
    problem:
      "Seeking mental health support is hard enough. In many Asian communities, stigma, privacy norms, and language barriers make it harder still—and most wellness apps feel clinical and overwhelming from the first screen.",
    solution:
      "Lofu pairs gentle gamification with emotional wellness: users care for hand-drawn virtual pets inspired by animals across Asia while completing short self-reflection activities. Warm, handcrafted visuals and multilingual support make the experience feel welcoming, not judgmental.",
    outcome:
      "Two rounds of usability testing shaped an app that lowers the barrier to the first step of self-care. Users build small daily habits without feeling like they're in therapy on day one.",
  },
};

export function getCaseStudyTldr(slug: string): CaseStudyTldr | undefined {
  return caseStudyTldrBySlug[slug];
}
