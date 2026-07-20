import { AboutCarousel } from "@/components/AboutCarousel";
import { PageEnter } from "@/components/PageEnter";
import { ToolStackMarquee } from "@/components/ToolStackMarquee";
import { aboutCarousel, aboutSections } from "@/data/about";
import { site } from "@/data/site";

const linkClassName =
  "font-medium text-ink underline decoration-border underline-offset-[3px] transition-colors hover:text-accent hover:decoration-accent";

function AboutParagraph({ text }: { text: string }) {
  const parts = text.split(/(email|LinkedIn)/g);

  return (
    <p>
      {parts.map((part, index) => {
        if (part === "email") {
          return (
            <a
              key={`email-${index}`}
              href={`mailto:${site.email}`}
              className={linkClassName}
            >
              email
            </a>
          );
        }
        if (part === "LinkedIn") {
          return (
            <a
              key={`linkedin-${index}`}
              href={site.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              LinkedIn
            </a>
          );
        }
        return <span key={`text-${index}`}>{part}</span>;
      })}
    </p>
  );
}

export function AboutContent() {
  return (
    <div className="w-full">
      <PageEnter>
        <AboutCarousel slides={aboutCarousel} />
      </PageEnter>

      <div className="mt-10 space-y-10 pl-8 md:mt-12 md:space-y-12 md:pl-8 lg:pl-12">
        {aboutSections.map((section, sectionIndex) => (
          <PageEnter
            key={section.heading}
            delay={100 + sectionIndex * 80}
            className="max-w-3xl"
          >
            <h2
              className={
                sectionIndex === 0
                  ? "text-2xl font-semibold tracking-tight text-ink md:text-3xl"
                  : "text-xl font-semibold tracking-tight text-ink md:text-2xl"
              }
            >
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-muted md:mt-5 md:space-y-5 md:text-lg">
              {section.paragraphs.map((paragraph) => (
                <AboutParagraph
                  key={paragraph.slice(0, 48)}
                  text={paragraph}
                />
              ))}
            </div>
          </PageEnter>
        ))}

        <PageEnter delay={280}>
          <ToolStackMarquee />
        </PageEnter>
      </div>
    </div>
  );
}
