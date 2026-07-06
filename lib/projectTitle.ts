type ProjectTitleParts = {
  year: string;
  productName: string;
  title: string;
};

export function formatProjectMeta({ year, productName, title }: ProjectTitleParts) {
  const prefix = `${productName} · ${year}`;
  if (title.trim() === productName.trim()) {
    return prefix;
  }
  return `${prefix} — ${title}`;
}

export function formatProductYear({ year, productName }: Pick<ProjectTitleParts, "year" | "productName">) {
  return `${productName} · ${year}`;
}

export type { ProjectTitleParts };
