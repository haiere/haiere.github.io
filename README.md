<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:B4788C,50:7FD8CB,100:0A192F&height=200&section=header&text=Hajir%20Studio&fontSize=64&fontColor=FFFFFF&animation=fadeIn&fontAlignY=38&desc=Free%20web%20tools%20%C2%B7%20AI%20chatbots%20%C2%B7%20mini%20games%20%C2%B7%20original%20music&descAlignY=62&descSize=16" alt="Hajir Studio" />

<br />

<a href="https://hajir.is-a.dev">
  <img src="https://i.postimg.cc/GmWt2wch/H-blue.webp" alt="Haiere logo" height="110" />
</a>

<br /><br />

<img src="https://readme-typing-svg.demolab.com?font=Sora&weight=600&size=20&pause=1100&color=7FD8CB&center=true&vCenter=true&width=720&lines=Free+browser+tools+for+the+open+web;AI+chatbots+you+can+bring+your+own+model+to;Mini+games+that+run+with+no+install;Plain+HTML%2C+CSS+and+JavaScript.+No+build+step." alt="Animated tagline" />

<br /><br />

<p>
  <a href="https://hajir.is-a.dev"><img src="https://img.shields.io/badge/Live-hajir.is--a.dev-B4788C?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Live site" /></a>
  <a href="https://hajir.is-a.dev/styleguide.html"><img src="https://img.shields.io/badge/Style_Guide-Read-7FD8CB?style=for-the-badge&logo=storybook&logoColor=black" alt="Style guide" /></a>
  <a href="https://github.com/haiere"><img src="https://img.shields.io/badge/GitHub-haiere-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-ES2020-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/No_build_step-4B0082?style=flat-square" alt="No build step" />
  <img src="https://img.shields.io/badge/PWA-installable-5A0FC8?style=flat-square" alt="PWA" />
  <img src="https://img.shields.io/badge/a11y-WCAG_2.x-4B0082?style=flat-square" alt="Accessibility" />
  <img src="https://img.shields.io/badge/Performance_tiers-eco_·_normal_·_premium-7FD8CB?style=flat-square" alt="Performance tiers" />
</p>

<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=0:B4788C,50:7FD8CB,100:B4788C&height=3" alt="" />

</div>

## Contents

- [Overview](#overview)
- [Features](#features)
- [Motion and performance](#motion-and-performance)
- [Accessibility](#accessibility)
- [Getting started](#getting-started)
- [Configuration](#configuration)
- [Project structure](#project-structure)
- [Making changes](#making-changes)
- [Troubleshooting](#troubleshooting)
- [Privacy and security](#privacy-and-security)
- [Contribution rules](#contribution-rules)
- [License](#license)
- [Author](#author)

## Overview

**Hajir Muhaajir** builds a personal hub of browser tools, AI chatbots, mini games, and original music. The whole site is static: plain HTML, CSS, and JavaScript with no build step and no npm dependencies.

It includes:

- **Beat Tools**, a filterable directory of eight free browser tools.
- **AI & Bots**, two chatbots (Raia and Kirana) that connect to the provider you choose.
- **Mini Games**, four games that run in the browser.
- **Signature Music**, an embedded player and usage guide.
- **Bilingual UI** in English and Indonesian, with a global search (`Ctrl + K` or `Cmd + K`).
- **Installable PWA**, with a manifest, screenshots, and shortcuts.

Things this project deliberately does not use: a custom backend, analytics or tracking pixels, a build tool, framework lock-in, emoji, or icon fonts.

## Features

### Beat Tools

| # | Tool | Category | What it does |
|:---:|---|---|---|
| `01` | **HajirSync** | Music | Create LRC lyric files that sync with your audio. |
| `02` | **Raia Vault** | Security | Generate strong random passwords. |
| `03` | **Raia Scrub** | Security | Remove sensitive data such as location from photos before sharing. |
| `04` | **Raia Delta** | Developer | Compare two texts and see the differences. |
| `05` | **Raia Minify** | Developer | Minify and optimise code or text in the browser. |
| `06` | **RaiaSpace** | Web | A lightweight search portal for the open web. *(Demo)* |
| `07` | **Calc** | Web | A simple, fast calculator. |
| `08` | **QRe** | Web | Generate QR codes. Processing stays local in your browser. |

Each card opens the tool in a new tab and has a **How to Use** button. That button loads the tool's `README.md` from its public GitHub repository and shows it in a modal.

### AI & Bots

| # | Name | Link | What it does |
|:---:|---|---|---|
| `01` | **Raia** | [`/raia-ai/`](https://hajir.is-a.dev/raia-ai/) | A chatbot for conversations, ideas, and everyday workflows. |
| `02` | **Kirana** | [`/kirana`](https://hajir.is-a.dev/kirana) | A warm companion for creative chats and daily ideas. |

### Mini Games

| # | Game | Link | Type | Status |
|:---:|---|---|---|---|
| `01` | **Chess** | [`/chess`](https://hajir.is-a.dev/chess) | Classic board | Demo |
| `02` | **Loveyou** | [`/loveyou`](https://hajir.is-a.dev/loveyou) | Interactive | Stable |
| `03` | **Orbit Weaver** | [`/game/orbit-weaver.html`](https://hajir.is-a.dev/game/orbit-weaver.html) | Arcade | Demo |
| `04` | **Starfall** | [`/game/starfall.html`](https://hajir.is-a.dev/game/starfall.html) | Arcade | Demo |

## Motion and performance

The site adjusts its effects to the device. The tier is decided by an inline script in `<head>` before the stylesheets load, and it is written to `<html data-perf>`.

| | `eco` | `normal` | `premium` |
|---|---|---|---|
| Sky | Static base gradient | Lighter sky | Full Milky Way, nebula, and parallax |
| Meteors | None | Every 12–25 s | Every 6–15 s |
| Cursor spotlight | Off | Off | On (mouse only) |
| Tilt and magnetic buttons | Off | Off | On (mouse only) |
| Canvas click ripples | Off | On | On |

**Which tier you get:** `eco` if reduced motion is requested, Save-Data is on, device memory is 2 GB or less, or there are 2 cores or fewer. `normal` for coarse pointers, 4 GB or less of memory, or 4 cores or fewer. Everything else is `premium`.

**Motion rules in the shipped code:**

- Reveal animations run only at 768px and wider. Each element rises 14 px over 280 ms and animates only `transform` and `opacity`.
- Hero and About animations pause while their section is off-screen.
- With `prefers-reduced-motion`, the sky and ticker freeze, meteors stop, click ripples stop, smooth scrolling is turned off, and stat counters show their final value at once.
- Scroll work goes through `requestAnimationFrame`.

<details>
<summary><b>Check the active tier</b></summary>

```js
document.documentElement.getAttribute('data-perf'); // "eco" | "normal" | "premium"
```

To test a tier, change the attribute and reload. The attribute is recalculated on every page load and is not saved.

</details>

## Accessibility

- **Focus is always visible.** `:focus-visible` draws a 3 px accent outline with a 3 px offset. Bare `:focus` has no styling.
- **Touch targets are at least 44 px tall** on mobile for buttons, toggles, filters, and drawer items.
- **Overlays manage focus.** The side drawer, documentation modal, and cookie settings move focus inside, keep Tab within the dialog, close on Escape, and return focus to the trigger. Body scroll is locked by reference count.
- **Filters are a toolbar** (`role="toolbar"`) with `aria-pressed` states and arrow-key navigation.
- **Search** supports arrow keys, Enter, and Escape.
- **Messages are announced.** Form errors use `role="status"` with `aria-live="polite"`, and invalid fields get `aria-invalid="true"`.
- **Decorative layers are hidden** from assistive technology and do not take pointer input.
- **Contrast, measured in Chromium:** body text is 12.2:1 in light mode and 15.1:1 in dark mode. Accent text is 4.9:1 in light and 10.5:1 in dark. White on the light accent button is 5.7:1.

## Getting started

There is no build step and no package to install. Any static file server will do.

```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Then open the address shown in your terminal.

**Deploy anywhere static:** GitHub Pages, Cloudflare Pages, Netlify, Vercel, or any ordinary web server.

<details>
<summary><b>Page sections in order</b></summary>

The DOM order matches the visual order, the keyboard order, and the accessibility tree.

| # | Section | Contents |
|:---:|---|---|
| 1 | Hero | Introduction, tagline, RaiaSpace badge, and primary actions |
| 2 | About | Biography, roles, and statistics |
| 3 | Beat Tools | Filterable directory of eight browser tools |
| 4 | AI & Bots | Raia and Kirana |
| 5 | Mini Games | Chess, Loveyou, Orbit Weaver, and Starfall |
| 6 | Music | Signature Music player and usage guide |
| 7 | Quotes | Curated quotes with attribution |
| 8 | Contact | Contact form and social links |
| 9 | Support | Buy Me a Coffee and Sociabuzz |
| 10 | Footer | Brand, sitemap, social links, and legal information |

</details>

## Configuration

**Language.** Resolved in this order: `?lang=id` or `?lang=en` in the URL, then the saved choice in `localStorage['haiere-lang']`, then the browser language if it starts with `id`, then English.

**Theme.** Saved in `localStorage['theme']` as `dark` or `light`. Dark is the default. The aurora layer follows the same setting through `data-theme="night"` or `data-theme="day"`.

**Cookie preferences.** Saved in `localStorage['haiere-cookie']` (`accepted`, `declined`, or `customized`) and `localStorage['haiere-cookie-prefs']`, for example:

```json
{ "analytics": false, "marketing": false, "preferences": true }
```

**Contact form.** Submits to Formspree. The primary endpoint is `https://formspree.io/f/mpqkqanp`, and the fallback is `https://formspree.io/xgvkobyl`.

## Project structure

```text
.
├── index.html            Main page: SEO metadata, JSON-LD, markup, icon sprite, boot script
├── styleguide.html       Design-system reference: tokens, components, motion, accessibility
├── style.css             Design tokens, layout, components, motion, tier rules
├── aurora.css            Milky Way background styles
├── aurora.js             Background behaviour: stars, meteors, parallax, spotlight, ripples
├── script.js             Tool data, card rendering, theme, i18n, drawer, search, filters,
│                         documentation modal, contact form, cookies
├── i18n.js               English and Indonesian strings
├── icons.js              SVG icon registry
├── manifest.webmanifest  PWA metadata, icons, screenshots, shortcuts
└── README.md             This file
```

## Making changes

| To change | Edit |
|---|---|
| Tool, bot, or game name, URL, category, or status | `SITE_TOOLS`, `SITE_BOTS`, `SITE_GAMES` in `script.js`, then update the matching entries in the JSON-LD and `<noscript>` fallback lists in `index.html` |
| Structure, SEO, JSON-LD | `index.html` |
| Colours, spacing, typography, components | Tokens in `:root` and `.dark` in `style.css` |
| Aurora look | `aurora.css` |
| Aurora behaviour | `aurora.js` |
| Interactions | `script.js` |
| Any visible text | `i18n.js`, in both `id` and `en` |
| Icons | `icons.js` |
| Install prompt and shortcuts | `manifest.webmanifest` |
| Design-system documentation | `styleguide.html` |

<details>
<summary><b>Rules for adding features</b></summary>

- Animate only `transform`, `opacity`, colour, and shadow. Never `width`, `height`, `top`, `left`, or `margin`.
- Do not add scroll listeners. Reuse the `requestAnimationFrame` throttle in `script.js`.
- Define every decorative layer for all three tiers in `style.css` or `aurora.css`.
- Gate mouse-only effects behind `perfTier === 'premium'`.
- Respect `prefers-reduced-motion`.
- Keep `will-change` off long-lived elements unless there is a clear reason.

</details>

## Troubleshooting

**Icons look broken on first load.** Check that `icons.js` loads and that the CSS fallback in `index.html` is present. The fallback keeps icons from growing while styles load.

**The aurora does not show.** Check that `aurora.css` and `aurora.js` load and that `#aurora-bg`, `.spotlight`, and `#fx` exist. The aurora is turned off on the `eco` tier. Run `document.documentElement.getAttribute('data-perf')` to check.

**The site is slow on mobile.** Check the active tier. If a low-end device is on `premium`, make sure the inline script in `<head>` runs before the stylesheets.

**Contact form does not send.** Check that JavaScript is enabled, the fields have `name` attributes, and both Formspree endpoints are reachable.

**Theme or language does not persist.** Check that `localStorage` is available and that the browser is not clearing site data. The keys are `theme` and `haiere-lang`.

**Search finds nothing.** Try a broader term. If the language was just changed, the index is rebuilt by `applyLang()`, so reload the page if results look stale.

## Privacy and security

- The site has no analytics, tracking pixels, or backend database.
- Preferences are stored only in `localStorage`.
- Contact messages are sent through Formspree.
- Tool documentation is fetched from public GitHub repositories.
- Music, fonts, and embeds follow their own privacy policies.
- AI bots send requests only to the provider you configure.

> **Warning:** `localStorage` is not an encrypted vault. Never store passwords, API keys, or tokens there.

## Contribution rules

1. Use SVG icons only. No emoji and no icon fonts.
2. Send every visible string through `i18n.js`, in both languages.
3. Keep Raia and Kirana provider-based, and keep them in `#ai-bots`.
4. Respect `prefers-reduced-motion`, and make reduced motion force the `eco` tier.
5. Keep Aurora optional. The site must work when `aurora.js` fails to load.
6. Keep `id="raia"` unique in the document.
7. Do not add a changelog, version string, or runtime date to the site.
8. Check contrast for any new colour in both themes, at least 4.5:1 for text.

## License

The website design, original content, branding, and original music belong to Haiere unless stated otherwise. Third-party libraries, fonts, services, and icons remain under their own licences.

## Author

Developed by **Hajir Muhaajir**.

<p>
  <a href="https://hajir.is-a.dev"><img src="https://img.shields.io/badge/Website-hajir.is--a.dev-B4788C?style=flat-square&logo=cloudflare&logoColor=white" alt="Website" /></a>
  <a href="https://github.com/haiere"><img src="https://img.shields.io/badge/GitHub-@haiere-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://x.com/haierehere"><img src="https://img.shields.io/badge/X-@haierehere-000000?style=flat-square&logo=x&logoColor=white" alt="X" /></a>
  <a href="https://instagram.com/muhaajirere"><img src="https://img.shields.io/badge/Instagram-muhaajirere-E4405F?style=flat-square&logo=instagram&logoColor=white" alt="Instagram" /></a>
  <a href="https://youtube.com/@hajirstein"><img src="https://img.shields.io/badge/YouTube-@hajirstein-FF0000?style=flat-square&logo=youtube&logoColor=white" alt="YouTube" /></a>
  <a href="https://soundcloud.com/haiere"><img src="https://img.shields.io/badge/SoundCloud-haiere-FF5500?style=flat-square&logo=soundcloud&logoColor=white" alt="SoundCloud" /></a>
  <a href="https://t.me/reregera"><img src="https://img.shields.io/badge/Telegram-@reregera-229ED9?style=flat-square&logo=telegram&logoColor=white" alt="Telegram" /></a>
</p>

<p>
  <a href="https://buymeacoffee.com/hajirstudio"><img src="https://img.shields.io/badge/Buy_Me_a_Coffee-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black" alt="Buy Me a Coffee" /></a>
  <a href="https://sociabuzz.com/HajirStudio"><img src="https://img.shields.io/badge/Sociabuzz-2563EB?style=for-the-badge" alt="Sociabuzz" /></a>
</p>

<br />

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0A192F,50:7FD8CB,100:B4788C&height=140&section=footer&text=Useful%20tools%2C%20thoughtful%20experiments&fontSize=22&fontColor=FFFFFF&animation=fadeIn" alt="Footer" />
