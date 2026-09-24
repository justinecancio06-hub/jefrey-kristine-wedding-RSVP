# Jefrey & Kristine — Wedding Invitation

A beautiful, **100% static** wedding invitation site. No database, no RSVP,
no backend — the whole thing is a single page of HTML/CSS with zero client
JavaScript. Deploy it to Vercel with one click and no environment variables.

Stack: **Next.js 16 (App Router) + TypeScript + Tailwind v4 + next/font**
(static export via `output: 'export'`).

---

## Design

Sage green page (`#8a9a7b`) with cream cards (`#f5f1e8`) floating on top —
like a formal invitation. Serif headings (Cormorant Garamond), Inter body
text, gold accents (`#c9a961`). Built mobile-first.

### Folder structure

```
wedding-rsvp/
├─ public/
│  └─ images/                ← drop real photos here later
└─ src/
   ├─ app/
   │  ├─ layout.tsx          fonts (next/font) + metadata
   │  ├─ page.tsx            Hero → Invitation → Gallery → Footer
   │  └─ globals.css         Tailwind v4 theme (sage/cream/gold palette)
   └─ components/
      ├─ Hero.tsx            names, date, venue, hero photo slot
      ├─ Invitation.tsx      “Only You Are Invited” message
      ├─ Gallery.tsx         4-photo grid
      └─ ImagePlaceholder.tsx  reusable photo slot (swap for <img> later)
```

---

## Run locally

Requirements: **Node.js 20.9+** and **VS Code**.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command               | What it does                          |
| --------------------- | ------------------------------------- |
| `npm run dev`         | Dev server with live reload           |
| `npm run lint`        | ESLint                                |
| `npm run typecheck`   | TypeScript check (`tsc --noEmit`)     |
| `npm run build`       | Static production build into `out/`   |

---

## Deploy to Vercel (no env vars needed)

1. Create a repo on GitHub, then push:

   ```bash
   git init
   git add .
   git commit -m "Jefrey & Kristine wedding invitation"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/wedding-rsvp.git
   git push -u origin main
   ```

   (Use your real GitHub repo URL; create it empty first on github.com.)

2. Go to https://vercel.com → **New Project** → **Import** your GitHub repo.
3. Vercel auto-detects Next.js — click **Deploy**. That's it.
   - **No environment variables.** The site is fully static, so nothing is
     required and nothing is read from the server at runtime.
4. Every `git push` to `main` auto-redeploys.

---

## Replacing the photo placeholders

1. Drop your photos into `public/images/` — e.g.
   `public/images/couple.jpg`, `photo-1.jpg`, …, `photo-4.jpg`.

2. Swap each `<ImagePlaceholder />` for a real image.

   Plain `<img>` (static export friendly):

   ```tsx
   <img
     src="/images/couple.jpg"
     alt="Jefrey and Kristine on their engagement day"
     className="aspect-[16/9] w-full rounded-2xl object-cover md:aspect-[21/9]"
   />
   ```

   Or `next/image` (requires `images.unoptimized` in the static export):

   ```tsx
   <Image
     src="/images/couple.jpg"
     alt="Jefrey and Kristine on their engagement day"
     width={2100}
     height={900}
     className="aspect-[16/9] w-full rounded-2xl object-cover md:aspect-[21/9]"
   />
   ```

   If you use `next/image` with a static export, add to `next.config.ts`:

   ```ts
   images: { unoptimized: true },
   ```

3. Where each slot lives:

   | Slot           | File                          | Suggested size |
   | -------------- | ----------------------------- | -------------- |
   | Couple's Photo | `src/components/Hero.tsx`     | 2100×900 (21:9) |
   | Photo 1–4      | `src/components/Gallery.tsx`  | 1200×1600 (3:4) |

> Tip: portrait gallery shots at 3:4 look best; compress JPEGs (~200–400 KB)
> so the page stays fast on phones.

---

## Design decisions worth knowing

- **Why no DB / no RSVP?** The invitation is the finished product — there is
  nothing to collect, store, or secure. Without a database there are no keys
  to rotate, no schema to migrate, nothing that can go offline, and the
  deploy is a single static export. Guests get the fastest possible page.
- **`output: 'export'`** makes `next build` emit plain HTML/CSS/JS into
  `out/`, so Vercel serves static files — no server functions, no edge
  runtime cost.
- **Fonts are self-hosted** by `next/font`, so there are no Google font
  requests from the browser.

## Customizing things

- **Colors / fonts** — edit `src/app/globals.css` (`@theme`) and
  `src/app/layout.tsx`.
- **Copy** — edit `src/components/Hero.tsx`, `Invitation.tsx`, `Gallery.tsx`.
- **Metadata / page title** — edit the `metadata` export in
  `src/app/layout.tsx`.