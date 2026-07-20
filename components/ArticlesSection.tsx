"use client";

import { ArticleCard } from "@/components/ArticleCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { articles } from "@/data/articles";
import { labelCaps } from "@/lib/layout";

export function ArticlesSection() {
  return (
    <ScrollReveal className="w-full">
      <section id="media" className="w-full">
        <p className={`${labelCaps} mb-5 text-case-study-body/70`}>media</p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-10">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
