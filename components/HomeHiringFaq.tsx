"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { designStudioCallHref } from "@/data/designStudio";
import { hiringFaq } from "@/data/hiringFaq";
import { publicPath } from "@/lib/assets";
import { labelCaps, pillButton } from "@/lib/layout";

const sectionHeadingClassName =
  "scroll-mt-28 text-xl font-semibold tracking-tight text-ink md:scroll-mt-24 md:text-2xl";

type FaqItem = (typeof hiringFaq.items)[number];

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="border-b border-border">
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-start justify-between gap-4 py-4 text-left md:py-5"
      >
        <span className="text-base font-semibold tracking-tight text-ink md:text-lg">
          {item.question}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={2.25}
          aria-hidden
          className={`mt-0.5 shrink-0 text-ink-soft transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <button
            type="button"
            onClick={onToggle}
            className="flex w-full cursor-pointer flex-col gap-4 border-0 bg-transparent p-0 pb-4 text-left text-base font-inherit leading-relaxed text-ink-muted md:gap-5 md:pb-5 md:text-lg"
          >
            {item.answer.map((paragraph) => (
              <span key={paragraph.slice(0, 48)} className="block">
                {paragraph}
              </span>
            ))}
          </button>
        </div>
      </div>
    </div>
  );
}

export function HomeHiringFaq() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (question: string) => {
    setOpenItems((current) => ({
      ...current,
      [question]: !current[question],
    }));
  };

  return (
    <section
      id="hiring-faq"
      aria-labelledby="hiring-faq-heading"
      className="scroll-mt-28 pt-16 md:scroll-mt-24 md:pt-20"
    >
      <ScrollReveal>
        <p className={`${labelCaps} text-ink-soft`}>{hiringFaq.brow}</p>
        <h2
          id="hiring-faq-heading"
          className={`${sectionHeadingClassName} mt-2`}
        >
          {hiringFaq.heading}
        </h2>
      </ScrollReveal>

      <div className="mt-6 grid gap-10 md:mt-8 md:grid-cols-2 md:items-start md:gap-12 lg:gap-16">
        <ScrollReveal>
          <Image
            src={publicPath(hiringFaq.image)}
            alt={hiringFaq.imageAlt}
            width={1400}
            height={934}
            className="h-auto w-full rounded-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </ScrollReveal>

        <div>
          {hiringFaq.items.map((item, index) => (
            <ScrollReveal key={item.question} delay={index * 70}>
              <FaqAccordionItem
                item={item}
                isOpen={Boolean(openItems[item.question])}
                onToggle={() => toggleItem(item.question)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ScrollReveal delay={80}>
        <div className="mt-12 flex flex-col items-center gap-3 text-center md:mt-14">
          <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
            Looking to learn more?
          </h2>
          <a
            href={designStudioCallHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${pillButton} mt-2`}
          >
            Let&apos;s chat
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
