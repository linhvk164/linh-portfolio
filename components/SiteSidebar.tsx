"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAboutModal } from "@/components/AboutModalProvider";
import { HamburgerIcon } from "@/components/icons/HamburgerIcon";
import { publicPath } from "@/lib/assets";
import { site } from "@/data/site";

import { navLink } from "@/lib/layout";

const LOGO_SRC = "/images/general/logo/linhvk logo black.png";

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const { openAbout } = useAboutModal();

  return (
    <>
      <div>
        <div className="sidebar-intro">
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

        <p className="sidebar-name sidebar-intro-item">{site.name}</p>
        <p className="sidebar-detail sidebar-intro-item">{site.role}</p>
        <p className="sidebar-detail sidebar-intro-item">{site.status}</p>
        <p className="sidebar-detail sidebar-intro-item">{site.location}</p>

        <button
          type="button"
          onClick={() => {
            openAbout();
            onNavigate?.();
          }}
          className={`sidebar-intro-item mt-10 ${navLink}`}
        >
          About me
        </button>
        </div>
      </div>

      <div className="sidebar-footer-links mt-auto space-y-2.5 pt-10">
        <a
          href={site.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className={`sidebar-footer-item block ${navLink}`}
        >
          LinkedIn
        </a>
        <a href={site.resume} className={`sidebar-footer-item block ${navLink}`}>
          Resume/CV
        </a>
      </div>
    </>
  );
}

export function SiteSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between bg-bg px-4 md:hidden">
        <p className="text-base font-medium text-ink">{site.name}</p>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink transition-all duration-200 hover:scale-105 hover:bg-surface-muted"
        >
          <HamburgerIcon size={14} />
        </button>
      </header>

      {open && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-ink/20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen w-[min(100%,280px)] flex-col bg-bg px-8 py-10 transition-transform duration-200 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:z-40`}
        aria-label="Site navigation"
      >
        <SidebarContent onNavigate={() => setOpen(false)} />
      </aside>
    </>
  );
}
