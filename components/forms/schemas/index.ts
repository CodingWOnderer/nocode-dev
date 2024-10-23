import * as z from "zod";

export const BlogformSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    discription: z.string().min(10, { message: "atleast 10 words" }),
    slug: z
        .string()
        .min(1, { message: "Slug is required" })
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
            message: "Slug must be lowercase and hyphenated",
        }),
    date: z.date().optional(),
    category: z.string(),
    author: z.string(),
    image: z.string().optional(),
    userTags: z.array(z.string()),
    content: z.string().min(1, { message: "Content is required" }),
});

export type BlogTypes = z.infer<typeof BlogformSchema>;