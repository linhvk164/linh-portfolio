export const sidebarWidth = "12rem";

export const pageContainer =
  "mx-auto w-full max-w-6xl px-5 md:px-8";

export const mainPadding = "px-4 py-6 md:px-5 md:py-8 lg:px-6";

/** Footer column row — auto-width columns so spacing stays tight */
export const footerColumns =
  "flex flex-col gap-8 md:flex-row md:items-start md:gap-x-12 lg:gap-x-16";

/** Main column beside the sidebar — left-aligned, minimal gutter */
export const mainContent =
  "w-full min-w-0 px-4 py-6 md:pl-5 md:pr-10 md:py-8 lg:pl-6";

/**
 * Case-study reading column — same width and padding, without TOC offset.
 * Use for pages like About that should match case study spacing.
 */
export const caseStudyReadingLayout =
  "mx-auto w-full min-w-0 max-w-[40rem] px-4 py-6 sm:max-w-[44rem] sm:px-6 md:max-w-3xl md:px-8 md:py-8";

/**
 * Case study pages — reading column + left margin for the TOC gutter:
 * max(22rem, 50% - half of max-w-3xl).
 */
export const caseStudyLayout = `${caseStudyReadingLayout} lg:ml-[max(22rem,calc(50%-24rem))] lg:mr-auto`;

/** Fixed TOC gutter width — keep in sync with caseStudyLayout left margin */
export const caseStudyTocGutter =
  "w-[max(22rem,calc(50%-24rem))]";

/** Narrow TOC column centered inside the gutter */
export const caseStudyTocWidth = "w-56";

/** Main area */
export const mainArea = "min-h-screen";

/** Single-column feed */
export const contentSingleColumn =
  "mx-auto flex w-full flex-col items-stretch gap-6";

/** Two independent columns; items stack vertically within each. */
export const contentColumns =
  "flex flex-col gap-6 md:flex-row md:items-start md:gap-x-6 lg:gap-x-8";

export const contentColumn = "flex min-w-0 flex-1 flex-col gap-6";

/** Flat color-block cards — no borders, no shadows */
export const gridCard =
  "rounded-[var(--radius-card)] bg-surface p-6 md:p-8";

export const gridCardShell =
  "rounded-[var(--radius-card)] bg-surface transition-transform duration-200 group-hover:scale-[1.02] group-focus-visible:scale-[1.02]";

export const gridCardTitle =
  "mt-3 text-base font-bold leading-snug tracking-[-0.01em] text-ink";

export const pillButton =
  "inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-accent-hover";

export const pillButtonSecondary =
  "inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-ink-muted transition-colors duration-200 hover:border-ink-soft hover:text-ink";

export const pillTag =
  "rounded-full bg-badge px-3 py-1 text-xs font-medium text-ink-muted";

export const labelCaps = "label-caps text-ink-soft";

export const navLink =
  "interactive-link text-base font-semibold text-ink";
