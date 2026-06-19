# Project & Context

Mel Rowlands — Product Design Portfolio. This file is the **session handoff**: read it first to resume work. The portfolio is now a **coded Next.js site** built from the Figma designs, pushed to GitHub and deployed on Vercel.

**Last updated:** 2026-06-19

---

## STATUS AT A GLANCE

- **Live site:** https://mel-rowlands-portfolio.vercel.app (deployed, all routes 200)
- **Repo:** `git@github.com:melanierowlands-cyber/mel-rowlands-portfolio.git` — branch `main`, latest commit `2c4391c`
- **Working dir:** `/Users/melanierowlands/Library/CloudStorage/Dropbox/UX ROLE/Portfolio/PORTFOLIO_LIVE`
- **Figma source of truth:** file `DHXrCjbgmnmQUGoG89JdYU` (desktop frames only)
- **Phase 1 (desktop) = built, deployed, verbatim content.** Phase 2 (responsive) = deferred.

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
3. **Desktop is the sole source of truth.** Figma tablet/mobile frames are exploratory — ignored.
4. **Case-study copy is transcribed VERBATIM from Figma** — do not paraphrase, summarise, or invent. (An earlier build had generated placeholder copy; it was fully replaced.)
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

**Per-case-study theming** via `data-theme` on the case root: sets `--color-theme` (secondary accent — Ingenio/Huddle = amber `#D98245`, Wildlife = olive `#41503C`) and `--color-mark` (logo-square fill = the project colour). Tailwind aliases: `text-theme`, `bg-theme`, `bg-mark`.

**Typography (case-study scale, exact from Figma):** hero headline Hanken Bold 64px/1.0; section titles Hanken SemiBold 44px; eyebrows Poppins SemiBold 20px (tracked 0.06em); body Poppins 24px (problem) / 16–19px; key-insight statement Hanken Bold 64px on a paper-alt rounded card. Home hero 56px; Contact headline 62px; About headline 50px.

**Spacing / radius:** Tailwind scale `xs..6xl` (4/8/12/16/24/32/48/64/96/128) and `radius sm..full` (8/14/24/32/999).

**Layout:** content max-width 1280 inside a 1440 container, 80px gutters (`Container.tsx`). Case sections separated by 128px.

---

## KEY IMPLEMENTATION NOTES

- **Global scale stopgap:** `html { zoom: 0.66 }` in globals.css renders the 1440-authored design ~34% smaller so it's comfortable on desktops. This is NOT real responsiveness (see Phase 2).
- **Home "Selected Work" cards** = single **pre-composed banner images** (`/public/images/home/{ingenio,wildlifeops,huddle}-case-study-image.png`, 1322×412) wrapped in a link to the case study. Copy/links/imagery are baked into the artwork. Home layout is intentionally spacious so **only the first card (Ingenio) sits above the fold**, full-width (aligned to the hero title), with extra space around the View Work / About Me buttons.
- **Case-study header bar** (`CaseHeaderBar`) replaces the global nav on case pages: "MEL ROWLANDS · View Live Prototype ↗ · PROJECT 0X" (matches Figma).
- **Footer** (charcoal `#4B4744`) on Home + About; Contact has its own bottom bar.
- Images served via `next/image`; placeholders via `ImagePlaceholder` (holds exact aspect ratio).

---

## DEPLOYMENT NOTES (for resuming)

- **GitHub:** `gh` CLI is NOT installed; the stored gh keychain token is invalid. The repo was **created manually by the user** on github.com. **Push works via SSH** (key authenticated as `melanierowlands-cyber`) — `git push origin main` just works.
- **Vercel:** imported via the dashboard (no CLI/token on this machine). Auto-deploys on push to `main`.
- **Resolved issues:** (1) Vercel flagged Next 15.1.6 as vulnerable → upgraded to **16.2.9** (+ React 19.2.7); no code changes needed. (2) Production domain initially returned `x-vercel-error: NOT_FOUND` (no deployment aliased) → fixed by pushing a fresh commit + adding `vercel.json`; domain now bound and serving.

---

## OPEN ITEMS / PLACEHOLDERS

1. **Live-prototype URLs (×3)** not wired — `prototypeUrl: undefined` in each `content/projects/*.ts`. CTAs render dimmed; on Home the "View live prototype" text is baked into the card images (whole card links to the case study).
2. **Persona portraits** = initial-avatar placeholders (no portrait images in the file).
3. **Wildlife "early concept" iteration image** = labelled placeholder; image strips use available hero images, not the exact Figma collage.
4. **Ingenio pricing-reframe** before-cards use placeholder feature bars (Figma showed greeked lines); all prices/names/notes are verbatim.
5. **Feature-card icons** = neutral tiles (Figma icons not exported).
6. **Netlify vs Vercel:** Wildlife case-study copy says "Netlify" (verbatim from Figma — pipeline, caption, reflection). The site itself deploys to Vercel. **Flagged for the user to confirm** whether to change the copy.

---

## PHASE 2 — RESPONSIVE (deferred, agreed 2026-06-19)

- **Full phone + tablet + desktop.** Single-column + hamburger nav on phones (~390px); 2-col adapted on tablets (~768–1024); fluid desktop.
- **Replace the `zoom: 0.66` hack** with a real fluid system: responsive `Container`, `clamp()` type, Tailwind breakpoints collapsing the multi-column sections (Problem grid, Personas, Features, Business-opportunity, Pipeline, Footer, Contact rows, Nav).
- **GOTCHA:** re-baseline the px scale *before* removing `zoom` — deleting it alone makes everything ~1.5× bigger and re-triggers the "too big" complaint.
- **Wide screens (decided):** cap content ~1280px and **centre** (don't stretch). User's screen is 2880×1864 (~1512–1800 logical).
- Verify the Home "Ingenio above the fold" intent still holds responsively.
- Full detail in `implementation-plan.md` §7.

---

## RELATED FILES

- `implementation-plan.md` — full plan (site map, component hierarchy, tokens, Phase 2 scope).
- Memory: `/Users/melanierowlands/.claude/projects/-Users-melanierowlands-Library-CloudStorage-Dropbox-UX-ROLE-Portfolio-PORTFOLIO-LIVE/memory/` (`MEMORY.md`, `phase2-responsive.md`).
- Figma file `DHXrCjbgmnmQUGoG89JdYU` — design source (desktop frames). Case-study frames: Ingenio `60:72`, Wildlife Ops `151:57`, Huddle `110:62`; About `25:2`; Contact `28:2`; Design System `7:2`.
- Source design assets in `/Assets` (originals + the supplied `*-case-study-image.png` card banners).

---

## COMMIT HISTORY (milestones)

- `1fcc61d` Portfolio build - Claude v1 (initial desktop build)
- `0ed319f` Update Next.js for Vercel deployment (15.1.6 → 16.2.9)
- `6b0c1d7` Add explicit Vercel framework config; force clean production deploy
- `4964561` Scale site down ~34%, swap in new card artwork
- `2c4391c` Home: spacious hero, full-width work cards, Ingenio above the fold *(current)*
