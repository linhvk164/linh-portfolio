import { HomeGrid } from "@/components/HomeGrid";
import { PageFooter } from "@/components/SiteShell";
import { mainContent } from "@/lib/layout";

export function LandingPage() {
  return (
    <>
      <div className={mainContent}>
        <HomeGrid />
      </div>
      <PageFooter />
    </>
  );
}
