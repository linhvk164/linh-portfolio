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
  /** Optional looping cover video for grid / carousel cards */
  coverVideo?: string;
  youtubeId?: string;
  externalUrl?: string;
  externalLabel?: string;
};

export const funItems: FunItem[] = [
  {
    id: "qol-hackathon",
    name: "Quality of Life Hackathon",
    title: "civic data hackathon program",
    created: "2025",
    tools: "Figma, Cursor AI, Vercel",
    context: "Interactive design · EdTech",
    description:
      "An interactive experience for 300+ students to explore Quality of Life domains. I led creative direction and built the event site to drive registration across events in Canada, China, and Ghana.",
    images: [
      "/images/press/uwaterloo-hackathon.jpg",
      "/images/press/suzhou-hackathon.jpg",
      "/images/press/waterloo-hackathon.jpg",
      "/images/about/hackathon-1.JPG",
    ],
    coverImage: "/images/un-habitat/qolihackathon.png",
    coverVideo: "/images/un-habitat/qolihackathon.mp4",
    externalUrl: "https://www.qolihackathon.com/gh",
    externalLabel: "Visit the hackathon site",
  },
  {
    id: "un-habitat-design-system",
    name: "QoL Design System",
    title: "200+ component design system",
    created: "2024",
    tools: "Figma",
    context: "Design systems · Accessibility",
    description:
      "A scalable design system for UN-Habitat's Quality of Life Initiative. I redesigned the nine domain icons, set WCAG-tested color, and built a shared visual language that sped up design and development across the platform.",
    images: [
      "/images/un-habitat/Icons.png",
      "/images/un-habitat/Frame 746.png",
      "/images/un-habitat/Charts.png",
      "/images/un-habitat/landing-page-v2.png",
    ],
    coverImage: "/images/un-habitat/qoli-icons.webp",
    externalUrl: "https://www.qolimpact.com",
    externalLabel: "Visit QoL Impact",
  },
  {
    id: "chordio",
    name: "Chordio",
    title: "AI songwriting prototype",
    created: "2023",
    tools: "Figma, Prototyping",
    context: "AI prototype · UX/UI",
    description:
      "A songwriting tool shaped by interviews with musicians. I synthesized insights from five interviews into feature direction, then prototyped flows for capturing ideas, chords, and musical memos.",
    images: [
      "/images/songwriting-app/homepage.png",
      "/images/songwriting-app/High-fis.png",
      "/images/songwriting-app/Medium-fis.png",
      "/images/songwriting-app/chordio-workspace.png",
      "/images/songwriting-app/Add Chords.png",
      "/images/songwriting-app/Music Memo.png",
    ],
    coverImage: "/images/songwriting-app/chordio-main-image.png",
  },
  {
    id: "lets-catchup",
    name: "Let's Catchup",
    title: "group scheduling for friends across timezones",
    created: "2026",
    tools: "Vercel, Figma, Cursor AI",
    context: "Social tool",
    description:
      "If you have trouble scheduling time to call your friend groups in different timezones, I built this for you! People can add their availabilities and the app automatically calculates timezone differences and recommends the best overlap, while still being cute and personal. It's free and no account needed.",
    images: [
      "/images/explore/lets-catchup/flipped.png",
      "/images/explore/lets-catchup/howitworks.png",
      "/images/explore/lets-catchup/inbox.png",
    ],
    coverImage: "/images/explore/lets-catchup/lets-catchup-cover.png",
    externalUrl: "https://lets-catchup.vercel.app/",
    externalLabel: "Check out Let's Catchup!",
  },
  {
    id: "radiant-roots",
    name: "Radiant Roots",
    title: "website design",
    created: "2026",
    tools: "Framer, Figma",
    context: "Web design",
    description:
      "A freelance website for Radiant Roots, a local medspa in Ontario",
    images: ["/images/explore/radiant-roots-cover.webp"],
    coverImage: "/images/explore/radiant-roots-cover.webp",
    externalUrl: "https://radiantroots.framer.website/",
  },
  {
    id: "porcelain-boy",
    name: "porcelain boy",
    title: "songwriting + video editing",
    created: "2024",
    tools: "Premiere Pro, After Effects",
    context: "Music video",
    description:
      "Filmed a music video with my friends for a song I wrote and recorded!",
    images: [
      "/images/explore/porcelainboy/porcelainboy-1.png",
      "/images/explore/porcelainboy/porcelainboy-2.png",
      "/images/explore/porcelainboy/porcelainboy-3.png",
      "/images/explore/porcelainboy/porcelainboy-4.png",
    ],
    coverImage: "/images/explore/porcelainboy/porcelain-boy-cover.webp",
    youtubeId: "qm1NaNR09MY",
  },
  {
    id: "mako-asya",
    name: "mako asya",
    title: "brand design",
    created: "2024",
    tools: "Illustrator, Photoshop, Figma",
    context: "Brand design",
    description:
      "Brand identity and visual design for mako.asya, a witchy nail press-on brand.",
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
    context: "University Project",
    description:
      "The materials for this project were given to me from my friends and family, truly conveying the message of this piece: collaboration weaves creativity. Aka community and connections are incredibly important and essential for my creative process!",
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
    context: "Brand & mascot design",
    description:
      "Visual branding and mascot design for Tako Inc., a B2B export/import company.",
    images: [
      "/images/explore/tako/tako-1.png",
      "/images/explore/tako/tako-2.png",
      "/images/explore/tako/tako-3.png",
      "/images/explore/tako/tako-4.png",
      "/images/explore/tako/tako-5.png",
      "/images/explore/tako/Tako logo.png",
    ],
    coverImage: "/images/explore/tako/tako-cover.png",
    externalUrl: "https://www.velocityincubator.com/company/tako-inc",
  },
  {
    id: "what-am-i-supposed-to-do",
    name: "what am i supposed to do?",
    title: "lyrics video + graphic design",
    created: "2024",
    tools: "After Effects, Premiere Pro, Illustrator",
    context: "lyrics video + graphic design",
    description:
      "Created an official lyrics video taking inspo from @werenotreallystrangers. Took pictures of downtown Kitchener, Waterloo and edited my lyrics onto it.",
    images: [
      "/images/explore/whatamisupposedtodo/lyrics-vid-1.png",
      "/images/explore/whatamisupposedtodo/lyrics-vid-2.webp",
      "/images/explore/whatamisupposedtodo/lyrics-vid-3.png",
      "/images/explore/whatamisupposedtodo/lyrics-vid-4.png",
    ],
    coverImage: "/images/explore/whatamisupposedtodo/whatamisupposedtodo-cover.jpg",
    youtubeId: "QfFWuCQwuq8",
  },
];

/** Landing carousel order — spreads brand / mixed-media projects apart. */
export const homeDiscoverItems: FunItem[] = [
  funItems.find((item) => item.id === "qol-hackathon")!,
  funItems.find((item) => item.id === "mako-asya")!,
  funItems.find((item) => item.id === "un-habitat-design-system")!,
  funItems.find((item) => item.id === "porcelain-boy")!,
  funItems.find((item) => item.id === "chordio")!,
  funItems.find((item) => item.id === "tako-inc")!,
  funItems.find((item) => item.id === "lets-catchup")!,
  funItems.find((item) => item.id === "mixed-media")!,
  funItems.find((item) => item.id === "radiant-roots")!,
  funItems.find((item) => item.id === "what-am-i-supposed-to-do")!,
];
