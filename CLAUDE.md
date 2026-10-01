# Aistear — Project Context

Marketing site for **Aistear**, an Islamic education institute for children in Lahore, Pakistan.
Live at https://aistearedu.org (see `CNAME`).

> Note: `../CLAUDE.md` (in `Downloads/`) describes a different project ("Tasleem Men", Next.js).
> It does **not** apply here. This repo is a static Jekyll site.

## Stack
- **Jekyll 3.10** (Ruby), Liquid templates, kramdown (GFM). No Node, no build tooling, no npm.
- Plain hand-written CSS (`assets/css/style.css`) and vanilla ES5 JS (`assets/js/main.js`).
- External CDNs: Google Fonts (Reem Kufi, Open Sans, Amiri) and Font Awesome 6.5.1.
- Hosting: GitHub Pages style (CNAME at repo root). No backend, no forms — every call-to-action
  goes to WhatsApp.

## Commands
Ruby is installed at `C:\Ruby33-x64` (Windows).
- Install gems: `bundle install`
- Dev server: `bundle exec jekyll serve` (http://localhost:4000, live rebuild)
- Build: `bundle exec jekyll build` (output in `_site/`, git-ignored)

There are no tests or linters. Verify changes by building and viewing pages.

## Layout of the repo
```
_config.yml            Site settings + contact info (whatsapp_number, phone, email, address, linkedin)
_data/
  programs.yml         Source of truth for the program streams (drives nav, footer, home, stream pages)
  events.yml           upcoming[] and past[] events (drives events.md)
  faculty.yml          Educators (drives the team section in about.md)
  testimonials.yml     Parent feedback (drives "What Our Families Say" on the home page)
_layouts/
  default.html         Shell: head-meta + nav + <main> + footer
  program-stream.html  Stream page: looks up the program in _data/programs.yml by page.slug
  event.html           Event detail page: looks up the event in _data/events.yml upcoming[] by page.slug
_includes/
  head-meta.html       <head>: title, meta, fonts, Font Awesome, CSS (cache-busted with site.time)
  nav.html             Header; Programs dropdown is generated from site.data.programs
  footer.html          Footer + back-to-top + main.js script tag
  cta-whatsapp.html    Reusable WhatsApp button (params: text, message, class)
  paper-tear.html      Decorative torn-paper SVG divider (param: color)
  offering-card.html   Compact program card with optional poster (params: item, label, past, delay).
                       Program + event cards share the .card / .card-grid styles in style.css.
index.html             Home: hero, about + stats, program stream cards, why-us, testimonials, CTA
about.md, programs.md, events.md, contact.md       Pages linked from the nav (faculty lives inside about.md)
programs/<slug>.md     One per stream; front matter `slug` must match _data/programs.yml
events/<slug>.md       Event detail pages (front matter only: layout: event, slug, title, description);
                       slug must match _data/events.yml upcoming[].slug
assets/img/programs/   Program posters (4:5, referenced as `poster:` in programs.yml)
assets/img/events/     Event posters/photos (4:5, referenced as `image:` in events.yml)
assets/css/style.css   All styles, grouped by /* ---------- Section ---------- */ comments
assets/js/main.js      Nav toggle/dropdown, back-to-top, .reveal scroll-in, stat count-up,
                       Arabic falling-letter burst on the home Programs section
assets/img/, assets/video/
```

## How things fit together
- **Program streams are data-driven.** Adding/renaming a stream = edit `_data/programs.yml`
  (slug, name, icon = Font Awesome class, accent color, summary, focus, ongoing_programs,
  workshops, past_programs) **and** add `programs/<slug>.md` with matching `slug:` front matter.
  The `programs/` path gets `layout: program-stream` automatically via `_config.yml` defaults,
  so the `.md` body is only the intro paragraph. Nav, footer, and home cards update on their own.
- Current streams: Tarteel, Tasdeed, Bayaan, Tahqeeq, e-Maktab. Ihsan is no longer a stream —
  per the client, its workshops live on the Events page instead.
- **Dated offerings don't expire on their own.** When a running program or event ends, move it
  to `past_programs` / `past` by hand (and delete the event's `events/<slug>.md`).
- Client-confirmed categorisation: Sacred Strokes (Kufic calligraphy) is **Tahqeeq**; The Mighty
  Ayah is **e-Maktab**. Spelling is "Mauritanian Method" (not "Muratania"). Home page copy says "Five Program Streams"
  and the stats card hardcodes `data-target="5"` — keep these in sync if the count changes.
- **Fees:** `fee: null` renders "Contact us on WhatsApp for current fee details". Fill real values
  in `programs.yml` only.
- **WhatsApp CTAs:** always use `{% include cta-whatsapp.html %}`; the number comes from
  `site.whatsapp_number`. `message` prefills the chat (URL-encoded automatically).
- **Links** use `{{ '/path/' | relative_url }}` and `permalink: pretty` (trailing-slash URLs).
- **Scroll animations:** add class `reveal` (optionally `style="transition-delay: Nms"`, usually
  `forloop.index0 | times: 90`). A `<noscript>` rule and a 2s JS fallback keep content visible.
  Stat counters use `<span class="stat-count" data-target="N">0</span>`.
- JS respects `prefers-reduced-motion`.

## Design tokens (from `:root` in style.css)
- Brand blue `#1E88E5` (`--color-blue`) — the exact blue from the Aistear logo, client-confirmed.
  Darker shades of the same hue: `--color-navy` `#0D47A1` (headings, navbar, dark sections
  `.bg-navy`) and `--color-navy-light` `#1565C0`. Hero gradients run navy → blue.
  Hard-coded shadows/tints use `rgba(13, 71, 161, …)` (= the navy).
- Orange `#FB8629` / orange-dark `#E07016` — CTAs, eyebrows, hover
- Charcoal `#383838` body text, grey-light `#F2F2F2` (`.bg-light` sections), grey-mid `#6B7280`
- Per-stream accent colors live in `programs.yml` (`accent`) and are passed as CSS vars
  (`--card-accent`, `--hero-accent`).
- Fonts (client-chosen): headings **Reem Kufi** (Kufic-style "Arabic-looking" English), body
  **Open Sans**, the "Aistear" name only **Bing Bam Boum** (self-hosted, `assets/fonts/`).
  **Amiri** is only for real Arabic-script text (nav/footer motto, falling letters). Arabic motto "النَّاسُ مَعَادِن" appears in nav/footer.

## Conventions
- Prefer CSS classes in `style.css` over inline styles (some sub-page heroes still use inline
  styles — follow the existing pattern if touching them, but don't add more).
- Put repeating content in `_data/*.yml` and loop over it rather than hardcoding HTML.
- Keep JS dependency-free and ES5-compatible (`var`, `function`), matching `main.js`.
- Decorative icons get `aria-hidden="true"`; icon-only links get `aria-label`.
- `CLIENT TODO` comments mark content awaiting confirmation from the client (fees, stats,
  testimonial consent, faculty bios). Don't invent this content — leave the TODO in place.

## Known gaps / gotchas
- Posters are ~0.2–1.2 MB each and should be compressed before going live.
- `assets/video/hero.mp4` and `assets/img/favicon.ico` are unused (the home hero uses
  `heroimage.jpeg`; the favicon is `newfavicon.svg`).
- Files use LF endings; git on Windows may warn about CRLF conversion.
