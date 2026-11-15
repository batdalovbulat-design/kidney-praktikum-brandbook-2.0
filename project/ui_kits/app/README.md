# Прикладной UI-kit — Kidney Praktikum Brandbook 2.0 Design System

Готовый браузерный пример образовательного landing-интерфейса «Кидней.Практикум»: навигация, представление программы, каталог курсов, показатели, форма записи и юридический футер.

## Kit Structure

The kit structure is a browser entry (`index.html`), shared component styling (`styles.css`), the Astryx composition layer (`astryx.css` and `astryx-extended.css`), the poster layer (`poster.css`), this reuse guide, and thirty-three source-backed or compositional modules under `components/`.

Откройте `ui_kits/app/index.html`. Страница монтирует `App` через ReactDOM и Babel Standalone. Для загрузки React и Babel нужен доступ к сети. Roboto Condensed подключён локально из `fonts/`. Сборка и установка зависимостей не требуются.

## Component Files

The component files below define the reusable roles and browser composition.

| Файл | Назначение |
| --- | --- |
| `index.html` | Browser entry: подключает общие токены, стили, компоненты и монтирует `App` |
| `styles.css` | Адаптивная компоновка и состояния компонентов на общих токенах |
| `components/App.jsx` | Общее состояние выбранной программы и композиция страницы |
| `components/SiteHeader.jsx` | Настоящий логотип, якорная навигация и CTA записи |
| `components/Hero.jsx` | Первичная переподготовка по УЗД, 576 часов, дата и заявка |
| `components/CourseGrid.jsx` | `CourseGrid` и `CourseCard`; выбор программы для формы |
| `components/Stats.jsx` | Числовые блоки из исходного макета с пометкой о демонстрационных данных |
| `components/EnrollForm.jsx` | Постоянные подписи, проверка на blur/submit, ошибки, успех и повторная заявка |
| `components/SiteFooter.jsx` | Программы, контакты и лицензия |
| `components/Sidebar.jsx` | Ролевая навигация: skip-link и исходный `SiteHeader` |
| `components/AssistantsList.jsx` | Ролевой список программ на исходном `CourseGrid` |
| `components/ChatArea.jsx` | Основная контентная область: Hero, программы, статистика и документ |
| `components/MessageBubble.jsx` | Информационная заметка о дипломе и лицензии |
| `components/InputBar.jsx` | Ролевой composer заявки на исходном `EnrollForm` |
| `components/AstryxTheme.jsx` | Scoped `data-astryx-theme` и `data-theme` без изменения root |
| `components/AstryxLayout.jsx` | Slots header/start/content/end/footer и независимый content |
| `components/AstryxChatLayout.jsx` | Transcript над sticky composer и empty state |
| `components/AstryxComposer.jsx` | Controlled/uncontrolled draft, disclosure, Enter, disabled/stop и status |
| `components/AstryxWorkspace.jsx` | Прикладная sidebar/dual-panel область с выбором программы и локальными запросами |
| `astryx.css` | Геометрия панелей, dock, disclosure, состояний и responsive-перестроение |
| `components/AstryxDialog.jsx` | Native modal с Escape, backdrop close и возвратом фокуса |
| `components/AstryxPopover.jsx` | Контекстная панель с `aria-expanded`, outside click и Escape |
| `components/AstryxDropdown.jsx` | Menu/menuitemradio со стрелками, Home/End и выбором по Enter |
| `components/AstryxSelector.jsx` | Label, helper/error и `aria-describedby` |
| `components/AstryxSegmentedControl.jsx` | Radio group с roving tabindex и клавиатурным выбором |
| `components/AstryxBanner.jsx` | Текстовый status/alert без зависимости от цвета |
| `components/AstryxTable.jsx` | Сортируемые расписания и мобильные карточки строк |
| `components/AstryxList.jsx` | Список программ с выбором и `aria-pressed` |
| `components/AstryxDataViews.jsx` | Расписание, спикеры и программы в одном переключателе |
| `components/AstryxDensity.jsx` | Compact/default/comfortable/gigantic с минимальной целью 44px |
| `components/AstryxPatternLibrary.jsx` | Поиск, категории, счётчик и пустое состояние библиотеки |
| `components/AstryxFormsGallery.jsx` | Прикладная сценарная сборка всех оверлеев и контролов |
| `astryx-extended.css` | Оверлеи, формы, таблицы, пресеты и библиотека без новых цветов и blur |
| `components/PosterCanvas.jsx` | Живой постер на canvas и экспорт PNG в четырёх форматах |
| `components/PosterCampaignEditor.jsx` | Поля кампании, фото, направляющие, серия и кнопки экспорта |
| `components/PosterBlocks.jsx` | Десять блоков постерной серии с назначением и ограничением |
| `components/PrintCheck.jsx` | Проверки вылета, кегля, переносов, фото, логотипа и контраста |
| `components/PosterStudio.jsx` | Вкладки редактора, библиотеки и печатной проверки на общем состоянии |
| `poster.css` | Типографика студии, сетка блоков и таблица проверок на фирменных токенах |

## Usage Workflow

The usage workflow covers course selection, field validation, enrollment feedback and reset.

1. Откройте программу через hero или навигацию.
2. Нажмите «Выбрать программу» в карточке: название подставится в `EnrollForm`, страница перейдёт к форме, фокус окажется на выборе программы.
3. Заполните ФИО и телефон. Ошибки появляются после выхода из поля или попытки отправки, а не заранее.
4. Отправьте форму: успешное состояние использует введённые имя, телефон, специализацию и выбранную программу.
5. «Подать ещё одну» сбрасывает локальное состояние формы и возвращает фокус на ФИО.
6. В Astryx Workspace выберите программу слева, откройте детали composer и сохраните запрос через Enter или кнопку. Он появится в transcript с явной пометкой о локальном сохранении.
7. Откройте лицензию через native Dialog, Popover и выберите программу через Dropdown. Selector и Segmented Control работают с клавиатуры.
8. В Data Views переключите расписание, спикеров и программы. Отсортируйте таблицу по колонкам. В Pattern Library выполните поиск и выберите плотность.
9. В Постерной студии выберите формат и серию, заполните поля кампании, загрузите настоящий портрет лектора и включите направляющие.
10. Проверьте сетку в редакторе, затем откройте вкладку «Проверка печати»: она считает строки, переносы, разрешение фото и безопасное поле по текущим значениям.
11. Скачайте PNG. Для плаката 70×140 выберите вылет 3 мм и при необходимости откройте системную печать.

Данные никуда не отправляются: это редактируемый интерфейсный пример, а не подключение к CRM. Постер собирается локально на canvas, без загрузки на сервер.

## Design Notes

The design notes bind every component to the shared brand tokens, real logo and local Roboto Condensed files.

- Цвета, типографика, spacing, motion и радиусы подключены из `../../colors_and_type.css`.
- Логотип загружается из `../../assets/logo/logo_main.svg`.
- Карточки и кнопки прямоугольные; дата и цена — синие овалы; форма записи — чёрная секция с оранжевым действием.
- В hero вместо отсутствующей фотографии используется фирменный круг с числом 576, чтобы не подменять реального спикера серым или сгенерированным портретом.
- Адаптивные режимы: три колонки курсов на широком экране, две на среднем, одна на мобильном.
- Учтены клавиатурный focus, reduced motion, читаемые вторичные тексты и полные регалии без обрезки.
- Ролевые имена `Sidebar`, `AssistantsList`, `ChatArea`, `MessageBubble` и `InputBar` описывают композицию пакета и не добавляют чат или AI-функции.
- `AstryxLayout` разделяет header, start, content, end и footer; центральный content прокручивается независимо, а `AstryxChatLayout` удерживает composer внизу без перекрытия сообщений.
- `AstryxComposer` обрезает края draft, очищает поле после сохранения, различает Enter и Shift+Enter, использует `aria-expanded`/`aria-controls` и native `hidden` для drawer.
- Astryx Theme работает только на уровне subtree. Цвета, шрифт и радиусы остаются фирменными; frosted dock и backdrop blur не переносятся.
- Программная прокрутка через `scrollIntoView` не используется; выбор курса переводит фокус на select программы.
- Dialog работает через native `<dialog>` и возвращает фокус на trigger. Dropdown и Segmented Control различают keyboard selection и фокус.
- Таблицы сохраняют `aria-sort`; на мобильном строки становятся карточками с подписями полей, без горизонтального скролла.
- Пресеты меняют spacing и размеры контролов, но не трогают палитру, радиусы и типографику. Цели остаются не меньше 44px.
- Pattern Library фильтрует реальные ссылки на профильные превью и показывает честное пустое состояние без выдуманных примеров.
- Постерная студия рисует макет на canvas тем же кодом, что и экспорт: предпросмотр совпадает с PNG. Форматы 4:5, 9:16, 16:9 и 70×140 мм используют одну сетку с разными якорями.
- Постерный слой использует `--font-poster` (локальный Onest) и scoped-токены `--bg-poster-v2`; интерфейс остаётся на Roboto Condensed. Заголовок подстраивается до четырёх строк, цена и дата не переносятся.
- Фото без файла заменяется фирменным кругом с инициалами. Это явная заглушка, а не сгенерированный спикер; проверка печати считает её ошибкой.
- Вылет 3 мм добавляется только при экспорте плаката. PNG остаётся в RGB; CMYK и печатный профиль проверяются в типографии.

## Source Basis

The source basis is the captured Кидней.Практикум landing UI kit and its preserved component snapshots.

Компоненты основаны на `project/ui_kits/landing/` внутри `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/`. Нетронутые оригиналы доступны в `source_examples/project/ui_kits/landing/`.

Постерная студия опирается на `project/posters/README.md` из того же снимка: форматы 4:5, 16:9 и 9:16, четыре линзы, диагональные линии, cream pill, крупная цена и Onest для заголовков. Исходные HTML-файлы постеров intake не сохранил, поэтому сетка собрана по спецификации. Плакат 70×140 мм добавлен как рабочая форма для печати.

Прямые ссылки: [browser entry](index.html), [App](components/App.jsx), [original CourseGrid](../../../source_examples/project/ui_kits/landing/CourseGrid.jsx), [original EnrollForm](../../../source_examples/project/ui_kits/landing/EnrollForm.jsx).

Astryx Layer основан на [LayoutSidebarLayout](../../../source_examples/packages/cli/assets/templates/blocks/components/Layout/LayoutSidebarLayout.tsx), [LayoutDualPanelLayout](../../../source_examples/packages/cli/assets/templates/blocks/components/Layout/LayoutDualPanelLayout.tsx), [Theme](../../../source_examples/packages/core/src/theme/Theme.tsx), [ChatLayout contract](../../../source_examples/docs/specs/components/Chat/ChatLayout.spec.md) и [ChatComposer contract](../../../source_examples/docs/specs/components/Chat/ChatComposer.spec.md). Evidence note: `context/github/meta-astryx.md`.

Пресеты плотности и компонентные переменные взяты из `apps/docsite/src/app/playground/themeEditor/constants.ts` в исходном снимке Astryx. Расширенный intake не потребовался: используются уже сохранённые 47 snapshots с Layout, Theme, Chat и UNIFIED_PRESETS.

Даты, цены и статистика являются содержанием исходного демонстрационного макета. Перед внешней публикацией подтвердите их у владельца бренда. Реальные портреты спикеров в снимках отсутствуют; пакет не заменяет их выдуманными файлами.
