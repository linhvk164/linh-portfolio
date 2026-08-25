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
      <CaseStudySection id="overview" title="Overview">
        <p>
          UN-Habitat collects Quality of Life data from cities around the world.
          But having the data wasn&apos;t the real problem. With hundreds of
          indicators across multiple domains, it was hard for anyone to actually
          understand how a city was doing.
        </p>
        <p>
          I joined as the UX/UI Designer on the Quality of Life Initiative
          Innovation team. My job was to take all that complexity and turn it
          into something people could explore and understand. What started as a
          62-city pilot became a platform serving 170+ cities globally by early
          2025.
        </p>
        <CaseStudyImagePlaceholder
          label="Overview image"
          src="/images/un-habitat/quality of life-solution 2.webp"
        />
      </CaseStudySection>

      <CaseStudySection id="challenge" title="The Challenge">
        <p>
          Government officials wanted to identify strengths and weaknesses in
          their cities. Researchers wanted to compare cities against each other.
          But everyone hit the same wall: where do you even start with this much
          information?
        </p>
        <p>
          There was a business constraint too. The initiative needed to reach
          100+ cities within 6 months or lose funding approval. That meant we
          didn&apos;t just need a better interface. We needed to understand how
          to make the platform easy to use and adopt.
        </p>
        <CaseStudyPullQuote>
          &ldquo;How do we make complex urban data clear enough that city
          officials can make policy decisions, and easy enough to onboard new
          cities at scale?&rdquo;
        </CaseStudyPullQuote>
        <CaseStudyYouTube
          videoId="Acu549mjC3A"
          title="Quality of Life Initiative platform overview"
        />
      </CaseStudySection>

      <CaseStudySection id="the-team-and-my-role" title="The Team and My Role">
        <p>
          I worked on a 20-person team that included engineers, a product
          manager, researchers, and fellow designers. My scope was broad. I owned
          end-to-end design for the public-facing platform: the core data
          visualization, admin workflows, landing page, and survey app. I also
          built a design system to support rapid iteration without slowing down
          engineering.
        </p>
        <p>
          The tight timeline was actually our advantage. With 6 months to ship
          and a scaling target, I had to make every design decision defensible to
          our research and engineering teams. That meant validating assumptions
          quickly, keeping handoff clean, and staying flexible when we hit
          constraints.
        </p>
        <p>
          I worked closely with data researchers at the UN to ground every decision in real user
          feedback. And I worked with engineers to make sure everything was
          feasible within our timeline.
        </p>
      </CaseStudySection>

      <section id="key-work" className="scroll-mt-8 space-y-10">
        <h2 className="case-study-section-title max-w-3xl text-[3xl] leading-tight tracking-tight md:text-4xl">
          Key Work
        </h2>

        <div className="space-y-10">
          <div id="design-system" className="scroll-mt-8 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Building the Design System to Unblock Velocity
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                Before we could scale, we needed design to be repeatable. I built
                a 200+ component library covering data visualization patterns,
                form workflows, admin interfaces, and responsive layouts across
                mobile, tablet, and desktop.
              </p>
              <p>
                The impact was direct. Design-to-development handoff time dropped
                by 50%. That freed engineering to validate features with real
                cities instead of waiting for specs. This velocity became the
                foundation for everything else we shipped.
              </p>
            </div>
          </div>

          <div id="core-data-experience" className="scroll-mt-8 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Designing the Core Data Experience
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                The core purpose of the platform was to give users a cohesive
                view of the data, not just a dump of numbers. I explored a wide
                range of visualization types before landing on a half sunburst
                fan chart to represent the nine domains making up a city&apos;s
                quality of life.
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
                The key insight was progressive disclosure. Detailed information
                only appeared on hover. This approach kept the visual clean while
                letting users drill into relationships between domains,
                indicators, and the UN&apos;s Sustainable Development Goals when
                they wanted that level of detail.
              </p>
              <CaseStudyImagePlaceholder
                label="Fan chart data visualization"
                src="/images/un-habitat/qoli-fan.png"
                fit={false}
              />
              <p>
                For the indicator-level data, I carried the same principle
                through. Each indicator&apos;s detail stayed hidden until a user
                asked for it. The layout followed a clear hierarchy: city,
                instructions, data visualization, detail. Users always knew where
                they were and what to do next.
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

          <div id="landing-page" className="scroll-mt-8 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Redesigning the Landing Page to Drive First Impressions
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                The first version had no clear call to action. City dots were
                color coded but unlabeled. Users had no idea what they were
                looking at. I ran interviews with a city admin from Logan,
                Australia and one from Vancouver, Canada. Both hit the same gaps.
                Nothing told them what to do next, and the visual had no context.
              </p>
              <p>
                The redesign added a clear CTA, labeled the city dots, simplified
                the branding so it stopped competing with the content, and added
                credibility signals like &ldquo;170+ cities monitored.&rdquo;
                Users got immediate proof of scale before exploring further.
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

          <div id="admin-onboarding" className="scroll-mt-8 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Designing Admin Onboarding and Permissions
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                Interviews with city administrators revealed three blockers. They
                didn&apos;t understand what the platform was for before being
                asked to do work. Data entry workflows felt risky. The permissions
                flow was confusing.
              </p>
              <p>
                I redesigned onboarding around purpose first. Show the value and
                use case before asking for input. I designed the permissions flow
                so users could see clearly what they were being asked to grant
                and why. For location sharing and notifications, I made the stakes
                obvious.
              </p>
              <p>Within 6 months, adoption grew from 62 to 170+ cities. That&apos;s 174% growth.</p>
            </div>
          </div>

          <div id="survey-app" className="scroll-mt-8 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Building the Survey App for Direct Community Input
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                The survey app exists to let the Initiative gather data directly
                from people living in these cities, rather than relying only on
                institutional sources. I designed the onboarding flow to first
                explain what the app is and why it&apos;s collecting their input.
                People understood the purpose before being asked for anything.
              </p>
              <p>
                The permissions flow followed the same clarity principle. Location
                sharing, notification enabling. Users could see what they were
                being asked to grant and why.
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

          <div id="accessible-visualizations" className="scroll-mt-8 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Designing Accessible Data Visualizations for Government Procurement
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                Government adoption requires accessibility compliance. I designed
                all data visualizations with WCAG 2.1 AA compliance built in from
                the start. That meant using color contrast, clear hierarchy, and
                keyboard navigation not as afterthoughts, but as core to how the
                experience worked.
              </p>
              <p>
                Accessibility wasn&apos;t a feature to add later. It was often
                what determined whether a city could actually approve and deploy
                the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CaseStudySection id="what-i-learned" title="What I Learned">
        <p>
          Designing at government scale changed how I think about product design.
          I learned that accessibility isn&apos;t a feature you add later. It&apos;s
          often what determines whether your users can actually adopt and deploy
          what you&apos;ve built. Every product designer should carry this into
          their work.
        </p>
        <p>
          I also learned that velocity and design rigor can go hand in hand. By
          building the design system early, design decisions didn&apos;t become a
          bottleneck for engineering. The constraint of a 6-month timeline forced
          us to prioritize ruthlessly. That discipline made us faster, not
          slower.
        </p>
        <p>
          And something more subtle: when you&apos;re designing for government
          adoption, you&apos;re not designing for delight. You&apos;re designing
          for clarity and trust. The 174% adoption spike didn&apos;t come from
          beautiful visualizations. It came from unglamorous UX. Clear onboarding.
          Honest permissions flows. An obvious value prop. Sometimes the best
          design is invisible because it just works.
        </p>
        <p>
          This work shifted how I think about impact. A beautiful visualization is
          nice. But a visualization that helps city officials make policy
          decisions and shape public policy. That&apos;s design that moves the
          needle.
        </p>
      </CaseStudySection>
    </CaseStudySections>
  );
}
