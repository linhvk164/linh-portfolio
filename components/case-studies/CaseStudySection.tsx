import Image from "next/image";
import type { ReactNode } from "react";
import { CaseStudyLazyVideo } from "@/components/case-studies/CaseStudyLazyVideo";
import { publicPath } from "@/lib/assets";

/**
 * Default image used across case studies until you add real assets.
 * To swap every placeholder at once, change this path.
 * To use a real image in one spot, pass `src` to CaseStudyImage or CaseStudyImagePlaceholder.
 */
export const CASE_STUDY_PLACEHOLDER_IMAGE =
  "/images/general/logo/linhvk logo black.png";

function isVideoSrc(src: string) {
  return /\.(mov|mp4|webm)$/i.test(src);
}

export function CaseStudySections({ children }: { children: React.ReactNode }) {
  return <div className="space-y-16 md:space-y-20">{children}</div>;
}

export function CaseStudySection({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5">
      <div className="space-y-1">
        {eyebrow && (
          <p className="text-[7px] font-semibold uppercase tracking-[0.01em] text-case-study-body/70">
            {eyebrow}
          </p>
        )}

        <h2 className="case-study-section-title max-w-3xl text-[3xl] leading-tight tracking-tight md:text-4xl">
          {title}
        </h2>
      </div>

      <div className="space-y-5 text-base leading-8 text-case-study-body">
        {children}
      </div>
    </section>
  );
}

export function CaseStudyPullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <blockquote className="max-w-3xl border-l-2 border-border font-medium pl-3 text-lg leading-relaxed text-ink md:text-xl md:leading-snug">
        {children}
      </blockquote>
    </div>
  );
}

export type CaseStudyMetaItem = {
  label: string;
  value: ReactNode;
};

export function CaseStudyMeta({
  items,
  layout = "grid",
}: {
  items: CaseStudyMetaItem[];
  layout?: "grid" | "stacked";
}) {
  if (layout === "stacked") {
    return (
      <dl className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.label} className="min-w-0">
            <dt className="text-xs leading-snug text-case-study-body/70">
              {item.label}
            </dt>
            <dd className="mt-1 text-sm leading-snug text-ink">{item.value}</dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-6 md:grid-cols-4 md:gap-x-8">
      {items.map((item) => (
        <div key={item.label} className="min-w-0">
          <dt className="text-xs leading-snug text-case-study-body/70">{item.label}</dt>
          <dd className="mt-1 text-sm leading-snug text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CaseStudyImage({
  src,
  alt,
  bare = false,
  fit = true,
}: {
  src: string;
  alt: string;
  bare?: boolean;
  fit?: boolean;
}) {
  const resolvedSrc = publicPath(src);
  const wrapperClass = `overflow-hidden rounded-[var(--radius-card)] border border-border ${
    fit ? "w-fit max-w-full leading-none" : "w-full"
  } ${bare ? "" : "bg-surface"}`;

  if (isVideoSrc(src)) {
    return (
      <div className={wrapperClass}>
        <CaseStudyLazyVideo src={src} alt={alt} fit={fit} />
      </div>
    );
  }

  if (fit) {
    return (
      <div className={wrapperClass}>
        {/* Native img so the container hugs the image's true aspect ratio */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolvedSrc}
          alt={alt}
          className="block h-auto w-auto max-w-full"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <Image
        src={resolvedSrc}
        alt={alt}
        width={1200}
        height={800}
        className="h-auto w-full"
        sizes="(max-width: 768px) 100vw, 672px"
      />
    </div>
  );
}

export function CaseStudyImagePlaceholder({
  label,
  src = CASE_STUDY_PLACEHOLDER_IMAGE,
  bare = false,
  fit = true,
}: {
  label: string;
  src?: string;
  bare?: boolean;
  fit?: boolean;
}) {
  return <CaseStudyImage src={src} alt={label} bare={bare} fit={fit} />;
}

export function CaseStudyImageRow({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <div className="grid min-w-0 grid-cols-1 items-start gap-4 sm:grid-cols-3">
      {images.map((image) => (
        <CaseStudyImage key={image.src} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

export function CaseStudyFeature({
  title,
  description,
  imageSrc = CASE_STUDY_PLACEHOLDER_IMAGE,
  imageAlt,
}: {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
      <div className="shrink-0 sm:w-[42%]">
        <CaseStudyImage src={imageSrc} alt={imageAlt ?? title} />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-base leading-relaxed text-case-study-body">
          {description}
        </p>
      </div>
    </div>
  );
}

export function CaseStudyList({
  items,
  label,
}: {
  items: string[];
  label?: string;
}) {
  return (
    <div className="w-fit max-w-full rounded-[var(--radius-card)] bg-surface-muted px-5 py-4 md:px-6 md:py-5">
      {label && (
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.08em] text-ink">
          {label}
        </p>
      )}
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-sm leading-[1.35] text-ink"
          >
            <span
              className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-ink"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}