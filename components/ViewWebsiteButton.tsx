import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { pillButtonSecondary } from "@/lib/layout";

type ViewWebsiteButtonProps = {
  href: string;
  className?: string;
};

export function ViewWebsiteButton({ href, className = "" }: ViewWebsiteButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 ${pillButtonSecondary} ${className}`}
    >
      View website
      <ArrowUpRightIcon size={12} />
    </a>
  );
}
