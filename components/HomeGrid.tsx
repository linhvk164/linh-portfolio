import { ArticlesSection } from "@/components/ArticlesSection";
import { HomeProjectList } from "@/components/HomeProjectList";
import { contentSingleColumn } from "@/lib/layout";

export function HomeGrid() {
  return (
    <div className={`${contentSingleColumn} gap-12 md:gap-16`}>
      <section id="work" className="w-full">
        <HomeProjectList />
      </section>

      <ArticlesSection />
    </div>
  );
}
