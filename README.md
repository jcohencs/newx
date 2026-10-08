# Joshua Cohen — Portfolio

Personal site built with [Astro](https://astro.build) + Tailwind CSS v4, deployed to GitHub Pages.

## Stack

- **Astro** — static site generation, content collections for blog posts and project case studies
- **Tailwind CSS v4** — utility-first styling, layered with custom CSS variables for the dark/light theme system
- **MDX-ready content collections** — `src/content/blog/*.md` and `src/content/projects/*.md`

## Structure

```
src/
  components/   Reusable UI pieces (Nav, Hero, About, Experience, Skills, Projects, Education, Certifications, Footer, ThemeToggle, ParticleBackground)
  content/
    blog/       Blog posts (Markdown, frontmatter: title, date, tag, readingTime, excerpt)
    projects/   Project case studies (Markdown, frontmatter: title, icon, summary, tags, order)
  layouts/      BaseLayout.astro — shared <head>, nav, footer, particle background
  lib/data.ts   Resume content: hero, about, experience, skills, education, certifications, contact info
  pages/
    index.astro         Resume home page
    blog/index.astro    Blog listing
    blog/[...slug].astro  Individual blog posts
    projects/[...slug].astro  Individual project case studies
    contact.astro       Contact form (Formspree)
```

## Editing content

- **Resume data** (experience, skills, education, certifications, contact info): edit `src/lib/data.ts`.
- **Blog posts**: add a new `.md` file to `src/content/blog/` with the required frontmatter.
- **Projects**: add a new `.md` file to `src/content/projects/` with the required frontmatter. New projects automatically appear in the Projects grid on the home page and get their own case-study page at `/projects/<filename>/`.

## Contact form

The contact form at `/contact/` posts to Formspree. Before launch, replace the placeholder
`action="https://formspree.io/f/YOUR_FORM_ID"` in `src/pages/contact.astro` with a real
Formspree form endpoint (free tier works fine for a personal site): https://formspree.io

## Development

```bash
npm install
npm run dev       # http://localhost:4321/newx/
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys
it to GitHub Pages. Enable Pages in the repo settings (Settings → Pages → Source: GitHub Actions)
for the first deploy.

The site is configured for a **project page** at `https://jcohencs.github.io/newx/`
(see `base: '/newx'` in `astro.config.mjs`). If a custom domain is added later, change
`base` back to `/` and update `site` in `astro.config.mjs` accordingly.

## PDF / print

The "PDF" button in the nav triggers the browser's native print dialog (`window.print()`),
styled with a print stylesheet that hides the nav, footer, particle background, and Pikachu
easter egg. Visitors can "Save as PDF" from the print dialog.
