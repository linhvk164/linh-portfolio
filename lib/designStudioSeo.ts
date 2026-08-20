import type { Metadata } from "next";
import { designStudio } from "@/data/designStudio";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/siteUrl";

const pagePath = "/designstudio";
const pageUrl = absoluteUrl(pagePath);
const ogImage = absoluteUrl("/images/general/profile-cropped.webp");

export const designStudioPageTitle =
  "Custom Website Design in Waterloo, Ontario | Linh Khuong Design Studio";

export const designStudioPageDescription =
  "Freelance web designer in Waterloo, Ontario. Custom single-page websites from $450, delivered in 5 to 6 days. Branding, logo design, and ongoing support available.";

export const designStudioMetadata: Metadata = {
  title: {
    absolute: designStudioPageTitle,
  },
  description: designStudioPageDescription,
  keywords: [
    "web designer Waterloo",
    "website design Ontario",
    "custom website Canada",
    "freelance web designer",
    "small business website",
    "landing page design",
    "Linh Khuong",
    "Design Studio",
  ],
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: pageUrl,
    siteName: "linhvk",
    title: designStudioPageTitle,
    description: designStudioPageDescription,
    images: [
      {
        url: ogImage,
        width: 104,
        height: 104,
        alt: "Linh Khuong, web designer in Waterloo, Ontario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: designStudioPageTitle,
    description: designStudioPageDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function getDesignStudioJsonLd() {
  const { faq, offer } = designStudio;

  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${pageUrl}#business`,
      name: "Linh Khuong Design Studio",
      description: designStudioPageDescription,
      url: pageUrl,
      image: ogImage,
      email: site.email,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Waterloo",
        addressRegion: "ON",
        addressCountry: "CA",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Ontario, Canada",
      },
      priceRange: "$450+",
      sameAs: [site.linkedIn, site.youtube],
      knowsAbout: [
        "Web design",
        "Landing pages",
        "Branding",
        "Logo design",
        "UI design",
      ],
      offers: [
        {
          "@type": "Offer",
          name: offer.landing.name,
          price: "450",
          priceCurrency: "CAD",
          description: offer.landing.description,
          url: pageUrl,
        },
        {
          "@type": "Offer",
          name: offer.support.name,
          price: "30",
          priceCurrency: "CAD",
          description: offer.support.description,
          url: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: designStudioPageTitle,
      description: designStudioPageDescription,
      isPartOf: {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        name: "linhvk",
        url: absoluteUrl("/"),
      },
      about: {
        "@id": `${pageUrl}#business`,
      },
      inLanguage: "en-CA",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];
}
