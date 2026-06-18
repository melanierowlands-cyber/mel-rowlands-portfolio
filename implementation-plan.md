# Mel Rowlands — Portfolio · Implementation Plan

> Source of truth: Figma file `DHXrCjbgmnmQUGoG89JdYU` — "Mel Rowlands — Product Design Portfolio".
> Style direction: **Warm Editorial Neutral** — minimalist, editorial, generous whitespace, a single warm clay/amber accent. No glassmorphism, gradients, neon, or startup clichés.
> This document is the build blueprint. Read it fully before writing any code.

## Build directives (locked)

1. **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS, deployed to **Vercel**. Not Astro.
2. **Desktop Figma designs are the *sole* source of truth.** Build a **pixel-perfect desktop implementation first**.
3. **Ignore the existing Tablet & Mobile Figma frames** — they are exploratory, not final, and must not influence implementation. Responsive tablet/mobile is a **separate later phase** after the desktop build is approved.
4. **All headings use Hanken Grotesk.** Do **not** use Geist anywhere.
5. **Accent colour is `#D98245`** (confirmed).
6. Figma **design variables + component library** remain the source of truth for colour, typography and spacing.

---

## 0. Review summary — what's in the Figma file

The file has **5 pages**. Page `03 · Homepage` is the master canvas: it holds the homepage frame **and** all three full case-study frames side by side. **Only the Desktop frames listed below are in scope.**

| Page | Node | Desktop frame (in scope) |
|------|------|--------------------------|
| 01 · Cover | `0:1` | Presentation copy of the homepage — ignore for build |
| 02 · Design System | `7:2` | Foundations (colour, type) + components: Button, Tag, TextLink, Nav, Footer |
| 03 · Homepage | `7:3` | `Homepage / Desktop` `222:454` (1440×2663) + 3 case studies |
| 04 · About | `7:4` | Desktop `25:2` |
| 05 · Contact | `7:5` | Desktop `28:2` |

**Case studies (live on the Homepage page, desktop frames):**

| Case study | Node | Height | Theme colour |
|------------|------|--------|--------------|
| iNGENiO Education (PROJECT 01) | `60:72` | 7400px | clay `#B85C38` |
| Wildlife Ops (PROJECT 02) | `151:57` | 11645px | olive `#41503C` |
| Huddle App (PROJECT 03) | `110:62` | 9148px | teal-slate `#5E777A` |

> **Responsive frames are explicitly out of scope.** About/Contact tablet & mobile frames exist in Figma but are exploratory — ignore them. Desktop is the only reference until the responsive phase.

---

## 1. Site map

```
Mel Rowlands — Portfolio (Next.js App Router)
│
├── /                        Home
│     ├─ Hero
│     ├─ Selected Work (SectionHeader + 3 ProjectCards)
│     └─ Footer CTA
│
├── /about                   About
│     ├─ Hero (bio pitch + portrait)
│     ├─ Background ("Designer. Founder. Builder.")
│     ├─ Four threads (4 ThreadCards)
│     └─ Footer CTA
│
├── /contact                 Contact
│     ├─ Hero (availability badge + headline)
│     ├─ Links list (Email · LinkedIn · CV)
│     └─ Bottom bar (© · location)
│
└── /work/[slug]             Case study template
      ├─ /work/ingenio        PROJECT 01 · clay
      ├─ /work/wildlife-ops   PROJECT 02 · olive
      └─ /work/huddle         PROJECT 03 · teal-slate
            ├─ CaseHeaderBar (MEL ROWLANDS · View Live Prototype ↗ · PROJECT 0X)
            ├─ CaseHero
            ├─ Section blocks (Problem, Goal, Personas, Key Insight,
            │   Approach, Key Features, Showcase, Process, Results,
            │   Prototype & Build, Key Learnings, Reflection — composed per study)
            └─ NextProjectNav (circular Prev/Next)
```

**Navigation model**
- Global nav exposes **Work / About / Contact**. "Work" targets the Selected Work section on Home — the card grid *is* the work index (no separate listing page).
- **Case-study circular chain** (Prev/Next footer of each study):
  - Ingenio → Next: Wildlife Ops · Prev: Home
  - Wildlife Ops → Next: Huddle · Prev: Ingenio
  - Huddle → Next: Ingenio · Prev: Wildlife Ops
- **Download CV** → existing CV site `melrowlandscv.netlify.app`.

---

## 2. Component hierarchy

```
RootLayout  (app/layout.tsx — <html>, fonts, global tokens)
│
├── Nav                         ← every page
│     ├─ Wordmark "Mel Rowlands"
│     └─ NavLinks (Work · About · Contact, active underline)
│
├── <page content>
│
└── Footer                      ← Home + About ("Let's work together.")
      ├─ FooterHeading
      ├─ FooterLinks (Email · LinkedIn · Download CV)
      └─ FooterMeta (© 2026 · Cape Town, South Africa)

PRIMITIVES (shared kit)
├── Button            variant="primary" | "secondary"   (pill, radius-full)
├── Tag               uppercase tracked label / eyebrow
├── TextLink          underline + arrow glyph (→ internal · ↗ external · ↓ download)
├── SectionHeader     eyebrow + heading
└── Container         max-width 1280, gutter 80 (desktop)

PAGE-LEVEL COMPOSITIONS
├── Home
│     ├─ Hero               (availability eyebrow · display headline · subhead · 2 Buttons)
│     ├─ SectionHeader      "SELECTED WORK · 03 — Things I've designed & built"
│     └─ ProjectCard ×3     (theme colour · tags · title · blurb · image cluster · 2 TextLinks)
│
├── About
│     ├─ AboutHero          (eyebrow · headline · intro · logistics line · PortraitBlock)
│     ├─ Background          ("Designer. Founder. Builder." + 3 paragraphs)
│     └─ ThreadCard ×4       (Education · Conservation · AI · Community)
│
├── Contact
│     ├─ ContactHero         (AvailabilityBadge · headline · subhead)
│     ├─ ContactLinkRow ×3   (Email → · LinkedIn ↗ · Curriculum Vitae ↓)
│     └─ BottomBar           (© · location)
│
└── CaseStudyLayout  (app/work/[slug] — applies per-project --color-accent theme)
      ├─ CaseHeaderBar
      ├─ CaseHero
      ├─ BLOCK LIBRARY (composed per study, not a fixed order)
      │     ├─ Problem
      │     ├─ GoalChecklist
      │     ├─ PersonaCard (×n)
      │     ├─ KeyInsight        (large pull-quote callout in project colour)
      │     ├─ ApproachSteps     (numbered)
      │     ├─ KeyFeatures
      │     ├─ ProductShowcase    (device / dashboard screenshots)
      │     ├─ ProcessIteration
      │     ├─ Results            (StatCard ×n + ResultsChart bar chart)
      │     ├─ BusinessOpportunity
      │     ├─ PipelineCards      (Figma → Figma Make → Claude Code → GitHub → Vercel)
      │     ├─ KeyLearnings
      │     └─ Reflection
      └─ NextProjectNav
```

> **Reuse rule:** Nav, Footer, Button, Tag, TextLink, SectionHeader, Container are written once and shared. ProjectCard and every case-study block are **data-driven** (props/MDX), so the three studies share one template and differ only by content + theme colour.

---

## 3. Colour system

Tokens come from the Figma **variables** (live source of truth). Expose as CSS custom properties and map into the Tailwind theme.

```css
:root {
  /* Neutrals / surfaces */
  --color-paper:      #F4F0E8;  /* page background */
  --color-paper-alt:  #EAE3D6;  /* alternate section band */
  --color-surface:    #FBF9F4;  /* cards / raised surfaces */
  --color-line:       #DAD3C6;  /* hairline borders / dividers */

  /* Text */
  --color-ink:        #1C1A17;  /* primary text */
  --color-ink-muted:  #6B635A;  /* secondary text, eyebrows */

  /* Accent (single warm clay/amber) */
  --color-accent:     #D98245;  /* CTAs, eyebrows, links */
  --color-on-accent:  #F7F3EB;  /* text on accent fills */

  /* Per-project accents (case-study theming) */
  --color-proj-ingenio:  #B85C38;  /* clay  */
  --color-proj-wildlife: #41503C;  /* olive */
  --color-proj-huddle:   #5E777A;  /* teal-slate */

  /* Footer */
  --color-footer-bg:  #4B4744;  /* dark charcoal (direct fill) */
}
```

- Page bg = paper; cards/raised = surface; bands = paper-alt; hairlines/dividers = line; body text = ink, secondary/eyebrow = ink-muted. Accent reserved for the primary CTA fill, eyebrow labels, and link hovers.
- **Case-study theming:** each study overrides `--color-accent` with its project colour (eyebrows, key-insight callouts, chart bars, accents). Apply on the `CaseStudyLayout` root via a `data-theme` attribute.
- QA: verify on-accent text (`#F7F3EB` on `#D98245`) at small sizes passes AA.

---

## 4. Typography system

Two families only. **All headings → Hanken Grotesk. Body → Poppins. Geist is not used anywhere.**

| Role | Family | Weight | Desktop size |
|------|--------|--------|--------------|
| Display | **Hanken Grotesk** | Medium (500) | 96 |
| Heading (H1/section) | **Hanken Grotesk** | SemiBold (600) | 44 |
| Sub-heading | **Hanken Grotesk** | SemiBold | 32 / 24 |
| Body | **Poppins** | Light (300) | 20 / 16 |
| Label / eyebrow | **Poppins** | Medium–SemiBold (500–600) | 14–20, uppercase, tracked 6% |

- Both families are on Google Fonts. Load via **`next/font`** (self-hosted, no layout shift): `Hanken_Grotesk` and `Poppins`, exposed as CSS variables `--font-heading` and `--font-body`.
- Desktop-fixed sizes for the pixel-perfect pass (no `clamp()` yet — fluid scaling is deferred to the responsive phase).

```ts
// app/layout.tsx (next/font)
import { Hanken_Grotesk, Poppins } from "next/font/google";
export const heading = Hanken_Grotesk({ subsets:["latin"], weight:["500","600"], variable:"--font-heading" });
export const body    = Poppins({ subsets:["latin"], weight:["300","400","500","600"], variable:"--font-body" });
```

> When porting text, never assume the family from a Figma layer name — trust the rendered desktop design. Headings are always Hanken Grotesk per directive #4.

---

## 5. Spacing, radius & layout grid (desktop)

**Spacing scale** (`--space-*` → Tailwind `spacing`):
```
xs 4 · sm 8 · md 12 · lg 16 · xl 24 · 2xl 32 · 3xl 48 · 4xl 64 · 5xl 96 · 6xl 128  (px)
```

**Radius scale** (`--radius-*` → Tailwind `borderRadius`):
```
sm 8 · md 14 · lg 24 · xl 32 · full 999  (px — 'full' = pill buttons/tags)
```

**Desktop layout grid (the only target for phase 1):**
- Frame width **1440px**, content inset (gutter) **80px**, content max-width **1280px**, nav height **97px**.
- Centre a `Container` at `max-w-[1280px]` with `px-20` (80px).
- Section vertical rhythm ~96–128px between major sections (5xl/6xl).

---

## 6. Image assets

**Already local in `/Assets`:**
- `elephant.png` — Wildlife hero
- `Dashboard Screenshot_2.png`, `Dashboard Screenshot_3.png` — Wildlife dashboards
- `Lovable App 2 copy.png`, `Lovable App 3 copy.png`, `Lovable App 4.png` — Huddle app screens
- `huddle_app_mockup copy.png` — Huddle hero mockup

**Referenced in Figma but NOT yet local — export via Figma `download_assets` or supply:**
- iNGENiO logo + course/learner photos (e.g. `IMG_6445`) + Ingenio hero imagery
- Huddle logo + phone-in-hand mockup scene
- Wildlife/Mziki logo + real persona portraits (currently Huddle placeholders)
- About **headshot**

**Pipeline:** place under `/public/images/{home,ingenio,wildlife,huddle,about}/`, serve through `next/image` (automatic AVIF/WebP, lazy-load, `width`/`height` to prevent CLS), descriptive `alt` everywhere.

**Missing-asset policy (do not block development):**
- For any asset not yet available, use a **clearly named placeholder** at the **exact final path and intrinsic dimensions** the real asset will use (e.g. `/public/images/ingenio/logo.svg`, `/public/images/about/headshot.png`). A neutral placeholder = a paper-alt/line-coloured box at the correct aspect ratio with the filename labelled on it.
- **Do not** generate AI replacement images. **Do not** source images from the internet. Placeholders are visibly-marked stand-ins only.
- Build the layout so the final asset **drops into the assets folder and connects with zero structural change** — fix `width`/`height`, container aspect ratio and `alt` up front; swapping the file is the only step left.
- Track every placeholder in §10 so nothing ships as a stand-in by accident.

---

## 7. Responsive — DEFERRED (phase 2)

- **Phase 1 builds desktop only**, pixel-perfect to the 1440 frames. No tablet/mobile work, no fluid scaling, no breakpoint queries beyond what's needed to keep the desktop layout from breaking on very wide screens (centre + cap at 1280).
- The existing Figma tablet/mobile frames are **ignored** (exploratory, not final).
- Phase 2 (after desktop approval) will design and implement tablet + mobile from scratch, layering mobile-first breakpoints onto the existing components. Build components now with that in mind (semantic structure, tokenised spacing) but do not implement responsive behaviour yet.

---

## 8. Tech stack & project structure

**Next.js (App Router) + TypeScript + Tailwind CSS → Vercel.**

```
portfolio/
├── public/
│   └── images/{home,ingenio,wildlife,huddle,about}/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # <html>, next/font vars, Nav + Footer wrap
│   │   ├── globals.css             # @tailwind layers + :root token vars (§3)
│   │   ├── page.tsx                # Home
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── work/[slug]/page.tsx    # case-study route (generateStaticParams)
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   ├── Tag.tsx
│   │   ├── TextLink.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── Container.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── about/ (AboutHero, ThreadCard)
│   │   ├── contact/ (AvailabilityBadge, ContactLinkRow, BottomBar)
│   │   └── case-study/
│   │       ├── CaseStudyLayout.tsx
│   │       ├── CaseHeaderBar.tsx
│   │       ├── CaseHero.tsx
│   │       ├── KeyInsight.tsx
│   │       ├── PersonaCard.tsx
│   │       ├── StatCard.tsx
│   │       ├── ResultsChart.tsx
│   │       ├── PipelineCards.tsx
│   │       └── NextProjectNav.tsx
│   ├── content/
│   │   └── projects/               # ingenio.ts/.mdx, wildlife-ops, huddle (typed)
│   └── lib/
│       ├── site.ts                 # nav, footer links, contact data, project order
│       └── projects.ts             # typed project model + Prev/Next chain helper
├── tailwind.config.ts              # colours, fontFamily, spacing, borderRadius → tokens
├── tsconfig.json
├── next.config.ts
└── package.json
```

- **`tailwind.config.ts`** maps every token from §3–5 into `theme.extend` (`colors`, `fontFamily.{heading,body}`, `spacing`, `borderRadius`) referencing the CSS variables, so Tailwind utilities and raw CSS share one source.
- **Typed project model** (title, slug, order, themeColour, tags, blurb, prototypeUrl, hero/section images, section blocks) drives Home cards, `/work/[slug]` routing (`generateStaticParams`), and the Prev/Next chain (derived from `order`).
- Static-first: case-study and marketing pages are statically rendered; deploy on Vercel with zero extra config.

---

## 9. Animation opportunities (later — note now, build last)

Restrained, editorial motion; all gated behind `prefers-reduced-motion: reduce`. (Implement after responsive phase or alongside, per direction.)
- Scroll reveals (sections + cards fade/translate-up, slight stagger).
- ProjectCard hover: lift + image scale (1.02) + accent link underline.
- Nav active/hover underline.
- Hero display-text rise on load.
- Results: number count-up + bars growing into view.
- Case-study image clusters: light parallax.
- Cross-page fades via Next.js view transitions.

---

## 10. Open items / dependencies

1. **Missing assets** to export from Figma or supply: iNGENiO logo + course photos, Huddle logo + mockup, Wildlife/Mziki logo + real persona portraits, About headshot. (§6)
2. **Live-prototype URLs** for the "View Live Prototype ↗" CTAs (×3) — not wired yet. Hide per-study until supplied.
3. **CV link** confirmed: `melrowlandscv.netlify.app`.
4. **Wildlife Ops copy/numbers** are drafted, not validated — keep in editable content files, not hardcoded JSX.

---

## 11. Build order

1. **Scaffold** Next.js + TS + Tailwind; wire `next/font` (Hanken Grotesk + Poppins); add token vars to `globals.css` and map them in `tailwind.config.ts`. Verify colour + type foundations.
2. Build the **global kit**: `Container`, `Nav`, `Footer`, `Button`, `Tag`, `TextLink`, `SectionHeader`.
3. Build **Home** desktop pixel-perfect (Hero + SectionHeader + ProjectCard ×3).
4. Build **Contact**, then **About** (desktop).
5. Build `CaseStudyLayout` + block library; populate **Ingenio** → **Wildlife Ops** → **Huddle**. Wire typed project model, routing, Prev/Next chain.
6. **Desktop QA pass** vs Figma 1440 frames (spacing, type, colour) → review/approval gate.
7. *(Phase 2, after approval)* Responsive tablet + mobile.
8. Accessibility + performance (alt text, focus states, AA contrast, `next/image`).
9. Animation layer (§9), behind reduced-motion.
10. Deploy to **Vercel**.
