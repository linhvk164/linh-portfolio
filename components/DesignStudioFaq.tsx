"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { designStudio } from "@/data/designStudio";
import { publicPath } from "@/lib/assets";
import { labelCaps } from "@/lib/layout";

const sectionHeadingClassName =
  "scroll-mt-28 text-xl font-semibold tracking-tight text-ink md:scroll-mt-24 md:text-2xl";

type FaqItem = (typeof designStudio.faq.items)[number];

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
            className="w-full cursor-pointer border-0 bg-transparent p-0 pb-4 text-left text-base font-inherit leading-relaxed text-ink-muted md:pb-5 md:text-lg"
          >
            {item.answer}
          </button>
        </div>
      </div>
    </div>
  );
}

export function DesignStudioFaq() {
  const { faq } = designStudio;
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (question: string) => {
    setOpenItems((current) => ({
      ...current,
      [question]: !current[question],
    }));
  };

  return (
    <div className="pb-16 md:pb-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-12 lg:gap-16">
      <ScrollReveal>
        <p className={`${labelCaps} text-ink-soft`}>{faq.brow}</p>
        <h2 id="faq" className={`${sectionHeadingClassName} mt-2`}>
          {faq.heading}
        </h2>
        <div className="mt-6 md:mt-8">
          <Image
            src={publicPath(faq.image)}
            alt={faq.imageAlt}
            width={1400}
            height={934}
            className="h-auto w-full rounded-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </ScrollReveal>

      <div>
        {faq.items.map((item, index) => (
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
    </div>
  );
}
