"use client";
import { PostsTable } from "@/components/tables/posts/posts-table";
import { BlogListType } from "@/components/tables/validations/schema";
import useBlogStore from "@/hooks/use-blog-store";
import React from "react";

const PostsPage = () => {
    const PostTableData: BlogListType[] = useBlogStore(
        (state) => state.blogList
    ).map((item) => ({
        title: item.title,
        slug: item.slug,
        date: `${item.date}`,
        image: `${item.image}`,
    }));

    return (
        <div className="px-5">
            <PostsTable postPromise={PostTableData} />
        </div>
    );
};

export default PostsPage;
