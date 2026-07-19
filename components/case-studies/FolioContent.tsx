import Link from "next/link";
import {
  CASE_STUDY_PLACEHOLDER_IMAGE,
  CaseStudyFeature,
  CaseStudyImagePlaceholder,
  CaseStudyList,
  CaseStudyPullQuote,
  CaseStudySection,
  CaseStudySections,
} from "@/components/case-studies/CaseStudySection";

const personas = [
  "International students writing assignments and emails in a second language.",
  "Professionals communicating under real workplace pressure.",
  "Bilingual individuals trying to express more personal or complex ideas with friends and family.",
  "Intermediate learners who consumed plenty of content but rarely practiced writing themselves.",
];

const folioFeatures = [
  {
    title: "Write",
    description:
      "Practice your writing with prompts built for your level, from A1 to C2.",
    imageSrc: CASE_STUDY_PLACEHOLDER_IMAGE,
  },
  {
    title: "Translate",
    description:
      "Stop opening a thousand apps. Find words you need right inside Folio.",
    imageSrc: CASE_STUDY_PLACEHOLDER_IMAGE,
  },
  {
    title: "Practice",
    description:
      "Folio automatically saves your new words into flashcards, so you can practice!",
    imageSrc: CASE_STUDY_PLACEHOLDER_IMAGE,
  },
  {
    title: "Track",
    description:
      "Watch your streak, your words, and your progress grow over time.",
    imageSrc: CASE_STUDY_PLACEHOLDER_IMAGE,
  },
];

export function FolioContent() {
  return (
    <CaseStudySections>
      <CaseStudySection eyebrow="Overview" title="Helping language learners stay in the flow">
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
          Folio began with a simple question. 
        </p>
        <CaseStudyPullQuote>What if language learners could
          stay focused on expressing their thoughts instead of managing a
          collection of disconnected tools?
        </CaseStudyPullQuote>
        <p>
          As the co-founder and founding UX/UI designer, I led the product from
          discovery research and interaction design to branding, prototyping, and
          beta testing alongside my co-founder.
        </p>
      </CaseStudySection>

      <CaseStudySection eyebrow="Problem" title="Writing shouldn't require five different apps">
        <p>
          The challenge wasn&apos;t teaching people a language. Plenty of apps
          already do that well.
        </p>
        <CaseStudyPullQuote>
          The real challenge was helping learners use the language they already knew.
        </CaseStudyPullQuote>
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

      <CaseStudySection eyebrow="Research" title="Understanding what breaks a learner's momentum">
        <p>
          Before opening Figma, I conducted six user interviews using the Mom
          Test framework. The conversations focused entirely on participants&apos;
          existing habits and frustrations rather than validating an idea.Velocity's 
          Cornerstone program at the University of Waterloo provided a clear 
          guide to the interviewing process. Two questions consistently generated 
          the richest insights:
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
          from an educator&apos;s perspective. Although every learner had a different 
          routine, the same frustrations
          surfaced again and again. The strongest insight wasn&apos;t about 
          vocabulary or grammar. It was actually about trying to keep up their momentum.
        </p>
        <p>
          Every participant described losing their train of thought after
          switching between multiple apps while writing. Two participants had
          already tried keeping journals in their target language but eventually
          stopped, not because they disliked journaling, but because the process
          required too much effort.
        </p>
        <p>That was the moment everything clicked. The writing habit already existed. 
        </p>
        <p>
          The problem: friction was the biggest demotivator.</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface p-10 rounded-xl space-y-3">
            <h3>Theme 1: Relying on multiple tools disrupts learning flow (5 of 5 participants)</h3>
            <p>Every participant uses multiple apps simultaneously during a single practice session. Switching between tools mid-task breaks concentration and often causes them to abandon the session entirely.
            </p>
            </div>
          <div className="bg-surface p-10 rounded-xl space-y-3">
            <h3>Theme 2: Without real-life context, it’s hard to remember vocabulary (5 of 5 participants)</h3>
            <p>All participants expressed that memorizing word lists doesn't translate to actual usage. Words learned in isolation are quickly forgotten. The ones who retained vocab best learned it through situations that were personally meaningful.
            </p>
          </div>
          <div className="bg-surface p-10 rounded-xl space-y-3">
            <h3>Theme 3: Existing apps get repetitive and stop challenging users (4 of 5 participants)</h3>
            <p>Duolingo was mentioned by 4 of 5 users, always negatively. The pattern: they start, enjoy the early structure, then plateau. The apps don't grow with them and they eventually stop using them.</p>
          </div>
          <div className="bg-surface p-10 rounded-xl space-y-3">
            <h3>Theme 4: Without using an app, it’s hard to track and share growth (3 of 5 participants)</h3>
            <p>Self-learners described feeling isolated. Participants who had a tutor, family member, or language partner to practice with were significantly more consistent. Those without one actively wished for accountability and community.
            </p>
          </div>   
        </div>
      </CaseStudySection>

      <CaseStudySection eyebrow="Defining the User"  title="Redefining who we were designing for">
        <p>The interviews also changed who we were designing for.</p>
        <p>
          Initially, we assumed Folio was for anyone learning a language.
          Research quickly proved otherwise.
        </p>
        <CaseStudyPullQuote>
          Our real audience was learners who had already built a foundation and
          wanted to actively produce language instead of passively consuming it.
        </CaseStudyPullQuote>
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
      <CaseStudySection eyebrow="Solution" title="Creating a writing space that keeps you in the flow">
        <p>
        Rather than replacing every language learning tool, Folio focuses on the moment learners struggle most: writing.
        </p>
        <p>
        I designed a distraction-free writing space where users can translate words inline, automatically save vocabulary for later review, and keep writing without breaking their train of thought.
        </p>
        <p>
        Every interaction was designed around one goal: protecting the learner's momentum.
        </p>
      </CaseStudySection>
      <CaseStudySection eyebrow="Design Decisions"  title="Designing around flow, not features">
        <p>
          Every feature in Folio exists because it solved a problem uncovered
          during research.
        </p>
        <p>
          Instead of forcing users to leave the page whenever they got stuck, I
          designed an inline translation shortcut that allows learners to
          translate words without interrupting their writing. They easily type in our command //
          in order to translate right in the middle of their writing!
          </p>
        <p>To encourage users to write, 
          I implemented daily writing prompts, tailored to CEFR proficiency levels, that help users
          overcome the blank page while encouraging consistent practice. These prompts can be made 
          harder or easier to suit the user's needs and challenge
          them without being overwhelmingly difficult.
        </p>
        <p> New vocabulary is automatically saved as flashcards, removing the extra
        work of creating study material after each session. Users can then review these flashcards at any time,
        making vocabulary retention easier and more effective.
        </p>
        <p> In order to help users track their progress, I implemented a progress bar 
          that shows users how much they have written, how many words they have learned, how often
          they have written, and how much translation have they used.
          
        </p>
        <p>Throughout the process, I continually asked one question.</p>
        <CaseStudyPullQuote>&ldquo;Does this help people stay in the flow?&rdquo;</CaseStudyPullQuote>
        <p>If the answer was no, it didn&apos;t make the product.</p>

      </CaseStudySection>

      <CaseStudySection eyebrow="Testing & Iteration"  title="Testing our Proof of Concept">        <p> 
          Once we built a working prototype, I invited two of the original
          interview participants back to test the experience, followed by
          additional beta testing sessions. Watching someone use the product 
          revealed problems we never noticed
          while designing it. The inline translation shortcut wasn&apos;t discoverable without
          explanation, so I redesigned onboarding to introduce it immediately. Some key improvements made included:
        </p>
        <CaseStudyList
          items={[
            "Created instructions for the inline translation",
            "The entry area is front and center as soon as users log in",
            "Added more personality to Folio's branding",
            "To reduce distractions, saved entries are stored below",
            "Removed the side panel layout to highlight the our 3 features: write, practice, progress",
          ]}
        />
        <p>
          The proof of concept was not a success as many users were unable to quickly understand how to use the product.
          They thought starting a new writing session required too many mouse clicks. Even though they were amazed
          by how you can translate words inline, the overall experience was not intuitive, 
          and not fun to use.
        </p>
        <div className="grid grid-cols-2 gap-4">
            <CaseStudyImagePlaceholder label="Add testing iteration image" src="/images/folio/proof-of-concept.png" />
            <CaseStudyImagePlaceholder label="Add testing iteration image" src="/images/folio/process-figma.png" />
            <CaseStudyImagePlaceholder label="Add testing iteration image" src="/images/folio/test-flora.JPG" />
            <CaseStudyImagePlaceholder label="Add testing iteration image" src="/images/folio/socratica-demo.webp" />
        </div>
        <p>
          As testing continued, the interface became progressively simpler. We
          removed unnecessary visual elements, reduced distractions, and
          introduced editable journal entries after users expressed wanting to
          revisit unfinished thoughts instead of constantly starting over.
        </p>
        
      </CaseStudySection>
      <CaseStudySection eyebrow="The current product" title="Folio as of July 2026">
        <p>
          After countless reiterations, github PR requests, constant feedback prioritization,
          debugging and refinement, we are proud to announce that our beta version is now live and available for anyone to try!
        </p>
        <p>We stayed true to the 4 features that were created to target 4 reaccurring problems 
          found in our research: write, translate, practice, and progress. And even included
          ways for users to personalize their experiences.</p>
        <p>Our beta version supports over 160 languages and we're working on refining the accuracy 
          of the translations for the languages we support. 
        </p>
        <div className="grid grid-cols-2 gap-4">
        <CaseStudyImagePlaceholder label="Write feature image" src="/images/folio/write.mov"/>
        <CaseStudyImagePlaceholder label="Translate feature image" src="/images/folio/translate.mov"/>
        <CaseStudyImagePlaceholder label="Practice feature image" src="/images/folio/practice.mov"/>
        <CaseStudyImagePlaceholder label="Progress feature image" src="/images/folio/progress.mov"/>
        </div>
        <CaseStudyImagePlaceholder label="Progress feature image" src="/images/folio/theme-showcase.mov"/>

      </CaseStudySection>
      <CaseStudySection eyebrow="Reflection" title="Reflection">
        <p>
          Building Folio reinforced something I now carry into every project. Good UX isn&apos;t about 
          adding features. It&apos;s about removing the
          friction that prevents people from achieving what they already want to
          do.
        </p>
        <p>
          Learning how to design a better interface, one that is more visually appealing is one thing.
          But after building Folio, I realized that the biggest lesson was learning how much clarity comes from listening before building.
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
          className="text-ink underline-offset-2 hover:underline"
        >
          folioapp.ca
        </Link>
      </p>
    </CaseStudySections>
  );
}
