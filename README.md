# LIVE / NEST

A premium furniture and home decor storefront — editorial interior photography,
a warm neutral palette, and a working shopping experience (product pages, search,
wishlist, cart, carousels).

## Stack

- React 18 + Vite (dev server on port 3000)
- Plain CSS with design tokens (`src/styles/`)
- React Router for the storefront routes
- No backend: product data is static, cart/wishlist persist in `localStorage`

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Run it in the Base44 sandbox

```bash
docker compose -f docker-compose.base44.yml up -d
```

The compose service runs the Vite dev server from the mounted source, so edits
hot-reload. See `AGENTS.md` for setup notes and how to verify changes.

## Structure

```
public/images/      interior + product photography (committed, no external CDN)
public/fonts/       self-hosted Cormorant Garamond + Inter
src/components/     Header, HeroSection, ProductCard, CartDrawer, Footer, …
src/pages/          Home, Shop, ProductPage, Collections, Rooms, Journal, …
src/data/           product catalogue and editorial content
src/context/        cart, wishlist and overlay state
```

## Notes

This is a front-end demonstration build: there is no payment provider connected and
no account storage. The checkout and sign-in flows say so explicitly rather than
faking a transaction.
