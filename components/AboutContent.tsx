import { AboutCarousel } from "@/components/AboutCarousel";
import { PageEnter } from "@/components/PageEnter";
import { ToolStackMarquee } from "@/components/ToolStackMarquee";
import {
  aboutCarousel,
  aboutCta,
  aboutExperience,
  aboutSections,
} from "@/data/about";
import { site } from "@/data/site";

const linkClassName =
  "font-medium text-ink underline decoration-border underline-offset-[3px] transition-colors hover:text-accent hover:decoration-accent";

const sectionHeadingClassName =
  "text-xl font-semibold tracking-tight text-ink md:text-2xl";

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

function ExperienceDescription({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <p className="text-base leading-relaxed text-ink-muted md:text-lg">
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-semibold text-ink">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={index}>{part}</span>;
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
                  : sectionHeadingClassName
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

        <PageEnter delay={260} className="max-w-3xl">
          <AboutParagraph text={aboutCta} />
        </PageEnter>

        <PageEnter delay={300}>
          <ToolStackMarquee />
        </PageEnter>

        <PageEnter delay={340} className="max-w-4xl">
          <h2 className={sectionHeadingClassName}>Experience</h2>
          <div className="mt-4 space-y-6 md:mt-5 md:space-y-8">
            {aboutExperience.map((job) => (
              <div
                key={`${job.role}-${job.dates}`}
                className="grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-12 md:gap-16"
              >
                <div className="space-y-0.5">
                  <h3 className="text-sm font-semibold tracking-tight text-ink">
                    {job.role}
                  </h3>
                  {job.org ? (
                    <p className="text-sm leading-snug text-ink-muted">
                      {job.org}
                    </p>
                  ) : null}
                  <p className="text-xs text-ink-soft">{job.dates}</p>
                </div>
                <ExperienceDescription text={job.description} />
              </div>
            ))}
          </div>
        </PageEnter>
      </div>
    </div>
  );
}
