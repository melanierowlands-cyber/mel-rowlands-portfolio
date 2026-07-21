import type { Project } from "@/lib/projects";

export const fineday: Project = {
  slug: "fineday",
  order: 4,
  theme: "fineday",
  projectNumber: "04",
  title: "Fineday Design Studio",
  tags: "BRAND IDENTITY  ·  PACKAGING DESIGN  ·  INTERNATIONAL LICENSING",
  blurb:
    "Seven years of brand and packaging design for food and lifestyle brands, with work reaching retail shelves locally and, through two licensed collaborations, in the US.",
  metaDescription:
    "Seven years of brand and packaging design for food and lifestyle brands - including two internationally licensed collaborations with Studio E Fabrics and Nested Bean (USA).",
  card: {
    bg: "#b5646d",
    textColor: "#ffffff",
    stripe: "#e3a53f",
    photoLeft: "/images/fineday/sarah-graham-nourish.jpg",
    photoRight: "/images/fineday/surface-pattern-thumbnail.png",
    logo: "/images/home/fineday-wordmark.png",
    logoWidth: 130,
    logoOn: "right",
    logoCorner: "br",
  },
  logoLetter: "f",
  logoLabel: "FINEDAY DESIGN STUDIO",
  headline: "Good packaging has to survive contact with reality. Fineday built the systems that held up.",
  intro:
    "Seven years co-running a brand and packaging design studio for food and lifestyle brands - two of which went on to be licensed internationally.",
  strip: [
    { src: "/images/fineday/sarah-graham-nourish.jpg", alt: "Sarah Graham's Nourish packaging" },
    { src: "/images/fineday/surface-pattern-thumbnail.png", alt: "Surface pattern design licensed to Studio E Fabrics and Nested Bean" },
  ],
  sections: [
    {
      type: "projectIntro",
      text: "Fineday Design Studio was a brand and packaging design studio I co-owned and led design for, working with food and lifestyle brands over seven years - from a single farmers'-market stall through to national retail. This case study looks at that body of work: the identity systems, the packaging, and two collaborations that carried it beyond South Africa's shelves entirely.",
    },
    {
      type: "problem",
      eyebrow: "THE PROBLEM",
      paragraphs: [
        "Small and growing food and lifestyle brands need to stand out on a crowded retail shelf - and carry a consistent identity from a single farmers' market stall through to national distribution.",
        "Most of these brands don't have a large in-house design team. The identity, the packaging, and the guidelines that hold it all together have to come from somewhere else - and still feel like a coherent, confident brand at every stage of growth.",
      ],
      side: {
        kind: "metrics",
        cards: [
          { label: "AT FINEDAY", value: "7 years, co-owner & lead designer" },
          { label: "DISCIPLINE", value: "Brand identity & packaging design" },
        ],
      },
    },
    {
      type: "approach",
      eyebrow: "THE PROCESS",
      title: "Building brand systems that hold up past the brief",
      intro:
        "As co-owner and lead designer at Fineday, I worked directly with founders over seven years to build logo systems, packaging and brand guidelines - balancing shelf standout with the real constraints of print production, materials, and retail regulation.",
      steps: [
        {
          title: "Working directly with founders",
          body: "No account layer between the brief and the work - every identity was built in direct collaboration with the person building the brand.",
        },
        {
          title: "Designing the full system",
          body: "Logo, packaging and brand guidelines, built together rather than as separate deliverables - so a brand could scale beyond its first product.",
        },
        {
          title: "Designing within real constraints",
          body: "Every decision balanced shelf standout against the practical limits of print production, materials, and retail regulation.",
        },
        {
          title: "Keeping the brand's own voice intact",
          body: "The goal was never a Fineday house style. Each identity had to sound like the founder who built it, not like the studio that designed it.",
        },
      ],
    },
    {
      type: "showcase",
      eyebrow: "THE SOLUTION",
      title: "Brand and packaging systems, shelf-ready",
      intro:
        "Delivered full brand identity and packaging systems for clients including Yuppie Chef, Sarah Graham, Jimmy Public, and Shackleton Craft Beer - taking each from early concept through to production-ready packaging.",
      images: [
        {
          src: "/images/fineday/sarah-graham-nourish.jpg",
          alt: "Sarah Graham's Nourish packaging",
          caption: "Packaging for Sarah Graham's Nourish range - from concept through to production-ready, shelf-ready packaging.",
          width: 1200,
          height: 801,
        },
      ],
    },
    {
      type: "showcase",
      eyebrow: "THE OUTCOME",
      title: "Beyond the shelf",
      intro:
        "Work reached retail shelves both locally and abroad. Two collaborations were licensed internationally: surface pattern designs were picked up by Studio E Fabrics and Nested Bean (USA), carrying the brand and craft work into new commercial products well outside food and drink.",
      images: [
        {
          src: "/images/fineday/surface-pattern-thumbnail.png",
          alt: "Surface pattern design licensed to Studio E Fabrics and Nested Bean",
          caption: "Surface pattern design licensed internationally to Studio E Fabrics and Nested Bean (USA).",
          width: 1536,
          height: 1024,
        },
      ],
    },
    {
      type: "learnings",
      eyebrow: "AN HONEST NOTE",
      title: "Craft before UX",
      cards: [
        {
          title: "Why this is here",
          body: "This work predates my move into product and UX, so there's no usability data or conversion numbers here - just brand and packaging craft. It's included because it's real, verifiable evidence of the visual design and brand thinking I bring into product work today.",
        },
      ],
    },
  ],
};
