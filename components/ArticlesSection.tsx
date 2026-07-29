"use client";

import { ArticleCard } from "@/components/ArticleCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { articles } from "@/data/articles";

const sectionHeadingClassName =
  "text-xl font-semibold tracking-tight text-ink md:text-2xl";

export function ArticlesSection() {
  return (
    <ScrollReveal className="w-full">
      <section id="media" className="w-full">
        <h2 className={`${sectionHeadingClassName} mb-5`}>Featured In</h2>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-10">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
