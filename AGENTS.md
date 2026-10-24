# AGENTS.md

LIVE / NEST is a static React + Vite storefront. There is no backend, database or
API: the cart and wishlist live in `localStorage`, and product data is static in
`src/data/products.js`. Do not add a server for a UI request.

## Running it (sandbox)

```bash
docker compose -f docker-compose.base44.yml up -d --build
curl -sI http://localhost:3000/            # expect 200 + Vite dev HTML
docker compose -f docker-compose.base44.yml logs -f web
```

- One service (`web`), `node:22`, bind-mounted source, `npm run dev` on port 3000.
- Dependencies are installed at container start (`npm install`), so a fresh clone
  with no `node_modules` works but the first boot takes ~30s. `start_period` on
  the healthcheck covers that.
- Healthcheck shells out to `node -e fetch(...)` because the image has no curl/wget.

## Non-obvious details

- **Assets are committed locally** in `public/images` and `public/fonts` (36 photos,
  self-hosted Cormorant Garamond + Inter). `public/fonts/fonts.css` is generated from
  Google Fonts' latin subsets and uses relative URLs — keep it next to the `.woff2`
  files. Nothing loads from an external CDN at runtime, so the preview works offline.
- **Sandbox overrides are gated** in `vite.config.js` on
  `process.env.BASE44_PREVIEW_MODE === '1'`: only then is the host allowlist widened
  to `.${BASE44_SANDBOX_HOST_DOMAIN}` and watcher polling enabled. With the flag
  unset it behaves like a plain local Vite server. Vite also appends
  `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS`, which compose passes through.
- The dev server is a SPA: every route (`/shop`, `/product/:id`, `/collections/:slug`,
  `/rooms/:slug`, `/journal/:slug`, `/account`, `/help`, `/about`, `/legal/:slug`)
  must be reachable by direct URL — Vite's history fallback handles this in dev.
- Cart/wishlist persistence keys: `livenest.cart.v1`, `livenest.wishlist.v1`. Bumping
  the item shape means bumping the key.
- No payment integration exists on purpose. The checkout button reports that it is a
  demo; the newsletter form says no email is sent. Keep those notices honest.

## Verifying a change

Frontend-only project: edit, then load `http://localhost:3000/`. Useful checks:
homepage sections in order (announcement → header → hero → categories → rooms →
bestsellers → banners → styled-by-you → services → footer), product page add-to-bag
increments the header count, search dialog finds by name, and no horizontal overflow
at 1440 / 768 / 390 widths.

`npm run build` is the only static check available (no test runner, no linter).
