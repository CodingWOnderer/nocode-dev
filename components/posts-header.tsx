"use client";

import React from "react";
import { IoMdAdd } from "react-icons/io";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeToggle } from "./toggle-theme";

const PostsHeader = () => {
    const pathname = usePathname();
    return (
        <div className="dark:bg-stone-950 bg-background h-12 px-5 sticky inset-x-0 top-0">
            <div className=" mx-auto  flex justify-between items-center h-full ">
                <Link
                    href={"/dashboard/posts/new-blog"}
                    className={cn(buttonVariants({ variant: "ghost", size: "sm" }),
                        `flex items-center space-x-1 justify-between`,
                        pathname === "/dashboard/published" ? "hidden" : ""
                    )}
                >
                    <IoMdAdd />
                    <span>New Item</span>
                </Link>
                <div className="ml-auto">
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};

export default PostsHeader;
