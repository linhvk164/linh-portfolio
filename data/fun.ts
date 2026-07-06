export const FUN_PLACEHOLDER_IMAGE =
  "/images/general/logo/linhvk logo black.png";

export type FunItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  coverImage?: string;
};

export const funItems: FunItem[] = [
  {
    id: "mako-asya",
    title: "mako asya",
    category: "Visual & Branding",
    description:
      "Brand identity and visual design for mako asya — exploring playful character-led branding across touchpoints.",
    images: [FUN_PLACEHOLDER_IMAGE, FUN_PLACEHOLDER_IMAGE],
    coverImage: "/images/makoasya/makoasya_2025.png",
  },
  {
    id: "qoli-hackathon",
    title: "Quality of Life Hackathon",
    category: "Front-end development",
    description:
      "A front-end build for the UN-Habitat Quality of Life hackathon, turning urban data concepts into an interactive prototype.",
    images: [FUN_PLACEHOLDER_IMAGE, FUN_PLACEHOLDER_IMAGE, FUN_PLACEHOLDER_IMAGE],
    coverImage: "/images/un-habitat/qolihackathon.png",
  },
  {
    id: "exploration-project",
    title: "Exploration project",
    category: "Textile & Mixed Materials",
    description:
      "An exploratory piece blending textile craft with mixed materials — a hands-on study in texture, color, and form.",
    images: [FUN_PLACEHOLDER_IMAGE, FUN_PLACEHOLDER_IMAGE],
  },
  {
    id: "tako-inc",
    title: "Tako Inc.",
    category: "Visual & Branding",
    description:
      "Visual branding and mascot design for Tako Inc. — identity, illustration, and product touchpoints for a playful consumer brand.",
    images: [
      "/images/tako/tako-1.png",
      "/images/tako/tako-2.png",
      "/images/tako/Tako Homepage (1).png",
      "/images/tako/Lifestyle Front.png",
    ],
    coverImage: "/images/tako/tako-cover.png",
  },
  {
    id: "what-am-i-supposed-to-do",
    title: "What am i supposed to do?",
    category: "Music Video & Audio",
    description:
      "A music video and audio project experimenting with visual storytelling, pacing, and mood through motion and sound.",
    images: [FUN_PLACEHOLDER_IMAGE, FUN_PLACEHOLDER_IMAGE],
    coverImage: "/images/psa/PSA - Final.jpg",
  },
];
