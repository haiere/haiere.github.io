Hajir Studio

A personal portfolio and tool hub for Hajir (Haiere), showcasing web development projects, free digital tools, and a music collection.

---

Overview

Haiere Studio is a single-page portfolio website that serves as the personal hub for Hajir Stein, a web developer and musician. It presents a curated collection of free, privacy‑first web tools, original music releases, and a contact channel.

The website is fully client-side, with no backend dependencies. It features a glass‑morphism design, dark/light theme support, bilingual content (Indonesian and English), and a responsive layout optimised for all screen sizes.

---

Features

· Tool directory – A curated list of free web tools including HajirSync (LRC generator), Raia Vault (password manager), Raia Scrub (metadata cleaner), Raia Delta (text diff checker), Raiamify (AI assistant), and Raia AI (chat platform).
· Music showcase – Embedded Signature Music player for streaming original tracks.
· Quote collection – A selection of inspirational quotes relevant to the creator's philosophy.
· Contact form – Integrated with Formspree for message submissions, with fallback endpoint support.
· Language toggle – Switch between Indonesian and English translations across all text content.
· Dark/light theme – Manual toggle with system preference detection and persistent storage.
· Glass‑morphism UI – Apple‑inspired design with backdrop blur, subtle shadows, and smooth hover animations.
· Interactive visual effects – Spotlight cursor effect on the hero section, tilt cards, and magnetic button animations (for non‑touch devices).
· Accessibility support – Skip link, ARIA attributes, keyboard navigation, and reduced‑motion preferences.
· Privacy‑first analytics – Uses Plausible Analytics for lightweight, cookieless traffic measurement.

---

Requirements

· A modern web browser with JavaScript enabled (Chrome, Firefox, Edge, Safari, or similar).
· An internet connection is required to load:
  · Google Fonts (Inter, Outfit, JetBrains Mono).
  · Font Awesome icons.
  · Tailwind CSS (loaded via CDN).
  · Plausible Analytics script.
· The contact form requires a working Formspree endpoint. Two endpoints are configured (primary and fallback).

---

Installation

Haiere Studio is a single HTML file. To use it:

1. Open the hosted URL in your browser.
2. Alternatively, download the index.html file and open it locally.

To host the website yourself, place the file on any static web server. All styles, scripts, and assets are self‑contained.

---

Usage

Navigation

· The header provides a logo, theme toggle, and a menu button that opens a side drawer with navigation links.
· The side drawer lists all major sections: About, Music, Quotes, Tools, and Contact.
· The drawer also includes language selection, a GitHub link, a RAIA AI link, and legal footer links.

Sections

Section Description
Hero Introduces Hajir with a tagline, call-to-action buttons, and a scrolling ticker of keywords.
About Biographical information, role tags, and statistics (tools released, music releases, original songs, privacy commitment).
RWR-AMA A dedicated promotional card linking to a related project.
Music Embedded Signature Music player for streaming original tracks.
Quotes A grid of four inspirational quotes with author attribution.
Tools A filterable list of eight free web tools with descriptions and "Open Tool" buttons.
Contact A contact form with validation, submission status, and a fallback message with social media links.
Footer Logo, tagline, social media links, footer navigation, and legal disclaimers.

Tool listing

Tool Category Description
HajirSync Music Generate synchronised LRC lyric files.
Raia Vault Security Generate strong random passwords.
Raia Scrub Security Remove sensitive metadata (e.g., GPS) from photos.
Raia Delta Web Compare two blocks of text and highlight differences.
Raiamify Web A lightweight AI tool for fast assistance.
Raia AI Web AI platform supporting multiple providers.
Calc Web A simple, fast calculator.
Chess Web Classic chess game.

---

Configuration

Language

· The language toggle (ID/EN) in the side drawer switches all text content.
· The selected language is stored in localStorage and persists across sessions.
· Default language is determined by the browser's navigator.language (Indonesian or English).

Theme

· The theme toggle switches between dark and light modes.
· The default theme follows the system preference (prefers-color-scheme).
· The selected theme is stored in localStorage.

Cookie consent

· A cookie banner appears on first visit, offering Accept or Reject options.
· Acceptance stores a haiere-cookie flag in localStorage.
· The banner uses functional cookies only (no tracking cookies are set by the site itself; Plausible Analytics is cookieless).

---

Privacy

· No personal data is stored on any server – all user data remains in the browser's localStorage.
· Contact form submissions are processed via Formspree. Data is not stored on this site's server.
· Analytics – Plausible Analytics is used, which is cookieless and does not collect personal data. It only tracks aggregate page views.
· External services – The site links to GitHub, Instagram, SoundCloud, Reddit, X, Quora, and Discord. Each platform operates under its own privacy policy.

---

Troubleshooting

· Contact form does not send – Ensure the Formspree endpoints are valid and accessible. The form uses a primary endpoint (mpqkqanp) and a fallback (xgvkobyl). If both fail, the form will show an error message.
· Theme not persisting – Check that your browser allows localStorage and that you are not in private/incognito mode.
· Language not switching – Ensure JavaScript is enabled. The language toggle updates all data-i18n and data-i18n-placeholder elements.
· Music player does not load – The player is embedded via an iframe pointing to https://haiere.github.io/signature-music. If the page fails to load, the fallback link below the player provides a direct link.
· Animations are disabled – If you have prefers-reduced-motion enabled in your system settings, all animations are simplified or disabled. This is intentional and respects user preferences.

---

Development

The application is a single index.html file. To modify or extend it:

· Edit the HTML structure directly.
· CSS styles are located in the <style> block at the top of the file.
· JavaScript logic is at the bottom of the file, inside the <script> tag.
· Translations are stored in the i18n object in the JavaScript.
· The site uses Tailwind CSS via CDN, with a custom configuration for dark mode and extended font families.

Adding a new tool

1. Add a new <li> element to the #tools-container with the tool-card class.
2. Set the data-category attribute to an existing category (music, security, web) or create a new one.
3. Add the data-i18n attributes for title and description.
4. Add translations for the new keys in the i18n object.

Adding a new translation

1. Locate the i18n object in the JavaScript.
2. Add a new language key (e.g., fr).
3. Copy the id or en object and translate all string values.
4. The language toggle will automatically recognise the new key.

---

Author

Developed by Hajir (Haiere) – a web developer, AI builder, and musician.

---

License

This website and its content are the property of Haiere. All rights reserved. For licensing inquiries, contact via the website.

---

Last updated: 2026

# Haiere Studio

A personal portfolio and tool hub for **Hajir Stein**, showcasing web development projects, free privacy-first tools, and an original music collection.

> **Status:** Active  
> **Type:** Client-side static website  
> **Technologies:** HTML5, CSS3, JavaScript, Tailwind CSS  
> **Last updated:** August 12, 2026

***

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Website Sections](#website-sections)
- [Available Tools](#available-tools)
- [Configuration](#configuration)
- [Privacy](#privacy)
- [Project Structure](#project-structure)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [Author](#author)
- [License](#license)

***

## Overview

**Haiere Studio** is a single-page portfolio website that acts as the personal hub for **Hajir Stein**, a web developer, AI builder, and musician.

The website presents:

- Free browser-based digital tools.
- Web development projects.
- Original music releases.
- A collection of inspirational quotes.
- Contact and social media channels.

The application runs entirely on the client side and does not require a custom backend. It features a responsive glassmorphism interface, bilingual content, dark/light themes, interactive animations, and privacy-first analytics.

***

## Features

- **Tool directory** — Browse free tools such as HajirSync, Raia Vault, Raia Scrub, Raia Delta, Raiamify, Raia AI, Calc, and Chess.
- **Music showcase** — Stream original tracks through the embedded Signature Music player.
- **Quote collection** — Display selected inspirational quotes related to the creator’s philosophy.
- **Contact form** — Submit messages through Formspree with primary and fallback endpoints.
- **Bilingual interface** — Switch between Indonesian and English.
- **Dark and light themes** — Detect the system preference and allow manual switching.
- **Persistent preferences** — Store language and theme selections in `localStorage`.
- **Glassmorphism design** — Use backdrop blur, subtle shadows, gradients, and smooth hover effects.
- **Interactive visual effects** — Include spotlight cursor effects, tilt cards, and magnetic buttons on compatible non-touch devices.
- **Responsive layout** — Optimized for desktop, tablet, and mobile screens.
- **Accessibility support** — Include skip links, ARIA attributes, keyboard navigation, and reduced-motion support.
- **Privacy-first analytics** — Use Plausible Analytics for lightweight, cookieless traffic measurement.
- **Cookie consent** — Provide Accept and Reject options for functional cookie preferences.

***

## Requirements

- A modern web browser with JavaScript enabled.
- An internet connection to load external resources, including:
  - Google Fonts: Inter, Outfit, and JetBrains Mono.
  - Font Awesome icons.
  - Tailwind CSS via CDN.
  - Plausible Analytics.
- A valid Formspree endpoint for contact form submissions.

No backend, database, package manager, or build process is required.

***

## Installation

### Run Locally

Clone the repository:

```bash
git clone <REPOSITORY-URL>
cd <PROJECT-DIRECTORY>
```

Start a local web server using Python:

```bash
python3 -m http.server 8000
```

Open the website at:

```text
http://localhost:8000
```

For simple testing, you can also open `index.html` directly in a browser. A local web server is recommended for more accurate testing of external resources, forms, and relative paths.

### Deployment

Haiere Studio is a static website and can be deployed to:

- GitHub Pages.
- Cloudflare Pages.
- Netlify.
- Vercel.
- Any compatible static web server.

Upload the project files to the deployment directory and make sure `index.html` is used as the entry point.

***

## Usage

### Navigation

The header contains:

- Haiere Studio logo.
- Theme toggle.
- Menu button.
- Side navigation drawer.

The side drawer provides links to:

- About.
- Music.
- Quotes.
- Tools.
- Contact.
- GitHub.
- RAIA AI.
- Legal documentation.

### Theme Switching

Use the theme toggle to switch between dark and light modes.

- The initial theme follows the browser’s `prefers-color-scheme` setting.
- Manual changes are saved in `localStorage`.
- The selected theme persists across sessions.

### Language Switching

Use the `ID/EN` language toggle inside the side drawer.

- All supported text content is translated.
- The selected language is saved locally.
- The default language is determined by `navigator.language`.
- Indonesian browsers default to Indonesian; other languages default to English.

### Cookie Consent

A cookie consent banner appears during the first visit.

Available options:

- **Accept** — Stores the `haiere-cookie` preference in `localStorage`.
- **Reject** — Rejects optional consent preferences.

The website itself uses functional browser storage only. Plausible Analytics is cookieless.

***

## Website Sections

| Section | Description |
|---|---|
| Hero | Introduces Hajir with a tagline, call-to-action buttons, and a scrolling keyword ticker. |
| About | Presents biography, role tags, statistics, released tools, music releases, and privacy commitments. |
| RWR-AMA | Displays a promotional card linking to a related project. |
| Music | Embeds the Signature Music player for streaming original tracks. |
| Quotes | Shows a grid of four inspirational quotes with author attribution. |
| Tools | Provides a filterable directory of free browser-based tools. |
| Contact | Includes a validated contact form, submission status, and social media links. |
| Footer | Contains the logo, tagline, social links, navigation, and legal disclaimers. |

***

## Available Tools

| Tool | Category | Description |
|---|---|---|
| HajirSync | Music | Generate synchronized LRC lyric files. |
| Raia Vault | Security | Generate strong random passwords. |
| Raia Scrub | Security | Remove sensitive metadata, such as GPS data, from photos. |
| Raia Delta | Web | Compare two blocks of text and highlight their differences. |
| Raiamify | Web | Lightweight AI tool for fast assistance. |
| Raia AI | Web | AI platform with support for multiple providers. |
| Calc | Web | Simple and fast calculator. |
| Chess | Web | Classic browser-based chess game. |

***

## Configuration

### Language

The language system is controlled by the `i18n` object in `script.js`.

- Supported languages: Indonesian and English.
- Language preference is stored in `localStorage`.
- Text content uses `data-i18n` attributes.
- Input placeholders use `data-i18n-placeholder` attributes.

### Theme

The theme system supports:

- Dark mode.
- Light mode.
- System preference detection using `prefers-color-scheme`.
- Persistent storage through `localStorage`.

### Contact Form

The contact form uses Formspree with two configured endpoints:

- Primary endpoint: `mpqkqanp`.
- Fallback endpoint: `xgvkobyl`.

Replace these values with your own Formspree endpoints if you deploy a customized version of the site.

***

## Privacy

Haiere Studio is designed with a privacy-first approach.

- No personal data is stored on a custom Haiere server.
- Theme, language, and consent preferences remain in the browser’s `localStorage`.
- Contact submissions are processed by Formspree and are not stored on the website’s own server.
- Plausible Analytics is cookieless and measures aggregate traffic data.
- External links may lead to GitHub, Instagram, SoundCloud, Reddit, X, Quora, Discord, and other platforms.
- Each external platform operates under its own privacy policy.

For complete information, refer to the official **Privacy Policy** and **Cookie Policy**.

***

## Project Structure

```text
.
├── index.html   # Main page structure and content
├── style.css    # Custom styles and responsive layout
├── script.js    # Interactions, translations, themes, and forms
└── README.md    # Project documentation
```

If the current repository still uses a single-file implementation, the HTML, CSS, and JavaScript may be contained in `index.html`. For easier maintenance, separating them into `index.html`, `style.css`, and `script.js` is recommended.

***

## Development

### Main HTML

Edit `index.html` to modify:

- Page structure.
- Sections.
- Tool cards.
- Navigation.
- Forms.
- Accessibility attributes.
- `data-i18n` and `data-i18n-placeholder` attributes.

### CSS

Edit `style.css` to modify:

- Colors.
- Themes.
- Typography.
- Glassmorphism effects.
- Responsive breakpoints.
- Animations.
- Card layouts.
- Print behavior.

Tailwind CSS is loaded through a CDN and may be extended using the custom configuration defined in the page.

### JavaScript

Edit `script.js` to modify:

- Navigation drawer behavior.
- Theme switching.
- Language switching.
- Translation handling.
- Tool filtering.
- Contact form submission.
- Cookie consent.
- Interactive visual effects.
- `localStorage` behavior.

No build or compilation step is required. Refresh the browser after making changes.

***

## Adding a New Tool

1. Add a new `<li>` element inside `#tools-container`.
2. Add the `tool-card` class.
3. Set the `data-category` attribute to `music`, `security`, or `web`.
4. Add a new category if required.
5. Add `data-i18n` attributes for the tool name and description.
6. Add translations for the new keys inside the `i18n` object.
7. Add the tool URL and button label.
8. Test filtering, responsive layout, keyboard navigation, and both languages.

Example:

```html
<li class="tool-card" data-category="web">
  <h3 data-i18n="tools.example.title">Example Tool</h3>
  <p data-i18n="tools.example.description">
    Tool description.
  </p>
  <a href="/example-tool" class="tool-button">
    Open Tool
  </a>
</li>
```

***

## Adding a New Translation

1. Open `script.js`.
2. Locate the `i18n` object.
3. Add a new language key, such as `fr`.
4. Copy the structure from `id` or `en`.
5. Translate all string values.
6. Add the language to the language selector.
7. Test every section, placeholder, button, and error message.

Example:

```javascript
const i18n = {
  id: {
    // Indonesian translations
  },
  en: {
    // English translations
  },
  fr: {
    // French translations
  }
};
```

***

## Troubleshooting

### Contact Form Does Not Send

- Confirm that the Formspree endpoints are valid.
- Check whether the endpoints are accessible.
- Verify that all required form fields have valid names.
- Inspect the browser DevTools Console and Network panel.
- Confirm that the fallback endpoint is configured correctly.

### Theme Preference Is Not Persisting

- Make sure the browser allows `localStorage`.
- Avoid private or incognito browsing mode.
- Check for storage-related errors in the DevTools Console.
- Clear the site data and select the theme again.

### Language Is Not Switching

- Ensure JavaScript is enabled.
- Check that translation keys exist in both language objects.
- Verify the `data-i18n` and `data-i18n-placeholder` attributes.
- Check the DevTools Console for JavaScript errors.

### Music Player Does Not Load

The Signature Music player is embedded through:

```text
https://haiere.github.io/signature-music
```

If the iframe does not load, use the fallback link below the player to open the music player directly.

### Animations Are Disabled

Animations may be simplified or disabled when the operating system has `prefers-reduced-motion` enabled. This is intentional and helps respect user accessibility preferences.

***

## Author

Developed by **Hajir Stein**, also known as **Hajir** or **Haiere**.

Roles include:

- Web developer.
- AI builder.
- Prompt engineer.
- Digital tool creator.
- Musician.

***

## License

This website and its content are the property of **Haiere**.

**All rights reserved.** For licensing inquiries, contact Haiere through the official website.