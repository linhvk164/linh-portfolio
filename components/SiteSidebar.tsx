"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Home, User } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useAboutModal } from "@/components/AboutModalProvider";
import { publicPath } from "@/lib/assets";
import { site } from "@/data/site";

const BANNER_SRC = "/images/general/lofu-background.png";
const PROFILE_SRC = "/images/general/profile-cropped.jpg";

type NavKey = "home" | "explore" | "about";

function useActiveNav(): NavKey {
  const pathname = usePathname();
  const { isAboutOpen } = useAboutModal();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  if (isAboutOpen) return "about";
  if (pathname === "/" && hash === "#media") return "explore";
  if (pathname === "/") return "home";
  return "home";
}

function NavButton({
  active,
  href,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  href?: string;
  onClick?: () => void;
  icon: ReactNode;
  children: ReactNode;
}) {
  const className = `inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl px-2.5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
    active
      ? "bg-accent text-white"
      : "bg-[#ececec] text-ink-muted hover:bg-[#e2e2e2] hover:text-ink"
  }`;

  const content = (
    <>
      {active ? icon : null}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}

function SidebarCard({ onNavigate }: { onNavigate?: () => void }) {
  const active = useActiveNav();
  const { openAbout, closeAbout } = useAboutModal();

  return (
    <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      {/* Banner — scale past PNG border/padding so art bleeds edge-to-edge */}
      <div className="relative aspect-[687/372] overflow-hidden">
        <Image
          src={publicPath(BANNER_SRC)}
          alt=""
          fill
          priority
          className="scale-[1.12] object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 320px"
        />
        <Link
          href="/#contact"
          onClick={onNavigate}
          className="absolute top-3 right-3 z-[1] inline-flex items-center rounded-full bg-white/85 px-3 py-2 text-xs font-semibold text-ink-muted backdrop-blur-sm transition-colors hover:bg-white hover:text-ink"
        >
          Get in touch 👋
        </Link>
      </div>

      {/* Body */}
      <div className="px-5 pb-5 pt-0">
        {/* Avatar + name row — avatar overlaps banner; name sits below it */}
        <div className="relative z-[1] -mt-8 flex gap-3">
          <Image
            src={publicPath(PROFILE_SRC)}
            alt={site.name}
            width={80}
            height={80}
            className="h-20 w-20 shrink-0 rounded-full border-[3px] border-white object-cover"
            priority
          />
          <div className="min-w-0 mt-9 flex flex-col justify-end pb-0.5">
            <p className="truncate text-3xl font-bold leading-none tracking-tight text-ink">
              {site.name}
            </p>
            <p className="mt-0.5 truncate text-sm leading-snug text-ink-soft">
              {site.title}
            </p>
          </div>
        </div>

        <p className="mt-4 text-[0.95rem] leading-snug font-medium text-ink-muted">
          {site.tagline}
        </p>

        {/* Stats */}
        <div className="mt-5 flex items-center">
          <div className="min-w-0 flex-1 pr-4">
            <p className="text-[0.7rem] font-medium text-ink-soft">Previously</p>
            <p className="mt-0.5 text-sm font-bold text-ink">{site.previously}</p>
          </div>
          <div className="h-7 w-px shrink-0 bg-[#e8e8e8]" aria-hidden />
          <div className="min-w-0 flex-1 pl-4">
            <p className="text-[0.7rem] font-medium text-ink-soft">Experience</p>
            <p className="mt-0.5 text-sm font-bold text-ink">{site.experience}</p>
          </div>
        </div>

        {/* Nav */}
        <nav
          className="mt-5 flex items-stretch gap-2"
          aria-label="Primary"
        >
          <NavButton
            active={active === "home"}
            href="/"
            onClick={() => {
              closeAbout();
              onNavigate?.();
            }}
            icon={<Home size={14} strokeWidth={2.25} aria-hidden />}
          >
            Home
          </NavButton>
          <NavButton
            active={active === "explore"}
            href="/#media"
            onClick={() => {
              closeAbout();
              onNavigate?.();
            }}
            icon={<Compass size={14} strokeWidth={2.25} aria-hidden />}
          >
            Explore
          </NavButton>
          <NavButton
            active={active === "about"}
            onClick={() => {
              openAbout();
              onNavigate?.();
            }}
            icon={<User size={14} strokeWidth={2.25} aria-hidden />}
          >
            About
          </NavButton>
        </nav>
      </div>
    </div>
  );
}

export function SiteSidebar() {
  return (
    <>
      {/* Mobile / tablet — card in page flow */}
      <header className="px-4 py-5 md:px-6 md:py-6 lg:hidden" aria-label="Site introduction">
        <SidebarCard />
      </header>

      {/* Desktop — fixed left card */}
      <aside
        className="fixed top-0 left-0 z-40 hidden h-screen w-[400px] flex-col p-5 lg:flex"
        aria-label="Site navigation"
      >
        <SidebarCard />
      </aside>
    </>
  );
}
