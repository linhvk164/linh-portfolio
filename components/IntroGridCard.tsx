import { ChevronDown } from "lucide-react";
import { site } from "@/data/site";
import { gridCard } from "@/lib/layout";

export function IntroGridCard() {
  return (
    <article className={`${gridCard} font-sans`}>
      <h2 className="text-[1.75rem] leading-[1.12] font-bold tracking-[-0.02em] text-ink md:text-[2.125rem]">
        {site.intro.line1}
        <br />
        {site.intro.line2}
      </h2>

      <p className="mt-5 text-base leading-relaxed text-ink-soft">
        {site.intro.description}
      </p>

      <div className="mt-6 flex flex-col items-start gap-1.5 text-base text-ink-soft">
        <span>{site.intro.cta}</span>
        <ChevronDown
          size={16}
          strokeWidth={2}
          className="intro-scroll-hint"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}
