import { PostsTable } from "@/components/tables/posts/posts-table";
import { BlogListType } from "@/components/tables/validations/schema";
import React from "react";

const PostsPage = () => {
    const PostsTableData: BlogListType[] = [
        {
            title: "Work Hard",
            slug: "work_hard",
            date: "24-5-2001",
            image:
                "https://assets.lummi.ai/assets/QmSkq2hmaEd8y35ebLaZxcQC8tpLteLctnM6g7CVhKVbdH?auto=format&w=1500",
        },
        {
            title: "Hello world",
            slug: "hello_world",
            date: "24-5-2001",
            image:
                "https://assets.lummi.ai/assets/QmSkq2hmaEd8y35ebLaZxcQC8tpLteLctnM6g7CVhKVbdH?auto=format&w=1500",
        },
    ];
    return (
        <div className="px-5">
            <PostsTable postPromise={PostsTableData} />
        </div>
    );
};

export default PostsPage;
