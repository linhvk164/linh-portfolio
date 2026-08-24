"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { articles, type Article } from "@/data/articles";
import { designStudio } from "@/data/designStudio";
import { publicPath } from "@/lib/assets";

const LINKEDIN_LOGO = "/images/general/linked-logo.png";

const masonryItemClassName = "mb-3 break-inside-avoid md:mb-4";

type GridEntry =
  | { type: "testimonial"; slug: string }
  | { type: "article"; id: string };

const gridOrder: GridEntry[] = [
  { type: "article", id: "un-statistical-commission" },
  { type: "testimonial", slug: "grayson-bass" },
  { type: "article", id: "uwaterloo-hackathon" },
  { type: "testimonial", slug: "salman-navqi" },
  { type: "article", id: "suzhou-hackathon" },
  { type: "article", id: "waterloo-hackathon" },
  { type: "testimonial", slug: "dhorea-ramanula" },
  { type: "article", id: "welcome-webinar" },
  { type: "article", id: "qoli-team" },
];

function PostCard({
  article,
  compact = false,
}: {
  article: Article;
  compact?: boolean;
}) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-[1.25rem] bg-[#f3f3f3] md:rounded-[1.5rem]"
    >
      <div
        className={
          compact
            ? "relative min-h-[11rem] md:min-h-[13rem]"
            : "relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]"
        }
      >
        <Image
          src={publicPath(article.coverImage)}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          {article.host === "LinkedIn" ? (
            <Image
              src={publicPath(LINKEDIN_LOGO)}
              alt=""
              width={18}
              height={18}
              className="mb-2.5 h-[18px] w-[18px] object-contain brightness-0 invert"
            />
          ) : (
            <p className="mb-2 text-[0.65rem] font-semibold tracking-[0.14em] text-white/75 uppercase">
              {article.host}
            </p>
          )}
          <p className="text-sm font-semibold leading-snug text-white md:text-[0.9375rem]">
            {article.title}
          </p>
        </div>
      </div>
    </a>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <figure className="flex flex-col justify-between rounded-[1.25rem] bg-[#f3f3f3] p-5 md:rounded-[1.5rem] md:p-6">
      <blockquote className="text-sm leading-relaxed text-ink md:text-[0.9375rem]">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6">
        <p className="text-sm font-semibold tracking-tight text-ink">
          {name}
        </p>
        <p className="mt-1 text-xs text-ink-muted">{role}</p>
      </figcaption>
    </figure>
  );
}

export function TrustedFeaturedSection() {
  const { testimonials } = designStudio;
  const articleById = Object.fromEntries(
    articles.map((article) => [article.id, article]),
  );
  const testimonialBySlug = Object.fromEntries(
    testimonials.items.map((item) => [item.slug, item]),
  );

  return (
    <section
      id="media"
      aria-labelledby="trusted-featured-heading"
      className="scroll-mt-28 md:scroll-mt-24"
    >
      <ScrollReveal>
        <div className="text-center">
          <h2
            id="trusted-featured-heading"
            className="design-studio-about-title tracking-tight text-ink"
          >
            {testimonials.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-8 columns-2 gap-3 md:mt-10 md:columns-3 md:gap-4">
        {gridOrder.map((entry, index) => {
          if (entry.type === "testimonial") {
            const item = testimonialBySlug[entry.slug];
            if (!item) return null;

            return (
              <ScrollReveal
                key={`testimonial-${item.slug}`}
                delay={index * 50}
                className={masonryItemClassName}
              >
                <TestimonialCard
                  quote={item.quote}
                  name={item.name}
                  role={item.role}
                />
              </ScrollReveal>
            );
          }

          const article = articleById[entry.id];
          if (!article) return null;

          return (
            <ScrollReveal
              key={`article-${article.id}`}
              delay={index * 50}
              className={masonryItemClassName}
            >
              <PostCard
                article={article}
                compact={article.variant === "linkedin-title"}
              />
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
