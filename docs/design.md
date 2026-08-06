# Maanvi Solar Energy — Website Build Spec

**Stack:** React 18 · Tailwind CSS 3 · Framer Motion · Lucide React · Inter font
**Type:** Multi-page, fully mobile-responsive marketing site. Hero structure adapted from the "motionsites.ai" reference; visual language rebuilt around the Maanvi brand.

> **Build rule:** Every screen must reference the SITE MAP, the DESIGN SYSTEM, and the DATA SHAPES below. Never build a screen in isolation or redefine styles per screen. Build one screen at a time and stop for review.

---

## Site Map

Five pages, shared nav across all:

1. **Home** — hero (full spec below) + services preview + projects preview + testimonials + CTA band + footer.
2. **About** — company story, vision & mission, coverage, turnover stat band, team/contacts.
3. **Services** — full grid of all services (Services data shape).
4. **Projects / Gallery** — grid of completed installs (Projects data shape).
5. **Contact** — address, phones, email, GST, enquiry form, map embed.

**Global nav links:** Home · About · Services · Projects · Contact.
**Global footer:** logo, quick links, contact block, coverage line.

---

## Data Shapes

Every screen speaks the same data language. Define once; reuse everywhere.

**Service**
```
{ icon: LucideIcon, title: string, description: string }
```
Source list (from company profile): Solar Panels (bifacial & topcon), Solar Inverters, Solar Water Heaters, Solar Street Lights, Solar Pump, Solar Thermal, Solar Fencing, Rooftop Solar Installation (Residential & Commercial), AMC & Maintenance Services.

**Project**
```
{ image: url, title: string, location: string, capacityKw: number, type: 'residential' | 'commercial' | 'industrial' }
```
*No real project data in profile — use placeholders, swap later.*

**Testimonial**
```
{ name: string, quote: string, location: string }
```
*No real testimonials in profile — placeholder entries, swap later.*

**TeamContact**
```
{ name: string, role: string, phone: string }
```
Known: Dharmendra Singh Negi (owner/contact). Phones: +91 7818806374, 9664471744.

---

## Build Order

1. **Hero + full Home page first** — then stop for review.
2. Then remaining pages one at a time: About → Services → Projects → Contact.
3. Each page inherits the design system and reuses the data shapes above.

---

## Brand Direction

Match the reference's editorial full-screen structure (nav → stats → bottom heading), but replace the dark/purple agency aesthetic with Maanvi's bright, clean solar identity.

### Colors
- **Green (primary / wordmark):** `#1E7A34` — logo dot, CTA link text, "+" symbols in stats, main heading.
- **Blue (solar panel):** `#1E88C5` — secondary accents, hover states, nav link underline.
- **Yellow/Orange (sun):** `#F4A81D` — small highlight details (logo ring, icon accents).
- **Body text:** black `#000` on a light background.
- **Background:** the hero video sits under a soft white/light overlay (`bg-white/30` to `bg-white/50`) so black text stays legible against a bright solar-panel/rooftop video. *(No dark scrim — keep it airy and clean.)*

### Font
- `'Inter', sans-serif` on the root container.
- All text **uppercase**, `tracking-widest` / `tracking-wide`.
- Weight **600** throughout.

---

## Background
- Full-screen autoplaying, looping, muted `<video>` — `absolute inset-0 object-cover`, covers the viewport.
- **Placeholder video URL** (swap for real Maanvi footage — rooftop install / panels in sun):
  `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4`
- Light overlay div above the video, below the content.

---

## Layout — flex column, `min-h-screen`
1. **Nav** (top, fixed height)
2. **Stats row** (`flex-1`, vertically centered, right-aligned)
3. **Bottom content** (pinned to bottom with padding)

---

## Navigation Bar
- Horizontal flex, items centered, `justify-between`. Padding `px-5 sm:px-8 md:px-12 pt-5 md:pt-6`.
- **Left — logo:** 32px round div, 2px **green** border, containing a 10px solid **green** circle. *(Optionally swap for the actual Maanvi logo image.)*
- **Center (hidden mobile, `md+`):** four links — **"Home", "About", "Services", "Contact"** — 14px, semibold, tracking-widest, uppercase, black. Blue underline on hover.
- **Right:** 36px round **green** button with three white lines (hamburger — three `span`, `w-4 h-0.5 bg-white`, `gap-1`). Opens mobile menu.

### Mobile Menu Overlay
- Fixed, full-screen, `z-50`, white background.
- Top: same logo (left) + 36px round green close button with X icon (right).
- Vertical list of the 4 links, `text-3xl`, semibold, tracking-widest, uppercase, `gap-8 mt-16`.
- Bottom (`mt-auto`): **"Book a Consultation"** CTA in green with ArrowUpRight icon, `text-xl`.

---

## Stats Row (middle) — turnover-based
- Container: `flex-1 flex items-center justify-end`, matching horizontal padding, `py-8 md:py-0`.
- Three stat items, horizontal row, `gap-5 sm:gap-8 md:gap-10`, right-aligned:

| Number | Label |
|--------|-------|
| **₹8Cr+** | ANNUAL TURNOVER |
| **500+** | PROJECTS DELIVERED |
| **2** | STATES SERVED |

- Number: `fontSize: clamp(1.5rem, 5vw, 3.5rem)`, weight 600, black. The **"+"** rendered separately in **green** at `0.5em`.
- Label: `text-[10px] sm:text-xs md:text-sm`, semibold, tracking-widest, uppercase, black, `whitespace-pre-line leading-tight` (two words, line break between).

---

## Bottom Section
Padding `px-5 sm:px-8 md:px-12 pb-8 md:pb-12`. Flex column, `gap-6 md:gap-12`.

### Row A — tagline + CTA
- Flex row, items-center, `justify-between`, `gap-4`.
- **Left tagline:** "Clean Energy / For Homes / And Industry" (`<br />` breaks). `text-[10px] sm:text-xs md:text-sm`, semibold, tracking-widest, max-width `130px → 160px → max-w-xs`.
- **Right CTA:** **"Book a Consultation"** + ArrowUpRight icon. `text-base sm:text-xl md:text-2xl`, **green**, weight 600, `whitespace-nowrap`. Icon 18px mobile / 22px `sm+`.

### Row B — description + main heading
- Flex row, `items-end`, `justify-between`, `gap-3 sm:gap-4`.
- **Left description:** fixed width `w-[120px] sm:w-[180px] md:w-[280px]`, `shrink-0`. Text: "Rooftop, Commercial And Industrial Solar Across Uttarakhand And Uttar Pradesh". `text-[9px] sm:text-xs md:text-sm`, semibold, tracking-widest, uppercase, `text-left md:text-right`.
- **Right heading:** three words stacked — **"Powering", "Clean", "Futures"**. Each word in its own `overflow-hidden` wrapper. `fontSize: clamp(2rem, 9vw, 9rem)`, `lineHeight: 0.88`, weight 600, uppercase, **green**, text-right.

---

## Animations (Framer Motion) — fire on load (`initial → animate`)

1. **fadeDown** (nav): `{opacity:0, y:-20} → {opacity:1, y:0}`. Delay `index*0.1s`, dur `0.5s`, ease `[0.22,1,0.36,1]`. Logo (0), links (1–4), hamburger (5).
2. **fadeUp** (stats + bottom): `{opacity:0, y:32} → {opacity:1, y:0}`. Delay `index*0.12s`, dur `0.6s`, same ease. Stats (2,3,4), tagline (5), CTA (6), description (7).
3. **Heading slide-up** (clip reveal): each word `y:"110%" → y:0` inside its `overflow-hidden` parent. Delay `0.4 + wordIndex*0.14` (0.4 / 0.54 / 0.68s), dur `0.7s`, same ease.

---

## Responsive
Mobile-first. Tiers: default / `sm:` (640px) / `md:` (768px). Nav links hidden on mobile → shown `md+`. Spacing, font sizes, widths scale up per tier. Mobile menu handles small-screen nav.

---

## Content Reference (from company profile)
- **Company:** Maanvi Solar Energy · Contact: Dharmendra Singh Negi
- **Services:** Solar panels (bifacial & topcon), inverters, water heaters, street lights, pumps, thermal, fencing, rooftop installs (residential & commercial), AMC & maintenance.
- **Coverage:** Uttarakhand & Uttar Pradesh.
- **Turnover:** 2025–26 ≈ ₹8 Cr.
- **Contact:** +91 7818806374 / 9664471744 · maanvisolarenergy@gmail.com · Near Patanjali Factory, Kuanwala, Dehradun, Uttarakhand – 248001 · GST 05AIBPN9879P1ZA
