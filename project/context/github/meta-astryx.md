# GitHub Design Evidence: meta/astryx

Source: https://github.com/meta/astryx
Read method: git-clone
Local clone method: git clone
Ref: default branch
Repository paths discovered: 7839
Snapshot files written: 47

## Intake Status

- This-device intake was used through local git or GitHub CLI.

## README (README.md)

```md
<!-- SYNC CONTRACT: Architecture changes require documentation updates. -->

<div align="center">

<img src="https://lookaside.facebook.com/assets/astryx/Astryx-Banner.png" alt="Astryx" width="100%" />

# Astryx

An open source design system that's fully customizable and built for how we build now: <br/> by people and the agents working alongside them.

**Currently in Beta** · Built on [React 19+](https://react.dev) and [StyleX](https://stylexjs.com)

[![npm version](https://img.shields.io/npm/v/@astryxdesign/core?label=npm&color=cb3837&logo=npm)](https://www.npmjs.com/package/@astryxdesign/core)
[![license MIT](https://img.shields.io/npm/l/@astryxdesign/core?color=blue)](LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/meta/astryx/wiki/Contributing)

[![Docs](https://img.shields.io/badge/Docs-astryx.atmeta.com-6741d9?logo=readthedocs&logoColor=white)](https://astryx.atmeta.com)
[![Storybook](https://img.shields.io/badge/Storybook-live-ff4785?logo=storybook&logoColor=white)](https://astryx.atmeta.com/storybook/)
[![Sandbox](https://img.shields.io/badge/Sandbox-playground-A9792B)](https://astryx.atmeta.com/sandbox/)

**[Docs](https://astryx.atmeta.com)** · **[Storybook](https://astryx.atmeta.com/storybook/)** · **[Sandbox](https://astryx.atmeta.com/sandbox/)** · **[Contributing](https://github.com/meta/astryx/wiki/Contributing)** · **[Discord](https://discord.com/invite/XnsUcFykEP)**

</div>

## Overview

Astryx is an open source design system that grew inside Meta over the last eight years, where it became the most-used and largest design system in the company — powering 13,000+ apps and shaped by the engineers, designers, and product teams who depend on it every day.

It ships 150+ accessible components, brand-level theming, dark mode, ready-to-ship templates, and a CLI as one cohesive system. You import pre-built CSS and use typed React components — no build plugin, no styling library to adopt — and both people and AI assistants build with the same tooling.

**What makes Astryx different:**

- **Open internals.** Components are built to be composed at any level, not locked behind a closed top-level API. The building blocks you'd reach for are exported directly, and when you need to go deeper, swizzle ejects a component's full source into your project to own.
- **No styling lock-in.** Astryx authors its 
...
```

## Source Evidence Inventory

### Product docs and manifests

Use these to understand product purpose, dependency stack, scripts, and public naming.

- apps/sandbox/src/app/(sandbox)/pages/palette-generator/README.md -> `context/github/meta-astryx/files/apps/sandbox/src/app/sandbox/pages/palette-generator/README.md` (source)
- internal/vibe-tests/app/package.json -> `context/github/meta-astryx/files/internal/vibe-tests/app/package.json` (source)

### Theme, tokens, and styling

Extract concrete color, typography, spacing, radius, shadow, and theme-variable values from these files.

- packages/native/apple/Sources/Astryx/Theme/Generated/Tokens.swift -> `context/github/meta-astryx/files/packages/native/apple/Sources/Astryx/Theme/Generated/Tokens.swift` (source)
- packages/native/apple/Sources/Astryx/Theme/Theme.swift -> `context/github/meta-astryx/files/packages/native/apple/Sources/Astryx/Theme/Theme.swift` (source)
- packages/core/src/theme/syntax/tokens.ts -> `context/github/meta-astryx/files/packages/core/src/theme/syntax/tokens.ts` (source)
- packages/core/src/theme/Theme.tsx -> `context/github/meta-astryx/files/packages/core/src/theme/Theme.tsx` (source)
- packages/core/src/theme/tokens.ts -> `context/github/meta-astryx/files/packages/core/src/theme/tokens.ts` (source)
- packages/core/src/utils/color.ts -> `context/github/meta-astryx/files/packages/core/src/utils/color.ts` (source)
- apps/docsite/src/app/playground/themeEditor/constants.ts -> `context/github/meta-astryx/files/apps/docsite/src/app/playground/themeEditor/constants.ts` (source)
- apps/docsite/src/app/globals.css -> `context/github/meta-astryx/files/apps/docsite/src/app/globals.css` (source)
- apps/example-nextjs-source/src/app/globals.css -> `context/github/meta-astryx/files/apps/example-nextjs-source/src/app/globals.css` (source)
- apps/example-nextjs-stylex/src/app/globals.css -> `context/github/meta-astryx/files/apps/example-nextjs-stylex/src/app/globals.css` (source)
- apps/example-nextjs-tailwind/src/app/globals.css -> `context/github/meta-astryx/files/apps/example-nextjs-tailwind/src/app/globals.css` (source)
- apps/example-nextjs/src/app/globals.css -> `context/github/meta-astryx/files/apps/example-nextjs/src/app/globals.css` (source)
- apps/sandbox/src/app/globals.css -> `context/github/meta-astryx/files/apps/sandbox/src/app/globals.css` (source)
- packages/cli/assets/preview-app/src/app/globals.css -> `context/github/meta-astryx/files/packages/cli/assets/preview-app/src/app/globals.css` (source)
- docs/specs/components/theme/MediaTheme.spec.md -> `context/github/meta-astryx/files/docs/specs/components/theme/MediaTheme.spec.md` (source)
- docs/specs/components/theme/SyntaxTheme.spec.md -> `context/github/meta-astryx/files/docs/specs/components/theme/SyntaxTheme.spec.md` (source)
- docs/specs/components/theme/Theme.spec.md -> `context/github/meta-astryx/files/docs/specs/components/theme/Theme.spec.md` (source)
- packages/cli/assets/templates/blocks/components/Theme/ThemeApply.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Theme/ThemeApply.tsx` (source)
- packages/cli/assets/templates/blocks/components/Theme/ThemeNested.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Theme/ThemeNested.tsx` (source)
- packages/cli/assets/templates/blocks/components/Theme/ThemeShowcase.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Theme/ThemeShowcase.tsx` (source)
- packages/cli/assets/templates/blocks/components/Theme/ThemeSwitcher.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Theme/ThemeSwitcher.tsx` (source)
- packages/cli/assets/templates/blocks/components/Theme/useThemeHookUsage.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Theme/useThemeHookUsage.tsx` (source)
- packages/cli/assets/templates/blocks/components/Theme/useThemeNameHookUsage.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Theme/useThemeNameHookUsage.tsx` (source)
- apps/example-vite-tailwind/src/index.css -> `context/github/meta-astryx/files/apps/example-vite-tailwind/src/index.css` (source)
- apps/example-vite/src/index.css -> `context/github/meta-astryx/files/apps/example-vite/src/index.css` (source)
- apps/template-viewer/src/index.css -> `context/github/meta-astryx/files/apps/template-viewer/src/index.css` (source)

### App shell and navigation

Use these to recreate the product frame, navigation density, sidebars, window chrome, and layout rhythm.

- apps/docsite/src/app/(docs)/components/layout.tsx -> `context/github/meta-astryx/files/apps/docsite/src/app/docs/components/layout.tsx` (source)
- packages/cli/assets/templates/blocks/components/Layout/LayoutBasicCardLayout.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Layout/LayoutBasicCardLayout.tsx` (source)
- packages/cli/assets/templates/blocks/components/Layout/LayoutContentOnlyLayout.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Layout/LayoutContentOnlyLayout.tsx` (source)
- packages/cli/assets/templates/blocks/components/Layout/LayoutDualPanelLayout.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Layout/LayoutDualPanelLayout.tsx` (source)
- packages/cli/assets/templates/blocks/components/Layout/LayoutSidebarLayout.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Layout/LayoutSidebarLayout.tsx` (source)
- apps/docsite/src/app/layout.tsx -> `context/github/meta-astryx/files/apps/docsite/src/app/layout.tsx` (source)
- apps/example-nextjs-source/src/app/layout.tsx -> `context/github/meta-astryx/files/apps/example-nextjs-source/src/app/layout.tsx` (source)
- apps/example-nextjs-stylex/src/app/layout.tsx -> `context/github/meta-astryx/files/apps/example-nextjs-stylex/src/app/layout.tsx` (source)
- apps/example-nextjs-tailwind/src/app/layout.tsx -> `context/github/meta-astryx/files/apps/example-nextjs-tailwind/src/app/layout.tsx` (source)
- apps/example-nextjs/src/app/layout.tsx -> `context/github/meta-astryx/files/apps/example-nextjs/src/app/layout.tsx` (source)
- packages/cli/assets/preview-app/src/app/layout.tsx -> `context/github/meta-astryx/files/packages/cli/assets/preview-app/src/app/layout.tsx` (source)
- apps/docsite/src/app/(docs)/components/[name]/page.tsx -> `context/github/meta-astryx/files/apps/docsite/src/app/docs/components/name/page.tsx` (source)
- apps/docsite/src/app/(docs)/components/page.tsx -> `context/github/meta-astryx/files/apps/docsite/src/app/docs/components/page.tsx` (source)

### Chat and input surfaces

Use these for the applied UI-kit surface and interaction model when the product includes chat or composer flows.

- docs/specs/components/Chat/ChatComposer.spec.md -> `context/github/meta-astryx/files/docs/specs/components/Chat/ChatComposer.spec.md` (source)
- docs/specs/components/Chat/ChatComposerDrawer.spec.md -> `context/github/meta-astryx/files/docs/specs/components/Chat/ChatComposerDrawer.spec.md` (source)
- docs/specs/components/Chat/ChatComposerInput.spec.md -> `context/github/meta-astryx/files/docs/specs/components/Chat/ChatComposerInput.spec.md` (source)
- docs/specs/components/Chat/ChatComposerTokenElement.spec.md -> `context/github/meta-astryx/files/docs/specs/components/Chat/ChatComposerTokenElement.spec.md` (source)
- docs/specs/components/Chat/ChatDictationButton.spec.md -> `context/github/meta-astryx/files/docs/specs/components/Chat/ChatDictationButton.spec.md` (source)
- docs/specs/components/Chat/ChatLayout.spec.md -> `context/github/meta-astryx/files/docs/specs/components/Chat/ChatLayout.spec.md` (source)


## Files Inspected

- packages/native/apple/Sources/Astryx/Theme/Generated/Tokens.swift -> `context/github/meta-astryx/files/packages/native/apple/Sources/Astryx/Theme/Generated/Tokens.swift` (43224 bytes, git-clone)
- packages/native/apple/Sources/Astryx/Theme/Theme.swift -> `context/github/meta-astryx/files/packages/native/apple/Sources/Astryx/Theme/Theme.swift` (11612 bytes, git-clone)
- apps/docsite/src/app/(docs)/components/layout.tsx -> `context/github/meta-astryx/files/apps/docsite/src/app/docs/components/layout.tsx` (1267 bytes, git-clone)
- packages/cli/assets/templates/blocks/components/Layout/LayoutBasicCardLayout.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Layout/LayoutBasicCardLayout.tsx` (2042 bytes, git-clone)
- packages/cli/assets/templates/blocks/components/Layout/LayoutContentOnlyLayout.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Layout/LayoutContentOnlyLayout.tsx` (840 bytes, git-clone)
- packages/cli/assets/templates/blocks/components/Layout/LayoutDualPanelLayout.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Layout/LayoutDualPanelLayout.tsx` (1755 bytes, git-clone)
- packages/cli/assets/templates/blocks/components/Layout/LayoutSidebarLayout.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Layout/LayoutSidebarLayout.tsx` (1865 bytes, git-clone)
- apps/docsite/src/app/layout.tsx -> `context/github/meta-astryx/files/apps/docsite/src/app/layout.tsx` (4180 bytes, git-clone)
- apps/example-nextjs-source/src/app/layout.tsx -> `context/github/meta-astryx/files/apps/example-nextjs-source/src/app/layout.tsx` (534 bytes, git-clone)
- apps/example-nextjs-stylex/src/app/layout.tsx -> `context/github/meta-astryx/files/apps/example-nextjs-stylex/src/app/layout.tsx` (562 bytes, git-clone)
- apps/example-nextjs-tailwind/src/app/layout.tsx -> `context/github/meta-astryx/files/apps/example-nextjs-tailwind/src/app/layout.tsx` (566 bytes, git-clone)
- apps/example-nextjs/src/app/layout.tsx -> `context/github/meta-astryx/files/apps/example-nextjs/src/app/layout.tsx` (540 bytes, git-clone)
- packages/cli/assets/preview-app/src/app/layout.tsx -> `context/github/meta-astryx/files/packages/cli/assets/preview-app/src/app/layout.tsx` (540 bytes, git-clone)
- apps/sandbox/src/app/(sandbox)/pages/palette-generator/README.md -> `context/github/meta-astryx/files/apps/sandbox/src/app/sandbox/pages/palette-generator/README.md` (1468 bytes, git-clone)
- packages/core/src/theme/syntax/tokens.ts -> `context/github/meta-astryx/files/packages/core/src/theme/syntax/tokens.ts` (4290 bytes, git-clone)
- packages/core/src/theme/Theme.tsx -> `context/github/meta-astryx/files/packages/core/src/theme/Theme.tsx` (14111 bytes, git-clone)
- packages/core/src/theme/tokens.ts -> `context/github/meta-astryx/files/packages/core/src/theme/tokens.ts` (10588 bytes, git-clone)
- packages/core/src/utils/color.ts -> `context/github/meta-astryx/files/packages/core/src/utils/color.ts` (5651 bytes, git-clone)
- apps/docsite/src/app/playground/themeEditor/constants.ts -> `context/github/meta-astryx/files/apps/docsite/src/app/playground/themeEditor/constants.ts` (13019 bytes, git-clone)
- internal/vibe-tests/app/package.json -> `context/github/meta-astryx/files/internal/vibe-tests/app/package.json` (475 bytes, git-clone)
- apps/docsite/src/app/globals.css -> `context/github/meta-astryx/files/apps/docsite/src/app/globals.css` (10956 bytes, git-clone)
- apps/example-nextjs-source/src/app/globals.css -> `context/github/meta-astryx/files/apps/example-nextjs-source/src/app/globals.css` (181 bytes, git-clone)
- apps/example-nextjs-stylex/src/app/globals.css -> `context/github/meta-astryx/files/apps/example-nextjs-stylex/src/app/globals.css` (412 bytes, git-clone)
- apps/example-nextjs-tailwind/src/app/globals.css -> `context/github/meta-astryx/files/apps/example-nextjs-tailwind/src/app/globals.css` (1311 bytes, git-clone)
- apps/example-nextjs/src/app/globals.css -> `context/github/meta-astryx/files/apps/example-nextjs/src/app/globals.css` (237 bytes, git-clone)
- apps/sandbox/src/app/globals.css -> `context/github/meta-astryx/files/apps/sandbox/src/app/globals.css` (938 bytes, git-clone)
- packages/cli/assets/preview-app/src/app/globals.css -> `context/github/meta-astryx/files/packages/cli/assets/preview-app/src/app/globals.css` (237 bytes, git-clone)
- docs/specs/components/theme/MediaTheme.spec.md -> `context/github/meta-astryx/files/docs/specs/components/theme/MediaTheme.spec.md` (11122 bytes, git-clone)
- docs/specs/components/theme/SyntaxTheme.spec.md -> `context/github/meta-astryx/files/docs/specs/components/theme/SyntaxTheme.spec.md` (9069 bytes, git-clone)
- docs/specs/components/theme/Theme.spec.md -> `context/github/meta-astryx/files/docs/specs/components/theme/Theme.spec.md` (9808 bytes, git-clone)
- packages/cli/assets/templates/blocks/components/Theme/ThemeApply.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Theme/ThemeApply.tsx` (1248 bytes, git-clone)
- packages/cli/assets/templates/blocks/components/Theme/ThemeNested.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Theme/ThemeNested.tsx` (2165 bytes, git-clone)
- packages/cli/assets/templates/blocks/components/Theme/ThemeShowcase.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Theme/ThemeShowcase.tsx` (2525 bytes, git-clone)
- packages/cli/assets/templates/blocks/components/Theme/ThemeSwitcher.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Theme/ThemeSwitcher.tsx` (2346 bytes, git-clone)
- packages/cli/assets/templates/blocks/components/Theme/useThemeHookUsage.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Theme/useThemeHookUsage.tsx` (1409 bytes, git-clone)
- packages/cli/assets/templates/blocks/components/Theme/useThemeNameHookUsage.tsx -> `context/github/meta-astryx/files/packages/cli/assets/templates/blocks/components/Theme/useThemeNameHookUsage.tsx` (764 bytes, git-clone)
- apps/docsite/src/app/(docs)/components/[name]/page.tsx -> `context/github/meta-astryx/files/apps/docsite/src/app/docs/components/name/page.tsx` (2068 bytes, git-clone)
- apps/docsite/src/app/(docs)/components/page.tsx -> `context/github/meta-astryx/files/apps/docsite/src/app/docs/components/page.tsx` (9453 bytes, git-clone)
- apps/example-vite-tailwind/src/index.css -> `context/github/meta-astryx/files/apps/example-vite-tailwind/src/index.css` (666 bytes, git-clone)
- apps/example-vite/src/index.css -> `context/github/meta-astryx/files/apps/example-vite/src/index.css` (168 bytes, git-clone)
- apps/template-viewer/src/index.css -> `context/github/meta-astryx/files/apps/template-viewer/src/index.css` (494 bytes, git-clone)
- docs/specs/components/Chat/ChatComposer.spec.md -> `context/github/meta-astryx/files/docs/specs/components/Chat/ChatComposer.spec.md` (33143 bytes, git-clone)
- docs/specs/components/Chat/ChatComposerDrawer.spec.md -> `context/github/meta-astryx/files/docs/specs/components/Chat/ChatComposerDrawer.spec.md` (24437 bytes, git-clone)
- docs/specs/components/Chat/ChatComposerInput.spec.md -> `context/github/meta-astryx/files/docs/specs/components/Chat/ChatComposerInput.spec.md` (42539 bytes, git-clone)
- docs/specs/components/Chat/ChatComposerTokenElement.spec.md -> `context/github/meta-astryx/files/docs/specs/components/Chat/ChatComposerTokenElement.spec.md` (11858 bytes, git-clone)
- docs/specs/components/Chat/ChatDictationButton.spec.md -> `context/github/meta-astryx/files/docs/specs/components/Chat/ChatDictationButton.spec.md` (14439 bytes, git-clone)
- docs/specs/components/Chat/ChatLayout.spec.md -> `context/github/meta-astryx/files/docs/specs/components/Chat/ChatLayout.spec.md` (24304 bytes, git-clone)

## Design-Relevant Excerpts

### packages/native/apple/Sources/Astryx/Theme/Generated/Tokens.swift

```
// Copyright (c) Meta Platforms, Inc. and affiliates.
// Generated by @astryxdesign/native from core's token names.
// Do not edit. Run `pnpm -F @astryxdesign/native generate:swift-ios` after a theme or core token change.

import SwiftUI

/// One mode of a theme: every token Swift keeps, as typed members.
public struct Tokens: Equatable, Sendable {
  public var color: ColorTokens
  public var space: SpaceTokens
  public var radius: RadiusTokens
  public var size: SizeTokens
  public var font: FontTokens
  public var shadow: ShadowTokens

  public init(
    color: ColorTokens,
    space: SpaceTokens,
    radius: RadiusTokens,
    size: SizeTokens,
    font: FontTokens,
    shadow: ShadowTokens
  ) {
    self.color = color
    self.space = space
    self.radius = radius
    self.size = size
    self.font = font
    self.shadow = shadow
  }
}

/// One layer of a theme's shadow, as CSS `box-shadow` draws it: a drop
/// shadow (an offset and a blur), or an inset ring `spread` points wide.
public struct ShadowLayer: Equatable, Sendable {
  public var x: CGFloat
  public var y: CGFloat
  public var blur: CGFloat
  public var spread: CGFloat
  public var isInset: Bool
  public var color: Color

  public init(
    x: CGFloat, y: CGFloat, blur: CGFloat, spread: CGFloat = 0, isInset: Bool = false, color: Color
  ) {
    self.x = x
    self.y = y
    self.blur = blur
    self.spread = spread
    self.isInset = isInset
    self.color = color
  }
}

/// The theme's `color` tokens, one typed member per token.
public struct ColorTokens: Equatable, Sendable {
  /// `--color-accent`
  public var accent: Color
  /// `--color-accent-muted`
  public var accentMuted: Color
  /// `--color-background-blue`
  public var backgroundBlue: Color
  /// `--color-background-body`
  public var backgroundBody: Color
  /// `--color-background-card`
  public var backgroundCard: Color
  /// `--color-background-cyan`
  public var backgroundCyan: Color
  /// `--color-background-error-inverted`
  public var backgroundErrorInverted: Color
  /// `--color-background-gray`
  public var backgroundGray: Color
  /// `--color-background-green`
  public var backgroundGreen: Color
  /// `--color-background-inverted`
  public var backgroundInverted: Color
  /// `--color-background-muted`
  public var backgroundMuted: Color
  /// `--color-background-orange`
  public var backgroundOrange: Color
  /// `--color-
...
```

### packages/native/apple/Sources/Astryx/Theme/Theme.swift

```
// Copyright (c) Meta Platforms, Inc. and affiliates.
// Adapted from github.com/ejc3/astryx-swift (MIT).

import SwiftUI

#if canImport(UIKit)
import UIKit
#elseif canImport(AppKit)
import AppKit
#endif

/// A theme's light and dark tokens, as typed members (`Generated/Tokens.swift`).
/// Every `Theme.<name>` is generated from an Astryx theme by core's own
/// resolver (`Generated/`); `Theme.default` is core's defaults. An app
/// generates its own theme the same way.
public struct Theme: Equatable, Sendable {
  public var light: Tokens
  public var dark: Tokens
  /// Images that replace the defaults for shared icon names, or register a
  /// `<library>:<name>` name (AST-082 FR17): an SF Symbol, such as
  /// `["success": "checkmark.seal.fill"]`, or an app asset, such as
  /// `["close": .assetName("brand.close")]`.
  public var icons: [String: IconImage]
  /// Native visual intent from `defineNativeTheme`. Reserved: empty until a
  /// component reads it.
  public var native: NativeIntent

  public init(light: Tokens, dark: Tokens, icons: [String: IconImage] = [:], native: NativeIntent = .init()) {
    self.light = light
    self.dark = dark
    self.icons = icons
    self.native = native
  }
}

/// Native visual intent a theme carries beside its tokens (durable `material`,
/// platform entries), resolved for the running OS version. Reserved and empty
/// until the first component reads it.
public struct NativeIntent: Equatable, Sendable {
  public init() {}
}

/// The tokens a component paints with: one mode of the theme, grown by the
/// person's Dynamic Type setting. Components read every color, size, and font
/// from here, never from a constant of their own.
public struct AstryxStyle: Sendable {
  /// The theme's tokens in the current mode, as typed members
  /// (`tokens.color.textPrimary`).
  public let tokens: Tokens
  /// How much Dynamic Type grows text at the person's setting (1 at Large).
  public let textScale: CGFloat
  /// The theme's replacements for shared icon names.
  public let icons: [String: IconImage]
  /// Whether the person turned on Bold Text (`legibilityWeight == .bold`).
  public let isBoldText: Bool

  public init(
    tokens: Tokens, textScale: CGFloat = 1, icons: [String: IconImage] = [:], isBoldText: Bool = false
  ) {
    self.tokens = tokens
    self.textScale = textScale
    self.icons = icons
    self.isBoldText = isBold
...
```

### apps/docsite/src/app/(docs)/components/layout.tsx

```tsx
// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * Supplies metadata for the /components gallery index. That page is a client
 * component ('use client'), which cannot export metadata, so this server layout
 * provides it. The dynamic /components/[name] pages set their own per-component
 * metadata via generateMetadata, which overrides the defaults declared here.
 */

import type {Metadata} from 'next';
import {pageMetadata} from '../../../lib/pageMetadata';
import {SITE_NAME} from '../../../lib/siteConfig';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Components',
    description:
      'Browse every Astryx component with copy-ready examples for each variant, state, and pattern.',
    path: '/components',
  }),
  // Brand the per-component page titles (e.g. "Button · Astryx") so browser
  // tabs are distinguishable. A plain string title at this layout segment was
  // shadowing the root title template for the dynamic /components/[name] pages,
  // so re-declare the template here; `default` titles the gallery index.
  title: {
    default: 'Components',
    template: `%s · ${SITE_NAME}`,
  },
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

```

### packages/cli/assets/templates/blocks/components/Layout/LayoutBasicCardLayout.tsx

```tsx
// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  HStack,
  VStack,
} from '@astryxdesign/core/Layout';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {Heading, Text} from '@astryxdesign/core/Text';

export default function LayoutBasicCardLayout() {
  return (
    <Card height={300} width="100%" style={{maxWidth: 400}}>
      <Layout
        header={
          <LayoutHeader hasDivider>
            <Heading level={4}>Card Title</Heading>
          </LayoutHeader>
        }
        content={
          <LayoutContent>
            <VStack gap={3}>
              <Text type="body">
                This is a basic card layout with a header, scrollable content
                area, and footer. The layout automatically handles padding and
                spacing between sections.
              </Text>
              <Text type="body">
                When content exceeds the available height, the content area
                scrolls independently while the header and footer stay fixed in
                place.
              </Text>
              <Text type="body">
                This pattern works well for modal dialogs, detail panels, and
                any card where the amount of content is unpredictable.
              </Text>
              <Text type="body">
                The dividers between header, content, and footer provide clear
                visual boundaries between the fixed and scrollable regions.
              </Text>
            </VStack>
          </LayoutContent>
        }
        footer={
          <LayoutFooter hasDivider>
            <HStack gap={2} hAlign="end">
              <Button label="Cancel" variant="secondary">
                Cancel
              </Button>
              <Button label="Save" variant="primary">
                Save
              </Button>
            </HStack>
          </LayoutFooter>
        }
      />
    </Card>
  );
}

```

### packages/cli/assets/templates/blocks/components/Layout/LayoutContentOnlyLayout.tsx

```tsx
// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Layout, LayoutContent, VStack} from '@astryxdesign/core/Layout';
import {Card} from '@astryxdesign/core/Card';
import {Heading, Text} from '@astryxdesign/core/Text';

export default function LayoutContentOnlyLayout() {
  return (
    <Card width="100%" style={{maxWidth: 400}}>
      <Layout
        content={
          <LayoutContent>
            <VStack gap={3}>
              <Heading level={4}>Simple Content</Heading>
              <Text type="body">
                A layout can have just content without header or footer. This is
                useful for simple cards or content blocks that don&apos;t need
                structured sections.
              </Text>
            </VStack>
          </LayoutContent>
        }
      />
    </Card>
  );
}

```

### packages/cli/assets/templates/blocks/components/Layout/LayoutDualPanelLayout.tsx

```tsx
// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutPanel,
  VStack,
} from '@astryxdesign/core/Layout';
import {Card} from '@astryxdesign/core/Card';
import {Heading, Text} from '@astryxdesign/core/Text';
import {List, ListItem} from '@astryxdesign/core/List';

export default function LayoutDualPanelLayout() {
  return (
    <Card width="100%" style={{maxWidth: 500}}>
      <Layout
        header={
          <LayoutHeader hasDivider>
            <Heading level={4}>File Browser</Heading>
          </LayoutHeader>
        }
        start={
          <LayoutPanel width={120} hasDivider>
            <VStack gap={1}>
              <Text type="label" color="secondary">
                Folders
              </Text>
              <List>
                <ListItem label="Documents" />
                <ListItem label="Projects" isSelected />
                <ListItem label="Downloads" />
              </List>
            </VStack>
          </LayoutPanel>
        }
        content={
          <LayoutContent>
            <VStack gap={2}>
              <Text type="label" color="secondary">
                Files
              </Text>
              <Card variant="muted">
                <Text type="body">Select a folder to view its contents</Text>
              </Card>
            </VStack>
          </LayoutContent>
        }
        end={
          <LayoutPanel width={120} hasDivider>
            <VStack gap={2}>
              <Text type="label" color="secondary">
                Details
              </Text>
              <Text type="body">Select a file to view details</Text>
            </VStack>
          </LayoutPanel>
        }
      />
    </Card>
  );
}

```

### packages/cli/assets/templates/blocks/components/Layout/LayoutSidebarLayout.tsx

```tsx
// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutPanel,
  HStack,
  VStack,
} from '@astryxdesign/core/Layout';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {Heading, Text} from '@astryxdesign/core/Text';
import {List, ListItem} from '@astryxdesign/core/List';

export default function LayoutSidebarLayout() {
  return (
    <Card width="100%" style={{maxWidth: 500}}>
      <Layout
        header={
          <LayoutHeader hasDivider>
            <Heading level={4}>Settings</Heading>
          </LayoutHeader>
        }
        start={
          <LayoutPanel hasDivider role="navigation" width={150}>
            <List>
              <ListItem label="General" isSelected />
              <ListItem label="Account" />
              <ListItem label="Privacy" />
              <ListItem label="Notifications" />
              <ListItem label="Security" />
            </List>
          </LayoutPanel>
        }
        content={
          <LayoutContent>
            <VStack gap={3}>
              <Heading level={5}>General Settings</Heading>
              <Text type="body">
                Configure your general preferences here. The sidebar navigation
                allows you to switch between different settings sections.
              </Text>
            </VStack>
          </LayoutContent>
        }
        footer={
          <LayoutFooter hasDivider>
            <HStack gap={2} hAlign="end">
              <Button label="Reset" variant="secondary">
                Reset
              </Button>
              <Button label="Save Changes" variant="primary">
                Save Changes
              </Button>
            </HStack>
          </LayoutFooter>
        }
      />
    </Card>
  );
}

```

### apps/docsite/src/app/layout.tsx

```tsx
// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @input Page content and site-wide metadata
 * @output Server-rendered document with root-owned optional reachability
 * @position Docsite root; page shells own the URL-aware info banner
 */

import type {Metadata} from 'next';
import {InternalDocsReachabilityProvider} from '../components/InternalDocsPrompt';
import {Analytics} from '@vercel/analytics/next';
import {SpeedInsights} from '@vercel/speed-insights/next';
import './globals.css';
import {Providers} from './providers';
// Public origin and identity live in lib/siteConfig so the sitemap and
// metadata stay in sync. metadataBase resolves relative OG/Twitter image
// paths to absolute URLs — social scrapers (Facebook, X, LinkedIn, Slack,
// iMessage) require absolute image URLs or the card image is dropped.
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
} from '../lib/siteConfig';

// Note: the Astryx theme (src/themes/astryxTheme.ts) is Figtree-first.
// We can't use next/font/google here (it requires SWC, but this app pins
// a custom babel.config.js for StyleX — they're mutually exclusive per
// https://nextjs.org/docs/messages/babel-font-loader-conflict). Figtree
// loads via the shared Google Fonts <link> in <head> below, which is the
// "Good" path from the theming wiki §Font Declarations.

// Default social card image: the launch banner that the announcement blog post
// uses for its cover. Reusing the same branded banner keeps the shared-link
// preview consistent with the launch creative across the site and the post.
const OG_IMAGE = '/images/Astryx-Banner.png';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    // Per-page `title` values render as "<page> · Astryx".
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  icons: {
    icon: '/favicon.svg',
  },
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  verification: {
    google: '2R11kontqme-N-8WuDSR0MZ1YVbKX3IQg3OM08UO_e0',
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    images: [
      {
        url: OG_IMAGE,
        width: 2400,
        height: 1260,
        alt: 'Astryx — an open source design system by Meta',
    
...
```

### apps/example-nextjs-source/src/app/layout.tsx

```tsx
// Copyright (c) Meta Platforms, Inc. and affiliates.

import type {Metadata} from 'next';
import './globals.css';
import {Providers} from './providers';

export const metadata: Metadata = {
  title: 'Astryx Example — Next.js (Source)',
  description:
    'Reference example compiling @astryxdesign/core from source with StyleX',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

```

### apps/example-nextjs-stylex/src/app/layout.tsx

```tsx
// Copyright (c) Meta Platforms, Inc. and affiliates.

import type {Metadata} from 'next';
import './globals.css';
import {Providers} from './providers';

export const metadata: Metadata = {
  title: 'Astryx Example — Next.js + StyleX (Dist)',
  description:
    'Reference example consuming @astryxdesign/core pre-built dist with StyleX for custom styles',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

```

### apps/example-nextjs-tailwind/src/app/layout.tsx

```tsx
// Copyright (c) Meta Platforms, Inc. and affiliates.

import type {Metadata} from 'next';
import './globals.css';
import {Providers} from './providers';

export const metadata: Metadata = {
  title: 'Astryx Example — Next.js + Tailwind (Dist)',
  description:
    'Reference example consuming @astryxdesign/core pre-built dist with Tailwind for custom styles',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

```

### apps/example-nextjs/src/app/layout.tsx

```tsx
// Copyright (c) Meta Platforms, Inc. and affiliates.

import type {Metadata} from 'next';
import './globals.css';
import {Providers} from './providers';

export const metadata: Metadata = {
  title: 'Astryx Example — Next.js (Dist)',
  description:
    'Reference example for consuming @astryxdesign/core as a pre-built dist package',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

```


## Package Files Materialized

- `source_examples/apps/docsite/src/app/docs/components/layout.tsx`
- `source_examples/packages/cli/assets/templates/blocks/components/Layout/LayoutBasicCardLayout.tsx`
- `source_examples/packages/cli/assets/templates/blocks/components/Layout/LayoutContentOnlyLayout.tsx`
- `source_examples/packages/cli/assets/templates/blocks/components/Layout/LayoutDualPanelLayout.tsx`
- `source_examples/packages/cli/assets/templates/blocks/components/Layout/LayoutSidebarLayout.tsx`
- `source_examples/packages/core/src/theme/syntax/tokens.ts`

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
