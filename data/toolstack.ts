export type ToolEntry =
  | { name: string; src: string; type?: "image" }
  | { name: string; type: "vercel" };

export const tools: ToolEntry[] = [
  { name: "Mobbin", src: "/images/toolstack/mobbin-logo.png" },
  { name: "Adobe Photoshop", src: "/images/toolstack/pts-logo.png" },
  { name: "Vercel", type: "vercel" },
  { name: "Framer", src: "/images/toolstack/framer-logo.webp" },
  { name: "Figma", src: "/images/toolstack/figma-logo.png" },
  { name: "Cursor", src: "/images/toolstack/cursor-logo.png" },
  { name: "GitHub", src: "/images/toolstack/github-long.png" },
];
