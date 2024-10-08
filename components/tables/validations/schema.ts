import * as z from "zod";

const blogListSchema = z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(),
    image: z.string().url() // Validates that the image is a URL
});

const seoListSchema = z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(),
    image: z.string().url()
})

export type BlogListType = z.infer<typeof blogListSchema>
export type SeoListType = z.infer<typeof seoListSchema>