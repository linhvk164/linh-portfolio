"use client";

import Image from "next/image";
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
  return (
    <div className="mt-12">
      <p className="mb-5 text-base font-bold text-ink">My Tool Stack</p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-bg to-transparent" />

        <div className="toolstack-track flex w-max items-center py-1">
          <ToolRow />
          <ToolRow ariaHidden />
        </div>
      </div>
    </div>
  );
}
