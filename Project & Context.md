# Project & Context

Mel Rowlands — Product Design Portfolio. This file is the **session handoff**: read it first to resume work. The portfolio is a **coded Next.js site** built from the Figma designs, pushed to GitHub and deployed on Vercel.

**Last updated:** 2026-06-23 (session 2)

---

## STATUS AT A GLANCE

- **Live site:** https://mel-rowlands-portfolio.vercel.app (deployed, all routes 200)
- **Repo:** `git@github.com:melanierowlands-cyber/mel-rowlands-portfolio.git` — branch `main`, latest commit `9c82381`
- **Working dir:** `/Users/melanierowlands/Library/CloudStorage/Dropbox/UX ROLE/Portfolio/PORTFOLIO_LIVE`
- **Figma source of truth:** file `DHXrCjbgmnmQUGoG89JdYU` (desktop frames only)
- **Phase 1 (desktop) = complete. Phase 2 (responsive) = complete.**
- **Target role:** Tenacity Works (https://www.tenacityworks.com) — B2B digital agency, Bath/Cape Town/Cluj. CV and positioning updated accordingly.

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
- `/` — Home (Nav · Hero with illustration · Selected Work · Footer)
- `/about` — About (two-column intro: Tag · h1 · Body copy · Location line LEFT / Illustration RIGHT · Background · Other Work · Four threads · Footer)
- `/contact` — Contact (availability pill · headline · 3 link rows · bottom bar)
- `/approach` — Approach (hero · 3 process steps · outcome grid · callout · Footer)
- `/work/[slug]` — Case studies: `ingenio`, `wildlife-ops`, `huddle` (`generateStaticParams`)
- `/mel-rowlands-cv.html` — Standalone CV page (static HTML in `public/`, print-ready)

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
| Home hero h1 | 26px (`sm`: 32px) | 38px | 44px |
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

- **Home hero layout** = two-column at `md+`: left `div` (`md:flex-1`) holds Tag → h1 → subtitle → buttons; right `div` (`md:w-[380px] lg:w-[460px]`, `shrink-0`) holds the illustration. `md:items-center` centres both columns. h1 goes to `lg:text-[44px]`. On mobile (`< md`), flex-col: text block first, image below.
- **About page intro** = same two-column layout as the home hero: left `md:flex-1` (Tag · h1 · body · location), right `md:w-[380px] lg:w-[460px]` (illustration). Applied in same session.
- **Home "Selected Work" cards** = **live React components** (`ProjectCard.tsx`), NOT pre-composed banner images. Left colour panel (`md:basis-[37%]`) contains all copy and CTAs; right zone is two photos split by a colour stripe. Desktop aspect ratio `1322:412` via `md:aspect-[1322/412]`; on mobile the card stacks vertically (colour panel above, image zone below at `h-[180px] sm:h-[220px]`). CTA row is `flex-nowrap` to prevent button wrapping.
- **Ingenio card right panel** — the CSS angled iPad frame (`photoRightFrame: "ipad"`) has been **removed**. The right image (`ingenio-desktop-mockup.png`) now fills the panel as a plain `object-cover` image with `photoRightPos: "center top"` so "What shall we create today?" is visible. The logo (`ingenio-wordmark.png`) has moved to the **left** photo panel, bottom-right corner (`logoOn: "left"`, `logoCorner: "br"`), matching Wildlife Ops paw positioning. The CSS frame code (`perspective(620px) rotateY(-11deg)...`) still exists in `ProjectCard.tsx` but is unreachable — remove it when tidying.
- **Case-study header bar** (`CaseHeaderBar`) replaces the global nav on case pages: "MEL ROWLANDS · View Live Prototype ↗ · PROJECT 0X" (matches Figma).
- **Footer** (charcoal `#4B4744`) on Home, About, Approach; Contact has its own bottom bar (no global footer).
- **Images** served via `next/image`; placeholders via `ImagePlaceholder` (holds exact aspect ratio).
- **Feature icons** (Wildlife Ops + Huddle): white on transparent PNG, rendered on a theme-coloured rounded square via `color-mix(in srgb, var(--color-theme) 80%, transparent)`. Icon square `h-[42px] w-[42px]`, icon image `h-[24px] w-[24px]`.
- **Showcase images** have a subtle drop shadow: `shadow-[0px_4px_20px_rgba(0,0,0,0.08)]` applied globally in the `Img` helper inside `CaseBlocks.tsx`.
- **Showcase section** (`type: "showcase"`) now supports two optional fields: `title?: string` (omit for continuation blocks with no heading) and `columns?: 2` (renders images in a `grid grid-cols-1 sm:grid-cols-2` two-column grid instead of stacked full-width). Both are defined in `projects.ts` and handled in the `Showcase` component in `CaseBlocks.tsx`.
- **Ingenio showcase** = two consecutive showcase sections: (1) eyebrow "THE PLATFORM", title "A look at iNGENiO", single full-width homepage screenshot; (2) no eyebrow/title, `columns: 2`, four images in a 2×2 grid (learning path · courses · course overview · lesson interface).
- **Em dashes** — all `—` characters replaced with ` - ` (hyphen with spaces) across all 9 source files (116 replacements). Use hyphens going forward; do not reintroduce em dashes.
- **Work history dates** (About page + CV): B2B Data Platform Design 2021–2023; Brand & Packaging 2015–2021; International Licensing 2007–2015.
- **Persona portraits**: optional `portrait?: string` on the `Persona` type in `projects.ts`. Falls back to initials if omitted. All three case studies now have portrait images.
- **Huddle rich persona cards**: When `demographics?: { icon: string; label: string }[]` is set on a persona, the `Research` component renders a richer two-column card layout (portrait/initials + quote header · name · left col demographics with SVG icons · right col trait bullets · Design Implication footer). The icon set (`PERSONA_ICONS` in `CaseBlocks.tsx`) covers: `person`, `graduation`, `location`, `phone`, `house`, `budget`, `people`. Also supports an optional `photo?: string` for a full-bleed hero image at the top of the card. Wildlife Ops personas have no `demographics` field and render via the standard layout unchanged.
- **Pipeline sections** (`type: "pipeline"`) exist in all three case studies: Wildlife Ops (Figma → Figma Make → Claude Code → GitHub → Vercel), Ingenio (Figma → WordPress+WooCommerce → Claude Code → LearnDash → Hotjar), Huddle (Pen & Paper → Lovable → Supabase → Vercel → Live testing).
- **Illustrations** (Home + About): transparent-background PNGs. Source originals in `/Assets`. No `mix-blend-multiply` — backgrounds are genuinely transparent. See IMAGES section for file names.
  - **Homepage illustration** (`public/images/home/homepage-illustration.png`): processed with a two-pass Python Pillow script — (1) pixels with all RGB channels > 235 → alpha 0; (2) any remaining opaque pixel where `max(r,g,b) >= 200` AND not strongly orange (HSV sat > 0.4, hue 0–60°) → alpha 0. This removes both pure-white and skin-tone fills while preserving black lines, anti-aliasing, and the orange accents. The file in the public folder IS the processed version.
  - **About illustration** (`public/images/home/about-illustration.png`): flood-fill processed (background removed). Displays with a visible light background box at desktop widths — this is the image itself, not a CSS background. If a new version is supplied, re-run the same two-pass script.
- **CV HTML** (`public/mel-rowlands-cv.html`): self-contained, print-ready HTML file. Uses Google Fonts (Hanken Grotesk + Poppins) via CDN `@import`. All links have `target="_blank"`. To update copy, edit the HTML directly — no build step needed. To "download as PDF": open in browser, print → Save as PDF.
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
  homepage-illustration.png      Home hero — line-drawing illustration (transparent bg); MacBook, wireframes, checklist
  about-illustration.png         About page — line-drawing illustration (transparent bg); MacBook, wireframes, coffee

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
  home-page.png (2860×1320)      Showcase — platform homepage hero
  learning-path.png (2858×1340)  Showcase — "What shall we create today?" quiz (2-col grid)
  courses.png (1940×1270)        Showcase — course catalogue grid (2-col grid)
  course-overview.png (1276×1122) Showcase — individual course detail / Greenland Adventure (2-col grid)
  learndash-interface.png (2848×1338) Showcase — LearnDash lesson interface (2-col grid)

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

**NOTE on illustrations:** Both illustration PNGs were processed with a Python Pillow flood-fill to remove the white background (alpha=0 on all background pixels). Source originals are in `/Assets/homepage_image.png` and `/Assets/About_Image.png`. If the user provides a new version of either illustration, re-run the flood-fill script before committing.

Source assets in `/Assets` (originals, not committed to git).

---

## CV (`public/mel-rowlands-cv.html`)

A self-contained, print-ready HTML CV written for a **B2B agency / Tenacity Works target**. Key positioning:
- Headline: "B2B platforms, complex UX & brand"
- Leads with Dataloop (B2B dashboards/portals) before iNGENiO
- iNGENiO framed around complex IA and AI-forward workflow, not signup metrics
- Fineday positioned as brand studio experience (relevant to agency Design Studio work)
- Cape Town location prominent (Tenacity has a Cape Town office)

To update: edit `public/mel-rowlands-cv.html` directly. All links have `target="_blank"`. The `site.ts` `cvUrl` points to `/mel-rowlands-cv.html` — this drives both the footer "Download CV" link and the Contact page "Curriculum Vitae" row.

---

## DEPLOYMENT NOTES (for resuming)

- **GitHub:** `gh` CLI is NOT installed; stored gh keychain token is invalid. Repo created manually by the user on github.com. **Push works via SSH** (key authenticated as `melanierowlands-cyber`) — `git push origin main` just works.
- **Vercel:** imported via the dashboard (no CLI/token on this machine). Auto-deploys on push to `main`.
- **Resolved issues:** (1) Vercel flagged Next 15.1.6 as vulnerable → upgraded to **16.2.9** (+ React 19.2.7). (2) Production domain initially returned `x-vercel-error: NOT_FOUND` → fixed by pushing a fresh commit + adding `vercel.json`.
- **Next.js image cache:** dev server caches optimised images at `.next/cache/images/`. If a replaced image keeps showing the old version in local screenshots, delete that folder and restart `npm run dev`. Production builds (Vercel) are always fresh.

---

## OPEN ITEMS / PLACEHOLDERS

1. **Huddle prototype URL** — check `src/content/projects/huddle.ts` for `prototypeUrl`; may still be undefined or placeholder.
2. **Ingenio pricing-reframe** before-cards use placeholder feature bars (Figma showed greeked lines); all prices/names/notes are verbatim.
3. **Wildlife Ops pipeline copy** says "Netlify" (verbatim from Figma). Site deploys to Vercel. **Flagged — do not change without being asked.**
4. **Huddle persona hero photos** — the rich persona card layout supports a full-bleed `photo` at the top of each card (set `photo: "/images/huddle/..."` on the persona in huddle.ts). No photos added yet; cards currently show portrait circle + quote with no hero image. Add when photos are ready.
5. **Wildlife Ops showcase filename mismatch** — noted above in IMAGES section. Low priority; display order is correct.
6. **About illustration background** — the about-illustration.png has a visible light background box at desktop widths (it is baked into the image, not CSS). If a transparent version is supplied, replace the file in `public/images/home/about-illustration.png` and run the two-pass Pillow script.
7. **Dead CSS in ProjectCard.tsx** — the angled iPad frame block (`perspective(620px) rotateY...`) is still in the file but unreachable since no project sets `photoRightFrame: "ipad"` any more. Safe to delete when tidying.

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
- `6fc3e39` Add feature icons to Huddle 'What Huddle Does' section
- `e39b6c5` Reorder About Other Work section: most recent first (B2B first)
- `754ebf1` Add Tenacity-targeted CV and wire up Download CV links
- `0b06dba` Move illustration from home hero to About page below title
- `23c12ff` About: remove headshot, enlarge illustration
- `68e30b1` Update about illustration to MacBook+wireframes version, bump size
- `7f33007` About illustration: remove background, increase size
- `636515b` Fix LinkedIn URL to /in/melanierowlands across all instances
- `83aa336` Add homepage illustration below hero title
- `9352a70` Add portfolio assets; convert homepage illustration to transparent line art
- `3871512` Remove fills from homepage illustration — correct public/ file (two-pass skin-tone + white removal)
- `e3b0d18` Ingenio card: move logo to left panel, reduce desktop frame size
- `f4f593c` Ingenio card: replace angled device frame with full-bleed image
- `fa2d6c4` Remove 'quietly' from Community thread on About page
- `d017474` Replace all em dashes with short dashes site-wide (116 replacements across 9 files)
- `9879ce4` Update work history dates on About page and CV
- `ba0ce01` Homepage hero: two-column layout — title left (flex-1), illustration right (md:w-[380px] lg:w-[460px])
- `dd37ad4` Add 'THE PLATFORM' showcase section to Ingenio case study (3 images)
- `5a090a5` Ingenio showcase: add 2 new screens, split into full-width + 2-col grid (columns:2 support)
- `9c82381` About page: apply two-column hero layout matching homepage *(current)*

---

## RELATED FILES

- `implementation-plan.md` — full original plan (now superseded).
- Memory: `/Users/melanierowlands/.claude/projects/-Users-melanierowlands-Library-CloudStorage-Dropbox-UX-ROLE-Portfolio-PORTFOLIO-LIVE/memory/` (`MEMORY.md`, `phase2-responsive.md`).
- Figma file `DHXrCjbgmnmQUGoG89JdYU` — design source (desktop frames). Case-study frames: Ingenio `60:72`, Wildlife Ops `151:57`, Huddle `110:62`; About `25:2`; Contact `28:2`; Design System `7:2`.
- Source design assets in `/Assets` (originals).
