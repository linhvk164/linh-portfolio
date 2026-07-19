import { site } from "@/data/site";
import { gridCard } from "@/lib/layout";

export function PhilosophyGridCard() {
  return (
    <article className={gridCard}>
      <blockquote className="text-base leading-snug font-semibold text-ink md:text-lg">
        &ldquo;{site.philosophy.quote}&rdquo;
      </blockquote>
      <p className="mt-4 label-caps text-ink">
        {site.philosophy.label}
      </p>
    </article>
  );
}
