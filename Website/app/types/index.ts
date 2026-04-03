// Shared TypeScript interfaces for Veritas.ai

export interface AnalysisResult {
  label: "DEEPFAKE" | "REAL";
  confidence: number;
  message?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  oneLiner: string;
  emoji: string;
  linkedin: string;
  photo: string | null;
}

export interface Feature {
  icon: string; // SVG path data
  title: string;
  desc: string;
}

export interface DocSection {
  icon: string;
  title: string;
  items: string[];
}

export interface SpotlightItem {
  badge: string;
  heading: string;
  subheading: string;
  body: string;
  link: { label: string; href: string };
  codeFile: string;
  codeContent: string;
  imageLeft: boolean;
}
