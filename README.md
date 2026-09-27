# Haiere — Hajir Studio

[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/haiere/haiere.github.io)
[![Stars](https://img.shields.io/github/stars/haiere/haiere.github.io?style=flat-square&logo=github)](https://github.com/haiere/haiere.github.io/stargazers)
[![Forks](https://img.shields.io/github/forks/haiere/haiere.github.io?style=flat-square&logo=github)](https://github.com/haiere/haiere.github.io/network/members)
[![Issues](https://img.shields.io/github/issues/haiere/haiere.github.io?style=flat-square&logo=github)](https://github.com/haiere/haiere.github.io/issues)
[![License](https://img.shields.io/github/license/haiere/haiere.github.io?style=flat-square)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/haiere/haiere.github.io?style=flat-square)](https://github.com/haiere/haiere.github.io/commits/main)
[![Version](https://img.shields.io/badge/version-v20260927.0-B4788C?style=flat-square)](#)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile--First-3B82F6?style=flat-square)](#responsive-design)
[![a11y](https://img.shields.io/badge/a11y-WCAG_2.1_AA-4B0082?style=flat-square)](#accessibility)
[![PWA](https://img.shields.io/badge/PWA-ready-5A0FC8?style=flat-square)](manifest.webmanifest)
[![Support](https://img.shields.io/badge/Support-Buy_Me_a_Coffee-FFDD00?style=flat-square&logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/hajirstudio)

A personal portfolio and tool hub for **Hajir Muhaajir**, known online as **Haiere**.

Haiere showcases web development projects, privacy-first digital tools, original music, AI chatbots, and a curated quote collection — all built on the open web with no backend.

**Live:** [hajir.is-a.dev](https://hajir.is-a.dev)

---

## Overview

Haiere is a client-side portfolio for a web developer, AI builder, and musician based in Indonesia. The site is a single page (`index.html`) plus a design-system reference (`styleguide.html`), styled with a glass-morphism aesthetic and driven by four small vanilla-JS modules.

The site brings together:

- **Beat Tools** — a filterable directory of 12 free web tools and apps
- **AI chatbots** — Raia AI and Kirana, both provider-based
- Original music (`signature-music.vercel.app` embedded player)
- A curated quote collection
- Contact form (Formspree-backed) and social links
- Support links (Buy Me a Coffee, Sociabuzz)
- Full dark/light theming, bilingual content (ID/EN), global search, README-powered documentation modals, and persistent local preferences

The site has **no custom backend**. Selected features rely on external services: Formspree, GitHub raw content, Google Fonts, Font Awesome, Tailwind CDN, Marked.js, and the embedded Signature Music player.

---

## Version — v20260927.0

**Release focus:**

- Stronger SEO foundation (schema.org `@graph`, `ItemList`, `SearchAction`, per-theme `theme-color`, hreflang)
- **Beat Tools** expanded to include **every** tool the author ships, including **Kirana**, **Raia AI**, **RaiaSpace**, **MyDev**, and **LoveYou**
- Kirana and Raia AI are documented as **provider-based chatbots** (`cat_ai_chatbot`)
- Music section now exposes a **README-driven "How to Use"** guidance modal sourced from `haiere/signature-music`
- **SVG-only icon policy** — every interface icon is a `<svg data-icon="icXX">`; zero emoji-as-icon
- Full **i18n coverage** — every visible string resolves through `data-i18n*`
- **Critical CSS fallback** in `index.html` renders the layout correctly on first paint, before Tailwind CDN arrives
- New self-contained `styleguide.html` (design-system reference)
- Fixed a Tailwind cold-start bug where unsized SVGs blew up to container width on slow mobile connections

---

## Features

### Beat Tools

A filterable directory of every tool the author ships.

| #  | Tool         | Category    | Description                                                |
|----|--------------|-------------|------------------------------------------------------------|
| 01 | **HajirSync**    | Music       | Generate synchronized LRC lyric files.                     |
| 02 | **Raia Vault**   | Security    | Generate strong random passwords locally.                  |
| 03 | **Raia Scrub**   | Security    | Remove sensitive metadata (GPS, EXIF) from files.          |
| 04 | **Raia Delta**   | Developer   | Compare two blocks of text and highlight differences.      |
| 05 | **Raiamify**     | AI          | Lightweight AI assistance for ideas and writing.           |
| 06 | **Raia AI**      | AI Chatbot  | Provider-based AI chatbot.                                 |
| 07 | **Kirana**       | AI Chatbot  | Provider-based AI chatbot for warm, creative conversations.|
| 08 | **RaiaSpace**    | Web         | Privacy-friendly search experience.                        |
| 09 | **Calc**         | Web         | Simple browser-based calculator.                           |
| 10 | **Chess**        | Web         | Classic chess game.                                        |
| 11 | **MyDev**        | Developer   | Compact developer utility bundle.                          |
| 12 | **LoveYou**      | Web         | Small interactive gift page.                               |

**Filters:** All, AI, Music, Security, Web, Developer. Arrow keys cycle through filter chips (`role="tablist"`), and the active state is exposed via `aria-selected`.

> **Chatbot rule.** `Raia AI` and `Kirana` both use a **provider-based architecture** — the front-end talks to a provider abstraction, so the underlying model is swappable without any UI change. Both carry the `AI Chatbot` category label.

### Global search

Header search with:

- Cross-section and per-tool indexing
- `Ctrl + K` (Win/Linux) and `⌘ + K` (macOS) shortcut; hint auto-detects platform
- Live filtering as you type
- `Escape` to close, `Enter`/click to navigate
- Rebuilt automatically when the language changes

### Documentation modal

Tool documentation loads from public GitHub repositories at runtime:

```text
[https://raw.githubusercontent.com/haiere/](https://raw.githubusercontent.com/haiere/)<repository>/<branch>/README.md
```

The modal tries `main` first, then `master`. Rendered Markdown goes through Marked.js; if that library fails to load, the raw README is shown as `<pre>` so content is never lost.

Target repositories must:

- Be public
- Contain a readable `README.md`
- Allow `raw.githubusercontent.com` fetches

The Music section uses this same mechanism to display the Signature Music README via `data-repo="signature-music"`.

### Music

Embeds the Signature Music player (`signature-music.vercel.app`) with:

- README-based **How to Use** guidance (fetched from `haiere/signature-music`)
- Fallback link if the iframe fails
- Direct link to the GitHub repository

### Contact form

Client-side form backed by Formspree with:

- Field-level validation (name, email, message)
- Live error clearing on input
- Automatic fallback endpoint if the primary fails
- Full i18n for validation and status messages

### Cookie banner & settings

- Accept / Reject / Customize on first visit
- Modal with toggles for Analytics, Marketing, and Preferences (Necessary is always on)
- Persistent preference state in `localStorage`
- Reopenable from two entry points (drawer + footer), each with a unique id
- Focus trap and focus-restore on close

### Language switcher

Indonesian and English, driven by `i18n.js`.

- Auto-detected from `navigator.language`
- Persisted in `localStorage['haiere-lang']`
- Rebuilds the search index on switch

### Theme switcher

Dark / light with system-preference detection:

```text
User-selected theme  →  localStorage['theme']
       ↓
System preference (prefers-color-scheme)
```

Applied by a tiny inline script in `<head>` — before CSS — so there is no first-paint flash.

### Accessibility

- Skip-to-content link
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`)
- ARIA labels, `aria-live` regions, `role="dialog"`, `aria-modal`
- Keyboard navigation for drawer, modals, filter chips, and search
- Visible focus rings (3px accent outline, 3px offset)
- Focus traps and focus-restore for every modal
- Escape dismissal everywhere
- Minimum 44×44px touch targets
- Full `prefers-reduced-motion` support
- Decorative visuals (aurora mesh, grain overlay, cursor halo, hairline grid) are `aria-hidden`

### Privacy-first design

- No analytics scripts
- No tracking pixels
- No cookies set by the site itself (only `localStorage` for theme, language, and consent)
- Contact submissions handled by Formspree, not stored by Haiere
- All tools run client-side where possible

---

## Requirements

A modern browser with JavaScript enabled.

- Chrome / Edge (Chromium 90+)
- Firefox 88+
- Safari 14+
- Any current Chromium- or WebKit-based browser

An internet connection is required to load:

- Google Fonts (Inter, Sora, JetBrains Mono)
- Font Awesome
- Tailwind CSS via CDN
- Marked.js
- Signature Music player iframe
- README files from GitHub

The contact form also requires reachable Formspree endpoints.

---

## Installation

Haiere is a static website.

### Hosted version

Open [hajir.is-a.dev](https://hajir.is-a.dev) in any modern browser.

### Clone

```bash
git clone [https://github.com/haiere/haiere.github.io.git](https://github.com/haiere/haiere.github.io.git)
cd haiere.github.io
```

### Run locally

Opening `index.html` directly works, but a local server is recommended for module loading and iframe embedding:

```bash
python -m http.server 8000
```

Or:

```bash
npx serve
```

Open the printed URL (usually `http://localhost:8000`).

### Deploy

Any static host works. No build step is required:

- GitHub Pages (already configured)
- Cloudflare Pages
- Netlify
- Vercel
- Any standard static web server

---

## Usage

### Header

- Brand logo → `#hero`
- Global search (visible at ≥ 860px)
- RaiaSpace link
- Theme toggle
- Hamburger → side drawer

### Side drawer

About · Music · Quotes · Tools · Contact · GitHub · RAIA · Kirana · Support (Coffee / Buzz) · Language selector · Cookie settings · Privacy / Terms · Human-made badge.

### Sections

| Section      | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| Hero         | Intro, tagline, RaiaSpace badge, CTAs, keyword ticker.                      |
| About        | Bio, portrait orbit, role tags, focus pills, project stats.                 |
| RWR          | Promotional card for a related project.                                     |
| Music        | Signature Music player, README guide button, fallback link.                 |
| Quotes       | Curated quotes with attribution.                                            |
| Beat Tools   | Filterable directory of 12 tools, docs modals, external links.              |
| Contact      | Validated form + social-media fallback links.                               |
| Support      | Buy Me a Coffee and Sociabuzz.                                              |
| Footer       | Brand, sitemap, Beat Tools links, social links, cookie settings, legal.     |

---

## Configuration

### Language

Defined in `i18n.js`. Current language persisted under `localStorage['haiere-lang']`.

Default resolution:

1. `localStorage['haiere-lang']` if present
2. `navigator.language` if it starts with `id` → Indonesian
3. Otherwise → English

### Theme

Defined in `script.js` and applied pre-paint by an inline `<head>` script. Persisted under `localStorage['theme']` (values: `'dark'` | `'light'`).

### Cookie preferences

- `localStorage['haiere-cookie-prefs']` — JSON `{ analytics, marketing, preferences }`.
- `localStorage['haiere-cookie']` — consent state (`accepted` | `declined` | `customized`).

### Adding a tool card

Tool cards require a `data-repo` (for the docs modal) and a `data-category` (for filters).

```html
<li class="tool-card reveal glass-card glass-hover group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white/70 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 dark:border-slate-800/60 dark:bg-slate-900/55 sm:p-6"
    data-category="security"
    data-repo="raia-vault">

  <div class="mb-2 flex items-center gap-3">
    <span class="tool-number font-mono text-sm font-bold text-blue-600 dark:text-blue-400">02</span>
    <div class="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
      <span class="inline-flex items-center gap-1.5">
        <svg class="h-2.5 w-2.5" data-icon="ic13" aria-hidden="true"></svg>
        <span data-i18n="cat_password">Password Manager</span>
      </span>
    </div>
    <span class="status-badge-stable" data-i18n="status_stable">Stable</span>
  </div>

  <h3 class="mb-1.5 font-display text-lg font-bold text-slate-900 dark:text-white">
    <span class="inline-flex items-center gap-2">
      <svg class="h-4 w-4 text-blue-500" data-icon="ic13" aria-hidden="true"></svg>
      Raia Vault
    </span>
  </h3>

  <p class="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
     data-i18n="tool2_desc">
    Generate strong random passwords to help protect your accounts.
  </p>

  <div class="tool-actions mt-auto">
    <a href="[https://raia-vault.haiere.workers.dev](https://raia-vault.haiere.workers.dev)"
       target="_blank" rel="noopener noreferrer"
       class="tool-open-btn group/btn">
      <span data-i18n="tool_open">Open Tool</span>
      <svg class="h-3.5 w-3.5" data-icon="ic12" aria-hidden="true"></svg>
    </a>
    <button type="button"
            class="tool-docs-btn group/btn"
            data-repo="raia-vault"
            data-tool-name="Raia Vault">
      <span data-i18n="tool_docs">How to Use</span>
      <svg class="h-3.5 w-3.5" data-icon="ic33" aria-hidden="true"></svg>
    </button>
  </div>
</li>
```

The `data-repo` slug must exactly match the GitHub repository name.

### Adding a translation

Add the key to both language objects in `i18n.js`, then reference it in HTML:

```js
window.i18n = {
  id: {
    tool_new_title: 'Alat Baru',
    tool_new_desc:  'Deskripsi singkat tentang alat baru.',
  },
  en: {
    tool_new_title: 'New Tool',
    tool_new_desc:  'A short description of the new tool.',
  },
};
```

```html
<h3 data-i18n="tool_new_title">New Tool</h3>
<p  data-i18n="tool_new_desc">A short description.</p>
```

Available attributes: `data-i18n`, `data-i18n-placeholder`, `data-i18n-label`, `data-i18n-alt`, `data-i18n-title`.

### Adding an icon

1. Add an entry to `ICONS` in `icons.js`:
   ```js
   ic40: `<path d="…"/>`,
   ```
2. Reference it anywhere in `index.html`:
   ```html
   <svg class="h-5 w-5" data-icon="ic40" aria-hidden="true"></svg>
   ```
3. `renderIcons()` (called at boot) fills in `viewBox`, `stroke`, `fill`, and a `1em` fallback width/height.

**Rule:** every interface icon must be an SVG from `icons.js`. Emoji are never used as UI icons.

---

## Project structure

```text
/
├── index.html              Main page
├── styleguide.html         Design-system reference (noindex)
├── style.css               Tokens, layout, components, motion
├── script.js               Theme, i18n driver, drawer, search,
│                           filters, docs modal, forms, cookies
├── i18n.js                 ID / EN string table (all UI text)
├── icons.js                SVG registry + renderIcons()
├── manifest.webmanifest    PWA metadata
└── README.md               This file
```

### Main files

| File               | Purpose                                                                 |
|--------------------|-------------------------------------------------------------------------|
| `index.html`       | Structure, SEO meta, schema.org `@graph`, critical CSS fallback, all markup |
| `styleguide.html`  | Self-contained design-system reference (also serves as a token cheatsheet) |
| `style.css`        | Design tokens, glass family, layout, component styles, animations       |
| `script.js`        | All behavior — theme, i18n, drawer, search, filters, README docs modal, forms, cookie system, counters, tilt |
| `i18n.js`          | Complete ID/EN dictionary — no visible string is hardcoded in HTML      |
| `icons.js`         | Lucide-style SVG registry; `renderIcons()` sets sizing failsafes        |
| `manifest.webmanifest` | Name, icons, theme color, display mode                              |

---

## Troubleshooting

### Icons render huge / layout is broken on first load

**Cause:** the Tailwind CDN hasn't generated its utilities yet and unsized SVGs fall back to their intrinsic aspect.

**Fix already shipped in v20260927.0:**

- `icons.js` sets `width="1em"` and `height="1em"` as presentation attributes, which lose to any CSS rule (e.g. `.h-5 { height: 1.25rem }`).
- `index.html` includes a critical CSS block in `<head>` that locks the header, hero, grids, and floating UI in place before Tailwind lands.

If the issue persists: hard-reload with cache disabled, or move to a pre-built Tailwind CSS file (see **Development** below).

### The contact form does not submit

Check:

- Formspree endpoints reachable (`https://formspree.io/f/mpqkqanp`, fallback `.../xgvkobyl`)
- Inputs have `name` attributes
- JS is enabled and no console errors
- Field errors are surfaced via `#name-error`, `#email-error`, `#message-error`

### The theme does not persist

- Confirm `localStorage` is enabled
- Confirm the page isn't running in a restricted private mode
- Confirm the storage key is `theme` (same as `styleguide.html`)

### The language does not switch

- `i18n.js` must load before `script.js`
- The key must exist in both `id` and `en` objects
- The element must carry the right `data-i18n*` attribute

### The documentation modal does not open

Check:

- The tool card has `data-repo`
- The GitHub repository is public
- `README.md` exists on `main` or `master`
- `raw.githubusercontent.com` is reachable
- Marked.js loaded (otherwise, raw text fallback is used)

### Search returns no results

- `#header-search-input`, `#header-search-results` exist
- No JS error prevented `buildSearchIndex()` from running
- Try a broader query — tool names and categories are indexed

### Cookie settings do not open

Required elements:

```text
acceptCookiesBtn
declineCookiesBtn
customizeCookiesBtn
reopenCookieSettingsBtn          (footer)
reopenCookieSettingsBtnDrawer    (drawer)
cookieSettingsModal
cookieSettingsOverlay
cookieSettingsSave
```

Note the two distinct reopen IDs — the drawer button carries the `-Drawer` suffix so IDs stay unique.

### The music player does not load

The iframe targets `https://signature-music.vercel.app`. If it fails, the fallback link below the player opens the same URL in a new tab.

---

## Privacy and security

### Storage

`localStorage` only. Keys used:

| Key                  | Purpose                                                  |
|----------------------|----------------------------------------------------------|
| `theme`              | `'dark'` or `'light'`                                    |
| `haiere-lang`        | `'id'` or `'en'`                                         |
| `haiere-cookie`      | `'accepted'` / `'declined'` / `'customized'`             |
| `haiere-cookie-prefs`| JSON `{ analytics, marketing, preferences }`             |

No cookies are set by the site itself. No server-side database exists for interface preferences.

### Contact submissions

Messages are processed by Formspree at the configured endpoints and are not stored by Haiere.

### External services

The site links to or embeds:

- GitHub · Instagram · SoundCloud · Reddit · X · Quora · Discord · Telegram · YouTube
- Buy Me a Coffee · Sociabuzz
- Formspree
- Google Fonts · Font Awesome · Tailwind CDN · Marked.js
- Signature Music · Raia AI · HajirSync · Raia Vault · Raia Scrub · Raia Delta · Raiamify

Each operates under its own privacy policy and terms.

---

## Development

Haiere is a static site — edit the file that matches the change:

| Change                    | File                |
|---------------------------|---------------------|
| Structure, SEO meta, schema | `index.html`       |
| Visual tokens, layout, motion | `style.css`      |
| Behavior, interactions    | `script.js`         |
| Any visible string        | `i18n.js`           |
| Icons                     | `icons.js`          |
| Design-system reference   | `styleguide.html`   |
| PWA metadata              | `manifest.webmanifest` |

### Local server

```bash
python -m http.server
```

Or:

```bash
npx serve
```

### Optional: pre-built Tailwind

To eliminate the CDN delay entirely (recommended for production):

```bash
npx tailwindcss -i ./src/input.css -o ./tailwind.css --minify
```

Then in `index.html`:

```html
<!-- remove -->
<script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>

<!-- replace with -->
<link rel="stylesheet" href="tailwind.css" />
```

Keep `style.css` as-is — it holds the design tokens and component layer. The critical-CSS block in `index.html` can be trimmed once Tailwind ships as a static file.

### Non-negotiable rules

1. **SVG icons only.** Every UI icon is a `<svg data-icon="icXX">`.
2. **Every visible string goes through i18n.** No hardcoded copy inside `data-i18n` elements.
3. **No non-tool content inside `#tools`.** The section is a directory, not a promo block.
4. **Chatbots stay provider-based.** Raia AI and Kirana both document the provider abstraction.
5. **No emoji as icons.** Emoji are allowed in copy only (e.g. toast strings).
6. **Respect `prefers-reduced-motion`.** New animation must collapse to instant.

---

## License

Website design, original content, branding, and original music are the property of Haiere unless otherwise stated.

**All rights reserved.**

For licensing or reuse inquiries, use the contact form on [hajir.is-a.dev](https://hajir.is-a.dev).

Third-party libraries, fonts, services, and icons remain subject to their respective licenses and terms.

---

## Author & support

Developed by **Hajir Muhaajir** — a web developer, AI builder, musician, and creator of privacy-first web tools.

- Site: [hajir.is-a.dev](https://hajir.is-a.dev)
- GitHub: [@haiere](https://github.com/haiere)
- X / Twitter: [@haierehere](https://x.com/haierehere)
- Instagram: [@muhaajirere](https://instagram.com/muhaajirere)
- SoundCloud: [Hajir Stein](https://soundcloud.com/hajir-stein)
- Contact: use the form on the site

**Support the work:**

- [Buy Me a Coffee](https://buymeacoffee.com/hajirstudio)
- [Sociabuzz](https://sociabuzz.com/hajirstudio)

---

**Last updated:** 2026 · v20260927.0