# benpoole — Claude Context

## What This Is
Ben Poole's personal portfolio site, to be hosted at `benpoole.me`. Replacing the old vanilla HTML stratkit site. Built in Next.js with a warm/technical design aesthetic.

## Tech Stack
- **Framework:** Next.js 16 (App Router), TypeScript
- **Styling:** Tailwind CSS v4 — custom design system (see below)
- **Fonts:** Lora (headings, serif), Inter (body, sans-serif) via Google Fonts
- **Deployment:** Vercel — auto-deploys from `main` branch. Live at `benpoole.me` (DNS connected via Network Solutions, A record `216.198.79.1`)
- **Repo:** `github.com/stratkit/benpoole`

## Design System
- **Palette:** Cream `#faf7f2` base, Amber `#d97706` accent, Slate `#3b4f6b` technical accent, Terracotta `#c2612a` tertiary, Ink `#1a1a2e` dark
- **Textures:** `.bg-honeycomb` (hero sections), `.bg-grid` (content sections) — both defined in `globals.css`, CSS-only, no images
- **Typography:** Lora for h1/h2/h3 via `font-heading` class, Inter for body

## Page Structure
```
src/app/
  page.tsx              Home — 70/30 hero (text + photo), expertise cards, blog/cert teasers
  about/page.tsx        Full bio, expertise threads, profile photo
  certifications/page.tsx  Azure + Prosci cards with featured work panels (FINRA Series 6 next)
  blog/page.tsx         Placeholder — posts coming
  contact/page.tsx      Email + LinkedIn, contact form coming

src/components/
  Header.tsx            Fixed nav with mobile hamburger, active link highlighting
  Footer.tsx            Copyright + LinkedIn/email links

public/images/
  ben-poole.jpg         Profile photo (used on Home hero and About page)
  cert-azure-func.png   Azure certification badge
  cert-prosci.png       Prosci certification badge
  cert-LUMA.png         LUMA certification badge
  cert-aim.png          AIM certification badge
  hdr-associate.png     HDR Associate badge
  FINRA-series6.png     FINRA Series 6 badge
  certs-and-awards.png, key-metrics.png, microsoft-paypal-*.png  — misc assets
```

## Nav Items
Home · About · Certifications · Blog · Contact

## Content Strategy
Expertise is threaded throughout pages as narrative — not a flat skills list. Certifications page doubles as the Work/Case Studies section until work content grows enough to stand alone.

## Known TODOs
- [x] Connect Vercel to GitHub for auto-deploy on push
- [x] Connect `benpoole.me` domain (DNS via Network Solutions)
- [x] Configure git identity (Ben Poole / benpoole@outlook.com)
- [ ] Add FINRA Series 6 cert card — need Ben's Orion story to write featured work panel
- [ ] Add LUMA, AIM, HDR Associate cert cards — need descriptions and work stories
- [ ] Add cert badge images to all certification cards
- [ ] Build working contact form
- [ ] Write blog posts (MDX-based, no CMS needed for now)
- [ ] Cut over `benpoole.me` as primary (currently live but keeping stratkit up until contact form done)
- [ ] Implement tag system across pages and blog posts (ultra-clean labels: Product | Data | AI | Strategy | GTM etc.)

## Local Dev
```bash
cd /Users/benjaminpoole/Documents/github/benpoole
npm run dev     # http://localhost:3000
```

## Deploy
Push to `main` — Vercel auto-deploys. No manual step needed.

## Session Recap
When asked "where did we leave off?" or a similar question, generate a session recap using git log and the Known TODOs list. Structure it exactly as:
- **What were we most focused on accomplishing?**
- **What problems did we work through?**
- **What was a win?**
- **What's something I learned?**
- **What are our next logical steps?**

## Keeping This File Current
Update with **surgical edits only** — check off TODOs, append new decisions, update changed values. Never rewrite the whole file. The goal is accuracy without wasting tokens, time, or processing.
