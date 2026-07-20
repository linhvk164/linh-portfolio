import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";
import { PageFooter } from "@/components/SiteShell";
import { mainContent } from "@/lib/layout";

export const metadata: Metadata = {
  title: "About — linhvk",
  description:
    "About Linh Khuong — UX/UI designer based in Canada. Branding, illustrations, and no-code development.",
};

export default function AboutPage() {
  return (
    <>
      <div className={mainContent}>
        <AboutContent />
      </div>
      <PageFooter />
    </>
  );
}
