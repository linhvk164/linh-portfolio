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
  /** Prefer a still even when a cover video exists. */
  stillOnly?: boolean;
  priority?: boolean;
  loading?: "eager" | "lazy";
  /** Video preload hint. Defaults to metadata. */
  videoPreload?: "none" | "metadata" | "auto";
};

export function CoverMedia({
  alt,
  coverImage,
  coverVideo,
  className = "object-cover object-center",
  sizes = "100vw",
  natural = false,
  stillOnly = false,
  priority = false,
  loading,
  videoPreload = "metadata",
}: CoverMediaProps) {
  if (coverVideo && !stillOnly) {
    return (
      <video
        src={publicPath(coverVideo)}
        autoPlay
        muted
        loop
        playsInline
        preload={videoPreload}
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

  const imageSrc = coverImage;
  if (!imageSrc) return null;

  if (natural) {
    return (
      <Image
        src={publicPath(imageSrc)}
        alt={alt}
        width={1600}
        height={1200}
        className={className || "h-auto w-full"}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : loading}
        style={{ width: "100%", height: "auto" }}
      />
    );
  }

  return (
    <Image
      src={publicPath(imageSrc)}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
      loading={priority ? "eager" : loading}
    />
  );
}
