import {
  CaseStudyImagePlaceholder,
  CaseStudyList,
  CaseStudyPullQuote,
  CaseStudySection,
  CaseStudySections,
} from "@/components/case-studies/CaseStudySection";

export function UnHabitatAdminContent() {
  return (
    <CaseStudySections slug="un-habitat-admin">
      <CaseStudySection id="overview" title="Overview">
        <p>
          Behind every public dashboard is a system that city administrators use
          every day. They&apos;re responsible for uploading datasets, reviewing
          indicators, updating information, and keeping everything accurate.
        </p>
        <p>
          Before the Innovation team started, the UN worked manually with each
          city. Manual data collection. Excel uploads. Error checking by hand.
          Updates done one at a time. It was slow, error-prone, and it meant
          cities spent more time decoding the process than actually managing
          their data.
        </p>
        <p>
          My job was to redesign those workflows. The goal was to make them clear
          and efficient so administrators could focus on keeping city data
          accurate instead of wrestling with the platform.
        </p>
        <CaseStudyImagePlaceholder
          label="Admin workflows overview"
          src="/images/un-habitat/cityexplorer-main-image.webp"
          fit={false}
        />
      </CaseStudySection>

      <CaseStudySection id="the-problem" title="The Problem">
        <p>
          The existing workflow had three major phases: Joining, Onboarding, and
          Implementing. Each phase had multiple sub-steps and edge cases. Cities
          had to coordinate with the UN manually. The UN team had to track
          everything in spreadsheets and emails.
        </p>
        <CaseStudyPullQuote>
          A confusing workflow doesn&apos;t just frustrate users. It slows down
          the entire organization and makes it easier for inaccurate data to slip
          through.
        </CaseStudyPullQuote>
        <p>
          I needed to understand the full picture before designing anything. How
          did cities upload their data? How did the UN-Habitat team review and
          approve it? Where were the bottlenecks and context switches that wasted
          time?
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <CaseStudyImagePlaceholder
            label="Implementation flow"
            src="/images/un-habitat/implementation-flow.png"
            fit={false}
          />
          <CaseStudyImagePlaceholder
            label="Problem mapping"
            src="/images/un-habitat/problem.webp"
            fit={false}
          />
        </div>
      </CaseStudySection>

      <CaseStudySection id="the-process" title="The Process">
        <p>
          This was one of the most complex design challenges I&apos;d worked on.
          The workflow was massive. I partnered with Connie, another designer on
          the team, and we mapped out every step across all three phases.
        </p>
        <p>
          We broke each task into smaller pieces. We clearly defined how each
          action affected different stakeholders. That helped us see where users
          were making unnecessary decisions or switching context too often.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <CaseStudyImagePlaceholder
            label="Workflow brainstorm"
            src="/images/un-habitat/brainstorm-2.webp"
            fit={false}
          />
          <CaseStudyImagePlaceholder
            label="Workflow brainstorm"
            src="/images/un-habitat/brainstorm.webp"
            fit={false}
          />
        </div>
        <CaseStudyImagePlaceholder
          label="Process mapping"
          src="/images/un-habitat/process.webp"
          fit={false}
        />
      </CaseStudySection>

      <CaseStudySection
        id="key-insights"
        title="Key Insights from the Workflow Analysis"
      >
        <p>
          <strong>Once we had the full picture, patterns emerged.</strong>
        </p>
        <p>
          <strong>
            Manual data entry was creating errors and wasting time.
          </strong>{" "}
          Cities entered the same information multiple times across different
          systems. The UN team manually entered that data again when reviewing
          it. This duplication meant data inconsistencies and wasted effort.
        </p>
        <p>
          <strong>Cities didn&apos;t know what was expected.</strong> Many
          administrators weren&apos;t tech-savvy. They didn&apos;t understand
          the workflow upfront, so they made mistakes early on. The UN team had
          to correct these mistakes manually, which slowed everything down.
        </p>
        <p>
          <strong>
            The UN team was bottlenecked on manual verification.
          </strong>{" "}
          Every upload needed a human to check for missing or incorrect data. As
          we scaled to more cities, this became unsustainable. We needed a
          system that caught obvious errors automatically so the team could
          focus on actual verification.
        </p>
        <p>
          <strong>
            Communication happened everywhere except the platform.
          </strong>{" "}
          Cities and the UN team coordinated through email, calls, and
          spreadsheets. This fragmentation made it hard to track progress and
          easy to miss deadlines.
        </p>
      </CaseStudySection>

      <CaseStudySection id="design-goals" title="Design Goals">
        <p>Based on these insights, we defined what needed to change.</p>
        <CaseStudyList
          items={[
            "Automate data population so cities entered information once and it flowed through the entire system",
            "Structure the learning so administrators understood the process before starting",
            "Catch errors automatically so the UN team focused on verification, not detection",
            "Consolidate communication into the platform itself",
          ]}
        />
      </CaseStudySection>

      <section id="the-solution" className="scroll-mt-8 space-y-10">
        <h2 className="case-study-section-title max-w-3xl text-[3xl] leading-tight tracking-tight md:text-4xl">
          The Solution
        </h2>

        <div className="space-y-10">
          <div id="joining" className="scroll-mt-8 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Joining: Automating City Registration
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                The insight: cities were entering their basic information multiple
                times.
              </p>
              <p>
                We created a single form to collect city data upfront. That
                information automatically populated all downstream documents and
                emails. No re-entry. No inconsistencies. One source of truth.
              </p>
              <p>
                We also moved signature collection into the platform so
                stakeholders didn&apos;t have to coordinate outside of it.
              </p>
              <CaseStudyImagePlaceholder
                label="Joining workflow"
                src="/images/un-habitat/joining.mp4"
                fit={false}
              />
            </div>
          </div>

          <div id="onboarding" className="scroll-mt-8 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Onboarding: Replacing Manual Calls with Structured Learning
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                The insight: cities didn&apos;t understand the process upfront, so
                they made mistakes early.
              </p>
              <p>
                We built learning modules and videos that explained the workflow
                before administrators started work. We added automatic reminders
                so cities stayed on track. This replaced the manual calls the UN
                team had been making.
              </p>
              <CaseStudyImagePlaceholder
                label="Onboarding workflow"
                src="/images/un-habitat/onboarding.mp4"
                fit={false}
              />
            </div>
          </div>

          <div id="implementing" className="scroll-mt-8 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Implementing: Catching Errors Before They Publish
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                The insight: the UN team was bottlenecked verifying every upload
                manually.
              </p>
              <p>
                We designed a system that automatically flagged data that was
                missing or looked incorrect. Administrators could see these flags
                immediately and fix them. By the time the UN team reviewed, most
                obvious errors were already caught.
              </p>
              <CaseStudyImagePlaceholder
                label="Implementing workflow"
                src="/images/un-habitat/Implementing.mp4"
                fit={false}
              />
            </div>
          </div>
        </div>
      </section>

      <CaseStudySection id="the-impact" title="The Impact">
        <p>
          This workflow redesign was critical to the adoption scaling.
          Administrators could onboard faster because the process was clear. The
          UN team had capacity to support more cities without adding headcount
          because they weren&apos;t doing manual error detection. Data quality
          improved because errors were caught systematically.
        </p>
        <p>
          This workflow, combined with the public-facing platform, enabled the
          scale from 62 to 170+ cities in six months.
        </p>
        <CaseStudyImagePlaceholder
          label="Admin platform impact"
          src="/images/un-habitat/problem-2.png"
          fit={false}
        />
      </CaseStudySection>

      <CaseStudySection id="what-i-learned" title="What I Learned">
        <p>
          This project reinforced why empathy matters in design. I spent real time
          understanding how cities actually worked. How they collected data. How
          the UN team reviewed it. What steps felt like friction.
        </p>
        <p>
          That understanding shaped every design decision. I wasn&apos;t designing
          an admin dashboard in a vacuum. I was designing a tool that let stressed
          administrators do their job more clearly and efficiently.
        </p>
        <p>
          I also learned the importance of systems thinking. Every design choice
          in the admin workflow affected the public-facing platform. Faster data
          entry meant more cities could launch faster. Clearer error states meant
          better data quality. Those things compound.
        </p>
        <p>
          Sometimes the work that moves the needle isn&apos;t the work that gets
          noticed. But building the infrastructure for scale is just as important
          as designing the public experience.
        </p>
      </CaseStudySection>
    </CaseStudySections>
  );
}
