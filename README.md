# Hajir Studio

[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/haiere/haiere.github.io)
[![Stars](https://img.shields.io/github/stars/haiere/haiere.github.io?style=flat-square&logo=github)](https://github.com/haiere/haiere.github.io/stargazers)
[![Forks](https://img.shields.io/github/forks/haiere/haiere.github.io?style=flat-square&logo=github)](https://github.com/haiere/haiere.github.io/network/members)
[![Issues](https://img.shields.io/github/issues/haiere/haiere.github.io?style=flat-square&logo=github)](https://github.com/haiere/haiere.github.io/issues)
[![License](https://img.shields.io/github/license/haiere/haiere.github.io?style=flat-square)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/haiere/haiere.github.io?style=flat-square)](https://github.com/haiere/haiere.github.io/commits/main)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile--First-3B82F6?style=flat-square)](#responsive-design)
[![PWA](https://img.shields.io/badge/PWA-supported-5A0FC8?style=flat-square)](manifest.webmanifest)
[![Plausible](https://img.shields.io/badge/Analytics-Plausible-5D9CEC?style=flat-square&logo=plausible&logoColor=white)](https://plausible.io/)
[![Sociabuzz](https://img.shields.io/badge/Support-Sociabuzz-FF5722?style=flat-square)](https://sociabuzz.com/hajirstudio)

A personal portfolio and tool hub for Hajir Stein (Haiere), showcasing web development projects, free digital tools, and a music collection.

Hajir Studio is a single-page portfolio website that serves as the personal hub for Hajir Stein, a web developer and musician. It presents a curated collection of free, privacy-first web tools, original music releases, and a contact channel.

The website is fully client-side, with no backend dependencies. It features a glass-morphism design, dark/light theme support, bilingual content (Indonesian and English), a global search interface, integrated documentation modals for each tool, and a **mobile-first responsive layout** optimized for mobile, tablet, and desktop.

---

## Overview

Hajir Studio combines a professional portfolio with a practical tool directory. The site is designed to be fast, lightweight, and privacy-respecting while offering a polished user experience across all device sizes.

Key characteristics:

- Single-page application with modular JavaScript architecture.
- **Mobile-first responsive layout** — 1 column on mobile, 2 on tablet, 3 on desktop for tool grids.
- Glass-morphism UI inspired by modern design trends.
- Bilingual support (Indonesian and English) with persistent language preference.
- Dark and light themes with automatic system preference detection.
- Privacy-first analytics using Plausible (cookieless).
- Progressive Web App (PWA) support via `manifest.webmanifest`.
- **Accessible touch targets** — all interactive elements are ≥48×48px on mobile.
- **Dedicated RaiaSpace search button** on mobile and tablet in the header.

---

## Features

### Core Features

- **Tool directory** – A curated list of free web tools including:
  - HajirSync (LRC generator)
  - Raia Vault (password manager)
  - Raia Scrub (metadata cleaner)
  - Raia Delta (text diff checker)
  - Raiamify (AI assistant)
  - Raia AI (chat platform)
  - Calc (calculator)
  - Chess (chess game)
- **Global search** – Two access points:
  - **Mobile & tablet:** Compact `RaiaSpace` button in the header (link to `https://haiere.github.io/raiaspace`).
  - **Desktop (≥1024px):** Inline search bar with `Ctrl + K` shortcut. Results are keyboard-navigable and span all sections and tools.
- **Documentation modal** – Each tool includes a documentation button that fetches and renders its `README.md` from GitHub using the `marked` parser.
- **Music showcase** – Embedded Signature Music player for streaming original tracks (responsive height: `55vh` → `560px` → `600px`).
- **Quote collection** – A grid of inspirational quotes with mobile line-clamp to prevent overly tall cards.
- **Contact form** – Integrated with Formspree for message submissions.
- **Donate section** – Direct link to support the project via Buy Me a Coffee and Sociabuzz, available in the side drawer and as a dedicated section before the footer.
- **Language toggle** – Switch between Indonesian and English across all text content.
- **Dark/light theme** – Manual toggle with system preference detection and `localStorage` persistence.
- **Glass-morphism UI** – Apple-inspired design with backdrop blur, subtle shadows, and smooth hover animations.
- **Interactive visual effects** – Spotlight cursor effect on the hero section, tilt cards, and magnetic button animations (non-touch devices only).
- **Accessibility support** – Skip link, ARIA attributes, keyboard navigation, focus trapping in drawer/modal, and `prefers-reduced-motion` support.
- **Privacy-first analytics** – Plausible Analytics for lightweight, cookieless traffic measurement.

---

## Responsive Design

The layout is **mobile-first**, built with these breakpoints:

| Breakpoint | Range | Tailwind Prefix |
|---|---|---|
| **Mobile** | `< 640px` | *(base)* |
| **Tablet** | `640px – 1023px` | `sm:` `md:` |
| **Desktop** | `≥ 1024px` | `lg:` `xl:` |

### Key Responsive Behaviors

| Element | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Header search** | `RaiaSpace` button (icon only) | `RaiaSpace` button (icon + label) | Inline search bar + `RaiaSpace` button hidden |
| **Tools grid** | 1 column | 2 columns | 3 columns |
| **Quotes grid** | 1 column, line-clamped | 2 columns | 2 columns |
| **Stats grid** | 2 columns | 4 columns | 4 columns |
| **Music iframe** | `55vh` (min 420px) | `560px` | `600px` |
| **Tool action buttons** | Stacked, full-width | Inline | Inline |
| **Donate buttons** | 1 column (stacked) | 2 columns | 2 columns |
| **Footer social icons** | 48×48px | 44×44px | 44×44px |
| **Drawer items** | ≥48px min-height | ≥48px | ≥48px |
| **Section headings** | `text-2xl` | `text-3xl` | `text-4xl` |

### Touch Targets

All interactive elements meet the **48×48px minimum** on mobile:

- Header buttons (`#menu-btn`, `#theme-toggle`, `.header-search-btn`)
- Drawer navigation items
- Language toggle buttons
- Filter buttons (All / Music / Security / Web)
- Form inputs (`min-h-[48px]`)
- Footer navigation links (`min-h-[44px]`)
- Social media icons
- Cookie consent buttons
- Donate buttons (`min-h-[52px]`)

### Anti-Overflow

- `html, body { overflow-x: hidden; max-width: 100%; }`
- Hero `<h1>` uses `word-break: break-word` (previously `text-nowrap` which caused overflow).
- Tool cards use `min-width: 0` in grid cells.

---

## Requirements

- A modern web browser with JavaScript enabled (Chrome, Firefox, Edge, Safari, or similar).
- An internet connection is required to load:
  - Google Fonts (Inter, Outfit, JetBrains Mono).
  - Font Awesome icons.
  - Tailwind CSS (via CDN).
  - Marked.js (for markdown rendering in the documentation modal).
  - Plausible Analytics script.
- The contact form requires a working Formspree endpoint.
- The documentation modal requires access to raw GitHub content to fetch `README.md` files.

---

## Installation

Hajir Studio is a static website composed of an HTML entry point and several JavaScript modules.

### Hosted Version

1. Open the hosted URL in your browser:
   - Production: `https://hajirstudio.vercel.app` (or `https://hajir.is-a.dev`)

### Local Version

1. Clone or download the repository.
2. Open `index.html` directly in a modern web browser.

```bash
git clone https://github.com/haiere/haiere.github.io.git
cd haiere.github.io
```

### Self-Hosting

Upload all files to any static web server, such as:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel
- Any other static hosting provider

---

## Usage

### Navigation

- The header provides a logo, a `RaiaSpace` search button (mobile/tablet), an inline search bar (desktop), a theme toggle, and a menu button.
- The menu button opens a side drawer with navigation links to:
  - About
  - Music
  - Quotes
  - Tools
  - Contact
- The drawer also includes:
  - Donate buttons (Buy Me a Coffee / Sociabuzz)
  - Language selection (ID/EN)
  - External links (GitHub, RAIA)
  - Legal footer links

### Search: RaiaSpace

**Desktop (≥1024px):** Press `Ctrl + K` (or `Cmd + K` on macOS) to focus the inline search input. Type to filter across sections and tools. Use arrow keys to navigate and `Enter` to open. Press `Escape` to close.

**Mobile & Tablet (<1024px):** Tap the `RaiaSpace` button in the header. It opens `https://haiere.github.io/raiaspace` in a new tab (`target="_blank" rel="noopener"`).

### Sections

| Section | Description |
|---|---|
| **Hero** | Introduces Hajir with a tagline, `RaiaSpace` badge, call-to-action buttons, and a scrolling ticker of keywords. |
| **About** | Biographical information, role tags, and statistics (tools released, music releases, original songs, privacy commitment). |
| **RWR-AMA** | A dedicated promotional card linking to a related project. |
| **Music** | Embedded Signature Music player for streaming original tracks with responsive height. |
| **Quotes** | A 1-column (mobile) / 2-column (tablet+) grid of four inspirational quotes with mobile line-clamping. |
| **Tools** | A filterable grid (1 / 2 / 3 columns) of free web tools with descriptions, "Open Tool" buttons, and "Cara Penggunaan" buttons that open a documentation modal. |
| **Contact** | A contact form with validation, submission status, and a fallback message with social media links. |
| **Support** | A dedicated section with Buy Me a Coffee and Sociabuzz donation buttons (stacked on mobile, side-by-side on tablet+). |
| **Footer** | Logo, social media links, footer navigation, and legal disclaimers. |

### Tool Listing

| Tool | Category | Description |
|---|---|---|
| **HajirSync** | Music | Generate synchronised LRC lyric files. |
| **Raia Vault** | Security | Generate strong random passwords. |
| **Raia Scrub** | Security | Remove sensitive metadata (e.g., GPS) from photos. |
| **Raia Delta** | Web | Compare two blocks of text and highlight differences. |
| **Raiamify** | Web | A lightweight AI tool for fast assistance. |
| **Raia AI** | Web | AI platform supporting multiple providers. |
| **Calc** | Web | A simple, fast calculator. |
| **Chess** | Web | Classic chess game. |

---

## Configuration

### Language

- The language toggle (ID/EN) in the side drawer switches all text content.
- The selected language is stored in `localStorage` and persists across sessions.
- Default language is determined by `navigator.language` (Indonesian or English).

### Theme

- The theme toggle switches between dark and light modes.
- The default theme follows the system preference (`prefers-color-scheme`).
- The selected theme is stored in `localStorage`.

### Cookie Consent

- A cookie banner appears on first visit, offering **Accept** or **Reject** options.
- Acceptance stores a cookie consent flag in `localStorage`.
- The banner uses functional cookies only. No tracking cookies are set by the site itself; Plausible Analytics is cookieless.

### RaiaSpace Search Button

- **Mobile & Tablet:** Configurable via the `.header-search-btn` anchor in `index.html`.
- **Desktop:** The inline search (`#header-search`) is hidden below `1024px` via CSS.
- To change the destination, update the `href` attribute:

  ```html
  <a href="https://haiere.github.io/raiaspace" target="_blank" rel="noopener"
     aria-label="Cari di RaiaSpace" class="header-search-btn ...">
  ```

### Documentation Modal

- Each tool card includes a documentation button with a `data-repo` attribute (e.g., `hajirsync`, `raia-vault`).
- When clicked, the modal fetches the `README.md` from the corresponding GitHub repository's main branch:

  ```text
  https://raw.githubusercontent.com/haiere/<repo>/main/README.md
  ```

- The markdown is rendered using the `marked` library.

---

## Project Structure

```text
/
├── index.html            # Main HTML file
├── style.css             # Custom CSS (glass-morphism, animations, responsive utilities)
├── script.js             # Main JavaScript (navigation, theme, form, animations, search, docs modal)
├── i18n.js               # Internationalisation strings (Indonesian and English)
├── icons.js              # SVG icon definitions (loaded via `data-icon` attributes)
└── manifest.webmanifest  # Web app manifest (for PWA support)
```

---

## Examples

### Adding a New Tool

To add a new tool to the directory:

1. Add a new `<li class="tool-card" data-category="..." data-repo="...">` element inside `#tools-container`.
2. Set the `data-category` attribute to an existing category (`music`, `security`, `web`).
3. Add `data-repo` with the GitHub repository slug for documentation fetching.
4. Add `data-i18n` attributes for title and description.
5. Add translations for the new keys in `i18n.js`.
6. Add a `<button class="tool-docs-btn" data-repo="..." data-tool-name="...">` for the docs modal.

The tool card automatically adapts to the responsive grid (1 / 2 / 3 columns) and inherits mobile full-width buttons.

### Adding a New Translation

1. Locate the `i18n` object in `i18n.js`.
2. Add a new language key (e.g., `fr`).
3. Copy the `id` or `en` object and translate all string values.
4. The language toggle will automatically recognise the new key.

### Adding a New Icon

1. Add the SVG content to `icons.js` with a unique `data-icon` identifier.
2. Reference it in HTML using `<svg data-icon="icXX">`.
3. The `icons.js` script replaces the `<svg>` element with the full SVG markup at runtime.

### Adjusting Breakpoints

The site uses Tailwind's default breakpoints via CSS media queries in `style.css`:

```css
/* Mobile default */
#tools-container { grid-template-columns: 1fr; }

/* Tablet */
@media (min-width: 640px) {
    #tools-container { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 1024px) {
    #tools-container { grid-template-columns: repeat(3, 1fr); }
}
```

To change the tablet breakpoint, update the `min-width` value in `style.css` and the corresponding Tailwind prefix (`sm:`) in `index.html`.

---

## Troubleshooting

### Contact form does not send

Ensure the Formspree endpoint is valid. The form uses:

```text
https://formspree.io/f/mpqkqanp
```

If it fails, a fallback endpoint `https://formspree.io/f/xgvkobyl` is used automatically. Check the browser console for errors.

### Theme not persisting

Check that your browser allows `localStorage` and that you are not in private/incognito mode.

### Language not switching

Ensure JavaScript is enabled and that `i18n.js` is loaded before `script.js`.

### Music player does not load

The player is embedded via an iframe pointing to:

```text
https://signature-music.vercel.app
```

If the page fails to load, use the fallback link below the player.

### Documentation modal does not open

Ensure the `data-repo` attribute on the tool card matches a valid repository path. The modal attempts to fetch:

```text
https://raw.githubusercontent.com/haiere/<repo>/main/README.md
```

Repositories must be public for this to work. The fetch also falls back to the `master` branch if `main` is not found.

### Search does not return results

Ensure the search input is properly initialised and that the search index is populated. Results are derived from existing sections and tool cards on the page.

### RaiaSpace button not appearing on mobile

- Verify the `.header-search-btn` class is present on the anchor element.
- Check that the element is not hidden by `@media (min-width: 1024px) { display: none !important; }` (this rule is intentional — the button is desktop-hidden in favor of the inline search).

### Icons do not appear

Ensure `icons.js` is loaded before `script.js` and that each `data-icon` attribute references a defined icon identifier.

### Layout overflows horizontally on mobile

The site is designed to prevent horizontal overflow via:

- `html, body { overflow-x: hidden; max-width: 100%; }`
- `#hero h1 { word-break: break-word; }`
- `#tools-container .tool-card { min-width: 0; }`

If overflow persists, inspect the offending element with DevTools and ensure it does not use `w-screen`, `min-w-*` without `min-w-0`, or `text-nowrap`.

---

## Privacy and Security

- **No personal data is stored on any server** – all user data remains in the browser's `localStorage`.
- **Contact form submissions** are processed via Formspree. Data is not stored on this site's server.
- **Analytics** – Plausible Analytics is used, which is cookieless and does not collect personal data. It only tracks aggregate page views.
- **External services** – The site links to GitHub, Instagram, SoundCloud, Reddit, X, Quora, Discord, and Sociabuzz. Each platform operates under its own privacy policy.

---

## Development

The application is a static site with an HTML entry point and modular JavaScript files.

To modify or extend it:

- Edit `index.html` for structure.
- Edit `style.css` for styles and responsive rules.
- Edit `script.js` for functionality.
- Edit `i18n.js` for translations.
- Edit `icons.js` for SVG icon definitions.

The site uses Tailwind CSS via CDN, with a custom configuration for dark mode and extended font families. No build step is required.

For local development, serve the directory with any static server:

```bash
python -m http.server
```

or

```bash
npx serve
```

### Testing Responsiveness

Use Chrome DevTools device toolbar to test at these widths:

| Device | Width |
|---|---|
| iPhone SE | 375px |
| iPhone 12/13/14 | 390px |
| iPad Mini | 768px |
| iPad Pro | 1024px |
| Desktop | 1280px+ |

Verify:
- Tools grid columns (1 / 2 / 3).
- Touch target sizes (≥48px on mobile).
- No horizontal scroll.
- Header `RaiaSpace` button visibility (mobile: visible, desktop: hidden).

---

## License

This website and its content are the property of Haiere. All rights reserved. For licensing inquiries, contact via the website.

---

## Author and Support

Developed by **Hajir (Haiere)** – a web developer, AI builder, and musician.

For questions, feedback, or support:

- Open an issue on [GitHub](https://github.com/haiere/haiere.github.io/issues).
- Reach out via the [contact form](https://hajir.is-a.dev/#contact) on the website.
- Support the project via [Sociabuzz](https://sociabuzz.com/hajirstudio) or [Buy Me a Coffee](https://buymeacoffee.com/hajirstudio).

---

**Last updated:** 2026