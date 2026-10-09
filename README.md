<div align="center">

<img src="https://i.postimg.cc/GmWt2wch/H-blue.webp" alt="Haiere Logo" width="120" />

# Hajir Muhaajir — Hajir Studio

**A personal portfolio and tool hub by Hajir Muhaajir**

Free, privacy-first web tools · provider-based AI chatbots · original music · mini games · open source.

<br />

[![Live Site](https://img.shields.io/badge/Live-hajir.is--a.dev-B4788C?style=for-the-badge&logo=cloudflare&logoColor=white)](https://hajir.is-a.dev)
[![Style Guide](https://img.shields.io/badge/Style_Guide-Read-7FD8CB?style=for-the-badge&logo=storybook&logoColor=white)](https://hajir.is-a.dev/styleguide.html)
[![GitHub](https://img.shields.io/badge/GitHub-haiere-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/haiere)

<br />

[![Version](https://img.shields.io/badge/version-v2026.10.08.4-B4788C?style=flat-square)](https://github.com/haiere/haiere.github.io/releases)
[![Last Commit](https://img.shields.io/github/last-commit/haiere/haiere.github.io?style=flat-square&color=7FD8CB)](https://github.com/haiere/haiere.github.io/commits)
[![License](https://img.shields.io/github/license/haiere/haiere.github.io?style=flat-square&color=B4788C)](LICENSE)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![No Build Step](https://img.shields.io/badge/build-none-4B0082?style=flat-square)

[![Responsive](https://img.shields.io/badge/responsive-mobile_first-3B82F6?style=flat-square)](#performance-tiers)
[![Performance](https://img.shields.io/badge/performance-eco_%7C_normal_%7C_premium-7FD8CB?style=flat-square)](#performance-tiers)
[![Accessibility](https://img.shields.io/badge/a11y-WCAG_2.1_AA-4B0082?style=flat-square)](#accessibility)
[![PWA](https://img.shields.io/badge/PWA-ready-5A0FC8?style=flat-square)](#configuration)

[![Stars](https://img.shields.io/github/stars/haiere/haiere.github.io?style=flat-square&logo=github)](https://github.com/haiere/haiere.github.io/stargazers)
[![Forks](https://img.shields.io/github/forks/haiere/haiere.github.io?style=flat-square&logo=github)](https://github.com/haiere/haiere.github.io/network/members)
[![Issues](https://img.shields.io/github/issues/haiere/haiere.github.io?style=flat-square&logo=github)](https://github.com/haiere/haiere.github.io/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-10b981?style=flat-square)](#development)

[![Buy Me a Coffee](https://img.shields.io/badge/Buy_Me_a_Coffee-Support_this_work-FFDD00?style=flat-square&logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/hajirstudio)
[![Sociabuzz](https://img.shields.io/badge/Sociabuzz-Support_this_work-2563EB?style=flat-square)](https://sociabuzz.com/HajirStudio)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
  - [Beat Tools](#beat-tools)
  - [Mini Games](#mini-games)
  - [Performance Tiers](#performance-tiers)
  - [Highlights](#highlights)
- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [Privacy and Security](#privacy-and-security)
- [Non-Negotiable Rules](#non-negotiable-rules)
- [License](#license)
- [Author and Support](#author-and-support)

---

## Overview

**Hajir Muhaajir** is a client-side portfolio and tool hub built with plain **HTML**, **CSS**, and **JavaScript**.

It combines a personal profile, browser-based tools, AI chatbots, mini games, original music, documentation, and support links into one static web experience.

### Included

- **Beat Tools** — a directory of nine free browser tools.
- **Mini Games** — four lightweight browser games.
- **AI Chatbots** — Raia AI and Kirana with provider-based model support.
- **Aurora Theme** — optional day/night visual layer.
- **Performance Tiers** — `eco`, `normal`, and `premium`.
- **Bilingual UI** — Indonesian and English.
- **Global Search** — opened with `Ctrl + K` or `⌘ + K`.
- **README-Powered Documentation** — tool documentation loaded into modals.
- **Persistent Preferences** — theme, language, and cookie preferences.

### What It Does Not Use

- Custom backend.
- Analytics scripts or tracking pixels.
- Build tools.
- npm dependencies.
- Framework lock-in.
- Emoji icons.
- Icon fonts.

### External Services

The project currently uses the following optional services:

| Service | Purpose |
|---|---|
| Google Fonts | Inter, JetBrains Mono, and Sora |
| Tailwind CDN | Utility classes |
| Marked.js | Rendering README documentation |
| GitHub Raw | Fetching tool documentation |
| Formspree | Contact form submission |
| Signature Music | Embedded music player |

---

## Features

### Beat Tools

A filterable directory of nine free, privacy-first tools. Processing is performed in the browser unless a tool explicitly requires an external provider.

| # | Tool | Category | Description |
|:---:|---|---|---|
| `01` | **HajirSync** | Music | Generate synchronized LRC lyric files. |
| `02` | **Raia Vault** | Security | Generate strong random passwords locally. |
| `03` | **Raia Scrub** | Security | Remove sensitive metadata from files. |
| `04` | **Raia Delta** | Developer | Compare two text blocks and highlight differences. |
| `05` | **Raiamify** | AI | Get lightweight assistance for ideas and writing. |
| `06` | **Raia AI** | AI Chatbot | Use a provider-based AI chatbot with your own model and key. |
| `07` | **Kirana** | AI Chatbot | Have warm, creative conversations through a provider-based chatbot. |
| `08` | **RaiaSpace** | Web | Use a privacy-friendly search experience. |
| `09` | **Calc** | Web | Perform simple calculations in the browser. |

> [!NOTE]
> **Raia AI** and **Kirana** are provider-based. You provide the model and API key, while the interface remains the same when switching providers.

### Mini Games

Lightweight games playable directly in the browser. No installation or login is required.

| # | Game | URL | Type | Status |
|:---:|---|---|---|---|
| `01` | **Chess** | [`/chess`](https://hajir.is-a.dev/chess) | Classic board | ![Stable](https://img.shields.io/badge/-stable-10b981?style=flat-square) |
| `02` | **LoveYou** | [`/loveyou`](https://hajir.is-a.dev/loveyou) | Interactive | ![Stable](https://img.shields.io/badge/-stable-10b981?style=flat-square) |
| `03` | **Orbit Weaver** | [`/game/orbit-weaver.html`](https://hajir.is-a.dev/game/orbit-weaver.html) | Arcade | ![Stable](https://img.shields.io/badge/-stable-10b981?style=flat-square) |
| `04` | **Starfall** | [`/game/starfall.html`](https://hajir.is-a.dev/game/starfall.html) | Arcade | ![Stable](https://img.shields.io/badge/-stable-10b981?style=flat-square) |

### Performance Tiers

Since `v2026.10.08.3`, visual effects are controlled through a single `data-perf` attribute on the `<html>` element.

The attribute is selected during the initial page load, before the main stylesheet is applied. This avoids unnecessary visual restyling and reduces layout shifts.

| Feature | `eco` | `normal` | `premium` |
|---|:---:|:---:|:---:|
| Aurora blur | Disabled | 20px static | 30px with drift |
| Stars | Disabled | 72 twinkling stars | 162 twinkling stars |
| Meteors | Disabled | Rare | Frequent |
| Cursor spotlight | Disabled | Disabled | Enabled |
| Canvas click ripple | Disabled | Disabled | Enabled |
| Tilt and magnetic buttons | Disabled | Disabled | Enabled |
| Mesh blobs and grain | Hidden | Reduced | Full |
| `backdrop-filter` | Disabled | Enabled | Enabled |
| Star parallax | Removed | Removed | Removed |

#### Tier Selection

The performance tier is calculated inline in `<head>`:

```js
let tier = 'premium';

if (
  reduceMotion ||
  saveData ||
  (mem && mem <= 2) ||
  (cores && cores <= 2)
) {
  tier = 'eco';
} else if (
  coarsePointer ||
  (mem && mem <= 4) ||
  (cores && cores <= 4)
) {
  tier = 'normal';
}

document.documentElement.setAttribute('data-perf', tier);
```

Selection signals:

| Signal | Result |
|---|---|
| `prefers-reduced-motion: reduce` | `eco` |
| `navigator.connection.saveData === true` | `eco` |
| `deviceMemory <= 2` GB | `eco` |
| `hardwareConcurrency <= 2` | `eco` |
| Coarse pointer | `normal` |
| `deviceMemory <= 4` GB | `normal` |
| `hardwareConcurrency <= 4` | `normal` |
| No limiting signal detected | `premium` |

#### Runtime Debugging

Check the active tier in the browser console:

```js
window.__auroraTier;
// "eco" | "normal" | "premium"

document.documentElement.getAttribute('data-perf');
```

> [!WARNING]
> Star parallax was removed in `v2026.10.08.3` because it caused unnecessary scroll work. Stars are now static and only twinkle. Scroll position is handled by one `requestAnimationFrame`-throttled handler for the progress bar and back-to-top button.

### Highlights

#### Engineering

- Zero runtime dependencies.
- No bundler, framework, or build step.
- Critical CSS fallback for the first paint.
- `contain: layout style` on cards to limit reflow propagation.
- Premium-only interactions gated in `script.js`.
- Reduced-motion support across all performance tiers.

#### User Experience

- Full Indonesian and English translations.
- SVG-only icons.
- Persistent theme, language, and cookie preferences.
- Global keyboard-accessible search.
- Installable PWA with manifest shortcuts.
- Optional Aurora visual layer.

#### Accessibility

- Filter controls use `role="toolbar"` and `aria-pressed`.
- Search supports `ArrowUp`, `ArrowDown`, `Escape`, and `Enter`.
- The site remains usable if `aurora.js` fails to load.
- Aurora effects are optional and do not block the main interface.

---

## Requirements

- A modern web browser.
- JavaScript enabled.
- A local static server for development.

No package manager or dependency installation is required.

---

## Quick Start

This project has no build step.

### Option 1: Python

```bash
python -m http.server 8000
```

### Option 2: Node.js

```bash
npx serve
```

### Option 3: PHP

```bash
php -S localhost:8000
```

Open the local URL displayed in your terminal.

### Deployment

Any static hosting provider should work, including:

- GitHub Pages.
- Cloudflare Pages.
- Netlify.
- Vercel.
- A standard web server.

---

## Usage

### Header

| Element | Action |
|---|---|
| Brand logo | Scrolls to `#hero` |
| Search field | Opens global search |
| `Ctrl + K` or `⌘ + K` | Focuses global search |
| RaiaSpace | Opens the search tool |
| Theme toggle | Switches between day and night themes |
| Hamburger button | Opens the side drawer |

### Side Drawer

The side drawer provides links to:

- About.
- Music.
- Quotes.
- Tools.
- Games.
- Contact.
- GitHub.
- Raia AI.
- Kirana.
- Support.
- Language.
- Cookies.
- Privacy.
- Terms.

### Page Sections

| Section | Description |
|---|---|
| Hero | Introduction, tagline, RaiaSpace badge, and primary actions |
| About | Biography, roles, interests, and statistics |
| RWR | Rotating card linking to LoveYou |
| Music | Signature Music player and usage guide |
| Quotes | Curated quotes with attribution |
| Beat Tools | Filterable directory of browser tools |
| Mini Games | Chess, LoveYou, Orbit Weaver, and Starfall |
| Contact | Validated contact form and social links |
| Support | Buy Me a Coffee and Sociabuzz links |
| Footer | Brand, sitemap, social links, and legal information |

---

## Configuration

### Language

The selected language is stored in:

```js
localStorage['haiere-lang']
```

Resolution order:

1. `?lang=id` or `?lang=en` in the URL.
2. `localStorage['haiere-lang']`.
3. Browser language beginning with `id`.
4. English.

### Theme

The theme is stored in:

```js
localStorage['theme']
```

Supported values:

```text
dark
light
```

The Aurora layer reads the `.dark` class and mirrors the current state through:

```html
<html data-theme="night">
<html data-theme="day">
```

### Performance Tier

The performance tier is not persisted. It is recalculated on every page load.

Force a tier temporarily for debugging:

```js
document.documentElement.setAttribute('data-perf', 'eco');
// or: normal
// or: premium
```

Reload the page to test the result. The active tier is also available through:

```js
window.__auroraTier
```

### Cookie Preferences

Cookie state is stored using:

```js
localStorage['haiere-cookie']
localStorage['haiere-cookie-prefs']
```

Example values:

```text
haiere-cookie:
accepted | declined | customized
```

```json
{
  "analytics": false,
  "marketing": false,
  "preferences": true
}
```

---

## Project Structure

```text
/
├── index.html
├── styleguide.html
├── style.css
├── aurora.css
├── script.js
├── i18n.js
├── icons.js
├── aurora.js
├── manifest.webmanifest
└── README.md
```

### Main Files

| File | Purpose |
|---|---|
| `index.html` | Main page, SEO metadata, JSON-LD, markup, and inline boot scripts |
| `styleguide.html` | Design-system reference for tokens, typography, components, and tiers |
| `style.css` | Design tokens, layout, components, motion, and performance-tier rules |
| `aurora.css` | Aurora theme styles scoped to `html[data-theme]` |
| `script.js` | Theme, i18n, drawer, search, filters, documentation modal, forms, and cookies |
| `i18n.js` | Indonesian and English translation dictionaries |
| `icons.js` | SVG icon registry |
| `aurora.js` | Aurora behavior and canvas effects |
| `manifest.webmanifest` | PWA metadata, shortcuts, icons, and launch behavior |
| `game/*.html` | Individual browser games |

---

## Development

### Where to Make Changes

| Change | File |
|---|---|
| Structure, SEO, or JSON-LD | `index.html` |
| Design tokens, layout, or components | `style.css` |
| Aurora styling | `aurora.css` |
| Aurora behavior and canvas effects | `aurora.js` |
| UI behavior and interactions | `script.js` |
| Visible text | `i18n.js` |
| Icons | `icons.js` |
| Design-system documentation | `styleguide.html` |
| PWA metadata | `manifest.webmanifest` |

### Performance Rules

These rules are mandatory when adding features:

- Do not add new scroll listeners.
- Reuse the shared `requestAnimationFrame` throttle.
- Do not add `will-change` to long-lived elements without a clear reason.
- Treat blur and `backdrop-filter` as expensive paint operations.
- Define behavior for all three performance tiers in `style.css`.
- Keep `contain: layout style` on cards.
- Gate mouse tracking and magnetic buttons behind `perfTier === 'premium'`.
- Respect `prefers-reduced-motion`.

### Optional Optimization

For production, Tailwind CDN could be replaced with a local prebuilt stylesheet.

Any replacement must preserve the utility classes currently used in the markup. The critical CSS fallback in `index.html` is designed to keep the first paint stable, but it does not replace every Tailwind utility.

---

## Troubleshooting

### Icons Look Broken on First Load

Check that:

1. `icons.js` is loaded.
2. The required icon registry exists.
3. Tailwind or the fallback CSS has loaded.

The fallback CSS and presentation attributes prevent icons from expanding uncontrollably while styles are loading.

### Aurora Theme Does Not Appear

Check that:

1. `aurora.css` is loaded.
2. `aurora.js` is loaded.
3. `#aurora-bg`, `.spotlight`, and `#fx` exist.
4. The active performance tier is not `eco`.

```js
document.documentElement.getAttribute('data-perf');
```

### The Site Feels Slow on Mobile

Check the active tier:

```js
window.__auroraTier;

document.documentElement.getAttribute('data-perf');
```

If a low-end device is incorrectly using `premium`, verify that the inline performance script in `index.html` is present and runs before the stylesheets.

### Contact Form Does Not Submit

Verify the Formspree endpoints:

| Purpose | Endpoint |
|---|---|
| Primary | `https://formspree.io/f/mpqkqanp` |
| Fallback | `https://formspree.io/f/xgvkobyl` |

Also verify that:

- JavaScript is enabled.
- Form fields have valid `name` attributes.
- The form action points to the correct endpoint.

### Theme or Language Does Not Persist

Check that:

- `localStorage` is enabled.
- The browser is not clearing site data.
- The relevant keys exist.

| Preference | Key |
|---|---|
| Theme | `theme` |
| Language | `haiere-lang` |

### Search Returns No Results

Try a broader search query.

If the language was recently changed, confirm that the search index was rebuilt after `applyLang()` ran.

---

## Privacy and Security

Haiere does not use analytics scripts, tracking pixels, or its own backend database.

- Preferences are stored in `localStorage`.
- Contact messages are submitted through Formspree.
- Tool documentation is fetched from public GitHub repositories.
- Music, fonts, and third-party embeds follow their own privacy policies.
- Provider-based AI tools send requests to the provider selected by the user.

> [!WARNING]
> `localStorage` is not an encrypted vault. Never store passwords, API keys, tokens, or other secrets there.

---

## Non-Negotiable Rules

1. Use SVG icons only. Never use emoji or icon fonts.
2. Send every visible string through the i18n system.
3. Keep non-tool content outside `#tools`.
4. Keep Raia AI and Kirana provider-based.
5. Respect `prefers-reduced-motion`.
6. Allow reduced motion to force the `eco` tier.
7. Keep Aurora optional and non-blocking.
8. Use `role="toolbar"` and `aria-pressed` for filter bars.
9. Ensure accent text uses the correct `--on-accent` token in every theme.
10. Define every decorative layer for `eco`, `normal`, and `premium`.
11. Do not add scroll listeners without using the shared `requestAnimationFrame` throttle.
12. Keep privacy-sensitive processing local whenever possible.

---

## License

The website design, original content, branding, and original music are the property of **Haiere**, unless stated otherwise.

Third-party libraries, fonts, services, and icons remain subject to their respective licenses and terms.

See [`LICENSE`](LICENSE) for additional information.

---

## Author and Support

Developed by **Hajir Muhaajir**.

[![Website](https://img.shields.io/badge/Website-hajir.is--a.dev-B4788C?style=flat-square&logo=cloudflare&logoColor=white)](https://hajir.is-a.dev)
[![GitHub](https://img.shields.io/badge/GitHub-@haiere-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/haiere)
[![X](https://img.shields.io/badge/X-@haierehere-000000?style=flat-square&logo=x&logoColor=white)](https://x.com/haierehere)
[![Instagram](https://img.shields.io/badge/Instagram-muhaajirere-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://instagram.com/muhaajirere)
[![YouTube](https://img.shields.io/badge/YouTube-@hajirstein-FF0000?style=flat-square&logo=youtube&logoColor=white)](https://youtube.com/@hajirstein)

### Support This Work

[![Buy Me a Coffee](https://img.shields.io/badge/Buy_Me_a_Coffee-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/hajirstudio)
[![Sociabuzz](https://img.shields.io/badge/Sociabuzz-2563EB?style=for-the-badge)](https://sociabuzz.com/HajirStudio)

---

<div align="center">

<sub>
© 2026 <b>Haiere</b> · <b>v2026.10.08.4</b> — Performance pass<br />
Made with simplicity and care.
</sub>

</div>