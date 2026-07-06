import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { navLink } from "@/lib/layout";

export function BackLink() {
  return (
    <Link
      href="/#work"
      className={`${navLink} inline-flex items-center gap-2 text-base text-ink-muted`}
    >
      <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
      Back to work
    </Link>
  );
}
