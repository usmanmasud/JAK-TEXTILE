# JAK Textiles — website

Next.js (App Router) + TypeScript. Single-page marketing site with WhatsApp ordering.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Before going live — edit these

**`lib/site.ts`** holds every business detail, used across the whole site:

- `whatsapp` — number in international format, digits only (e.g. `2348031234567`)
- `phoneDisplay`, `phoneHref`, `email`
- `address`, `hours`, `hoursShort`
- `social` links (Instagram, Facebook, TikTok)
- `url` — your real domain (used for SEO, sitemap and robots.txt)

**`lib/content.ts`** — fabrics, yardage guide and FAQ text.

## Adding real fabric photos

Fabric cards show drawn swatches by default. To use a photo, put the image in
`public/fabrics/` and add `image: "/fabrics/lace.jpg"` to that fabric in `lib/content.ts`.
Square or 16:10 daylight photos of the actual cloth work best.

## Deploy

Push to GitHub and import the repo at vercel.com (free tier is fine), then point your domain at it.
