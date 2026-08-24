import { ClickSound } from "@/components/ClickSound";
import { OpeningAnimation } from "@/components/OpeningAnimation";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { MainColumn, SiteFrame } from "@/components/SiteFrame";
import { SiteSidebar } from "@/components/SiteSidebar";
import { SiteFooter } from "@/components/SiteNav";
import { SiteTopNav } from "@/components/SiteTopNav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OpeningAnimation />
      <ScrollToTop />
      <ClickSound />
      <SiteFrame>
        <SiteTopNav />
        <SiteSidebar />
        <MainColumn>{children}</MainColumn>
      </SiteFrame>
    </>
  );
}

export function PageFooter() {
  return (
    <>
      <ScrollToTopButton />
      <SiteFooter />
    </>
  );
}
