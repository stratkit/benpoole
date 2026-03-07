# benpoole — Claude Context

## What This Is
Ben Poole's personal portfolio site, to be hosted at `benpoole.me`. Replacing the old vanilla HTML stratkit site. Built in Next.js with a warm/technical design aesthetic.

## Tech Stack
- **Framework:** Next.js 16 (App Router), TypeScript
- **Styling:** Tailwind CSS v4 — custom design system (see below)
- **Fonts:** Lora (headings, serif), Inter (body, sans-serif) via Google Fonts
- **Deployment:** Vercel (`benpoole.vercel.app` currently; `benpoole.me` when ready to cut over)
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
  certifications/page.tsx  Azure + Prosci cards with featured work panels
  blog/page.tsx         Placeholder — posts coming
  contact/page.tsx      Email + LinkedIn, contact form coming

src/components/
  Header.tsx            Fixed nav with mobile hamburger, active link highlighting
  Footer.tsx            Copyright + LinkedIn/email links

public/images/
  ben-poole.jpg         Profile photo (used on Home hero and About page)
```

## Nav Items
Home · About · Certifications · Blog · Contact

## Content Strategy
Expertise is threaded throughout pages as narrative — not a flat skills list. Certifications page doubles as the Work/Case Studies section until work content grows enough to stand alone.

## Known TODOs
- [ ] Connect Vercel to GitHub for auto-deploy on push (currently manual `vercel --prod`)
- [ ] Build working contact form
- [ ] Write blog posts (MDX-based, no CMS needed for now)
- [ ] Add more certifications
- [ ] Cut over `benpoole.me` domain in Vercel settings (after contact form is live)
- [ ] Configure git identity (`git config --global --edit`)

## Local Dev
```bash
cd /Users/benjaminpoole/Documents/github/benpoole
npm run dev     # http://localhost:3000
```

## Deploy
```bash
vercel --prod   # manual deploy until GitHub auto-deploy is connected
```

## Keeping This File Current
Update with **surgical edits only** — check off TODOs, append new decisions, update changed values. Never rewrite the whole file. The goal is accuracy without wasting tokens, time, or processing.
