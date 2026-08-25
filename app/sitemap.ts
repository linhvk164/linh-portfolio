import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/siteUrl";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/freelance", "/brand-dna", "/proposal"] as const;

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency:
        path === "/freelance" || path === "/brand-dna" || path === "/proposal"
          ? ("weekly" as const)
          : ("monthly" as const),
      priority:
        path === ""
          ? 1
          : path === "/freelance" || path === "/brand-dna" || path === "/proposal"
            ? 0.9
            : 0.7,
    })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
