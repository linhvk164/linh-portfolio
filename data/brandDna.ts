/** Brand DNA quiz — questions, dimensions, and result copy. Edit here. */

export const brandDnaDimensions = [
  "warm",
  "bold",
  "refined",
  "playful",
  "thoughtful",
  "experimental",
] as const;

export type BrandDnaDimension = (typeof brandDnaDimensions)[number];

export type BrandDnaScores = Record<BrandDnaDimension, number>;

export type BrandDnaAnswer = {
  id: string;
  title: string;
  description?: string;
  /** Points added to each dimension when this answer is chosen */
  scores: Partial<BrandDnaScores>;
};

export type BrandDnaQuestion = {
  id: string;
  prompt: string;
  hint?: string;
  answers: BrandDnaAnswer[];
};

export const brandDnaPage = {
  brow: "Brand DNA",
  headline: "What should your brand feel like?",
  body: "Answer a few questions about your business, personality, and aesthetic preferences. We'll turn your choices into a simple Brand DNA you can use to guide your website, content, and visual identity.",
  cta: "Discover your Brand DNA",
  resultBrow: "Your Brand DNA",
  resultFeelLabel: "Your brand feels",
  personalityLabel: "Your personality",
  voiceLabel: "Your voice",
  visualLabel: "Your visual direction",
  shouldFeelLabel: "Your brand should feel",
  avoidLabel: "Avoid",
  dnaLabel: "The Brand DNA",
  copyCta: "Copy Brand DNA",
  copiedCta: "Copied",
  workTogetherHeading: "Want help bringing this to life?",
  workTogetherCta: "Let's work together",
  retakeCta: "Take the quiz again",
  backLabel: "Back",
} as const;

export const brandDnaDimensionLabels: Record<BrandDnaDimension, string> = {
  warm: "Warm",
  bold: "Bold",
  refined: "Refined",
  playful: "Playful",
  thoughtful: "Thoughtful",
  experimental: "Experimental",
};

/** Per-dimension building blocks used to assemble personalized results. */
export const brandDnaTraitCopy: Record<
  BrandDnaDimension,
  {
    personality: string;
    voice: string;
    visuals: string[];
    shouldFeel: string[];
    avoid: string[];
  }
> = {
  warm: {
    personality:
      "Your brand feels human, welcoming, and intentional. You want people to feel comfortable around your business while still recognizing that there is a clear point of view behind it.",
    voice:
      "Conversational, thoughtful, and confident. You sound like someone who knows what they're doing without needing to sound overly formal.",
    visuals: [
      "Warm photography",
      "Generous whitespace",
      "Natural colours",
      "Human details",
      "Soft contrast",
    ],
    shouldFeel: ["Welcoming", "Human", "Approachable"],
    avoid: [
      "Overly corporate language",
      "Cold or clinical visuals",
      "Aggressive sales messaging",
    ],
  },
  bold: {
    personality:
      "Your brand has presence. It is confident, memorable, and unafraid to take a clear stance. People should notice you quickly and remember how you made them feel.",
    voice:
      "Direct, energetic, and self-assured. You lead with clarity and conviction rather than hedging every sentence.",
    visuals: [
      "Strong contrast",
      "Confident colour accents",
      "Punchy headlines",
      "High-impact imagery",
      "Clear visual hierarchy",
    ],
    shouldFeel: ["Confident", "Memorable", "Energetic"],
    avoid: [
      "Timid or apologetic messaging",
      "Washed-out visuals",
      "Playing it too safe",
    ],
  },
  refined: {
    personality:
      "Your brand feels polished and considered. Every detail should signal care, quality, and restraint rather than noise or excess.",
    voice:
      "Calm, precise, and elegant. You communicate with intention and leave space for the work to speak.",
    visuals: [
      "Refined typography",
      "Restrained colour palette",
      "Clean layouts",
      "Editorial spacing",
      "Subtle finishes",
    ],
    shouldFeel: ["Polished", "Sophisticated", "Intentional"],
    avoid: [
      "Cluttered layouts",
      "Trendy visual noise",
      "Overly casual or messy presentation",
    ],
  },
  playful: {
    personality:
      "Your brand feels lively and approachable. There is room for personality, wit, and unexpected moments without losing clarity.",
    voice:
      "Friendly, expressive, and light on its feet. You invite people in with warmth and a little spark.",
    visuals: [
      "Expressive colour",
      "Playful composition",
      "Characterful type accents",
      "Dynamic imagery",
      "Unexpected details",
    ],
    shouldFeel: ["Lively", "Approachable", "Expressive"],
    avoid: [
      "Stiff corporate tone",
      "Overly serious aesthetics",
      "Generic stock-brand visuals",
    ],
  },
  thoughtful: {
    personality:
      "Your brand feels considered and grounded. You value clarity, depth, and helping people make better decisions without overwhelm.",
    voice:
      "Measured, insightful, and reassuring. You guide people with patience and substance rather than hype.",
    visuals: [
      "Quiet confidence",
      "Clear information hierarchy",
      "Soft neutrals with purpose",
      "Readable typography",
      "Breathing room around content",
    ],
    shouldFeel: ["Clear", "Grounded", "Trustworthy"],
    avoid: [
      "Hype-driven copy",
      "Flashy decoration",
      "Oversimplifying what people need to know",
    ],
  },
  experimental: {
    personality:
      "Your brand feels curious and unconventional. You are open to distinctive ideas as long as they still serve the people using your product or service.",
    voice:
      "Curious, original, and a little unexpected. You sound like someone exploring interesting territory with intention.",
    visuals: [
      "Distinctive art direction",
      "Unexpected layouts",
      "Creative photography or illustration",
      "Custom visual moments",
      "A signature detail that feels yours",
    ],
    shouldFeel: ["Distinctive", "Curious", "Original"],
    avoid: [
      "Cookie-cutter templates",
      "Safe generic branding",
      "Copying category defaults",
    ],
  },
};

export const brandDnaQuestions: BrandDnaQuestion[] = [
  {
    id: "impression",
    prompt: "What would you rather someone say about your business?",
    answers: [
      {
        id: "warm-welcoming",
        title: "It feels warm and welcoming.",
        description: "People feel at ease the moment they arrive.",
        scores: { warm: 3, thoughtful: 1 },
      },
      {
        id: "bold-exciting",
        title: "It feels bold and exciting.",
        description: "There's energy and a clear sense of presence.",
        scores: { bold: 3, playful: 1 },
      },
      {
        id: "polished-sophisticated",
        title: "It feels polished and sophisticated.",
        description: "Everything looks considered and well made.",
        scores: { refined: 3, thoughtful: 1 },
      },
      {
        id: "thoughtful-unconventional",
        title: "It feels thoughtful and unconventional.",
        description: "There's a point of view that feels different.",
        scores: { thoughtful: 2, experimental: 2 },
      },
    ],
  },
  {
    id: "homepage",
    prompt: "Which homepage feels most like your business?",
    answers: [
      {
        id: "minimal-editorial",
        title: "Minimal, spacious, editorial",
        description: "Quiet layouts, strong type, room to breathe.",
        scores: { refined: 3, thoughtful: 1 },
      },
      {
        id: "warm-photographic",
        title: "Warm, photographic, human",
        description: "Real people, soft light, lived-in details.",
        scores: { warm: 3, thoughtful: 1 },
      },
      {
        id: "bold-colourful",
        title: "Bold, colourful, energetic",
        description: "High contrast, lively motion, memorable moments.",
        scores: { bold: 2, playful: 2 },
      },
      {
        id: "structured-professional",
        title: "Structured, refined, professional",
        description: "Clear sections, calm confidence, polished finish.",
        scores: { refined: 2, thoughtful: 2 },
      },
    ],
  },
  {
    id: "writing",
    prompt: "How should your writing sound?",
    answers: [
      {
        id: "knowledgeable-friend",
        title: "Like a knowledgeable friend",
        description: "Helpful, human, and easy to trust.",
        scores: { warm: 2, thoughtful: 2 },
      },
      {
        id: "expert-room",
        title: "Like an expert in the room",
        description: "Clear authority without talking down.",
        scores: { refined: 2, thoughtful: 2 },
      },
      {
        id: "enthusiastic-storyteller",
        title: "Like an enthusiastic storyteller",
        description: "Expressive, vivid, and full of momentum.",
        scores: { playful: 2, bold: 2 },
      },
      {
        id: "calm-guide",
        title: "Like a calm, thoughtful guide",
        description: "Steady, reassuring, and never rushed.",
        scores: { thoughtful: 3, warm: 1 },
      },
    ],
  },
  {
    id: "enters-room",
    prompt: "Your brand walks into a room. What does it do?",
    answers: [
      {
        id: "make-comfortable",
        title: "Makes everyone feel comfortable",
        description: "Warmth first, pressure never.",
        scores: { warm: 3, thoughtful: 1 },
      },
      {
        id: "command-attention",
        title: "Commands attention",
        description: "People notice it immediately.",
        scores: { bold: 3, experimental: 1 },
      },
      {
        id: "interesting-conversation",
        title: "Starts an interesting conversation",
        description: "Curious, engaging, a little unexpected.",
        scores: { playful: 2, experimental: 2 },
      },
      {
        id: "quiet-insight",
        title: "Quietly observes, then says something insightful",
        description: "Less noise, more meaning.",
        scores: { thoughtful: 3, refined: 1 },
      },
    ],
  },
  {
    id: "customer-priority",
    prompt: "What matters most when someone first finds you?",
    answers: [
      {
        id: "feel-understood",
        title: "They feel understood",
        description: "Your message lands like someone gets them.",
        scores: { warm: 2, thoughtful: 2 },
      },
      {
        id: "feel-impressed",
        title: "They feel impressed",
        description: "The quality and confidence stand out right away.",
        scores: { bold: 2, refined: 2 },
      },
      {
        id: "feel-curious",
        title: "They feel curious",
        description: "Something distinctive makes them lean in.",
        scores: { experimental: 2, playful: 2 },
      },
      {
        id: "feel-clear",
        title: "They feel clear on what to do next",
        description: "No confusion. Just a simple path forward.",
        scores: { thoughtful: 2, refined: 2 },
      },
    ],
  },
  {
    id: "colour-mood",
    prompt: "Pick a colour mood for your brand world.",
    answers: [
      {
        id: "earth-soft",
        title: "Soft earth tones",
        description: "Creams, greens, warm neutrals.",
        scores: { warm: 2, refined: 1, thoughtful: 1 },
      },
      {
        id: "high-contrast",
        title: "High-contrast and graphic",
        description: "Black, white, and a sharp accent.",
        scores: { bold: 2, refined: 2 },
      },
      {
        id: "bright-joyful",
        title: "Bright and joyful",
        description: "Colour that feels alive and expressive.",
        scores: { playful: 3, bold: 1 },
      },
      {
        id: "unexpected-mix",
        title: "An unexpected mix",
        description: "A palette that feels personal, not default.",
        scores: { experimental: 3, playful: 1 },
      },
    ],
  },
  {
    id: "imagery",
    prompt: "How should photos and imagery feel?",
    answers: [
      {
        id: "real-people",
        title: "Real, candid, close-up",
        description: "Human moments over staged perfection.",
        scores: { warm: 3, thoughtful: 1 },
      },
      {
        id: "editorial-clean",
        title: "Editorial and clean",
        description: "Composed, intentional, gallery-like.",
        scores: { refined: 3, thoughtful: 1 },
      },
      {
        id: "dynamic-bold",
        title: "Dynamic and bold",
        description: "Movement, scale, and visual punch.",
        scores: { bold: 3, playful: 1 },
      },
      {
        id: "artistic-unusual",
        title: "Artistic and a little unusual",
        description: "Illustration, texture, or unexpected framing.",
        scores: { experimental: 3, playful: 1 },
      },
    ],
  },
  {
    id: "aftertaste",
    prompt: "When someone leaves your site, what should stick?",
    answers: [
      {
        id: "felt-cared-for",
        title: "They felt cared for",
        description: "The experience was kind and human.",
        scores: { warm: 3, thoughtful: 1 },
      },
      {
        id: "felt-energized",
        title: "They felt energized",
        description: "Your brand left a spark.",
        scores: { bold: 2, playful: 2 },
      },
      {
        id: "felt-trust",
        title: "They felt they can trust you",
        description: "Clarity and quality built confidence.",
        scores: { refined: 2, thoughtful: 2 },
      },
      {
        id: "felt-inspired",
        title: "They felt inspired to try something different",
        description: "You expanded what felt possible.",
        scores: { experimental: 2, thoughtful: 1, playful: 1 },
      },
    ],
  },
  {
    id: "creative-risk",
    prompt: "How do you feel about taking creative risks?",
    answers: [
      {
        id: "subtle-personality",
        title: "A little personality is enough",
        description: "Tasteful, not loud.",
        scores: { refined: 2, warm: 1, thoughtful: 1 },
      },
      {
        id: "stand-out",
        title: "I want to stand out clearly",
        description: "Safe is forgettable.",
        scores: { bold: 3, experimental: 1 },
      },
      {
        id: "playful-moments",
        title: "I love playful surprises",
        description: "Delight matters as much as polish.",
        scores: { playful: 3, experimental: 1 },
      },
      {
        id: "thoughtful-experiments",
        title: "I'll experiment if it serves the idea",
        description: "Risk with purpose, not for show.",
        scores: { thoughtful: 2, experimental: 2 },
      },
    ],
  },
  {
    id: "host",
    prompt: "If your brand were a host, how would it treat guests?",
    answers: [
      {
        id: "host-warm",
        title: "Offer a seat and make them feel at home",
        description: "Hospitality over hard sell.",
        scores: { warm: 3, thoughtful: 1 },
      },
      {
        id: "host-bold",
        title: "Open with a memorable entrance",
        description: "First impression, strong and clear.",
        scores: { bold: 3, playful: 1 },
      },
      {
        id: "host-refined",
        title: "Set a beautiful table and keep things effortless",
        description: "Details handled so guests can relax.",
        scores: { refined: 3, warm: 1 },
      },
      {
        id: "host-curious",
        title: "Invite them into something unexpected",
        description: "A conversation starter, not a script.",
        scores: { experimental: 2, playful: 1, thoughtful: 1 },
      },
    ],
  },
];
