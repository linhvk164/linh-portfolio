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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='linhvk-opening-seen';var skip=window.matchMedia('(prefers-reduced-motion: reduce)').matches||sessionStorage.getItem(k)==='1';if(skip)return;var el=document.createElement('div');el.id='opening-boot';el.setAttribute('aria-hidden','true');document.documentElement.appendChild(el);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full bg-bg font-sans text-base text-ink antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
