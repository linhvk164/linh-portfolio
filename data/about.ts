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
  description: string;
};

/** Fixed-height carousel slides (object-cover keeps height consistent). */
export const aboutCarousel: AboutCarouselSlide[] = [
  // Example — replace / add your photos in public/images/about/
  // { src: "/images/about/photo-1.jpg", alt: "Linh at work" },
  {
    src: "/images/general/Profile pic.JPG",
    alt: "Linh Khuong",
  },
  {
    src: "/images/about/China outdoor.JPG",
    alt: "in China",
  },
  {
    src: "/images/about/China.JPG",
    alt: "in China",
  },
  {
    src: "/images/about/DSCF4503.JPG",
    alt: "in Canada",
  },
  {
    src: "/images/about/IMG_6030.JPG",
    alt: "Performing at a festival",
  },
  {
    src: "/images/about/IMG_6496.JPG",
    alt: "in China with friends",
  },
  {
    src: "/images/about/Work trip picture.JPG",
    alt: "UN-Habitat work trip",
  },
];

/** Shown after bio sections, always immediately before the tool stack. */
export const aboutCta =
  "If you'd like to learn more about my work or want to chat, don't hesitate to reach out over email or LinkedIn. 🎉";

export const aboutSections: AboutSection[] = [
  {
    heading: "About Linh",
    paragraphs: [
      "Hey there, I'm Linh — a UX/UI designer from Vietnam, based in Canada.",
      "I love all things design aka art that is useful and practical. I enjoy creating digital products that simplify complexity and make information easier to understand and use.",
      "Most recently, I worked as a UX/UI Designer at UN-Habitat’s Quality of Life Initiative! We created a platform to showcase over 100 cities’ quality of life and it was an incredibly rewarding and informative journey.",
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
    role: "UX/UI Designer",
    org: "UN-Habitat Quality of Life Initiative",
    dates: "Jul 2024 – Jan 2026",
    description:
      "Shipped a global quality-of-life platform live across **82+ cities**, designing accessible data visualizations and CMS tools in **Figma**. Built a **200+ component design system** from scratch, speeding up design and dev velocity by **50%**. Worked alongside **10 cross-functional teammates** and **25+ city officials** to shape the product's direction.",
  },
  {
    role: "Product Designer & Project Manager",
    org: "QOL Hackathon Program",
    dates: "Jun 2025 – Jan 2026",
    description:
      "Led creative direction and built the event site with **Cursor AI** and **Vercel** to drive registration. Scaled the program from **80+** to **300+ participants** across three events in **Canada, China, and Ghana**. Managed logistics for **10 volunteers** and **5 judges** from planning through day-of execution.",
  },
  {
    role: "Lead UX/UI Designer",
    org: "Tako Inc.",
    dates: "Apr 2023 – Aug 2023",
    description:
      "Designed a **B2B logistics platform** for fresh fish trade between Canada and Japan, launching in **4 months**. Sped up MVP development by **30%** through close collaboration with engineering, boosting user engagement by **40%**.",
  },
  {
    role: "Freelance Brand and Web Designer",
    org: "",
    dates: "Sept 2021 – Present",
    description:
      "Designs **end-to-end websites** and **brand identities** for entrepreneurs, shaping user flows and conversion-focused **CTAs**. Creates **Canva** social templates for health and beauty small businesses across **Instagram, TikTok, and Facebook**.",
  },
];
