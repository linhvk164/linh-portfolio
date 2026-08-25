export type CaseStudyTocItem = {
  /** Eyebrow label shown in the sidebar TOC */
  label: string;
  href: string;
  /** Indent as a nested subsection under a parent TOC item */
  nested?: boolean;
};

/**
 * Sidebar TOC for case studies — labels match on-page section headers.
 */
export const caseStudyTocBySlug: Record<string, CaseStudyTocItem[]> = {
  folio: [
    { label: "Overview", href: "#overview" },
    { label: "The team and my role", href: "#the-team-and-my-role" },
    { label: "Research", href: "#research" },
    { label: "User interviews", href: "#user-interviews", nested: true },
    {
      label: "Understanding the findings",
      href: "#understanding-the-findings",
      nested: true,
    },
    {
      label: "Product positioning",
      href: "#product-positioning",
      nested: true,
    },
    {
      label: "Feature prioritization",
      href: "#feature-prioritization",
      nested: true,
    },
    { label: "Proof of concept", href: "#proof-of-concept" },
    {
      label: "User testing and reiteration",
      href: "#user-testing-and-reiteration",
    },
    { label: "Final product", href: "#final-product" },
    { label: "What I Learned", href: "#what-i-learned" },
  ],
  chordio: [
    { label: "Overview", href: "#overview" },
    { label: "Problem", href: "#problem" },
    { label: "Research", href: "#research" },
    { label: "Ideation", href: "#ideation" },
    { label: "Prototyping", href: "#prototyping" },
    { label: "Building", href: "#building" },
  ],
  lofu: [
    { label: "Overview", href: "#overview" },
    { label: "Problem", href: "#problem" },
    { label: "Research", href: "#research" },
    { label: "Solution", href: "#solution" },
    { label: "Visual Identity", href: "#visual-identity" },
    { label: "Testing & Iteration", href: "#testing-and-iteration" },
    { label: "What I Learned", href: "#what-i-learned" },
  ],
  "un-habitat-urban-data": [
    { label: "Overview", href: "#overview" },
    { label: "The Challenge", href: "#challenge" },
    { label: "The Team and My Role", href: "#the-team-and-my-role" },
    { label: "Key Work", href: "#key-work" },
    {
      label: "Design System",
      href: "#design-system",
      nested: true,
    },
    {
      label: "Core Data Experience",
      href: "#core-data-experience",
      nested: true,
    },
    { label: "Landing Page", href: "#landing-page", nested: true },
    {
      label: "Admin Onboarding",
      href: "#admin-onboarding",
      nested: true,
    },
    { label: "Survey App", href: "#survey-app", nested: true },
    {
      label: "Accessible Visualizations",
      href: "#accessible-visualizations",
      nested: true,
    },
    { label: "What I Learned", href: "#what-i-learned" },
  ],
  "un-habitat-admin": [
    { label: "Overview", href: "#overview" },
    { label: "The Problem", href: "#the-problem" },
    { label: "The Process", href: "#the-process" },
    { label: "Key Insights", href: "#key-insights" },
    { label: "Design Goals", href: "#design-goals" },
    { label: "The Solution", href: "#the-solution" },
    { label: "Joining", href: "#joining", nested: true },
    { label: "Onboarding", href: "#onboarding", nested: true },
    { label: "Implementing", href: "#implementing", nested: true },
    { label: "The Impact", href: "#the-impact" },
    { label: "What I Learned", href: "#what-i-learned" },
  ],
  "un-habitat-design-system": [
    { label: "Overview", href: "#overview" },
    { label: "Challenge", href: "#challenge" },
    { label: "Process", href: "#process" },
    { label: "Design Decisions", href: "#design-decisions" },
    { label: "Results", href: "#results" },
  ],
};

export function getCaseStudyToc(slug: string): CaseStudyTocItem[] {
  return caseStudyTocBySlug[slug] ?? [];
}
