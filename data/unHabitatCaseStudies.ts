export type UnHabitatProject = {
  slug: string;
  year: string;
  productName: string;
  title: string;
  footerLabel?: string;
  summary: string;
  tagList: string[];
  coverImage: string;
  coverVideo?: string;
  externalUrl?: string;
};

export const unHabitatCaseStudies: UnHabitatProject[] = [
  {
    slug: "un-habitat-urban-data",
    year: "2025",
    productName: "Quality of Life Initiative",
    title: "Helping Cities Make Sense of Complex Urban Data",
    summary:
      "Designing an experience that transformed dense Quality of Life datasets into something people could explore with confidence.",
    tagList: ["UX/UI", "Data Visualization", "Civic Tech"],
    coverImage: "/images/un-habitat/quality of life main image.png",
    coverVideo: "/images/un-habitat/qoli-cover-video.mov",
    externalUrl: "https://www.qolimpact.com",
    footerLabel: "Quality of Life Urban Data",
  },
  {
    slug: "un-habitat-admin",
    year: "2025",
    productName: "Quality of Life Initiative",
    title: "Simplifying the Way Cities Manage Their Data",
    summary:
      "Making administrative workflows for uploading, reviewing, and maintaining Quality of Life data feel clear instead of stressful.",
    tagList: ["UX/UI", "Admin Dashboard", "Workflow Design"],
    coverImage: "/images/un-habitat/cityexplorer-main-image.png",
    footerLabel: "Quality of Life Admin",
  },
  {
    slug: "un-habitat-design-system",
    year: "2024",
    productName: "Quality of Life Initiative",
    title: "Building a Design System for a Growing Global Platform",
    summary:
      "Expanding and refining a shared design system so multiple designers and developers could ship consistent experiences at scale.",
    tagList: ["UX/UI", "Design Systems", "Accessibility"],
    coverImage: "/images/un-habitat/qoli-icons.png",
    footerLabel: "Quality of Life Design System",
  },
];
