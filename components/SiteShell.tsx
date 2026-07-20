import { OpeningAnimation } from "@/components/OpeningAnimation";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { SiteFrame } from "@/components/SiteFrame";
import { SiteSidebar } from "@/components/SiteSidebar";
import { SiteFooter } from "@/components/SiteNav";
import { mainArea } from "@/lib/layout";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OpeningAnimation />
      <ScrollToTop />
      <SiteFrame>
        <SiteSidebar />
        <div className="lg:pl-[360px]">
          <div className={mainArea}>{children}</div>
        </div>
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
