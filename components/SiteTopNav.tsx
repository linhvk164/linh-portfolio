"use client";

import Image from "next/image";
import Link from "next/link";
import { publicPath } from "@/lib/assets";
import { designStudioCallHref } from "@/data/designStudio";
import { site } from "@/data/site";
import { pillButton } from "@/lib/layout";

const LOGO_SRC = "/images/general/logo/linhvk logo black.png";

type NavItem =
  | { label: string; href: string; external?: boolean }
  | { label: string; comingSoon: true };

const navItems: NavItem[] = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Freelance", href: "/freelance" },
  { label: "Resume", href: publicPath(site.resume), external: true },
];

const navLinkClassName =
  "text-sm font-semibold text-ink-muted transition-colors duration-200 hover:text-ink";

const comingSoonClassName =
  "group relative cursor-default text-sm font-semibold text-ink-soft/45";

function NavLabel({ item }: { item: NavItem }) {
  if ("comingSoon" in item) {
    return (
      <span className={comingSoonClassName} aria-disabled="true">
        {item.label}
        <span className="pointer-events-none absolute top-full left-1/2 z-10 mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-[0.65rem] font-medium tracking-wide text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
          Coming soon
        </span>
      </span>
    );
  }

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={navLinkClassName}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={navLinkClassName}>
      {item.label}
    </Link>
  );
}

export function SiteTopNav() {
  return (
    <header className="page-enter sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 md:h-16 md:gap-4 md:px-5 lg:px-8">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src={publicPath(LOGO_SRC)}
            alt="linhvk"
            width={160}
            height={40}
            priority
            className="h-4 w-auto md:h-[1.125rem]"
            style={{ width: "auto" }}
          />
        </Link>

        <nav
          className="absolute inset-x-0 hidden justify-center px-28 lg:flex xl:px-36"
          aria-label="Site"
        >
          <ul className="flex items-center gap-5 xl:gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLabel item={item} />
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={designStudioCallHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${pillButton} relative z-10 shrink-0 px-3.5 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm`}
        >
          Let&apos;s chat
        </a>
      </div>

      <nav
        className="flex justify-start gap-4 overflow-x-auto border-t border-border px-4 py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
        aria-label="Site sections"
      >
        {navItems.map((item) => (
          <span key={item.label} className="shrink-0">
            <NavLabel item={item} />
          </span>
        ))}
      </nav>
    </header>
  );
}
