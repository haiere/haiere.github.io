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

A personal portfolio and tool hub for **Hajir Muhaajir**, known online as **Haiere**.

Hajir Studio showcases web development projects, privacy-first digital tools, original music, experiments, and ways to get in touch.

## Overview

Hajir Studio is a client-side portfolio website for a web developer, AI builder, and musician based in Indonesia.

The site brings together:

- Free privacy-first web tools
- Original music releases
- A personal quote collection
- Project documentation
- Contact and support links
- External social and developer profiles

The website uses a glass-morphism visual style with dark/light themes, bilingual content, global search, documentation modals, and persistent local preferences.

The main website does not require a custom backend. However, selected features rely on external services such as Formspree, GitHub, Google Fonts, Font Awesome, Marked.js, Plausible Analytics, and the embedded music player.

## Features

### Tool directory

A collection of free web tools, including:

- **HajirSync** — Generate synchronized LRC lyric files.
- **Raia Vault** — Generate and manage strong passwords locally.
- **Raia Scrub** — Remove sensitive metadata from files and images.
- **Raia Delta** — Compare two blocks of text and highlight differences.
- **Raiamify** — Lightweight AI assistance.
- **Raia AI** — AI chat platform supporting multiple providers.
- **Calc** — Simple browser-based calculator.
- **Chess** — Classic chess game.

### Global search

The header includes a global search interface that:

- Searches across sections and tool cards.
- Opens with `Ctrl + K` on Windows/Linux.
- Opens with `Cmd + K` on macOS.
- Supports keyboard navigation.
- Allows arrow-key selection and Enter to open a result.
- Closes with the Escape key.

### Documentation modal

Tool documentation is loaded from public GitHub repositories.

When a tool documentation button is clicked, the website requests:

```text
[https://raw.githubusercontent.com/haiere/](https://raw.githubusercontent.com/haiere/)<repository>/main/README.md
```

The returned Markdown is rendered inside a modal using Marked.js.

The target repository must:

- Be public.
- Use the `main` branch.
- Contain a readable `README.md`.
- Allow access to raw GitHub content.

### Music showcase

The music section embeds the Signature Music player for streaming original tracks.

If the embedded player cannot load, the page provides a fallback link to the music service.

### Contact form

The contact section provides a client-side form connected to Formspree.

Formspree processes the submission and forwards the message according to the configured Formspree endpoint. The static website itself does not operate a custom mail backend.[web:94][web:96]

### Support section

Visitors can support the project through:

- Buy Me a Coffee
- Sociabuzz

Support links are available in the drawer, footer, and dedicated support section.

### Language switcher

The interface supports Indonesian and English.

The selected language is stored locally in the browser and is restored during the next visit.

### Theme switcher

The site supports:

- Dark mode
- Light mode
- System preference detection
- Persistent theme selection

The initial theme follows the browser or operating system preference unless the visitor has already selected a theme manually.

### Accessibility

The interface includes:

- Skip navigation support
- Semantic HTML landmarks
- ARIA labels and live regions
- Keyboard navigation
- Visible focus states
- Modal focus handling
- Escape-key dismissal
- Reduced-motion support
- Minimum touch targets for interactive controls

Decorative elements such as the aurora mesh, grain overlay, cursor effects, and visual grids are hidden from assistive technologies.

### Privacy-first analytics

The site uses Plausible Analytics for aggregate traffic measurement.

Plausible states that it does not use cookies or persistent identifiers and does not build personal profiles from visitors.[web:93][web:95][web:98]

## Requirements

A modern browser with JavaScript enabled is required.

Supported browsers include:

- Chrome
- Firefox
- Edge
- Safari
- Other current Chromium- or WebKit-based browsers

An internet connection is required to load:

- Google Fonts: Inter, Sora, and JetBrains Mono
- Font Awesome
- Tailwind CSS via CDN
- Marked.js
- Plausible Analytics
- The embedded Signature Music player
- README files fetched from GitHub

The contact form also requires a valid Formspree endpoint.

## Installation

Hajir Studio is a static website.

### Hosted version

Open the hosted website in a modern browser.

### Clone the repository

```bash
git clone [https://github.com/haiere/haiere.github.io.git](https://github.com/haiere/haiere.github.io.git)
cd haiere.github.io
```

### Run locally

You can open `index.html` directly, but using a local server is recommended:

```bash
python -m http.server
```

Or:

```bash
npx serve
```

Then open the local URL shown by the server.

### Deploy

The project can be deployed to any static hosting provider, including:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel
- Any standard static web server

No build command is required.

## Usage

### Navigation

The header contains:

- Brand logo
- Global search
- RaiaSpace link
- Theme toggle
- Menu button
- Side drawer trigger

The side drawer contains:

- About
- Music
- Quotes
- Tools
- Contact
- Support links
- Language selector
- External links
- Cookie settings
- Legal and privacy links

### Sections

| Section | Description |
| --- | --- |
| Hero | Introduction, tagline, RaiaSpace badge, calls to action, and keyword ticker. |
| About | Biography, portrait, role tags, focus areas, and project statistics. |
| RWR | Promotional card for a related project. |
| Music | Embedded Signature Music player and original releases. |
| Quotes | Inspirational quotes with author attribution. |
| Tools | Filterable directory of free web tools. |
| Contact | Validated contact form and social-media fallback links. |
| Support | Buy Me a Coffee and Sociabuzz links. |
| Footer | Logo, navigation, social links, legal information, and cookie settings shortcut. |

## Tool listing

| Tool | Category | Description |
| --- | --- | --- |
| HajirSync | Music | Generate synchronized LRC lyric files. |
| Raia Vault | Security | Generate strong random passwords. |
| Raia Scrub | Security | Remove sensitive metadata such as GPS data. |
| Raia Delta | Web | Compare two blocks of text and highlight differences. |
| Raiamify | Web | Lightweight AI assistance. |
| Raia AI | Web | AI chat platform supporting multiple providers. |
| Calc | Web | Simple browser-based calculator. |
| Chess | Web | Classic chess game. |

## Configuration

### Language

The language system is defined in `i18n.js`.

The current language is stored in `localStorage` and restored on later visits.

The default language is selected from `navigator.language`:

- Indonesian browser settings use Indonesian.
- Other languages default to English unless explicitly supported.

### Theme

The theme system stores the selected value in `localStorage`.

The initial theme follows:

```text
User-selected theme
↓
Saved local preference
↓
System preference
```

The system preference is detected using:

```js
window.matchMedia('(prefers-color-scheme: dark)')
```

### Cookie preferences

The cookie interface provides:

- Accept
- Reject
- Customize

The settings modal includes:

- Necessary cookies
- Analytics
- Marketing
- Preferences

Necessary functionality is always enabled.

Cookie preference state is stored locally in the browser. The application uses local storage for interface preferences such as theme, language, and consent state.

Plausible Analytics is designed to operate without cookies or persistent identifiers, so it should not be described as a conventional tracking-cookie service.[web:93][web:98]

### Documentation modal

Each tool card should include:

```html
<li
  class="tool-card"
  data-category="security"
  data-repo="raia-vault">

  <h3 data-i18n="tool_raia_vault_title">
    Raia Vault
  </h3>

  <p data-i18n="tool_raia_vault_description">
    Generate strong passwords locally.
  </p>

  <button
    type="button"
    class="tool-docs-btn"
    data-repo="raia-vault"
    data-tool-name="Raia Vault">

    How to Use
  </button>
</li>
```

The repository slug must match the GitHub repository name.

## Project structure

```text
/
├── index.html
├── style.css
├── script.js
├── i18n.js
├── icons.js
└── manifest.webmanifest
```

### Main files

| File | Purpose |
| --- | --- |
| `index.html` | Main page structure and content. |
| `style.css` | Design tokens, layout, responsive styles, animations, and utilities. |
| `script.js` | Navigation, theme, search, forms, tools, modals, cookies, and animations. |
| `i18n.js` | Indonesian and English translations. |
| `icons.js` | SVG icon definitions and icon replacement logic. |
| `manifest.webmanifest` | PWA metadata and install configuration. |

## Adding a new tool

1. Add a new tool card to `#tools-container`.
2. Add a valid `data-category`.
3. Add the GitHub repository slug using `data-repo`.
4. Add translated title and description keys.
5. Add a documentation button.
6. Ensure the repository contains a public `README.md` on the `main` branch.

Example:

```html
<li
  class="tool-card"
  data-category="web"
  data-repo="new-tool">

  <div class="tool-card-content">
    <span class="tool-category">
      Web
    </span>

    <h3 data-i18n="tool_new_title">
      New Tool
    </h3>

    <p data-i18n="tool_new_description">
      A short description of the new tool.
    </p>

    <div class="tool-card-actions">
      <a
        href="[https://example.com](https://example.com)"
        target="_blank"
        rel="noopener noreferrer"
        class="tool-open-btn">

        Open Tool
      </a>

      <button
        type="button"
        class="tool-docs-btn"
        data-repo="new-tool"
        data-tool-name="New Tool">

        How to Use
      </button>
    </div>
  </div>
</li>
```

## Adding a translation

1. Open `i18n.js`.
2. Add the new key to the English object.
3. Add the same key to the Indonesian object.
4. Add `data-i18n` to the relevant HTML element.
5. Add `data-i18n-placeholder` or `data-i18n-label` where appropriate.

Example:

```js
const i18n = {
  en: {
    tool_new_title: 'New Tool',
    tool_new_description: 'A short description of the new tool.'
  },

  id: {
    tool_new_title: 'Alat Baru',
    tool_new_description: 'Deskripsi singkat tentang alat baru.'
  }
};
```

## Adding an icon

1. Add the SVG definition to `icons.js`.
2. Assign a unique identifier such as `ic40`.
3. Reference it in HTML:

```html
<svg
  data-icon="ic40"
  aria-hidden="true">
</svg>
```

4. Ensure `icons.js` is loaded before `script.js`.

## Troubleshooting

### The contact form does not submit

Check the following:

- The Formspree endpoint is valid.
- The form includes an `action` attribute.
- Input elements have `name` attributes.
- JavaScript is enabled.
- The browser console does not show a network error.

Formspree's HTML form integration requires a configured endpoint and named form fields.[web:94][web:96]

### The theme does not persist

Check whether:

- Browser storage is enabled.
- The page is not running in a restricted private mode.
- Another script overwrites the theme key.
- The theme key is consistent across all modules.

### The language does not switch

Check whether:

- `i18n.js` loads before `script.js`.
- Translation keys exist in both languages.
- The HTML element contains the correct `data-i18n` attribute.
- No JavaScript error interrupts initialization.

### The music player does not load

The player uses an iframe pointing to:

```text
[https://signature-music.vercel.app](https://signature-music.vercel.app)
```

If the iframe fails, use the fallback link below the player.

### The documentation modal does not open

Check whether:

- The card has a `data-repo` attribute.
- The GitHub repository is public.
- The repository uses the `main` branch.
- `README.md` exists.
- Raw GitHub content is reachable.
- `marked.js` has loaded.
- `script.js` is loaded after the required dependencies.

### Search results do not appear

Check whether:

- The search input has the expected ID.
- The search index is initialized.
- Tool cards contain searchable text.
- JavaScript errors are present in the console.

### Icons do not appear

Check whether:

- `icons.js` loads before `script.js`.
- The icon identifier exists.
- The element uses `data-icon`.
- The SVG markup is valid.

### Cookie settings do not open

Check whether these elements exist:

```text
customizeCookiesBtn
reopenCookieSettingsBtn
cookieSettingsModal
cookieSettingsOverlay
```

Also verify that the event listeners are registered after the DOM has loaded.

## Privacy and security

### Application storage

The website stores interface preferences locally in the visitor's browser, such as:

- Theme selection
- Language selection
- Cookie preference state

The website does not operate a custom application database for these preferences.

### Contact submissions

Contact messages are processed by Formspree using the configured endpoint. They are not stored on a custom Haiere backend.[web:94][web:96]

### Analytics

Plausible Analytics is used for aggregate website measurement.

Plausible states that it does not use cookies, persistent identifiers, or personal profiles for its standard analytics service.[web:93][web:98]

### External services

The website links to or embeds third-party services, including:

- GitHub
- Instagram
- SoundCloud
- Reddit
- X
- Quora
- Discord
- Telegram
- Buy Me a Coffee
- Sociabuzz
- Formspree
- Plausible Analytics
- Google Fonts
- Font Awesome
- Signature Music

Each third-party service operates under its own privacy policy and terms.

## Development

Hajir Studio is a static website with an HTML entry point and modular JavaScript files.

Edit:

- `index.html` for structure and content.
- `style.css` for tokens, layout, and visual styles.
- `script.js` for behavior and interactions.
- `i18n.js` for translations.
- `icons.js` for SVG icons.
- `manifest.webmanifest` for PWA metadata.

Tailwind CSS is loaded through a CDN. There is currently no required build step.

For local development:

```bash
python -m http.server
```

Or:

```bash
npx serve
```

## License

The website design, original content, branding, and original music are the property of Haiere unless otherwise stated.

All rights reserved.

For licensing or reuse inquiries, contact Haiere through the website.

Third-party libraries, services, fonts, and icons remain subject to their respective licenses and terms.

## Author and support

Developed by **Hajir Muhaajir**, known online as **Haiere**.

Hajir is a web developer, AI builder, musician, and creator of privacy-first web tools.

For questions, feedback, or support:

- Open an issue on GitHub.
- Use the contact form.
- Visit the social links in the footer.
- Support the project through Buy Me a Coffee or Sociabuzz.

## Last updated

2026