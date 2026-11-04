export type Language =
  | "typescript"
  | "javascript"
  | "react"
  | "tailwind"
  | "testing"
  | "accessibility"
  | "performance";

export type Tier = "starter" | "basic" | "epic" | "legendary";

export interface StudyItemContent {
  name: string;
  stats: string[];
  passive: string;
  whenToUse: string;
  avoidWhen?: string;
}

export interface StudyItem {
  id: string;
  language: Language;

  category: string;
  tier: Tier;
  icon: string;

  declaration: string;
  example: string;
  buildsInto?: string[];
  tags?: string[];
}

export const LANGUAGES: { id: Language; label: string }[] = [
  { id: "typescript", label: "TypeScript" },
  { id: "javascript", label: "JavaScript" },
  { id: "react", label: "React" },
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "testing", label: "Unit Testing" },
  { id: "accessibility", label: "Accessibility" },
  { id: "performance", label: "Performance" },
];
