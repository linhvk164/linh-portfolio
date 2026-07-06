import Link from "next/link";
import { CaseStudySection } from "@/components/case-studies/CaseStudySection";

const meta = [
  { label: "Role", value: "Co-founder, Founding UX/UI Designer" },
  { label: "Timeline", value: "Ongoing (May 2025 — present)" },
  { label: "Team", value: "2 co-founders (designer + engineer), 1 UX research contributor" },
  { label: "Status", value: "Live beta at folioapp.ca" },
];

const personas = [
  "International students writing assignments and emails in a second language.",
  "Professionals communicating under real workplace pressure.",
  "Bilingual individuals trying to express more personal or complex ideas with friends and family.",
  "Intermediate learners who consumed plenty of content but rarely practiced writing themselves.",
];

export function FolioContent() {
  return (
    <div className="space-y-12">
      <CaseStudySection title="Overview">
        <p>
          Learning a new language should feel rewarding, but writing often
          becomes an exercise in frustration. A single sentence can send learners
          bouncing between Google Translate, dictionaries, conjugation websites,
          and Reddit threads just to find the right word. By the time they return
          to what they were writing, the original thought is often gone.
        </p>
        <p>
          I experienced this firsthand while learning French and started wondering
          if there was a better way.
        </p>
        <p>
          Folio began with a simple question. What if language learners could
          stay focused on expressing their thoughts instead of managing a
          collection of disconnected tools?
        </p>
        <p>
          As the co-founder and founding UX/UI designer, I led the product from
          discovery research and interaction design to branding, prototyping, and
          beta testing alongside my co-founder.
        </p>
        <dl className="grid gap-4 border-t-2 border-border pt-6 sm:grid-cols-2">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-base font-semibold text-ink">{item.label}</dt>
              <dd className="mt-1 text-base leading-relaxed text-ink-muted">
                {item.label === "Status" ? (
                  <>
                    Live beta at{" "}
                    <Link
                      href="https://folioapp.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline-offset-2 hover:underline"
                    >
                      folioapp.ca
                    </Link>
                  </>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </CaseStudySection>

      <CaseStudySection title="The Challenge">
        <p>
          The challenge wasn&apos;t teaching people a language. Plenty of apps
          already do that well.
        </p>
        <p>
          The real challenge was helping learners use the language they already
          knew.
        </p>
        <p>
          Most existing platforms focus on consuming content through flashcards,
          lessons, or quizzes. Very few support the messy process of actually
          producing language, where learners hesitate, search for vocabulary,
          second guess themselves, and often give up before finishing a
          paragraph.
        </p>
        <p>
          I wanted to understand what was really causing that friction before
          designing a solution.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Research">
        <p>
          Before opening Figma, I conducted six user interviews using the Mom
          Test framework. The conversations focused entirely on participants&apos;
          existing habits and frustrations rather than validating an idea.
        </p>
        <p>
          After attending the Cornerstone program at the University of Waterloo,
          I completely rewrote my interview script to remove leading questions
          and bias. Two questions consistently generated the richest insights:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            &ldquo;What&apos;s one thing you wish someone had already solved
            about language learning?&rdquo;
          </li>
          <li>
            &ldquo;If you could describe your ideal language learning tool to a
            friend, what would it have?&rdquo;
          </li>
        </ul>
        <p>
          I spoke with independent language learners ranging from complete
          beginners to B2 level studying French, Spanish, Arabic, Mandarin, and
          Japanese. I also interviewed a university French professor with over
          twenty years of teaching experience to better understand challenges
          from an educator&apos;s perspective.
        </p>
        <p>
          Although every learner had a different routine, the same frustrations
          surfaced again and again.
        </p>
        <p>
          The strongest insight wasn&apos;t about vocabulary or grammar. It was
          about momentum.
        </p>
        <p>
          Every participant described losing their train of thought after
          switching between multiple apps while writing. Two participants had
          already tried keeping journals in their target language but eventually
          stopped, not because they disliked journaling, but because the process
          required too much effort.
        </p>
        <p>That was the moment everything clicked.</p>
        <p>
          The writing habit already existed. The problem wasn&apos;t motivation.
          It was friction.
        </p>
      </CaseStudySection>

      <CaseStudySection title="From Research to Design">
        <p>The interviews also changed who we were designing for.</p>
        <p>
          Initially, we assumed Folio was for anyone learning a language.
          Research quickly proved otherwise.
        </p>
        <p>
          Our real audience was learners who had already built a foundation and
          wanted to actively produce language instead of passively consuming it.
        </p>
        <p>Four clear personas emerged throughout the interviews:</p>
        <ul className="list-disc space-y-2 pl-5">
          {personas.map((persona) => (
            <li key={persona}>{persona}</li>
          ))}
        </ul>
        <p>
          These insights became the foundation for every product decision that
          followed.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Designing the Experience">
        <p>
          Every feature in Folio exists because it solved a problem uncovered
          during research.
        </p>
        <p>
          Instead of forcing users to leave the page whenever they got stuck, I
          designed an inline translation shortcut that allows learners to
          translate words without interrupting their writing.
        </p>
        <p>
          New vocabulary is automatically saved as flashcards, removing the extra
          work of creating study material after each session.
        </p>
        <p>
          Daily writing prompts, tailored to CEFR proficiency levels, help users
          overcome the blank page while encouraging consistent practice.
        </p>
        <p>Throughout the process, I continually asked one question.</p>
        <p>&ldquo;Does this help people stay in the flow?&rdquo;</p>
        <p>If the answer was no, it didn&apos;t make the product.</p>
      </CaseStudySection>

      <CaseStudySection title="Testing and Iteration">
        <p>
          Once we built a working prototype, I invited one of the original
          interview participants back to test the experience, followed by
          additional beta testing sessions.
        </p>
        <p>
          Watching someone use the product revealed problems we never noticed
          while designing it.
        </p>
        <p>
          The inline translation shortcut wasn&apos;t discoverable without
          explanation, so I redesigned onboarding to introduce it immediately.
        </p>
        <p>
          The original home screen greeted new users with empty progress charts,
          which unintentionally made the experience feel discouraging before they
          had even started writing. We redesigned the entry point to encourage
          writing first and celebrate progress later.
        </p>
        <p>
          As testing continued, the interface became progressively simpler. We
          removed unnecessary visual elements, reduced distractions, and
          introduced editable journal entries after users expressed wanting to
          revisit unfinished thoughts instead of constantly starting over.
        </p>
        <p>
          Feedback from experienced founders and a university French professor
          further reinforced our direction, particularly around supporting active
          language production while remaining transparent about AI-generated
          translations.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Reflection">
        <p>
          Building Folio reinforced something I now carry into every project.
        </p>
        <p>
          Good UX isn&apos;t about adding features. It&apos;s about removing the
          friction that prevents people from achieving what they already want to
          do.
        </p>
        <p>
          The biggest lesson wasn&apos;t learning how to design a better
          interface. It was learning how much clarity comes from listening before
          building.
        </p>
        <p>
          By grounding every design decision in real conversations, we avoided
          months of building features people didn&apos;t actually need and instead
          focused on creating a product that supports the natural rhythm of
          language learning.
        </p>
      </CaseStudySection>

      <p className="border-t-2 border-border pt-8 text-base font-semibold text-ink">
        Folio is live in open beta at{" "}
        <Link
          href="https://folioapp.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline-offset-2 hover:underline"
        >
          folioapp.ca
        </Link>
      </p>
    </div>
  );
}
