"use client";

import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import Image from "next/image";
import React, { useEffect } from "react";
import * as tocbot from "tocbot";
import useBlogStore from "@/hooks/use-blog-store";
import { motion } from "framer-motion";
import BlogPreviewSkeleton from "@/components/skeletons/blog-preview-skeleton";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Stagger time between children animations
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const Page = ({ params }: { params: { slug: string } }) => {
    const currentPost = useBlogStore((state) => state.getBlogFromSlug)(
        params.slug
    );

    useEffect(() => {
        tocbot.init({
            tocSelector: ".gh-toc",
            contentSelector: ".gh-content",
            headingSelector: "h1, h2, h3, h4",
            hasInnerContainers: true,
            scrollSmooth: true,
            scrollSmoothOffset: -200,
            scrollSmoothDuration: 420,
            includeHtml: false,
            headingObjectCallback: (obj: Record<string, any>, node: HTMLElement) => {
                const id = (node.childNodes[0] as HTMLElement | null)?.id || "#";
                return { ...obj, id, children: [] };
            },
        });

        return () => {
            tocbot.refresh();
        };
    }, []);

    if (!currentPost) {
        return <BlogPreviewSkeleton />;
    }

    return (


        <motion.div className="px-5">
            <motion.div
                className="max-w-4xl py-16 lg:py-24 gap-16 flex flex-col mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={childVariants}
            >
                <motion.div
                    className="space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={childVariants}
                >
                    <Badge className="bg-primary/30 gap-x-2 rounded-full border-primary text-primary space-x-1.5">
                        {currentPost.category} <span>8 min read</span>
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold">{`${currentPost?.title}`}</h2>
                    <p className="text-muted-foreground line-clamp-4 text-base md:text-lg">
                        {currentPost?.discription}
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={childVariants}
                >
                    <div className="relative rounded-md overflow-clip aspect-[343/240] md:aspect-[1216/640]">
                        <Image
                            src={
                                currentPost?.image ??
                                "https://assets.lummi.ai/assets/QmYJRWNyrYdM4TNvWAV5hHdbYXxbCCPb1eqynhK6Nwgs2L?auto=format&w=1500"
                            }
                            fill
                            alt="@blog"
                        />
                    </div>
                    <div className="flex py-3 space-x-1">
                        {currentPost?.userTags.map((item, index) => (
                            <Badge
                                variant="outline"
                                className="text-muted-foreground"
                                key={index}
                            >
                                #{item}
                            </Badge>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={childVariants}
                >
                    <div className="flex items-center space-x-6 w-full">
                        <div className="flex flex-col space-y-2">
                            <p className="text-muted-foreground text-sm">Written by</p>
                            <h2 className="text-lg">{currentPost.author}</h2>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-muted-foreground text-sm">Published on</p>
                            <h2 className="text-lg">
                                {format(currentPost?.date ?? new Date(), "dd MMM yyyy")}
                            </h2>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <div className="flex">
                <div className=" relative lg:block hidden">
                    <Card className=" border-none sticky top-[20%] max-w-[250px]">
                        <CardHeader className="sr-only">
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent className="gh-toc prose text-muted-foreground prose-sm prose-a:text-muted-foreground prose-a"></CardContent>
                        <CardFooter className=" sr-only">
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className=" xl:px-10">
                    <motion.div
                        className="prose prose-figcaption:text-muted-foreground/60 prose-blockquote:text-foreground prose-strong:text-foreground prose-headings:text-foreground text-muted-foreground max-w-4xl mx-auto prose-img:overflow-clip prose-pre:bg-stone-900 dark:prose-pre:bg-background prose-img:rounded-xl prose-img:cursor-pointer gh-content"
                        dangerouslySetInnerHTML={{ __html: currentPost?.content ?? "" }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={childVariants}
                    />
                </div>
            </div>
        </motion.div>


    );
};

export default Page;
