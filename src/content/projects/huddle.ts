import type { Project } from "@/lib/projects";

export const huddle: Project = {
  slug: "huddle",
  order: 3,
  theme: "huddle",
  projectNumber: "03",
  title: "Huddle App",
  tags: "UX RESEARCH  ·  PRODUCT DESIGN  ·  MOBILE APP DESIGN",
  blurb:
    "A shared expense app that helps students manage household costs, split bills and avoid awkward money conversations.",
  prototypeUrl: undefined,
  card: {
    bg: "#adcdc0",
    textColor: "#4b4744",
    stripe: "#f59c54",
    images: [
      { src: "/images/home/huddle-scene.png", alt: "Hand holding a phone running Huddle", style: { left: 466, top: 0, width: 531, height: 399 } },
      { src: "/images/home/huddle-mockup.png", alt: "Huddle app screens", style: { left: 856, top: 3, width: 465, height: 407 } },
      { src: "/images/home/huddle-logo.png", alt: "Huddle logo", style: { left: 1186, top: 300, width: 110, height: 74, objectFit: "contain" } },
    ],
  },
  logoLetter: "h",
  logoLabel: "THE HUDDLE APP",
  headline: "Money is the hardest conversation between housemates. Huddle makes it the easiest.",
  intro: "Built for my daughter's first year — and every student splitting a bill.",
  strip: [
    { src: "/images/home/huddle-scene.png", alt: "Hand holding a phone running Huddle" },
    { src: "/images/huddle/app-mockup.png", alt: "Huddle app screens" },
  ],
  sections: [
    {
      type: "projectIntro",
      text: "Huddle started at my kitchen table. When my daughter left for university in Stellenbosch, she suddenly had to navigate shared rent, groceries and the awkward arithmetic of who-owes-who. I designed Huddle to take the friction and the awkwardness out of shared student living: itemise costs, split fairly, settle up without the group-chat tension. Its first market is the Stellenbosch student community.",
    },
    {
      type: "problem",
      eyebrow: "THE PROBLEM",
      paragraphs: [
        "Starting university is exciting — but for many first-years, it's the first time they're managing their own money. Add shared living arrangements into the mix, and things get complicated fast.",
        "Most students cobble it together with screenshots, notes, spreadsheets and WhatsApp messages. The result is confusion, unnecessary admin, and sometimes real tension between friends.",
        "There was a clear opportunity: a tool that takes out both the financial complexity and the social friction of sharing a home.",
      ],
      side: {
        kind: "questions",
        label: "THE QUESTIONS THAT CREEP IN",
        questions: [
          "“Who paid for groceries this week?”",
          "“Did everyone actually chip in for rent?”",
          "“How much do I still owe?”",
          "“Am I paying more than everyone else?”",
          "“Why does the group chat suddenly feel tense?”",
        ],
      },
    },
    {
      type: "goal",
      eyebrow: "THE GOAL",
      title: "A calm, stress-free way to share money",
      intro:
        "Design a simple expense-sharing app made specifically for students sharing a home. Success would mean someone could, at a glance:",
      criteria: [
        "See exactly what they owe — and what they’re owed",
        "Understand where they stand for the rest of the month",
        "Add a shared expense in seconds",
        "Split costs automatically between housemates",
        "Avoid the awkward money conversations altogether",
      ],
      closing: "And above all, it had to feel calm and approachable — never like accounting.",
    },
    {
      type: "research",
      eyebrow: "UNDERSTANDING THE USER",
      title: "Understanding the user",
      personas: [
        {
          quote: "“I just want to know I’m not overspending — without doing maths every week.”",
          name: "The First-Year",
          traits: [
            "Managing their own money for the first time",
            "Easily put off by anything that looks like accounting",
            "Lives on their phone, not in spreadsheets",
            "Wants reassurance they’re okay for the month",
          ],
          implication:
            "Lead with one clear number — what they owe, and whether they’re still okay this month.",
        },
        {
          quote: "“I always end up chasing everyone for money — and I hate being the bad guy.”",
          name: "The House Treasurer",
          traits: [
            "Ends up tracking shared costs for the whole house",
            "Wants splits to be fair and obvious to everyone",
            "Tired of chasing housemates over WhatsApp",
            "Needs one shared source of truth everyone trusts",
          ],
          implication:
            "Make balances automatic and visible to everyone — so no one has to play the bad guy.",
        },
      ],
      bridge:
        "Two roles, one need: students don’t want accounting — they want to know they’re okay, and that things feel fair.",
    },
    {
      type: "keyInsight",
      eyebrow: "KEY INSIGHT",
      statement:
        "Students don’t want a budgeting tool. They want to know: “How much do I owe, how much am I owed - and am I still okay for the rest of the month?”",
    },
    {
      type: "approach",
      eyebrow: "DESIGN APPROACH",
      title: "Designing for calm, not control",
      intro:
        "Student life is already busy — so instead of adding features, every decision optimised for clarity. Three principles shaped the design.",
      steps: [
        {
          title: "Keep the important information visible",
          body: "The first thing users see is a simple financial snapshot — what they owe, what they’re owed, total household spend and their balance. The questions students care about, answered before they have to dig.",
        },
        {
          title: "Reduce cognitive load",
          body: "Student life is busy, so the interface leans on clarity over completeness: card-based layouts, clear colour coding, large figures and minimal navigation. Lightweight, and understandable in seconds.",
        },
        {
          title: "Make shared living collaborative",
          body: "Anyone can create a household and invite their roommates. As expenses are added, balances update for everyone automatically — one shared version of the truth, with no manual maths.",
        },
      ],
      callout: {
        label: "WHAT I CHOSE NOT TO BUILD",
        body: "Many finance apps try to do everything. Huddle deliberately does less. Every screen was tested against one question — does this make student life easier, or create more work? If it added complexity without clear value, it came out.",
      },
    },
    {
      type: "features",
      eyebrow: "KEY FEATURES",
      title: "What Huddle does",
      items: [
        { title: "Shared household setup", body: "Create a household and invite your roommates. Everyone shares one financial space where expenses and balances live together." },
        { title: "Automatic expense splitting", body: "Add an expense and Huddle works out each person’s share and updates balances in real time. No calculators, no spreadsheets." },
        { title: "Budget tracking", body: "A monthly budget card shows total budget, current spend, what’s left and your progress through the month — so there are no end-of-month surprises." },
        { title: "Expense history", body: "A simple, scannable feed of every expense: what was bought, who paid, when, and how it changes each balance. Transparency that heads off disputes." },
      ],
    },
    {
      type: "showcase",
      eyebrow: "A LOOK AT HUDDLE",
      title: "The product, in students’ hands",
      images: [
        { src: "/images/huddle/app-2.png", alt: "Huddle home dashboard", width: 311, height: 674 },
        { src: "/images/huddle/app-3.png", alt: "Huddle expenses", width: 311, height: 674 },
      ],
    },
    {
      type: "iterations",
      eyebrow: "RESULTS",
      title: "Tested live, in a real student kitchen",
      intro:
        "I had the best possible test environment: my daughter and her roommate used Huddle for real, every day, in their first year of shared living. Watching them actually live with it surfaced issues no mockup ever would — and let me fix them fast.",
      items: [
        {
          label: "ITERATION · 01",
          title: "“Invite to household”",
          body: "Setup was clumsy at first. Through their feedback it became a clear two-step flow: the first housemate creates the household, then sends an invite for the others to “join household.” One shared space, set up in seconds — but it took several rounds to get the roles and permissions right.",
        },
        {
          label: "ITERATION · 02",
          title: "The budget progress bar",
          body: "They wanted to know, at any moment, how much was left for the month — without doing the maths. So I added a progress bar that fills as spending grows. A single glance tells you where you stand. No end-of-month surprises.",
          image: { src: "/images/huddle/app-4.png", alt: "Huddle budget progress bar", width: 566, height: 239 },
        },
      ],
      closing:
        "Designing with real users in the room — not a persona on a slide — made every decision sharper, and the product genuinely more usable.",
    },
    {
      type: "businessOpp",
      eyebrow: "BUSINESS OPPORTUNITY",
      title: "Built for Stellenbosch — designed to scale",
      intro:
        "Huddle launches into the Stellenbosch student community, where shared accommodation is the norm and expense-sharing is a daily reality. From there, the natural path is other university towns and student-housing markets.",
      columns: [
        {
          label: "ALWAYS FREE",
          title: "The everyday core",
          bullets: ["Record shared expenses", "Split costs automatically", "Track balances & monthly budget"],
          footnote: "Free for every student — always.",
        },
        {
          label: "PREMIUM · FUTURE",
          title: "Convenience upgrades",
          bullets: [
            "Bank-account integration",
            "Automated transaction matching",
            "Multiple currencies",
            "Additional languages",
            "Smart settlement reminders",
            "Enhanced budgeting insights",
          ],
        },
      ],
    },
    {
      type: "learnings",
      eyebrow: "REFLECTION",
      title: "Reflection",
      cards: [
        { title: "Born from something real", body: "Huddle was inspired by a genuine challenge facing someone close to me. That made the user impossible to abstract away — and kept every decision honest." },
        { title: "A narrow audience kept it focused", body: "Designing specifically for students sharing a home prevented feature creep. A clear, specific user made it obvious what to leave out." },
        { title: "From awkward to effortless", body: "The best UX often isn’t more functionality — it’s removing friction from an everyday task. Huddle turns one of the most uncomfortable conversations, money, into one of the simplest." },
      ],
    },
  ],
};
