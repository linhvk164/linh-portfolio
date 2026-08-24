"use client";

import { ArticleCard } from "@/components/ArticleCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { articles } from "@/data/articles";
import { labelCaps } from "@/lib/layout";

const sectionHeadingClassName =
  "scroll-mt-28 text-xl font-semibold tracking-tight text-ink md:scroll-mt-24 md:text-2xl";

type ArticlesSectionProps = {
  /** Skip scroll-in animation (e.g. after home flyer intro) */
  instant?: boolean;
};

export function ArticlesSection({ instant = false }: ArticlesSectionProps) {
  const section = (
    <section id="media" className="w-full scroll-mt-28 md:scroll-mt-24">
      <p className={`${labelCaps} text-ink-soft`}>Press</p>
      <h2 className={`${sectionHeadingClassName} mt-2`}>Featured In</h2>
      <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 md:mt-8 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-10">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  );

  if (instant) {
    return <div className="w-full">{section}</div>;
  }

  return <ScrollReveal className="w-full">{section}</ScrollReveal>;
}
