import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tag: z.string(),
    readingTime: z.string(),
    excerpt: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().optional().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { blog, projects };
