export type CaseStudyTocItem = {
  /** Eyebrow label shown in the sidebar TOC */
  label: string;
  href: string;
};

/**
 * Sidebar TOC for case studies — labels use section eyebrows, not titles.
 */
export const caseStudyTocBySlug: Record<string, CaseStudyTocItem[]> = {
  folio: [
    { label: "Overview", href: "#overview" },
    {
      label: "Inspiration",
      href: "#all-good-design-starts-with-a-task-or-in-this-case-an-inspiration",
    },
    { label: "User Research", href: "#interview-your-target-audience" },
    { label: "UX Analysis & Synthesis", href: "#compile-your-findings" },
    {
      label: "Product Positioning",
      href: "#if-you-dont-know-your-niche-youre-bound-to-fail",
    },
    {
      label: "Feature Prioritization",
      href: "#how-do-you-determine-what-to-build",
    },
    { label: "Prototyping", href: "#make-it-real" },
    { label: "Conduct User Tests", href: "#test-test-test" },
    {
      label: "Problem Identification & Iteration",
      href: "#identify-and-improve",
    },
    { label: "Results", href: "#results" },
    { label: "Reflection", href: "#reflection" },
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
    { label: "Problem", href: "#problem" },
    { label: "Process", href: "#process" },
    { label: "Design Decisions", href: "#design-decisions" },
    { label: "Reflection", href: "#reflection" },
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
