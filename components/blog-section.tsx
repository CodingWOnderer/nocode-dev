"use client";

import useBlogStore from "@/hooks/use-blog-store";
import { ArticleCard } from "./blog/blog-card";
import { Suspense } from "react";
import { BlogSkeleton } from "./blog/blog-skeleton";
import { cn } from "@/lib/utils";

export const BlogSection = () => {
    const publishedBlog = useBlogStore((state) => state.blogList).filter(
        (item) => item.publish === true
    );

    return (
        <div className="w-full px-5 py-16 md:px-10 md:py-20">
            <div className=" max-w-4xl mx-auto flex flex-col gap-14">
                <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
                    <h4 className="text-3xl md:text-4xl tracking-tighter max-w-xl font-regular">
                        Latest articles
                    </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {publishedBlog.map((item, index) => (
                        <Suspense fallback={<BlogSkeleton className={cn(index === 0 ? "md:col-span-2" : "")} />}>
                            <ArticleCard
                                key={index}
                                className={index === 0 ? "md:col-span-2" : ""}
                                blogImg={item.image ?? ""}
                                category={item.userTags[0]}
                                slug={item.slug}
                                authorName={"Vipin Bhati"}
                                authorImage={""}
                                title={item.title}
                                description={item.discription}
                            />
                        </Suspense>
                    ))}
                </div>
            </div>
        </div>
    );
};
