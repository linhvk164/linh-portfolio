"use client";

import Image from "next/image";
import Link from "next/link";
import { publicPath } from "@/lib/assets";
import { designStudioCallHref } from "@/data/designStudio";
import { pillButton } from "@/lib/layout";

const LOGO_SRC = "/images/general/logo/linhvk logo black.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Explore", href: "/explore" },
  { label: "Freelance", href: "/freelance" },
  { label: "Contact", href: "#contact" },
] as const;

const navLinkClassName =
  "text-sm font-semibold text-ink-muted transition-colors duration-200 hover:text-ink";

export function HomeNav() {
  return (
    <header className="page-enter sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 md:h-16 md:px-5 lg:px-8">
        <a href="#top" className="relative z-10 shrink-0">
          <Image
            src={publicPath(LOGO_SRC)}
            alt="linhvk"
            width={160}
            height={40}
            priority
            className="h-4 w-auto md:h-[1.125rem]"
            style={{ width: "auto" }}
          />
        </a>

        <nav
          className="absolute inset-x-0 hidden justify-center md:flex"
          aria-label="Site"
        >
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.href.startsWith("/") ? (
                  <Link href={item.href} className={navLinkClassName}>
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.href} className={navLinkClassName}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={designStudioCallHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${pillButton} relative z-10 shrink-0`}
        >
          Let&apos;s chat
        </a>
      </div>

      <nav
        className="flex justify-center gap-4 overflow-x-auto border-t border-border px-4 py-2.5 md:hidden"
        aria-label="Site sections"
      >
        {navItems.map((item) =>
          item.href.startsWith("/") ? (
            <Link
              key={item.href}
              href={item.href}
              className={`${navLinkClassName} shrink-0`}
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.href}
              href={item.href}
              className={`${navLinkClassName} shrink-0`}
            >
              {item.label}
            </a>
          ),
        )}
      </nav>
    </header>
  );
}
