import type { Accent } from "@/lib/accent";
import { unHabitatCaseStudies } from "@/data/unHabitatCaseStudies";

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

export const unHabitatFeaturedProjects: FeaturedProject[] =
  unHabitatCaseStudies.map((study) => ({
    slug: study.slug,
    year: study.year,
    productName: study.productName,
    title: study.title,
    footerLabel: study.footerLabel,
    overview: study.summary,
    tagList: study.tagList,
    coverImage: study.coverImage,
    coverVideo: study.coverVideo,
    externalUrl: study.externalUrl,
    accent: "yellow",
    hoverType: "case-study",
    ...(study.slug === "un-habitat-urban-data"
      ? { coverAspect: "16/10" as const, coverFit: "contain" as const }
      : {}),
  }));

export const otherFeaturedProjects: FeaturedProject[] = [
  {
    slug: "folio",
    year: "2026",
    productName: "Folio",
    title: "Helping Language Learners Stay in the Flow",
    overview:
      "A distraction-free writing tool that helps language learners express their thoughts without juggling disconnected apps.",
    tagList: [
      "Startup Founder",
      "EdTech",
      "User Research",
    ],
    coverImage: "",
    coverVideo: "/images/folio/folio-cover-video.mov",
    externalUrl: "https://folioapp.ca",
    accent: "blue",
    hoverType: "case-study",
  },
  {
    slug: "chordio",
    year: "2023",
    productName: "Chordio",
    title: "Rethinking How Musicians Save and Organize Ideas",
    overview:
      "A songwriting tool that helps musicians capture lyrics, chords, recordings, and song ideas in one place without breaking creative flow.",
    tagList: [
      "UX/UI",
      "AI Prototype",
      "Branding",
      "Music",
    ],
    coverImage: "/images/songwriting-app/chordio-main-image.png",
    accent: "pink",
    hoverType: "case-study",
  },
  {
    slug: "lofu",
    year: "2020",
    productName: "Lofu",
    title: "A Gentler Approach to Mental Wellness",
    overview:
      "A mobile experience combining mental wellness resources with gentle gamification to encourage self-reflection in a welcoming, culturally relevant way.",
    tagList: [
      "UX/UI Designer",
      "Branding",
      "Mobile",
      "Mental Health",
    ],
    coverImage: "/images/lofu/lofu main image.png",
    accent: "green",
    hoverType: "case-study",
  },
];

const folio = otherFeaturedProjects.find((project) => project.slug === "folio")!;
const [chordio, lofu] = otherFeaturedProjects.filter(
  (project) => project.slug === "chordio" || project.slug === "lofu",
);

export const homeFeaturedProjects: FeaturedProject[] = [
  folio,
  ...unHabitatFeaturedProjects,
  chordio,
  lofu,
].filter(Boolean);

export const featuredProjects: FeaturedProject[] = [
  ...unHabitatFeaturedProjects,
  ...otherFeaturedProjects,
];

export const caseStudyProjects = featuredProjects.filter(
  (project) => project.hoverType === "case-study",
);

export function getProjectFooterLabel(project: FeaturedProject) {
  return project.footerLabel ?? project.productName;
}

export function getProjectExternalUrl(slug: string) {
  return featuredProjects.find((project) => project.slug === slug)?.externalUrl;
}
