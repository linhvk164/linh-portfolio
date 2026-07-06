import { ArticlesSection } from "@/components/ArticlesSection";
import { HomeProjectList } from "@/components/HomeProjectList";
import { contentSingleColumn } from "@/lib/layout";

export function HomeGrid() {
  return (
    <section id="work" className={`${contentSingleColumn} gap-12 md:gap-16`}>
      <HomeProjectList />

      <ArticlesSection />
    </section>
  );
}
