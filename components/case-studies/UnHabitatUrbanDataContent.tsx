import {
  CaseStudyImagePlaceholder,
  CaseStudyImageRow,
  CaseStudyList,
  CaseStudyMeta,
  CaseStudyPullQuote,
  CaseStudySection,
  CaseStudySections,
} from "@/components/case-studies/CaseStudySection";
import { CaseStudyYouTube } from "@/components/case-studies/CaseStudyYouTube";
import { getCaseStudyMetaItems } from "@/data/caseStudyMeta";

export function UnHabitatUrbanDataContent() {
  return (
    <CaseStudySections>
      <CaseStudyImagePlaceholder label="Overview image" src="/images/un-habitat/quality of life main image.png" />

      <CaseStudySection
        eyebrow="Overview"
        title="Helping Cities Make Sense of Complex Urban Data"
      >
        
        <p>
          UN-Habitat collects Quality of Life data from cities around the world.
          The challenge wasn&apos;t a lack of information. It was the opposite.
          There were hundreds of indicators spread across multiple domains,
          making it difficult for users to quickly understand how a city was
          performing.
        </p>
        <p>
        As the 5th person hired in the Quality of Life Initiative Innovation team, 
        my team and I created and launched a global platform now with data rich 
        information from over 82 cities around the world. A working prototype 
        was launched within 5 months and along with my team, I established the 
        brand identity of future projects underneath the Initiative. Through 
        many reiterations, the platform launched globally in February 2025.
        My role was to design an experience that transformed dense datasets
        into something people could actually explore with confidence.
        </p>
        <CaseStudyMeta items={getCaseStudyMetaItems("un-habitat-urban-data")} />
        <CaseStudyImagePlaceholder label="Overview image" src="/images/un-habitat/quality of life-solution.png" />
      </CaseStudySection>

      <CaseStudySection eyebrow="Problem" title="The challenge">
        <p>
          When people are faced with a wall of numbers, they don&apos;t know
          where to start.
        </p>
        <p>
          Researchers wanted to compare cities. Government officials wanted to
          identify strengths and weaknesses. The public simply wanted to
          understand what the data meant.
        </p>
        <p>
          Everyone had different goals, but they all shared one problem. The
          information was overwhelming.
        </p>
        <CaseStudyPullQuote>
          &ldquo;How can we make data easier to understand and interact with?&rdquo;
        </CaseStudyPullQuote>
        <CaseStudyYouTube
          videoId="Acu549mjC3A"
          title="Quality of Life Initiative platform overview"
        />
      </CaseStudySection>

      <CaseStudySection eyebrow="Process" title="Presenting Data as a Whole">
        <p>
          I began by mapping how information related to one another 
          instead of immediately designing screens. I explored different ways of 
          organizing indicators, experimented with multiple visualization concepts,
          and looked for patterns that would help users compare cities without 
          constantly jumping between pages.
        </p>
        <p>
          One idea kept coming up during iterations. People naturally looked for
          summaries before they wanted details. That led me to redesign the data 
          visualization using a half sunburst
          layout. It allowed users to understand the overall picture first, then
          drill into individual indicators only when they needed more
          information.
        </p>
        <p>
          It sounds like a small decision, but it completely changed how the
          experience felt. Instead of decoding the interface, users could 
          focus on understanding the city as a whole.
        </p>
        <CaseStudyImageRow
          images={[
            {
              src: "/images/un-habitat/qoli-process.png",
              alt: "Workflow mapping for city data administration",
            },
            {
              src: "/images/un-habitat/qoli-process-2.png",
              alt: "Reducing friction in admin task flows",
            },
            {
              src: "/images/un-habitat/qoli-process-3.png",
              alt: "Grouping related admin actions together",
            },
          ]}
        />
      </CaseStudySection>
      <CaseStudyImagePlaceholder label="Design decisions image" src="/images/un-habitat/quality of life-process.png" />


      <CaseStudySection eyebrow="Design Decisions" title="What we landed on">
        <CaseStudyImagePlaceholder label="Design decisions image" src="/images/un-habitat/qoli-fan.png" />
        <p>
        Each city has their own unique sets of data, therefore, it's important to show their identity immediately. This visual hierarchy 
        helps users understand what is important to know first.
        Because we never assume all users would know what to do, clear instructions how on to interact with the platform was essential.
        In order to show that the 9 domains make up the city's quality of life, we used a fan chart to visualize the data.
        Used progressive disclosure so detailed information appeared only when needed (by hovering over the fan chart!)
        In order to show relationships between domains, indicators, and SDGs, we tagged the modal when users are hovering to learn more.
        </p>
        <CaseStudyList
          items={[
            "Clear visual hierarchy: City | Instructions | Data visualization | Detail",
            "Concise and clear instructions on how to interact with the platform",
            "Fan chart to visualize the city's quality of life",
            "Progressive disclosure to show detailed information only when needed",
            "Tags to show relationships between domains, indicators, and SDGs",
          ]}
        />
        <CaseStudyImagePlaceholder label="Design decisions image" src="/images/un-habitat/quality of life-solution 2.png" />

      </CaseStudySection>

      <CaseStudySection eyebrow="Reflection" title="Reflection">
        <p>
          One thing I learned from this project is that good design is about 
          helping people feel less overwhelmed. I have never worked as a data designer 
          and this project gave me a lot of exposure to the field. This changed not only how I see 
          data now but also how I approach design problems. The data never became less complex. 
          The experience just became easier to navigate.
        </p>
      </CaseStudySection>
    </CaseStudySections>
  );
}
