import { getDesignStudioJsonLd } from "@/lib/designStudioSeo";

export function DesignStudioJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getDesignStudioJsonLd()),
      }}
    />
  );
}
