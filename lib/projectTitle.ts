type ProjectTitleParts = {
  slug?: string;
  year: string;
  productName: string;
  title: string;
};

function formatYearLabel(year: string, slug?: string): string {
  if (!slug) return year;
  if (slug === "folio") return `Shipped ${year}`;
  if (slug.startsWith("un-habitat-")) return `Contract ${year}`;
  if (slug === "chordio" || slug === "lofu") return `Concept ${year}`;
  return year;
}

export function formatProjectMeta({
  year,
  productName,
  title,
  slug,
}: ProjectTitleParts) {
  const yearLabel = formatYearLabel(year, slug);
  const prefix = `${productName} · ${yearLabel}`;
  if (title.trim() === productName.trim()) {
    return prefix;
  }
  return `${prefix} — ${title}`;
}

export function formatProductYear({
  year,
  productName,
  slug,
}: Pick<ProjectTitleParts, "year" | "productName" | "slug">) {
  return `${productName} · ${formatYearLabel(year, slug)}`;
}

export type { ProjectTitleParts };
