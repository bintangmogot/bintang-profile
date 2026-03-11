<p align="center">
  <img src="https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/work/cover-readme" alt="Bintang Profile — Homepage Preview" width="720" />
</p>

<h1 align="center">✦ Bintang Aprilian — Personal Portfolio</h1>

<p align="center">
  <b>A modern, responsive developer portfolio & freelance service platform</b><br/>
  Built with Vue 3 · Vite · Tailwind CSS 4
</p>

<p align="center">
  <a href="https://vuejs.org"><img src="https://img.shields.io/badge/Vue-3.5-42b883?style=flat-square&logo=vue.js&logoColor=white" /></a>
  <a href="https://vite.dev"><img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" /></a>
  <a href="https://router.vuejs.org"><img src="https://img.shields.io/badge/Vue_Router-5-42b883?style=flat-square&logo=vue.js&logoColor=white" /></a>
  <a href="https://vercel.com"><img src="https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel&logoColor=white" /></a>
</p>

---

## 📖 About

**Bintang Profile** is a personal portfolio website for **Bintang Surya Aprilian Mogot**, a frontend-focused web developer and Computer Science graduate from Indonesia, but also in learning process to become a fullstack developer. The site serves as a centralized digital presence — showcasing skills, work experience, featured projects, and freelance service pricing — all wrapped in a sleek, dark-themed UI with premium animations and interactive elements.

### 🎯 Problem It Solves

As a freelance developer, having scattered work across different platforms (LinkedIn, GitHub, Google Drive) makes it hard for potential clients and employers to fully understand your capabilities. This portfolio **solves that by consolidating everything into one professional, high-impact website**:

- **For Clients:** Instantly see the developer's skill set, past projects with live demos, and transparent pricing — then reach out directly via WhatsApp.
- **For Employers/Recruiters:** Access a downloadable résumé, verified certifications, detailed work experience with photo documentation, and a full project archive.
- **For the Developer:** A single source of truth that's easy to maintain, SEO-friendly, and deployable to Vercel with zero configuration.

---

## ✨ Features

### 🏠 Homepage Sections

| Section | Description |
|---|---|
| **Hero Section** | Full-screen intro with name, role, tagline, and decorative SVG sketches. Responsive typography using CSS `clamp()`. |
| **Bento Grid About** | An asymmetric bento-style grid showcasing bio, profile photo, location (with availability status), GitHub link, tech stack icons, and key stats (10+ projects, 3+ years). |
| **Experience Timeline** | Two-level tabbed interface (Website Developer / Work & Education) with company tabs, bullet-point descriptions, a "View Details" modal with photo galleries, skills tags, and certification links. |
| **Blog Tabs** | Filterable blog/article grid with category tabs (All / Frontend / Web Apps / CMS). Animated card transitions with tech stack badges and hover effects. |
| **Scrollytelling Projects** | Scroll-driven project showcase using Intersection Observer API. Desktop: sticky sidebar with navigation + media preview. Mobile: horizontal card carousel. Click to open full detail modal. |
| **Pricing Plans** | Three-tier pricing cards (Starter / Professional / Enterprise) with feature comparison. Each card links to a pre-filled WhatsApp message for instant contact. |
| **Contact Footer** | Email CTA, social media links (GitHub, Instagram, WhatsApp, LinkedIn), and copyright. |

### 📂 Project Archive Page

A dedicated `/projects` route featuring a sortable, Brittany Chiang-inspired archive table:

- 5-column grid layout (Year, Project, Made At, Built With, Link)
- Click-to-open slide-in detail panel with media preview, long description, tech stack, key features, and CTA buttons
- Mobile-responsive with stacked card layout
- 9+ projects documented with live demo links


### 🎨 Design & UX Highlights

- **Dark Theme** — Deep navy (`#0F172A`) with cyan (`#0EA5E9`) accent, creating a premium developer aesthetic
- **Bento Grid Layout** — Irregular, Pinterest-style grid for the About section with responsive breakpoints
- **Scroll Animations** — Elements slide in from left/right using Intersection Observer with staggered delays
- **Interactive Tilt Card** — CSS `perspective()` + `rotateX/Y` 3D tilt effect with gloss overlay on hover
- **Page Transitions** — Vue `<transition>` with fade effects between routes
- **Smooth Scrolling** — Native CSS `scroll-behavior: smooth` + custom scroll-to behavior on navigation
- **Custom Scrollbar** — Styled WebKit scrollbar matching the dark theme
- **Radial Gradient Background** — Subtle cyan glow on the body background for depth
- **Mobile-First Responsive** — Every section adapts from mobile → tablet → desktop with distinct layouts

### ⚡ Technical Highlights

- **Vue 3 Composition API** — `<script setup>` SFC syntax throughout
- **Vue Router 5** — Client-side routing with history mode and smooth scroll behavior
- **Tailwind CSS 4** — Using the new `@tailwindcss/vite` plugin (no PostCSS config needed)
- **Intersection Observer** — Used for scroll-triggered animations in both `main.js` and individual components
- **Cloudinary CDN** — All images served via Cloudinary with automatic format (`f_auto`) and quality (`q_auto`) optimization
- **Vercel Deployment** — Pre-configured `vercel.json` with SPA rewrite rules

---

## 🗂️ Project Structure

```
bintang-profile/
├── public/                     # Static assets
├── src/
│   ├── assets/
│   │   ├── icons/              # Favicon, check icon
│   │   ├── images/             # Local images (if any)
│   │   └── videos/             # Local videos (if any)
│   ├── components/
│   │   ├── BentoAbout.vue      # Bento grid "About Me" section
│   │   ├── BlogTabs.vue        # Filterable blog grid with category tabs
│   │   ├── Experience.vue      # Tabbed work experience timeline + modal
│   │   ├── HeroSection.vue     # Full-screen hero with SVG illustrations
│   │   ├── InteractiveTiltCard.vue  # Reusable 3D tilt hover effect
│   │   ├── Pricing.vue         # Three-tier pricing cards
│   │   ├── ProjectTabs.vue     # Filterable project grid (by category)
│   │   └── Scrollytelling.vue  # Scroll-driven featured projects showcase
│   ├── pages/
│   │   ├── Home.vue            # Main homepage (assembles all sections)
│   │   └── ProjectArchive.vue  # Full project archive table + detail modal
│   ├── router/
│   │   └── index.js            # Vue Router config (/ and /projects)
│   ├── App.vue                 # Root layout with sidebars + router-view
│   ├── main.js                 # App entry point + global Intersection Observer
│   └── style.css               # Global styles, theme tokens, scrollbar
├── docs/                       # Documentation assets (screenshots)
├── index.html                  # HTML entry point
├── package.json                # Dependencies & scripts
├── vercel.json                 # Vercel SPA rewrite configuration
└── vite.config.js              # Vite + Vue + Tailwind plugin config
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/bintangmogot/bintang-profile.git

# 2. Navigate to the project directory
cd bintang-profile

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
# Generate optimized production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌐 Deployment

This project is pre-configured for **Vercel** deployment:

1. Push your code to GitHub.
2. Import the repository on [vercel.com](https://vercel.com).
3. Vercel will auto-detect Vite and deploy with zero configuration.
4. The included `vercel.json` handles SPA client-side routing rewrites automatically.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Vue.js** | 3.5 | Reactive UI framework (Composition API) |
| **Vite** | 8.x | Lightning-fast dev server & build tool |
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **Vue Router** | 5.x | Client-side SPA routing |
| **Cloudinary** | — | Image CDN with auto-optimization |
| **Vercel** | — | Hosting & deployment platform |

---

## 📸 Screenshots

<details>
<summary><b>🏠 Homepage (Full Page)</b></summary>
<br/>
<p align="center">
  <img src="https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/work/cover-home-readme" alt="Homepage" width="600" />
</p>
</details>

<details>
<summary><b>📂 Project Archive</b></summary>
<br/>
<p align="center">
  <img src="https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/work/cover-project-readme" alt="Project Archive" width="600" />
</p>
</details>

---

## 📬 Contact

| Channel | Link |
|---|---|
| **Email** | [bintangaprilian100@gmail.com](mailto:bintangaprilian100@gmail.com) |
| **LinkedIn** | [contact-bintangsurya](https://www.linkedin.com/in/contact-bintangsurya/) |
| **GitHub** | [@bintangmogot](https://github.com/bintangmogot) |
| **Instagram** | [@bintang_s.a.m](https://www.instagram.com/bintang_s.a.m/) |
| **WhatsApp** | [Chat Now](https://wa.me/62895353811311) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <sub>Built with ❤️ by <a href="https://github.com/bintangmogot">Bintang Aprilian Surya</a> — © 2026</sub>
</p>
