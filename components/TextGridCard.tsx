import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { gridCard } from "@/lib/layout";

type TextGridCardProps = {
  title: string;
  children: React.ReactNode;
  footer?: string;
  href?: string;
  id?: string;
};

export function TextGridCard({
  title,
  children,
  footer,
  href,
  id,
}: TextGridCardProps) {
  const content = (
    <>
      {href && (
        <span className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-transform duration-200 group-hover:scale-110 md:top-8 md:right-8">
          <ArrowUpRightIcon size={14} />
        </span>
      )}

      <h3 className="pr-12 text-base font-bold leading-snug tracking-[-0.01em] text-ink md:text-lg">
        {title}
      </h3>

      <div className="mt-4 text-base leading-relaxed text-ink-muted">
        {children}
      </div>

      {footer && (
        <p className="mt-5 text-base font-semibold text-ink">{footer}</p>
      )}
    </>
  );

  const className = `group relative flex flex-col ${gridCard}${
    href
      ? " transition-transform duration-200 hover:scale-[1.02] focus-visible:scale-[1.02]"
      : ""
  }`;

  if (href) {
    return <Link href={href} className={className}>{content}</Link>;
  }

  return (
    <article id={id} className={className}>
      {content}
    </article>
  );
}
