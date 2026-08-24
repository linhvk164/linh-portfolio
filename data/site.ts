export const site = {
  name: "Linh Khuong",
  email: "linhvkdesign@gmail.com",
  phone: "+1 (548) 333-1604",
  linkedIn: "https://www.linkedin.com/in/linhvankhuong/",
  youtube: "https://www.youtube.com/@linhvk_",
  resume: "/images/general/resume.pdf",
  title: "UX/UI + Product Designer",
  tagline: "Building the tools behind civic, SaaS, B2B, 0→1 products.",
  exploreHeadline: "Linh Khuong",
  exploreTagline:
    "In addition to web design, I love exploring other mediums. Currently learning pixel art!",
  role: "designing tools that make difficult things easy ツ",
  location: "Based in Ontario, Canada",
  status: "Prev @ the UN",
  previously: "@ the UN",
  experience: "4+ Years",
  intro: {
    line1: "Hey! I'm Linh Khuong",
    line2: "a UX/UI Designer, a Brand Designer",
    description:
      "Specializing in UX/UI, Branding, Illustrations and No-code development. My goal is to simplify complex processes by utilizing creative solutions.",
    cta: "Got a product in mind? Let's chat.",
  },
  philosophy: {
    quote: "Design is art that is useful and practical",
    label: "my design philosophy",
  },
  spotifyPlaylist:
    "https://open.spotify.com/playlist/6ddb7uDuPbzCNh11PiCvG3?si=cb5139ce4c7244b2",
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
] as const;

export const footerNavItems = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Resources", comingSoon: true },
  { label: "Freelance", href: "/freelance" },
] as const;
