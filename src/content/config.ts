import { z, defineCollection } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        year: z.string(),
        company: z.string().optional(),
        role: z.string().optional(),
        features: z.array(z.string()).optional(),
        mediaType: z.enum(["video", "image"]),
        mediaSrc: z.string(), // e.g. /assets/dev/bo7-trailer-clip-1.mp4
    }),
});

export const collections = { projects };