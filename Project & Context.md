Project & Context

Mel Rowlands — Product Design Portfolio (Figma file DHXrCjbgmnmQUGoG89JdYU). A minimalist, editorial portfolio targeting a senior product design role. All three case studies are now built; the About page is fully written across all breakpoints. Goal of the portfolio: impress recruiters and land a role.

Last updated: 2026-06-18

────────────────────────────────────────
STATUS AT A GLANCE
────────────────────────────────────────

All 5 Figma pages exist: 01 · Cover (0:1), 02 · Design System (7:2), 03 · Homepage (7:3 — most work lives here), 04 · About (7:4), 05 · Contact (7:5). Each page has Desktop / Tablet / Mobile frames.

Three case studies, all BUILT. Confirmed order (set 2026-06-18):

  1st  Ingenio       PROJECT 01   (node 60:72)
  2nd  Wildlife Ops  PROJECT 02   (node 151:57)
  3rd  Huddle        PROJECT 03   (node 110:62)

Order rationale: lead with Ingenio (most credible — real research + real results), Wildlife Ops second (most distinctive — conservation + AI-build story), Huddle last (founder/human closer). This is the "safe" order while Wildlife Ops still uses drafted (not yet validated) numbers. Once Mel gets real numbers from Mziki, consider promoting Wildlife Ops to 1st.

Next/Previous nav chain (circular):
  Ingenio:      Prev = Portfolio Home   Next = Wildlife Ops
  Wildlife Ops: Prev = Ingenio          Next = Huddle
  Huddle:       Prev = Wildlife Ops      Next = Ingenio

────────────────────────────────────────
CASE STUDIES
────────────────────────────────────────

Ingenio (node 60:72) — COMPLETE
Real EdTech platform Mel co-founded. Sections: Problem, Personas, Key Insight, The Fix (5-step), Solution before/after pricing visual, Results (real bar-chart data), Key Learnings, Next Project nav. Project tone = clay/ingenio VariableID:3:10.

Wildlife Ops (node 151:57) — BUILT 2026-06-18
Reskinned from a duplicated Huddle frame. NOT the old "dark Palantir ops console" idea — that was abandoned. It is editorial OLIVE (proj-wildlife VariableID:3:11 #41503C); all 65 clay/ingenio fills were rebound to olive.
Subject: "Mziki — Big 5 Wildlife Ops" dashboard for a 6,000-ha private game reserve in KwaZulu-Natal (Munywana Conservancy, alongside &Beyond Phinda). Framing = "Conservation is logistics. I designed the system that holds it together." Live-app product nav = Overview / Animal Health / Team Dispatch. Head-ranger persona "Kumba Dwongeza".
Sections: Problem 151:83 · Goal 151:97 · Research/personas 151:124 (Reserve Manager + Field Ranger) · Key Insight 151:178 · UX Strategy 151:182 (includes "Simplicity as a deliberate constraint / Big Five scope" callout) · Key Features 151:214 · The Dashboard 151:246 (2 real screenshots: Reserve Overview 197:54, Animal Health Record 197:57) · Process & Iteration 151:262 · Where This Goes Next 151:279 · Prototype & Build 207:53 (5 pipeline cards: Figma → Figma Make → Claude Code → GitHub → Netlify) · Key Learnings 151:323 · Next Project nav 151:340.
STILL NEEDS MEL TO VERIFY (drafted, credible but not from real research): personas + quotes, Goal success criteria, the two iteration stories, "Where this goes next" roadmap, Key Learnings, and the Prototype & Build tool roles (did GitHub/Netlify actually feature?). Persona portraits are still leftover Huddle placeholders — swap when wildlife-appropriate images are available.

Huddle (node 110:62) — COMPLETE, awaiting screenshots
14 sections incl. Goal checklist, student personas, Design Approach, Key Features, "A Look at Huddle" showcase, Results, Business Opportunity, Reflection, Next Project nav.
USER ACTION: drag 3 screenshots into the named drop-frames, then delete the hint labels:
  home dashboard → 131:60   ·   categories/expenses → 131:65   ·   budget bar closeup → 132:53 (inside Results card 126:62)

"View Live Prototype ↗" CTA added to ALL 3 case-study header bars (centered between MEL ROWLANDS and PROJECT XX): Ingenio 235:19, Wildlife 235:20, Huddle 235:21. Poppins Medium 13px, ink-muted, 8% letter-spacing. NOTE: no URLs attached yet — Mel to wire each to its live prototype.

────────────────────────────────────────
ABOUT PAGE (7:4) — written 2026-06-18, all 3 breakpoints
────────────────────────────────────────

Recruiter-focused copy, identical across Desktop (25:2) / Tablet (31:17) / Mobile (32:32). Title kept as "product designer" (NOT "Senior" — Mel's call; keep homepage hero consistent).

Headline: "I design products that make complicated things feel simple"
Intro pitch para: 20+ yrs design depth, research-led, owns design end-to-end (research/IA/interaction/UI), pairs Figma + Claude Code; "product thinking, research and polished UI from one person, at shipping speed."
Logistics line: "CAPE TOWN · UK PASSPORT · AVAILABLE FOR REMOTE ROLES ON UK / US EAST-COAST HOURS"
Background — subhead "Designer. Founder. Builder." + 3 paras:
  1) "I've spent 20+ years turning complex ideas into products people can actually use."
  2) "My career started in design studios and investment research, before moving into product design, UX and startup building. Most recently I co-founded iNGENiO Education, where I led product strategy, UX, research and growth for a digital learning platform used by schools and families."
  3) "Today I combine product thinking, research and AI-assisted development to take ideas from early concepts to shipped experiences."
"Four threads through my work" cards (kept): Education / Conservation / AI / Community — map to the 3 case studies + AI workflow.

PORTRAIT: headshot added to DESKTOP only. Tablet (31:24) and Mobile (32:39) portraits still show the "MR / ADD YOUR PHOTO" placeholder — needs the same photo.

MOBILE LAYOUT BUG (fixed 2026-06-18): the About/Mobile frame was 25,425px tall — inner frames had layoutGrow:1 inside fixed-height parents, and the Background column's counter-axis width was pinned to 1px (text wrapped 1 char per line). Fixed by setting layoutGrow:0, layoutSizingHorizontal:FILL, layoutSizingVertical:HUG on inner frames, parents to HUG, and the Four-threads heading to FILL+wrap. Now ~3,570px. LESSON: other mobile frames (Homepage, Contact) likely carry the same bug — check before trusting.

────────────────────────────────────────
DESIGN SYSTEM (current values — some changed 2026-06-18)
────────────────────────────────────────

Colour variables:
  paper        3:3   #F4F0E8
  paper-alt    3:4   slightly off-paper
  surface      3:5
  ink          3:6   #1C1A17
  ink-muted    3:7   #6B635A
  line         3:8   hairline border
  accent       3:9   #D98245  amber  ← CHANGED from clay #B4552F (2026-06-18). Auto-propagates to all accent-bound fills (section eyebrows, buttons).
  proj-ingenio 3:10  clay #B85C38
  proj-wildlife 3:11 olive #41503C
  proj-huddle  3:12  teal-slate #5E777A
  on-accent    3:13

Footer component (11:2) background rectangle (11:9): #4B4744 dark charcoal — set as a DIRECT fill (was bound to ink-muted variable). Propagates to all footer instances.

Section eyebrow labels across all 3 case studies: 20px Poppins SemiBold, 6% letter-spacing (was 16px, inconsistent spacing). 37 labels updated 2026-06-18.

Spacing tokens space/xs..6xl = 4:3..4:12 (4/8/12/16/24/32/48/64/96/128).
Radius tokens radius/sm..full = 4:14..4:18 (8/14/24/32/999).

Typography:
  Case-study headings  = Hanken Grotesk
  Portfolio/homepage headings = Geist
  Body everywhere      = Poppins
  NOTE: some text nodes mix fonts unexpectedly (e.g. an About background paragraph used Hanken Grotesk Medium; the Ingenio nav "next project" title uses Geist Medium). ALWAYS load a node's own fonts via getStyledTextSegments(['fontName']) before editing — never assume the family/style.

────────────────────────────────────────
KEY DECISIONS & CONSTRAINTS
────────────────────────────────────────

Always invoke the figma:figma-use skill before every use_figma call — never skip this. Pass skillNames: "resource:figma-use".

Case-study headings = Hanken Grotesk (NOT Geist). Homepage/portfolio headings = Geist. Body = Poppins.

No glassmorphism, heavy gradients, neon, startup clichés — minimalist editorial only.

Wildlife Ops is editorial olive, NOT a dark ops console (old idea abandoned).

Plugin-API gotchas:
  appendChild must fire BEFORE setting layoutSizingHorizontal/Vertical = 'FILL' or 'HUG' on children.
  Fixed-size frames need primaryAxisSizingMode/counterAxisSizingMode + resize(w,h).
  Beware layoutGrow:1 inside a fixed-height parent — it stretches the child to fill (root cause of the mobile bug). Prefer HUG.
  Page switching: await figma.setCurrentPageAsync(page) — the sync setter throws.
  Editing text: load each node's CURRENT fonts (getStyledTextSegments) before setting .characters.
  setBoundVariableForPaint returns a NEW paint — must capture and reassign.

Figma plan: Professional, Full editor seat.

────────────────────────────────────────
ESSENTIAL CODE / CONFIG SNIPPETS
────────────────────────────────────────

// Resolve a variable by ID
const V = async id => await figma.variables.getVariableByIdAsync(id);
const paper    = await V('VariableID:3:3');
const ink      = await V('VariableID:3:6');
const inkMuted = await V('VariableID:3:7');
const accent   = await V('VariableID:3:9');  // now amber #D98245
const wildlife = await V('VariableID:3:11'); // olive — for Wildlife Ops

// Bind a colour variable to a fill
function bindFill(node, variable) {
  node.fills = [figma.variables.setBoundVariableForPaint(
    { type: 'SOLID', color: { r:0, g:0, b:0 } }, 'color', variable
  )];
}

// Safe EDIT of existing text — load the node's own fonts first (robust to mixed fonts)
async function setText(id, str){
  const n = await figma.getNodeByIdAsync(id);
  const segs = n.getStyledTextSegments(['fontName']);
  const seen = new Set();
  for (const s of segs){ const k = s.fontName.family+'|'+s.fontName.style; if(!seen.has(k)){ seen.add(k); await figma.loadFontAsync(s.fontName); } }
  if (segs.length === 0) await figma.loadFontAsync(n.fontName);
  n.characters = str;
}

// Switch to working page (Homepage = 7:3, About = 7:4)
const page = figma.root.children.find(p => p.id === '7:3');
await figma.setCurrentPageAsync(page);

────────────────────────────────────────
PENDING WORK (priority order)
────────────────────────────────────────

1. USER: drop the 3 Huddle screenshots into drop-frames 131:60 / 131:65 / 132:53, delete hint labels.
2. USER: add headshot to About Tablet (31:24) + Mobile (32:39) portraits (Desktop already done). Claude can copy the Desktop image fill across if asked.
3. USER: wire "View Live Prototype" CTAs (235:19/20/21) to real prototype URLs.
4. Mel to verify Wildlife Ops drafted copy + numbers (esp. once Mziki gives real data) and swap persona portraits.
5. Check Homepage + Contact mobile frames for the same layoutGrow/fixed-height bug found on About/Mobile.
6. (Deferred) Coded static HTML/CSS site → deploy to Netlify (same as CV at melrowlandscv.netlify.app).

────────────────────────────────────────
FILES & LOCATIONS
────────────────────────────────────────

Figma file        DHXrCjbgmnmQUGoG89JdYU
Memory index      /Users/melanierowlands/.claude/projects/-Users-melanierowlands-Library-CloudStorage-Dropbox-UX-ROLE-Portfolio/memory/MEMORY.md
Full node map / handoff   …/memory/handoff.md   (richest source of node IDs — keep both in sync)
User profile      …/memory/mel-rowlands-profile.md
Figma project memory  …/memory/portfolio-figma-project.md
