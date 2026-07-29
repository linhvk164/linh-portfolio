import {
  CaseStudyImagePlaceholder,
  CaseStudyImageRow,
  CaseStudyPullQuote,
  CaseStudySection,
  CaseStudySections,
} from "@/components/case-studies/CaseStudySection";
import { CaseStudyYouTube } from "@/components/case-studies/CaseStudyYouTube";
import { publicPath } from "@/lib/assets";

export function UnHabitatUrbanDataContent() {
  return (
    <CaseStudySections slug="un-habitat-urban-data">
      <CaseStudyImagePlaceholder
        label="Overview image"
        src="/images/un-habitat/quality of life main image.webp"
      />

      <CaseStudySection id="overview" title="Overview">
        <p>
          UN-Habitat collects Quality of Life data from cities around the world,
          but having the data wasn&apos;t the problem. With hundreds of
          indicators across multiple domains, it was hard for anyone to actually
          make sense of how a city was doing.
        </p>
        <p>
          I joined as the 5th person on the Quality of Life Initiative
          Innovation team and helped design a global platform that now brings
          together rich data from over 82 cities. The platform launched
          worldwide in February 2025.
        </p>
        <p>
          My role was to take all that complexity and turn it into something
          people could explore and actually understand.
        </p>
        <CaseStudyImagePlaceholder
          label="Overview image"
          src="/images/un-habitat/quality of life-solution 2.webp"
        />
      </CaseStudySection>

      <CaseStudySection id="the-team-and-my-role" title="The team and my role">
        <p>
          I worked within a team of 20, made up of engineers, a PM, designers,
          and researchers. As UX/UI Designer, I owned the visual design and
          interaction design across the platform, from the core data
          visualization to the surrounding flows: landing page, about page, and
          survey app. I worked closely with researchers to ground design
          decisions in real user feedback, and with engineers to make sure the
          final designs were feasible within our 5 month timeline.
        </p>
      </CaseStudySection>

      <CaseStudySection id="challenge" title="Challenge">
        <p>
          When people are faced with a wall of numbers, they don&apos;t know
          where to start.
        </p>
        <p>
          Researchers wanted to compare cities. Government officials wanted to
          identify strengths and weaknesses. The public simply wanted to
          understand what the data meant. Everyone had different goals, but they
          all shared one problem: the information was overwhelming.
        </p>
        <CaseStudyPullQuote>
          &ldquo;How can we make data easier to understand and interact
          with?&rdquo;
        </CaseStudyPullQuote>
        <CaseStudyYouTube
          videoId="Acu549mjC3A"
          title="Quality of Life Initiative platform overview"
        />
      </CaseStudySection>

      <section id="key-ux-flows-i-implemented" className="scroll-mt-8 space-y-10">
        <h2 className="case-study-section-title max-w-3xl text-[3xl] leading-tight tracking-tight md:text-4xl">
          Key UX flows I implemented
        </h2>

        <div className="space-y-10">
          <div id="landing-page" className="scroll-mt-8 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Landing page
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                The first version of the landing page had no clear call to
                action, a distracting background, and dots representing cities
                that were color coded but never labeled, so users had no way to
                know what they were looking at. To understand how real users
                experienced this, I ran interviews with a city admin from Logan,
                Australia, and one from Vancouver, Canada. Their feedback pointed
                to the same gaps: nothing to tell them what to do next, and no
                context for the visual they landed on.
              </p>
              <p>
                From there, I redesigned the page with a clear CTA, labeled the
                city dots, simplified the branding so it stopped competing with
                the content, and added stats like &ldquo;82+ cities
                monitored&rdquo; to give users immediate proof of scale and
                credibility before they explored further.
              </p>
              <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={publicPath("/images/un-habitat/landing-page-v1.png")}
                    alt="Early landing page without clear CTA or labeled cities"
                    className="aspect-[16/10] h-auto w-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={publicPath("/images/un-habitat/landing-page-v2.png")}
                    alt="Redesigned landing page with clear CTA and labeled cities"
                    className="aspect-[16/10] h-auto w-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <CaseStudyImagePlaceholder
                label="Redesigned landing page"
                src="/images/un-habitat/quality of life-solution.webp"
                fit={false}
              />
            </div>
          </div>

          <div id="sunburst-diagram" className="scroll-mt-8 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Sunburst Diagram
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                The core purpose of the platform was to give users a cohesive
                view of the data, not just a dump of numbers. Before settling on
                a direction, I explored a wide range of data visualization types,
                looking for a format that could show the big picture first and
                let users drill into detail only when they wanted it.
              </p>
              <CaseStudyImageRow
                equalHeight
                images={[
                  {
                    src: "/images/un-habitat/qoli-process.webp",
                    alt: "Data visualization exploration concepts",
                  },
                  {
                    src: "/images/un-habitat/qoli-process-2.png",
                    alt: "Exploring formats for city quality of life data",
                  },
                  {
                    src: "/images/un-habitat/qoli-process-3.png",
                    alt: "Comparing visualization approaches",
                  },
                ]}
              />
              <p>
                That exploration led to a half sunburst fan chart to represent
                the 9 domains making up a city&apos;s quality of life. I used
                progressive disclosure so detailed information only appeared on
                hover, and tagged the modal that opened on hover to show
                relationships between domains, indicators, and SDGs.
              </p>
              <CaseStudyImagePlaceholder
                label="Fan chart data visualization"
                src="/images/un-habitat/qoli-fan.png"
                fit={false}
              />
            </div>
          </div>

          <div id="indicator-data" className="scroll-mt-8 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Indicator Data
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                For the smaller indicator level data, I carried the same
                principle through: each indicator&apos;s detail stayed hidden
                until a user asked for it, keeping the default view focused on
                the overall picture instead of a full data table. The layout
                followed a clear hierarchy: city, instructions, data
                visualization, detail, so users always knew where they were and
                what to do next.
              </p>
              <div className="grid min-w-0 grid-cols-1 gap-4">
                <CaseStudyImagePlaceholder
                  label="Indicator data detail view"
                  src="/images/un-habitat/indicator-data-2.png"
                  fit={false}
                />
                <CaseStudyImagePlaceholder
                  label="Indicator data overview"
                  src="/images/un-habitat/indicator-data.png"
                  fit={false}
                />
              </div>
            </div>
          </div>

          <div id="survey-app" className="scroll-mt-8 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Survey app
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                The survey app exists to let the Initiative gather data directly
                from people living in these cities, rather than relying only on
                institutional sources. I designed the onboarding flow to first
                tell users what the app is and why it&apos;s collecting their
                input, so people understood the purpose before being asked for
                anything. I also designed the permissions flow, covering location
                sharing and notification enabling, so users could see clearly
                what they were being asked to grant and why.
              </p>
              <div className="grid min-w-0 grid-cols-1 gap-4">
                <CaseStudyImagePlaceholder
                  label="Survey app onboarding"
                  src="/images/un-habitat/Onboarding.png"
                  fit={false}
                />
                <CaseStudyImagePlaceholder
                  label="Survey app login"
                  src="/images/un-habitat/Login.png"
                  fit={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudySection id="outtakes" title="Outtakes">
        <p>
          One thing I learned from this project is that good design is about
          helping people feel less overwhelmed. I had never worked as a data
          designer before this, and the project gave me a lot of exposure to the
          field, from information mapping to accessible data visualization.
        </p>
        <p>
          It changed how I approach ambiguous problems: instead of designing
          screens first, I now default to mapping relationships and user goals
          before anything gets pixels. Working across a team of 20 also taught
          me how to hold onto a design vision while staying flexible to
          engineering constraints and a 5 month deadline.
        </p>
        <p>
          The data never became less complex. The experience just became easier
          to navigate.
        </p>
      </CaseStudySection>
    </CaseStudySections>
  );
}
