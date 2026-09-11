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
[![PWA](https://img.shields.io/badge/PWA-supported-5A0FC8?style=flat-square)](manifest.webmanifest)
[![Plausible](https://img.shields.io/badge/Analytics-Plausible-5D9CEC?style=flat-square&logo=plausible&logoColor=white)](https://plausible.io/)
[![Sociabuzz](https://img.shields.io/badge/Support-Sociabuzz-FF5722?style=flat-square)](https://sociabuzz.com/hajirstudio)

A personal portfolio and tool hub for Hajir Stein (Haiere), showcasing web development projects, free digital tools, and a music collection.

Hajir Studio is a single-page portfolio website that serves as the personal hub for Hajir Stein, a web developer and musician. It presents a curated collection of free, privacy-first web tools, original music releases, and a contact channel.

The website is fully client-side, with no backend dependencies. It features a glass-morphism design, dark/light theme support, bilingual content (Indonesian and English), a global search interface, and integrated documentation modals for each tool.

---

## Overview

Hajir Studio combines a professional portfolio with a practical tool directory. The site is designed to be fast, lightweight, and privacy-respecting while offering a polished user experience.

Key characteristics:

- Single-page application with modular JavaScript architecture.
- Glass-morphism UI inspired by modern design trends.
- Bilingual support (Indonesian and English) with persistent language preference.
- Dark and light themes with automatic system preference detection.
- Privacy-first analytics using Plausible (cookieless).
- Progressive Web App (PWA) support via `manifest.webmanifest`.

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
- **Global search** – Header search bar with `Ctrl + K` shortcut. Results are keyboard-navigable and span all sections and tools.
- **Documentation modal** – Each tool includes a documentation button that fetches and renders its `README.md` from GitHub using the `marked` parser.
- **Music showcase** – Embedded Signature Music player for streaming original tracks.
- **Quote collection** – A selection of inspirational quotes reflecting the creator's philosophy.
- **Contact form** – Integrated with Formspree for message submissions.
- **Donate button** – Direct link to support the project via Sociabuzz, available in the side drawer and footer.
- **Language toggle** – Switch between Indonesian and English across all text content.
- **Dark/light theme** – Manual toggle with system preference detection and `localStorage` persistence.
- **Glass-morphism UI** – Apple-inspired design with backdrop blur, subtle shadows, and smooth hover animations.
- **Interactive visual effects** – Spotlight cursor effect on the hero section, tilt cards, and magnetic button animations (non-touch devices).
- **Accessibility support** – Skip link, ARIA attributes, keyboard navigation, and reduced-motion preferences.
- **Privacy-first analytics** – Plausible Analytics for lightweight, cookieless traffic measurement.

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

1. Open the hosted URL in your browser.

### Local Version

1. Clone or download the repository.
2. Open `index.html` directly in a modern web browser.

```bash
git clone [https://github.com/haiere/haiere.github.io.git](https://github.com/haiere/haiere.github.io.git)
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

- The header provides a logo, global search bar, theme toggle, and menu button.
- The menu button opens a side drawer with navigation links to:
  - About
  - Music
  - Quotes
  - Tools
  - Contact
- The drawer also includes:
  - Donate button
  - Language selection (ID/EN)
  - External links (GitHub, RAIA)
  - Legal footer links

### Global Search

- Press `Ctrl + K` (or `Cmd + K` on macOS) to focus the search input from anywhere.
- Type to filter across sections and tools.
- Use arrow keys to navigate results and `Enter` to open the selected item.
- Press `Escape` to close the search results.

### Sections

| Section | Description |
|---|---|
| **Hero** | Introduces Hajir with a tagline, call-to-action buttons, and a scrolling ticker of keywords. |
| **About** | Biographical information, role tags, and statistics (tools released, music releases, original songs, privacy commitment). |
| **RWR-AMA** | A dedicated promotional card linking to a related project. |
| **Music** | Embedded Signature Music player for streaming original tracks. |
| **Quotes** | A grid of four inspirational quotes with author attribution. |
| **Tools** | A filterable list of free web tools with descriptions, "Open Tool" buttons, and "Cara Penggunaan" buttons that open a documentation modal. |
| **Contact** | A contact form with validation, submission status, and a fallback message with social media links. |
| **Footer** | Logo, donate button, social media links, footer navigation, and legal disclaimers. |

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
├── style.css             # Custom CSS (glass-morphism, animations, utilities)
├── script.js             # Main JavaScript (navigation, theme, form, animations, search, docs modal)
├── i18n.js               # Internationalisation strings (Indonesian and English)
├── icons.js              # SVG icon definitions (loaded via `data-icon` attributes)
└── manifest.webmanifest  # Web app manifest (for PWA support)
```

---

## Examples

### Adding a New Tool

To add a new tool to the directory:

1. Add a new `<li>` element to the `#tools-container` with the `tool-card` class.
2. Set the `data-category` attribute to an existing category (`music`, `security`, `web`).
3. Add `data-repo` with the GitHub repository slug for documentation fetching.
4. Add `data-i18n` attributes for title and description.
5. Add translations for the new keys in `i18n.js`.
6. Add a `<button class="tool-docs-btn">` with `data-repo` and `data-tool-name` attributes.

### Adding a New Translation

1. Locate the `i18n` object in `i18n.js`.
2. Add a new language key (e.g., `fr`).
3. Copy the `id` or `en` object and translate all string values.
4. The language toggle will automatically recognise the new key.

### Adding a New Icon

1. Add the SVG content to `icons.js` with a unique `data-icon` identifier.
2. Reference it in HTML using `<svg data-icon="icXX">`.
3. The `icons.js` script replaces the `<svg>` element with the full SVG markup at runtime.

---

## Troubleshooting

### Contact form does not send

Ensure the Formspree endpoint is valid. The form uses:

```text
[https://formspree.io/f/mpqkqanp](https://formspree.io/f/mpqkqanp)
```

If it fails, check the browser console for errors.

### Theme not persisting

Check that your browser allows `localStorage` and that you are not in private/incognito mode.

### Language not switching

Ensure JavaScript is enabled and that `i18n.js` is loaded before `script.js`.

### Music player does not load

The player is embedded via an iframe pointing to:

```text
[https://hajir.is-a.dev/signature-music](https://hajir.is-a.dev/signature-music)
```

If the page fails to load, use the fallback link below the player.

### Documentation modal does not open

Ensure the `data-repo` attribute on the tool card matches a valid repository path. The modal attempts to fetch:

```text
[https://raw.githubusercontent.com/haiere/](https://raw.githubusercontent.com/haiere/)<repo>/main/README.md
```

Repositories must be public for this to work.

### Search does not return results

Ensure the search input is properly initialised and that the search index is populated. Results are derived from existing sections and tool cards on the page.

### Icons do not appear

Ensure `icons.js` is loaded before `script.js` and that each `data-icon` attribute references a defined icon identifier.

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
- Edit `style.css` for styles.
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

---

## License

This website and its content are the property of Haiere. All rights reserved. For licensing inquiries, contact via the website.

---

## Author and Support

Developed by **Hajir (Haiere)** – a web developer, AI builder, and musician.

For questions, feedback, or support:

- Open an issue on [GitHub](https://github.com/haiere/haiere.github.io/issues).
- Reach out via the [contact form](https://hajir.is-a.dev/#contact) on the website.
- Support the project via [Sociabuzz](https://sociabuzz.com/hajirstudio).

---

**Last updated:** 2026