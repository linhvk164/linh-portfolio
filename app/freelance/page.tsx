import { DesignStudioContent } from "@/components/DesignStudioContent";
import { DesignStudioJsonLd } from "@/components/DesignStudioJsonLd";
import { PageFooter } from "@/components/SiteShell";
import { designStudioMetadata } from "@/lib/designStudioSeo";

export const metadata = designStudioMetadata;

export default function DesignStudioPage() {
  return (
    <>
      <DesignStudioJsonLd />
      <main
        id="main-content"
        className="w-full min-w-0 px-4 pt-8 md:px-5 md:pt-10 lg:px-8 lg:pt-12"
      >
        <DesignStudioContent />
        <div
          className="page-enter mx-auto w-full max-w-5xl"
          style={{ animationDelay: "280ms" }}
        >
          <PageFooter />
        </div>
      </main>
    </>
  );
}
