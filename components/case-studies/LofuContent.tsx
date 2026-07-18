import {
  CaseStudyImagePlaceholder,
  CaseStudyPullQuote,
  CaseStudySection,
  CaseStudySections,
} from "@/components/case-studies/CaseStudySection";

export function LofuContent() {
  return (
    <CaseStudySections>
      <CaseStudySection
        eyebrow="Overview"
        title="How might we make emotional wellness less intimidating?"
      >
        <p>
        Meet Lofu - your mind's best friend who manages emotional health through 
        gamification techniques. The Lofu app enables users to regulate mental 
        health resources while taking care of virtual pets that are based on 
        animals from countries within Asia. Lofu's end goal is to spark change 
        in the stigma surrounding mental health and well being in the Asian community.
        </p>
        <p>
        For many people, seeking mental health support is already difficult.
          Within many Asian communities, that challenge is often compounded by
          cultural stigma, language barriers, and the pressure to appear
          resilient. As a result, many people avoid asking for help until
          they&apos;re already struggling.
        </p>
        <CaseStudyImagePlaceholder label="Lofu app screens" src="/images/lofu/overview.jpg" />
        <p>Lofu began with a simple question.</p>
        <CaseStudyPullQuote>
          How might we make emotional wellness feel less intimidating to engage
          with?
        </CaseStudyPullQuote>
        <p>
          As a UX/UI designer and visual designer on a team of seven, I created
          a mobile experience that combined mental wellness resources with gentle
          gamification to encourage consistent self-reflection in a way that felt
          welcoming rather than clinical.
        </p>
      </CaseStudySection>
      
      <CaseStudySection
        eyebrow="Problem"
        title="Lowering the barrier to the first step"
      >
        <p>
          Most mental health apps ask users to confront difficult emotions the
          moment they open the app. For someone already hesitant to seek support,
          that can feel overwhelming. Our challenge wasn&apos;t designing another
          mental health resource. It was designing an experience that lowered the
          emotional barrier to taking the first step.
        </p>
        <CaseStudyPullQuote>We wanted users to feel comforted, not judged.</CaseStudyPullQuote>
      </CaseStudySection>

      <CaseStudySection eyebrow="Research" title="Understanding cultural barriers">
        <p>
          Before exploring solutions, we researched the unique barriers that
          prevent many people within Asian communities from accessing mental
          health support. Several themes consistently emerged.</p>
        <p>
          Mental health was often viewed as something that should remain
          private, making it difficult for individuals to ask for help without
          fearing judgment. Language barriers and limited awareness of
          culturally relevant resources created additional obstacles, even for
          those actively looking for support.
        </p>
        
        <CaseStudyImagePlaceholder label="Research insights" src="/images/lofu/market-research.jpg" />
        <p>These findings shifted our focus.</p>

        <CaseStudyPullQuote>
          Instead of asking how we could guide people to seek therapy, we
          asked how we could create an experience that firstly, encourages them to take care of themselves.
        </CaseStudyPullQuote>

      </CaseStudySection>

      <CaseStudySection
        eyebrow="Solution"
        title="Designing around small, approachable habits"
      >
        <p>
          Rather than centering the experience around symptoms or diagnoses, we
          focused on building positive daily habits through small, approachable
          interactions.
        </p>
        <p>
          Gamification became an important design tool, not because we wanted
          the app to feel like a game, but because caring for something often
          feels easier than caring for ourselves.
        </p>
        <p>That insight inspired Lofu&apos;s virtual companion system.</p>
        <p>
          Users complete short activities that encourage emotional awareness
          while simultaneously caring for a virtual pet, helping transform
          self-care into a routine that feels encouraging instead of
          overwhelming.
        </p>
        <p>
          To make the experience more culturally welcoming, we also designed
          multilingual support and created virtual pets inspired by animals found
          across different regions of Asia, giving the product a stronger sense
          of familiarity and representation.
        </p>
        <CaseStudyImagePlaceholder label="Lofu app screens" src="/images/lofu/key-functions.jpg" />
      </CaseStudySection>

      <CaseStudySection eyebrow="Visual Identity" title="A warm, handcrafted aesthetic">
        <p>
          I wanted Lofu to feel warm, personal, and comforting from the very
          first screen.
        </p>
        <p>
          Many mental health apps rely on clean, clinical interfaces. Instead, I
          explored a softer visual language inspired by traditional art
          materials.
        </p>
        <p>
          I illustrated each virtual pet by hand using colored pencils before
          scanning and refining the artwork digitally. Preserving the imperfect
          textures of paper and pencil helped create a handcrafted aesthetic that
          felt gentle, approachable, and distinctly different from the polished
          look of many wellness apps.
        </p>
        <p>
          This visual direction was reinforced through warm colors, playful
          illustrations, and soft interface elements designed to reduce feelings
          of intimidation.
        </p>
        <CaseStudyImagePlaceholder label="Lofu visual identity" src="/images/lofu/visual-influences.jpg" />
        <CaseStudyImagePlaceholder label="Lofu visual identity" src="/images/lofu/colors.jpg" />
        <CaseStudyImagePlaceholder label="Lofu visual identity" src="/images/lofu/introducing-lofu.png" />


      </CaseStudySection>

      <CaseStudySection eyebrow="Testing & Iteration" title="Refining for clarity and warmth">
        <p>
          Across two rounds of usability testing with participants of Asian
          descent, we refined both the experience and the interface based on
          participant feedback.
        </p>
        <p>
          Each iteration focused on making interactions feel simpler, more
          welcoming, and easier to understand. We refined navigation, clarified
          task flows, and balanced the gamified elements so they supported
          emotional wellness without distracting from it.
        </p>
        <p>
          By the final iteration, the experience encouraged users to build
          small, consistent habits through guided activities, progress tracking,
          and caring for their virtual companion, making mental wellness feel like
          a natural part of everyday life rather than something reserved for
          moments of crisis.
        </p>
        <div className="gap-0">
        <CaseStudyImagePlaceholder label="Testing and iteration"src="/images/lofu/onboarding.jpg"/>
        <CaseStudyImagePlaceholder label="Testing and iteration"src="/images/lofu/homepage.jpg"/>
        <CaseStudyImagePlaceholder label="Testing and iteration"src="/images/lofu/progress.jpg"/>
        <CaseStudyImagePlaceholder label="Testing and iteration"src="/images/lofu/self-care.jpg"/>
        <CaseStudyImagePlaceholder label="Testing and iteration"src="/images/lofu/chat.jpg"/>
        <CaseStudyImagePlaceholder label="Testing and iteration"src="/images/lofu/settings.jpg"/>
        </div>
      </CaseStudySection>

      <CaseStudySection eyebrow="Reflection" title="Designing with empathy first">
        <p>
          Lofu taught me that designing for sensitive topics requires empathy
          long before visual design.
        </p>
        <p>
          The most important challenge wasn&apos;t creating beautiful screens.
          It was understanding how cultural context shapes the way people
          interact with products.
        </p>
        <p>
          I also learned that gamification works best when it supports a deeper
          purpose. In Lofu, the virtual pets weren&apos;t simply decorative
          features. They served as emotional anchors that encouraged consistency,
          reduced intimidation, and helped create an experience that felt
          supportive from the very first interaction.
        </p>
        <CaseStudyImagePlaceholder
          label="Thank you message"
          src="/images/lofu/ty!.png"
          bare
        />
      </CaseStudySection>
    </CaseStudySections>
  );
}
