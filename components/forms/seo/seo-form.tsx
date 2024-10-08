"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useBlogStore, { BlogInitialState } from "@/hooks/use-blog-store";

// Zod schema for the SEO form validation
const seoSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    metaDescription: z.string().min(1, { message: "Meta Description is required" }),
    slug: z.string().min(1, { message: "Slug is required" }),
    canonicalURL: z.string().url({ message: "Invalid URL format" }),
    metaKeywords: z.string().optional(),
    openGraphTitle: z.string().optional(),
    openGraphDescription: z.string().optional(),
    openGraphImage: z.string().url().optional(),
    twitterCardTitle: z.string().optional(),
    twitterCardDescription: z.string().optional(),
    twitterCardImage: z.string().url().optional(),
    twitterHandle: z.string().optional(),
    author: z.string().optional(),
    wordCount: z.number().optional(),
    articleTags: z.array(z.string()).optional(),
    focusKeyword: z.string().optional(),
    nextPageURL: z.string().url().optional(),
    prevPageURL: z.string().url().optional(),
});

export function SeoForm({ slug }: { slug: string }) {

    const currentBlog = useBlogStore((state) => state.getBlogFromSlug)(slug) ?? BlogInitialState;

    const form = useForm({
        resolver: zodResolver(seoSchema),
        defaultValues: {
            title: currentBlog.title,
            metaDescription: "",
            slug: currentBlog.slug,
            canonicalURL: "",
            metaKeywords: "",
            openGraphTitle: "",
            openGraphDescription: "",
            openGraphImage: "",
            twitterCardTitle: "",
            twitterCardDescription: "",
            twitterCardImage: "",
            twitterHandle: "",
            author: currentBlog.author,
            wordCount: 0, // optional number
            articleTags: [], // empty array as default
            focusKeyword: "",
            nextPageURL: "",
            prevPageURL: "",
        },
    });

    function onSubmit(data: z.infer<typeof seoSchema>) {

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Title Field */}
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="SEO Title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Meta Description Field */}
                <FormField
                    control={form.control}
                    name="metaDescription"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Meta Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Meta description for SEO" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Slug Field */}
                <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Slug</FormLabel>
                            <FormControl>
                                <Input placeholder="URL Slug" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Canonical URL */}
                <FormField
                    control={form.control}
                    name="canonicalURL"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Canonical URL</FormLabel>
                            <FormControl>
                                <Input placeholder="https://example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Meta Keywords */}
                <FormField
                    control={form.control}
                    name="metaKeywords"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Meta Keywords</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. keyword1, keyword2" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Open Graph Title */}
                <FormField
                    control={form.control}
                    name="openGraphTitle"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Open Graph Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Title for Open Graph" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Open Graph Description */}
                <FormField
                    control={form.control}
                    name="openGraphDescription"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Open Graph Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Open Graph Description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Open Graph Image */}
                <FormField
                    control={form.control}
                    name="openGraphImage"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Open Graph Image URL</FormLabel>
                            <FormControl>
                                <Input placeholder="https://example.com/image.jpg" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Twitter Card Title */}
                <FormField
                    control={form.control}
                    name="twitterCardTitle"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Twitter Card Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Twitter Title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Twitter Card Description */}
                <FormField
                    control={form.control}
                    name="twitterCardDescription"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Twitter Card Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Twitter Card Description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Twitter Card Image */}
                <FormField
                    control={form.control}
                    name="twitterCardImage"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Twitter Card Image URL</FormLabel>
                            <FormControl>
                                <Input placeholder="https://example.com/image.jpg" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Author */}
                <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Author</FormLabel>
                            <FormControl>
                                <Input placeholder="Author Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Word Count */}
                <FormField
                    control={form.control}
                    name="wordCount"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Word Count</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="0" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Focus Keyword */}
                <FormField
                    control={form.control}
                    name="focusKeyword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Focus Keyword</FormLabel>
                            <FormControl>
                                <Input placeholder="Focus Keyword" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Next Page URL */}
                <FormField
                    control={form.control}
                    name="nextPageURL"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Next Page URL</FormLabel>
                            <FormControl>
                                <Input placeholder="https://example.com/next" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Previous Page URL */}
                <FormField
                    control={form.control}
                    name="prevPageURL"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Previous Page URL</FormLabel>
                            <FormControl>
                                <Input placeholder="https://example.com/prev" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
