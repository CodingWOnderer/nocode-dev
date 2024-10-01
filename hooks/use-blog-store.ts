import { BlogTypes } from "@/components/forms/blog/blog-creation-form";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const LOCAL_STORED_BLOGS = "localblogs";


interface ModifiedBlogType extends Omit<BlogTypes, "date"> {
    date?: string | undefined
}
interface state {
    blog: ModifiedBlogType;
    blogList: ModifiedBlogType[];
}

interface Actions {
    setLocalBlog: (blog: ModifiedBlogType) => void;
    setBlogList: (blog: ModifiedBlogType) => void;
}

const useBlogStore = create<state & Actions>()(
    persist(
        (set) => ({
            blog: {
                title: "",
                content: "",
                date: undefined,
                slug: "",
                discription: "",
                image: undefined,
            },
            blogList: [],
            setBlogList: (blogs: ModifiedBlogType) => set((state) => ({ blogList: [...state.blogList, blogs] })),
            setLocalBlog: (blogs: ModifiedBlogType) => set({ blog: blogs }),
        }),
        {
            name: LOCAL_STORED_BLOGS,
            partialize: (state) => ({
                blog: state.blog,
                blogList: state.blogList,
            }),
        }
    )
);


export default useBlogStore
