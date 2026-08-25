import { AboutCarousel } from "@/components/AboutCarousel";
import { AboutExperienceList } from "@/components/AboutExperienceList";
import { PageEnter } from "@/components/PageEnter";
import { ToolStackMarquee } from "@/components/ToolStackMarquee";
import {
  aboutCarousel,
  aboutCta,
  aboutEducation,
  aboutExperience,
  aboutLeadership,
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

export function AboutContent() {
  return (
    <div className="w-full pb-28 md:pb-24 lg:pb-20">
      <PageEnter>
        <AboutCarousel slides={aboutCarousel} />
      </PageEnter>

      <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
        {aboutSections.map((section, sectionIndex) => (
          <PageEnter
            key={section.heading}
            delay={100 + sectionIndex * 80}
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
            <div className="mt-4 space-y-4 text-base leading-relaxed text-case-study-body md:mt-5 md:space-y-5">
              {section.paragraphs.map((paragraph) => (
                <AboutParagraph
                  key={paragraph.slice(0, 48)}
                  text={paragraph}
                />
              ))}
            </div>
          </PageEnter>
        ))}

        <PageEnter delay={260}>
          <AboutParagraph text={aboutCta} />
        </PageEnter>

        <PageEnter delay={300}>
          <ToolStackMarquee />
        </PageEnter>

        <PageEnter delay={340}>
          <AboutExperienceList
            heading="Experience"
            jobs={aboutExperience}
            defaultOpenFirst
          />
        </PageEnter>

        <PageEnter delay={380}>
          <AboutExperienceList
            heading="Leadership & Community"
            jobs={aboutLeadership}
          />
        </PageEnter>

        <PageEnter delay={420}>
          <div>
            <h2 className={sectionHeadingClassName}>Education</h2>
            <div className="mt-4 space-y-1 md:mt-5">
              <h3 className="text-base font-semibold tracking-tight text-ink">
                {aboutEducation.school}
              </h3>
              <p className="text-sm leading-snug text-ink-muted">
                {aboutEducation.degree}
              </p>
              <p className="text-xs text-ink-soft">{aboutEducation.detail}</p>
              <p className="mt-3 text-base leading-relaxed text-case-study-body">
                {aboutEducation.certificates}
              </p>
            </div>
          </div>
        </PageEnter>
      </div>
    </div>
  );
}
