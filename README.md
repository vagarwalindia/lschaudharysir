# VetVentures

**From Battlefield to Basecamp — Leadership Through Adventure.**

A production-ready marketing website for an Army veteran entrepreneur running
corporate events, leadership bootcamps, and trekking camps — built with
Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

---

## ✨ Features

- **Single-page, section-based site** with a sticky nav bar and smooth-scroll
  anchor links (Home, About, Services, Events, Media, Community, Contact)
- **Hero** with the exact headline and dual CTAs requested, plus animated copy
- **About** section with founder story, values grid, photo placeholder, and an
  embedded intro video (YouTube iframe)
- **Services** — three cards (Corporate Events, Leadership Bootcamps,
  Trekking Camps)
- **Events** — a filterable events calendar (All / Corporate / Bootcamp /
  Trek) backed by dummy data in `lib/events.ts`, with "Register" buttons
- **Media** — embedded YouTube videos + an Instagram-style photo grid
  (placeholder content, ready to be wired to real feeds/APIs)
- **Community** — membership sign-up form (name, email, phone) with
  client-side validation, a newsletter opt-in, and WhatsApp/Discord links
- **Contact** — validated contact form + a floating WhatsApp button
- **Dark mode toggle** with `localStorage` persistence and no flash-of-theme
  on load
- **SEO** — full metadata, Open Graph, and Twitter card tags in
  `app/layout.tsx`
- **Framer Motion** scroll-triggered fade-in/slide-up animations throughout,
  respecting `prefers-reduced-motion`
- **Fully responsive**, mobile-first layout

---

## 🎨 Design System

| Token       | Value                          |
|-------------|---------------------------------|
| Army Green  | `#4B5320` (+ `dark` `#363C17`, `light` `#6B7530`) |
| Sand Beige  | `#F4E4C1` (+ `dark` `#E8D2A0`)   |
| Charcoal    | `#2C2C2C` (+ `light` `#3D3D3D`)  |
| Brass (accent) | `#A9812D`                    |
| White       | `#FFFFFF`                       |

- **Headings:** Oswald (condensed, field-manual feel)
- **Body:** Inter

Both fonts are loaded via `next/font/google` in `app/layout.tsx` (self-hosted,
zero layout shift) and exposed as CSS variables consumed by
`tailwind.config.ts`.

---

## 📁 Project Structure

```
vetventures/
├── app/
│   ├── layout.tsx        # Root layout: fonts, SEO metadata, theme script
│   ├── page.tsx           # Home page — assembles all sections
│   └── globals.css        # Tailwind layers, base styles, utility classes
├── components/
│   ├── Navbar.tsx          # Sticky nav, smooth scroll, mobile menu
│   ├── Hero.tsx            # Hero section with headline + CTAs
│   ├── About.tsx           # Founder story, values, photo/video placeholders
│   ├── Services.tsx        # 3 service cards
│   ├── Events.tsx          # Filterable events calendar
│   ├── Media.tsx           # YouTube + Instagram embeds
│   ├── Community.tsx       # Membership sign-up form + community links
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Site footer
│   ├── WhatsAppButton.tsx  # Floating WhatsApp CTA
│   ├── DarkModeToggle.tsx  # Theme toggle
│   └── AnimatedSection.tsx # Shared Framer Motion scroll-reveal wrapper
├── lib/
│   └── events.ts           # Dummy events dataset + types
├── public/
│   └── topo.svg             # Topographic-line background texture
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Running Locally

**Requirements:** Node.js 18.17+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the site
# http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

---

## 🔧 Things to Customize Before Launch

1. **Replace placeholder content:**
   - Founder photo in `components/Hero.tsx` and `components/About.tsx`
   - Intro video `src` in `components/About.tsx`
   - YouTube video IDs and Instagram images in `components/Media.tsx`
   - Event data in `lib/events.ts` (or wire to a real CMS/API)
2. **Wire up forms:** `Community.tsx` and `Contact.tsx` currently simulate
   submission client-side. Replace the `TODO` comments with real API routes
   (e.g. `app/api/join/route.ts`) or a third-party form service.
3. **Update contact details:** phone/email/address in `Contact.tsx` and the
   WhatsApp number in `WhatsAppButton.tsx` and `Footer.tsx`.
4. **Community links:** real WhatsApp group + Discord invite URLs in
   `Community.tsx`.
5. **SEO assets:** add a real `public/og-image.jpg` (1200×630) and
   `public/favicon.ico`, and update `metadataBase` in `app/layout.tsx` to the
   real domain.

---

## 🧠 Notes on Key Implementation Choices

- The site is built as **one scrolling page with anchor sections** rather
  than separate routes, so the sticky nav's smooth-scroll behavior works
  edge-to-edge and matches how most single-founder service sites are browsed.
- **Dark mode** is implemented via a `dark` class toggle on `<html>` (Tailwind
  `darkMode: "class"`), persisted to `localStorage`, and applied by an inline
  script in `<head>` before hydration to avoid a theme flash.
- **Events filtering** is done client-side with `useMemo` over the dummy
  dataset — trivial to swap for a server fetch or `searchParams`-driven
  filter later.
- All forms use plain HTML5 + custom regex validation (no external form
  library) to keep the bundle lean; swap in `react-hook-form` + `zod` if the
  app grows more complex forms.
