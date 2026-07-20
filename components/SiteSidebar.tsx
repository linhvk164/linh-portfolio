"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Home, User } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useAboutModal } from "@/components/AboutModalProvider";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { TypewriterTagline } from "@/components/TypewriterTagline";
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
  alwaysShowIcon = false,
  children,
}: {
  active: boolean;
  href?: string;
  onClick?: () => void;
  icon: ReactNode;
  alwaysShowIcon?: boolean;
  children: ReactNode;
}) {
  const className = `inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl px-2.5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
    active
      ? "bg-accent text-white"
      : "bg-[#ececec] text-ink-muted hover:bg-[#e2e2e2] hover:text-ink"
  }`;

  const content = (
    <>
      {alwaysShowIcon || active ? icon : null}
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

function PrimaryNav({
  className,
  alwaysShowIcon = false,
}: {
  className?: string;
  alwaysShowIcon?: boolean;
}) {
  const active = useActiveNav();
  const { openAbout, closeAbout } = useAboutModal();

  return (
    <nav className={className} aria-label="Primary">
      <NavButton
        active={active === "home"}
        href="/"
        onClick={() => closeAbout()}
        icon={<Home size={14} strokeWidth={2.25} aria-hidden />}
        alwaysShowIcon={alwaysShowIcon}
      >
        Home
      </NavButton>
      <NavButton
        active={active === "explore"}
        href="/#media"
        onClick={() => closeAbout()}
        icon={<Compass size={14} strokeWidth={2.25} aria-hidden />}
        alwaysShowIcon={alwaysShowIcon}
      >
        Explore
      </NavButton>
      <NavButton
        active={active === "about"}
        onClick={() => openAbout()}
        icon={<User size={14} strokeWidth={2.25} aria-hidden />}
        alwaysShowIcon={alwaysShowIcon}
      >
        About
      </NavButton>
    </nav>
  );
}

function SidebarCard({ showNav = true }: { showNav?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
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
          className="absolute top-3 right-3 z-[1] inline-flex items-center rounded-full bg-white/85 px-4 py-3 text-sm font-semibold text-ink-muted backdrop-blur-sm transition-colors hover:bg-white hover:text-ink"
        >
          Get in touch <span className="ml-2">👋</span>
        </Link>
      </div>

      {/* Body */}
      <div className="px-5 pb-5 pt-0">
        {/* Avatar overlaps banner; name + role stacked underneath */}
        <div className="relative z-[1] -mt-10 flex flex-col items-center text-center">
          <Image
            src={publicPath(PROFILE_SRC)}
            alt={site.name}
            width={88}
            height={88}
            className="sidebar-intro-item h-[5.5rem] w-[5.5rem] rounded-full border-[3px] border-white object-cover shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            priority
          />
          <div className="sidebar-intro-item mt-3 w-full min-w-0">
            <p className="sidebar-name tracking-tight">{site.name}</p>
            <p className="sidebar-role">{site.title}</p>
          </div>
        </div>

        <TypewriterTagline
          text={site.tagline}
          className="sidebar-tagline sidebar-intro-item text-center"
        />

        {/* Stats */}
        <div className="sidebar-intro-item mt-5 flex items-center text-center">
          <div className="min-w-0 flex-1 pr-4">
            <p className="text-[0.7rem] font-medium text-ink-soft">Previously</p>
            <p className="mt-0.5 text-sm font-bold text-ink">{site.previously}</p>
          </div>
          <div className="h-7 w-px shrink-0 bg-border" aria-hidden />
          <div className="min-w-0 flex-1 pl-4">
            <p className="text-[0.7rem] font-medium text-ink-soft">Experience</p>
            <p className="mt-0.5 text-sm font-bold text-ink">{site.experience}</p>
          </div>
        </div>

        {showNav ? (
          <PrimaryNav className="sidebar-intro-item mt-5 flex items-stretch gap-2" />
        ) : null}
      </div>
    </div>
  );
}

export function SiteSidebar() {
  return (
    <>
      {/* Mobile / tablet — profile card in page flow (nav lives in bottom bar) */}
      <header
        className="px-4 py-5 md:px-6 md:py-6 lg:hidden"
        aria-label="Site introduction"
      >
        <SidebarCard showNav={false} />
      </header>

      {/* Desktop — fixed left card with inline nav */}
      <aside
        className="fixed top-0 left-0 z-40 hidden h-screen w-[360px] flex-col p-5 lg:flex"
        aria-label="Site navigation"
      >
        <SidebarCard showNav />
      </aside>

      {/* Mobile / tablet — floating bottom nav */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
        <div className="pointer-events-auto w-full max-w-[22rem] rounded-2xl border border-border bg-white/95 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.1)] backdrop-blur-md">
          <PrimaryNav
            className="flex items-stretch gap-1.5"
            alwaysShowIcon
          />
        </div>
      </div>

      {/* Floating resume — bottom left */}
      <a
        href={publicPath(site.resume)}
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed left-4 bottom-5 z-50 hidden items-center rounded-full bg-accent px-6 py-3.5 text-lg font-semibold text-white transition-colors duration-200 hover:bg-accent-hover lg:inline-flex"
      >
        CV
        <span className="inline-flex max-w-0 overflow-hidden opacity-0 transition-all duration-200 ease-out group-hover:ml-2 group-hover:max-w-5 group-hover:opacity-100">
          <ArrowUpRightIcon size={18} className="shrink-0" />
        </span>
      </a>
    </>
  );
}
