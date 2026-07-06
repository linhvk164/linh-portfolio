export type FunItem = {
  title: string;
  category: string;
  href?: string;
  coverImage?: string;
};

export const funItems: FunItem[] = [
  {
    title: "mako asya",
    category: "Visual & Branding",
    href: "/projects/makoasya",
    coverImage: "/images/makoasya/makoasya_2025.png",
  },
  {
    title: "Quality of Life Hackathon",
    category: "Front-end development",
    coverImage: "/images/un-habitat/qolihackathon.png",
  },
  {
    title: "Exploration project",
    category: "Textile & Mixed Materials",
  },
  {
    title: "What am i supposed to do?",
    category: "Music Video & Audio",
    coverImage: "/images/psa/PSA - Final.jpg",
  },
];
