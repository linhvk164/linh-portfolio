"use client";

import Image from "next/image";
import Link from "next/link";
import { useAboutModal } from "@/components/AboutModalProvider";
import { publicPath } from "@/lib/assets";
import { site } from "@/data/site";
import { navLink } from "@/lib/layout";

const LOGO_SRC = "/images/general/logo/linhvk logo black.png";
const PROFILE_SRC = "/images/general/profile-cropped.jpg";

function SiteLogo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="sidebar-intro-item mb-3 inline-block transition-transform duration-300 ease-out hover:scale-105"
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
    <div className="sidebar-intro-item mb-5">
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
      <SiteLogo onNavigate={onNavigate} />
      <ProfilePhoto />
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
        <CvButton className="mt-6" />
      </header>

      {/* Tablet */}
      <header
        className="hidden border-b border-border px-6 py-8 md:block lg:hidden"
        aria-label="Site introduction"
      >
        <IntroBlock />
        <NavLinks className="mt-6" />
        <CvButton className="mt-6" />
      </header>

      {/* Desktop — fixed left sidebar */}
      <aside
        className="fixed top-0 left-0 z-40 hidden h-screen w-[280px] flex-col bg-bg px-8 py-10 lg:flex"
        aria-label="Site navigation"
      >
        <IntroBlock />
        <NavLinks className="mt-6" />
        <CvButton className="mt-auto" />
      </aside>
    </>
  );
}
