import Image from "next/image";
import { CoverMedia } from "@/components/CoverMedia";
import type { Article } from "@/data/articles";
import { publicPath } from "@/lib/assets";

const LINKEDIN_LOGO = "/images/general/linked-logo.png";

function HostMark({ host }: { host: string }) {
  if (host === "LinkedIn") {
    return (
      <span className="inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center">
        <Image
          src={publicPath(LINKEDIN_LOGO)}
          alt=""
          width={14}
          height={14}
          className="h-3.5 w-3.5 object-contain"
        />
      </span>
    );
  }

  if (host === "University of Waterloo") {
    return (
      <span className="inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center overflow-hidden rounded-[2px] bg-[#ffd54f] text-[0.5rem] font-bold leading-none text-ink">
        UW
      </span>
    );
  }

  return (
    <span className="inline-block h-3.5 w-3.5 shrink-0 rounded-[2px] bg-[#e5e5e5]" />
  );
}

export function ArticleCard({
  title,
  url,
  coverImage,
  host,
}: Article) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-w-0 flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden border border-[#d0d0d0] bg-[#f3f3f3]">
        <CoverMedia
          alt={title}
          coverImage={coverImage}
          className="h-full w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      <div className="mt-3 flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <HostMark host={host} />
          <span className="truncate text-xs leading-none text-ink-muted underline decoration-[#c4c4c4] underline-offset-2">
            {host}
          </span>
        </div>
        <p className="article-card-heading line-clamp-2 text-ink-soft">{title}</p>
      </div>
    </a>
  );
}
