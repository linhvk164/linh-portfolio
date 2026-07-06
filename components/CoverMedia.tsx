import Image from "next/image";
import { publicPath } from "@/lib/assets";

type CoverMediaProps = {
  alt: string;
  coverImage?: string;
  coverVideo?: string;
  className?: string;
  sizes?: string;
};

export function CoverMedia({
  alt,
  coverImage,
  coverVideo,
  className = "object-cover object-center",
  sizes = "100vw",
}: CoverMediaProps) {
  if (coverVideo) {
    return (
      <video
        src={publicPath(coverVideo)}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={coverImage ? publicPath(coverImage) : undefined}
        aria-label={alt}
        className={className || "block h-full w-full object-cover object-center"}
      />
    );
  }

  if (coverImage) {
    return (
      <Image
        src={publicPath(coverImage)}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
      />
    );
  }

  return null;
}
