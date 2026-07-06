import Image from "next/image";
import Link from "next/link";
import { publicPath } from "@/lib/assets";

const LOGO_SRC = "/images/general/logo/linhvk logo white.png";

type SiteLogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

export function SiteLogo({ className, width = 52, height = 20 }: SiteLogoProps) {
  return (
    <Image
      src={publicPath(LOGO_SRC)}
      alt="Linh Khuong"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}

type SiteLogoLinkProps = SiteLogoProps & {
  href?: string;
};

export function SiteLogoLink({
  className,
  width,
  height,
  href = "/",
}: SiteLogoLinkProps) {
  return (
    <Link
      href={href}
      className="transition-opacity hover:opacity-75"
      aria-label="Home"
    >
      <SiteLogo className={className} width={width} height={height} />
    </Link>
  );
}
