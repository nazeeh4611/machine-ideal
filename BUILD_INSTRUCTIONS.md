# Ideal Factory — Luxury Villa Interior Website
## Complete Build & Run Instructions

---

## ⚡ Quick Start (5 minutes)

```bash
# 1. Copy project files to your machine, then:
cd ideal-factory
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📋 Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | 18.17+ | https://nodejs.org |
| npm | 9+ | Comes with Node.js |
| Git | Any | https://git-scm.com |

Check your versions:
```bash
node --version   # Should be v18.17+
npm --version    # Should be 9+
```

---

## 🗂️ Project Structure

```
ideal-factory/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (metadata, fonts)
│   │   ├── page.tsx            # Main page (orchestrates all sections)
│   │   └── globals.css         # Global styles, CSS variables, animations
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky nav — transparent → glass on scroll
│   │   │   └── Footer.tsx       # 4-column footer with socials
│   │   │
│   │   ├── hero/
│   │   │   └── HeroSection.tsx  # Full-screen hero with parallax + word animation
│   │   │
│   │   ├── solutions/
│   │   │   ├── InteriorSolutionsTitle.tsx  # Stroke → filled text reveal (GSAP)
│   │   │   ├── SolutionsIntro.tsx          # Circular image with floating logo
│   │   │   ├── SolutionsGrid.tsx           # 2×2 card grid
│   │   │   ├── SolutionCard.tsx            # Reusable solution card
│   │   │   └── ProblemsSection.tsx         # Problems + video card
│   │   │
│   │   ├── process/
│   │   │   └── ProcessTimeline.tsx  # Horizontal timeline with GSAP line animation
│   │   │
│   │   ├── gallery/
│   │   │   ├── PortfolioGallery.tsx  # Masonry grid layout
│   │   │   └── PortfolioCard.tsx     # Reusable gallery card with hover overlay
│   │   │
│   │   ├── testimonials/
│   │   │   ├── TestimonialsSection.tsx  # Swiper auto-slide testimonials
│   │   │   └── TestimonialCard.tsx      # Individual testimonial card
│   │   │
│   │   ├── contact/
│   │   │   ├── ContactSection.tsx  # Dark luxury section with grid bg
│   │   │   └── ContactForm.tsx     # Glassmorphism form with validation
│   │   │
│   │   ├── common/
│   │   │   └── WhyChooseUs.tsx  # Split layout: image left, benefits right
│   │   │
│   │   └── animations/
│   │       ├── SmoothScrollProvider.tsx  # Lenis wrapper
│   │       ├── PageLoader.tsx            # Loading screen 0→100
│   │       ├── CursorGlow.tsx            # Custom cyan cursor
│   │       ├── ScrollProgress.tsx        # Fixed right progress bar
│   │       └── SectionReveal.tsx         # Reusable reveal wrapper
│   │
│   ├── hooks/
│   │   ├── useScrollReveal.ts    # IntersectionObserver reveal hook
│   │   └── useGSAP.ts            # GSAP ScrollTrigger hooks
│   │
│   └── constants/
│       └── index.ts              # All data (nav, solutions, portfolio, etc.)
│
├── public/
│   └── images/                  # (optional) local image assets
│
├── package.json
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.ts
└── tsconfig.json
```

---

## 📦 All Dependencies Explained

### Core Framework
- **next** `15.0.0` — App Router, SSR, image optimization
- **react** + **react-dom** `^18.3.1` — UI library

### Animations
- **framer-motion** `^11.3.19` — React animations (hero words, section slides)
- **gsap** `^3.12.5` — ScrollTrigger, timeline, text animations
- **@studio-freight/lenis** `^1.0.42` — Silky smooth scrolling

### UI Libraries
- **swiper** `^11.1.9` — Touch-friendly testimonials slider
- **react-icons** `^5.3.0` — Icon set (HiArrowRight, RiPlayFill, etc.)

### Utilities
- **clsx** `^2.1.1` — Conditional className merging

### Dev Tools
- **tailwindcss** `^3.4.1` — Utility CSS
- **typescript** `^5` — Type safety
- **autoprefixer** + **postcss** — CSS processing

---

## 🚀 Step-by-Step Setup

### Step 1: Create project folder
```bash
mkdir ideal-factory
cd ideal-factory
```

### Step 2: Copy all files
Copy the provided source files maintaining the exact folder structure shown above.

### Step 3: Install dependencies
```bash
npm install
```

> ⚠️ If you see peer dependency warnings, use: `npm install --legacy-peer-deps`

### Step 4: Run development server
```bash
npm run dev
```

Open **http://localhost:3000** — you should see the page load with the animated loader (0→100%).

### Step 5: Build for production
```bash
npm run build
npm run start
```

---

## ⚙️ Configuration Notes

### Images
The project uses **Unsplash** images via URL. They're configured in `next.config.ts`:
```ts
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' },
    { protocol: 'https', hostname: 'plus.unsplash.com' },
  ],
}
```

To use **local images**, place them in `/public/images/` and update `src/constants/index.ts` with paths like `/images/kitchen.jpg`.

### Fonts
Google Fonts are loaded in `globals.css`:
- **Cormorant Garamond** — display headings
- **Jost** — body text
- **Playfair Display** — accent headings

For production, consider using `next/font/google` instead for zero layout shift.

### Colors (CSS Variables)
All colors are defined in `globals.css` and `tailwind.config.ts`:
```css
--accent: #4FD1D9;        /* Teal/cyan — main brand */
--bg-primary: #0d0d0d;    /* Darkest black */
--bg-secondary: #121212;  /* Card/section bg */
--bg-tertiary: #171717;   /* Hover states */
```

---

## 🎨 Design System

### Typography Scale
| Class | Font | Size | Use |
|-------|------|------|-----|
| `font-heading` | Cormorant Garamond | clamp(3rem, 10vw, 9rem) | Hero/section titles |
| `font-body` | Jost | 14–16px | Body copy, UI |
| `font-display` | Playfair Display | 24–48px | Accent headings |

### Spacing System (Tailwind)
- Section padding: `py-16 sm:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 sm:p-8`
- Gap between cards: `gap-6`

### Glassmorphism Classes
```css
.glass {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.glass-btn {
  background: rgba(79, 209, 217, 0.1);
  border: 1px solid rgba(79, 209, 217, 0.3);
  /* Hover: glow + scale(1.05) */
}
```

---

## 🎭 Animation Reference

### 1. Page Loader (PageLoader.tsx)
- Counts from 0 to 100 over ~2.2 seconds
- Progress bar fills with accent color
- Fades out on completion

### 2. Smooth Scroll (SmoothScrollProvider.tsx)
- Lenis with `duration: 1.4`, custom easing
- Connects to GSAP ScrollTrigger automatically

### 3. Hero Background (HeroSection.tsx)
- GSAP: `scale(1.15) → scale(1)`, 8 seconds
- Mouse parallax: background shifts with cursor movement

### 4. Word-by-Word Animation (HeroSection.tsx)
- Framer Motion: each word delays by `i * 0.1s`
- `y: 40 → 0`, `opacity: 0 → 1`

### 5. Stroke → Filled Text (InteriorSolutionsTitle.tsx)
- GSAP ScrollTrigger scrub
- Stroke version always visible
- Filled version: `opacity: 0, scale: 0.8` → `opacity: 1, scale: 1`

### 6. Section Reveal (useScrollReveal hook)
- IntersectionObserver: triggers when 10% visible
- `opacity: 0, translateY: 60px` → `opacity: 1, translateY: 0`
- Duration: 1.2s, `cubic-bezier(0.16, 1, 0.3, 1)`

### 7. Stagger Cards (useStaggerReveal hook)
- Each card delays by `index * 0.15s`
- Same opacity/transform transition

### 8. Timeline Line (ProcessTimeline.tsx)
- GSAP ScrollTrigger scrub
- `width: 0% → 100%` from left to right

### 9. Circle Reveal (SolutionsIntro.tsx)
- GSAP: `scale: 0, rotation: 10` → `scale: 1, rotation: 0`
- Back easing for organic feel

### 10. Custom Cursor (CursorGlow.tsx)
- Small dot: follows mouse immediately
- Larger glow ring: lerp (12% speed), trails behind

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Changes |
|-----------|-------|---------|
| Mobile | < 640px | Single column, smaller text |
| sm | 640px+ | 2-column grids, larger text |
| lg | 1024px+ | 3-column grids, full layout |
| xl | 1280px+ | Max-width container, full typography |

Key responsive patterns:
- Hero headline: `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`
- Process timeline: vertical on mobile, horizontal on desktop
- Solution grid: `grid-cols-1 sm:grid-cols-2`
- Contact section: `grid-cols-1 lg:grid-cols-5`

---

## 🔧 Customization Guide

### Change accent color
Find `#4FD1D9` and `#3ABBC3` in:
- `globals.css` (`:root` variables)
- `tailwind.config.ts` (colors)

### Update content
All data lives in `src/constants/index.ts`:
```ts
NAV_LINKS         // Navigation items
SOLUTIONS         // 4 service cards
PROBLEMS          // Problem bullet points
PROCESS_STEPS     // 4 timeline steps
PORTFOLIO_IMAGES  // 8 gallery images
WHY_CHOOSE_US     // 5 benefit items
TESTIMONIALS      // 4 testimonials
```

### Replace images
Update the `src` values in `PORTFOLIO_IMAGES` and `SOLUTIONS` with your actual image URLs or local paths.

### Change fonts
In `globals.css`, update the Google Fonts import URL and the CSS variables:
```css
font-family: 'YourFont', serif;  /* in body {} */
```
Update `tailwind.config.ts` fontFamily accordingly.

---

## 🐛 Common Issues & Fixes

### "Module not found: Can't resolve 'gsap/ScrollTrigger'"
GSAP registers plugins dynamically. All GSAP imports use dynamic `import()` inside `useEffect`. This is intentional for SSR compatibility.

### Swiper CSS not loading
Swiper CSS is imported dynamically inside the component's `useEffect`. If styles are missing, add to `globals.css`:
```css
@import 'swiper/css';
@import 'swiper/css/pagination';
```

### Cursor not showing on mobile
The CursorGlow component auto-hides on touch devices (`pointer: coarse`). This is expected.

### Images not loading (Unsplash 403)
Next.js image optimization requires the domain to be allowlisted in `next.config.ts`. The config already includes `images.unsplash.com`.

### Lenis + Next.js App Router
SmoothScrollProvider is a client component (`'use client'`) loaded with `dynamic(() => ..., { ssr: false })` to prevent hydration errors.

---

## 🚢 Production Deployment

### Vercel (Recommended — 1 click)
```bash
npm install -g vercel
vercel
# Follow prompts, auto-detects Next.js
```

### Self-hosted
```bash
npm run build
npm run start
# Runs on port 3000
```

### Environment variables (if adding backend)
Create `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=971501234567
NEXT_PUBLIC_EMAIL=hello@idealfactory.ae
```

---

## 📊 Performance Targets

| Metric | Target | How Achieved |
|--------|--------|-------------|
| LCP | < 2.5s | Priority hero image, preloaded fonts |
| FID | < 100ms | No heavy blocking JS on main thread |
| CLS | < 0.1 | Fixed dimensions on all images |
| Lighthouse | 90+ | Dynamic imports, lazy loading, SSR |

Key optimizations:
- All section components are **dynamically imported** in `page.tsx`
- Images use `next/image` with `loading="lazy"` except hero
- GSAP and Swiper loaded client-side only
- Custom cursor hidden on mobile (touch) devices

---

## 📞 Support

If you encounter issues:
1. Check Node version: `node --version` (must be 18.17+)
2. Delete `node_modules` and `.next`, then `npm install` again
3. Check browser console for specific error messages
4. Ensure all files are in the exact paths shown in the structure

---

*Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, and Swiper*
