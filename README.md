# Mariana Bacelo — Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Portfolio-Senior%20Service%20Designer-1B352E?style=for-the-badge&labelColor=0F221C" alt="Mariana Bacelo Portfolio" />
</p>

<p align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/EN--US-ACTIVE-0052CC?style=for-the-badge&logo=googletranslate&logoColor=white" alt="EN-US active" /></a>
  <a href="#para-o-próximo-dev-pt-br"><img src="https://img.shields.io/badge/PT--BR-Resumo-2E7D32?style=for-the-badge&logo=googletranslate&logoColor=white" alt="PT-BR summary" /></a>
</p>

<p align="center">
  <b>Static portfolio site for GitHub Pages</b><br/>
  Mobile-first · Accessible · SEO-ready · Astro SSG with React islands
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Astro-5%2F7-BC52EE?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Node-%3E%3D22.12-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/GitHub_Pages-SSG-222222?style=for-the-badge&logo=githubpages&logoColor=white" alt="GitHub Pages" />
  <img src="https://img.shields.io/badge/a11y-WCAG--minded-005A9C?style=for-the-badge&logo=accessibility&logoColor=white" alt="Accessibility" />
</p>

<p align="center">
  <a href="https://maribacelo.github.io/"><img src="https://img.shields.io/badge/🌐_Live_site-maribacelo.github.io/maribacelo-BC452D?style=for-the-badge" alt="Live site" /></a>
  <a href="#quick-start"><img src="https://img.shields.io/badge/🚀_Quick_start-0B1F3A?style=for-the-badge" alt="Quick start" /></a>
  <a href="#project-layout"><img src="https://img.shields.io/badge/📁_Layout-0B1F3A?style=for-the-badge" alt="Layout" /></a>
  <a href="#architecture"><img src="https://img.shields.io/badge/🏗️_Architecture-0B1F3A?style=for-the-badge" alt="Architecture" /></a>
</p>

---

## Navigation

| Page | Description |
|---|---|
| [Product glance](#product-in-one-glance) | What this site is and who it is for |
| [Stack](#stack) | Technologies, versions, and why they were chosen |
| [Architecture](#architecture) | Astro pages vs React islands, SEO, assets |
| [Quick start](#quick-start) | Install, develop, build, preview |
| [Project layout](#project-layout) | Folders the next contributor will touch |
| [Deploy](#deploy--github-pages) | GitHub Pages + Actions workflow |
| [Implementation status](#implementation-status) | What is done vs nice-to-have next |
| [PT-BR summary](#para-o-próximo-dev-pt-br) | Resumo rápido em português |

<p align="center">
  <a href="#product-in-one-glance"><img src="https://img.shields.io/badge/📦_Product-1B352E?style=for-the-badge" alt="Product" /></a>
  <a href="#stack"><img src="https://img.shields.io/badge/🧰_Stack-1B352E?style=for-the-badge" alt="Stack" /></a>
  <a href="#architecture"><img src="https://img.shields.io/badge/🏗️_Architecture-1B352E?style=for-the-badge" alt="Architecture" /></a>
  <a href="#quick-start"><img src="https://img.shields.io/badge/🚀_Getting%20Started-1B352E?style=for-the-badge" alt="Getting Started" /></a>
  <a href="#deploy--github-pages"><img src="https://img.shields.io/badge/☁️_Deploy-1B352E?style=for-the-badge" alt="Deploy" /></a>
</p>

---

## Product in one glance

Personal portfolio for **Mariana Bacelo**, Senior Service Designer. It presents selected work, experience and contact paths as a **static site** hosted on [GitHub Pages](https://maribacelo.github.io/).

Built for the next developer to extend without fighting a one-off HTML dump:

- **SSG only** — no runtime backend; `output: 'static'`
- **Mobile-first** — base styles for ~320px+, progressive `sm` → `2xl`
- **Accessible** — semantic landmarks, skip link, keyboard nav, ARIA on interactive UI
- **SEO-ready** — reusable `SEO.astro` (canonical, robots, Open Graph, Twitter, manifest)
- **Typed content** — site data and component props in TypeScript (strict)

| Surface | Route | Notes |
|---|---|---|
| Home | `/` | Hero, work grid, experience, perspectives island |
| About | `/about/` | Story, recent experience, quote |
| Cases | `/work/<slug>/` | Five case studies + galleries / lightbox |

---

## Stack

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg" height="48" alt="Astro" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="48" alt="React" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="48" alt="TypeScript" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" height="48" alt="Tailwind CSS" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="48" alt="Node.js" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="48" alt="npm" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="48" alt="GitHub" />
</p>

| Technology | Role | Why |
|---|---|---|
| **Astro** | Pages, layouts, SSG | Ships zero JS by default; ideal for a content portfolio |
| **React 19** | Interactive islands only | Menu, tabs, lightbox, case decks — hydrated on demand |
| **TypeScript (strict)** | Props, data, handlers | Clear contracts for the next contributor |
| **Tailwind CSS v4** | Mobile-first utilities + tokens | Progressive breakpoints; design tokens in `@theme` |
| **astro:assets** | Image pipeline on the homepage | Responsive WebP variants + sizing |
| **GitHub Actions → Pages** | CI deploy | Builds `dist/` from `main` via `.github/workflows/astro.yml` |

---

## Architecture

```text
Browser
  └─ Static HTML (Astro SSG)
       ├─ Layout + SEO (no client JS)
       ├─ Tailwind / design system CSS
       └─ React islands (client:load | client:visible)
            ├─ MobileNav
            ├─ PerspectiveExplorer
            ├─ ImageLightbox
            └─ LegacyDecks (case galleries)
```

| Concern | Location | Rule of thumb |
|---|---|---|
| Static structure | `src/pages/**/*.astro`, `src/layouts/` | Prefer Astro |
| Interactivity | `src/components/react/*.tsx` | Prefer React islands + conscious directives |
| Typed content | `src/data/`, `src/types/` | No `any`; shared interfaces |
| Path safety | `src/lib/paths.ts` | Always respect `import.meta.env.BASE_URL` |
| SEO head | `src/components/SEO.astro` | Title, description, robots, canonical, OG, Twitter |
| Case media / fonts / CV | `public/assets/` | Stable public URLs |
| Hero / cover optimization | `src/assets/` + `<Image />` | Use Astro image API |

### Hydration policy

| Island | Directive | Reason |
|---|---|---|
| `MobileNav` | `client:load` | Needed for first interaction on small screens |
| `ImageLightbox` | `client:load` | Global listener for enlarge buttons |
| `PerspectiveExplorer` | `client:visible` | Below the fold on home |
| `LegacyDecks` | `client:visible` | Case pages only (`enhanceDecks`) |

---

## Implementation status

| Capability | Status |
|---|---|
| Astro static output + GitHub Pages config | Done |
| Tailwind v4 tokens + mobile-first layout utilities | Done |
| Reusable SEO / Open Graph / Twitter / manifest | Done |
| Home rebuilt with typed data + `astro:assets` | Done |
| About + 5 case routes migrated | Done |
| React islands (nav, perspectives, lightbox, decks) | Done |
| Touch targets ≥ 44×44 on key controls | Done |
| `noindex,nofollow` preserved until public launch | Done |
| Full case narratives as typed content collections | Next |
| Lighthouse / axe CI gate | Later |
| i18n (EN / PT) | Later |

---

## Quick start

**Requirements:** Node.js `>= 22.12`, npm.

```bash
npm install
npm run dev
```

| Script | Purpose |
|---|---|
| `npm run dev` | Local Astro dev server |
| `npm run build` | Generate production site into `dist/` |
| `npm run preview` | Serve the SSG output locally |
| `npm run astro` | Astro CLI helpers |

```bash
npm run build
npm run preview
```

Open the printed local URL and check home, about, one case gallery, mobile menu and image enlarge.

---

## Project layout

```text
.
├── .github/workflows/astro.yml   # Pages build + deploy
├── public/
│   ├── assets/                   # Case images, fonts, CV
│   ├── favicon.svg
│   ├── site.webmanifest
│   └── .nojekyll
├── src/
│   ├── assets/                   # Images for astro:assets
│   ├── components/
│   │   ├── SEO.astro
│   │   └── react/                # Islands only
│   ├── data/site.ts              # Typed site content
│   ├── layouts/BaseLayout.astro
│   ├── lib/paths.ts              # withBase / assetPath
│   ├── pages/                    # File-based routes
│   ├── styles/                   # Tailwind + design system
│   └── types/site.ts
├── _legacy/                      # Previous HTML/CSS/JS snapshot
├── astro.config.mjs
├── package.json
└── tsconfig.json                 # extends astro/tsconfigs/strict
```

---

## Deploy / GitHub Pages

Configured in [`astro.config.mjs`](./astro.config.mjs):

| Option | Value | Notes |
|---|---|---|
| `site` | `https://maribacelo.github.io` | GitHub Pages host |
| `base` | `/` | User site URL prefix |
| `output` | `static` | Pure SSG |
| `trailingSlash` | `always` | Stable directory URLs |

CI: [`.github/workflows/astro.yml`](./.github/workflows/astro.yml) builds on `main` (Node **22+**) and publishes the `dist/` artifact.

### Required Pages setting (owner)

The Astro workflow only deploys when Pages source is **GitHub Actions**.

1. Open **Settings → Pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions** (not “Deploy from a branch”)
3. Keep the workflow `Deploy Astro site to Pages`

If Source stays on **Deploy from a branch**, GitHub runs the legacy **Jekyll** builder on the repo root and fails on `.astro` front matter (`Invalid YAML front matter in …/SEO.astro`).

> **Content note:** Selected project material is confidential. `robots` currently defaults to `noindex,nofollow` until a public release is approved. A client-side gate is not access control — decide visibility before opening the repo or cases.

---

## Design tokens (quick reference)

| Token | Value | Usage |
|---|---|---|
| Paper | `#f6f4ed` | Page background |
| Ink | `#1b352e` | Primary text / footer |
| Accent | `#bc452d` | Emphasis / links hover |
| Green | `#dfe7d3` | Soft surfaces |
| Fonts | Manrope + Instrument | Sans UI + serif display |

Breakpoints follow Tailwind defaults: `sm 640` · `md 768` · `lg 1024` · `xl 1280` · `2xl 1536`.

---

## Para o próximo dev (PT-BR)

<p align="center">
  <img src="https://img.shields.io/badge/PT--BR-Resumo_operacional-2E7D32?style=for-the-badge&logo=googletranslate&logoColor=white" alt="PT-BR" />
</p>

- Stack: **Astro (SSG) + React islands + Tailwind v4 + TypeScript strict**, deploy no **GitHub Pages**.
- Comece por `npm install && npm run dev`. Valide com `npm run build && npm run preview`.
- Página estática → `.astro`. Interação → `src/components/react` com `client:*` consciente.
- SEO centralizado em `src/components/SEO.astro`. Paths com `src/lib/paths.ts`.
- Cases ainda carregam markup migrado + `LegacyDecks`; evolução natural é Content Collections tipadas.
- Snapshot do pacote HTML antigo fica em `_legacy/` só como referência — não edite isso para features novas.

---

## License & contact

Portfolio content © Mariana Bacelo. Source structure is provided for deployment and maintenance of this site.

- Site: [maribacelo.github.io/maribacelo](https://maribacelo.github.io/)
- Email: [marianabacelo00@gmail.com](mailto:marianabacelo00@gmail.com)
- LinkedIn: [mariana-bacelo](https://www.linkedin.com/in/mariana-bacelo/)

<p align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/EN--US-ACTIVE-0052CC?style=for-the-badge&logo=googletranslate&logoColor=white" alt="EN-US active" /></a>
  <a href="#para-o-próximo-dev-pt-br"><img src="https://img.shields.io/badge/PT--BR-Resumo-2E7D32?style=for-the-badge&logo=googletranslate&logoColor=white" alt="PT-BR summary" /></a>
</p>

## Restricted case material

Customer Service Strategy and Logistics Business Alignment are request-access teasers. Their full case pages, presentation media and cover images are omitted from the current public source and build. The protected service is separate and has not been activated here. Earlier public commits may still contain those materials; this change does not rewrite repository history.
