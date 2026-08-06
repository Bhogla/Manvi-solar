# Phase 1 Prompt — Scaffold + Hero + Home (paste into Claude Code)

---

We are building a multi-page marketing website for **Maanvi Solar Energy**, a solar company in Uttarakhand & Uttar Pradesh, India.

**Before you build anything, read `docs/design.md` and `docs/phases.md`.** They define the site map, the design system, and the data shapes. Every screen must reference them. Never redefine styles per screen and never invent your own data structures. Build only Phase 1 in this session, then stop for my review.

## Setup
- Vite + React 18 + Tailwind CSS 3.
- Install `framer-motion` and `lucide-react`.
- Load the **Inter** font.
- Add brand colors to `tailwind.config` as tokens: `brand-green: #1E7A34`, `brand-blue: #1E88C5`, `brand-yellow: #F4A81D`.
- Create this structure and seed `src/data/` from the data shapes in design.md (real services list; placeholder projects & testimonials):
  ```
  src/
    components/  sections/  pages/  data/
  ```

## Build the HERO section (full-screen, mobile-responsive)

Follow this spec exactly, using Maanvi's brand instead of the reference's dark/purple look.

**BACKGROUND**
- Full-screen autoplaying, looping, muted `<video>`, `absolute inset-0 object-cover`, covering the viewport.
- Video URL (placeholder, I'll swap later): `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4`
- A **light** overlay above the video (`bg-white/40`) so black text stays legible. (No dark scrim — keep it bright and clean.)

**COLOR**
- Accent: `#1E7A34` (brand green) — logo dot, the "+" in stats, CTA link text, main heading.
- Body text: black `#000`.

**FONT**
- `'Inter', sans-serif` on the root. All text uppercase, `tracking-widest`/`tracking-wide`, weight 600.

**LAYOUT** — flex column, `min-h-screen`: Nav (top) · Stats row (`flex-1`, centered, right-aligned) · Bottom content (pinned bottom).

**NAV BAR**
- Horizontal flex, items centered, `justify-between`. Padding `px-5 sm:px-8 md:px-12 pt-5 md:pt-6`.
- Left: 32px round div, 2px **green** border, 10px solid **green** circle inside.
- Center (hidden mobile, `md+`): links **Home, About, Services, Projects, Contact** — 14px, semibold, tracking-widest, uppercase, black.
- Right: 36px round **green** button, three white lines (`w-4 h-0.5 bg-white`, `gap-1`) — opens mobile menu.

**MOBILE MENU OVERLAY**
- Hamburger click → fixed, full-screen, `z-50`, white bg.
- Top: same logo (left) + 36px round green close button with X icon (right).
- Vertical list of the 5 links, `text-3xl`, semibold, tracking-widest, uppercase, `gap-8 mt-16`.
- Bottom (`mt-auto`): **"Book a Consultation"** CTA in green with ArrowUpRight icon, `text-xl`.

**STATS ROW**
- `flex-1 flex items-center justify-end`, same horizontal padding, `py-8 md:py-0`.
- Three items, `gap-5 sm:gap-8 md:gap-10`, right-aligned:
  - **₹8Cr+** / ANNUAL TURNOVER
  - **500+** / PROJECTS DELIVERED
  - **2** / STATES SERVED
- Number: `fontSize: clamp(1.5rem, 5vw, 3.5rem)`, weight 600, black. The **"+"** rendered separately in **green** at `0.5em`.
- Label: `text-[10px] sm:text-xs md:text-sm`, semibold, tracking-widest, uppercase, black, `whitespace-pre-line leading-tight` (line break between the two words).

**BOTTOM SECTION** — padding `px-5 sm:px-8 md:px-12 pb-8 md:pb-12`, flex column, `gap-6 md:gap-12`.
- **Row A** (flex row, items-center, justify-between, gap-4):
  - Left tagline: "Clean Energy / For Homes / And Industry" (`<br />` breaks). `text-[10px] sm:text-xs md:text-sm`, semibold, tracking-widest, max-width `130px → sm:160px → md:max-w-xs`.
  - Right CTA: **"Book a Consultation"** + ArrowUpRight. `text-base sm:text-xl md:text-2xl`, green, weight 600, `whitespace-nowrap`. Icon 18px mobile / 22px `sm+`.
- **Row B** (flex row, `items-end`, justify-between, `gap-3 sm:gap-4`):
  - Left: fixed width `w-[120px] sm:w-[180px] md:w-[280px]`, shrink-0. Text: "Rooftop, Commercial And Industrial Solar Across Uttarakhand And Uttar Pradesh". `text-[9px] sm:text-xs md:text-sm`, semibold, tracking-widest, uppercase, `text-left md:text-right`.
  - Right heading: three stacked words **"Powering", "Clean", "Futures"**, each in its own `overflow-hidden` wrapper. `fontSize: clamp(2rem, 9vw, 9rem)`, `lineHeight: 0.88`, weight 600, uppercase, **green**, text-right.

**ANIMATIONS (Framer Motion, fire on load, `initial → animate`)**
1. **fadeDown** (nav): `{opacity:0,y:-20} → {opacity:1,y:0}`. Delay `index*0.1s`, dur 0.5s, ease `[0.22,1,0.36,1]`. Logo (0), links (1–5), hamburger (6).
2. **fadeUp** (stats + bottom): `{opacity:0,y:32} → {opacity:1,y:0}`. Delay `index*0.12s`, dur 0.6s, same ease. Stats (2,3,4), tagline (5), CTA (6), description (7).
3. **Heading slide-up** (clip reveal): each word `y:"110%" → y:0` inside its overflow-hidden parent. Delay `0.4 + wordIndex*0.14`, dur 0.7s, same ease.

**RESPONSIVE** — mobile-first, tiers default / `sm:` 640px / `md:` 768px. Nav links hidden mobile → shown `md+`. Spacing, fonts, widths scale per tier.

## Then assemble the HOME page
Below the hero, on the same Home page, add these sections (reuse the data files, inherit the design system):
1. **Services preview** — 3–4 services from `data/services.js`, icon + title + short description.
2. **Projects preview** — 3 project cards from `data/projects.js` (image, title, location, capacity).
3. **Testimonials** — 2–3 from `data/testimonials.js`.
4. **CTA band** — "Book a Consultation" with phone + email.
5. **Footer** — shared component: logo, quick links (5 pages), contact block (address, phones, email), coverage line. Used by every page.

## Stop
After the Hero + Home page render, **stop and let me review before Phase 2 (About page).** Do not build the other pages yet.
