"use client";

import Image from "next/image";
import { useState } from "react";
import { FunModal } from "@/components/FunModal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FUN_PLACEHOLDER_IMAGE, funItems, type FunItem } from "@/data/fun";
import { publicPath } from "@/lib/assets";

function FunCard({
  item,
  onSelect,
}: {
  item: FunItem;
  onSelect: (item: FunItem) => void;
}) {
  const thumb = item.coverImage ?? FUN_PLACEHOLDER_IMAGE;
  const image = (
    <Image
      src={publicPath(thumb)}
      alt={item.title}
      width={1200}
      height={900}
      className="h-auto w-full transition-transform duration-300 ease-out group-hover:scale-[1.02]"
      sizes="(max-width: 768px) 50vw, 33vw"
    />
  );

  const className =
    "group mb-4 block w-full break-inside-avoid text-left md:mb-5";

  if (item.youtubeId) {
    return (
      <a
        href={`https://youtu.be/${item.youtubeId}`}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`Watch ${item.title} on YouTube`}
      >
        {image}
      </a>
    );
  }

  if (item.externalUrl) {
    return (
      <a
        href={item.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`Visit ${item.title}`}
      >
        {image}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className={className}
      aria-label={item.title}
    >
      {image}
    </button>
  );
}

export function FunSection() {
  const [activeItem, setActiveItem] = useState<FunItem | null>(null);

  return (
    <>
      <ScrollReveal className="w-full">
        <section id="fun" className="w-full">
          <div className="columns-2 gap-4 md:columns-3 md:gap-5 lg:columns-3">
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
