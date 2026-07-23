import type { Accent } from "@/lib/accent";

export type ProjectHoverType = "website" | "case-study";

export type FeaturedProject = {
  slug: string;
  year: string;
  productName: string;
  title: string;
  footerLabel?: string;
  overview: string;
  tagList: string[];
  coverImage: string;
  coverVideo?: string;
  externalUrl?: string;
  accent: Accent;
  hoverType: ProjectHoverType;
  coverAspect?: "3/2" | "16/10";
  coverFit?: "cover" | "contain";
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "folio",
    year: "2026",
    productName: "Folio",
    title: "From Research to a Working Beta in 2 Months",
    overview:
      "Led research, design, and launch of Folio—a distraction-free writing space for language learners—shipping a live beta in 2 months.",
    tagList: ["Product Design", "User Research", "EdTech Founder"],
    coverImage: "",
    coverVideo: "/images/folio/folio-cover-casestudy.mov",
    externalUrl: "https://folioapp.ca",
    accent: "blue",
    hoverType: "case-study",
  },
  {
    slug: "un-habitat-urban-data",
    year: "2025",
    productName: "UN Quality Of Life Initiative",
    title: "Data Visualizations For a Global Platform Live Across 100+ Cities",
    footerLabel: "Quality of Life — Data Visualization",
    overview:
      "Designed data visualizations for a platform live across 100+ cities, shaping direction with 25+ city officials and global stakeholders.",
    tagList: ["Data Visualization", "Accessibility", "Civic Tech"],
    coverImage: "/images/un-habitat/quality of life main image.png",
    coverVideo: "/images/un-habitat/qoli-cover-video.mov",
    externalUrl: "https://www.qolimpact.com",
    accent: "yellow",
    hoverType: "case-study",
    coverAspect: "16/10",
    coverFit: "contain",
  },
  {
    slug: "un-habitat-admin",
    year: "2025",
    productName: "UN Quality Of Life Initiative",
    title: "Administrative Workflows For City Officials Across 100+ Cities",
    footerLabel: "Quality of Life — Admin Dashboard",
    overview:
      "Streamlined upload and review workflows for city administrators across a platform used in 100+ cities.",
    tagList: ["Admin Dashboard", "Workflow Design", "UX/UI"],
    coverImage: "/images/un-habitat/cityexplorer-main-image.png",
    accent: "yellow",
    hoverType: "case-study",
  },
  {
    slug: "un-habitat-design-system",
    year: "2024",
    productName: "UN Quality Of Life Initiative",
    title: "200+ Design System, Sped Up Design And Dev By 50%",
    footerLabel: "Quality of Life — Design System",
    overview:
      "Built a 200+ component design system that accelerated design and dev velocity by 50% across a global platform.",
    tagList: ["Design Systems", "Accessibility", "Design Ops"],
    coverImage: "/images/un-habitat/qoli-icons.png",
    accent: "yellow",
    hoverType: "case-study",
  },
  {
    slug: "qol-hackathon",
    year: "2025",
    productName: "Quality Of Life Hackathon Program",
    title: "Interactive Experience For 300+ Students To Explore Civic Data",
    footerLabel: "Quality of Life — Hackathon",
    overview:
      "Created an interactive way for 300+ students to explore Quality of Life domains, making civic data feel playful and hands-on.",
    tagList: ["Interactive Design", "EdTech", "Gamification"],
    coverImage: "/images/un-habitat/qolihackathon.png",
    coverVideo: "/images/un-habitat/qolihackathon.mov",
    accent: "yellow",
    externalUrl: "https://www.qolihackathon.com/gh",
    hoverType: "website",
  },
  {
    slug: "chordio",
    year: "2023",
    productName: "Chordio",
    title: "A Songwriting Tool Shaped By Interviews With Musicians",
    overview:
      "Prototyped a songwriting tool from concept, synthesizing insights from 5 musician interviews to guide feature direction.",
    tagList: ["AI Prototype", "UX/UI", "Branding"],
    coverImage: "/images/songwriting-app/chordio-main-image.png",
    accent: "pink",
    hoverType: "case-study",
  },
  {
    slug: "lofu",
    year: "2020",
    productName: "Lofu",
    title: "A Wellness App Blending Play With Mental Health Support",
    overview:
      "Crafted a mobile wellness experience blending gentle gamification with culturally relevant mental health resources.",
    tagList: ["Mobile UX", "Branding", "Mental Health"],
    coverImage: "/images/lofu/lofu main image.png",
    accent: "green",
    hoverType: "case-study",
  },
];

const homeOrder = [
  "folio",
  "un-habitat-urban-data",
  "un-habitat-admin",
  "qol-hackathon",
  "un-habitat-design-system",
  "lofu",
  "chordio",
] as const;

export const homeFeaturedProjects: FeaturedProject[] = homeOrder
  .map((slug) => featuredProjects.find((project) => project.slug === slug))
  .filter((project): project is FeaturedProject => Boolean(project));

export const caseStudyProjects = featuredProjects.filter(
  (project) => project.hoverType === "case-study",
);

export function getProjectFooterLabel(project: FeaturedProject) {
  return project.footerLabel ?? project.productName;
}

export function getProjectExternalUrl(slug: string) {
  return featuredProjects.find((project) => project.slug === slug)?.externalUrl;
}
