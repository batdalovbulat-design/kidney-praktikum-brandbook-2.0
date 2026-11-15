---
name: kidney-praktikum-design
description: Use this skill to generate well-branded interfaces and assets for Кидней.Практикум (Kidney.Practicum) — the educational sub-brand of Kidney pediatric clinic for post-graduate medical training. Use either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping doctor-facing educational materials in Russian.
user-invocable: true
---

# Кидней.Практикум — Brand Skill

Read `README.md` for the full design system: colors, type, voice, visual foundations, iconography, file index.

Other key files in this skill:
- `colors_and_type.css` — drop-in tokens (colors, type scale, motion, radii)
- `fonts/` — Roboto Condensed (Light, Regular, Bold + italics) — bundle these with any artifact
- `assets/logo/` — primary K-block + wordmark logo (SVG + PNG)
- `assets/references/` — real Practicum work for visual reference
- `preview/` — small spec cards demonstrating each token / component
- `ui_kits/landing/` — React landing-page kit with Hero, CourseGrid, SpeakersBlock, EnrollForm, Footer
- `slides/` — 16:9 deck templates (title, speaker, schedule, stats)

## Hard rules

- **Audience is doctors** — pediatricians, ultrasound specialists, vaccinologists. Never childlike, never parent-facing.
- **Russian only.** Headlines in **UPPERCASE Cyrillic**, Roboto Condensed Bold/Black.
- **Never use** red `#E50046`, navy `#282F5D`, the Panton font, the Киди mascot, or heart-kidney shapes — all reserved for the parent clinic.
- **Speaker credentials are mandatory.** Always pull exact title + institution (профессор РМАНПО, д.м.н., НМИЦ им. Кулакова, etc).
- **Two corner radii only:** `0` (rectangles, K-block, posters) or full pill `999px` (date / price ovals). Mid-radii `8/12/16` are usable for web UI cards but never for posters.
- **Photos in oval frames** — circle 1:1 or vertical oval. Never raw rectangles.
- **No icon kit, no emoji.** Use thin black arrows (1.5px stroke) and ovals to do the work icons usually do. If the surface absolutely needs UI icons, use Lucide CDN at 1.5px black — flag it.
- **No shadows, no gradients beyond orange→dark-orange, no decorative SVG illustrations.**

## When invoked

If the user invokes this skill without specific guidance: ask what they want to build (poster, slide, landing, presentation, social card), confirm the audience and event type, ask for speaker info if relevant, then produce HTML artifacts (or production code) using the tokens and components in this skill. Copy assets into the artifact rather than referencing this skill folder.
