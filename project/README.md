# Kidney Praktikum Brandbook 2.0 Design System

Переиспользуемый пакет правил, токенов, исходных активов, превью и прикладных компонентов для «Кидней.Практикум». Пакет обновляет зарегистрированную систему `user:kidney-praktikum-brandbook-2-0` на месте.

## Обновление пакета · 15 ноября 2026

- Добавлены 33 прикладных компонента, включая Astryx Layout, Theme, ChatLayout, composer, формы, таблицы и пресеты плотности.
- Добавлена постерная студия с форматами 4:5, 9:16, 16:9 и 70×140 мм, библиотекой блоков и печатными проверками.
- Добавлены локальные WOFF2-шрифты, новые превью, исходные примеры и маркетинговый разбор восьми событий.
- Обновлены `DESIGN.md`, `SKILL.md`, `PROVENANCE.md`, токены и манифесты.
- Исходные `posters/`, `slides/`, `uploads/` и `assets/references/` сохранены без удаления.
- Внешние музейные и промоизображения в публичный репозиторий не включены. Доска содержит разборы и ссылки на официальные источники, а изображения только из исходных материалов репозитория.

## Product Overview

The product is Кидней.Практикум, the continuing-medical-education sub-brand of the Кидней pediatric clinic in Makhachkala. Its audience is practicing pediatricians, ultrasound specialists and vaccinologists.

The primary UI surfaces are program landing pages, course cards, speaker cards and enrollment forms, supported by posters, social cards and 16:9 slides. The core capabilities are program presentation, exact speaker credentials, date and price communication, and enrollment request collection.

- **What the product is:** дополнительное профессиональное образование врачей.
- **Primary UI surfaces:** постеры, соцсети, слайды 16:9, landing-страницы, карточки курсов и спикеров, формы записи.
- **Core capabilities:** публикация программ и регалий, даты и стоимость, сбор заявки, указание лицензии и диплома ФИС ФРДО.
- **Source evidence:** [README.md](context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/README.md), [colors_and_type.css](context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/colors_and_type.css) и исходные landing components.
- **Source repository:** [batdalovbulat-design/kidney-praktikum-brandbook-2.0](https://github.com/batdalovbulat-design/kidney-praktikum-brandbook-2.0).

Это самостоятельная визуальная система, а не набор правил родительской клиники: без маскота «Киди», красного `#E50046`, navy `#282F5D` и детской интонации.

## Source Context

- Evidence note: `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0.md`.
- Снимки: `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/`.
- Astryx: [meta/astryx](https://github.com/meta/astryx), evidence note `context/github/meta-astryx.md`, снимки `context/github/meta-astryx/files/`.
- Метод intake, записанный командой: `git-clone` для обоих репозиториев.
- Происхождение, конфликты источника и ограничения: `PROVENANCE.md`.

Первоначальные автоматические значения Inter и `#1677ff` удалены из активной системы, потому что источник их не подтверждает.

## Start Here

| Что нужно | Файл |
| --- | --- |
| Канонические правила продукта и дизайна | `DESIGN.md` |
| Токены цвета, типографики, spacing, motion | `colors_and_type.css` |
| Машинно-читаемые атрибуты бренда | `brand.json` |
| Инструкция для будущего агента | `SKILL.md` |
| Происхождение и границы доказательств | `PROVENANCE.md` |
| Обзорная галерея зарегистрированной системы | `system/index.html` |
| Прикладной интерфейс | `ui_kits/app/index.html` |
| Постерная студия | `preview/typography-campaign-editor.html` |

## Package Contents

- `DESIGN.md` — продукт, визуальные основы, цвет, тип, spacing, layout, компоненты, motion, voice и анти-паттерны.
- `colors_and_type.css` — единый источник CSS custom properties и семантических текстовых классов.
- `brand.json` — название, контекст, логотип, палитра, гарнитуры, voice и seed для генерации производных тем.
- `system/` — перегенерированные light/dark/compact tokens, переменные, component kits, artifact examples и gallery entry.
- `assets/logo/logo_main.svg` и `assets/logo/logo_main.png` — настоящие исходные логотипы.
- `fonts/` — локальные Roboto Condensed и Onest WOFF2, лицензии OFL и точные источники файлов.
- `preview/` — 22 новые review-карточки в дополнение к исходным превью, общий `shared.css`.
- `assets/references/` — исходные изображения «Кидней.Практикум». Внешние музейные и промоизображения в публичную версию не включены.
- `source_examples/project/ui_kits/landing/` — семь полных оригинальных JSX-компонентов.
- `source_examples/project/_ds_bundle.js` — сохранённый исходный browser bundle.
- `source_examples/packages/` и `source_examples/docs/specs/components/` — исходные Astryx Layout, Theme и Chat contracts.
- `ui_kits/app/` — запускаемый React/Babel browser entry, тридцать три модульных компонента, базовые, расширенные Astryx-стили, постерная студия и отдельное руководство.
- `ui_kits/app/poster.css` — типографика и геометрия студии, библиотеки блоков и печатных проверок.
- `context/` — исходный manifest и GitHub evidence snapshots.

`build/` отсутствует: intake не обнаружил runtime/installer/tray assets. `fonts/` содержит четыре официальных variable WOFF2-файла Roboto Condensed и два Onest для кириллицы и латиницы, `OFL.txt`, `OFL-Onest.txt` и `credits.json`; они подключены локально через `@font-face`. Onest работает только в постерной серии.

## Preview Manifest

| Exact path | Что проверить | Подтверждённые компоненты, токены и активы |
| --- | --- | --- |
| `preview/colors-primary.html` | Роли белого, чёрного, кремового, оранжевого и CTA blue; отдельную зону постерных синих | `--white`, `--black`, `--cream`, `--orange`, `--blue`; scoped `--blue-soft`, `--blue-bright`, `--blue-deep` |
| `preview/colors-theme-light.html` | Белые, кремовые и оранжевые секции, читаемость текста, CTA и price oval | Светлые поверхности из `README.md`; `CourseCard`, `Stats`, `SiteHeader` |
| `preview/colors-theme-dark.html` | Чёрную секцию записи, белый текст, вторичный `#BBBBBB`, оранжевый submit | `EnrollForm.jsx`; `--true-black`, `--fg-on-dark-muted`, `--orange` |
| `preview/typography-specimens.html` | Roboto Condensed, uppercase display, тесный line-height, числа и полные регалии спикера | `--font-sans`, type scale 11–72px; паттерн `SpeakerTile`; локальные WOFF2 |
| `preview/typography-campaign-editor.html` | Живой редактор: поля, четыре формата, безопасное поле, ч/б портрет и экспорт PNG | `PosterCampaignEditor`, `PosterCanvas`; Onest, постерные токены, исходный логотип |
| `preview/typography-poster-blocks.html` | Десять блоков серии: линзы, диагонали, овал даты, цена, pill, регалии | `PosterBlocks`; постерный README источника, `--bg-poster-v2`, `assets/logo/logo_main.svg` |
| `preview/typography-print-check.html` | Проверки вылета, кегля, переносов, осиротевшей строки, фото и контраста | `PrintCheck` и `measurePoster`; правила 3 мм / 5 мм и 300 dpi |
| `preview/typography-references.html` | 8 официальных кампаний с разбором аудитории, оффера, доверия, CTA и переноса в «Практикум»; 4 исходных постера отдельно как приёмы формы | Ссылки на официальные источники PAS, IDWeek, RSNA, ASA, SXSW EDU, SXSW, Figma и Microsoft; исходные `assets/references/*.jpg`; внешние изображения не включены |
| `preview/spacing-tokens.html` | Все девять шагов и их масштаб относительно друг друга | `--space-1`…`--space-9`: 4–96px; `CourseGrid`, `Hero`, `EnrollForm` |
| `preview/spacing-radius.html` | Прямые блоки, pill и круг; границу допустимых web-исключений | `--radius-0`, `--radius-pill`; `CourseCard`, `Hero`, `EnrollForm` |
| `preview/spacing-shadows.html` | Плоскую карточку по умолчанию и два редких источника глубины | `--shadow-print`, `--shadow-soft`; `CourseGrid`, `SiteFooter`, `EnrollForm` |
| `preview/components-buttons.html` | Primary, secondary, disabled, orange on dark, price/date pills и тонкую стрелку | `SiteHeader`, `EnrollForm`, `CourseCard`; hover/focus/press tokens |
| `preview/components-inputs.html` | Постоянные labels, нижние линии, select и тёмную компоновку полей | Исходный `EnrollForm.jsx`; путь к рабочей проверке в UI-kit |
| `preview/components-course-cards.html` | Три фона, uppercase title, дату, синий price oval и плотность | Исходные `CourseGrid.jsx` и `CourseCard`; демонстрационные даты/цены явно отмечены |
| `preview/brand-assets.html` | Настоящие SVG и PNG через `<img>`, полный кадр и разные пропорции | `assets/logo/logo_main.svg` 4:1; `assets/logo/logo_main.png` 800×800px, 1:1 |
| `preview/astryx-layouts.html` | Переключение Sidebar/Dual panel, независимую прокрутку content и selected-состояние | `LayoutSidebarLayout`, `LayoutDualPanelLayout`, `ChatLayout`; фирменные panels и spacing |
| `preview/astryx-theme.html` | Локальное Light/Dark переключение без изменения root theme | `Theme`, `ThemeNested`, `ThemeSwitcher`; только существующие brand tokens |
| `preview/astryx-composer.html` | Draft, disclosure, Enter/Shift+Enter, disabled empty state и локальный status | `ChatComposer`, `ChatComposerInput`, `ChatComposerDrawer`; без имитации CRM |
| `preview/astryx-forms.html` | Dialog, Popover, Dropdown, Selector, Segmented Control и Banner с реальными состояниями | Native dialog, keyboard menu, roving tabindex, labels, status и return focus |
| `preview/astryx-data.html` | Сортировку Table, выбор List и мобильные карточки без горизонтального скролла | `AstryxTable`, `AstryxList`, `AstryxDataViews`; программы и спикеры |
| `preview/astryx-presets.html` | Переключение compact/default/comfortable/gigantic и минимальные цели 44px | `UNIFIED_PRESETS`; `AstryxDensity` с сохранением brand tokens |
| `preview/astryx-library.html` | Поиск, фильтр категории, счётчик и пустое состояние библиотеки | `AstryxPatternLibrary`; рабочие ссылки на все профильные превью |

## Reuse Workflow

1. Прочитайте `DESIGN.md` и определите поверхность: постер, слайд, соцсеть или интерфейс.
2. Подключите `colors_and_type.css` и сохраните относительные пути `fonts/`.
3. Откройте профильную карточку из Preview Manifest и ближайший оригинал в `source_examples/`.
4. Для интерфейса используйте `ui_kits/app/index.html` и компоненты из `ui_kits/app/components/`.
5. Логотип копируйте из `assets/logo/` вместе с новым артефактом. Не перерисовывайте знак и не набирайте его текстом.
6. Для спикера получите настоящий портрет и точные регалии. Не подставляйте сгенерированного человека.
7. Проверьте актуальность дат, цен, статистики и юридического текста до публикации.
8. При изменении базового seed обновите `brand.json` и перегенерируйте `system/` штатным finalize-процессом; затем восстановите канонический `DESIGN.md`, если генератор заменил его programmatic-выгрузкой.

## Applied Kit

`ui_kits/app/index.html` монтирует `App` из тридцати трёх JSX-файлов: исходные роли, базовые композиционные модули, Astryx Layer и постерная студия. Кроме scoped themes, Layout и Composer добавлены Dialog, Popover, Dropdown, Selector, Segmented Control, Banner, Table, List, Density Presets, Pattern Library, DataViews, FormsGallery и постерные модули `PosterCanvas`, `PosterCampaignEditor`, `PosterBlocks`, `PrintCheck`, `PosterStudio`. Подробности — в `ui_kits/app/README.md`.

## Known Gaps

- В доказательствах нет реальных портретов спикеров, runtime icons и дополнительных logo variants; студия показывает фирменную заглушку с инициалами и требует загрузить настоящий портрет.
- Исходный репозиторий сохранил только `posters/README.md`, без HTML-файлов постеров; редактор собран по этой спецификации, а не по пиксельному оригиналу.
- Onest подключён локально и работает только в постерной серии; интерфейс остаётся на Roboto Condensed.
- Демонстрационные даты, цены и программа исходного макета не подтверждены как текущие бизнес-данные.
- Внешние музейные и промоизображения не включены в публичный репозиторий. Они остаются только в локальном рабочем архиве для внутреннего анализа. В публичной доске сохранены ссылки и текстовые разборы.
- Браузер сохраняет PNG в RGB; CMYK-профиль и печатный PDF проверяются в типографии. Кнопка «Печать / PDF» открывает системный диалог, основной файл для типографии — PNG с вылетом.
- Внешние CDN нужны только для React/Babel в прикладном kit; Roboto Condensed и Onest доступны локально.
