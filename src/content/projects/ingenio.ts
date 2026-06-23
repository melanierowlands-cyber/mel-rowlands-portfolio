import type { Project } from "@/lib/projects";

export const ingenio: Project = {
  slug: "ingenio",
  order: 1,
  theme: "ingenio",
  projectNumber: "01",
  title: "iNGENiO Education",
  tags: "UX RESEARCH  ·  PRODUCT DESIGN  ·  LEARNING EXPERIENCE",
  blurb:
    "A digital learning platform that helps young artists build creative and technology skills through structured online courses.",
  prototypeUrl: "https://ingenioeducation.com/",
  card: {
    bg: "#f3a361",
    textColor: "#ffffff",
    stripe: "#4282d0",
    photoLeft: "/images/home/ingenio-hand-ipad.png",
    photoRight: "/images/home/ingenio-desktop-mockup.png",
    logo: "/images/home/ingenio-wordmark.png",
    logoWidth: 118,
    photoRightFrame: "ipad",
    photoRightBg: "#ebebeb",
  },
  logoLetter: "i",
  logoLabel: "INGENIO EDUCATION",
  headline: "We built a place to teach kids art & tech. Then we had to make it work.",
  intro:
    "Ingenio combines creativity, technology and education into a scalable online learning platform for children aged 5–18.",
  strip: [
    { src: "/images/home/ingenio-photo.png", alt: "Young artist learning" },
    { src: "/images/home/ingenio-course.png", alt: "iNGENiO course screens" },
  ],
  sections: [
    {
      type: "projectIntro",
      text: "Ingenio is an EdTech platform I co-founded and designed - we teach digital art to kids aged 5 to 18. Building it from the ground up meant learning on the go: every new cohort surfaced friction we hadn't designed for. This case study looks at one of those hurdles [low free trial engagement] and walks through how I diagnosed it, designed a fix, and proved whether it actually worked.",
    },
    {
      type: "problem",
      eyebrow: "THE PROBLEM",
      paragraphs: [
        "Plenty of people were landing on the site - they just weren't starting a free trial. We learned that the trial itself was part of the problem: it sat behind a credit-card paywall, tucked inside the monthly subscription flow. “Free” didn't really feel free.",
        "When I dug into why, the same hesitations kept coming up. Parents weren't sure what the trial actually included, whether the courses were worth it, how much time it would take - or whether their child would genuinely stick with it.",
        "That uncertainty was quietly draining conversion, from first visit all the way through to paid.",
      ],
      side: {
        kind: "metrics",
        cards: [
          { label: "WEBSITE TRAFFIC", value: "2000-4000 visitors/month" },
          { label: "TRIAL SIGN-UPS", value: "1-2 per week" },
        ],
      },
    },
    {
      type: "research",
      eyebrow: "UNDERSTANDING OUR USERS",
      title: "Understanding Our Users",
      personas: [
        {
          quote: "“Show me it’s worth it — fast. I’ll decide in five minutes.”",
          name: "Busy Parent",
          portrait: "/images/ingenio/busy-parent.png",
          traits: [
            "Time-poor — judging value fast",
            "Wants real educational substance",
            "Low tolerance for setup friction",
            "Makes quick keep-or-drop calls",
          ],
          implication: "Show real course value in the first minute — no card, no setup wall.",
        },
        {
          quote: "“I’ve never seen this before — let me explore at my own pace first.”",
          name: "Hesitant Parent",
          portrait: "/images/ingenio/hesitant-parent.png",
          traits: [
            "Distrusts a brand-new, unproven category",
            "Wants to explore on their own terms",
            "Needs proof their child will engage",
            "A credit-card trial only adds pressure",
          ],
          implication:
            "Replace the card-gated trial with an open, self-paced trial that earns trust before payment.",
        },
      ],
      bridge:
        "Different parents, same blocker — in a category with no reference points, they needed to lower the risk before they’d commit.",
    },
    { type: "keyInsight", eyebrow: "KEY INSIGHT", statement: "The free trial wasn't really free." },
    {
      type: "approach",
      eyebrow: "THE FIX",
      title: "Rebuilding the trial, end to end",
      intro: "No half-measures — if the trial was the barrier, the trial had to change.",
      steps: [
        {
          title: "Confirmed where people were dropping off.",
          body: "I dug into the analytics and user feedback, and it backed the hunch: the credit-card field was the single biggest barrier. People clicked “Start Free Trial,” hit the card field, and left.",
        },
        {
          title: "Made the free trial impossible to miss.",
          body: "I rebuilt the CTAs across the site so “Start Free Trial” became the clear, primary action — repeated, and visually distinct from “Subscribe.” No more guessing how to begin.",
        },
        {
          title: "Reframed the trial as its own product.",
          body: "I restructured pricing from two tiers to three, pulling Free Trial out as a standalone first column alongside Monthly and Yearly — so it read as a real option, not a feature buried inside a subscription.",
        },
        {
          title: "Stripped out every barrier to entry.",
          body: "No credit card. No payment details. Just an email and a password. The trial finally became a genuine, low-commitment “try before you buy.”",
        },
        {
          tag: "DESIGN → BUILD",
          title: "Then I built it.",
          body: "I implemented the entire flow - WordPress, WooCommerce and LearnDash - including the WooCommerce rework needed to decouple the trial from the paid subscription.",
        },
      ],
    },
    {
      type: "pricingReframe",
      eyebrow: "THE PRICING REFRAME",
      title: "Before & after: the free-trial entry point",
      intro:
        "Restructured pricing from two tiers to three — making the Free Trial a first-class product, not a feature buried inside a subscription.",
      before: {
        heading: "Before",
        plans: [
          { name: "Monthly Plan", note: "7 day free trial included" },
          { name: "Yearly Plan", note: "7 day free trial included" },
        ],
        caption: "Two tiers. The trial sat buried inside both — and a credit card was required to start.",
      },
      after: {
        heading: "After",
        cards: [
          {
            flag: "NO COMMITMENT",
            name: "Free Trial",
            price: "R0",
            meta: "7 days free — no credit card required",
            features: [
              "Full access to all 100+ lessons for 7 days",
              "No credit card needed — just sign up and start",
              "Ages 5–18 · CAPS, IEB & Cambridge aligned",
            ],
            cta: "Start Your Free Trial →",
            footnote: "No credit card · No commitment · Instant access",
            featured: true,
          },
          {
            flag: "MOST FLEXIBLE",
            name: "Monthly Explorer",
            price: "R299",
            was: "R399",
            unit: "/ month",
            meta: "Billed monthly · Cancel anytime",
            features: [
              "100+ creative lessons — animation, illustration, landscapes & more",
              "Curriculum-aligned resources",
              "New lessons added every month",
              "EPiCCS™ social-emotional learning built in",
              "Cancel anytime · No lock-in",
            ],
            cta: "Get started →",
            footnote: "Cancel anytime · No lock-in",
          },
          {
            flag: "BEST VALUE",
            name: "Annual Mastery Pass",
            price: "R2990",
            was: "R4800",
            unit: "/ year",
            meta: "Pay for 10 months, get 12 · Save R1810  =  R249 / month",
            features: [
              "Everything in Monthly, plus:",
              "Two months free (save R1810)",
              "Freebies — brushes & graphics",
              "Priority access to new content",
            ],
            cta: "Lock in my rate →",
            footnote: "Billed annually · Save R1810",
          },
        ],
        annotation: "The unlock: a true zero-commitment entry point",
        note: "Note: pricing shown in ZAR — iNGENiO’s home market",
      },
    },
    {
      type: "results",
      eyebrow: "THE RESULTS",
      title: "One change, a measurable shift",
      intro:
        "Free-trial sign-ups after the credit-card barrier came down — the trial went live on 25 March 2026. Before the change, almost no one reached the trial at all.",
      stats: [
        { label: "FIRST 7 WEEKS", value: "76", sub: "trial sign-ups" },
        { label: "FIRST FULL MONTH", value: "56", sub: "sign-ups in April 2026" },
        { label: "AVG · ACTIVE DAY", value: "2.3", sub: "sign-ups per day" },
        { label: "CONSISTENCY", value: "24/30", sub: "days with sign-ups in April" },
      ],
      chartTitle: "Daily trial sign-ups · April 2026",
      chartLegend: "Trial sign-ups",
      chart: [7, 2, 2, 2, 1, 1, 0, 3, 2, 1, 2, 0, 1, 1, 0, 4, 0, 1, 2, 3, 4, 3, 1, 1, 1, 4, 4, 3, 0, 0],
      chartAxis: ["Apr 1", "Apr 8", "Apr 15", "Apr 22", "Apr 29"],
      validated: {
        label: "WHAT THIS VALIDATED",
        body: "The core bet held: remove the credit-card barrier and people will actually start the trial. Sign-ups went from effectively zero - gated behind a card - to a steady daily flow.",
      },
      note: "Honest note: iNGENiO is an early-stage platform I co-founded, so these are real counts from a small but genuine user base. The consistency of daily sign-ups — not the raw scale — is the signal.",
    },
    {
      type: "pipeline",
      eyebrow: "PROTOTYPE & BUILD",
      title: "How it was designed and shipped",
      intro:
        "Ingenio wasn't just designed — it was built and running. This is the toolchain that took it from concept to a live platform with paying students.",
      steps: [
        { tool: "Figma", desc: "Wireframes, user flows and high-fidelity screens — the design source of truth before a line of code was written." },
        { tool: "WordPress + WooCommerce", desc: "Site structure, course catalogue and checkout — WooCommerce handled course products and PayFast wired up the payment gateway." },
        { tool: "Claude Code", desc: "Generated the HTML for the website front-end and the PHP powering automated email confirmations and a nurture sequence for new free-trial sign-ups." },
        { tool: "LearnDash", desc: "Delivered the course content and surfaced engagement analytics — completion rates, lesson drop-off and learner progress." },
        { tool: "Hotjar", desc: "Session recordings and heatmaps to monitor how students moved through the platform and where friction appeared." },
      ],
      closing:
        "A full design-to-deploy stack — evidence that I can take a product from Figma all the way to a live, revenue-generating platform.",
    },
    {
      type: "learnings",
      eyebrow: "WHAT I LEARNED",
      title: "What I Learned",
      cards: [
        {
          title: "Design for trust, not just clarity",
          body: "In a brand-new category with no reference points, trust was the real conversion lever - people committed once the product answered their quiet doubts before they had to ask.",
        },
        {
          title: "Friction is decisions, not words",
          body: "The fix was never shorter copy. It was fewer decisions before value was visible - removing the credit-card step did more than any amount of persuasion.",
        },
        {
          title: "Test the assumption, not the feature",
          body: "A few small research moments separated real hesitation from imagined friction, and pointed straight at the one barrier that actually mattered.",
        },
        {
          title: "Building it sharpened the design",
          body: "Implementing the flow myself; WordPress, WooCommerce, LearnDash - meant every decision was grounded in what was genuinely buildable. Owning the build made the design better.",
        },
      ],
    },
  ],
};
