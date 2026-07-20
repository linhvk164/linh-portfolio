import Image from "next/image";
import { PageEnter } from "@/components/PageEnter";
import { ToolStackMarquee } from "@/components/ToolStackMarquee";
import { site } from "@/data/site";
import { publicPath } from "@/lib/assets";

const PROFILE_IMAGE = "/images/general/Profile pic.JPG";

export function AboutContent() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
        <PageEnter className="mx-auto w-full max-w-[240px] shrink-0 md:mx-0 md:max-w-[280px] md:flex-[0.9]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-card)] border border-border bg-bg">
            <Image
              src={publicPath(PROFILE_IMAGE)}
              alt="Linh Khuong"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 240px, 280px"
            />
          </div>
        </PageEnter>

        <div className="min-w-0 flex-1 space-y-5 text-base leading-relaxed text-ink-muted md:space-y-6 md:text-lg">
          {site.about.paragraphs.map((paragraph, index) => (
            <PageEnter key={paragraph.slice(0, 32)} delay={120 + index * 90}>
              <p>{paragraph}</p>
            </PageEnter>
          ))}
        </div>
      </div>

      <PageEnter delay={360}>
        <ToolStackMarquee />
      </PageEnter>
    </div>
  );
}
