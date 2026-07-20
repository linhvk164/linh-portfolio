"use client";

import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { FUN_PLACEHOLDER_IMAGE, type FunItem } from "@/data/fun";
import { publicPath } from "@/lib/assets";

type FunModalProps = {
  item: FunItem | null;
  onClose: () => void;
};

function gallerySources(item: FunItem): string[] {
  const sources: string[] = [];
  if (item.coverImage) sources.push(item.coverImage);
  for (const src of item.images) {
    if (!sources.includes(src)) sources.push(src);
  }
  if (sources.length === 0) sources.push(FUN_PLACEHOLDER_IMAGE);
  return sources;
}

export function FunModal({ item, onClose }: FunModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const gallery = useMemo(
    () => (item ? gallerySources(item) : []),
    [item],
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [item?.id]);

  useEffect(() => {
    if (!item) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (gallery.length <= 1) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % gallery.length);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex(
          (index) => (index - 1 + gallery.length) % gallery.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose, gallery.length]);

  if (!item) return null;

  const activeSrc = gallery[activeIndex] ?? gallery[0];
  const showVideo = Boolean(item.youtubeId) && activeIndex === 0;
  const metaRows = [
    { label: "Created", value: item.created },
    { label: "Tools", value: item.tools },
    { label: "Context", value: item.context },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
    >
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-ink/40"
        onClick={onClose}
      />

      <div className="relative z-10 flex h-[min(90vh,760px)] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-[0_16px_48px_rgba(0,0,0,0.12)] modal-panel-in">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f3f3] text-ink transition-colors duration-200 hover:bg-[#e8e8e8] md:top-5 md:right-5"
        >
          <X size={18} strokeWidth={2} />
        </button>

        <div className="grid h-full min-h-0 grid-rows-[minmax(0,38%)_minmax(0,1fr)] overflow-hidden md:grid-cols-[280px_minmax(0,1fr)] md:grid-rows-none lg:grid-cols-[300px_minmax(0,1fr)]">
          {/* Info — left */}
          <div className="flex min-h-0 flex-col overflow-y-auto border-b border-border px-6 py-8 md:border-r md:border-b-0 md:px-7 md:py-9">
            <h2 className="pr-10 text-xl font-semibold tracking-tight text-ink md:text-2xl">
              {item.name}
            </h2>

            <dl className="mt-6 border-t border-border">
              {metaRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-3 border-b border-border py-3"
                >
                  <dt className="shrink-0 text-sm text-ink-soft">{row.label}</dt>
                  <dd className="text-right text-sm font-medium text-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <p className="text-sm text-ink-soft">Description</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </div>

            {item.externalUrl ? (
              <a
                href={item.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                Visit website
                <ArrowUpRight size={15} strokeWidth={2.25} aria-hidden />
              </a>
            ) : null}
          </div>

          {/* Gallery — right (fixed stage; image never resizes the modal) */}
          <div className="flex h-full min-h-0 flex-col bg-white px-5 py-5 md:px-6 md:py-6 lg:px-8 lg:py-7">
            <div className="relative min-h-0 w-full flex-1 overflow-hidden">
              {showVideo && item.youtubeId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                  title={item.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <Image
                  src={publicPath(activeSrc)}
                  alt={`${item.name} — image ${activeIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 60vw"
                  priority
                />
              )}
            </div>

            <div className="mt-4 flex h-16 shrink-0 gap-2.5 overflow-x-auto">
              {gallery.length > 1 || item.youtubeId
                ? gallery.map((src, index) => {
                    const isActive = index === activeIndex;
                    const isVideoThumb = Boolean(item.youtubeId) && index === 0;
                    return (
                      <button
                        key={`${item.id}-thumb-${index}`}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={
                          isVideoThumb
                            ? `Show video`
                            : `Show image ${index + 1}`
                        }
                        aria-pressed={isActive}
                        className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-colors ${
                          isActive
                            ? "border-ink"
                            : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={publicPath(src)}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                        {isVideoThumb ? (
                          <span className="absolute inset-0 flex items-center justify-center bg-ink/35 text-[10px] font-semibold tracking-wide text-white uppercase">
                            Play
                          </span>
                        ) : null}
                      </button>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
