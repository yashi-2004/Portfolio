# Yashi Srivastava — Portfolio

A personal portfolio site built with Next.js 15 (App Router), TypeScript, Tailwind CSS,
and Framer Motion. Soft, elegant, feminine aesthetic — built to read as technically
strong without looking like a generic dev template.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS (custom blush / lavender / periwinkle palette, warm charcoal dark mode)
- Framer Motion for page and scroll animations
- react-hook-form + zod for the contact form
- next-themes for light/dark mode
- lucide-react icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/            → routes (one folder per page), layout.tsx, globals.css
components/     → shared UI: Navbar, Footer, ProjectCard, ContactForm, etc.
lib/            → data.ts (all resume content), utils.ts (cn helper)
public/resume/  → the downloadable/embeddable resume PDF
```

All resume content (experience, projects, skills, achievements) lives in
`lib/data.ts`. Update that file to change the site's content — no need to touch
components.

## Contact form setup

The form posts to `app/api/contact/route.ts`, which uses [Resend](https://resend.com)
if configured:

1. Create a Resend account and API key.
2. Copy `.env.example` to `.env.local` and fill in:
   ```
   RESEND_API_KEY=your_key_here
   CONTACT_TO_EMAIL=you@example.com
   ```
3. Without these set, submissions are logged server-side instead of emailed,
   so the form still works end-to-end during development.

Prefer EmailJS instead? Swap the `fetch("/api/contact")` call in
`components/ContactForm.tsx` for the `@emailjs/browser` SDK using your
service/template/public key from `.env.example`.

The form includes a hidden honeypot field (`company`) for basic spam protection.

## Theming

Colors and fonts are defined as design tokens in `tailwind.config.ts`
(blush, lavender, lilac, periwinkle, baby blue, warm grey + warm-charcoal dark mode).
Fonts: Plus Jakarta Sans (display), Inter (body), Space Grotesk (mono/data),
loaded via `next/font/google` in `app/layout.tsx`.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Deploy — no additional configuration needed.

## Easter eggs

- Sparkle animation on the nav logo (hover it).
- A friendly message in the browser console.
- The Konami code (↑ ↑ ↓ ↓ ← → ← → B A) triggers a little celebration.
