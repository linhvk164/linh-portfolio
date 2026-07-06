import Image from "next/image";
import Link from "next/link";
import { CardHoverOverlay } from "@/components/CardHoverOverlay";
import { publicPath } from "@/lib/assets";
import { gridCardShell, gridCardTitle } from "@/lib/layout";

export type MoreWorkItem = {
  title: string;
  coverImage: string;
  href?: string;
};

type MoreWorkGridProps = {
  items: MoreWorkItem[];
};

function MoreWorkCard({ item }: { item: MoreWorkItem }) {
  const media = (
    <div className={gridCardShell}>
      <CardHoverOverlay type="project" className="aspect-square rounded-[var(--radius-card)]">
        <Image
          src={publicPath(item.coverImage)}
          alt={item.title}
          fill
          className="object-cover object-center transition-transform duration-200 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 45vw, 20vw"
        />
      </CardHoverOverlay>
    </div>
  );

  const title = <p className={gridCardTitle}>{item.title}</p>;

  if (item.href) {
    return (
      <Link href={item.href} className="group block">
        {media}
        {title}
      </Link>
    );
  }

  return (
    <article className="group">
      {media}
      {title}
    </article>
  );
}

export function MoreWorkGrid({ items }: MoreWorkGridProps) {
  if (items.length === 0) return null;

  return (
    <div id="fun" className="grid grid-cols-2 gap-x-4 gap-y-5">
      {items.map((item) => (
        <MoreWorkCard key={item.title} item={item} />
      ))}
    </div>
  );
}
