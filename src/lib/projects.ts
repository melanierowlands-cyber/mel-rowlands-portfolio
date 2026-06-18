import { ingenio } from "@/content/projects/ingenio";
import { wildlife } from "@/content/projects/wildlife-ops";
import { huddle } from "@/content/projects/huddle";

export type ThemeKey = "ingenio" | "wildlife" | "huddle";

/* ---------- shared content atoms ---------- */
export type Persona = {
  quote: string;
  name: string;
  traits: string[];
  implication: string;
};
export type MetricCard = { label: string; value: string };
export type FeatureItem = { title: string; body: string };
export type Step = { title: string; body: string; tag?: string };
export type Stat = { label: string; value: string; sub: string };
export type ChartBar = { value: number };
export type PipelineStep = { tool: string; desc: string };
export type Iteration = { label: string; title: string; body: string; image?: ShowcaseImage };
export type OppColumn = { label: string; title: string; bullets: string[]; footnote?: string };
export type ShowcaseImage = {
  src?: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

/* ---------- section union (mirrors Figma section order) ---------- */
export type Section =
  | { type: "projectIntro"; text: string }
  | {
      type: "problem";
      eyebrow: string;
      paragraphs: string[];
      side:
        | { kind: "questions"; label: string; questions: string[] }
        | { kind: "metrics"; cards: MetricCard[] };
    }
  | {
      type: "goal";
      eyebrow: string;
      title: string;
      intro: string;
      criteria: string[];
      closing: string;
    }
  | {
      type: "research";
      eyebrow: string;
      title: string;
      personas: Persona[];
      bridge: string;
    }
  | { type: "keyInsight"; eyebrow: string; statement: string }
  | {
      type: "approach";
      eyebrow: string;
      title: string;
      intro: string;
      steps: Step[];
      callout?: { label: string; body: string };
    }
  | {
      type: "pricingReframe";
      eyebrow: string;
      title: string;
      intro: string;
      before: { heading: string; plans: { name: string; note: string }[]; caption: string };
      after: {
        heading: string;
        cards: {
          flag: string;
          name: string;
          price: string;
          was?: string;
          unit?: string;
          meta: string;
          features: string[];
          cta: string;
          footnote: string;
          featured?: boolean;
        }[];
        annotation: string;
        note: string;
      };
    }
  | { type: "features"; eyebrow: string; title: string; items: FeatureItem[] }
  | { type: "showcase"; eyebrow: string; title: string; intro?: string; images: ShowcaseImage[] }
  | {
      type: "results";
      eyebrow: string;
      title: string;
      intro: string;
      stats: Stat[];
      chartTitle: string;
      chartLegend: string;
      chart: number[];
      chartAxis: string[];
      validated: { label: string; body: string };
      note: string;
    }
  | {
      type: "iterations";
      eyebrow: string;
      title: string;
      intro: string;
      items: Iteration[];
      closing: string;
    }
  | { type: "businessOpp"; eyebrow: string; title: string; intro: string; columns: OppColumn[] }
  | {
      type: "pipeline";
      eyebrow: string;
      title: string;
      intro: string;
      steps: PipelineStep[];
      closing: string;
    }
  | {
      type: "learnings";
      eyebrow: string;
      title: string;
      cards: { title: string; body: string }[];
    };

export type CardImage = { src: string; alt: string; style: React.CSSProperties };

export type Project = {
  slug: string;
  order: number;
  theme: ThemeKey;
  projectNumber: string;
  title: string;
  tags: string;
  blurb: string;
  prototypeUrl?: string;
  /* Home "Selected Work" banner */
  card: { bg: string; textColor: string; stripe: string; images: CardImage[] };
  /* Case-study hero */
  logoLetter: string;
  logoLabel: string;
  headline: string;
  intro: string;
  /* Full-bleed image strip under the hero */
  strip: { src: string; alt: string }[];
  sections: Section[];
};

export const projects: Project[] = [ingenio, wildlife, huddle].sort(
  (a, b) => a.order - b.order
);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacent(slug: string): { prev: Project; next: Project } {
  const i = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  return { prev, next };
}
