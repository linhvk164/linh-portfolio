import {
  CaseStudyImagePlaceholder,
  CaseStudyList,
  CaseStudyMeta,
  CaseStudySection,
  CaseStudySections,
} from "@/components/case-studies/CaseStudySection";
import { getCaseStudyMetaItems } from "@/data/caseStudyMeta";

export function UnHabitatDesignSystemContent() {
  return (
    <CaseStudySections>
      <CaseStudySection
        eyebrow="Overview"
        title="Quality of Life Initiative Design System"
      >
        <p>
          The Quality of Life Initiative is a global platform that helps cities
           track the quality of life for their residents, and in turn, inspire
           not only the cities themselves, but also other cities and residents
           around the world. 

           This design challenge was part of the Design Team's first project
           within the Quality of Life Initiative Program. We were tasked with
           creating a design system for a global platform and developing a new
           icons and logos that would be used on future websites and marketing materials.
        </p>
        <CaseStudyMeta items={getCaseStudyMetaItems("un-habitat-design-system")} />
        <CaseStudyImagePlaceholder label="Overview image" src="/images/un-habitat/Qoli image (1).png"/>
      </CaseStudySection>

      <CaseStudySection eyebrow="Challenge" title="Designing for a platform that could scale">
        <p>
        As one of the two founding designers on the project, 
        I helped establish the visual foundation for the Quality of Life Initiative's first public platform.
        The initiative had been collecting urban quality of life data from cities around the world 
        for years, but it lacked a unified digital experience. We needed a design system that could 
        support future product development while maintaining consistency across dashboards, 
        marketing materials, and new features.
        Because the platform would serve governments, researchers, and residents globally, every component 
        needed to be scalable, accessible, and easy to recognize.
        </p>
        
        <CaseStudyImagePlaceholder label="Challenge image" src="/images/un-habitat/qoli-img.webp"/>
      </CaseStudySection>

      <CaseStudySection eyebrow="Process" title="Creating a shared visual language">
        <p>One of my primary responsibilities was redesigning the nine Quality of Life domain icons, 
          which represent the initiative's core categories:</p>
          <CaseStudyList
          items={[
            "Housing",
            "Education",
            "Health & Wellbeing",
            "Governance",
            "Environment",
            "Culture",
            "Basic Services & Mobility",
            "Social Coherence",
            "Economy",
          ]}
        />
      <p>These icons appear throughout the platform, including navigation, 
        dashboards, and data visualizations, making them one of the most
         frequently used visual elements in the product.

        I began by auditing the existing branding and iconography, identifying
         inconsistencies in style, weight, and recognizability. Through sketching 
         and iterative exploration, I developed a new icon set with a consistent 
         visual language that could scale across both digital products and marketing materials.

        Alongside the icon work, I tested color combinations against WCAG
         accessibility guidelines to ensure the interface remained readable 
         while staying aligned with the Quality of Life Initiative's visual identity.</p>
        <CaseStudyImagePlaceholder label="Process image" src="/images/un-habitat/quality of life-process.png"/>

      </CaseStudySection>

      <CaseStudySection eyebrow="Design Decisions" title="Building consistency into every interaction">
        <p>Design systems aren't just collections of components. They're tools that 
          help products feel predictable.

          Throughout the project, I contributed reusable UI components and standardized interaction 
          patterns so similar actions behaved consistently across the platform. This reduced the 
          amount of new interface patterns users needed to learn as they moved between different areas of the product.

          The redesigned domain icons also played an important usability role. Because they represent
          the platform's primary categories, users encounter them repeatedly throughout the experience.
          Designing them as a cohesive family made it easier to recognize sections at a glance and 
          strengthened the platform's overall visual consistency.

          Together, these decisions created a design system that supported future product growth while 
          making the experience easier to navigate for users.
        </p>
        <CaseStudyImagePlaceholder label="Process image" src="/images/un-habitat/Frame 746.png"/>
        <CaseStudyImagePlaceholder label="Process image" src="/images/un-habitat/quality of life-solution 3.png"/>
      </CaseStudySection>

      <CaseStudySection eyebrow="Results" title="The design system is now live">
        <div className="grid grid-cols-2 gap-4">
        <CaseStudyImagePlaceholder label="Process image" src="/images/un-habitat/results-1.jpeg"/>
        <CaseStudyImagePlaceholder label="Process image" src="/images/un-habitat/results-2.jpeg"/>
        </div>
        <CaseStudyImagePlaceholder label="Process image" src="/images/un-habitat/results-3.mov"/>

      </CaseStudySection>
    </CaseStudySections>
  );
}
