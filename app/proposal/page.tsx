import type { Metadata } from "next";
import { ProposalDeck } from "@/components/proposal/ProposalDeck";
import { absoluteUrl } from "@/lib/siteUrl";

const pagePath = "/proposal";
const pageTitle = "Client Proposal | Linh Khuong";
const pageDescription =
  "An interactive discovery and proposal deck for website projects. Capture goals, brand feel, and scope, then review the plan together.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: absoluteUrl(pagePath),
    siteName: "linhvk",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function ProposalPage() {
  return (
    <main id="main-content">
      <ProposalDeck />
    </main>
  );
}
