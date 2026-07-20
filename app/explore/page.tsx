import type { Metadata } from "next";
import { ExploreWorkspace } from "@/components/ExploreWorkspace";
import { PageFooter } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Explore — linhvk",
  description:
    "See more of Linh Khuong's work — graphic design, multi-media art, and pixel art explorations.",
};

export default function ExplorePage() {
  return (
    <>
      <div className="w-full min-w-0 px-4 py-6 md:pl-5 md:pr-10 md:py-8 lg:pl-6">
        <ExploreWorkspace />
      </div>
      <PageFooter />
    </>
  );
}
