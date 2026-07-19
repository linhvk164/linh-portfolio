import Image from "next/image";
import { publicPath } from "@/lib/assets";

type CoverMediaProps = {
  alt: string;
  coverImage?: string;
  coverVideo?: string;
  className?: string;
  sizes?: string;
  /** When true, image/video height follows intrinsic aspect (no crop). */
  natural?: boolean;
};

export function CoverMedia({
  alt,
  coverImage,
  coverVideo,
  className = "object-cover object-center",
  sizes = "100vw",
  natural = false,
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
        className={
          className ||
          (natural
            ? "block h-auto w-full"
            : "block h-full w-full object-cover object-center")
        }
      />
    );
  }

  if (coverImage) {
    if (natural) {
      return (
        <Image
          src={publicPath(coverImage)}
          alt={alt}
          width={1600}
          height={1200}
          className={className || "h-auto w-full"}
          sizes={sizes}
          style={{ width: "100%", height: "auto" }}
        />
      );
    }

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
