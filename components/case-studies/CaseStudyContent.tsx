import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const FolioContent = dynamic(() =>
  import("@/components/case-studies/FolioContent").then((mod) => ({
    default: mod.FolioContent,
  })),
);

const ChordioContent = dynamic(() =>
  import("@/components/case-studies/ChordioContent").then((mod) => ({
    default: mod.ChordioContent,
  })),
);

const LofuContent = dynamic(() =>
  import("@/components/case-studies/LofuContent").then((mod) => ({
    default: mod.LofuContent,
  })),
);

const UnHabitatUrbanDataContent = dynamic(() =>
  import("@/components/case-studies/UnHabitatUrbanDataContent").then((mod) => ({
    default: mod.UnHabitatUrbanDataContent,
  })),
);

const UnHabitatAdminContent = dynamic(() =>
  import("@/components/case-studies/UnHabitatAdminContent").then((mod) => ({
    default: mod.UnHabitatAdminContent,
  })),
);

const UnHabitatDesignSystemContent = dynamic(() =>
  import("@/components/case-studies/UnHabitatDesignSystemContent").then(
    (mod) => ({
      default: mod.UnHabitatDesignSystemContent,
    }),
  ),
);

type CaseStudyContentProps = {
  slug: string;
  fallback: ReactNode;
};

export function CaseStudyContent({ slug, fallback }: CaseStudyContentProps) {
  switch (slug) {
    case "un-habitat-urban-data":
      return <UnHabitatUrbanDataContent />;
    case "un-habitat-admin":
      return <UnHabitatAdminContent />;
    case "un-habitat-design-system":
      return <UnHabitatDesignSystemContent />;
    case "folio":
      return <FolioContent />;
    case "chordio":
      return <ChordioContent />;
    case "lofu":
      return <LofuContent />;
    default:
      return fallback;
  }
}
