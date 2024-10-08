import "./editor.css"
import React from "react";
import { BlogPreview } from "../components/blog-preview";


const BlogCreation = ({ params }: { params: { creation: string } }) => {
    return (
        <div>
            <BlogPreview slug={params.creation} />
        </div>
    );
};

export default BlogCreation;
