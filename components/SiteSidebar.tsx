"use client";

import Image from "next/image";
import Link from "next/link";
import { useAboutModal } from "@/components/AboutModalProvider";
import { publicPath } from "@/lib/assets";
import { site } from "@/data/site";
import { navLink } from "@/lib/layout";

const LOGO_SRC = "/images/general/logo/linhvk logo black.png";

function SiteLogo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="sidebar-intro-item mb-7 inline-block transition-transform duration-300 ease-out hover:scale-105"
      aria-label="Home"
    >
      <Image
        src={publicPath(LOGO_SRC)}
        alt="linhvk"
        width={56}
        height={15}
        className="h-3.5 w-auto"
        priority
      />
    </Link>
  );
}

function IntroBlock({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="sidebar-intro">
      <SiteLogo onNavigate={onNavigate} />
      <p className="sidebar-name sidebar-intro-item">{site.name}</p>
      <p className="sidebar-tagline sidebar-intro-item">{site.role}</p>
      <p className="sidebar-detail sidebar-intro-item">{site.status}</p>
      <p className="sidebar-detail sidebar-intro-item">{site.location}</p>
    </div>
  );
}

function NavLinks({
  className = "",
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const { openAbout } = useAboutModal();

  return (
    <nav className={`sidebar-nav-links flex flex-col gap-2.5 ${className}`}>
      <Link
        href="/"
        onClick={onNavigate}
        className={`sidebar-nav-item ${navLink}`}
      >
        Home
      </Link>
      <button
        type="button"
        onClick={() => {
          openAbout();
          onNavigate?.();
        }}
        className={`sidebar-nav-item ${navLink} text-left`}
      >
        About me
      </button>
      <a
        href={site.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className={`sidebar-nav-item ${navLink}`}
      >
        LinkedIn
      </a>
      <a href={site.resume} className={`sidebar-nav-item ${navLink}`}>
        Resume/CV
      </a>
    </nav>
  );
}

export function SiteSidebar() {
  return (
    <>
      {/* Mobile — full intro inline, no hamburger */}
      <header
        className="border-b border-border px-4 py-8 md:hidden"
        aria-label="Site introduction"
      >
        <IntroBlock />
        <NavLinks className="mt-6" />
      </header>

      {/* Tablet — intro left, links right */}
      <header
        className="hidden items-start justify-between gap-10 border-b border-border px-6 py-8 md:flex lg:hidden"
        aria-label="Site introduction"
      >
        <IntroBlock />
        <NavLinks className="shrink-0 pt-1 text-right" />
      </header>

      {/* Desktop — fixed left sidebar */}
      <aside
        className="fixed top-0 left-0 z-40 hidden h-screen w-[280px] flex-col bg-bg px-8 py-10 lg:flex"
        aria-label="Site navigation"
      >
        <IntroBlock />
        <NavLinks className="mt-auto pt-10" />
      </aside>
    </>
  );
}
