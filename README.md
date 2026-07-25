# Manthan Khade — Portfolio

A production-ready personal portfolio built with React 19, TypeScript, Vite, and Tailwind CSS v4. Dark, terminal-inspired visual identity, real content (no lorem ipsum), and code-split for a fast first load.

**Live sections:** Hero · About · Skills · Projects · Education/Certificates/Achievements · GitHub Stats · Contact · 404

---

## Tech stack

| Layer | Tools |
|---|---|
| Framework | React 19, TypeScript, Vite 8 |
| Styling | Tailwind CSS v4 (`@theme` tokens, no config file needed) |
| Animation | Framer Motion |
| Routing | React Router v6 |
| Forms | React Hook Form |
| Email | EmailJS (`@emailjs/browser`) |
| Icons | Lucide React + React Icons (brand icons) |

Three.js/GSAP/Lenis were deliberately left out — the hero's signature "boot console" and ambient background are built with CSS + Framer Motion instead, which keeps the bundle small and avoids the flakiness heavy 3D/animation libraries can introduce for a portfolio site. See "Extending" below if you want to add them back in.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, LoadingScreen, PageTransition
│   ├── ui/            # Reusable primitives: Button, Tag, Reveal, BootConsole, AmbientBackground, CursorDot
│   ├── sections/      # Hero, About, Skills, Projects, Education, GithubStats, Contact
│   └── project/       # ProjectCard, ProjectModal
├── data/              # profile.ts, skills.ts, projects.ts, education.ts — all real content lives here
├── hooks/              # useTypewriter, useCountUp, useScrollSpy, useGithubStats
├── lib/                # emailjs.ts (env-based config)
├── pages/              # Home.tsx, NotFound.tsx
├── types/              # shared TypeScript interfaces
├── App.tsx             # routes, loading screen, cursor
├── main.tsx            # entry point
└── index.css           # design tokens (@theme) + base styles
```

## Editing your content

Everything a recruiter reads lives in `src/data/`:

- `profile.ts` — name, roles, summary, email, GitHub/LinkedIn URLs, resume path, hero stats
- `skills.ts` — skills grouped by category with a 0–100 proficiency value
- `projects.ts` — one object per project; the modal reads `overview`, `challenges`, `architecture`, `features`, `tech` directly from here
- `education.ts` — education history, plus `certificates`/`achievements` (currently empty arrays — the UI shows an honest "not added yet" state until you fill these in, rather than fake data)

No component code needs to change to update content — edit the data files and the site re-renders.

## Setting up the contact form (EmailJS)

The contact form is fully wired to EmailJS but needs your credentials:

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Add an email service and a template with variables `from_name`, `from_email`, `message`, `to_name`
3. Copy `.env.example` to `.env.local` and fill in your service ID, template ID, and public key
4. Restart `npm run dev`

Until configured, the form still validates correctly but shows a friendly fallback pointing to your email address instead of silently failing.

## Replacing the resume

`public/resume.pdf` is currently a placeholder file. Replace it with your real resume (same filename), or update `resumeUrl` in `src/data/profile.ts` if you rename it.

## GitHub stats

`src/hooks/useGithubStats.ts` calls the public GitHub REST API (`api.github.com/users/:username`) directly from the browser — no token needed, since it only reads public data. It reads the username from your `profile.github` URL, so update that one field and the stats card follows automatically.

## Performance & SEO

- Below-the-fold sections are lazy-loaded (`React.lazy` + `Suspense`) so the initial JS bundle stays lean
- Semantic HTML, visible focus states, and `prefers-reduced-motion` support throughout
- `index.html` ships Open Graph tags and a description meta; update the domain in `public/sitemap.xml` once deployed
- Fonts are preconnected and loaded with `display=swap`

Run a Lighthouse pass after deploying (`npm run build && npm run preview`, then audit the preview URL) — scores will vary slightly with your hosting provider's caching and compression setup.

## Extending

- **Per-project routes:** Projects currently open in a modal (fast, no extra routing). If you'd rather have `/projects/:slug` pages, add a route in `App.tsx` and reuse the content already structured in `ProjectModal.tsx`.
- **Light mode:** Tokens are centralized in `src/index.css`'s `@theme` block — add a `[data-theme="light"]` override block and a toggle in the navbar.
- **Blog:** Add a `pages/Blog.tsx` and `data/posts.ts` following the same pattern as Projects.

See `DEPLOYMENT.md` for hosting instructions.
