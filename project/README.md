# Кидней.Практикум — Design System

Educational sub-brand of **Кидней** pediatric clinic (Махачкала, Russia). Targets doctors — pediatricians, ultrasound specialists, vaccinologists — with post-graduate medical education. **Not** the parent clinic brand.

> ⚠️ This is **separate** from the parent Kidney clinic brand. Practicum has its own visual language: serious, business-like, conference-grade. No mascot, no red, no rounded display fonts.

## Sources used to build this system

- GitHub: `batdalovbulat-design/praktikum-design-system` — full DESIGN.md, brand-story, tokens (colors/typography/formats), voice/tone, poster + speaker-card patterns, logo, 9 reference posters
- Imported assets are kept under `assets/` (logo + reference posters used as visual research only — not for redistribution)

## Brand at a glance

| | |
|---|---|
| **Type** | Continuing medical education (ДПО) |
| **Audience** | Practicing doctors — pediatricians, ultrasonographers, vaccinologists |
| **License** | Минобрнауки РД № Л035-01227-05/00665847 (diplomas in ФИС ФРДО) |
| **Tone** | Expert, business-like, evidence-anchored |
| **Colors** | Black + white + orange `#F39C12` accent + blue `#1E3A8A` for CTAs |
| **Type** | Roboto Condensed (Light/Regular/Medium/Bold/Black) |
| **Logo** | Geometric "К" block + КИДНЕЙ ПРАКТИКУМ wordmark |
| **Mascot** | None — Киди belongs to the parent clinic only |

## Directions

- **УЗД (flagship)** — primary retraining, 576 academic hours
- **Вакцинопрофилактика** — 2-week course, theory + practice
- **Конференция** — annual scientific-practical
- **Программы для родителей** — садик, простуды, первая помощь, астма

## Index of files

| Path | What's inside |
|---|---|
| `README.md` | This file — context + manifest |
| `SKILL.md` | Agent-skill front-matter; entry point for Claude Code |
| `colors_and_type.css` | All CSS vars (colors + type scale) |
| `fonts/` | Roboto Condensed (Google Fonts variable file) |
| `assets/` | Logo SVG/PNG + reference posters |
| `preview/` | Design system preview cards (palette, type, components) |
| `ui_kits/` | Product UI kits (landing-page mock for Practicum) |
| `slides/` | Sample slide templates (16:9) |

---

## CONTENT FUNDAMENTALS

**Voice.** Expert, business-like, trust-through-credentials. Talks **to a doctor** (peer-to-peer professional). Never to a child or a parent.

**Casing.** Headlines **ВЕРХНИЙ РЕГИСТР Bold/Black** (Roboto Condensed). Speaker surnames also UPPERCASE. Body copy normal sentence case. Numbers stay numerals (`576`, `22 500 ₽`, `24 июля`).

**Person.** Neutral / professional. Not "ты", rarely "вы" — most copy is impersonal infinitives or noun phrases (`Записывайтесь на цикл`, `Старт 24 июля`, `Лектор — Пыков М.И.`).

**Emoji.** None in headlines. Sparingly in carousel body copy if at all. Treat as essentially absent — the brand reads cleaner without them.

**What we say**
- ✅ "Двухнедельный курс по вакцинопрофилактике"
- ✅ "Лектор — Пыков М.И., профессор РМАНПО, автор учебника"
- ✅ "576 академических часов"
- ✅ "По итогам — диплом установленного образца"
- ✅ "Старт 24 июля"

**What we never say**
- ❌ "Крутая лекция!" / "Не упусти!" / "Будет интересно всем"
- ❌ Slogans, exclamation pile-ups, slang, condescending simplification
- ❌ "Подарок к курсу" — this isn't consumer marketing
- ❌ Guarantees ("гарантируем работу"), superlatives without proof ("лучший в России")

**Information density.** High. Posts pack: course type, theme, speaker name + full credentials + university affiliation, start date, format (очный/онлайн), price, license disclaimer when relevant.

**Speaker credentials are mandatory.** Always pull the exact academic title + institution: `профессор РМАНПО`, `д.м.н.`, `автор учебника`, `НМИЦ им. Кулакова`, `МГМСУ`, `Сеченов`, `Пирогов`, `Турнер`. Generic titles ("опытный врач") are not used.

**Legal block** (paid courses): `Лицензия Минобрнауки РД № Л035-01227-05/00665847. Диплом установленного образца с регистрацией в ФИС ФРДО.`

---

## VISUAL FOUNDATIONS

### Colors
Brand black `#000000`, white `#FFFFFF`, accent orange `#F39C12` (with darker `#E67E22` for gradient), CTA blue `#1E3A8A`, warm cream `#F5EFE6` as alternative background. Two CTA conventions: **blue oval** for date / start (`Старт 24 июля`), **orange oval** for "lectures / series" markers. **Never red** (`#E50046` belongs to the parent clinic).

### Typography
**Roboto Condensed only** — narrow, neutral, conference-grade. Display sizes are tight (`line-height: 1.0–1.1`, `letter-spacing: -0.02em`). Headlines BLACK weight (900), body Light (300) or Regular (400). Display headlines fill the full text column edge-to-edge — Roboto Condensed's narrow caps are designed for this.

### Backgrounds
Plain white is the default. Cream `#F5EFE6` for warmth. Solid orange `#F39C12` for high-energy posts. Subtle radial orange glow on white is used as a "brand fingerprint" backdrop. **No** gradients beyond orange-to-dark-orange. **No** photographic full-bleeds, **no** illustrations, **no** repeating patterns. Decoration is geometric and minimal.

### Imagery
**Speaker portraits only.** Always cropped to a vertical oval or perfect circle, with a thin black 1–2px stroke. Photos are color (warm/neutral, business-portrait quality), not B&W, not grainy. The oval frame is the brand's signature; never use rectangular speaker photos.

### Decoration & motifs
Thin black arrows (1–1.5px stroke, 8–10px arrowheads) connect headline → CTA → meta info. Vertical-running headline labels ("ВАКЦИНОПРОФИЛАКТИКА" rotated −90°) are a signature layout. Date / price live inside a **filled oval**, not a rounded rect. Connecting arrows + ovals + uppercase headlines is the entire decorative vocabulary.

### Animation
This brand lives in print + static social. If web/screen requires motion: use 200ms `cubic-bezier(0.4, 0, 0.2, 1)` for hover states; 400ms ease-out for entries. **No bounce**, no parallax, no decorative loops.

### Hover / Press
- Hover on light surfaces: text → orange `#F39C12`. Buttons: shift to slightly darker orange `#E67E22` or invert (white-on-black ⇄ black-on-white).
- Press: 1px translate-Y or scale `0.98`. **No** ripples, **no** color flashes.

### Borders
1px or 1.5px black hairlines. Used on: oval photo frames, divider rules, arrow strokes. Never use mid-grey borders — black or absent.

### Shadows
Effectively none. The system is flat-print. If web needs depth: at most `0 2px 0 #000` (offset-print style) on hover, or a low-contrast `0 1px 2px rgba(0,0,0,0.06)` on raised cards. **No** soft glowing shadows.

### Transparency / blur
Avoid both. The system is opaque and crisp. Single permitted use: a soft radial orange glow at 8–15% opacity behind a centered logo as background fingerprint.

### Corner radii
**Two values only**: `0` (rectangles, blocks, K-logo) and **full oval** (`999px` / 50% on circles). Mid-radii (8px / 16px) are off-brand.

### Cards
A "card" is a white block on cream, or a cream block on white, with **no** shadow, **no** border-radius, **no** border. Hierarchy comes from typographic contrast (UPPERCASE vs body), not from card chrome. The exception: the speaker oval, which is the only floated element with a visible frame.

### Layout
- Generous whitespace (40–80px gutters at A4 / 1080).
- One headline column, full-width, anchored top-left.
- Speaker oval offset right or center; arrow connects label → oval.
- CTA oval bottom-right (date/price), logo bottom-right corner.
- Vertical "ticker" headline (rotated −90°) on the left edge is a frequent variant.

---

## ICONOGRAPHY

This brand barely uses icons. The system relies on **typography + ovals + arrows** to do the work icons usually do.

**What's allowed**
- Thin black **arrows** (line + arrowhead, 1–1.5px stroke). Drawn inline as SVG or with `→`-style flow but rendered as actual line+head.
- Filled black/orange **dots** as bullet markers — used in poster reference (`◆ Длительность: 2 недели`) — kept tiny.
- Filled **ovals** as containers (date / price / topic tag).
- The geometric **K-block** logo mark.

**What's not used**
- No icon font (not bundled, not loaded).
- No emoji.
- No decorative pictograms (medical cross, stethoscope, etc.) — this would dilute the editorial-grade tone.
- No Unicode glyphs as icons (✓, ★, etc.) — replace with weight contrast or arrow.

**If you must add an icon** (e.g. for a web UI in `ui_kits/`): use **Lucide** (CDN: `https://unpkg.com/lucide@latest`) at 1.5px stroke, black, never colored. This is a substitution — flagged because the source brand has no icon kit. Limit to functional UI affordances (chevron, close, menu, search). Never use them in posters or speaker cards.

---

## Iteration notes / caveats

- **Fonts**: Roboto Condensed is loaded from Google Fonts (variable axis). The repo lists `brand/fonts/` but doesn't ship binaries — Google Fonts is the canonical source for this family, so this isn't a substitution.
- **Reference posters** in `assets/references/` are real Practicum work — for visual research only.
- **Logo**: the imported SVG is used everywhere. If the brand team supplies an updated vertical mark, drop into `assets/logo/`.
