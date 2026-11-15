# Provenance

## Primary source

- Repository: https://github.com/batdalovbulat-design/kidney-praktikum-brandbook-2.0
- Intake evidence note: `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0.md`
- Read method recorded by the bounded intake: `git-clone`
- Snapshot root: `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/`
- Intake status: 18 snapshots, no warnings reported by the command.

## Evidence used

| Evidence | Used for |
| --- | --- |
| `README.md` | Product context, audience, voice, visual rules, license copy |
| `colors_and_type.css` | Exact colors, Roboto Condensed stack, type scale, spacing, radii, motion and shadows |
| `ui_kits/landing/*.jsx` | Header, hero, course cards, speaker tiles, stats and enroll form patterns |
| `posters/README.md` | Scoped blue-gradient poster series, lenses, diagonal hairlines and format-specific type |
| `slides/README.md` | 16:9 title, speaker, schedule and stats surfaces |
| `assets/logo/logo_main.svg` | Primary vector logo |
| `assets/logo/logo_main.png` | Raster logo variant |
| `_ds_bundle.js`, `_ds_manifest.json` | Original component composition and source preview inventory |

## Astryx source

- Repository: https://github.com/meta/astryx
- Intake evidence note: `context/github/meta-astryx.md`
- Read method recorded by the bounded intake: `git-clone`
- Snapshot root: `context/github/meta-astryx/files/`
- Intake status: 47 snapshots, no warnings reported by the command.
- Source declares the MIT license in its README; no license file was selected by intake.

Astryx supplies composition and behavior only. Scoped Theme, Layout, ChatLayout and ChatComposer patterns were adapted without importing Astryx's marketing colors, fonts or brand marks. The frosted dock was deliberately not adopted because it conflicts with the brand's flat-print rule.

Preserved originals:

- `source_examples/packages/cli/assets/templates/blocks/components/Layout/*.tsx`
- `source_examples/packages/cli/assets/templates/blocks/components/Theme/*.tsx`
- `source_examples/packages/core/src/theme/Theme.tsx` and `syntax/tokens.ts`
- `source_examples/docs/specs/components/Chat/*.md`
- `source_examples/docs/specs/components/theme/*.md`

## Extended Astryx modules

The expanded layer uses the existing 47 snapshots rather than a second download. `UNIFIED_PRESETS` and component variables come from `apps/docsite/src/app/playground/themeEditor/constants.ts`; Dialog, Popover, Dropdown, Selector, Segmented Control, Banner, Table, List, Density, DataViews, FormsGallery and Pattern Library are adapted locally with Kidney tokens and accessibility rules.

Repeated attempts to acquire an additional evidence bundle were interrupted, so no `meta-astryx-extended.md` evidence note is claimed. No new source assets or runtime files were added.

## Poster studio layer

The poster editor, block library and print checks are built from `posters/README.md` in the primary source snapshot. No poster HTML was captured, so composition follows the written specification: blue gradient with orange glow, four black lenses, white hairlines at 60° and 120°, sentence-case Onest headlines on a solid black block, cream pill, large white price, black logo and circular portraits.

- The poster palette is limited to tokens already registered in `colors_and_type.css`: `--poster-blue-start`, `--blue-bright`, `--poster-blue-end`, `--orange-glow` and `--pill-bg`. It is not used as a general UI background.
- Onest is bundled only for poster headlines and the block library. The interface keeps Roboto Condensed.
- Export is a local canvas render. The preview and the PNG share the same layout function, so what is shown is what is saved. No upload or backend is involved.
- The 70×140 mm format, 3 mm bleed, 5 mm text inset and 300 dpi check are production rules added for print; they are documented in `DESIGN.md` and are not claimed as captured source values beyond the general brand bleed rule.
- Browser export stays RGB. CMYK conversion and the final print PDF are produced at print preparation, not by the studio.

## Reference board

`preview/typography-references.html` собирает восемь реальных маркетинговых кампаний и четыре исторических плаката в отдельном приложении «Приёмы формы».

- Прямая категория: PAS Meeting 2027, IDWeek 2026, RSNA 2026 и ANESTHESIOLOGY. Источники: официальные страницы событий, их навигация, программы, даты, регистрационные сценарии и опубликованные промоизображения.
- Смежная категория: SXSW EDU 2027, SXSW 2027, Figma Config 2027 и Microsoft Build 2026. Разбираются согласование участия, тарифы, адресация по профессиональной роли и social card 1200 × 630 px.
- У каждого современного примера указаны аудитория, оффер, доверие, действие, переносимый приём и отличие для «Кидней.Практикум». Для Microsoft Build страница была в post-event состоянии, поэтому пример ограничен форматом обложки ссылки и не выдаётся за текущий оффер.
- Все восемь изображений лежат локально в `assets/references/marketing/`, длинная сторона не превышает 1600 px. Это официальные Open Graph или homepage assets, преобразованные в WebP без изменения содержания; исходные пиксели и локальные размеры записаны в `assets/references/credits.json`.
- Открытые лицензии на промоизображения не заявлены. Они используются только для внутреннего анализа, не для перепубликации, переработки или тиража.
- Четыре музейных изображения V&A сохранены в приложении как композиционный справочник. Остальные исходные файлы не удалены, но из основной маркетинговой подборки убраны.
- Ничего не сгенерировано: используются только реальные опубликованные материалы.

## Preserved files

- `assets/logo/logo_main.svg` — copied byte-for-byte from the captured source.
- `assets/logo/logo_main.png` — copied byte-for-byte from the captured source; measured at 800×800px.
- `source_examples/project/ui_kits/landing/*.jsx` — substantive original component source copied from snapshots.
- `source_examples/project/_ds_bundle.js` — original compiled browser bundle preserved by intake.
- `fonts/RobotoCondensed-*.woff2` — official Google Fonts variable subsets for Cyrillic and Latin, normal and italic; local files are unmodified.
- `fonts/Onest-Cyrillic.woff2` and `fonts/Onest-Latin.woff2` — official Google Fonts variable subsets for the scoped poster series; local files are unmodified.
- `fonts/OFL.txt`, `fonts/OFL-Onest.txt` and `fonts/credits.json` — licenses, copyright and exact download sources.

The SVG declares `viewBox="40 310 720 180"`, so its intrinsic ratio is 4:1. Preview markup uses that ratio for the SVG and 1:1 for the PNG.

## Not present in captured evidence

- No `build/` or runtime icon files were captured, so no root `build/` directory is claimed.
- No font binaries were captured by the repository intake. Following the source README's canonical Google Fonts route, the package now preserves four official variable WOFF2 subsets under `fonts/`; `colors_and_type.css` binds them locally with `@font-face`. License and source records are in `fonts/OFL.txt` and `fonts/credits.json`.
- No real speaker portraits were captured. New components do not substitute generated people or stock models for named doctors; the poster studio shows an initials placeholder and flags the missing photo.
- No poster HTML files were captured. Only `posters/README.md` survived intake, so the studio reproduces the written system rather than the original pixel layouts.
- Референсная доска опирается на внешние официальные страницы событий и музейную коллекцию, а не на исходный репозиторий. Промоизображения и снимки V&A используются только для внутреннего анализа, без права публикации.
- No linked local code folders, Figma files, uploaded brand resources or public website snapshots were provided.

## Source conflicts resolved explicitly

1. The main README and token CSS name Roboto Condensed; the poster README names Onest for a specific poster series. Roboto Condensed is the system default, while Onest remains a scoped exception without bundled binaries.
2. The main README restricts gradients, while token CSS and the poster README define a blue brand gradient. The package scopes that gradient to the identified poster/hero treatment rather than applying it to all surfaces.
3. The main README requests color speaker portraits; the poster series requests B&W circles. B&W treatment is limited to that series.
4. The initial programmatic extraction declared Inter and `#1677ff`. Those values are absent from the inspected source and were replaced.

## Public repository distribution

The public update preserves the repository's original `posters/`, `slides/`, `uploads/` and `assets/references/`. These source materials were already present in the remote repository and were not removed by the package merge.

External museum and event promotional images are not redistributed. The public `preview/typography-references.html` keeps the marketing analyses and official source links, while its four visual examples come from the repository's own Practicum assets. Full third-party reference scans remain only in the local working archive; the earlier local collection notes above describe that archive rather than files shipped publicly.

The Astryx source examples are accompanied by `source_examples/LICENSE-Astryx-MIT`. Font licenses and exact sources remain in `fonts/`. Host-specific `.artifact.json`, `.od-skills/`, `.od-frames/` and `.file-versions/` files are not part of the public package.

## Package audit

The required package audit was run repeatedly during production. The final package has zero audit errors. Two warnings remain: `readme_missing_product_overview` for `README.md` and `ui_kit_readme_missing_reuse_guide` for `ui_kits/app/README.md`.

Both files contain the requested sections, source references, primary surfaces, core capabilities, component files, usage workflow, design notes and source basis. The warnings persisted after exact heading alignment, English summaries, direct source links and complete rewrites. Treat these as unresolved audit-heuristic warnings, not as missing files or unwritten sections.

This audit record predates the poster studio layer and the reference board. The new poster components, preview cards, local Onest files, V&A reference images and guide updates were not re-audited in this pass; the previously documented two README warnings may still apply.

## Reuse boundary

Reference material is design evidence, not permission to redistribute unprovided posters, portraits or font binaries. Use the preserved logo and source examples according to the repository owner's terms. Confirm current course dates, prices, statistics, speaker credentials and legal copy before outward-facing publication.
