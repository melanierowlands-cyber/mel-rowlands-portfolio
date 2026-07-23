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
  logoLabel: "",
  headline: "Good packaging has to survive contact with reality. Fineday built the systems that held up.",
  intro:
    "Seven years co-running a brand and packaging design studio for food and lifestyle brands - two of which went on to be licensed internationally.",
  strip: [
    { src: "/images/fineday/sarah-graham-nourish.jpg", alt: "Sarah Graham's Nourish packaging" },
    { src: "/images/fineday/yuppiechef-packaging-box.png", alt: "Yuppiechef humble + mash packaging box", objectPosition: "center 80%" },
    { src: "/images/fineday/jimmy-public-gin.jpg", alt: "Jimmy Public Classic Gin bottle", objectPosition: "center 53%" },
    { src: "/images/fineday/sarah-graham-nourish-boxes.jpg", alt: "Sarah Graham Nourish Power Ball boxes, both flavours" },
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
      eyebrow: "",
      columns: 3,
      tileAspect: "4/3",
      images: [
        {
          src: "/images/fineday/sarah-graham-nourish-cacao.jpg",
          alt: "Sarah Graham Nourish Cacao & Cranberry Power Ball",
          caption: "Sarah Graham Nourish - Cacao & Cranberry Power Ball.",
          width: 1200,
          height: 801,
        },
        {
          src: "/images/fineday/sarah-graham-nourish-boxes.jpg",
          alt: "Sarah Graham Nourish Power Ball boxes, both flavours",
          caption: "Sarah Graham Nourish - Power Ball boxes, both flavours.",
          width: 840,
          height: 448,
        },
        {
          src: "/images/fineday/yuppiechef-packaging-box.png",
          alt: "Humble + Mash wine glass packaging for Yuppiechef",
          caption: "Humble + Mash (Yuppiechef) - Outdoor Wine Glasses packaging.",
          width: 762,
          height: 588,
        },
        {
          src: "/images/fineday/jimmy-public-gin.jpg",
          alt: "Jimmy Public Classic Gin bottle",
          caption: "Jimmy Public - Classic Gin.",
          width: 800,
          height: 800,
        },
        {
          src: "/images/fineday/shackleton-vodka-iced-tea-cans.jpg",
          alt: "Shackleton vodka and iced tea cans",
          caption: "Shackleton - Vodka & Iced Tea range.",
          width: 1060,
          height: 1084,
        },
        {
          src: "/images/fineday/surface-pattern-thumbnail.png",
          alt: "Surface pattern design licensed to Studio E Fabrics and Nested Bean",
          caption: "Surface pattern design - later licensed to Studio E Fabrics and Nested Bean (USA).",
          width: 1536,
          height: 1024,
        },
      ],
    },
    {
      type: "showcase",
      eyebrow: "",
      images: [
        {
          src: "/images/fineday/yuppiechef-packaging-dieline.png",
          alt: "Humble + Mash wine glass packaging production dieline",
          caption: "Humble + Mash - the production-ready packaging dieline.",
          width: 2200,
          height: 1357,
        },
        {
          src: "/images/fineday/shackleton-vodka-iced-tea-labels.png",
          alt: "Shackleton spirit cooler can labels, Fynbos and Lemon",
          caption: "Shackleton - Spirit Cooler labels (Fynbos & Lemon).",
          width: 1934,
          height: 602,
        },
      ],
    },
    {
      type: "carousel",
      eyebrow: "THE OUTCOME",
      title: "Beyond the shelf",
      intro:
        "Work reached retail shelves both locally and abroad. Two collaborations were licensed internationally: surface pattern designs were picked up by Studio E Fabrics and Nested Bean (USA), carrying the brand and craft work into new commercial products well outside food and drink. A third pattern was licensed locally to South African activewear label The Mounting Bloc, putting the same craft to work closer to home.",
      images: [
        {
          src: "/images/fineday/nested-bean-zensack-product-page-1.png",
          alt: "Nested Bean Zen Sack product page featuring the collaborative pattern design",
          caption: "Nested Bean product-site showcase featuring the collaborative pattern design in a real retail product context.",
          width: 1906,
          height: 986,
        },
        {
          src: "/images/fineday/nested-bean-zensack-product-page-2.png",
          alt: "Nested Bean Zen Sack product page, alternate fabric print",
          caption: "The same product page, shown with an alternate fabric print from the collaboration.",
          width: 1916,
          height: 1006,
        },
      ],
    },
    {
      type: "showcase",
      eyebrow: "",
      columns: 2,
      images: [
        {
          src: "/images/fineday/studio-e-fabrics-3.jpg",
          alt: "Studio E Fabrics 'Welcome To Our Neighborwood' fox print fabric, selvage credited to Mel Rowlands",
          caption: "Studio E Fabrics - 'Welcome To Our Neighborwood,' fox print. The selvage reads 'by Mel Rowlands for Studio E Fabrics.'",
          width: 2000,
          height: 2000,
        },
        {
          src: "/images/fineday/studio-e-fabrics-1.jpg",
          alt: "Studio E Fabrics 'Welcome To Our Neighborwood' fabric collection, stacked",
          caption: "Studio E Fabrics - the full 'Welcome To Our Neighborwood' collection.",
          width: 2000,
          height: 2000,
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
