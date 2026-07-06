import Image from "next/image";
import { CaseStudySection } from "@/components/case-studies/CaseStudySection";
import { publicPath } from "@/lib/assets";

const meta = [
  { label: "Year", value: "2023" },
  { label: "Client", value: "Start-up" },
  { label: "Industry", value: "Music / Productivity Tools" },
  { label: "Project Duration", value: "1 year" },
  { label: "Role", value: "Founder, UX/UI Designer" },
  { label: "Team Size", value: "2" },
];

function CaseStudyImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] bg-surface">
      <Image
        src={publicPath(src)}
        alt={alt}
        width={1200}
        height={800}
        className="h-auto w-full"
        sizes="(max-width: 768px) 100vw, 672px"
      />
    </div>
  );
}

export function ChordioContent() {
  return (
    <div className="space-y-12">
      <CaseStudySection title="Overview">
        <p>
          Songwriting rarely happens in a studio. Ideas appear during a
          late-night practice session, while strumming on the couch, or in the
          middle of a walk. The problem is that capturing those moments often
          means juggling multiple apps, interrupting the creative flow.
        </p>
        <p>
          Chordio started from a simple question. What if musicians could
          capture lyrics, chords, recordings, and song ideas all in one place?
        </p>
        <p>
          As the founder and UX/UI designer, I led the project from user
          research and interaction design to branding, prototyping, and
          eventually building a working proof of concept using AI-assisted
          development.
        </p>
        <dl className="grid gap-4 border-t-2 border-border pt-6 sm:grid-cols-2">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-base font-semibold text-ink">{item.label}</dt>
              <dd className="mt-1 text-base leading-relaxed text-ink-muted">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </CaseStudySection>

      <CaseStudySection title="The Challenge">
        <p>
          During interviews, I noticed musicians had developed surprisingly
          complicated workflows just to remember a song idea. Someone might
          record a voice memo, type lyrics into Notes, save chords in another
          app, then send recordings to friends for feedback.
        </p>
        <p>
          The biggest problem wasn&apos;t that these tools were bad. It was that
          creativity was constantly interrupted by switching between them.
        </p>
        <p>
          I wanted to explore whether one focused experience could help
          musicians capture inspiration before it disappeared.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Research">
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
        <CaseStudyImage
          src="/images/songwriting-app/user pain points.png"
          alt="Common pain points identified through musician interviews"
        />
      </CaseStudySection>

      <CaseStudySection title="Ideation">
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
        <CaseStudyImage
          src="/images/songwriting-app/Low-fis.png"
          alt="Low-fidelity wireframes for Chordio"
        />
      </CaseStudySection>

      <CaseStudySection title="Prototyping">
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
        <div className="grid gap-4 sm:grid-cols-3">
          <CaseStudyImage
            src="/images/songwriting-app/Low-fis.png"
            alt="Low-fidelity Chordio prototype"
          />
          <CaseStudyImage
            src="/images/songwriting-app/Medium-fis.png"
            alt="Mid-fidelity Chordio prototype"
          />
          <CaseStudyImage
            src="/images/songwriting-app/High-fis.png"
            alt="High-fidelity Chordio mockup"
          />
        </div>
      </CaseStudySection>

      <CaseStudySection title="Bringing the idea to life with AI">
        <p>
          After validating the experience through design, I wanted to see if the
          concept could become a real product.
        </p>
        <p>
          Using Windsurf AI, I translated my UX designs into a functioning web
          application without having a traditional software engineering
          background. Working alongside AI allowed me to rapidly prototype
          interactions, experiment with features, and better understand the
          tradeoffs between ideal user experiences and technical implementation.
        </p>
        <CaseStudyImage
          src="/images/songwriting-app/MusicMemo Hero Image.png"
          alt="Chordio proof of concept website"
        />
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
    </div>
  );
}
