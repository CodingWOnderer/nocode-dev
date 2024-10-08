import { BlogTypes } from "@/components/forms/schemas";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const LOCAL_STORED_BLOGS = "localblogs";

export interface ModifiedBlogType extends Omit<BlogTypes, "date"> {
    date?: string | undefined;
    publish: boolean;
}

type SideFormState = { open: boolean; blog: BlogTypes };
type SideFormOpenType = { open: boolean; slug: string };

interface state {
    blog: ModifiedBlogType;
    blogList: ModifiedBlogType[];
    sideFormState: SideFormState;
}

interface Actions {
    setLocalBlog: (blog: ModifiedBlogType) => void;
    setBlogList: (blog: ModifiedBlogType) => void;
    setSideFormOpen: (sidebarState: SideFormOpenType) => void;
    deleteBlog: (slug: string) => void;
    getBlogFromSlug: (slug: string) => ModifiedBlogType | undefined;
}

export const BlogInitialState = {
    title: "",
    content: "",
    date: undefined,
    slug: "",
    discription: "",
    image: undefined,
    category: "",
    author: "",
    publish: false,
    userTags: [] as string[],
};

const useBlogStore = create<state & Actions>()(
    persist(
        (set, get) => ({
            blog: BlogInitialState,
            blogList: [],
            setBlogList: (blogs: ModifiedBlogType) => {
                const { blogList } = get();
                const updatedBlogList = blogList.filter(
                    (item) => item.slug !== blogs.slug
                );
                return set({ blogList: [...updatedBlogList, blogs] });
            },
            setLocalBlog: (blogs: ModifiedBlogType) => set({ blog: blogs }),
            getBlogFromSlug: (slug: string) => {
                const { blogList } = get();
                const updatedBlogList = blogList.find((item) => item.slug === slug);
                return updatedBlogList;
            },
            setSideFormOpen: (sidebarState) => {
                const { blogList } = get();
                const slug = sidebarState.slug;

                if (!slug) {
                    return set({
                        sideFormState: { open: sidebarState.open, blog: BlogInitialState },
                    });
                }

                const blog = blogList.find((item) => item.slug.includes(slug));
                const sideFormState = {
                    open: sidebarState.open,
                    blog: blog
                        ? { ...blog, date: blog.date ? new Date(blog.date) : new Date() }
                        : BlogInitialState,
                };

                return set({ sideFormState });
            },
            deleteBlog: (slug: string) => {
                const { blogList } = get();
                const updatedBlogList = blogList.filter((item) => item.slug !== slug);
                return set({ blogList: [...updatedBlogList] });
            },
            sideFormState: {
                open: false,
                blog: BlogInitialState,
            },
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

export default useBlogStore;
