# HydroPulse — Sanity Studio

**Handoff / roadmap:** see [`SANITY.md`](../SANITY.md) in the repo root (what’s done, current split between `data.js` and Studio, and what to build next).

Content types mirror the static prototype (`data.js`): news/events, partners, demo sites, resources, related EU projects, and global settings.

## Do you need the Sanity CLI installed globally?

**No.** Use `npx` or the npm scripts below. A global install is optional.

## One-time setup

1. Create a project (free tier is enough): [sanity.io/manage](https://www.sanity.io/manage) → **Create project**.
2. Note the **Project ID** and choose a **dataset** (usually `production`).
3. **Put `.env` inside `studio/`** (Sanity’s Vite app does not read the repo-root `.env`).

   ```bash
   cd studio
   cp .env.example .env
   ```

   Edit `studio/.env` and set `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET`.

   **Why no `"type": "module"` in `package.json`?** The Sanity CLI loads `sanity.cli.js` with CommonJS `require`. If the package were ESM-only, that file could not export `api.projectId` and you would see *“sanity.cli.js does not contain a project identifier”*. Studio itself uses **`sanity.config.mjs`** and **`schemaTypes/*.mjs`** (ESM).

4. Install and run:

   ```bash
   npm install
   npm run dev
   ```

   Studio opens at [http://localhost:3333](http://localhost:3333) (default). Log in with the same Sanity account.

5. Authenticate the CLI once on your machine (stores a session), **or** add `SANITY_AUTH_TOKEN` to `studio/.env` for headless/CI:

   ```bash
   npx sanity login
   ```

## Seed content from the prototype (`data.js`) via CLI

The script `scripts/build-seed.mjs` reads the repo-root `data.js` and writes `seed/seed.ndjson` (gitignored). Import replaces documents with the same `_id` so you can re-run safely.

From `studio/`:

```bash
npm run seed
```

Or from the repo root:

```bash
npm run studio:seed
```

Requirements: `studio/.env` with `SANITY_STUDIO_PROJECT_ID` (and dataset if not `production`), plus either `sanity login` or `SANITY_AUTH_TOKEN` with write access to the dataset.

After seeding, open Studio — you should see **Site settings** (`site-settings`), partners, demo sites, news/events, resources, and related projects. Images are not synced (add hero images in Studio or extend the seed script with asset URLs later).

## Deploy Studio (optional)

```bash
npm run deploy
```

Hosts the editor at `https://YOUR_PROJECT.sanity.studio` (or a custom host). Non-interactive environments need `SANITY_AUTH_TOKEN` in `studio/.env`.

## Wiring the static site to Sanity (next step)

The main site (`HydroPulse.html` + JSX) still reads `window.HP_DATA`. To go live on CMS data you will:

- Add `@sanity/client` (or fetch from the **CDN API**) in a small build step or script, **or**
- Move the front end to Vite/Next and fetch at runtime.

Until then, export copy from Studio or maintain `data.js` by hand; the schemas stay the source of truth for field names.

## GROQ quick check

With **Vision** (toolbar in Studio), try:

```groq
*[_type == "newsOrEvent"] | order(publishedAt desc) { title, kind, publishedAt }
```
