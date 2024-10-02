import PostsHeader from "@/components/posts-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function PreviewRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-full relative flex flex-col">
            <PostsHeader />
            {children}
        </main>
    );
}