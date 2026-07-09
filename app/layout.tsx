import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

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
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full scroll-smooth font-sans`}
    >
      <body className="min-h-full bg-bg font-sans text-base text-ink antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
