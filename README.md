# Bar & Dinner 88 | Digital Solution by New Era Agency

## Overview

Single-page digital presence for **Bar & Dinner 88**, a premium restaurant and bar on **Vitosha Boulevard, Sofia**. The build targets a dark, cinematic atmosphere—obsidian base, gold accents, glass panels, and motion-led storytelling—while keeping performance and maintainability in mind for a local hospitality brand.

## Tech stack


| Layer        | Implementation                                                                                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Markup       | HTML5, semantic landmarks, accessibility-minded patterns                                                                                                                  |
| Styling      | **Tailwind CSS** (CDN) with project-specific `tailwind.config` inline; additional **scoped CSS** in `<style>` inside `index.html` (no separate `styles.css` in this repo) |
| Scripting    | **Vanilla JavaScript** (`app.js`)                                                                                                                                         |
| Motion       | **GSAP 3** + **ScrollTrigger** (CDN)                                                                                                                                      |
| Icons        | **Lucide** (UMD)                                                                                                                                                          |
| Typography   | **Google Fonts** — Cormorant Garamond, DM Sans                                                                                                                            |
| Integrations | **Tablein** booking iframe, **Google Maps** embed                                                                                                                         |
| SEO assets   | `robots.txt`, `sitemap.xml`; meta description, Open Graph, Twitter cards in `index.html`                                                                                  |


## Key features

- **Bilingual interface** — Bulgarian default and English via a shared translation map (`TRANSLATIONS` in `app.js`); `lang` / `data-lang` on `<html>`, live text swap for `data-i18n`* attributes.
- **Mobile-first layout** — responsive grid, drawer navigation, touch-friendly targets, safe-area padding for the sticky booking strip.
- **Digital menu** — on-page menu with category tabs (breakfast / lunch / dinner / drinks); structured for content updates without a framework rebuild.
- **Reservations & contact** — Tablein widget, enquiry form with client-side validation, hours and address blocks.
- **Motion & depth** — scroll-triggered reveals, hero intro timeline, premium hover treatment on cards, optional hero parallax on fine pointers; reduced-motion paths respected.
- **Trust & conversion** — social-proof strip, urgency copy near booking, persistent bottom CTA that tucks away while the booking section is in view.

*Note: Ukrainian (UA) locale and QR-to-PDF menu flows are not wired in the current codebase; both can be added as a scoped engagement.*

## File map


| File                         | Role                                                                                                  |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| `index.html`                 | Structure, SEO meta, Tailwind config hook, component markup, embedded critical/custom CSS             |
| `app.js`                     | i18n, navigation, menu filtering, GSAP/ScrollTrigger, gallery parallax, forms, preloader coordination |
| `robots.txt` / `sitemap.xml` | Crawl hints (update canonical domain before production)                                               |


## Поддръжка

Този проект е разработен и се поддържа от New Era Agency. За актуализации на менюто, цените или техническа поддръжка, моля свържете се с нас.

## Credits

**Rodion Oleksandrovych** — Founder, New Era Agency.