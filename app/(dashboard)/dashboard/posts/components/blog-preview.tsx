"use client";

import React from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import * as z from "zod";
// import { BlogForm } from "@/components/forms/blog/blog-creation-form";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import useBlogStore, { BlogInitialState } from "@/hooks/use-blog-store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BlogformSchema } from "@/components/forms/schemas";
import { toast } from "sonner";
import { BlogPostFormSkeleton } from "@/components/skeletons/blog-posts-form";
import BlogPreviewSkeleton from "@/components/skeletons/blog-preview-skeleton";
import { cn } from "@/lib/utils";
import { CreationHeader } from "./creation-header";
import { sanitizeHtml } from "@/utils/sanitize-html";
import { BlogForm } from "@/components/forms/blog/blog-creation-form";


export const BlogPreview = ({ slug }: { slug: string }) => {
    const { setLocalBlog } = useBlogStore();

    const setBlogList = useBlogStore((state) => state.setBlogList);

    const getBlogFromSlug = useBlogStore((state) => state.getBlogFromSlug);

    const currentBlog = slug === "new-blog" ? BlogInitialState : getBlogFromSlug(slug);

    /**
     * 
     * @description sanitizing string rendered html
     * 
     */

    const sanitize_html = sanitizeHtml(currentBlog?.content ?? "<div>Empty</div>");


    const form = useForm({
        resolver: zodResolver(BlogformSchema),
        defaultValues: {
            title: currentBlog?.title ?? "",
            slug: currentBlog?.slug ?? "",
            date: currentBlog?.date as Date | undefined,
            image: currentBlog?.image as string | undefined,
            category: currentBlog?.category ?? "",
            author: currentBlog?.author ?? "",
            discription: currentBlog?.discription ?? "",
            content: currentBlog?.content ?? "",
            userTags: currentBlog?.userTags ?? ([] as string[]),
        },
    });

    function onSubmit(data: z.infer<typeof BlogformSchema>) {
        setLocalBlog({ ...data, date: data.date?.toISOString(), publish: false });
        setBlogList({ ...data, date: data.date?.toISOString(), publish: false });
        toast.success("Your blog has been created");
    }

    return (
        <>

            <CreationHeader onSubmit={onSubmit} handleSubmit={form.handleSubmit} slug={slug} />
            <div>
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel minSize={30} defaultSize={50}>
                        <ScrollArea className="h-[calc(100dvh-3.3rem)] px-5">
                            <div className=" max-w-2xl mx-auto py-8 md:py-16">
                                {currentBlog ? (
                                    <BlogForm form={form} />
                                ) : (
                                    <BlogPostFormSkeleton />
                                )}
                            </div>
                            <ScrollBar orientation={"vertical"} />
                        </ScrollArea>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel minSize={30} defaultSize={50}>
                        <ScrollArea className={cn(`h-[calc(100dvh-3.3rem)]`, currentBlog && "px-5")}>
                            {currentBlog ? (
                                <div className=" max-w-2xl mx-auto ">
                                    <div className=" max-w-4xl gap-16 py-8 md:py-16 lg:py-24  flex flex-col mx-auto">
                                        <div className="space-y-6">
                                            <Badge className=" bg-primary/30 rounded-full border-primary text-primary space-x-1.5">
                                                <Badge
                                                    variant={"secondary"}
                                                    className="text-xs rounded-full"
                                                >
                                                    {form.watch("category") ?? "leadership lesson"}
                                                </Badge>{" "}
                                                <span>8 min read</span>
                                            </Badge>
                                            <h2 className=" text-3xl md:text-4xl font-bold">
                                                {`${form.watch("title")}`}
                                            </h2>
                                            <p className=" text-muted-foreground line-clamp-4 text-base md:text-lg">
                                                {`${form.watch("discription")}`}
                                            </p>
                                        </div>

                                        <div>
                                            <div className="relative rounded-md overflow-clip aspect-[343/240] md:aspect-[1216/640]">
                                                <Image
                                                    src={
                                                        form.watch("image") ??
                                                        "https://assets.lummi.ai/assets/QmYJRWNyrYdM4TNvWAV5hHdbYXxbCCPb1eqynhK6Nwgs2L?auto=format&w=1500"
                                                    }
                                                    fill
                                                    alt="@blog"
                                                />
                                            </div>
                                            <div className="flex py-3 space-x-1">
                                                {form.watch("userTags").map((item, index) => {
                                                    return (
                                                        <Badge
                                                            variant={"outline"}
                                                            className=" text-muted-foreground"
                                                            key={index}
                                                        >
                                                            #{item}
                                                        </Badge>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center space-x-6  w-full">
                                                <div className="flex flex-col space-y-2">
                                                    <p className=" text-muted-foreground text-sm">
                                                        Written by
                                                    </p>
                                                    <h2 className="text-lg">
                                                        {form.watch("author") ?? "Bill walsh"}
                                                    </h2>
                                                </div>
                                                <div className="flex flex-col space-y-2">
                                                    <p className=" text-muted-foreground text-sm">
                                                        Published on
                                                    </p>
                                                    <h2 className="text-lg">
                                                        {format(
                                                            form.watch("date") ?? new Date(),
                                                            "dd MMM yyy"
                                                        )}
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div

                                        className="prose prose-figcaption:text-muted-foreground/60 prose-blockquote:text-foreground prose-strong:text-foreground prose-headings:text-foreground text-muted-foreground max-w-4xl mx-auto prose-img:overflow-clip prose-pre:bg-background prose-img:rounded-xl prose-img:cursor-pointer "
                                        dangerouslySetInnerHTML={{
                                            __html: sanitize_html ?? "",
                                        }}
                                    ></div>

                                </div>
                            ) : (
                                <BlogPreviewSkeleton />
                            )}
                            <ScrollBar orientation={"vertical"} />
                        </ScrollArea>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div></>
    );
};
