import { HomeProjectList } from "@/components/HomeProjectList";
import { MoreWorkGrid } from "@/components/MoreWorkGrid";
import { PhilosophyGridCard } from "@/components/PhilosophyGridCard";
import { TextGridCard } from "@/components/TextGridCard";
import {
  otherFeaturedProjects,
} from "@/data/featuredProjects";
import { funItems } from "@/data/fun";
import { testimonials } from "@/data/testimonials";
import { contentSingleColumn } from "@/lib/layout";

const [tako] = otherFeaturedProjects.slice(-1);
const [grayson, salman] = testimonials;

export function HomeGrid() {
  const moreWorkItems = [
    ...funItems
      .filter((item) => item.coverImage)
      .map((item) => ({
        title: item.title,
        coverImage: item.coverImage!,
        href: item.href,
      })),
    ...(tako?.coverImage
      ? [
          {
            title: tako.title,
            coverImage: tako.coverImage,
            href: `/projects/${tako.slug}`,
          },
        ]
      : []),
  ];

  return (
    <section id="work" className={`${contentSingleColumn} gap-12 md:gap-16`}>
      <HomeProjectList />

      <TextGridCard title={grayson.name} footer={grayson.role}>
        <blockquote>&ldquo;{grayson.quote}&rdquo;</blockquote>
      </TextGridCard>

      <TextGridCard title={salman.name} footer={salman.role}>
        <blockquote>&ldquo;{salman.quote}&rdquo;</blockquote>
      </TextGridCard>

      <PhilosophyGridCard />
      <MoreWorkGrid items={moreWorkItems} />
    </section>
  );
}
