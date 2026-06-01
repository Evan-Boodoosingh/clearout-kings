# Prestige Lawn & Landscape

A premium, high-conversion website template built for lawn care and landscaping businesses. Designed to showcase services, build trust, and convert visitors into leads through a clean, modern interface with rich texture-based design.

**Live Demo:** [prestige-lawn.vercel.app](https://prestige-lawn.vercel.app)

---

## Tech Stack

- **React 18** — Component-based UI architecture
- **TypeScript** — Type-safe development
- **Tailwind CSS v4** — Utility-first styling with responsive design
- **Framer Motion** — Scroll-triggered animations and micro-interactions
- **Vite** — Fast build tooling and hot module replacement
- **react-compare-slider** — Before/after drag comparison for gallery
- **embla-carousel** — Production-grade carousel for reviews
- **Vercel** — Deployment and hosting

**Planned Integrations:**
- **Sanity CMS** — Headless content management for client self-service
- **Resend** — Transactional email for contact form submissions

---

## Features

- **Config-Driven Architecture** — All business info, theme colors, textures, and section content controlled from a single `site.config.ts` file. Swap the config to rebrand the entire site for a new client.
- **Video Hero** — Full-viewport background video with overlay, animated badge, and dual CTA buttons.
- **Before & After Gallery** — Drag slider powered by react-compare-slider. Works on desktop (mouse drag) and mobile (touch drag). Custom gold-branded handle.
- **Infinite Review Carousel** — CSS-driven infinite scroll with hover and touch pause. Concrete-textured cards with star ratings.
- **Contact Form** — First name, last name, phone, service dropdown, message. Gold focus states. Success confirmation state. Resend integration ready.
- **Floating Nav Pill** — Sticky navigation with backdrop blur. Darkens on scroll. Mobile hamburger with animated X transition and full-screen overlay menu.
- **Texture-Based Design System** — Three material textures (grass, stone, concrete) create visual rhythm through alternating section backgrounds and card surfaces.
- **Fully Responsive** — Every section tested across desktop, tablet, and mobile breakpoints.
- **Scroll Animations** — Staggered entrance animations on all sections using Framer Motion's `whileInView` with `viewport` thresholds.

---

## Project Structure

```
prestige-lawn/
├── public/
│   ├── assets/
│   │   ├── gallery/          # Before/after photos (before-1.jpg, after-1.jpg, etc.)
│   │   ├── grass-texture.jpg
│   │   ├── concrete-texture.jpg
│   │   ├── stone-texture.jpg
│   │   ├── hero-video.mp4
│   │   └── team-photo.jpg
│   └── favicon.ico
├── src/
│   ├── config/
│   │   └── site.config.ts    # Single source of truth for all business & theme data
│   ├── components/
│   │   ├── Nav/Nav.tsx
│   │   ├── Hero/Hero.tsx
│   │   ├── Services/Services.tsx
│   │   ├── About/About.tsx
│   │   ├── TrustBar/TrustBar.tsx
│   │   ├── Process/Process.tsx
│   │   ├── Gallery/Gallery.tsx
│   │   ├── Reviews/Reviews.tsx
│   │   ├── Contact/Contact.tsx
│   │   └── Footer/Footer.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Section Breakdown

| Section | Background | Card Texture | Purpose |
|---------|-----------|-------------|---------|
| Hero | Video | — | First impression, dual CTA |
| Services | Grass | Concrete | 6 service cards with hover states |
| About | Stone | — | Founder story, team photo, stats |
| TrustBar | Grass | Concrete | 3 trust/promise cards |
| Process | Grass | Concrete | 4-step how-it-works flow |
| Gallery | Stone | — | 6 before/after drag sliders |
| Reviews | Grass | Concrete | Infinite scroll carousel |
| Contact | Grass | Concrete (form block) | Lead capture form |
| Footer | Dark (#0a0a0a) | — | Logo, contact info, credits |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/Evan-Boodoosingh/prestige-lawn.git
cd prestige-lawn
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build

```bash
npm run build
```

### Deploy

Push to GitHub and connect to Vercel. Vite preset is auto-detected.

---

## Customization

All business information and theme settings live in `src/config/site.config.ts`:

```typescript
export const siteConfig = {
  business: {
    name: "Prestige Lawn & Landscape",
    phone: "(863) 555-0190",
    email: "hello@prestigelawn.com",
    hours: "Mon–Sat, 7am–6pm",
    address: "Polk County, FL",
    serviceAreas: ["Lakeland", "Winter Haven", "Haines City", "Davenport"],
  },
  theme: {
    accentColor: "#C9A84C",
    grassTexture: "/assets/grass-texture.jpg",
    concreteTexture: "/assets/concrete-texture.jpg",
    stoneTexture: "/assets/stone-texture.jpg",
  },
  hero: {
    type: "video",
    src: "/assets/hero-video.mp4",
    headline: "Your Lawn.",
    headlineAccent: "Perfected.",
    subheading: "Premium lawn care and landscaping for homeowners who refuse to settle for average.",
  },
}
```

To rebrand for a new client — update the config, swap the textures and photos, deploy.

---

## Design Decisions

- **Texture alternation** — Grass and stone backgrounds alternate to create visual rhythm. Concrete is used exclusively as a card surface material, never as a full section background.
- **Gold accent (#C9A84C)** — Warm gold communicates premium quality without being flashy. Used for icons, labels, hover states, focus rings, and the gallery slider handle.
- **Typography** — Playfair Display (serif) for headings, Inter for body text. Serif headings signal craftsmanship. `clamp()` used throughout for fluid responsive sizing.
- **No promotions section** — Research showed that discounts undermine premium positioning. Cut in favor of a tighter conversion funnel.
- **No nav links in footer** — The floating pill nav is always visible, making footer nav redundant.
- **CSS scroll for reviews over JS carousel** — After testing multiple approaches (JS-controlled, Embla with fixed widths), pure CSS infinite scroll provided the smoothest, most reliable loop without edge cases.

---

## Roadmap

- [ ] Sanity CMS integration — client-managed content
- [ ] Resend backend — contact form email routing
- [ ] Google Reviews API — automatic review pulling
- [ ] SEO meta tags via React Helmet
- [ ] Image optimization — compress concrete-texture.jpg from 8.3MB
- [ ] Performance audit — Lighthouse score optimization

---

## Author

**Evan Boodoosingh**
- Portfolio: [evanboodoosingh.vercel.app](https://evanboodoosingh.vercel.app)
- GitHub: [github.com/Evan-Boodoosingh](https://github.com/Evan-Boodoosingh)

---

## License

This project is a demo template. All stock photos are from Unsplash and Pexels (free for commercial use). The business name "Prestige Lawn & Landscape" and all reviews are fictional.