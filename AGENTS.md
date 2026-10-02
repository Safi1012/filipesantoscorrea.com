# AGENTS.md

Guidance for AI coding agents (and humans) working on this repository. For the user-facing overview, see [README.md](README.md).

## Project

A minimal, static personal website built with Astro and deployed to Cloudflare Pages. It has three pages: the homepage (`/`) with an animated tsParticles background, a legal notice (`/legal`) and a privacy policy (`/privacy`). There is no backend, UI framework or client-side routing.

## Setup

- Node.js version is pinned in `.nvmrc` (exact LTS version). pnpm is pinned in `package.json#packageManager` and provided by corepack: run `corepack enable` once. Do not use npm or yarn, and do not add other lockfiles.
- `cp .env.example .env` before building. The build **fails** if any `LEGAL_*` variable is missing (by design).
- `pnpm install` respects `allowBuilds` in `pnpm-workspace.yaml`. If a new dependency needs an install script, add it there explicitly (`pnpm approve-builds <pkg>`).

## Commands

| Task               | Command                |
| :----------------- | :--------------------- |
| Dev server         | `pnpm dev` (port 4321) |
| Lint               | `pnpm lint`            |
| Format             | `pnpm prettier`        |
| Check formatting   | `pnpm prettier:check`  |
| Type-check + build | `pnpm build`           |
| Preview production | `pnpm astro preview`   |

**Before finishing any change, run `pnpm lint`, `pnpm prettier:check` and `pnpm build`.** CI runs the same three. There is no test suite, so verify behaviour changes in a browser (`pnpm dev`).

## Layout

```text
src/components/   About, Links, Footer, Particles (tsParticles setup)
src/layouts/      Layout.astro (base HTML + meta), LegalPage.astro (legal pages shell)
src/pages/        index, legal, privacy
src/styles/       colors.css (design tokens), fonts.css, page.css (legal pages)
src/assets/       SVG icons
public/           fonts, icons, manifest.json, robots.txt
.github/          CI workflow, shared setup action, hero image
```

## Conventions

- **Commits** follow [Conventional Commits](https://www.conventionalcommits.org/): `feat`, `fix`, `perf`, `refactor`, `docs`, `style`, `build`, `ci`, `chore`, with an optional scope such as `feat(particles): …`, `fix(legal): …` or `build(deps): …`. Keep the subject at 72 characters or fewer, in the imperative mood.
- **Formatting** is Prettier with `prettier-plugin-astro`, and **linting** is ESLint flat config (`eslint.config.js`) with typescript-eslint, eslint-plugin-astro and its a11y rules. Don't disable rules inline without a reason.
- **Colors** live as CSS custom properties in `src/styles/colors.css`. Reuse them instead of hard-coding values.
- **Images** go through Astro's passthrough image service (no sharp). Keep assets as SVG, or add `sharp` back if raster optimization is needed.
- **Personal data** (name, address, email) comes from `astro:env` (`LEGAL_*`), never from hard-coded strings. Never commit `.env` or real contact details.

## Gotchas

- **tsParticles v4 is fully modular.** Every feature needs its own package, _and_ its loader has to be called in `src/components/Particles.astro` before `tsParticles.load()`. A missing loader fails silently: particles exist but are invisible, static or never come back on screen. Currently required:
  - `engine`
  - `plugin-interactivity`: must be loaded before the interaction packages
  - `plugin-hex-color`: parses `#rrggbb` colors
  - `shape-circle`
  - `updater-paint`: fill color and opacity
  - `updater-size`
  - `plugin-move`
  - `updater-out-modes`
  - `interaction-external-repulse` (hover) and `interaction-external-push` (click)

  When adding an option, check which package handles it, and verify in a browser.

- **The particles canvas is `position: fixed` and covers the page.** Content that must stay clickable needs `position: relative` and `z-index: 1` (see `Footer.astro`), or to be a flex item with a `z-index`.
- **Astro collapses whitespace between an expression or text and a following tag on a new line.** Use `{" "}` before inline links that start a new line, and template strings for values that must be space-separated (for example ``{`${LEGAL_POSTAL_CODE} ${LEGAL_CITY}`}``). Check the rendered text.
- **The privacy policy must match reality.** It states that the site is hosted on Cloudflare Pages, that email runs via iCloud Mail, and that there are no tracking cookies, analytics, third-party requests or embeds. If you add anything that loads external resources, sets cookies or stores data (fonts from a CDN, analytics, embeds, `localStorage`), stop and flag it: `src/pages/privacy.astro` (German **and** English sections) must be updated, and a consent banner may be needed under § 25 TDDDG.
- **Legal pages** are bilingual: German is authoritative and English is a translation. Keep both in sync.

## CI/CD

`.github/workflows/pipeline.yml` runs lint, Prettier and build on every pull request and push. On pushes to `main` it deploys `dist/` to Cloudflare Pages via the `production` environment.

- Actions are **pinned to commit SHAs** with a version comment. Keep that pattern when updating them.
- Shared setup (Node from `.nvmrc`, corepack, pnpm store cache, install) lives in `.github/actions/setup`.
- The build reads `LEGAL_*` from GitHub Actions **variables**, and the deploy uses the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` **secrets**.
