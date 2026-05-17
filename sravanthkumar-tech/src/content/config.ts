import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    link: z.string().optional(),
    image: z.string().optional(),
    date: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { projects };
