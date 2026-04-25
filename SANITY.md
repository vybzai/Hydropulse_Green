# HydroPulse × Sanity — handoff

CMS is **Sanity**. The public prototype still runs on **`data.js`** (`window.HP_DATA`); Studio is ready for editors, but the **site does not fetch Sanity yet**.

## What’s in place

- **`studio/`** — Sanity Studio v3: `sanity.config.mjs`, `sanity.cli.js` (CommonJS for CLI + `.env` loading), schemas under `schemaTypes/*.mjs`.
- **Content types** — `siteSettings`, `newsOrEvent`, `partner`, `demoSite`, `resourceItem`, `relatedProject` (aligned with the prototype’s `data.js` shape where it matters).
- **CLI seed** — `studio/scripts/build-seed.mjs` reads repo-root **`data.js`** and writes `studio/seed/seed.ndjson` (gitignored). `npm run seed` in `studio/` (or `npm run studio:seed` from root) runs `sanity dataset import … --replace`.
- **Root npm scripts** — `studio`, `studio:build`, `studio:seed` in root `package.json`.

## Current workflow

- **Prototype / design iteration:** edit **`data.js`** (and JSX as today). Optionally re-seed Sanity so Studio stays roughly in sync for demos.
- **CMS work:** run Studio (`npm run studio` from root), edit in Sanity; changes **do not** appear on `HydroPulse.html` until the wire (below).

## Next (release / client-editable site)

1. **Wire the front end** — GROQ + CDN (or `@sanity/client`) in a build step or runtime loader; map Sanity documents into the same shape as `HP_DATA` (or refactor components to read CMS fields).
2. **CORS** — allow the site origin on the Sanity project when using browser-side API calls.
3. **Images** — seed does not upload assets; hero/logo URLs need Studio uploads or extended import.
4. **Deploy Studio** — `npm run deploy` from `studio/` for hosted editing.

## Setup & commands

See **`studio/README.md`** (env vars, login, seed, deploy, GROQ snippet).
