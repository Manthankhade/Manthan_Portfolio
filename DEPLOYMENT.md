# Deployment Guide

This is a static site after `npm run build` — the `dist/` folder is deployable anywhere that serves static files. Below are the three most common paths.

## Option 1 — Vercel (recommended, matches the brief)

1. Push this project to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Vercel auto-detects Vite. Confirm these settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Add environment variables (Project Settings → Environment Variables) if using EmailJS:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Deploy. Client-side routing (the 404 page) works automatically on Vercel for Vite SPAs.

## Option 2 — Netlify

1. Push to GitHub, then "Add new site" → "Import an existing project" in Netlify
2. Build command: `npm run build`, publish directory: `dist`
3. Add a `public/_redirects` file (create it if deploying here) with:
   ```
   /*  /index.html  200
   ```
   This makes client-side routing (React Router) work on refresh/direct links.
4. Add the same `VITE_EMAILJS_*` environment variables under Site settings → Environment variables

## Option 3 — Any static host (GitHub Pages, S3, Render static site, etc.)

1. Run `npm run build`
2. Upload the contents of `dist/` to your host
3. Configure the host to serve `index.html` for unknown routes (a "SPA fallback" or "404 → index.html" rewrite) — otherwise direct links to routes other than `/` will 404 at the server level before React Router gets a chance to render the custom 404 page.

## Pre-deploy checklist

- [ ] Replace `public/resume.pdf` with your real resume
- [ ] Update `github`/`linkedin`/`email` in `src/data/profile.ts`
- [ ] Update project `github`/`demo` links in `src/data/projects.ts`
- [ ] Set the three `VITE_EMAILJS_*` variables (or leave unset — the form degrades gracefully)
- [ ] Update the domain in `public/sitemap.xml` and the `og:image`/`og:title` in `index.html`
- [ ] Run `npm run build` locally once to confirm a clean build before pushing

## Custom domain

Both Vercel and Netlify support adding a custom domain from their dashboard (Project/Site Settings → Domains) with automatic HTTPS — no extra config needed in this repo.
