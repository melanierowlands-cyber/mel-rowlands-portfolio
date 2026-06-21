# Project & Context

Mel Rowlands — Product Design Portfolio. This file is the **session handoff**: read it first to resume work. The portfolio is a **coded Next.js site** built from the Figma designs, pushed to GitHub and deployed on Vercel.

**Last updated:** 2026-06-21

---

## STATUS AT A GLANCE

- **Live site:** https://mel-rowlands-portfolio.vercel.app (deployed, all routes 200)
- **Repo:** `git@github.com:melanierowlands-cyber/mel-rowlands-portfolio.git` — branch `main`, latest commit `7d6705d`
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
- `/about` — About (Hero+headshot · Background · Four threads · Footer)
- `/contact` — Contact (availability pill · headline · 3 link rows · bottom bar)
- `/work/[slug]` — Case studies: `ingenio`, `wildlife-ops`, `huddle` (`generateStaticParams`)

**Case-study circular prev/next chain:** Ingenio → Wildlife Ops → Huddle → Ingenio.

### File map (`src/`)
```
app/ layout.tsx · globals.css · page.tsx (Home) · about/page.tsx · contact/page.tsx · work/[slug]/page.tsx
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

**Typography (desktop scale, from Figma):** home hero 56px; case-study hero 64px; contact headline 62px; about headline 50px; section titles Hanken SemiBold 44px; eyebrows Poppins SemiBold 20px (tracked 0.06em); body Poppins 24px (problem) / 16–19px; key-insight statement Hanken Bold 64px on a paper-alt rounded card. All sizes scale down at smaller breakpoints (see Responsive section below).

**Spacing / radius:** Tailwind scale `xs..6xl` (4/8/12/16/24/32/48/64/96/128) and `radius sm..full` (8/14/24/32/999).

**Layout:** content max-width 1280 inside a 1440 container. `Container.tsx` handles responsive gutters (see below). Case sections separated by 64/96/128px at mobile/tablet/desktop.

---

## KEY IMPLEMENTATION NOTES

- **Home "Selected Work" cards** = **live React components** (`ProjectCard.tsx`), NOT pre-composed banner images. Left colour panel (37% on desktop, full-width on mobile) contains all copy and CTAs; right zone is two photos split by a colour stripe. Text stays crisp, selectable and responsive. Aspect ratio `1322:412` is enforced only on `md+`; on mobile the card stacks vertically (colour panel above, image zone below at fixed height).
- **Case-study header bar** (`CaseHeaderBar`) replaces the global nav on case pages: "MEL ROWLANDS · View Live Prototype ↗ · PROJECT 0X" (matches Figma).
- **Footer** (charcoal `#4B4744`) on Home + About; Contact has its own bottom bar (no global footer).
- Images served via `next/image`; placeholders via `ImagePlaceholder` (holds exact aspect ratio).

---

## RESPONSIVE IMPLEMENTATION (Phase 2 — complete 2026-06-21)

The `zoom: 0.66` global hack has been **removed**. The site is now fully responsive at phone, tablet and desktop.

**Breakpoints used** (Tailwind defaults):
- `sm` = 640px · `md` = 768px · `lg` = 1024px · `xl` = 1280px

**Container** (`Container.tsx`): `px-[20px] sm:px-[40px] lg:px-[80px]`. The same pattern is applied inline to `Wrap` in CaseBlocks, `CaseHeaderBar`, `NextProjectNav`, and the Footer.

**Navigation** (`Nav.tsx`, `"use client"`): desktop nav links hidden on `< md`; replaced by an animated 3-bar → X hamburger button. Tapping opens a full-width drawer below the header with stacked nav links. Closes on link tap.

**Type scale** — progressive from mobile to desktop:
| Element | Mobile | Tablet (`md`) | Desktop (`lg`) |
|---|---|---|---|
| Home hero h1 | 26px | 48px | 56px |
| Home hero h1 (`sm`) | 36px | — | — |
| Project card titles | 22px | 38px | 38px |
| CTA buttons | 14px / px-22 / py-12 | 18px / px-35 / py-18 | — |
| Contact headline | 32px | 52px | 62px |
| About headline | 34px | 44px | 50px |
| Case study hero | 32px | 52px | 64px |
| Case section titles | 26px | 34px | 44px |
| Case eyebrows | 14px | 17px | 20px |
| Key insight statement | 28px | 52px | 64px |

**Layout changes at mobile (< `md`):**
- All multi-column horizontal sections collapse to `flex-col`: Problem (text + side card), Research (persona cards), About intro (text + headshot), About background (label + body), Footer (heading + links)
- About thread cards: `2-col grid` on mobile → `flex` row on `md+`
- ProjectCard: aspect ratio drops, colour panel stacks above image zone (image zone `h-[200px]`)
- Features grid: `grid-cols-1` → `sm:grid-cols-2`
- Results stats: `grid-cols-2` → `md:grid-cols-4`
- Pipeline steps: stacked vertically, connector arrows (`→`) hidden on mobile
- PricingReframe before/after: stacked, vertical divider hidden on mobile, after-cards use `flex-col sm:flex-row`
- Iterations / BusinessOpp / Learnings: stacked on mobile, row on `md+`
- ContactLinkRow: label scales 22px→32px, value hidden on `< sm`
- Image strip on case study hero: `h-[140px]` → `md:h-[180px]` → `lg:h-[228px]`
- Section gap (case study): `64px` → `md:96px` → `lg:128px`

---

## DEPLOYMENT NOTES (for resuming)

- **GitHub:** `gh` CLI is NOT installed; the stored gh keychain token is invalid. The repo was **created manually by the user** on github.com. **Push works via SSH** (key authenticated as `melanierowlands-cyber`) — `git push origin main` just works.
- **Vercel:** imported via the dashboard (no CLI/token on this machine). Auto-deploys on push to `main`.
- **Resolved issues:** (1) Vercel flagged Next 15.1.6 as vulnerable → upgraded to **16.2.9** (+ React 19.2.7). (2) Production domain initially returned `x-vercel-error: NOT_FOUND` → fixed by pushing a fresh commit + adding `vercel.json`.

---

## OPEN ITEMS / PLACEHOLDERS

1. **Live-prototype URLs (×3)** not wired — `prototypeUrl: undefined` in each `content/projects/*.ts`. CTAs render dimmed; case-study header bar shows prototype link greyed out.
2. **Persona portraits** = initial-avatar placeholders (no portrait images in the file).
3. **Wildlife "early concept" iteration image** = labelled placeholder; image strips use available hero images.
4. **Ingenio pricing-reframe** before-cards use placeholder feature bars (Figma showed greeked lines); all prices/names/notes are verbatim.
5. **Feature-card icons** = neutral tiles (Figma icons not exported).
6. **Netlify vs Vercel:** Wildlife case-study copy says "Netlify" (verbatim from Figma). The site itself deploys to Vercel. **Flagged for the user to confirm** whether to change the copy.

---

## COMMIT HISTORY (milestones)

- `1fcc61d` Portfolio build - Claude v1 (initial desktop build)
- `0ed319f` Update Next.js for Vercel deployment (15.1.6 → 16.2.9)
- `6b0c1d7` Add explicit Vercel framework config; force clean production deploy
- `4964561` Scale site down ~34%, swap in new card artwork
- `2c4391c` Home: spacious hero, full-width work cards, Ingenio above the fold
- `0f7e519` Docs: refresh Project & Context handoff and Phase 2 responsive plan
- `fc95c74` Rebuild home work cards as live components (crisp, responsive-ready)
- `869376e` Home/card polish: fix Huddle imagery, paw on elephant, persona avatars, prototype links
- `7d6705d` Fix Huddle card grey crop and move wildlife paw to elephant bottom-right *(current)*

---

## RELATED FILES

- `implementation-plan.md` — full original plan (site map, component hierarchy, tokens, Phase 2 scope — now superseded by the implementation above).
- Memory: `/Users/melanierowlands/.claude/projects/-Users-melanierowlands-Library-CloudStorage-Dropbox-UX-ROLE-Portfolio-PORTFOLIO-LIVE/memory/` (`MEMORY.md`, `phase2-responsive.md`).
- Figma file `DHXrCjbgmnmQUGoG89JdYU` — design source (desktop frames). Case-study frames: Ingenio `60:72`, Wildlife Ops `151:57`, Huddle `110:62`; About `25:2`; Contact `28:2`; Design System `7:2`.
- Source design assets in `/Assets` (originals).
