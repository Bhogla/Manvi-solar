# Maanvi Solar Energy — Build Phases

Build order for Claude Code. **Do one phase at a time. Stop for review after each. Every screen references `docs/design.md` — the site map, design system, and data shapes. Never build in isolation or redefine styles per screen.**

---

## Phase 0 — Project scaffold ✅ (do first, inside the Phase 1 prompt)
- Vite + React 18 + Tailwind CSS 3 project.
- Install `framer-motion`, `lucide-react`.
- Inter font loaded.
- Tailwind config with brand colors as tokens:
  - `brand-green: #1E7A34`, `brand-blue: #1E88C5`, `brand-yellow: #F4A81D`.
- Folder layout:
  ```
  src/
    components/   (Nav, Footer, shared UI)
    sections/     (Hero, ServicesPreview, etc.)
    pages/        (Home, About, Services, Projects, Contact)
    data/         (services.js, projects.js, testimonials.js, team.js)
  ```
- Data files seeded from the data shapes in design.md (real services list; placeholder projects/testimonials).

## Phase 1 — Hero + Home page
- **Hero** section — full spec from reference prompt, Maanvi colors/content (see design.md).
- **Home** page assembles: Hero → Services preview (3–4) → Projects preview (3) → Testimonials → CTA band → Footer.
- Shared **Nav** and **Footer** components (used by every page).
- ⏸ **STOP — review before Phase 2.**

## Phase 2 — About page
- Company story, Vision & Mission, coverage (Uttarakhand & UP), turnover stat band, team/contact people.

## Phase 3 — Services page
- Full grid of all 9 services (Service data shape), icon + title + description each.

## Phase 4 — Projects / Gallery page
- Grid of Project cards (image, title, location, capacityKw, type). Placeholder data.

## Phase 5 — Contact page
- Address, phones, email, GST, enquiry form (non-functional / mailto for now), optional map embed.

## Phase 6 — Polish pass
- Responsive QA across all breakpoints, hover states, page transitions, accessibility, real-content swap (video, project photos, testimonials).

---

### After each phase, confirm:
- Does it inherit the design system exactly? (no new colors/spacing)
- Does it reuse the shared data shapes? (no reinvented product/project structures)
- Do Nav + Footer match every other page?

If a screen is being built without referencing the map, the system, and the data shapes — stop. That's the drift point.
