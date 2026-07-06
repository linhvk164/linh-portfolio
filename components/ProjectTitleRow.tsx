import { labelCaps } from "@/lib/layout";
import { formatProductYear, type ProjectTitleParts } from "@/lib/projectTitle";

type ProjectTitleRowProps = ProjectTitleParts & {
  className?: string;
  metaClassName?: string;
  titleClassName?: string;
  titleAs?: "h1" | "h2" | "p";
  layout?: "stacked" | "split";
};

export function ProjectTitleRow({
  year,
  productName,
  title,
  className = "",
  metaClassName = "text-ink-soft",
  titleClassName = "project-card-title text-ink",
  titleAs: TitleTag = "h2",
  layout = "stacked",
}: ProjectTitleRowProps) {
  if (layout === "split") {
    return (
      <div className={`flex items-start justify-between gap-4 ${className}`}>
        <TitleTag className={`min-w-0 text-balance ${titleClassName}`}>
          {title}
        </TitleTag>
        <span className={`shrink-0 ${labelCaps} ${metaClassName}`}>
          {formatProductYear({ year, productName })}
        </span>
      </div>
    );
  }

  return (
    <div className={className}>
      <span className={`${labelCaps} ${metaClassName}`}>
        {formatProductYear({ year, productName })}
      </span>
      <TitleTag className={`${titleClassName} mt-2`}>
        {title}
      </TitleTag>
    </div>
  );
}
