import { AboutModalProvider } from "@/components/AboutModalProvider";
import { OpeningAnimation } from "@/components/OpeningAnimation";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SiteSidebar } from "@/components/SiteSidebar";
import { SiteFooter } from "@/components/SiteNav";
import { mainArea } from "@/lib/layout";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <AboutModalProvider>
      <OpeningAnimation />
      <ScrollToTop />
      <div className="min-h-screen bg-bg">
        <SiteSidebar />
        <div className="lg:pl-[280px]">
          <div className={mainArea}>{children}</div>
        </div>
      </div>
    </AboutModalProvider>
  );
}

export function PageFooter() {
  return <SiteFooter />;
}
