import { HomeWorkSection } from "@/components/HomeWorkSection";
import { contentSingleColumn } from "@/lib/layout";

export function HomeGrid() {
  return (
    <div className={`${contentSingleColumn} gap-12 md:gap-16`}>
      <div className="flex w-full flex-col gap-4 md:gap-5 lg:gap-5">
        <HomeWorkSection />
      </div>
    </div>
  );
}
