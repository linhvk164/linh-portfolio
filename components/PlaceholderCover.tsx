import type { ReactNode } from "react";
import type { Accent } from "@/lib/accent";
import { getAccentColor } from "@/lib/accent";
import { Asterisk } from "@/components/shapes/Asterisk";
import { Pentagon } from "@/components/shapes/Pentagon";
import { StarBurst } from "@/components/shapes/StarBurst";

type PlaceholderCoverProps = {
  accent: Accent;
  className?: string;
  bordered?: boolean;
  fill?: boolean;
  children?: ReactNode;
};

const shapeByAccent: Record<Accent, typeof StarBurst> = {
  yellow: StarBurst,
  blue: Asterisk,
  pink: Pentagon,
  green: StarBurst,
};

export function PlaceholderCover({
  accent,
  className,
  bordered = true,
  fill = false,
  children,
}: PlaceholderCoverProps) {
  const Shape = shapeByAccent[accent];
  const color = getAccentColor(accent);

  return (
    <div
      className={`flex items-center justify-center bg-bg ${
        fill ? "h-full w-full" : "aspect-square w-full"
      } ${
        bordered
          ? "rounded-[var(--radius-card)] bg-surface"
          : ""
      } ${className ?? ""}`}
      aria-hidden={!children}
    >
      {children ?? (
        <Shape className="h-16 w-16 opacity-80" fill={color} />
      )}
    </div>
  );
}
