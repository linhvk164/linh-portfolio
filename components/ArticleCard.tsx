import { CoverMedia } from "@/components/CoverMedia";
import type { Article } from "@/data/articles";
import { gridCardShell, pillTag } from "@/lib/layout";

export function ArticleCard({ title, url, coverImage, year }: Article) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group min-w-0 text-left"
    >
      <div className={gridCardShell}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-border bg-bg transition-transform duration-300 ease-out group-hover:scale-[1.02]">
          <CoverMedia
            alt={title}
            coverImage={coverImage}
            className="h-full w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
          />
        </div>
      </div>
      <p className="mt-2 text-xs font-semibold capitalize leading-snug text-ink">
        {title}
      </p>
      <span className={`mt-2 inline-flex ${pillTag}`}>{year}</span>
    </a>
  );
}
