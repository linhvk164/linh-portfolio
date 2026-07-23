import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { navLink } from "@/lib/layout";

type BackLinkProps = {
  label?: string;
  href?: string;
  transitionTypes?: string[];
};

export function BackLink({
  label = "Back to work",
  href = "/#work",
  transitionTypes,
}: BackLinkProps) {
  return (
    <Link
      href={href}
      transitionTypes={transitionTypes}
      className={`${navLink} inline-flex items-center gap-2 text-base text-ink-muted`}
    >
      <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
      {label}
    </Link>
  );
}
