import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "linhvk — UX/UI Designer",
  description:
    "UX/UI designer based in Canada. Branding, illustrations, and no-code development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth font-sans">
      <body className="min-h-full bg-bg font-sans text-base text-ink antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
