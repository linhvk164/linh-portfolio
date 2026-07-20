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

export const aboutSections: AboutSection[] = [
  {
    heading: "About Linh",
    paragraphs: [
      "Hey there, I'm Linh — a UX/UI designer from Vietnam, based in Canada.",
      "I love all things design aka art that is useful and practical. I enjoy creating digital products that simplify complexity and make information easier to understand and use.",
      "Most recently, I worked as a UX/UI Designer at UN-Habitat’s Quality of Life Initiative! We created a platform to showcase over 100 cities’ quality of life and it was an incredibly rewarding and informative journey.",
      "From contributing to a global urban data platform to exploring AI-powered creative tools, my work sits at the intersection of design, technology, and human behavior. I’m especially interested in using design to support real communities and create meaningful, human-centered experiences.",
      "My goal when it comes to design is to understand people, to have empathy towards the challenges they are presented with, and to help them find solutions through intuitive and insightful interactions.",
      "If you'd like to learn more about my work or want to chat, don't hesitate to reach out over email or LinkedIn. 🎉",
    ],
  },
  // Add more sections with subheaders like this:
  // {
  //   heading: "Outside of work",
  //   paragraphs: ["..."],
  // },
];
