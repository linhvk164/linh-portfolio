import { HomeContent } from "@/components/HomeContent";
import { PageFooter } from "@/components/SiteShell";

export function LandingPage() {
  return (
    <main
      id="main-content"
      className="w-full min-w-0 px-4 pt-8 md:px-5 md:pt-10 lg:px-8 lg:pt-12"
    >
      <HomeContent />
      <div className="page-enter mx-auto w-full max-w-5xl">
        <PageFooter />
      </div>
    </main>
  );
}
