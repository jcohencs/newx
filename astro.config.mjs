// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project-site config. If a custom domain is added later,
// set `base` back to '/' and update `site` accordingly.
export default defineConfig({
  site: 'https://jcohencs.github.io',
  base: '/newx',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
