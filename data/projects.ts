import type { Accent } from "@/lib/accent";
import { unHabitatCaseStudies } from "@/data/unHabitatCaseStudies";

export type ProjectSection = {
  id: string;
  label: string;
  content: string;
};

export type Project = {
  slug: string;
  order: number;
  year: string;
  productName: string;
  title: string;
  accent: Accent;
  coverImage: string;
  coverVideo?: string;
  homeCaption: string;
  tags: string[];
  sections: ProjectSection[];
  images: string[];
};

export const projects: Project[] = [
  ...unHabitatCaseStudies.map((study, index) => ({
    slug: study.slug,
    order: index + 1,
    year: study.year,
    productName: study.productName,
    title: study.title,
    accent: "yellow" as Accent,
    coverImage: study.coverImage,
    coverVideo: study.coverVideo,
    homeCaption: "UN-Habitat · Quality of Life Initiative",
    tags: ["work"],
    sections: [],
    images: [],
  })),
  {
    slug: "folio",
    order: 4,
    year: "2026",
    productName: "Folio",
    title: "Helping language learners stay in the flow",
    accent: "blue",
    coverImage: "",
    coverVideo: "/images/folio/folio-cover-video.mov",
    homeCaption: "Folio",
    tags: ["work"],
    sections: [],
    images: [],
  },
  {
    slug: "chordio",
    order: 5,
    year: "2023",
    productName: "Chordio",
    title: "Rethinking how musicians save and organize ideas",
    accent: "pink",
    coverImage: "/images/songwriting-app/chordio-main-image.png",
    homeCaption: "UX/UI · AI Prototype · Branding",
    tags: ["work"],
    sections: [],
    images: [],
  },
  {
    slug: "lofu",
    order: 6,
    year: "2020",
    productName: "Lofu",
    title: "A gentler approach to mental wellness",
    accent: "green",
    coverImage: "/images/lofu/lofu main image.png",
    homeCaption: "UX/UI · AI Prototype · Branding",
    tags: ["work"],
    sections: [],
    images: [],
  },
  {
    slug: "makoasya",
    order: 7,
    year: "2025",
    productName: "mako asya",
    title: "mako asya",
    accent: "pink",
    coverImage: "/images/makoasya/makoasya_2025.png",
    homeCaption: "mako asya",
    tags: ["fun"],
    sections: [
      { id: "overview", label: "Overview", content: "" },
      { id: "process", label: "Process", content: "" },
      { id: "outcome", label: "Outcome", content: "" },
    ],
    images: [],
  },
  {
    slug: "tako-inc",
    order: 8,
    year: "2023",
    productName: "Tako Inc.",
    title: "Tako Inc.",
    accent: "blue",
    coverImage: "/images/tako/tako-cover.png",
    homeCaption: "Tako Inc.",
    tags: ["work"],
    sections: [
      { id: "overview", label: "Overview", content: "" },
      { id: "process", label: "Process", content: "" },
      { id: "outcome", label: "Outcome", content: "" },
    ],
    images: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getSortedProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}
