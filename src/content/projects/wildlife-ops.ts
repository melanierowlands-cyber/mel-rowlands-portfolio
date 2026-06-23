import type { Project } from "@/lib/projects";

export const wildlife: Project = {
  slug: "wildlife-ops",
  order: 2,
  theme: "wildlife",
  projectNumber: "02",
  title: "Wildlife Ops",
  tags: "UX RESEARCH  ·  PRODUCT DESIGN  ·  DASHBOARD DESIGN",
  blurb:
    "A wildlife management platform that helps reserve teams coordinate operations, monitor assets and respond faster in the field.",
  prototypeUrl: "https://wildlife-ops.vercel.app/",
  card: {
    bg: "#837c74",
    textColor: "#ffffff",
    stripe: "#cc9438",
    photoLeft: "/images/home/wildlife-card-elephant.png",
    photoRight: "/images/home/wildlife-card-dashboard.png",
    logo: "/images/home/wildlife-paw.png",
    logoWidth: 70,
    logoOn: "left",
    logoCorner: "br",
  },
  logoLetter: "w",
  logoLabel: "WILDLIFE OPS DASHBOARD",
  headline: "Conservation is logistics. I designed the system that holds it together.",
  intro:
    "A live operations dashboard for a working game reserve - pulling animal health, field teams and incidents into one clear view.",
  strip: [
    { src: "/images/home/wildlife-elephant.png", alt: "Elephant on the reserve" },
    { src: "/images/wildlife/dashboard-overview.png", alt: "Reserve dashboard" },
  ],
  sections: [
    {
      type: "projectIntro",
      text: "Mziki is a 6,000-hectare game reserve in KwaZulu-Natal where my Dad owns property and our family visit there often. Part of the Munywana Conservancy (alongside &Beyond Phinda Private Game Reserve), it offers a Big Five safari experience and is renowned for birdwatching and rewilding. Behind that experience is a complex operation of rescues, animal health, field teams, and daily activity across remote terrain. This case study explores how I designed and built a dashboard that brings it all into a single, clear view.",
    },
    {
      type: "problem",
      eyebrow: "THE PROBLEM",
      paragraphs: [
        "A working reserve is in constant motion. Rangers patrol, animals are darted and treated, snares are found and cleared, vehicles break down, and teams move across thousands of hectares with patchy signal.",
        "Most of that activity lives in people's heads, WhatsApp groups, and notebooks that never make it back to the office. When information is scattered, the reserve runs on memory and goodwill. Managers can't see what happened overnight without making multiple phone calls, and patterns - where snaring spikes or which animals need repeated intervention - often remain hidden until they become a crisis.",
        "The data exists. It just never comes together in one place.",
      ],
      side: {
        kind: "questions",
        label: "THE QUESTIONS A MANAGER CAN’T ANSWER",
        questions: [
          "“What actually happened on the reserve last night?”",
          "“Where are my field teams right now?”",
          "“Which incidents are still open?”",
          "“Is snaring getting worse, or am I imagining it?”",
          "“Which animals keep needing our help?”",
        ],
      },
    },
    {
      type: "goal",
      eyebrow: "THE GOAL",
      title: "One clear view of everything happening on the reserve",
      intro:
        "Design an operations dashboard that pulls field activity, incidents and team movements into a single screen. Success would mean anyone - from a ranger to the head of conservation - could, at a glance:",
      criteria: [
        "See what happened across the reserve, day or night",
        "Know where every field team is, and what they’re working on",
        "Track each incident from first report to resolution",
        "Spot patterns - snaring hotspots, repeat-incident areas - before they escalate",
        "Turn scattered field data into decisions, fast",
      ],
      closing:
        "And above all, it had to work for people in the field - fast, glanceable, and usable on a bad-signal day.",
    },
    {
      type: "research",
      eyebrow: "RESEARCH & DISCOVERY",
      title: "Who the dashboard had to serve",
      personas: [
        {
          portrait: "/images/wildlife/avatar-reserve-manager.png",
          quote: "“By the time something reaches me, it’s usually already a problem. I need to see it coming.”",
          name: "The Reserve Manager",
          traits: [
            "Accountable for the whole reserve, rarely in one place",
            "Makes fast calls on incomplete information",
            "Buried in WhatsApp updates and radio chatter",
            "Needs the overnight picture before the day begins",
          ],
          implication:
            "Lead with a single overview - incidents, teams and activity - so the state of the reserve is legible in seconds.",
        },
        {
          portrait: "/images/wildlife/avatar-field-ranger.png",
          quote: "“I’m out in the bush all day. If logging something takes more than a few taps, it won’t happen.”",
          name: "The Field Ranger",
          traits: [
            "Works across remote terrain with patchy signal",
            "Logs incidents on the move, often one-handed",
            "Low patience for forms and admin",
            "Needs to trust that what they report gets acted on",
          ],
          implication:
            "Keep capture fast and forgiving - and make every logged report visibly feed the bigger picture.",
        },
      ],
      bridge:
        "Two very different users, one shared need: the field has to feed the office, and the office has to hand the field a clear, current picture in return.",
    },
    {
      type: "keyInsight",
      eyebrow: "KEY INSIGHT",
      statement:
        "Mziki was never short on data. Trackers, collars, and patrols generate it daily. What was missing was a shared view that turned it into actionable insight for teams in real time.",
    },
    {
      type: "approach",
      eyebrow: "UX STRATEGY",
      title: "Why the dashboard is built the way it is",
      intro:
        "Three principles shaped every screen - built for glanceability, for field reality, and for one shared source of truth.",
      steps: [
        {
          title: "Lead with the overview",
          body: "The first thing anyone sees is the state of the reserve - animals tracked, open incidents, field teams on duty and overall herd health. The questions a manager actually asks, answered before they have to dig for them.",
        },
        {
          title: "Design for the field, not the office",
          body: "Rangers work on the move with patchy signal, so capture is fast and the interface leans on clarity over completeness - cards, clear status colours, large figures, minimal navigation. Understandable in seconds, on any screen.",
        },
        {
          title: "One shared source of truth",
          body: "Every report a ranger logs flows into the same live view the manager sees. No re-keying, no parallel spreadsheets - one version of what’s happening on the reserve, updating for everyone at once.",
        },
      ],
      callout: {
        label: "SIMPLICITY AS A DELIBERATE CONSTRAINT",
        body: "Simplicity was a goal in its own right. With this much field data, the hard part isn’t collecting it - it’s knowing where to look. So I deliberately narrowed the scope to the Big Five, giving the dashboard the capacity to point to real improvements for the species that matter most - rather than spreading itself thin across everything that moves on the reserve.",
      },
    },
    {
      type: "features",
      eyebrow: "KEY FEATURES",
      title: "What Wildlife Ops does",
      items: [
        { icon: "/images/wildlife/icon-live-operations.png", title: "Live operations overview", body: "A single dashboard of animals tracked, open incidents, field teams on duty and overall herd health - the pulse of the reserve, refreshed in real time." },
        { icon: "/images/wildlife/icon-tracking.png", title: "Incident tracking", body: "Every snare, injury, sighting or breakdown logged, categorised and tracked from first report to resolution - so nothing slips through the cracks." },
        { icon: "/images/wildlife/icon-incident-map.png", title: "Live reserve map", body: "A live map plots herds and field-team positions across the reserve, turning thousands of hectares into one readable picture and surfacing where attention is needed." },
        { icon: "/images/wildlife/icon-insights.png", title: "Wildlife & impact insights", body: "Breakdowns of herd health and incident types reveal the patterns behind the day-to-day - which animals need attention, and what’s getting better or worse." },
      ],
    },
    {
      type: "showcase",
      eyebrow: "THE DASHBOARD",
      title: "A look at Wildlife Ops",
      intro: "The live product - built in Figma Make, refined in code, deployed on Vercel.",
      images: [
        { src: "/images/wildlife/dashboard-health.png", alt: "Reserve Overview dashboard", caption: "Reserve Overview - animals tracked, field teams, open incidents and herd health, with a live map of the reserve.", width: 1280, height: 832 },
        { src: "/images/wildlife/dashboard-overview.png", alt: "Animal Health Record", caption: "Animal Health Record - a detailed view of each individual or herd, with health trend, observation log and vet scheduling.", width: 1280, height: 832 },
      ],
    },
    {
      type: "iterations",
      eyebrow: "PROCESS & ITERATION",
      title: "From a rough concept to a working product",
      intro:
        "Wildlife Ops didn’t arrive fully formed. It started as a loose Figma concept and changed shape as it met the reality of how a reserve actually operates. Two pivots mattered most.",
      items: [
        {
          label: "ITERATION · 01",
          title: "Design for the field first",
          body: "The earliest screens were built for the office - dense, detailed, desktop-first. But the people generating the data are out in the bush on a phone with patchy signal. I reworked capture to be fast, forgiving and glanceable, so logging an observation takes seconds, not minutes - and the office view is fed by what the field can realistically do.",
        },
        {
          label: "ITERATION · 02",
          title: "From incident console to animal-first",
          body: "An early concept leaned on a generic ops console - missions, alerts, a map. Watching how a reserve actually reasons, it was clear the animals are the unit that matters. I rebuilt the product around individuals and herds - their health, history and location - with incidents and teams hanging off them.",
          image: { src: "/images/wildlife/early-concept.png", alt: "Early concept", width: 1439, height: 1093 },
        },
      ],
      closing:
        "Designing close to the real operation - not an imagined one - is what turned a generic dashboard into something a reserve could actually run on.",
    },
    {
      type: "businessOpp",
      eyebrow: "WHERE THIS GOES NEXT",
      title: "From prototype to the people who’d use it",
      intro:
        "Wildlife Ops is a working prototype, built to start a conversation. The next step is to put it in front of Mziki’s team - who already hold sophisticated tracking and telemetry data, but not always the design layer that turns it into daily decisions. That’s the gap this is meant to fill.",
      columns: [
        {
          label: "TODAY - THE PROTOTYPE",
          title: "What’s already built",
          bullets: [
            "Live reserve overview & herd health",
            "Animal & herd records with history",
            "Incident tracking & team dispatch",
          ],
          footnote: "Designed, built and deployed - ready to demo.",
        },
        {
          label: "NEXT - WITH MZIKI",
          title: "Where it could go",
          bullets: [
            "Wire in live telemetry & collar data",
            "Real-time alerts from the field",
            "Offline-first capture for low signal",
            "Role-based views per team",
            "Reporting for funders & boards",
            "Roll out across more reserves",
          ],
        },
      ],
    },
    {
      type: "pipeline",
      eyebrow: "PROTOTYPE & BUILD",
      title: "How it was designed and shipped",
      intro:
        "Wildlife Ops wasn’t just designed - it was built and deployed. This is the toolchain that took it from a first idea to a live product anyone can open.",
      steps: [
        { tool: "Figma", desc: "Wireframes, the design system and the final high-fidelity screens - the source of truth." },
        { tool: "Figma Make", desc: "Turned the design into a real, interactive front-end - fast." },
        { tool: "Claude Code", desc: "A pair-programmer to extend the app, wire up data and fix issues in the code." },
        { tool: "GitHub", desc: "Every change versioned - safe to iterate on, easy to roll back." },
        { tool: "Vercel", desc: "Deployed to a live URL, ready to open, test and demo anywhere." },
      ],
      closing:
        "A modern design-to-deploy workflow - evidence that I can take an idea all the way to a working, shipped product, not just a mockup.",
    },
    {
      type: "learnings",
      eyebrow: "KEY LEARNINGS",
      title: "What this project taught me",
      cards: [
        { title: "Start with the operation, not the org chart", body: "The reserve didn’t need a prettier database - it needed the day’s reality in one place. Designing close to how people actually work surfaced needs no feature list would have." },
        { title: "The best move was deciding what not to build", body: "Rather than competing with Mziki’s tracking systems, Wildlife Ops became the layer that makes them legible. It’s useful precisely because it doesn’t try to do everything." },
        { title: "Design carries further when it ships", body: "Taking it from Figma through Figma Make, Claude Code and Vercel turned a concept into something a reserve can actually open and react to. A working product starts a different conversation than a slide." },
      ],
    },
  ],
};
