/**
 * About page content + carousel.
 *
 * Carousel images live in: public/images/about/
 * Add files there, then list them in `aboutCarousel` below.
 */

export type AboutCarouselSlide = {
  src: string;
  alt: string;
};

export type AboutSection = {
  /** Section heading — first one is typically "About Linh" */
  heading: string;
  paragraphs: string[];
};

export type AboutExperience = {
  role: string;
  org: string;
  dates: string;
  /** Optional short summary; prefer `bullets` when present */
  description?: string;
  bullets?: string[];
};

/** Fixed-height carousel slides (object-cover keeps height consistent). */
export const aboutCarousel: AboutCarouselSlide[] = [
  // Example — replace / add your photos in public/images/about/
  // { src: "/images/about/photo-1.jpg", alt: "Linh at work" },
  {
    src: "/images/general/Profile pic.webp",
    alt: "Linh Khuong",
  },
  {
    src: "/images/about/China outdoor.webp",
    alt: "in China",
  },
  {
    src: "/images/about/China.webp",
    alt: "in China",
  },
  {
    src: "/images/about/DSCF4503.webp",
    alt: "in Canada",
  },
  {
    src: "/images/about/IMG_6030.webp",
    alt: "Performing at a festival",
  },
  {
    src: "/images/about/IMG_6496.webp",
    alt: "in China with friends",
  },
  {
    src: "/images/about/Work trip picture.webp",
    alt: "UN-Habitat work trip",
  },
];

/** Shown after bio sections, always immediately before the tool stack. */
export const aboutCta =
  "If you'd like to learn more about my work or want to chat, don't hesitate to reach out over email or LinkedIn. 🎉";

/** Homepage about block (landing page only — /about keeps aboutSections). */
export const homeAbout = {
  brow: "A little birdie told me...",
  heading: "You're looking for a Designer?",
  paragraphs: [
    "Hey there, I'm Linh, a UX/UI designer from Vietnam, based in Canada. Most recently, I worked as a UX/UI Designer at UN-Habitat's Quality of Life Initiative. We created a platform to showcase 170+ cities' quality of life.",
    "My goal is to understand people, empathize with their challenges, and help them find solutions through intuitive and insightful interactions.",
  ],
} as const;

export const aboutSections: AboutSection[] = [
  {
    heading: "About Linh",
    paragraphs: [
      "Hey there, I'm Linh, a UX/UI designer from Vietnam, based in Canada.",
      "I love all things design aka art that is useful and practical. I enjoy creating digital products that simplify complexity and make information easier to understand and use.",
      "Most recently, I worked as a UX/UI Designer at UN-Habitat’s Quality of Life Initiative! We created a platform to showcase over 170 cities’ quality of life and it was an incredibly rewarding and informative journey.",
      "From contributing to a global urban data platform to exploring AI-powered creative tools, my work sits at the intersection of design, technology, and human behavior. I’m especially interested in using design to support real communities and create meaningful, human-centered experiences.",
      "My goal when it comes to design is to understand people, to have empathy towards the challenges they are presented with, and to help them find solutions through intuitive and insightful interactions.",
    ],
  },
  {
    heading: "How I Work",
    paragraphs: [
      "I believe in building fast and learning faster. Don't wait for the perfect plan, build something real, put it in front of people, and let their reactions tell you what to fix next. Every wrong turn teaches you something faster than sitting around debating it would.",
      "I'm quick to use whatever gets me there faster. If a tool can do something better than I can, I use it. If it's outside my skillset, I find someone who's great at it instead of learning it from scratch.",
      "I also believe in surrounding yourself with the right people early. I joined Velocity's Cornerstone Program to build a network of mentors and founders around me. Being immersed in a fast-paced startup environment sharpens how you think, and pushes you toward iteration instead of waiting for a perfect plan that doesn't exist yet.",
    ],
  },
];

export const aboutExperience: AboutExperience[] = [
  {
    role: "Contract UX/UI Designer",
    org: "United Nations Quality of Life Initiative",
    dates: "Jul 2024 – Jan 2026",
    bullets: [
      "Designed a global data platform used across **170+ cities** and **40 countries**, driving **$20M** in pro bono funding and influencing city policy through accessible visualizations and streamlined admin workflows.",
      "Implemented **WCAG 2.1** compliant data visualizations, enterprise CMS workflows, and an AI agent trained on city laws and regulations, enabling government adoption where accessibility compliance is a prerequisite for public-sector deployment.",
      "Built a **200+ component design system** that cut design-to-development handoff time by **50%**, enabling rapid iteration across web and mobile.",
      "Scaled onboarding workflows that grew city adoption by **174%** (**62 to 170+ cities**) within **6 months**, validating the platform could handle rapid government-scale rollout.",
      "Shaped product strategy through user interviews and usability testing with **10 cross-functional teammates**, **25+ city officials**, and global stakeholders.",
    ],
  },
  {
    role: "Contract Product Designer",
    org: "Quality of Life Initiative Hackathon Program",
    dates: "Jun 2025 – Jan 2026",
    bullets: [
      "Led product strategy, creative direction, and brand identity for the UN Hackathon program, growing it from a single pilot into a three-event series that secured repeat sponsor commitments.",
      "Scaled the hackathon from **80+** to **300+ participants** across three events in **Canada, China, and Ghana**, spanning **6+ university faculties**.",
      "Designed and built the event platform using **Cursor AI** and **Vercel**, streamlining registration and sponsor outreach.",
      "Managed end-to-end event logistics, coordinating **10 volunteers** and **5 judges** through planning and execution.",
    ],
  },
  {
    role: "Lead UX/UI Designer",
    org: "Tako Inc.",
    dates: "Apr 2023 – Aug 2023",
    bullets: [
      "Led end-to-end product design for a B2B logistics platform connecting Canada–Japan trade, taking it from concept to launch in **four months**.",
      "Accelerated MVP development by **30%** through rapid iteration and continuous validation of technical feasibility, enabling the four-month launch timeline.",
      "Designed responsive interfaces and a scalable design system that increased user engagement by **40%**.",
    ],
  },
  {
    role: "Brand and Web Designer",
    org: "Freelance",
    dates: "Sept 2021 – Present",
    bullets: [
      "Designed end-to-end websites and brand identities for **8+ local entrepreneurs**, translating business goals into conversion-focused user flows and navigation that supported client launches.",
      "Created social media templates for health & beauty small businesses, enabling consistent brand direction across **Instagram, TikTok, and Facebook** without ongoing design support.",
    ],
  },
];

export const aboutLeadership: AboutExperience[] = [
  {
    role: "Visual Designer",
    org: "Gender Equity Tech Waterloo Region",
    dates: "May 2026 – Present",
    bullets: [
      "Designed branding strategy and visual identity for an initiative promoting gender equity in tech, increasing visibility for underrepresented groups in the local tech community.",
      "Hosted and coordinated events that expanded representation and connection among women, non-binary, and underrepresented gender groups in tech.",
    ],
  },
];

export const aboutEducation = {
  school: "University of Waterloo",
  degree: "Honours Global Business and Digital Arts",
  detail: "GPA: 3.8 · Term Distinction",
  certificates:
    "W3C Introduction to Web Accessibility · Motion Design with Figma · Google UX Design Certificate · TCPS 2: Certificate in Research Ethics · Human Centered Interfaces (HCI)",
} as const;
