"use client";

import { Play } from "lucide-react";
import { useState } from "react";

type CaseStudyYouTubeProps = {
  videoId: string;
  title: string;
};

export function CaseStudyYouTube({ videoId, title }: CaseStudyYouTubeProps) {
  const [active, setActive] = useState(false);

  if (!active) {
    return (
      <button
        type="button"
        onClick={() => setActive(true)}
        className="group relative aspect-video w-full overflow-hidden rounded-[var(--radius-card)] border border-border bg-ink text-left"
        aria-label={`Play video: ${title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-200 group-hover:opacity-100"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute inset-0 bg-ink/20 transition-colors duration-200 group-hover:bg-ink/10" />
        <span className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-white backdrop-blur-sm transition-transform duration-200 group-hover:scale-105">
          <Play size={22} fill="currentColor" strokeWidth={0} aria-hidden />
        </span>
      </button>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[var(--radius-card)] border border-border">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
