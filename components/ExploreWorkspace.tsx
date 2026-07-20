"use client";

import Image from "next/image";
import { useState } from "react";
import { FunModal } from "@/components/FunModal";
import { FUN_PLACEHOLDER_IMAGE, funItems, type FunItem } from "@/data/fun";
import { publicPath } from "@/lib/assets";

function ExploreCard({
  item,
  index,
  onSelect,
}: {
  item: FunItem;
  index: number;
  onSelect: (item: FunItem) => void;
}) {
  const thumb = item.coverImage ?? FUN_PLACEHOLDER_IMAGE;

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="explore-card-enter group w-full text-center"
      style={{ animationDelay: `${80 + index * 70}ms` }}
      aria-label={item.title}
    >
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={publicPath(thumb)}
          alt={item.title}
          width={800}
          height={800}
          className="h-auto w-full transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
        />
      </div>
      <p className="mt-3 text-sm font-medium tracking-tight text-ink md:text-base">
        {item.title}
      </p>
    </button>
  );
}

export function ExploreWorkspace() {
  const [activeItem, setActiveItem] = useState<FunItem | null>(null);

  return (
    <>
      <section
        aria-label="Explore projects"
        className="grid grid-cols-2 gap-x-4 gap-y-8 pb-10 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 md:gap-x-6 md:gap-y-12 lg:grid-cols-3"
      >
        {funItems.map((item, index) => (
          <ExploreCard
            key={item.id}
            item={item}
            index={index}
            onSelect={setActiveItem}
          />
        ))}
      </section>

      <FunModal item={activeItem} onClose={() => setActiveItem(null)} />
    </>
  );
}
