# Stratum — FTC Decode Season RP Tracker

A mobile-friendly progressive web app for tracking Ranking Points (RP) during FTC Decode season matches.

## Features

- **Pattern Selector** — Cycle through PPG / PGP / GPP with a single tap
- **Auto & Tele-Op Ramps** — 9-position ramp grids with auto-fill logic (tapping position N automatically fills positions 1–N-1 with purple)
- **Goal Counter** — Large tap-to-increment button tracks balls through the Square; small decrement button for corrections
- **Progress Bars** — Live Pattern RP (threshold: 18) and Goal RP (threshold: 36) indicators
- **Match Reset** — Clears everything with a confirmation prompt

## Tech Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- CSS Modules for scoped styling
- PWA manifest + service worker for offline / home-screen use
- Deployed via GitHub Actions to GitHub Pages

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run lint     # ESLint
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via `.github/workflows/deploy.yml`.
