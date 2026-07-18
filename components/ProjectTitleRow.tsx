import { labelCaps } from "@/lib/layout";
import { formatYearLabel, type ProjectTitleParts } from "@/lib/projectTitle";

type ProjectTitleRowProps = ProjectTitleParts & {
  className?: string;
  metaClassName?: string;
  titleClassName?: string;
  titleAs?: "h1" | "h2" | "p";
  layout?: "stacked" | "split";
};

export function ProjectTitleRow({
  slug,
  year,
  productName,
  title,
  className = "",
  metaClassName = "text-ink-soft",
  titleClassName = "project-card-title text-ink",
  titleAs: TitleTag = "h2",
  layout = "stacked",
}: ProjectTitleRowProps) {
  const yearLabel = formatYearLabel(year, slug);
  const metaRow = (
    <div className={`flex items-baseline justify-between gap-4 ${labelCaps} ${metaClassName}`}>
      <div className="min-w-0">{productName}</div>
      <div className="shrink-0">{yearLabel}</div>
    </div>
  );

  if (layout === "split") {
    return (
      <div className={`flex items-start justify-between gap-4 ${className}`}>
        <TitleTag className={`min-w-0 text-balance ${titleClassName}`}>
          {title}
        </TitleTag>
        <div className="shrink-0 text-right">
          <div className={labelCaps}>{productName}</div>
          <div className={`${labelCaps} ${metaClassName}`}>{yearLabel}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {metaRow}
      <TitleTag className={`${titleClassName} mt-2`}>
        {title}
      </TitleTag>
    </div>
  );
}
