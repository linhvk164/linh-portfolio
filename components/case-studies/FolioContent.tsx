import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import {
  CaseStudyImagePlaceholder,
  CaseStudyList,
  CaseStudyMeta,
  CaseStudySection,
  CaseStudySections,
} from "@/components/case-studies/CaseStudySection";
import { getCaseStudyMetaItems } from "@/data/caseStudyMeta";

const personas = [
  "International students writing assignments and emails in a second language",
  "Professionals communicating under real workplace pressure",
  "Bilingual individuals trying to express more personal or complex ideas with friends and family",
  "Intermediate learners who consume plenty of content but rarely practice writing themselves",
];

const researchThemes = [
  {
    title:
      "Relying on multiple tools disrupts learning flow (5 of 5 participants)",
    body: "Everyone used multiple apps in a single practice session, and switching mid-task broke their concentration, often ending the session entirely.",
  },
  {
    title:
      "Without real-life context, it's hard to remember vocabulary (5 of 5 participants)",
    body: "Word lists don't stick. The vocabulary that stuck best was learned through situations that were personally meaningful.",
  },
  {
    title:
      "Existing apps get repetitive and stop challenging users (4 of 5 participants)",
    body: "Duolingo came up constantly, always negatively. Users start strong, enjoy the early structure, then plateau because the app doesn't grow with them.",
  },
  {
    title:
      "Without using an app, it's hard to track and share growth (3 of 5 participants)",
    body: "Self-learners felt isolated. The ones with a tutor or language partner were far more consistent, and the ones without wished for accountability and community.",
  },
] as const;

function InlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-baseline gap-0.5 text-accent underline underline-offset-[3px] transition-colors hover:text-accent-hover"
    >
      {children}
      <ArrowUpRightIcon size={12} className="translate-y-[1px] shrink-0" />
    </Link>
  );
}

export function FolioContent() {
  const metaItems = getCaseStudyMetaItems("folio");

  const summaryRows = [
    {
      label: "Summary",
      body: (
        <>
          As <strong>Co-founder and Founding UX/UI Designer</strong>, I owned
          Folio end to end, a distraction-free writing space for language
          learners. Here&apos;s how I{" "}
          <strong>led the research, design, and launch</strong> of a working
          beta.
        </>
      ),
    },
    {
      label: "Problem",
      body: (
        <>
          The challenge wasn't teaching people a language. 
          Plenty of apps already do that well. The real challenge was helping learners use the language they already knew.
          Most existing platforms focus on consuming content through flashcards, lessons, or quizzes. Very few support the <strong>messy process </strong> of actually producing language, where learners hesitate, search for vocabulary, second guess themselves, and often give up before finishing a paragraph.
        </>
      ),
    },
    {
      label: "Solution",
      body: (
        <>
          Translate mid-sentence with a built-in command. Learn words in the
          context of learners&apos; own life, not a textbook&apos;s. Track
          streak, vocabulary, and progress as you go. Save new words straight to
          flashcards for practice.
        </>
      ),
    },
  ] as const;

  return (
    <CaseStudySections slug="folio">
      <section id="overview" className="scroll-mt-8 space-y-5">
        <div className="space-y-1">
          <p className="text-[7px] font-semibold uppercase tracking-[0.01em] text-case-study-body/70">
            Overview
          </p>
          <h2 className="case-study-section-title max-w-3xl text-[3xl] leading-tight tracking-tight md:text-4xl">
            Folio
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-case-study-body sm:space-y-6">
          {summaryRows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-2 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-8"
            >
              <p className="text-sm font-semibold tracking-tight text-ink">
                {row.label}
              </p>
              <p className="text-base leading-8 text-case-study-body">
                {row.body}
              </p>
            </div>
          ))}
        </div>

        <CaseStudyImagePlaceholder
          label="Folio product overview"
          src="/images/folio/folio-cover-video.mov"
        />

        {metaItems.length > 0 ? <CaseStudyMeta items={metaItems} /> : null}

        <p className="text-base leading-8 text-case-study-body">
          I partnered with{" "}
          <InlineLink href="https://www.linkedin.com/in/mark-b17/">
            Mark Baula
          </InlineLink>
          , a software engineer, to bring the idea to life, and joined
          Velocity&apos;s{" "}
          <InlineLink href="https://www.velocityincubator.com/programs-events/cornerstone">
            Cornerstone Program
          </InlineLink>{" "}
          to build out a network of mentors and founders along the way.
        </p>
      </section>

      <div id="how-did-i-design-it" className="space-y-16 md:space-y-20">
        <h2 className="case-study-section-title max-w-3xl text-[3xl] leading-tight tracking-tight md:text-4xl">
          How did I design it?
        </h2>

        <CaseStudySection
          id="all-good-design-starts-with-a-task-or-in-this-case-an-inspiration"
          eyebrow="Inspiration"
          title="All Good Design Starts With A Task, Or In This Case, An Inspiration"
        >
          <p>
              As an <strong>ex-Duolingo learner who ditched their 600-day-streak</strong>, I know
                firsthand that streaks don&apos;t equal fluency. Figuring out how to find a
                project worth building as a beginner founder is often about <strong>looking at your own frustrations first</strong>.
          </p>
          <p>
              I kept losing my train of
                thought while writing in because I kept switching
                between Google Translate, dictionaries, and conjugation sites. That
                frustration became the whole reason Folio exists, and the
                starting point for the problem I set out to solve.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <CaseStudyImagePlaceholder
              label="ex-duolingo learner"
              src="/images/folio/ex-duolingo.jpg"
              caption="Me and my 342 day streak - Shanghai, 2025."
            />
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="interview-your-target-audience"
          eyebrow="User Research"
          title="Interview Your Target Audience"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="w-full shrink-0 sm:w-1/2">
              <CaseStudyImagePlaceholder
                label="Meme of someone drinking from a cat-shaped cup while the cat ears poke them in the eye"
                src="/images/folio/ux-is-important.webp"
                fit={false}
                caption={
                  <InlineLink href="https://uxplanet.org/going-all-buzzfeed-a-ux-list-of-memes-738ce7d8250c">
                    why UX is important
                  </InlineLink>
                }
              />
            </div>
            <p className="min-w-0 flex-1">
              If your target market is everybody, you appeal to nobody. So
              before I opened Figma, I{" "}
              <strong>conducted 6 user interviews</strong> using the{" "}
              <strong>Mom Test framework</strong>, a structured research method
              that keeps interviews grounded in real behavior instead of
              opinion.
            </p>
          </div>
          <p>
            A few principles that <strong>shaped my research approach</strong>:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              These interviews are not about asking &ldquo;would you use my
              app.&rdquo; They&apos;re about asking &ldquo;what apps are you
              currently using.&rdquo;
            </li>
            <li>
              You&apos;re trying to understand your users&apos; preferences,
              existing workflows, frustrations, and wishes, not validate an idea
              you already like.
            </li>
            <li>
              <strong>Listen closely</strong>
              {" "}
              and ask follow up questions. Put yourself in your users&apos;
              shoes.
            </li>
            <li>
              Find out what tools they&apos;ve already tried, what worked, and
              what didn&apos;t.
            </li>
          </ul>
          <p>
            I <strong>recruited and interviewed</strong>
            {" "}
            independent learners ranging from complete beginners to B2 level,
            studying French, Spanish, Arabic, Mandarin, and Japanese. I also
            interviewed a university French professor with over twenty years of
            teaching experience to bring in an educator&apos;s perspective. Two
            questions gave me the richest answers every time:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              &ldquo;What&apos;s one thing you wish someone had already solved
              about language learning?&rdquo;
            </li>
            <li>
              &ldquo;If you could describe your ideal language learning tool to
              a friend, what would it have?&rdquo;
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection
          id="compile-your-findings"
          eyebrow="UX Analysis & Synthesis"
          title="Compile Your Findings"
        >
          <p>
            Scattered information doesn&apos;t reveal patterns. Good UX comes
            from <strong>synthesizing</strong> the common themes across your
            interviews and spotting where the opportunity actually is. After
            going through all 6 conversations, I <strong>distilled</strong> four
            core themes:
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {researchThemes.map((theme) => (
              <div
                key={theme.title}
                className="space-y-3 rounded-xl bg-surface p-8 md:p-10"
              >
                <h3 className="text-base font-semibold leading-snug text-ink">
                  {theme.title}
                </h3>
                <p className="text-base leading-relaxed text-case-study-body">
                  {theme.body}
                </p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="if-you-dont-know-your-niche-youre-bound-to-fail"
          eyebrow="Product Positioning"
          title="If You Don't Know Your Niche, You're Bound To Fail"
        >
          <p>
            Before the interviews, I assumed Folio was for anyone learning a
            language. The research <strong>challenged that assumption</strong>.
            I <strong>repositioned</strong> the product around intermediate
            learners who&apos;ve already built a foundation and want to produce
            language, not just consume it. That&apos;s what makes your product
            stand out: knowing exactly who it&apos;s for instead of trying to
            serve everyone.
          </p>
          <p>
            I <strong>defined four target personas</strong>:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            {personas.map((persona) => (
              <li key={persona}>{persona}</li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection
          id="how-do-you-determine-what-to-build"
          eyebrow="Feature Prioritization"
        >
          <p>
            To determine what to build, you assess your common themes and{" "}
            <strong>translate them into feature priorities</strong>. Your
            must-haves are the features your app has to solve for. I{" "}
            <strong>mapped </strong> my four research themes directly onto four
            core features: write, translate, practice, and progress. Every
            feature had to justify itself against the same question: does this
            remove friction, or add it? If the answer was no, it didn&apos;t
            make the product.
          </p>
          <p>
            That&apos;s how I defined and designed:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              An <strong>inline translation shortcut</strong>, typing{" "}
              <code className="rounded bg-surface-muted px-1.5 py-0.5 text-sm">
                //
              </code>{" "}
              mid-sentence to translate without leaving the page
            </li>
            <li>
              <strong>Daily writing prompts</strong> tailored to CEFR
              proficiency levels, adjustable in difficulty
            </li>
            <li>
              <strong>Auto-saved vocabulary</strong> that turns into flashcards
              without extra effort
            </li>
            <li>
              A <strong>progress tracker</strong> showing words written,
              vocabulary learned, writing frequency, and translation use
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection
          id="make-it-real"
          eyebrow="Prototyping"
          title="Building the Prototype"
        >
          <p>
            Once the direction was clear, it was time to <strong>build</strong>.
            I <strong>led the design</strong> of the initial proof of concept while Mark
            made sure the core functionality worked before worrying about
            polish. This is the stage where the idea stops being a plan and
            becomes something people can actually click through.
          </p>
          <CaseStudyImagePlaceholder
            label="Initial proof of concept"
            src="/images/folio/proof-of-concept.png"
          />
        </CaseStudySection>

        <CaseStudySection
          id="test-test-test"
          eyebrow="Conduct User Tests"
          title="User Testing"
        >
          <p>
            Run user testing early, and rapidly modify features based on what
            you see. I <strong>recruited</strong> two of the original interview
            participants back to test the working prototype, then{" "}
            <strong>ran additional beta testing sessions</strong>. Watching
            someone actually use the product surfaces problems you&apos;d never
            catch while designing it in isolation. I was specifically{" "}
            <strong>evaluating</strong>:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>The number of clicks it took to do anything</li>
            <li>
              Whether the instructions were clear enough to use without
              explanation
            </li>
          </ul>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <CaseStudyImagePlaceholder
              label="User testing session"
              src="/images/folio/test-flora.JPG"
            />
            <CaseStudyImagePlaceholder
              label="Socratica demo"
              src="/images/folio/socratica-demo.webp"
            />
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="identify-and-improve"
          eyebrow="Problem Identification & Iteration"
          title="Iteration"
        >
          <p>
            Where did your users get stuck? What concerns did they express? Show
            the problems, don&apos;t hide them, because that&apos;s where the
            real redesign work comes from. <strong>Testing revealed</strong>:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              The inline translation shortcut wasn&apos;t discoverable without
              someone explaining it first
            </li>
            <li>Starting a new writing session required too many clicks</li>
            <li>
              Even though users were impressed by the inline translation itself,
              the overall experience wasn&apos;t intuitive and wasn&apos;t fun to
              use
            </li>
          </ul>
          <p>
            From there, I <strong>rapidly iterated</strong>, making the
            interface progressively simpler with every round:
          </p>
          <CaseStudyList
            items={[
              "Redesigned onboarding to introduce the inline translation immediately",
              "Moved the entry area front and center as soon as users log in",
              "Strengthened Folio's branding with more personality",
              "Moved saved entries below the writing space to reduce distraction",
              "Removed the side panel layout entirely to spotlight the three core features: write, practice, progress",
              "Added editable journal entries after users said they wanted to revisit unfinished thoughts instead of starting over every time",
            ]}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <CaseStudyImagePlaceholder
              label="Figma iteration process"
              src="/images/folio/process-figma.png"
            />
            <CaseStudyImagePlaceholder
              label="Folio branding and theme showcase"
              src="/images/folio/theme-showcase.mov"
            />
          </div>
        </CaseStudySection>

        <CaseStudySection id="results" eyebrow="Results">
          <p>
            After those rounds of iteration, the four core features came
            together into a single writing flow: write, translate, practice, and
            progress.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <CaseStudyImagePlaceholder
              label="Write feature"
              src="/images/folio/write.mov"
            />
            <CaseStudyImagePlaceholder
              label="Translate feature"
              src="/images/folio/translate.mov"
            />
            <CaseStudyImagePlaceholder
              label="Practice feature"
              src="/images/folio/practice.mov"
            />
            <CaseStudyImagePlaceholder
              label="Progress feature"
              src="/images/folio/progress.mov"
            />
          </div>
        </CaseStudySection>
      </div>

      <CaseStudySection
        id="reflection"
        eyebrow="Reflection"
        title="Where Folio Is Now"
      >
        <p>
          After multiple rounds of iteration, GitHub PRs, and feedback
          prioritization, I <strong>shipped the beta</strong>, now live at{" "}
          <InlineLink href="https://folioapp.ca">folioapp.ca</InlineLink>,
          supporting <strong>160+ languages</strong>, with translation accuracy
          still being refined for the languages we support.
        </p>
        <p>
          <strong>Leading Folio from research to launch</strong> taught me that
          good UX isn&apos;t about adding features. It&apos;s about removing the
          friction that stops people from doing what they already want to do.
          And the clarity for what to remove only comes from listening before
          you build.
        </p>
      </CaseStudySection>

      <p className="border-t-2 border-border pt-8 text-base font-semibold text-ink">
        Folio is live in open beta at{" "}
        <Link
          href="https://folioapp.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-baseline gap-0.5 text-accent underline underline-offset-[3px] transition-colors hover:text-accent-hover"
        >
          folioapp.ca
          <ArrowUpRightIcon size={13} className="translate-y-[1px] shrink-0" />
        </Link>
      </p>
    </CaseStudySections>
  );
}
