# Project & Context

Mel Rowlands — Product Design Portfolio. This file is the **session handoff**: read it first to resume work. The portfolio is a **coded Next.js site** built from the Figma designs, pushed to GitHub and deployed on Vercel.

**Last updated:** 2026-06-23

---

## STATUS AT A GLANCE

- **Live site:** https://mel-rowlands-portfolio.vercel.app (deployed, all routes 200)
- **Repo:** `git@github.com:melanierowlands-cyber/mel-rowlands-portfolio.git` — branch `main`, latest commit `6fc3e39`
- **Working dir:** `/Users/melanierowlands/Library/CloudStorage/Dropbox/UX ROLE/Portfolio/PORTFOLIO_LIVE`
- **Figma source of truth:** file `DHXrCjbgmnmQUGoG89JdYU` (desktop frames only)
- **Phase 1 (desktop) = complete. Phase 2 (responsive) = complete.**

---

## TECH STACK

- **Next.js 16.2.9** (App Router) + **TypeScript** + **Tailwind CSS v3.4** + **React 19.2.7**
- Fonts via `next/font/google`: **Hanken Grotesk** (`--font-heading`) + **Poppins** (`--font-body`)
- Deploy: **Vercel** (auto-deploys on push to `main`). `vercel.json` pins `framework: nextjs`.
- Local: `npm run dev` (localhost:3000) · `npm run build` · `npm run start`. Node 24, npm 11.

---

## BUILD DIRECTIVES (locked decisions)

1. **All headings use Hanken Grotesk. Geist is NOT used anywhere** (Figma uses Geist in places; we override to Hanken). Body = Poppins.
2. **Accent colour = `#D98245`** (amber).
3. **Figma desktop frames are the design source of truth.** Tablet/mobile frames were exploratory and were not used — the responsive implementation is a coded adaptation.
4. **Case-study copy is transcribed VERBATIM from Figma** — do not paraphrase, summarise, or invent.
5. No design/content changes without being asked.

---

## SITE STRUCTURE

Routes (all static / SSG):
- `/` — Home (Nav · Hero · Selected Work · Footer)
- `/about` — About (Hero+headshot · Background · Four threads · Other Work strip · Footer)
- `/contact` — Contact (availability pill · headline · 3 link rows · bottom bar)
- `/approach` — Approach (hero · 3 process steps · outcome grid · callout · Footer)
- `/work/[slug]` — Case studies: `ingenio`, `wildlife-ops`, `huddle` (`generateStaticParams`)

**Case-study circular prev/next chain:** Ingenio → Wildlife Ops → Huddle → Ingenio.

### File map (`src/`)
```
app/ layout.tsx · globals.css · page.tsx (Home) · about/page.tsx · contact/page.tsx · approach/page.tsx · work/[slug]/page.tsx
components/ Nav · Footer · Button · Tag · TextLink · SectionHeader · Container · ProjectCard
  about/ThreadCard
  contact/AvailabilityBadge · ContactLinkRow
  case-study/ CaseHeaderBar · CaseBlocks (all section renderers + dispatcher) · NextProjectNav · ImagePlaceholder
content/projects/ ingenio.ts · wildlife-ops.ts · huddle.ts   ← verbatim case-study content + data
lib/ site.ts (nav/footer/contact data) · projects.ts (types + index + getAdjacent prev/next)
```
Tokens live in `app/globals.css` (CSS variables) and are mapped in `tailwind.config.ts`.

---

## DESIGN SYSTEM (as implemented)

**Colours** (CSS vars in globals.css → Tailwind `theme.colors`):
paper `#F4F0E8` · paper-alt `#EAE3D6` · surface `#FBF9F4` · line `#DAD3C6` · ink `#1C1A17` · ink-muted `#6B635A` · accent `#D98245` · on-accent `#F7F3EB` · proj-ingenio `#B85C38` · proj-wildlife `#41503C` · proj-huddle `#5E777A` · footer-bg `#4B4744`.

**Per-case-study theming** via `data-theme` on the case root: sets `--color-theme` (Ingenio/Huddle = amber `#D98245`, Wildlife = olive `#41503C`) and `--color-mark` (logo-square fill = the project colour). Tailwind aliases: `text-theme`, `bg-theme`, `bg-mark`.

**Typography — actual implemented scale** (scaled to ~65-70% of Figma originals after removing `zoom:0.66`):

| Element | Mobile | Tablet (`md`) | Desktop (`lg`) |
|---|---|---|---|
| Home hero h1 | 26px (`sm`: 32px) | 38px | — |
| Project card titles | 18px | 26px | — |
| CTA buttons | 14px / px-22 / py-11 | 15px / px-28 / py-13 | — |
| Contact headline | 32px (`sm`: 34px) | 42px | — |
| About headline | 34px | 36px | — |
| Approach hero h1 | 26px | 38px | — |
| Case study hero h1 | 32px | 44px | — |
| Case section titles h2 | 26px (`sm`: 28px) | 34px | — |
| Case eyebrows | 14px | 14px | — |
| Key insight statement | 28px | 42px | — |
| Results stat value | — | 36px | 44px |
| Footer h2 | — | 28px | — |

**Spacing / radius:** Tailwind scale `xs..6xl` (4/8/12/16/24/32/48/64/96/128) and `radius sm..full` (8/14/24/32/999).

**Layout:** content max-width 1280 inside a 1440 container. `Container.tsx` handles responsive gutters. Case sections separated by `64px` → `md:72px`.

---

## KEY IMPLEMENTATION NOTES

- **Home "Selected Work" cards** = **live React components** (`ProjectCard.tsx`), NOT pre-composed banner images. Left colour panel (`md:basis-[37%]`) contains all copy and CTAs; right zone is two photos split by a colour stripe. Desktop aspect ratio `1322:412` via `md:aspect-[1322/412]`; on mobile the card stacks vertically (colour panel above, image zone below at `h-[180px] sm:h-[220px]`). CTA row is `flex-nowrap` to prevent button wrapping.
- **Ingenio card right panel** uses a CSS iPad frame effect (`photoRightFrame: "ipad"` on the card config). `ProjectCard.tsx` renders a dark-bezelled div (`border: 10px solid #1c1c1e`, `border-radius: 14px`, `perspective(620px) rotateY(-11deg) rotateX(2deg)`) on a light grey background (`photoRightBg: "#ebebeb"`). Supports an optional `photo` hero image at the top of the frame. This is Ingenio-only; the other two cards use plain `object-cover` images.
- **Case-study header bar** (`CaseHeaderBar`) replaces the global nav on case pages: "MEL ROWLANDS · View Live Prototype ↗ · PROJECT 0X" (matches Figma).
- **Footer** (charcoal `#4B4744`) on Home, About, Approach; Contact has its own bottom bar (no global footer).
- **Images** served via `next/image`; placeholders via `ImagePlaceholder` (holds exact aspect ratio).
- **Feature icons** (Wildlife Ops + Huddle): white on transparent PNG, rendered on a theme-coloured rounded square via `color-mix(in srgb, var(--color-theme) 80%, transparent)`. Icon square `h-[42px] w-[42px]`, icon image `h-[24px] w-[24px]`.
- **Showcase images** have a subtle drop shadow: `shadow-[0px_4px_20px_rgba(0,0,0,0.08)]` applied globally in the `Img` helper inside `CaseBlocks.tsx`.
- **Persona portraits**: optional `portrait?: string` on the `Persona` type in `projects.ts`. Falls back to initials if omitted. All three case studies now have portrait images.
- **Huddle rich persona cards**: When `demographics?: { icon: string; label: string }[]` is set on a persona, the `Research` component renders a richer two-column card layout (portrait/initials + quote header · name · left col demographics with SVG icons · right col trait bullets · Design Implication footer). The icon set (`PERSONA_ICONS` in `CaseBlocks.tsx`) covers: `person`, `graduation`, `location`, `phone`, `house`, `budget`, `people`. Also supports an optional `photo?: string` for a full-bleed hero image at the top of the card. Wildlife Ops personas have no `demographics` field and render via the standard layout unchanged.
- **Pipeline sections** (`type: "pipeline"`) exist in all three case studies: Wildlife Ops (Figma → Figma Make → Claude Code → GitHub → Vercel), Ingenio (Figma → WordPress+WooCommerce → Claude Code → LearnDash → Hotjar), Huddle (Pen & Paper → Lovable → Supabase → Vercel → Live testing).
- **CRITICAL — Edit tool quote corruption in `.ts` content files**: The Edit tool converts straight ASCII `"` (0x22) to Unicode curly quotes (`"` / `"`, bytes `e2 80 9c` / `e2 80 9d`) on lines near its insertion point, causing `TS1127: Invalid character` TypeScript build errors. **Workaround**: use a Python byte-replacement script for all changes to `src/content/projects/*.ts`. Pattern: `open(path, 'rb')` → replace old bytes → `open(path, 'wb')`. Never use the Edit tool directly on those files.

---

## RESPONSIVE IMPLEMENTATION (Phase 2 — complete 2026-06-21)

The `zoom: 0.66` global hack has been **removed**. The site is now fully responsive at phone, tablet and desktop.

**Breakpoints used** (Tailwind defaults):
- `sm` = 640px · `md` = 768px · `lg` = 1024px · `xl` = 1280px

**Container** (`Container.tsx`): `px-[20px] sm:px-[40px] lg:px-[80px]`. Same pattern applied inline to `Wrap` in CaseBlocks, `CaseHeaderBar`, `NextProjectNav`, and the Footer.

**Navigation** (`Nav.tsx`, `"use client"`): desktop nav links hidden on `< md`; replaced by an animated 3-bar → X hamburger button. Tapping opens a full-width drawer. Closes on link tap.

**Layout changes at mobile (< `md`):**
- All multi-column horizontal sections collapse to `flex-col`: Problem, Research personas, About intro, About background, Footer
- About thread cards: `2-col grid` → `flex` row on `md+`
- ProjectCard: aspect ratio drops, colour panel stacks above image zone
- Features grid: `grid-cols-1` → `sm:grid-cols-2`
- Results stats: `grid-cols-2` → `md:grid-cols-4`
- Pipeline steps: stacked vertically, connector arrows hidden on mobile
- PricingReframe: stacked, vertical divider hidden, after-cards use `flex-col sm:flex-row`
- Iterations / BusinessOpp / Learnings: stacked on mobile, row on `md+`
- ContactLinkRow: label 22px→26px, value hidden on `< sm`

---

## IMAGES (public/images/)

```
home/
  ingenio-hand-ipad.png          Ingenio card — left photo (child's hand + iPad)
  ingenio-desktop-mockup.png     Ingenio card — right photo (desktop site, v2); shown inside CSS iPad frame
  ingenio-photo.png              Ingenio strip — lifestyle
  ingenio-course.png             Ingenio strip — course screens
  wildlife-card-elephant.png     Wildlife card — left photo
  wildlife-card-dashboard.png    Wildlife card — right photo
  wildlife-elephant.png          Wildlife strip
  wildlife-paw.png               Wildlife card — paw logo mark
  ingenio-wordmark.png           Ingenio card — wordmark logo
  huddle-hands.png               Huddle card — left photo
  huddle-mockup-teal.png         Huddle card — right photo
  huddle-wordmark.png            Huddle card — wordmark logo

wildlife/
  dashboard-health.png           Showcase TOP — Reserve Overview screen (note: filename says health but shows overview)
  dashboard-overview.png         Showcase BOTTOM — Animal Health Record screen (note: filename says overview but shows health)
  icon-live-operations.png       Key features icon (white/transparent)
  icon-tracking.png              Key features icon (white/transparent)
  icon-incident-map.png          Key features icon (white/transparent)
  icon-insights.png              Key features icon (white/transparent)
  avatar-reserve-manager.png     Research persona portrait
  avatar-field-ranger.png        Research persona portrait
  early-concept.png              Process & Iteration 02 image (1439×1093)

ingenio/
  busy-parent.png                Research persona portrait
  hesitant-parent.png            Research persona portrait

huddle/
  app-2.png                      Showcase — home dashboard (portrait)
  app-3.png                      Showcase — expenses view (portrait)
  avatar-firstyear.png           Research persona portrait — The First-Year
  avatar-housetreasurer.png      Research persona portrait — The House Treasurer
  icon-household-setup.png       Key features icon (white/transparent)
  icon-expense-splitting.png     Key features icon (white/transparent)
  icon-budget-tracking.png       Key features icon (white/transparent)
  icon-expense-history.png       Key features icon (white/transparent)
```

**NOTE on Wildlife Ops showcase filenames:** `dashboard-health.png` actually displays the Reserve Overview screen, and `dashboard-overview.png` displays the Animal Health Record screen. The filenames are inverted vs content. The display order in wildlife-ops.ts is correct (Reserve Overview first, Health Record second) — do not swap the files or rename without checking both the data file and the images.

Source assets in `/Assets` (originals, not committed to git).

---

## DEPLOYMENT NOTES (for resuming)

- **GitHub:** `gh` CLI is NOT installed; stored gh keychain token is invalid. Repo created manually by the user on github.com. **Push works via SSH** (key authenticated as `melanierowlands-cyber`) — `git push origin main` just works.
- **Vercel:** imported via the dashboard (no CLI/token on this machine). Auto-deploys on push to `main`.
- **Resolved issues:** (1) Vercel flagged Next 15.1.6 as vulnerable → upgraded to **16.2.9** (+ React 19.2.7). (2) Production domain initially returned `x-vercel-error: NOT_FOUND` → fixed by pushing a fresh commit + adding `vercel.json`.

---

## OPEN ITEMS / PLACEHOLDERS

1. **Huddle prototype URL** — check `src/content/projects/huddle.ts` for `prototypeUrl`; may still be undefined or placeholder.
2. **Ingenio pricing-reframe** before-cards use placeholder feature bars (Figma showed greeked lines); all prices/names/notes are verbatim.
3. **Wildlife Ops pipeline copy** says "Netlify" (verbatim from Figma). Site deploys to Vercel. **Flagged — do not change without being asked.**
4. **Huddle persona hero photos** — the rich persona card layout supports a full-bleed `photo` at the top of each card (set `photo: "/images/huddle/..."` on the persona in huddle.ts). No photos added yet; cards currently show portrait circle + quote with no hero image. Add when photos are ready.
5. **Wildlife Ops showcase filename mismatch** — noted above in IMAGES section. Low priority; display order is correct.

---

## COMMIT HISTORY (milestones)

- `1fcc61d` Portfolio build - Claude v1 (initial desktop build)
- `0ed319f` Update Next.js for Vercel deployment (15.1.6 → 16.2.9)
- `6b0c1d7` Add explicit Vercel framework config; force clean production deploy
- `4964561` Scale site down ~34%, swap in new card artwork
- `2c4391c` Home: spacious hero, full-width work cards, Ingenio above the fold
- `fc95c74` Rebuild home work cards as live components (crisp, responsive-ready)
- `869376e` Home/card polish: fix Huddle imagery, paw on elephant, persona avatars, prototype links
- `7d6705d` Fix Huddle card grey crop and move wildlife paw to elephant bottom-right
- `b67d634` Responsive design: full mobile, tablet and desktop support
- `3bfdddc` Strengthen portfolio for B2B positioning
- `2031c8b` Fix desktop scale regression: replace Figma-at-100% values with zoom-equivalent sizes
- `d4b8ae1` Replace Ingenio card right image with desktop mockup
- `40b09ea` Replace Ingenio card left image with hand-ipad photo
- `c31b952` Add icons to Wildlife Ops key features section
- `4d3a3bf` Add persona avatars to Wildlife Ops research section
- `c80b0b1` Replace Ingenio card desktop mockup with updated version (mockup_2)
- `3309739` Add early concept image to Wildlife Ops Process & Iteration section
- `516c659` Add angled iPad frame to Ingenio card right panel
- `59aac40` Swap showcase image order in Wildlife Ops case study
- `463e7e0` Add Prototype & Build pipeline section to Ingenio case study
- `0ccb471` Add subtle drop shadow to showcase images in case studies
- `e3cafe9` Add Prototype & Build pipeline section to Huddle case study
- `65a6e6f` Redesign Huddle persona cards with two-column rich layout
- `c29e7a3` Add persona avatar photos to Huddle case study
- `6fc3e39` Add feature icons to Huddle 'What Huddle Does' section *(current)*

---

## RELATED FILES

- `implementation-plan.md` — full original plan (now superseded).
- Memory: `/Users/melanierowlands/.claude/projects/-Users-melanierowlands-Library-CloudStorage-Dropbox-UX-ROLE-Portfolio-PORTFOLIO-LIVE/memory/` (`MEMORY.md`, `phase2-responsive.md`).
- Figma file `DHXrCjbgmnmQUGoG89JdYU` — design source (desktop frames). Case-study frames: Ingenio `60:72`, Wildlife Ops `151:57`, Huddle `110:62`; About `25:2`; Contact `28:2`; Design System `7:2`.
- Source design assets in `/Assets` (originals).
