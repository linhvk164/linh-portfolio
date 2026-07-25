"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useState } from "react";
import { VercelLogo } from "@/components/icons/VercelLogo";
import { tools } from "@/data/toolstack";
import { publicPath } from "@/lib/assets";

function ToolMark({ tool }: { tool: (typeof tools)[number] }) {
  if (tool.type === "vercel") {
    return (
      <VercelLogo className="h-5 w-auto text-ink-soft opacity-70 grayscale" />
    );
  }

  return (
    <Image
      src={publicPath(tool.src)}
      alt={tool.name}
      width={120}
      height={28}
      className="h-7 w-auto max-w-[7.5rem] object-contain object-left opacity-70 grayscale"
    />
  );
}

function ToolRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-10 pr-10"
      aria-hidden={ariaHidden}
    >
      {tools.map((tool) => (
        <div key={tool.name} className="flex h-7 shrink-0 items-center">
          <ToolMark tool={tool} />
        </div>
      ))}
    </div>
  );
}

export function ToolStackMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div>
      <h2 className="mb-5 text-xl font-semibold tracking-tight text-ink md:text-2xl">
        My Tool Stack
      </h2>
      <div className="relative z-[100] overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-bg to-transparent" />

        <div
          className={`toolstack-track flex w-max items-center py-1 ${
            paused ? "is-paused" : ""
          }`}
        >
          <ToolRow />
          <ToolRow ariaHidden />
        </div>

        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
          aria-label={paused ? "Play tool stack" : "Pause tool stack"}
          className="absolute right-2 bottom-0 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-white/90 text-ink shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
        >
          {paused ? (
            <Play size={12} fill="currentColor" strokeWidth={0} aria-hidden />
          ) : (
            <Pause size={12} fill="currentColor" strokeWidth={0} aria-hidden />
          )}
        </button>
      </div>
    </div>
  );
}
