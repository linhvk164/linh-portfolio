import type { Metadata } from "next";
import { BrandDnaContent } from "@/components/BrandDnaContent";
import { PageFooter } from "@/components/SiteShell";
import { absoluteUrl } from "@/lib/siteUrl";

const pagePath = "/brand-dna";
const pageTitle = "Brand DNA Quiz | Linh Khuong";
const pageDescription =
  "Discover your brand personality, voice, and visual direction with this free Brand DNA quiz for small businesses and creators.";
const pageUrl = absoluteUrl(pagePath);
const ogImage = absoluteUrl("/images/general/profile-cropped.webp");

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords: [
    "brand personality quiz",
    "brand DNA",
    "brand voice",
    "visual identity",
    "small business branding",
    "Linh Khuong",
  ],
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: pageUrl,
    siteName: "linhvk",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        width: 104,
        height: 104,
        alt: "Linh Khuong",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BrandDnaPage() {
  return (
    <main
      id="main-content"
      className="w-full min-w-0 px-4 pt-8 md:px-5 md:pt-10 lg:px-8 lg:pt-12"
    >
      <div className="page-enter">
        <BrandDnaContent />
      </div>
      <div
        className="page-enter mx-auto w-full max-w-5xl"
        style={{ animationDelay: "200ms" }}
      >
        <PageFooter />
      </div>
    </main>
  );
}
