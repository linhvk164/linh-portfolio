import type { Metadata } from "next";
import { DesignStudioContent } from "@/components/DesignStudioContent";
import { DesignStudioFooter } from "@/components/DesignStudioFooter";
import { DesignStudioNav } from "@/components/DesignStudioNav";

export const metadata: Metadata = {
  title: "Design Studio — linhvk",
  description:
    "Landing pages for local businesses. Custom websites from $300 — designed to feel like you, not a template.",
};

export default function DesignStudioPage() {
  return (
    <>
      <DesignStudioNav />
      <div className="w-full min-w-0 px-4 pt-8 md:px-5 md:pt-10 lg:px-8 lg:pt-12">
        <DesignStudioContent />
        <div
          className="page-enter mx-auto w-full max-w-5xl"
          style={{ animationDelay: "280ms" }}
        >
          <DesignStudioFooter />
        </div>
      </div>
    </>
  );
}
