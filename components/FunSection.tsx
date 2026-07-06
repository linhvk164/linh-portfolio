"use client";

import Image from "next/image";
import { useState } from "react";
import { FunModal } from "@/components/FunModal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FUN_PLACEHOLDER_IMAGE, funItems, type FunItem } from "@/data/fun";
import { publicPath } from "@/lib/assets";
import { gridCardShell, gridCardTitle, labelCaps } from "@/lib/layout";

function FunCard({
  item,
  onSelect,
}: {
  item: FunItem;
  onSelect: (item: FunItem) => void;
}) {
  const thumb = item.coverImage ?? FUN_PLACEHOLDER_IMAGE;

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="group min-w-0 flex-1 basis-0 text-left"
    >
      <div className={gridCardShell}>
        <div className="relative aspect-square overflow-hidden rounded-[var(--radius-card)] border border-border bg-bg transition-transform duration-300 ease-out group-hover:scale-[1.02]">
          <Image
            src={publicPath(thumb)}
            alt={item.title}
            fill
            className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 40vw, 18vw"
          />
        </div>
      </div>
      <p className={gridCardTitle}>{item.title}</p>
    </button>
  );
}

export function FunSection() {
  const [activeItem, setActiveItem] = useState<FunItem | null>(null);

  return (
    <>
      <ScrollReveal className="w-full">
        <section id="fun" className="w-full">
          <p className={`${labelCaps} mb-5 text-case-study-body/70`}>Fun</p>
          <div className="flex gap-4 md:gap-5">
            {funItems.map((item) => (
              <FunCard key={item.id} item={item} onSelect={setActiveItem} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      <FunModal item={activeItem} onClose={() => setActiveItem(null)} />
    </>
  );
}
