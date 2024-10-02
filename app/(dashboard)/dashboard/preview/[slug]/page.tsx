"use client";
import { Badge } from "@/components/ui/badge";
import React, { useRef } from "react";
import Image from "next/image";
import useBlogStore from "@/hooks/use-blog-store";
import { format } from "date-fns";

const PreviewPage = ({ params }: { params: { slug: string } }) => {
    const currentPost = useBlogStore((state) => state.getBlogFromSlug)(
        params.slug
    );

    if (!currentPost?.content) {
        return null;
    }

    return (
        <div className="px-5">
            <div className=" max-w-4xl py-16  lg:py-24 gap-16  flex flex-col mx-auto">
                <div className="space-y-6">
                    <Badge className=" bg-primary/30 rounded-full border-primary text-primary space-x-1.5">
                        <Badge variant={"secondary"} className="text-xs rounded-full">
                            leadership lesson
                        </Badge>{" "}
                        <span>8 min read</span>
                    </Badge>
                    <h2 className=" text-3xl md:text-4xl font-bold">
                        {`${currentPost?.title}`}
                    </h2>
                    <p className=" text-muted-foreground line-clamp-4 text-base md:text-lg">
                        {currentPost?.discription}
                    </p>
                </div>

                <div>
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
                        {currentPost?.userTags.map((item, index) => {
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
                            <p className=" text-muted-foreground text-sm">Written by</p>
                            <h2 className="text-lg">Bill walsh</h2>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className=" text-muted-foreground text-sm">Published on</p>
                            <h2 className="text-lg">
                                {format(currentPost?.date ?? new Date(), "dd MMM yyy")}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="prose prose-figcaption:text-muted-foreground/60 prose-blockquote:text-foreground prose-strong:text-foreground prose-headings:text-foreground text-muted-foreground max-w-4xl mx-auto prose-img:overflow-clip prose-pre:bg-background prose-img:rounded-xl prose-img:cursor-pointer"
                dangerouslySetInnerHTML={{ __html: currentPost?.content ?? "" }}
            ></div>
        </div>
    );
};

export default PreviewPage;
