import Link from "next/link";
import {
  CASE_STUDY_PLACEHOLDER_IMAGE,
  CaseStudyImage,
  CaseStudyImagePlaceholder,
  CaseStudyImageRow,
  CaseStudyPullQuote,
  CaseStudySection,
  CaseStudySections,
} from "@/components/case-studies/CaseStudySection";
import { CaseStudyImageSlideshow } from "@/components/case-studies/CaseStudyImageSlideshow";

export function ChordioContent() {
  return (
    <CaseStudySections slug="chordio">
      <CaseStudySection
        eyebrow="Overview"
        title="Rethinking how musicians save and organize ideas"
      >
        <p>
          Actual songwriting rarely happens in a studio. Like all good ideas,
          inspirations for songs appear right before bed, in the middle of a 
          bus ride, while strumming on the couch, or in the
          middle of a walk. The problem is that capturing those moments often
          means juggling multiple apps, there must be a better way.
        </p>
        <CaseStudyPullQuote>
          What if musicians could capture lyrics, chords, recordings, and song
          ideas all in one place?
        </CaseStudyPullQuote>
        <p>
          While there are numerous note-taking and voice memo apps available, 
          none are tailored specifically for musicians, particularly those 
          using acoustic instruments like the ukulele, guitar, or piano. 
          I identifed a real lack of tools to help musicians document 
          their creations, and collaborate. Enter Chordio – an online application 
          designed to streamline the creative process for musicians by seamlessly 
          integrating the functionality of a notes app with a voice memo app.
        </p>
        <CaseStudyImagePlaceholder label="overview" src="/images/songwriting-app/hero-image.png" />

      </CaseStudySection>

      <CaseStudySection
        eyebrow="Problem"
        title="Creativity interrupted by too many apps"
      >
        <p>
          During interviews, I noticed musicians had developed surprisingly
          complicated workflows just to remember a song idea. Someone might
          record a voice memo, type lyrics into Notes, save chords in another
          app, then send recordings to friends for feedback.
        </p>
        <CaseStudyPullQuote>
        "How might we use design to help musicians manage their creations seamlessly 
        and efficiently?"
        </CaseStudyPullQuote>
        <p>
         The biggest problem wasn&apos;t that these tools were bad. It was that
        creativity was constantly interrupted by switching between them. 
        I wanted to explore whether one focused experience could help
        musicians capture inspiration before it disappeared.
        </p>
      </CaseStudySection>
      <CaseStudyImagePlaceholder label="problem" src="/images/songwriting-app/user pain points.png" />


      <CaseStudySection eyebrow="Research" title="Understanding how musicians work">
        <p>
          I interviewed musicians from different musical backgrounds to better
          understand how they wrote, organized, and revisited their ideas.
          Although everyone&apos;s creative process looked a little different,
          the same frustrations appeared repeatedly.
        </p>
        <p>
          The most common pain points included switching between multiple apps,
          struggling to find old recordings or unfinished songs, keeping lyrics
          and chords disconnected from recordings, and having no simple way to
          collaborate on works in progress.
        </p>
        <p>
          Alongside user interviews, I analyzed existing songwriting and
          recording apps to understand common interaction patterns, identify
          opportunities, and uncover gaps in the current experience.
        </p>
      </CaseStudySection>

      <CaseStudySection eyebrow="Ideation" title="Exploring ideas before polished screens">
        <p>
          Rather than jumping straight into polished screens, I explored a wide
          range of ideas through Crazy 8s, rapid sketching, and low fidelity
          wireframes.
        </p>
        <p>
          The goal wasn&apos;t to design the interface yet. It was to figure out
          the quickest and most natural way for musicians to capture an idea
          without breaking their creative momentum.
        </p>
        <p>
          Once the strongest concepts emerged, I mapped the core user flows and
          translated them into wireframes to validate the experience before
          moving into visual design.
        </p>
        <CaseStudyImageRow
          images={[
            {
              src: "/images/songwriting-app/chordio-moodboard.png",
              alt: "Chordio Moodboard in Figma",
            },
            {
              src: "/images/songwriting-app/chordio-workspace.png",
              alt: "Chordio Workspace in Figma",
            },
            {
              src: "/images/songwriting-app/exploration.png",
              alt: "Low-fidelity Chordio wireframes",
            },
          ]}
        />
        
      </CaseStudySection>

      <CaseStudySection eyebrow="Prototyping" title="Refining the core experience">
        <p>
          The first prototype focused on solving the core problem instead of
          trying to build every possible feature.
        </p>
        <p>
          I prioritized the moments that mattered most: capturing an idea
          quickly, organizing it effortlessly, and making it easy to return to
          later.
        </p>
        <p>
          Across multiple rounds of usability testing, I refined the navigation,
          simplified interactions, and removed unnecessary friction. Each
          iteration uncovered new opportunities to make the experience feel
          faster, clearer, and more intuitive.
        </p>
        <CaseStudyImageSlideshow
          slides={[
            {
              src: "/images/songwriting-app/Low-fis.png",
              alt: "Low-fidelity Chordio wireframes",
            },
            {
              src: "/images/songwriting-app/Medium-fis.png",
              alt: "Mid-fidelity Chordio prototype",
            },
            {
              src: "/images/songwriting-app/High-fis.png",
              alt: "High-fidelity Chordio mockup",
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Building"
        title="Bringing the idea to life with AI"
      >
        <p>
          After validating the experience through design, I wanted to see if the
          concept could become a real product.
        </p>
        <p>
          Using Windsurf AI, I translated my UX designs into a{" "}
          <Link
            href="https://chordio-linhs-projects-e35fe93f.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline-offset-2 hover:underline"
          >
            functioning web application
          </Link>{" "}
          without having a traditional software engineering background. Working
          alongside AI allowed me to rapidly prototype interactions, experiment
          with features, and better understand the tradeoffs between ideal user
          experiences and technical implementation.
        </p>
        <p>
          Although the final proof of concept differs slightly from the original
          prototype, the process completely changed how I think about product
          design. It taught me to consider technical constraints earlier, design
          with implementation in mind, and use AI as a collaborative tool to turn
          ideas into working products.
        </p>
        <p>
          Looking back, Chordio became much more than a songwriting app. It was
          my first experience taking a product from an idea to research, design,
          branding, and a functioning prototype. More importantly, it
          reinforced a lesson I still carry into every project today. Great UX
          isn&apos;t about adding more features. It&apos;s about removing
          friction so people can stay focused on what they actually came to do.
        </p>
      </CaseStudySection>
    </CaseStudySections>
  );
}
