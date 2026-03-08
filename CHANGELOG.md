# Changelog

All notable changes to benpoole.me are documented here.

---

## [Unreleased]
- FINRA Series 6 featured work panel (need Orion story)
- LUMA, AIM, HDR Associate cert cards with descriptions and work stories
- Working blog posts (MDX-based)
- Tag system across pages and blog (Product | Data | AI | Strategy | GTM)

---

## [1.2.0] — 2026-03-08

### Added
- **Visitor tag tracking** — share personalized links like `benpoole.me?visitor=sandysmith` to identify who you sent a link to. When the visitor submits the contact form, the email includes `Visitor tag: sandysmith` so you know exactly who reached out.
- **sessionStorage persistence** — the visitor tag is captured on any page and stored in the browser's `sessionStorage`. This means the tag survives normal navigation (About → Certifications → Contact) even though the query string is no longer in the URL. sessionStorage is a native browser API — no cookies, no database, no third-party service. It lives entirely in the visitor's browser tab and clears automatically when they close it. Nothing is sent to any server until the contact form is submitted.
- **VisitorTracker component** — a silent, invisible client component added to the root layout (`src/components/VisitorTracker.tsx`). It runs on every page, checks for a `?visitor=` query param, and saves it to sessionStorage if found. Returns null — no UI rendered.

### How it works end-to-end
1. You share `benpoole.me?visitor=sandysmith` with a recruiter
2. Sandy lands on the home page — VisitorTracker silently saves `sandysmith` to her browser tab
3. Sandy browses around (About, Certifications, etc.) — tag stays in sessionStorage
4. Sandy clicks Contact and submits the form
5. You receive the email with `Visitor tag: sandysmith` in the body
6. Sandy closes the tab — sessionStorage clears, nothing persists on her machine

---

## [1.1.0] — 2026-03-08

### Added
- **Contact form** — fully functional form on `/contact` powered by Resend. Sends from `contact@mail.benpoole.me` to `benpoole@outlook.com` with reply-to set to the sender's address.
- **Topic checkboxes** — "What would you like to talk over?" section with five options: Product Strategy, Product Discovery, Product Analytics, Vendors and Tech Stack, Coffee/Cooking/Mixology. Selected topics included in email body.
- **Form UX** — inline pending state ("Sending…"), success confirmation, and error messaging. Form fields disable on submit and lock after success.
- **Resend domain verification** — `mail.benpoole.me` configured as sending subdomain to preserve root domain reputation.
- **Email authentication** — DKIM configured via Resend. SPF (`v=spf1 include:amazonses.com ~all`) and DMARC (`v=DMARC1; p=none`) records added at Network Solutions for `mail.benpoole.me` to improve inbox deliverability.
- **Vercel Analytics** — `@vercel/analytics` package installed and `<Analytics />` component added to root layout. Tracks pageviews, visitors, top pages, referrers, and countries with no cookie banner required.

### Fixed
- **Mobile hero photo** — profile photo was hidden on mobile (`hidden md:flex`). Now renders centered above the headline at 200×200px on small screens, and remains in the 30% right column at `md:` and above.

---

## [1.0.0] — 2026-03-07

### Foundation
- **Project scaffolded** from Create Next App with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.
- **Google Fonts** — Lora (headings, serif) and Inter (body, sans-serif) loaded via `next/font/google`.
- **Vercel deployment** — auto-deploy on push to `main` configured. `benpoole.me` domain connected via Network Solutions A record.
- **CLAUDE.md** — project context file committed to repo for AI-assisted development continuity. Excluded from Vercel deployments via `.vercelignore`.

### Design System
- **Initial theme** — warm/technical aesthetic: Cream `#faf7f2` base, Amber `#d97706` accent, Slate `#3b4f6b` technical accent, Terracotta `#c2612a` tertiary, Ink `#1a1a2e` dark.
- **Dark mode pivot** — full site reskinned to deep dark base (`#0f172a`) with Cyan `#06b6d4` as primary accent replacing amber. Applied across all pages, components, and globals.
- **CSS background textures** — `.bg-honeycomb` (hero sections) and `.bg-grid` (content sections) defined in `globals.css`. Pure CSS, no images.
- **Typography scale** — `font-heading` class applies Lora to h1/h2/h3. Inter handles all body copy.
- **Profile photo border** — subtle light grey border added to profile photo on Home and About pages.

### Pages
- **Home (`/`)** — 70/30 hero layout with text left and profile photo right. Expertise cards (Product Leadership, AI & Technology, Change & People). Blog teaser and Certifications teaser sections. Discipline tags (Product Strategy | Agentic AI | Data Products) above headline.
- **About (`/about`)** — Full bio with narrative expertise threads. Profile photo. Connects personal story to professional positioning.
- **Certifications (`/certifications`)** — Azure Fundamentals and Prosci Change Management cards with certification badge images in white pill containers. Featured work panels with case study content. FINRA Series 6 card added (work panel pending).
- **Blog (`/blog`)** — Placeholder page, posts coming.
- **Contact (`/contact`)** — Initially a placeholder with direct email link. Replaced with working contact form in v1.1.0.

### Components
- **Header** — Fixed nav with logo/name left, nav links right. Mobile hamburger menu. Active link highlighting.
- **Footer** — Copyright, LinkedIn, and email links.
- **RandomQuote** — Client component that picks a random quote from `src/data/quotes.json` on mount. Displayed on Home and About pages. Ships with 10 starter quotes on product, research, and leadership.

### Content
- **Hero headline** — Iterated through several positions before landing on: *"Opinion builds a product, research builds a business."* with subhead positioning AI, Data Analytics, and UX Research as the tools for product decision-making.
- **Certification badge images** added: Azure, Prosci, FINRA Series 6, LUMA, AIM, HDR Associate.
- **Featured work assets** added: case study screenshots, Microsoft/PayPal change management imagery.
- **Copy pass** — em dashes removed throughout for cleaner punctuation. Voice refined to be direct, confident, and narrative-forward.
