import Image from "next/image";
import { publicPath } from "@/lib/assets";

type TileCoverImageProps = {
  src: string;
  alt: string;
};

export function TileCoverImage({ src, alt }: TileCoverImageProps) {
  return (
    <Image
      src={publicPath(src)}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
    />
  );
}
