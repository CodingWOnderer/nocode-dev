import * as z from "zod";

const blogListSchema = z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(),
    image: z.string().url() // Validates that the image is a URL
});

export type BlogListType = z.infer<typeof blogListSchema>