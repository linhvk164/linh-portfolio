import type { Accent } from "@/lib/accent";
import { featuredProjects } from "@/data/featuredProjects";

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

const homeCaptions: Record<string, string> = {
  "un-habitat-urban-data": "UN-Habitat · Quality of Life Initiative",
  "un-habitat-admin": "UN-Habitat · Quality of Life Initiative",
  "un-habitat-design-system": "UN-Habitat · Quality of Life Initiative",
  folio: "Folio",
  chordio: "UX/UI · AI Prototype · Branding",
  lofu: "Mobile UX · Branding · Mental Health",
  "qol-hackathon": "Interactive Design · EdTech · Gamification",
};

export const projects: Project[] = [
  ...featuredProjects.map((project, index) => ({
    slug: project.slug,
    order: index + 1,
    year: project.year,
    productName: project.productName,
    title: project.title,
    accent: project.accent,
    coverImage: project.coverImage,
    coverVideo: project.coverVideo,
    homeCaption: homeCaptions[project.slug] ?? project.productName,
    tags: ["work"],
    sections: [] as ProjectSection[],
    images: [] as string[],
  })),
  {
    slug: "makoasya",
    order: featuredProjects.length + 1,
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
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getSortedProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}
