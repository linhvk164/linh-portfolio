"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useAboutModal } from "@/components/AboutModalProvider";
import { publicPath } from "@/lib/assets";
import { site } from "@/data/site";
import { navLink } from "@/lib/layout";
import type { ReactNode } from "react";

const LOGO_SRC = "/images/general/logo/linhvk logo black.png";
const PROFILE_SRC = "/images/general/profile-cropped.jpg";

function SiteLogo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="sidebar-intro-item inline-block transition-transform duration-300 ease-out hover:scale-105"
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

function ProfilePhoto() {
  return (
    <div className="sidebar-intro-item">
      <Image
        src={publicPath(PROFILE_SRC)}
        alt={site.name}
        width={55}
        height={55}
        className="h-16 w-16 rounded-full object-cover"
      />
    </div>
  );
}

function IntroBlock({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="sidebar-intro">
      <div className="sidebar-intro-stack mb-11 flex flex-col items-start gap-4">
        <div className="flex items-center gap-3">
          <ProfilePhoto />
          <div className="flex min-w-0 flex-col items-start gap-1.5">
            <SiteLogo onNavigate={onNavigate} />
            <p className="sidebar-detail sidebar-intro-item !mt-0">{site.status}</p>
          </div>
        </div>
        <p className="sidebar-tagline sidebar-intro-item">{site.role}</p>
      </div>
    </div>
  );
}

const navItemClass = `sidebar-nav-item group inline-flex items-center gap-2 ${navLink}`;

function NavItemLabel({ children }: { children: ReactNode }) {
  return (
    <>
      <span>{children}</span>
      <ArrowRight
        size={16}
        strokeWidth={2.25}
        aria-hidden
        className="shrink-0 -translate-x-1 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100"
      />
    </>
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
    <nav className={`sidebar-nav-links flex flex-col items-start gap-2.5 ${className}`}>
      <Link href="/" onClick={onNavigate} className={navItemClass}>
        <NavItemLabel>Home</NavItemLabel>
      </Link>
      <button
        type="button"
        onClick={() => {
          openAbout();
          onNavigate?.();
        }}
        className={`${navItemClass} text-left`}
      >
        <NavItemLabel>About</NavItemLabel>
      </button>
      <Link href="/#contact" onClick={onNavigate} className={navItemClass}>
        <NavItemLabel>Contact</NavItemLabel>
      </Link>
    </nav>
  );
}

function CvButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={publicPath(site.resume)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View CV"
      className={`sidebar-nav-item inline-flex w-fit items-center justify-center rounded-full bg-accent px-7 py-3 text-base font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-accent-hover ${className}`}
    >
      CV
    </a>
  );
}

function SidebarActions({
  className = "",
  cvClassName = "",
}: {
  className?: string;
  cvClassName?: string;
}) {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <CvButton className={cvClassName} />
    </div>
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
        <SidebarActions className="mt-6" />
      </header>

      {/* Tablet */}
      <header
        className="hidden border-b border-border px-6 py-8 md:block lg:hidden"
        aria-label="Site introduction"
      >
        <IntroBlock />
        <NavLinks className="mt-6" />
        <SidebarActions className="mt-6" />
      </header>

      {/* Desktop — fixed left sidebar */}
      <aside
        className="fixed top-0 left-0 z-40 hidden h-screen w-[280px] flex-col bg-bg px-8 py-10 lg:flex"
        aria-label="Site navigation"
      >
        <IntroBlock />
        <NavLinks className="mt-6" />
        <SidebarActions className="mt-auto" />
      </aside>
    </>
  );
}
