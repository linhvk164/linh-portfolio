export const FUN_PLACEHOLDER_IMAGE =
  "/images/general/logo/linhvk logo black.png";

export type FunItem = {
  id: string;
  /** Project name shown in the modal headline */
  name: string;
  /** Short label under the cover on the Explore grid */
  title: string;
  created: string;
  tools: string;
  context: string;
  description: string;
  images: string[];
  coverImage?: string;
  youtubeId?: string;
  externalUrl?: string;
};

export const funItems: FunItem[] = [
  {
    id: "what-am-i-supposed-to-do",
    name: "what am i supposed to do?",
    title: "lyrics video + graphic design",
    created: "2024",
    tools: "After Effects, Premiere Pro, Illustrator",
    context: "Music video",
    description:
      "Official lyrics video — visual storytelling, pacing, and mood through motion and sound.",
    images: [
      "/images/explore/whatamisupposedtodo/lyrics-vid-1.png",
      "/images/explore/whatamisupposedtodo/lyrics-vid-2.png",
      "/images/explore/whatamisupposedtodo/lyrics-vid-3.png",
      "/images/explore/whatamisupposedtodo/lyrics-vid-4.png",
    ],
    coverImage: "/images/explore/whatamisupposedtodo/whatamisupposedtodo-cover.jpg",
    youtubeId: "QfFWuCQwuq8",
  },
  {
    id: "porcelain-boy",
    name: "porcelain boy",
    title: "songwriting + video editing",
    created: "2024",
    tools: "Premiere Pro, After Effects",
    context: "Music video",
    description:
      "Official music video experimenting with visual storytelling and mood.",
    images: [
      "/images/explore/porcelainboy/porcelainboy-1.png",
      "/images/explore/porcelainboy/porcelainboy-2.png",
      "/images/explore/porcelainboy/porcelainboy-3.png",
      "/images/explore/porcelainboy/porcelainboy-4.png",
    ],
    coverImage: "/images/explore/porcelainboy/porcelain boy gif.gif",
    youtubeId: "qm1NaNR09MY",
  },
  {
    id: "radiant-roots",
    name: "Radiant Roots",
    title: "website design",
    created: "2025",
    tools: "Framer, Figma",
    context: "Web design",
    description:
      "A Framer website exploring radiant, nature-led visual design and layout.",
    images: ["/images/explore/radiant-roots-cover.png"],
    coverImage: "/images/explore/radiant-roots-cover.png",
    externalUrl: "https://radiantroots.framer.website/",
  },
  {
    id: "mako-asya",
    name: "mako asya",
    title: "brand design",
    created: "2024",
    tools: "Illustrator, Photoshop",
    context: "Brand identity",
    description:
      "Brand identity and visual design for mako asya — exploring playful character-led branding across touchpoints.",
    images: [
      "/images/explore/makoasya/makoasya_1.svg",
      "/images/explore/makoasya/makoasya_2.svg",
      "/images/explore/makoasya/makoasya_3.svg",
      "/images/explore/makoasya/makoasya_4.jpg",
      "/images/explore/makoasya/makoasya-5.png",
    ],
    coverImage: "/images/explore/makoasya/mako-cover.png",
  },
  {
    id: "mixed-media",
    name: "Mixed media",
    title: "textiles + mixed materials",
    created: "2023",
    tools: "Textile, mixed materials",
    context: "Personal exploration",
    description:
      "An exploratory piece blending textile craft with mixed materials — a hands-on study in texture, color, and form.",
    images: [
      "/images/explore/psa/psa-1.jpg",
      "/images/explore/psa/PSA-2.jpg",
      "/images/explore/psa/psa_3.png",
      "/images/explore/psa/psa-4.png",
      "/images/explore/psa/IMG_9883.png",
      "/images/explore/psa/IMG_9916.png",
      "/images/explore/psa/IMG_9917.png",
      "/images/explore/psa/IMG_9924.png",
      "/images/explore/psa/IMG_9925.png",
      "/images/explore/psa/IMG_9926.png",
      "/images/explore/psa/IMG_9928.png",
      "/images/explore/psa/IMG_9929.png",
      "/images/explore/psa/IMG_9930.png",
    ],
    coverImage: "/images/explore/psa/psa-cover.png",
  },
  {
    id: "tako-inc",
    name: "Tako Inc.",
    title: "brand + mascot design",
    created: "2024",
    tools: "Illustrator, Photoshop",
    context: "Brand identity",
    description:
      "Visual branding and mascot design for Tako Inc. — identity, illustration, and product touchpoints for a playful consumer brand.",
    images: [
      "/images/explore/tako/tako-1.png",
      "/images/explore/tako/tako-2.png",
      "/images/explore/tako/tako-3.png",
      "/images/explore/tako/tako-4.png",
      "/images/explore/tako/tako-5.png",
      "/images/explore/tako/Tako logo.png",
    ],
    coverImage: "/images/explore/tako/tako-cover.png",
  },
];
