# Rose Bud Academy — Website

A calm, editorial school website. Built with React, Vite, Tailwind CSS, React Router, Framer Motion, and Lucide React.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Design tokens (Tailwind theme)

| Token | Value | Use |
|---|---|---|
| `primary` | `#166534` | Deep Green — CTAs, links, active states |
| `ink` | `#111827` | Charcoal — headings, primary text |
| `ink-soft` | `#374151` | Body copy |
| `slate` | `#64748B` | Captions, secondary text |
| `gold` | `#B8923F` | Sparing accent only — never a primary color |
| `paper` | `#FFFFFF` | Background |
| `line` | `#E7E9EC` | Hairline borders |

Headings use **Poppins**; body copy uses **Inter**. Both are loaded via Google Fonts in `index.html`.

## Signature element

The **RosebudMark** (`src/components/ui/RosebudMark.jsx`) is a single-line illustration of a closed rose bud — used as the logo glyph in the navbar, and reserved for reuse as a quiet section divider later in the build. It is the one recurring, distinctive visual motif on the site; everything else stays quiet and disciplined around it.

## Structure

```
src/
  components/
    layout/       Navbar, Layout (Footer to be added)
    sections/     Page sections (Hero, and more as they're built)
    ui/           Reusable primitives (Button, RosebudMark)
  pages/          Route-level pages (Home)
  index.css       Base styles, focus states, reduced-motion handling
```

## Build status

This pass includes: project scaffold, Navbar, and Hero.
Not yet built: About, Academics, Campus Life, Admissions, Contact, Footer, and the 404 page.

## Notes for handoff

- Replace the placeholder block in `Hero.jsx` with real campus photography at `/images/hero-campus.jpg` (see the commented `<img>` tag inside the component).
- All colors, type, and spacing are defined once in `tailwind.config.js` — change brand values there rather than in individual components.
