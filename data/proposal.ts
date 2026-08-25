import { designStudioCallHref } from "@/data/designStudio";
import type { BrandDnaScores } from "@/data/brandDna";

export const proposalPhases = [
  "Discover",
  "Define",
  "Scope",
  "Build",
  "Review",
  "Launch",
] as const;

export type ProposalPhase = (typeof proposalPhases)[number];

export type ProposalSlideMeta = {
  id: string;
  number: string;
  title: string;
  phase: ProposalPhase;
  /** Left-column copy for interactive slides */
  intro?: string;
  interactive?: boolean;
  image: string;
  imageAlt: string;
};

/** Edit these for each client engagement. */
export const proposalConfig = {
  investment: "$450 CAD",
  depositNote: "50% to begin · 50% before launch",
  agreementHref: designStudioCallHref,
  agreementLabel: "Sign agreement",
  storageKey: "linhvk-proposal-v1",
} as const;

export const proposalSlides: ProposalSlideMeta[] = [
  {
    id: "welcome",
    number: "01",
    title: "Welcome",
    phase: "Discover",
    image: "/images/about/Work trip picture.webp",
    imageAlt: "Working together on location",
  },
  {
    id: "about-project",
    number: "02",
    title: "About the project",
    phase: "Discover",
    interactive: true,
    intro:
      "Capture what you shared and how I understand it. We can edit this together on the call.",
    image: "/images/folio/process-figma.png",
    imageAlt: "Design exploration in Figma",
  },
  {
    id: "goals",
    number: "03",
    title: "Your goals",
    phase: "Discover",
    interactive: true,
    intro:
      "If this website could accomplish one thing really well, what would it be?",
    image: "/images/un-habitat/qoli-fan.png",
    imageAlt: "Quality of life data visualization",
  },
  {
    id: "audience",
    number: "04",
    title: "Your audience",
    phase: "Discover",
    interactive: true,
    intro:
      "Imagine someone visiting your website for the first time. Who are they?",
    image: "/images/about/hackathon-1.JPG",
    imageAlt: "People collaborating at a hackathon",
  },
  {
    id: "brand-dna",
    number: "05",
    title: "Brand DNA",
    phase: "Discover",
    interactive: true,
    intro:
      "Let's figure out how your brand should feel. A tiny Brand DNA quiz.",
    image: "/images/folio/ux-is-important.webp",
    imageAlt: "UX exploration sketch",
  },
  {
    id: "visual",
    number: "06",
    title: "Visual direction",
    phase: "Define",
    interactive: true,
    intro: "Build a quick moodboard. Pick what feels like you, and what does not.",
    image: "/images/un-habitat/quality of life-solution.webp",
    imageAlt: "Visual direction exploration",
  },
  {
    id: "messaging",
    number: "07",
    title: "Content and messaging",
    phase: "Define",
    interactive: true,
    intro: "Complete these sentences to shape a simple messaging brief.",
    image: "/images/folio/proof-of-concept.png",
    imageAlt: "Early product concept",
  },
  {
    id: "structure",
    number: "08",
    title: "Website structure",
    phase: "Scope",
    interactive: true,
    intro: "Suggested pages for your site. Add or change anything that feels missing.",
    image: "/images/un-habitat/implementation-flow.png",
    imageAlt: "Information architecture flow",
  },
  {
    id: "deliverables",
    number: "09",
    title: "What I'll deliver",
    phase: "Scope",
    image: "/images/un-habitat/quality of life-process.png",
    imageAlt: "Design process overview",
  },
  {
    id: "how-we-work",
    number: "10",
    title: "How we'll work",
    phase: "Build",
    interactive: true,
    intro: "A clear path from first call to launch.",
    image: "/images/un-habitat/process.webp",
    imageAlt: "Collaborative process mapping",
  },
  {
    id: "revisions",
    number: "11",
    title: "Feedback and revisions",
    phase: "Build",
    image: "/images/un-habitat/brainstorm-2.webp",
    imageAlt: "Feedback and iteration notes",
  },
  {
    id: "needs",
    number: "12",
    title: "What I need from you",
    phase: "Build",
    interactive: true,
    intro:
      "Before development begins, I'll need these from you. The faster I get them, the faster we can launch.",
    image: "/images/un-habitat/Onboarding.png",
    imageAlt: "Onboarding and asset checklist UI",
  },
  {
    id: "timeline",
    number: "13",
    title: "Timeline",
    phase: "Review",
    image: "/images/un-habitat/qoli-process.webp",
    imageAlt: "Project timeline exploration",
  },
  {
    id: "investment",
    number: "14",
    title: "Investment",
    phase: "Review",
    image: "/images/about/cornerstone.JPG",
    imageAlt: "Building something together",
  },
  {
    id: "ownership",
    number: "15",
    title: "Ownership and handoff",
    phase: "Review",
    interactive: true,
    intro: "After launch, you'll receive:",
    image: "/images/un-habitat/Login.png",
    imageAlt: "Platform access and handoff",
  },
  {
    id: "next",
    number: "16",
    title: "What happens next",
    phase: "Launch",
    image: "/images/about/China outdoor.webp",
    imageAlt: "Ready for the next step",
  },
  {
    id: "agreement",
    number: "17",
    title: "Agreement",
    phase: "Launch",
    image: "/images/about/DSCF4503.webp",
    imageAlt: "A clear path forward",
  },
];

export const goalOptions = [
  {
    id: "discovered",
    title: "Get discovered",
    description: "Help new people find and understand my business.",
  },
  {
    id: "trust",
    title: "Build trust",
    description: "Make my business feel established and credible.",
  },
  {
    id: "inquiries",
    title: "Get more inquiries",
    description: "Turn visitors into potential clients or customers.",
  },
  {
    id: "showcase",
    title: "Showcase my work",
    description: "Let my work speak for itself.",
  },
  {
    id: "sell",
    title: "Sell something",
    description: "Turn visitors into customers.",
  },
  {
    id: "other",
    title: "Something else",
    description: "Tell me in your own words.",
  },
] as const;

export const visualDirectionOptions = [
  { id: "editorial", label: "Editorial", color: "#6b7280" },
  { id: "playful", label: "Playful", color: "#7c8a7a" },
  { id: "minimal", label: "Minimal", color: "#9ca3af" },
  { id: "bold", label: "Bold", color: "#4b5563" },
  { id: "warm", label: "Warm", color: "#8b9a8b" },
  { id: "luxury", label: "Luxury", color: "#57534e" },
  { id: "organic", label: "Organic", color: "#586e5e" },
  { id: "experimental", label: "Experimental", color: "#64748b" },
] as const;

export const brandWantSeed = [
  "warm",
  "sophisticated",
  "playful",
  "calm",
  "bold",
  "friendly",
  "modern",
  "trustworthy",
] as const;

export const brandAvoidSeed = [
  "corporate",
  "sterile",
  "chaotic",
  "cold",
  "generic",
  "overly feminine",
  "loud",
  "dated",
] as const;

export const clientNeedItems = [
  "Logo and brand assets",
  "Website copy",
  "Photos and imagery",
  "Business information",
  "Social links",
  "Contact information",
  "Testimonials or FAQs",
  "Any required legal content",
  "Domain access",
  "Feedback and approvals",
] as const;

export const defaultPages = [
  "Home",
  "About",
  "Services or Work",
  "Contact",
  "FAQ",
] as const;

export const timelineDays = [
  { day: "DAY 01", title: "Discovery + direction" },
  { day: "DAY 02", title: "Design exploration" },
  { day: "DAY 03-04", title: "Design + development" },
  { day: "DAY 05", title: "First review" },
  { day: "DAY 06", title: "Revisions" },
  { day: "DAY 07", title: "Final polish + launch" },
] as const;

export const deliverableGroups = [
  {
    number: "01",
    title: "Strategy",
    items: ["Brand direction", "Content structure", "Visual direction"],
  },
  {
    number: "02",
    title: "Design",
    items: ["Responsive UI", "Mobile + desktop", "Custom visual system"],
  },
  {
    number: "03",
    title: "Development",
    items: ["Responsive implementation", "Interactions", "Forms / integrations"],
  },
  {
    number: "04",
    title: "Launch",
    items: ["Deployment", "Domain connection", "Handoff"],
  },
] as const;

export const workSteps = [
  {
    number: "01",
    title: "Discover call",
    body: "We learn your goals, timeline, and what success looks like.",
  },
  {
    number: "02",
    title: "Content and copy",
    body: "I draft the essential sections. You review before we build.",
  },
  {
    number: "03",
    title: "Design, build, improve",
    body: "Five to six focused days. Feedback sessions along the way.",
  },
  {
    number: "04",
    title: "Launch",
    body: "You go live. Time to show it off.",
  },
] as const;

export const ownershipItems = [
  {
    title: "Domain",
    body: "Your website address",
  },
  {
    title: "Documentation",
    body: "Everything you need to know about the project",
  },
] as const;

export const maintenanceOptions = [
  {
    id: "self",
    title: "I'll manage it myself",
    description:
      "I want full control. You hand everything off and I take it from there.",
  },
  {
    id: "as-needed",
    title: "Support when I need it",
    description:
      "I'll manage day to day, and reach out for edits when something comes up.",
  },
  {
    id: "ongoing",
    title: "Ongoing help",
    description:
      "I'd like you to handle updates and maintenance after launch.",
  },
] as const;

export const nextSteps = [
  "Sign the agreement",
  "50% deposit",
  "Send your content and assets",
  "We start building",
] as const;

export type MiniBrandQuestion = {
  id: string;
  prompt: string;
  answers: {
    id: string;
    title: string;
    scores: Partial<BrandDnaScores>;
  }[];
};

export const miniBrandQuestions: MiniBrandQuestion[] = [
  {
    id: "room",
    prompt: "Your brand walks into a room. What does it do?",
    answers: [
      {
        id: "welcome",
        title: "Makes everyone feel welcome",
        scores: { warm: 3, thoughtful: 1 },
      },
      {
        id: "attention",
        title: "Commands attention",
        scores: { bold: 3, playful: 1 },
      },
      {
        id: "conversation",
        title: "Starts an interesting conversation",
        scores: { playful: 2, thoughtful: 2, experimental: 1 },
      },
      {
        id: "observe",
        title: "Quietly observes and says something insightful",
        scores: { thoughtful: 3, refined: 2 },
      },
    ],
  },
  {
    id: "visual-world",
    prompt: "Which visual world feels closest to you?",
    answers: [
      {
        id: "natural",
        title: "Soft light, natural textures, human details",
        scores: { warm: 3, thoughtful: 1 },
      },
      {
        id: "sharp",
        title: "Strong contrast, confident colour, punchy type",
        scores: { bold: 3, experimental: 1 },
      },
      {
        id: "editorial",
        title: "Clean layouts, refined type, quiet elegance",
        scores: { refined: 3, thoughtful: 1 },
      },
      {
        id: "playful-world",
        title: "Unexpected shapes, colour pops, a little surprise",
        scores: { playful: 3, experimental: 2 },
      },
    ],
  },
  {
    id: "writing",
    prompt: "How should your writing sound?",
    answers: [
      {
        id: "friend",
        title: "Like a knowledgeable friend",
        scores: { warm: 2, thoughtful: 2 },
      },
      {
        id: "expert",
        title: "Like an expert",
        scores: { refined: 2, bold: 2 },
      },
      {
        id: "storyteller",
        title: "Like an enthusiastic storyteller",
        scores: { playful: 3, warm: 1 },
      },
      {
        id: "guide",
        title: "Like a calm guide",
        scores: { thoughtful: 3, refined: 1 },
      },
    ],
  },
];

export type ProposalAnswers = {
  aboutTold: string;
  aboutUnderstand: string;
  goals: string[];
  goalOther: string;
  successLooksLike: string;
  audienceLookingFor: string;
  audienceFeeling: string;
  audienceLeaveThinking: string;
  audienceThen: string;
  brandDnaAnswers: Record<string, string>;
  visualDirections: string[];
  wantWords: string[];
  avoidWords: string[];
  helpWho: string;
  comeBecause: string;
  differentBecause: string;
  rememberOneThing: string;
  wordsUse: string[];
  wordsAvoid: string[];
  structureNotes: string;
  clientChecklist: Record<string, boolean>;
  maintenancePreference: string;
};

export function createEmptyProposalAnswers(): ProposalAnswers {
  return {
    aboutTold: "",
    aboutUnderstand: "",
    goals: [],
    goalOther: "",
    successLooksLike: "",
    audienceLookingFor: "",
    audienceFeeling: "",
    audienceLeaveThinking: "",
    audienceThen: "",
    brandDnaAnswers: {},
    visualDirections: [],
    wantWords: [],
    avoidWords: [],
    helpWho: "",
    comeBecause: "",
    differentBecause: "",
    rememberOneThing: "",
    wordsUse: [],
    wordsAvoid: [],
    structureNotes: "",
    clientChecklist: Object.fromEntries(
      clientNeedItems.map((item) => [item, false]),
    ),
    maintenancePreference: "",
  };
}
