export type UnHabitatCaseStudy = {
  slug: string;
  year: string;
  productName: string;
  title: string;
  summary: string;
  tagList: string[];
  coverImage: string;
  coverVideo?: string;
  externalUrl?: string;
  sections: {
    overview: string[];
    challenge: string[];
    process: string[];
    uxDecisions: string[];
    reflection: string[];
  };
};

export const unHabitatCaseStudies: UnHabitatCaseStudy[] = [
  {
    slug: "un-habitat-urban-data",
    year: "2025",
    productName: "Quality of Life Initiative",
    title: "Helping Cities Make Sense of Complex Urban Data",
    summary:
      "Designing an experience that transformed dense Quality of Life datasets into something people could explore with confidence.",
    tagList: ["UX/UI", "Data Visualization", "Civic Tech"],
    coverImage: "/images/un-habitat/quality of life main image.png",
    coverVideo: "/images/un-habitat/qoli-cover-video.mov",
    externalUrl: "https://www.qolimpact.com",
    sections: {
      overview: [
        "UN-Habitat collects Quality of Life data from cities around the world. The challenge wasn't a lack of information. It was the opposite. There were hundreds of indicators spread across multiple domains, making it difficult for users to quickly understand how a city was performing.",
        "My role was to design an experience that transformed dense datasets into something people could actually explore with confidence.",
      ],
      challenge: [
        "When people are faced with a wall of numbers, they don't know where to start.",
        "Researchers wanted to compare cities. Government officials wanted to identify strengths and weaknesses. The public simply wanted to understand what the data meant.",
        "Everyone had different goals, but they all shared one problem. The information was overwhelming.",
        "Instead of asking \"How can we show more data?\", I started asking, \"How can we make this data easier to think about?\"",
        "That shift changed how I approached the project.",
      ],
      process: [
        "I began by mapping how information related to one another instead of immediately designing screens.",
        "I explored different ways of organizing indicators, experimented with multiple visualization concepts, and looked for patterns that would help users compare cities without constantly jumping between pages.",
        "One idea kept coming up during iterations. People naturally looked for summaries before they wanted details.",
        "That led me to redesign the data visualization using a half sunburst layout. It allowed users to understand the overall picture first, then drill into individual indicators only when they needed more information.",
        "It sounds like a small decision, but it completely changed how the experience felt.",
        "Instead of decoding the interface, users could focus on understanding the city.",
      ],
      uxDecisions: [
        "Organized information into a clearer hierarchy",
        "Reduced cognitive load by surfacing high-level insights first",
        "Improved comparison between Quality of Life domains",
        "Used progressive disclosure so detailed information appeared only when needed",
        "Refined visual hierarchy to guide attention naturally",
      ],
      reflection: [
        "One thing I learned from this project is that good UX isn't about making information simpler.",
        "It's about helping people feel less overwhelmed.",
        "The data never became less complex. The experience just became easier to navigate.",
      ],
    },
  },
  {
    slug: "un-habitat-admin",
    year: "2025",
    productName: "Quality of Life Initiative",
    title: "Simplifying the Way Cities Manage Their Data",
    summary:
      "Making administrative workflows for uploading, reviewing, and maintaining Quality of Life data feel clear instead of stressful.",
    tagList: ["UX/UI", "Admin Dashboard", "Workflow Design"],
    coverImage: "/images/un-habitat/cityexplorer-main-image.png",
    sections: {
      overview: [
        "Behind every public dashboard was a much larger system that city administrators used every day.",
        "They were responsible for uploading datasets, reviewing indicators, updating information, and making sure everything stayed accurate.",
        "My job was to make those workflows feel clear instead of stressful.",
      ],
      challenge: [
        "Administrative platforms are rarely exciting.",
        "They're full of forms, tables, permissions, and edge cases.",
        "But they're also where mistakes happen.",
        "A confusing workflow doesn't just frustrate users. It can slow down an entire organization or lead to inaccurate data being published.",
        "Before designing anything, I wanted to understand how people actually completed their work.",
      ],
      process: [
        "I mapped the end-to-end workflows before opening Figma.",
        "Breaking each task into smaller steps helped me identify where users were making unnecessary decisions or switching context too often.",
        "Some actions required jumping between different pages.",
        "Others buried important information beneath secondary actions.",
        "Instead of redesigning everything, I focused on reducing friction.",
        "Sometimes that meant reorganizing layouts.",
        "Sometimes it meant grouping related actions together.",
        "Sometimes it simply meant changing the order information appeared.",
        "Small changes added up quickly.",
      ],
      uxDecisions: [
        "Simplified multi-step workflows",
        "Reduced unnecessary navigation between pages",
        "Grouped related actions together",
        "Improved filtering and information hierarchy",
        "Designed clear status indicators and error states",
        "Created reusable interaction patterns across the platform",
      ],
      reflection: [
        "This project reminded me that efficiency is a user experience too.",
        "Nobody opens an admin dashboard because they want to spend time there.",
        "The best outcome is when people stop thinking about the interface altogether and simply get their work done.",
      ],
    },
  },
  {
    slug: "un-habitat-design-system",
    year: "2024",
    productName: "Quality of Life Initiative",
    title: "Building a Design System for a Growing Global Platform",
    summary:
      "Expanding and refining a shared design system so multiple designers and developers could ship consistent experiences at scale.",
    tagList: ["UX/UI", "Design Systems", "Accessibility"],
    coverImage: "/images/un-habitat/qoli-icons.png",
    sections: {
      overview: [
        "As the platform continued growing, consistency became just as important as new features.",
        "Multiple designers and developers were contributing across different areas of the product, so every new component needed to feel like part of the same experience.",
        "I contributed to expanding and refining the design system to support that growth.",
      ],
      challenge: [
        "Without shared standards, small inconsistencies start appearing everywhere.",
        "Buttons behave differently.",
        "Spacing changes from page to page.",
        "Colors drift over time.",
        "None of these issues seem major on their own, but together they increase cognitive load and make products feel less trustworthy.",
        "The challenge wasn't just designing components.",
        "It was creating a system that could scale.",
      ],
      process: [
        "Whenever I designed something new, I thought about whether it could become reusable later.",
        "Instead of solving one screen at a time, I looked for patterns across the platform.",
        "I refined components, standardized layouts, and made sure interactions behaved consistently no matter where users encountered them.",
        "Accessibility was also a major consideration throughout the project.",
        "I tested color combinations against WCAG guidelines and made design decisions that balanced accessibility with the UN-Habitat visual identity.",
        "I also redesigned the platform's icon library, creating a cohesive set of icons that made navigation easier while maintaining a consistent visual language.",
      ],
      uxDecisions: [
        "Expanded reusable design components",
        "Standardized interaction patterns",
        "Improved accessibility through WCAG-compliant color choices",
        "Redesigned domain and supporting icon libraries",
        "Increased consistency across multiple product experiences",
      ],
      reflection: [
        "Design systems aren't just about saving designers time.",
        "They're about helping users build confidence.",
        "When every interaction feels familiar, people spend less energy figuring out the interface and more energy accomplishing their goals.",
      ],
    },
  },
];

export const unHabitatCaseStudySlugs = unHabitatCaseStudies.map(
  (study) => study.slug,
);

export function getUnHabitatCaseStudy(
  slug: string,
): UnHabitatCaseStudy | undefined {
  return unHabitatCaseStudies.find((study) => study.slug === slug);
}
