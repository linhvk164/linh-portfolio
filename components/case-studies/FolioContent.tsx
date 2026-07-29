import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import {
  CaseStudyImagePlaceholder,
  CaseStudySection,
  CaseStudySections,
} from "@/components/case-studies/CaseStudySection";

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
  return (
    <CaseStudySections slug="folio">
      <CaseStudySection id="overview" title="Overview">
        <p>
          As <strong>Co-founder and Founding UX/UI Designer</strong>, I led
          Folio from discovery to a live beta: a distraction-free writing space
          that helps language learners <strong>produce language</strong>, not
          just consume it. Most apps stop at flashcards and quizzes, so
          intermediate learners still juggle translators mid-sentence and lose
          their flow. I ran research with learners and educators, then designed
          an experience with <strong>inline translation</strong>, contextual
          vocabulary, and progress tracking so writing stays in one place.
          Partnering with engineer{" "}
          <InlineLink href="https://www.linkedin.com/in/mark-b17/">
            Mark Baula
          </InlineLink>{" "}
          and Velocity&apos;s{" "}
          <InlineLink href="https://www.velocityincubator.com/programs-events/cornerstone">
            Cornerstone Program
          </InlineLink>
          , we shipped{" "}
          <InlineLink href="https://folioapp.ca">folioapp.ca</InlineLink> in{" "}
          <strong>two months</strong>, now supporting{" "}
          <strong>160+ languages</strong>.
        </p>
        <CaseStudyImagePlaceholder
          label="Folio product overview"
          src="/images/folio/folio-cover-video.mp4"
        />
      </CaseStudySection>

      <CaseStudySection id="the-team-and-my-role" title="The team and my role">
        <p>
          The team consisted of myself as{" "}
          <strong>Co-founder and Founding UX/UI Designer</strong>, and{" "}
          <InlineLink href="https://www.linkedin.com/in/mark-b17/">
            Mark Baula
          </InlineLink>{" "}
          as founding engineer. I owned product design and user research end to
          end, from the first interviews through final UI, while Mark built out
          the core functionality in parallel. As a two-person team, we worked
          closely and iterated fast, with weekly check-ins to align design
          decisions against what was technically feasible to ship in two months.
        </p>
      </CaseStudySection>

      <section id="research" className="scroll-mt-8 space-y-10">
        <h2 className="case-study-section-title max-w-3xl text-[3xl] leading-tight tracking-tight md:text-4xl">
          Research
        </h2>

        <div className="space-y-10">
          <div id="user-interviews" className="scroll-mt-8 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              User interviews
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                Before opening Figma, I conducted{" "}
                <strong>6 user interviews</strong> using the{" "}
                <strong>Mom Test framework</strong>, a research method that
                keeps interviews grounded in real behavior instead of opinion.
                Rather than asking &ldquo;would you use my app,&rdquo; I asked
                what apps people were already using, what worked, and what
                didn&apos;t, and followed up closely to understand their
                existing workflows, frustrations, and wishes. I recruited
                independent learners ranging from complete beginners to B2
                level, studying French, Spanish, Arabic, Mandarin, and Japanese,
                along with a university French professor with over twenty years
                of teaching experience for an educator&apos;s perspective. Two
                questions gave me the richest answers every time: &ldquo;What&apos;s
                one thing you wish someone had already solved about language
                learning?&rdquo; and &ldquo;If you could describe your ideal
                language learning tool to a friend, what would it have?&rdquo;
              </p>
            </div>
          </div>

          <div
            id="understanding-the-findings"
            className="scroll-mt-8 space-y-5"
          >
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Understanding the findings
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                Scattered information doesn&apos;t reveal patterns. Good UX
                comes from synthesizing the common themes across interviews and
                spotting where the opportunity actually is. After going through
                all 6 conversations, I distilled four core themes:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {researchThemes.map((theme) => (
                  <div
                    key={theme.title}
                    className="space-y-2.5 rounded-2xl bg-[#f3f3f3] px-10 py-7 md:rounded-3xl md:px-12 md:py-8"
                  >
                    <h4 className="text-base font-semibold leading-tight text-ink">
                      {theme.title}
                    </h4>
                    <p className="text-base leading-snug text-case-study-body">
                      {theme.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="product-positioning" className="scroll-mt-8 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Product positioning
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                Before the interviews, I assumed Folio was for anyone learning a
                language. The research challenged that assumption. I
                repositioned the product around intermediate learners who&apos;ve
                already built a foundation and want to produce language, not
                just consume it. That&apos;s what makes a product stand out:
                knowing exactly who it&apos;s for instead of trying to serve
                everyone. I defined four target personas:
              </p>
              <ul className="list-disc space-y-1 pl-5 leading-snug">
                {personas.map((persona) => (
                  <li key={persona}>{persona}</li>
                ))}
              </ul>
            </div>
          </div>

          <div id="feature-prioritization" className="scroll-mt-8 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Feature prioritization
            </h3>
            <div className="space-y-5 text-base leading-7 text-case-study-body">
              <p>
                To determine what to build, I mapped the research themes
                directly onto feature priorities. Every feature had to justify
                itself against the same question: does this remove friction, or
                add it? If the answer was no, it didn&apos;t make the product.
                That&apos;s how I defined and designed:
              </p>
              <ul className="list-disc space-y-1 pl-5 leading-snug">
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
                  <strong>Auto-saved vocabulary</strong> that turns into
                  flashcards without extra effort
                </li>
                <li>
                  A <strong>progress tracker</strong> showing words written,
                  vocabulary learned, writing frequency, and translation use
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CaseStudySection id="proof-of-concept" title="Proof of concept">
        <p>
          Once the direction was clear, it was time to build. I led the design
          of the initial proof of concept while Mark made sure the core
          functionality worked before worrying about polish. This is the stage
          where the idea stops being a plan and becomes something people can
          actually click through.
        </p>
        <CaseStudyImagePlaceholder
          label="Initial proof of concept"
          src="/images/folio/proof-of-concept.png"
        />
      </CaseStudySection>

      <CaseStudySection
        id="user-testing-and-reiteration"
        title="User testing and reiteration"
      >
        <p>
          Run user testing early, and rapidly modify features based on what you
          see. I recruited two of the original interview participants back to
          test the working prototype, then ran additional beta testing sessions,
          specifically evaluating the number of clicks it took to do anything
          and whether the instructions were clear enough to use without
          explanation.
        </p>
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
        <p>Testing revealed:</p>
        <ul className="list-disc space-y-1 pl-5 leading-snug">
          <li>
            The inline translation shortcut wasn&apos;t discoverable without
            someone explaining it first
          </li>
          <li>Starting a new writing session required too many clicks</li>
          <li>
            Even though users were impressed by the inline translation itself,
            the overall experience wasn&apos;t intuitive or fun to use
          </li>
        </ul>
        <p>
          From there, I rapidly iterated, making the interface progressively
          simpler with every round:
        </p>
        <ul className="list-disc space-y-1 pl-5 leading-snug">
          <li>
            Redesigned onboarding to introduce the inline translation
            immediately
          </li>
          <li>
            Moved the entry area front and center as soon as users log in
          </li>
          <li>Strengthened Folio&apos;s branding with more personality</li>
          <li>
            Moved saved entries below the writing space to reduce distraction
          </li>
          <li>
            Removed the side panel layout entirely to spotlight the three core
            features: write, practice, progress
          </li>
          <li>
            Added editable journal entries after users said they wanted to
            revisit unfinished thoughts instead of starting over every time
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection id="final-product" title="Final product">
        <p>
          After those rounds of iteration, the four core features came together
          into a single writing flow: write, translate, practice, and progress.
          After multiple rounds of iteration, GitHub PRs, and feedback
          prioritization, I shipped the beta, now live at{" "}
          <InlineLink href="https://folioapp.ca">folioapp.ca</InlineLink>,
          supporting <strong>160+ languages</strong>, with translation accuracy
          still being refined for the languages we support.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <CaseStudyImagePlaceholder
            label="Write feature"
            src="/images/folio/write.mp4"
          />
          <CaseStudyImagePlaceholder
            label="Translate feature"
            src="/images/folio/translate.mp4"
          />
          <CaseStudyImagePlaceholder
            label="Practice feature"
            src="/images/folio/practice.mp4"
          />
          <CaseStudyImagePlaceholder
            label="Progress feature"
            src="/images/folio/progress.mp4"
          />
        </div>
      </CaseStudySection>

      <CaseStudySection id="outtakes" title="Outtakes">
        <p>
          Leading Folio from research to launch taught me that good UX comes
          from removing the friction that stops people from doing what they
          already want to do. And the clarity for what to remove only comes from
          listening before you build.
        </p>
      </CaseStudySection>
    </CaseStudySections>
  );
}
