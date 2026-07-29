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
    { label: "Outtakes", href: "#outtakes" },
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
    { label: "Reflection", href: "#reflection" },
  ],
  "un-habitat-urban-data": [
    { label: "Overview", href: "#overview" },
    { label: "The team and my role", href: "#the-team-and-my-role" },
    { label: "Challenge", href: "#challenge" },
    {
      label: "Key UX flows I implemented",
      href: "#key-ux-flows-i-implemented",
    },
    { label: "Landing page", href: "#landing-page", nested: true },
    { label: "Sunburst Diagram", href: "#sunburst-diagram", nested: true },
    { label: "Indicator Data", href: "#indicator-data", nested: true },
    { label: "Survey app", href: "#survey-app", nested: true },
    { label: "Outtakes", href: "#outtakes" },
  ],
  "un-habitat-admin": [
    { label: "Overview", href: "#overview" },
    { label: "Problem", href: "#problem" },
    { label: "Process", href: "#process" },
    { label: "Design Decisions", href: "#design-decisions" },
    { label: "Solution", href: "#solution" },
    { label: "Reflection", href: "#reflection" },
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
