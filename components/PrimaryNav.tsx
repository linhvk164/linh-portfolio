"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Home, User } from "lucide-react";
import { type ReactNode } from "react";

type NavKey = "home" | "explore" | "about";

function useActiveNav(): NavKey {
  const pathname = usePathname();
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/explore")) return "explore";
  if (pathname === "/") return "home";
  return "home";
}

function NavButton({
  active,
  href,
  icon,
  children,
}: {
  active: boolean;
  href: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  const className = `inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl px-2.5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
    active
      ? "bg-accent text-white"
      : "bg-[#ececec] text-ink-muted hover:bg-[#e2e2e2] hover:text-ink"
  }`;

  return (
    <Link href={href} className={className}>
      {active ? icon : null}
      <span>{children}</span>
    </Link>
  );
}

export function PrimaryNav({ className }: { className?: string }) {
  const active = useActiveNav();

  return (
    <nav className={className} aria-label="Primary">
      <NavButton
        active={active === "home"}
        href="/"
        icon={<Home size={14} strokeWidth={2.25} aria-hidden />}
      >
        Home
      </NavButton>
      <NavButton
        active={active === "explore"}
        href="/explore"
        icon={<Compass size={14} strokeWidth={2.25} aria-hidden />}
      >
        Explore
      </NavButton>
      <NavButton
        active={active === "about"}
        href="/about"
        icon={<User size={14} strokeWidth={2.25} aria-hidden />}
      >
        About
      </NavButton>
    </nav>
  );
}
