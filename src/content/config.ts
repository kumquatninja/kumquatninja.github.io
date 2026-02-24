import { z, defineCollection } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        year: z.string(),
        sort: z.number().optional(),
        company: z.string().optional(),
        role: z.string().optional(),
        genre: z.string().optional(),
        features: z.array(z.string()).optional(),
        summary: z.string().optional(),
        mediaType: z.enum(["video", "image"]),
        mediaSrc: z.string(),
        logoSrc: z.string().optional(),
    }),
});

const art = defineCollection({
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        mediaType: z.enum(["image", "video"]),
        mediaSrc: z.string(),
        description: z.string().optional(),
    }),
});

export const collections = { projects, art };