# Haiere — Hajir Studio

<p align="center">
  <a href="https://github.com/haiere/haiere.github.io">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub Repository" />
  </a>
  <img src="https://img.shields.io/github/stars/haiere/haiere.github.io?style=flat-square&logo=github" alt="GitHub Stars" />
  <img src="https://img.shields.io/github/forks/haiere/haiere.github.io?style=flat-square&logo=github" alt="GitHub Forks" />
  <img src="https://img.shields.io/github/issues/haiere/haiere.github.io?style=flat-square&logo=github" alt="GitHub Issues" />
  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/haiere/haiere.github.io?style=flat-square" alt="License" />
  </a>
  <img src="https://img.shields.io/github/last-commit/haiere/haiere.github.io?style=flat-square" alt="Last Commit" />
  <img src="https://img.shields.io/badge/version-v20260927.2-B4788C?style=flat-square" alt="Version v20260927.2" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Responsive-Mobile--First-3B82F6?style=flat-square" alt="Responsive Mobile First" />
  <img src="https://img.shields.io/badge/a11y-WCAG_2.1_AA-4B0082?style=flat-square" alt="Accessibility" />
  <img src="https://img.shields.io/badge/PWA-ready-5A0FC8?style=flat-square" alt="PWA ready" />
  <a href="https://buymeacoffee.com/hajirstudio">
    <img src="https://img.shields.io/badge/Support-Buy_Me_a_Coffee-FFDD00?style=flat-square&logo=buymeacoffee&logoColor=black" alt="Support Buy Me a Coffee" />
  </a>
</p>

A personal portfolio and tool hub for **Hajir Muhaajir**.

Haiere showcases web projects, privacy-first tools, original music, AI chatbots, and curated content — all built for the open web with no custom backend.

**Live:** [hajir.is-a.dev](https://hajir.is-a.dev)

---

## Overview

Haiere is a client-side portfolio built with plain HTML, CSS, and JavaScript. The site combines a personal profile, documentation-driven tool pages, music, quotes, contact, and support links in one static experience.

It also includes:

- **Beat Tools** — a filterable directory of 12 tools.
- **AI chatbots** — Raia AI and Kirana, both provider-based.
- **Aurora space theme** — an optional day/night visual layer with stars, meteors, spotlight, and canvas FX.
- **Bilingual UI** — Indonesian and English.
- **Global search** and README-powered docs modals.
- **Persistent preferences** for theme, language, and cookies.

The site has **no custom backend**. Some features rely on external services such as Formspree, GitHub raw content, Google Fonts, Tailwind CDN, Marked.js, and the embedded Signature Music player.

---

## Features

### Beat Tools

| # | Tool | Category | Description |
|---|---|---|---|
| 01 | HajirSync | Music | Generate synchronized LRC lyric files. |
| 02 | Raia Vault | Security | Generate strong random passwords locally. |
| 03 | Raia Scrub | Security | Remove sensitive metadata from files. |
| 04 | Raia Delta | Developer | Compare two blocks of text and highlight differences. |
| 05 | Raiamify | AI | Lightweight AI assistance for ideas and writing. |
| 06 | Raia AI | AI Chatbot | Provider-based AI chatbot. |
| 07 | Kirana | AI Chatbot | Provider-based AI chatbot for warm, creative conversations. |
| 08 | RaiaSpace | Web | Privacy-friendly search experience. |
| 09 | Calc | Web | Simple browser-based calculator. |
| 10 | Chess | Web | Classic chess game. |
| 11 | MyDev | Developer | Compact developer utility bundle. |
| 12 | LoveYou | Web | Small interactive gift page. |

### Highlights

- Filter bar uses `role="toolbar"` and `aria-pressed`.
- Search supports keyboard navigation.
- Aurora theme is optional and non-blocking.
- Full i18n coverage for visible strings.
- SVG-only icon policy.
- Critical CSS fallback for first paint.
- Reduced-motion support.
- Local storage for theme, language, and cookie preferences.

---

## Requirements

A modern browser with JavaScript enabled.

Required external services:

- Google Fonts.
- Tailwind CSS CDN.
- Marked.js.
- Signature Music player iframe.
- GitHub raw content for documentation modals.
- Formspree for the contact form.

---

## Installation

Haiere is a static site. No build step is required.

### Run locally

```bash
python -m http.server
```

Or:

```bash
npx serve
```

Then open the printed local URL in your browser.

### Deploy

Any static host works:

- GitHub Pages.
- Cloudflare Pages.
- Netlify.
- Vercel.
- Standard static web servers.

---

## Usage

### Header

- Brand logo → `#hero`.
- Global search.
- RaiaSpace link.
- Theme toggle.
- Hamburger menu.

### Side drawer

About · Music · Quotes · Tools · Contact · GitHub · RAIA · Kirana · Support · Language selector · Cookie settings · Privacy · Terms.

### Sections

| Section | Description |
|---|---|
| Hero | Intro, tagline, badges, and CTAs. |
| About | Bio, role tags, focus pills, and stats. |
| Music | Signature Music player and usage guide. |
| Quotes | Curated quotes with attribution. |
| Beat Tools | Filterable directory of 12 tools. |
| Contact | Validated form and social links. |
| Support | Buy Me a Coffee and Sociabuzz. |
| Footer | Brand, sitemap, social links, and legal. |

---

## Configuration

### Language

Persisted under `localStorage['haiere-lang']`.

Order of resolution:

1. `localStorage['haiere-lang']`.
2. `?lang=id` or `?lang=en`.
3. `navigator.language` starting with `id`.
4. English.

### Theme

Persisted under `localStorage['theme']` with values `dark` or `light`.

The Aurora layer reads the same theme state and follows the existing `.dark` class.

### Cookie preferences

- `localStorage['haiere-cookie']` — `accepted`, `declined`, or `customized`.
- `localStorage['haiere-cookie-prefs']` — JSON object with `analytics`, `marketing`, and `preferences`.

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

### Main files

| File | Purpose |
|---|---|
| `index.html` | Structure, SEO meta, schema, and markup. |
| `styleguide.html` | Design-system reference. |
| `style.css` | Tokens, layout, components, and motion. |
| `aurora.css` | Aurora theme styles. |
| `script.js` | Theme, i18n, drawer, search, filters, docs modal, forms, and cookies. |
| `i18n.js` | Indonesian and English strings. |
| `icons.js` | SVG icon registry. |
| `aurora.js` | Aurora behavior and canvas FX. |
| `manifest.webmanifest` | PWA metadata. |

---

## Troubleshooting

### Icons look broken on first load

Tailwind utilities may not have loaded yet. The critical CSS fallback in `index.html` keeps the layout stable, and `icons.js` sets safe sizing defaults.

### Aurora theme does not appear

Check that both `aurora.css` and `aurora.js` are loaded, and that the page includes the required Aurora elements. If the script fails, the site falls back to the normal theme.

### Contact form does not submit

Check the Formspree endpoints:

- Primary: `https://formspree.io/f/mpqkqanp`
- Fallback: `https://formspree.io/f/xgvkobyl`

Also confirm that JavaScript is enabled and the form fields have the correct names.

### Theme or language does not persist

Confirm that localStorage is enabled and the browser is not clearing site data. Theme uses `theme`, while language uses `haiere-lang`.

### Search returns no results

Try a broader query, then check whether the search index rebuilt correctly after a language change.

---

## Privacy and Security

Haiere does not use analytics scripts, tracking pixels, or its own backend database.

- Preferences stay in localStorage.
- Contact messages go through Formspree.
- Tool docs are fetched from public GitHub repositories.
- Music, fonts, and third-party embeds follow their own privacy policies.

Local storage is not an encrypted vault, so do not store secrets there.

---

## Development

Edit the file that matches the change:

| Change | File |
|---|---|
| Structure, SEO, schema | `index.html` |
| Visual tokens and layout | `style.css` |
| Aurora theme | `aurora.css` + `aurora.js` |
| Behavior and interactions | `script.js` |
| Visible text | `i18n.js` |
| Icons | `icons.js` |
| Design reference | `styleguide.html` |

Optional: you can replace the Tailwind CDN with a prebuilt local stylesheet if you want faster production loading.

---

## Non-negotiable rules

1. SVG icons only.
2. Every visible string must go through i18n.
3. No non-tool content inside `#tools`.
4. Raia AI and Kirana stay provider-based.
5. No emoji as UI icons.
6. Respect `prefers-reduced-motion`.
7. Aurora must remain optional.
8. Filter bars use `role="toolbar"` + `aria-pressed`.
9. On-accent text must flip correctly per theme.

---

## License

Website design, original content, branding, and original music are the property of Haiere unless otherwise stated.

Third-party libraries, fonts, services, and icons remain subject to their own licenses and terms.

---

## Author & Support

Developed by Hajir Muhaajir.

- Site: [hajir.is-a.dev](https://hajir.is-a.dev)
- GitHub: [@haiere](https://github.com/haiere)
- Contact: use the form on the site

Support the work:

- Buy Me a Coffee.
- Sociabuzz.

---

## Last Updated

2026 · v20260927.2