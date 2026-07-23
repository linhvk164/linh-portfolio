import {
  CaseStudyImagePlaceholder,
  CaseStudyImageRow,
  CaseStudyList,
  CaseStudyPullQuote,
  CaseStudySection,
  CaseStudySections,
} from "@/components/case-studies/CaseStudySection";

export function UnHabitatAdminContent() {
  return (
    <CaseStudySections slug="un-habitat-admin">
      <CaseStudySection
        eyebrow="Overview"
        title="Making stressed city administrators a little less stressed :)"
      >
        <p>
          Behind every public dashboard was a much larger system that city
          administrators used every day. This is where they were responsible 
          for uploading datasets, reviewing indicators,
          updating information, and making sure everything stayed accurate.
        </p>
        <p>
          As part of my work at the UN-Habitat's Quality of Life platform,
          my job was to create workflows for city administrators to manage their data. 
          My goal was to make those workflows feel clear instead of stressful.
        </p>
        <CaseStudyImagePlaceholder label="Overview image" src="/images/un-habitat/cityexplorer-main-image.png" />
      </CaseStudySection>

      <CaseStudySection eyebrow="Problem" title="An Existing Confusing Workflow">
        <p>In order for the data on the Quality of Life platform to be live, cities
          around the world that has joined the Initiative are required to
          enter and maintain their data. Before the Innovation team was created, 
          the UN have been working manually with cities to explain the process,collect the data, 
          upload it via Excel files, check for errors, and manually updated on the platform.
          This administrative workflow is rarely exciting. They're full of forms, tables, 
          permissions, and edge cases. Not to mention, it was also time-consuming and error-prone. </p>
        <CaseStudyPullQuote>A confusing workflow doesn't just frustrate users. It can slow down an entire organization or lead to inaccurate data being published.</CaseStudyPullQuote>
        <p>Before designing anything, I wanted to understand how people actually completed their work.</p>
        <div className="grid grid-cols-2 gap-4">
        <CaseStudyImagePlaceholder label="Challenge image" src="/images/un-habitat/implementation-flow.png"/>
        <CaseStudyImagePlaceholder label="Challenge image" src="/images/un-habitat/problem.png"/>
        </div>

        </CaseStudySection>

      <CaseStudySection eyebrow="Process" title="Understanding the Workflow">
        <p>If I'm being honest, this design challenge was one of the most confusing 
          projects I have worked on in a while.
          This huge process consisted of 3 main steps: Joining, Onboarding, and Implementing.
          All of which included multiple sub-steps and processes. 
          I had to understand the entire workflow of how cities upload their data, 
          how the UN-Habitat team reviews and approves the data, and how the data is then published on the platform.
          (Thank god for Connie, my designer coworker!)
        </p>
        <p>
          Together, we broke each tasks into smaller steps. Clearly defining 
          how each action affects the different stakeholders. 
          This helped us identify where users were making unnecessary
           decisions or switching context too often.
        </p>
        <div className="grid grid-cols-2 gap-4">
        <CaseStudyImagePlaceholder label="Challenge image" src="/images/un-habitat/brainstorm-2.png"/>
        <CaseStudyImagePlaceholder label="Challenge image" src="/images/un-habitat/brainstorm.png"/>
        </div>
        <CaseStudyImagePlaceholder label="Challenge image" src="/images/un-habitat/process.png"/>
        
      </CaseStudySection>

      <CaseStudySection eyebrow="Design Decisions" title="How can we use design to help city administrators?">
      <CaseStudyList
          items={[
            "Leverage tech to automate processes",
            "Remove repeatitive tasks",
            "Simplify the multi-step workflows",
            "Reorganize and group related actions together",
            "Improve filtering and information hierarchy",
            "Design clear status indicators and error states",
            "Create reusable interaction patterns across the platform",
          ]}
        />
        <p>
          Our city administrators are not always tech-savvy. Our North Star
          is to make their lives easier. We want to reduce the amount of time 
          they spend on just understanding the process and the platform. This meant
          that we leveraged tech heavily in order to automate processes where possible.
        </p>
        <p>
          For example, we created a form that collects the city's information which
          later is used to automatically populate fields in documents and emails. We also
          used automated emails to send reminders, confirm uploads, and more. The team also
          implemented a system that auto flags data that is missing or or might be incorrect,
          and prompts the user to correct it. This reduced a considerable amount of manual 
          work for the UN team, meaning they are able to 
          focus on verifying the data and approving the uploads.
        </p>
        <CaseStudyImagePlaceholder label="Challenge image" src="/images/un-habitat/problem-2.png"/>
      </CaseStudySection>

      <CaseStudySection eyebrow="Solution" title="How did we implement the solution?">
        <p>
          After we have clearly understood the problem space, the existing workflow, 
          and defined the design goals, let's look at how we implemented the solution.
        </p>
        <div className="grid grid-cols-[7fr_3fr] gap-4">
          <CaseStudyImagePlaceholder label="Challenge image" src="/images/un-habitat/joining.mov"/>
          <div className="flex flex-col justify-center gap-4">
          <h3>Joining</h3>
          <CaseStudyList
          items={[
            "Create a form to collect the city's information",
            "Automatically populate fields in documents and emails",
            "Send out documents to all stakeholders for review",
            "Collect signatures within the platform to increase efficiency",
          ]}
        />
          </div>
        </div> 
        <div className="grid grid-cols-[7fr_3fr] gap-4">
          <CaseStudyImagePlaceholder label="Challenge image" src="/images/un-habitat/onboarding.mov"/>
          <div className="flex flex-col justify-center gap-4">
          <h3>Onboarding</h3>
          <CaseStudyList
          items={[
            "Created a new onboarding process for cities to follow",
            "Replaced manual calls with learning modules and videos",
            "Automatically reminds cities, send reminders, and confirm uploads",
          ]}
        />
          </div>
        </div> 
        <div className="grid grid-cols-[7fr_3fr] gap-4">
          <CaseStudyImagePlaceholder label="Challenge image" src="/images/un-habitat/Implementing.mov"/>
          <div className="flex flex-col justify-center gap-4">
          <h3>Implementing</h3>
          <CaseStudyList
          items={[
            "Created a new data input process for cities to follow",
            "Handle and store data, forms, photos, and videos uploads",
            "Automatically flag data that is missing or incorrect",
            "Allow cities and the UN team to review and approve the data",
          ]}
        />
          </div>
        </div> 
      </CaseStudySection>
      <CaseStudySection eyebrow="Reflection" title="What I learned">
        <p>
          Though challenging, this project was a great learning experience. 
          It reinforced the importance of the Empathy step in the design process.
          I took my time to really understand the entire workflow of how cities upload their data,
          how the UN-Habitat team reviews and approves the data, and how the data is then published on the platform.
          This helped me design a solution that would help the city administrators to be more efficient and effective in their work.
        </p>
      </CaseStudySection>
    </CaseStudySections>
  );
}
