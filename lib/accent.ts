export const accentColors = {
  yellow: "#F4C430",
  blue: "#2E3AE0",
  pink: "#E85D9C",
  green: "#5FA777",
} as const;

export type Accent = keyof typeof accentColors;

export function getAccentColor(accent: Accent): string {
  return accentColors[accent];
}

export function getAccentClass(accent: Accent): string {
  const map: Record<Accent, string> = {
    yellow: "text-accent-yellow bg-accent-yellow",
    blue: "text-accent-blue bg-accent-blue",
    pink: "text-accent-pink bg-accent-pink",
    green: "text-accent-green bg-accent-green",
  };
  return map[accent];
}

export function getAccentBorderClass(accent: Accent): string {
  const map: Record<Accent, string> = {
    yellow: "border-accent-yellow hover:border-accent-yellow",
    blue: "border-accent-blue hover:border-accent-blue",
    pink: "border-accent-pink hover:border-accent-pink",
    green: "border-accent-green hover:border-accent-green",
  };
  return map[accent];
}
