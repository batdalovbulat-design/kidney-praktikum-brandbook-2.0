---
name: kidney-praktikum-brandbook-2-0
description: Apply the Kidney Praktikum Brandbook 2.0 Design System to Russian-language doctor-facing education interfaces, posters, social assets and slides for Кидней.Практикум. Use the preserved source tokens, real logo, preview cards and applied UI kit instead of inventing a generic clinic style.
user-invocable: true
---

# Kidney Praktikum Brandbook 2.0 Design System

## What is inside

- `README.md` — product context, complete package manifest, exact Preview Manifest and reuse workflow.
- `DESIGN.md` — canonical visual, content, component, motion, voice and anti-pattern rules.
- `colors_and_type.css` — shared Roboto Condensed stack, scoped Onest poster stack, brand colors, type scale, spacing, radii, shadows and motion.
- `brand.json` — registered brand metadata and the seed used for generated themes.
- `assets/` — real SVG and PNG logo files plus the original Practicum images. External museum and event promotional images are not included in the public repository.
- `fonts/` — local Roboto Condensed and Onest variable WOFF2 subsets, OFL licenses and source records.
- `preview/` — focused browser-reviewable cards for color, type, spacing, components, assets and the poster studio.
- `source_examples/` — substantive original JSX components and the captured compiled bundle.
- `ui_kits/app/` — runnable applied interface with modular components and working course selection and enrollment states; `astryx.css` adds scoped layout, dual-panel and composer styles, while `astryx-extended.css` adds forms, tables, density presets and the pattern library.
- `ui_kits/app/poster.css` and `PosterStudio.jsx` — poster editor, ten-block series library and print checks on the same tokens.
- `preview/typography-*.html` — poster editor, poster blocks, the print quality matrix and the marketing reference board with official source links and four original Practicum posters.
- `source_examples/packages/` and `source_examples/docs/specs/components/` — original Astryx Layout, Theme and Chat contracts.
- `preview/astryx-*.html` — interactive scoped theme, sidebar/dual-panel, composer, forms, data, density presets and the pattern library.
- `system/` — generated tokens, variables, kits, artifacts and the registered gallery entry.
- `PROVENANCE.md` — evidence paths, source conflicts and missing-input boundaries.

Check optional `build/` for runtime assets when a future source update supplies it; it is absent in this version. Read `fonts/`, `fonts/OFL.txt` and `fonts/credits.json` for the preserved local Roboto Condensed WOFF2 files and their license.

## Source context

The source repository is https://github.com/batdalovbulat-design/kidney-praktikum-brandbook-2.0. Read `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0.md`, then the snapshots it lists. The bounded intake recorded `git-clone` and preserved 18 files.

Additional composition evidence comes from https://github.com/meta/astryx. Read `context/github/meta-astryx.md` and `source_examples/packages/` plus `source_examples/docs/specs/components/`. Its intake also recorded `git-clone` and preserved 47 snapshots.

The product is Кидней.Практикум, the continuing-medical-education sub-brand of Кидней. Its primary audience is practicing doctors. Do not collapse it into the parent pediatric clinic identity. Astryx supplies composition and behavior only; it does not replace brand tokens or voice.

## When to use this skill

Use for Кидней.Практикум course pages, enrollment forms, program cards, speaker presentations, lecture posters, social announcements and 16:9 educational slides.

Do not use for the parent clinic's pediatric marketing, mascot communications or any artifact that requires the reserved red/navy clinic palette. Do not generate stand-ins for real doctors or redraw the supplied logo.

## How to use

1. Read `README.md` for product context and the current file manifest.
2. Read `DESIGN.md` before making visual or copy decisions.
3. Reuse `colors_and_type.css` tokens instead of introducing one-off colors, font stacks or spacing.
4. Open the matching exact path from `README.md` → `Preview Manifest` and inspect its source.
5. Compare against relevant originals in `source_examples/project/ui_kits/landing/`.
6. For an interface, start from `ui_kits/app/index.html`, `ui_kits/app/README.md` and `ui_kits/app/components/`; for scoped themes, dual-panel layouts or composers, also read `ui_kits/app/astryx.css`, `preview/astryx-*.html` and the original Astryx contracts.
7. Use real files from `assets/`; check optional `build/` and `fonts/` only when those directories actually exist in a later package version.
8. For posters and social announcements, open `preview/typography-campaign-editor.html`, fill real fields, load the real speaker portrait, export PNG and run the print checks before sending the file to production.
9. Keep the manifest synchronized when adding, removing or renaming a preview or component.
10. Confirm current dates, prices, metrics, speaker credentials and legal copy before publication.

## Design system highlights

- Roboto Condensed is the default family; display headlines are uppercase, bold/black and tightly leaded.
- White and `#F5EFE6` cream are the main grounds; `#F39C12` orange is the accent; `#1E3A8A` blue carries CTA/date/price ovals.
- Rectangles and full ovals define the shape language. Avoid generic rounded-card styling.
- Thin 1–1.5px arrows and hairlines replace decorative icon sets.
- Speaker photography belongs in circles or vertical ovals with complete credentials. Original source posters and uploads are preserved in `posters/`, `uploads/` and `assets/references/`; the editor still requires the current speaker photo instead of a generated stand-in.
- Dark enrollment sections use black, white, orange actions and readable `#BBBBBB` secondary text.
- Motion is restrained: 120ms press, 200ms state changes, up to 400ms entries, with reduced-motion support.
- Russian professional copy is factual and peer-to-peer. Avoid slogans, pressure, slang, emoji and unsupported superlatives.
- The blue gradient and Onest treatment belong only to the explicitly scoped poster series, not the default UI system. Onest is bundled locally, so poster headlines do not depend on a network font.
- Poster studio formats are 4:5, 9:16, 16:9 and 70×140 mm. Headlines cap at four lines (16:9 at three), price and date never wrap, and credentials stay complete.
- Print rules: 3 mm bleed, text at least 5 mm from trim, 300 dpi PNG for the poster format. Browser export stays RGB; CMYK conversion happens at print preparation.
- Astryx components stay local to their subtree: `AstryxTheme`, `AstryxLayout`, `AstryxChatLayout`, `AstryxComposer` and `AstryxWorkspace`. Use native `hidden` for collapsed content, `aria-pressed` for selection and trimmed non-empty draft submission.
- Extended modules add native Dialog, Popover, Dropdown, Selector, Segmented Control, Banner, Table, List, Density Presets, DataViews, FormsGallery and Pattern Library. Keep keyboard navigation, aria-sort, roving tabindex, labels and focus restoration.
- Do not add Astryx purple themes, frosted dock blur, external brand marks or a simulated CRM send. Local saves must say that no backend is connected.
