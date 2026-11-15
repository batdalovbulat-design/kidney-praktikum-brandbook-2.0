# GitHub Design Evidence: batdalovbulat-design/kidney-praktikum-brandbook-2.0

Source: https://github.com/batdalovbulat-design/kidney-praktikum-brandbook-2.0
Read method: git-clone
Local clone method: git clone
Ref: default branch
Repository paths discovered: 51
Snapshot files written: 18

## Intake Status

- This-device intake was used through local git or GitHub CLI.

## README (README.md)

```md
# CODING AGENTS: READ THIS FIRST

This is a **handoff bundle** from Claude Design (claude.ai/design).

A user mocked up designs in HTML/CSS/JS using an AI design tool, then exported this bundle so a coding agent can implement the designs for real.

## What you should do — IMPORTANT

**Find the primary design file under `design-system/project/` and read it top to bottom.** Then **follow its imports**: open every file it pulls in (shared components, CSS, scripts) so you understand how the pieces fit together before you start implementing.

**If anything is ambiguous, ask the user to confirm before you start implementing.** It's much cheaper to clarify scope up front than to build the wrong thing.

## About the design files

The design medium is **HTML/CSS/JS** — these are prototypes, not production code. Your job is to **recreate them pixel-perfectly** in whatever technology makes sense for the target codebase (React, Vue, native, whatever fits). Match the visual output; don't copy the prototype's internal structure unless it happens to fit.

**Don't render these files in a browser or take screenshots unless the user asks you to.** Everything you need — dimensions, colors, layout rules — is spelled out in the source. Read the HTML and CSS directly; a screenshot won't tell you anything they don't.

## Bundle contents

- `design-system/README.md` — this file
- `design-system/project/` — the `Кидней Практикум Design System` project files (HTML prototypes, assets, components)

```

## Source Evidence Inventory

### Product docs and manifests

Use these to understand product purpose, dependency stack, scripts, and public naming.

- project/posters/README.md -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/posters/README.md` (source)
- project/README.md -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/README.md` (source)
- project/slides/README.md -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/slides/README.md` (source)
- project/ui_kits/landing/README.md -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/ui_kits/landing/README.md` (source)

### Brand assets and icons

Preserve source build/runtime paths: files under `build/` should be copied back into root `build/` with their original filenames, while non-build logos, avatars, or wordmarks can be copied into `assets/`. Reflect the preserved files in `preview/brand-assets.html`.

- project/assets/logo/logo_main.svg -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/assets/logo/logo_main.svg` (source)
- project/assets/logo/logo_main.png -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/assets/logo/logo_main.png` (binary asset)

### Theme, tokens, and styling

Extract concrete color, typography, spacing, radius, shadow, and theme-variable values from these files.

- project/colors_and_type.css -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/colors_and_type.css` (source)

### Reusable components

Use these to derive buttons, inputs, cards, dialogs, avatars, selectors, menus, and feedback states.

- project/ui_kits/landing/EnrollForm.jsx -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/ui_kits/landing/EnrollForm.jsx` (source)

### Other design evidence

Inspect these only after the primary design evidence above has been used.

- project/_adherence.oxlintrc.json -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/_adherence.oxlintrc.json` (source)
- project/_ds_bundle.js -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/_ds_bundle.js` (source)
- project/_ds_manifest.json -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/_ds_manifest.json` (source)
- project/SKILL.md -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/SKILL.md` (source)
- project/ui_kits/landing/CourseGrid.jsx -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/ui_kits/landing/CourseGrid.jsx` (source)
- project/ui_kits/landing/Hero.jsx -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/ui_kits/landing/Hero.jsx` (source)
- project/ui_kits/landing/SiteFooter.jsx -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/ui_kits/landing/SiteFooter.jsx` (source)
- project/ui_kits/landing/SiteHeader.jsx -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/ui_kits/landing/SiteHeader.jsx` (source)
- project/ui_kits/landing/SpeakersBlock.jsx -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/ui_kits/landing/SpeakersBlock.jsx` (source)
- project/ui_kits/landing/Stats.jsx -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/ui_kits/landing/Stats.jsx` (source)


## Files Inspected

- project/assets/logo/logo_main.svg -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/assets/logo/logo_main.svg` (3567 bytes, git-clone)
- project/assets/logo/logo_main.png -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/assets/logo/logo_main.png` (11432 bytes, git-clone, binary asset)
- project/posters/README.md -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/posters/README.md` (913 bytes, git-clone)
- project/README.md -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/README.md` (9906 bytes, git-clone)
- project/slides/README.md -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/slides/README.md` (396 bytes, git-clone)
- project/ui_kits/landing/README.md -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/ui_kits/landing/README.md` (422 bytes, git-clone)
- project/ui_kits/landing/EnrollForm.jsx -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/ui_kits/landing/EnrollForm.jsx` (4552 bytes, git-clone)
- project/_adherence.oxlintrc.json -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/_adherence.oxlintrc.json` (4331 bytes, git-clone)
- project/_ds_bundle.js -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/_ds_bundle.js` (26885 bytes, git-clone)
- project/_ds_manifest.json -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/_ds_manifest.json` (11786 bytes, git-clone)
- project/colors_and_type.css -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/colors_and_type.css` (6163 bytes, git-clone)
- project/SKILL.md -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/SKILL.md` (2726 bytes, git-clone)
- project/ui_kits/landing/CourseGrid.jsx -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/ui_kits/landing/CourseGrid.jsx` (2672 bytes, git-clone)
- project/ui_kits/landing/Hero.jsx -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/ui_kits/landing/Hero.jsx` (2485 bytes, git-clone)
- project/ui_kits/landing/SiteFooter.jsx -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/ui_kits/landing/SiteFooter.jsx` (1871 bytes, git-clone)
- project/ui_kits/landing/SiteHeader.jsx -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/ui_kits/landing/SiteHeader.jsx` (1111 bytes, git-clone)
- project/ui_kits/landing/SpeakersBlock.jsx -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/ui_kits/landing/SpeakersBlock.jsx` (2162 bytes, git-clone)
- project/ui_kits/landing/Stats.jsx -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/ui_kits/landing/Stats.jsx` (887 bytes, git-clone)

## Binary Assets Preserved

- project/assets/logo/logo_main.png -> `context/github/batdalovbulat-design-kidney-praktikum-brandbook-2.0/files/project/assets/logo/logo_main.png`

## Design-Relevant Excerpts

### project/assets/logo/logo_main.svg

```
<?xml version="1.0" encoding="utf-8"?>

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="40 310 720 180" preserveAspectRatio="xMinYMid meet" xml:space="preserve">
<g>
&#x9;<g>
&#x9;&#x9;<path d="M313.28,367.5h-5.92v28.06h-7.85v-62.47h7.85v27.55h4.81l17.59-27.55h9.78l-19.82,30.21l21.28,32.26h-9.61L313.28,367.5z"></path>
&#x9;&#x9;<path d="M380.94,333.09h7.85v62.47h-7.85v-48.14l-24.33,48.14h-7.89v-62.47h7.89v48.14L380.94,333.09z"></path>
&#x9;&#x9;<path d="M444.74,388.82h7.34l-0.09,22.05h-7.85v-15.32h-36.9v15.36h-7.89l-0.04-22.1h4.59c2-2.55,3.64-6.38,4.91-11.5&#xA;&#x9;&#x9;&#x9;c1.27-5.12,2.08-10.84,2.42-17.16l1.2-27.07h32.31V388.82z M412.26,388.82h24.59v-49h-16.78l-0.9,20.18&#xA;&#x9;&#x9;&#x9;c-0.34,6.61-1.13,12.32-2.36,17.11C415.58,381.91,414.06,385.81,412.26,388.82z"></path>
&#x9;&#x9;<path d="M502.58,395.56h-7.89v-28.88h-25.14v28.88h-7.85v-62.47h7.85v26.86h25.14v-26.86h7.89V395.56z"></path>
&#x9;&#x9;<path d="M546.13,366.68h-22.1v22.14h25.74v6.74h-33.6v-62.47h33.17v6.74h-25.31v20.12h22.1V366.68z"></path>
&#x9;&#x9;<path d="M592.38,333.09h7.85v62.47h-7.85v-48.14l-24.33,48.14h-7.89v-62.47h7.89v48.14L592.38,333.09z M593.19,317.55&#xA;&#x9;&#x9;&#x9;c0,3.47-1.18,6.27-3.54,8.38c-2.36,2.11-5.46,3.17-9.29,3.17c-3.83,0-6.94-1.06-9.31-3.19c-2.37-2.12-3.56-4.91-3.56-8.36h6.48&#xA;&#x9;&#x9;&#x9;c0,2,0.54,3.57,1.63,4.7c1.09,1.13,2.67,1.69,4.76,1.69c2,0,3.57-0.56,4.7-1.67c1.13-1.12,1.69-2.69,1.69-4.72H593.19z"></path>
&#x9;&#x9;<path d="M339.71,481.54h-7.89v-55.73h-24.46v55.73h-7.85v-62.47h40.2V481.54z"></path>
&#x9;&#x9;<path d="M361.5,457.09v24.46h-7.85v-62.47h19.91c5.81,0,10.37,1.74,13.69,5.21c3.32,3.48,4.98,8.1,4.98,13.88&#xA;&#x9;&#x9;&#x9;c0,6.01-1.58,10.63-4.74,13.88c-3.16,3.25-7.62,4.93-13.37,5.04H361.5z M361.5,450.35h12.06c3.49,0,6.16-1.05,8.02-3.14&#xA;&#x9;&#x9;&#x9;c1.86-2.09,2.79-5.09,2.79-8.98c0-3.75-0.96-6.76-2.87-9.03c-1.92-2.26-4.55-3.4-7.89-3.4h-12.1V450.35z"></path>
&#x9;&#x9;<path d="M425.56,465.2h-21.11l-4.85,16.35h-8.07l20.12-62.47h6.74l20.17,62.47h-8.07L425.56,465.2z M406.51,458.46h17.03&#xA;&#x9;&#x9;&#x9;l-8.54-28.4L406.51,458.46z"></path>
&#x9;&#x9;<path d="M461.22,453.48h-5.92v28.06h-7.85v-62.47h7.85v27.55h4.81l17.59-27.55h9.78l-19.82,30.21l21.28,32.26h-9.61L461.22,453.48&#xA;&#x9;&#x9;&#x9;z"></path>
&#x9;&#x9;<path d="M532.83,425.81h-16.43v55.73h-7.85v-
...
```

### project/posters/README.md

```
# Posters

Three formats matching real Кидней.Практикум production:

- `lecture-4x5.html` — Instagram 4:5 lecture poster (mirrors Karimova reference)
- `lecture-16x9.html` — Landscape 16:9 (FB cover / horizontal slide use)
- `course-9x16.html` — Stories 9:16 (course announcement, mirrors Omarova reference)

Visual language:
- **Brand background:** blue gradient (#B7C0F5 → #4F63FF → #2236D8) with orange-glow radial in upper right.
- **Headlines:** sentence-case, Onest Bold, on solid black.
- **Photos:** circular B&W portraits, no orange backplate.
- **Pattern:** four black "lenses" (overlapping circles) as graphic motif.
- **Diagonal hairlines:** subtle white/35% opacity, ~60° and ~120°.
- **Price:** white, very large, bold, on blue.
- **Pill:** cream/off-white `#F5F1EA`, dark text — for online/offline indicators.
- **Logo:** black, top-right (16:9) or bottom (4:5, 9:16).

```

### project/README.md

```
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

**Casing.** Headlines **ВЕРХНИЙ РЕГИСТР Bol
...
```

### project/slides/README.md

```
# Кидней Практикум — Sample Slides

16:9 (1920×1080) lecture-deck templates built from the brand's poster + speaker-card patterns.

- `title.html` — eyebrow + giant uppercase headline + metadata strip
- `speaker.html` — orange field, oversized name, oval portrait
- `schedule.html` — cream field, time → arrow → topic rows
- `stats.html` — three credentials numbers

```

### project/ui_kits/landing/README.md

```
# Кидней.Практикум — UI Kit (Landing)

A high-fidelity recreation of how the Practicum brand reads on the web. Built from the brand patterns (poster + speaker card) translated to a marketing landing.

**Files**
- `index.html` — full landing demo
- `Hero.jsx` · `CourseCard.jsx` · `SpeakerCard.jsx` · `Stats.jsx` · `EnrollForm.jsx` · `SiteHeader.jsx` · `SiteFooter.jsx`

Open `index.html` to view.

```

### project/ui_kits/landing/EnrollForm.jsx

```jsx
/* global React */
const { useState: useEnrollState } = React;

function EnrollForm() {
  const [step, setStep] = useEnrollState(0);
  const [name, setName] = useEnrollState('');
  const [phone, setPhone] = useEnrollState('');
  const [spec, setSpec] = useEnrollState('Педиатр');

  if (step === 1) {
    return (
      <section id="enroll" style={{padding:'96px 64px', background:'#000', color:'#fff'}}>
        <div style={{maxWidth:760, margin:'0 auto', textAlign:'left'}}>
          <div style={{fontSize:14, color:'#F39C12', marginBottom:12, textTransform:'uppercase', letterSpacing:'0.04em'}}>Заявка отправлена</div>
          <h2 style={{fontSize:64, fontWeight:900, textTransform:'uppercase', lineHeight:1, letterSpacing:'-0.02em', margin:0}}>Мы свяжемся<br/>с вами{' '}<span style={{color:'#F39C12'}}>в течение дня</span></h2>
          <p style={{fontSize:18, marginTop:24, color:'#ccc', lineHeight:1.5}}>Спасибо, {name.split(' ')[0] || 'коллега'}. Куратор курса позвонит на номер {phone || '+7'} и пришлёт программу.</p>
          <button onClick={()=>setStep(0)} style={{marginTop:32, background:'transparent', border:'1.5px solid #fff', color:'#fff', padding:'14px 28px', fontWeight:700, fontSize:14, textTransform:'uppercase', letterSpacing:'0.04em', cursor:'pointer'}}>Подать ещё одну</button>
        </div>
      </section>
    );
  }

  return (
    <section id="enroll" style={{padding:'96px 64px', background:'#000', color:'#fff'}}>
      <div style={{maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start'}}>
        <div>
          <div style={{fontSize:14, color:'#F39C12', marginBottom:12, textTransform:'uppercase', letterSpacing:'0.04em'}}>Записаться</div>
          <h2 style={{fontSize:72, fontWeight:900, textTransform:'uppercase', lineHeight:0.95, letterSpacing:'-0.02em', margin:0}}>Подайте<br/>заявку</h2>
          <p style={{fontSize:16, color:'#bbb', marginTop:24, lineHeight:1.5, maxWidth:400}}>
            Куратор перезвонит, пришлёт программу и реквизиты. Без давления и навязывания.
          </p>
          <p style={{fontSize:11, color:'#777', marginTop:32, lineHeight:1.5, maxWidth:400}}>
            Лицензия Минобрнауки РД № Л035-01227-05/00665847. Диплом установленного образца с регистрацией в ФИС ФРДО.
          </p>
        </div>
        <form onSubmit={e=>{e.preventDefault(); setStep(1);}} style=
...
```

### project/_adherence.oxlintrc.json

```json
{
  "plugins": [
    "react",
    "import"
  ],
  "rules": {
    "react/forbid-elements": [
      "warn",
      {
        "forbid": []
      }
    ],
    "no-restricted-imports": [
      "warn",
      {
        "patterns": [
          {
            "group": [
              "ui_kits/landing/**"
            ],
            "message": "Import design-system components from 'index.js', not component internals."
          }
        ]
      }
    ],
    "no-restricted-syntax": [
      "warn",
      {
        "selector": "Literal[value=/#[0-9a-fA-F]{3,8}\\b/]",
        "message": "Raw hex color — use a design-system color token via var()."
      },
      {
        "selector": "Literal[value=/\\b\\d+px\\b/]",
        "message": "Raw px value — use a design-system spacing token via var()."
      },
      {
        "selector": "Literal[value=/font-family\\s*:\\s*(?!['\\\"]?(?:Roboto Condensed))/i]",
        "message": "Font not provided by the design system. Available: Roboto Condensed."
      }
    ]
  },
  "overrides": [
    {
      "files": [
        "**/index.js"
      ],
      "rules": {
        "no-restricted-imports": "off"
      }
    }
  ],
  "x-omelette": {
    "components": {},
    "tokens": [
      "--_kidney-navy",
      "--_kidney-red",
      "--bg",
      "--bg-accent",
      "--bg-alt",
      "--bg-brand",
      "--bg-cta",
      "--black",
      "--blue",
      "--blue-bright",
      "--blue-deep",
      "--blue-soft",
      "--charcoal",
      "--cream",
      "--dur-base",
      "--dur-fast",
      "--dur-slow",
      "--ease",
      "--fg",
      "--fg-2",
      "--fg-muted",
      "--fg-on-color",
      "--font-sans",
      "--hairline",
      "--hairline-light",
      "--lh-base",
      "--lh-body",
      "--lh-snug",
      "--lh-tight",
      "--orange",
      "--orange-dark",
      "--orange-glow",
      "--radius-0",
      "--radius-md",
      "--radius-pill",
      "--radius-sm",
      "--shadow-print",
      "--shadow-soft",
      "--space-1",
      "--space-2",
      "--space-3",
      "--space-4",
      "--space-5",
      "--space-6",
      "--space-7",
      "--space-8",
      "--space-9",
      "--t-body",
      "--t-cta",
      "--t-display",
      "--t-h1",
      "--t-h2",
      "--t-h3",
      "--t-small",
      "--t-tiny",
      "--track-display",
      "--w-black",
      "--w-bold",
      "--w-light",
      "--w-medium",
      "--w-re
...
```

### project/_ds_bundle.js

```js
/* @ds-bundle: {"format":4,"namespace":"DesignSystem_019e02","components":[],"sourceHashes":{"ui_kits/landing/CourseGrid.jsx":"b27e91a42564","ui_kits/landing/EnrollForm.jsx":"4c82c86a8bdd","ui_kits/landing/Hero.jsx":"3f55b6d166ab","ui_kits/landing/SiteFooter.jsx":"6f812b665f34","ui_kits/landing/SiteHeader.jsx":"e3acbb56a1bb","ui_kits/landing/SpeakersBlock.jsx":"00ba906fe0f4","ui_kits/landing/Stats.jsx":"c7fbc5f5e4fb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_019e02 = window.DesignSystem_019e02 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/landing/CourseGrid.jsx
try { (() => {
/* global React */
function CourseCard({
  eyebrow,
  title,
  date,
  price,
  color = '#fff'
}) {
  const onOrange = color === '#F39C12';
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: color,
      padding: 32,
      position: 'relative',
      overflow: 'hidden',
      border: color === '#fff' ? '1px solid rgba(0,0,0,.08)' : 'none',
      minHeight: 360,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: onOrange ? '#000' : '#333',
      marginBottom: 12
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 36,
      fontWeight: 700,
      lineHeight: 1.05,
      textTransform: 'uppercase',
      margin: 0
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      textTransform: 'uppercase',
      color: '#333',
      letterSpacing: '0.04em'
    }
  }, "\u0421\u0442\u0430\u0440\u0442"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700
    }
  }, date)), price && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#1E3A8A',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: 999,
      fontWeight: 700,
      fontSize: 15
    }
  }, price)));
}
function CourseGrid() {
  return /*#__PUR
...
```

### project/_ds_manifest.json

```json
{"namespace":"DesignSystem_019e02","components":[],"startingPoints":[],"cards":[{"path":"posters/course-9x16.html","group":"Brand","viewport":"540x960","subtitle":"Stories 9×16 course poster","name":"Posters / Course 9×16"},{"path":"posters/lecture-16x9.html","group":"Brand","viewport":"1280x720","subtitle":"Landscape 16×9 lecture poster","name":"Posters / Lecture 16×9"},{"path":"posters/lecture-4x5.html","group":"Brand","viewport":"600x750","subtitle":"Instagram 4×5 lecture poster · matches Karimova reference","name":"Posters / Lecture 4×5"},{"path":"preview/brand-logo.html","group":"Brand","viewport":"700x420","subtitle":"Logo on white, cream, black, orange","name":"Brand / Logo mark"},{"path":"preview/brand-references.html","group":"Brand","viewport":"700x260","subtitle":"Real Practicum work","name":"Brand / Reference posters"},{"path":"preview/brand-vertical.html","group":"Brand","viewport":"700x380","subtitle":"Rotated headline · signature move","name":"Brand / Vertical headline"},{"path":"preview/pattern-four-lenses.html","group":"Brand","viewport":"700x200","subtitle":"Signature graphic motif","name":"Pattern / Four lenses"},{"path":"preview/colors-backgrounds.html","group":"Colors","viewport":"700x160","subtitle":"White, cream, gradient, glow","name":"Colors / Backgrounds"},{"path":"preview/colors-brand.html","group":"Colors","viewport":"700x160","subtitle":"Black, white, orange, blue","name":"Colors / Brand"},{"path":"preview/colors-forbidden.html","group":"Colors","viewport":"700x180","subtitle":"Reserved for parent clinic","name":"Colors / Forbidden"},{"path":"preview/colors-text.html","group":"Colors","viewport":"700x160","subtitle":"Primary, secondary, muted, on-color","name":"Colors / Text"},{"path":"preview/components-arrows.html","group":"Components","viewport":"700x280","subtitle":"Thin black arrows","name":"Components / Arrows"},{"path":"preview/components-bullets.html","group":"Components","viewport":"700x220","subtitle":"Course meta · diamond bullets","name":"Components / Bullet list"},{"path":"preview/components-buttons.html","group":"Components","viewport":"700x130","subtitle":"Primary, secondary, CTA, accent","name":"Components / Buttons"},{"path":"preview/components-eyebrow.html","group":"Components","viewport":"700x160","subtitle":"Event-type + flagship headline","name":"Components / Eyebrow + headline"},{"path":"preview/components-f
...
```

### project/colors_and_type.css

```css
/* ============================================================
   Кидней.Практикум — Design Tokens
   v2.1 — Roboto Condensed (local files), real-poster aligned
   ============================================================ */

/* Roboto Condensed — local brand files */
@font-face {
  font-family: "Roboto Condensed";
  src: url("fonts/RobotoCondensed-Light.ttf") format("truetype");
  font-weight: 300; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "Roboto Condensed";
  src: url("fonts/RobotoCondensed-LightItalic.ttf") format("truetype");
  font-weight: 300; font-style: italic; font-display: swap;
}
@font-face {
  font-family: "Roboto Condensed";
  src: url("fonts/RobotoCondensed-Regular.ttf") format("truetype");
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "Roboto Condensed";
  src: url("fonts/RobotoCondensed-Italic.ttf") format("truetype");
  font-weight: 400; font-style: italic; font-display: swap;
}
@font-face {
  font-family: "Roboto Condensed";
  /* Brand pack ships one Bold file; CSS exposes it across 500–900 so any
     headline weight resolves cleanly without synthetic boldening from another
     family. */
  src: url("fonts/RobotoCondensed-Bold.ttf") format("truetype");
  font-weight: 500 900; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "Roboto Condensed";
  src: url("fonts/RobotoCondensed-BoldItalic.ttf") format("truetype");
  font-weight: 500 900; font-style: italic; font-display: swap;
}

:root {
  /* ---------- Brand colors ---------- */
  --blue-deep:    #2840E8;
  --blue-bright:  #4F63FF;
  --blue-soft:    #A9B4F2;
  --orange-glow:  #F4A33B;
  --orange:       #F39C12;
  --orange-dark:  #E67E22;
  --blue:         #1E3A8A;       /* deeper CTA blue (UI kits) */
  --cream:        #F5EFE6;
  --black:        #0E0E10;
  --charcoal:     #2B2118;
  --white:        #FFFFFF;

  /* Semantic */
  --bg:           var(--white);
  --bg-alt:       var(--cream);
  --bg-accent:    var(--orange);
  --bg-cta:       var(--blue);

  --fg:           var(--black);
  --fg-2:         #333333;
  --fg-muted:     #777777;
  --fg-on-color:  var(--white);

  --hairline:     rgba(0, 0, 0, 0.12);
  --hairline-light: rgba(255, 255, 255, 0.35);

  /* Forbidden (parent-clinic colors, never use) */
  --_kidney-red:  #E50046;
  --_kidney-navy: #282F5D;

  /* Brand background — used on po
...
```

### project/SKILL.md

```
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

If the user invokes this skill without specific guidance: ask what they want to build (poster, slide, landing, presentation, social card), confirm th
...
```

### project/ui_kits/landing/CourseGrid.jsx

```jsx
/* global React */
function CourseCard({eyebrow, title, date, price, color='#fff'}) {
  const onOrange = color === '#F39C12';
  return (
    <article style={{
      background:color, padding:32, position:'relative', overflow:'hidden',
      border: color==='#fff' ? '1px solid rgba(0,0,0,.08)' : 'none',
      minHeight:360, display:'flex', flexDirection:'column', justifyContent:'space-between'
    }}>
      <div>
        <div style={{fontSize:14, color: onOrange?'#000':'#333', marginBottom:12}}>{eyebrow}</div>
        <h3 style={{fontSize:36, fontWeight:700, lineHeight:1.05, textTransform:'uppercase', margin:0}}>{title}</h3>
      </div>
      <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginTop:32}}>
        <div>
          <div style={{fontSize:12, textTransform:'uppercase', color:'#333', letterSpacing:'0.04em'}}>Старт</div>
          <div style={{fontSize:24, fontWeight:700}}>{date}</div>
        </div>
        {price && <div style={{
          background:'#1E3A8A', color:'#fff', padding:'10px 20px',
          borderRadius:999, fontWeight:700, fontSize:15
        }}>{price}</div>}
      </div>
    </article>
  );
}

function CourseGrid() {
  return (
    <section style={{padding:'80px 64px', background:'#fff'}}>
      <div style={{maxWidth:1200, margin:'0 auto'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:48}}>
          <h2 style={{fontSize:48, fontWeight:700, textTransform:'uppercase', margin:0, letterSpacing:'-0.01em'}}>Программы</h2>
          <a href="#" style={{fontSize:14, color:'#000', textDecoration:'none', display:'flex', alignItems:'center', gap:8}}>
            Все курсы
            <svg width="32" height="10" viewBox="0 0 32 10"><line x1="0" y1="5" x2="26" y2="5" stroke="#000" strokeWidth="1.5"/><polyline points="22,1 26,5 22,9" fill="none" stroke="#000" strokeWidth="1.5"/></svg>
          </a>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24}}>
          <CourseCard eyebrow="Двухнедельный курс" title="Вакцинопрофилактика" date="24 июля" price="22 500 ₽" color="#F5EFE6"/>
          <CourseCard eyebrow="Цикл лекций" title="Нейросонография" date="12 августа" price="15 000 ₽" color="#F39C12"/>
          <CourseCard eyebrow="Конференция" title="Почка и инфекция" date="26—27 августа" price="бесплатно
...
```


## Package Files Materialized

- `source_examples/project/ui_kits/landing/EnrollForm.jsx`
- `source_examples/project/_ds_bundle.js`
- `source_examples/project/ui_kits/landing/CourseGrid.jsx`
- `source_examples/project/ui_kits/landing/Hero.jsx`
- `source_examples/project/ui_kits/landing/SiteFooter.jsx`
- `source_examples/project/ui_kits/landing/SiteHeader.jsx`

## Next Design-System Work

- Use these source paths and snapshots as evidence before writing `DESIGN.md`.
- Convert the inventory above into a Claude Design-style package: `README.md`, `SKILL.md`, `colors_and_type.css`, `preview/colors-*`, `preview/typography-specimens.html`, `preview/spacing-*`, `preview/components-*`, `preview/brand-assets.html`, `ui_kits/app/`, and preserved `assets/`, `build/`, or `fonts/` when evidence exists.
- `ui_kits/app/index.html` must be a browser-reviewable component entry: load `../../colors_and_type.css`, load or import at least three files from `ui_kits/app/components/`, and mount the composed UI through ReactDOM/Babel or compiled browser-ready JavaScript. Do not duplicate a static HTML mock when modular component files exist.
- `ui_kits/app/components/App.jsx` (or equivalent app shell) must compose source-backed role components such as Sidebar, AssistantsList, ChatArea, InputBar, and MessageBubble, not merely list their filenames.
- Claude-style UI-kit entry skeleton for direct JSX kits:
  - `<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>`
  - `<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>`
  - `<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"></script>`
  - `<link rel="stylesheet" href="../../colors_and_type.css">`
  - `<div id="root"></div>`
  - Load role components from `components/*.jsx` with `<script type="text/babel" src="components/ComponentName.jsx"></script>`.
  - Mount with `const { App } = window; const root = ReactDOM.createRoot(document.getElementById("root")); root.render(<App />);`.
- Preserve at least three high-signal source examples outside `context/` under `source_examples/` when reusable component snapshots exist, so future agents can compare generated components against original source structure.
- When a captured asset path begins with `build/`, copy the snapshot back into a root `build/` path with its original filename, such as `context/.../files/build/icon.png` -> `build/icon.png`. Do not satisfy build/runtime icon evidence by only renaming those files into `assets/`.
- Make `preview/brand-assets.html` visibly load preserved asset files from `assets/` or `build/`; do not redraw captured logos/icons as inline placeholders.
- Extract concrete colors, typography, spacing, radius, component behavior, assets, and product tone only when supported by inspected files.
- If evidence is missing or ambiguous, mark that uncertainty instead of inventing tokens.
