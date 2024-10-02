"use client";

import React from "react";
import { IoMdAdd } from "react-icons/io";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { BlogForm } from "./forms/blog/blog-creation-form";
import useBlogStore from "@/hooks/use-blog-store";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const PostsHeader = () => {
    const sheetState = useBlogStore((state) => state.sideFormState);
    const setformState = useBlogStore((state) => state.setSideFormOpen);
    const pathname = usePathname();
    return (
        <div className="dark:bg-stone-950 bg-background h-12 px-5 sticky inset-x-0 top-0">
            <div className=" mx-auto  flex justify-between items-center h-full ">
                <Sheet
                    open={sheetState.open}
                    onOpenChange={(value) => setformState({ open: value, slug: "" })}
                >
                    <SheetTrigger asChild>
                        <Button
                            size={"sm"}
                            variant={"ghost"}
                            className={cn(
                                `flex items-center space-x-1 justify-between`,
                                pathname === "/dashboard/published" ? "hidden" : ""
                            )}
                        >
                            <IoMdAdd />
                            <span>New Item</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="min-w-[100vw] md:min-w-[55rem]">
                        <SheetHeader>
                            <SheetTitle className=" sr-only">Are you absolutely sure?</SheetTitle>
                            <SheetDescription className=" sr-only">
                                This action cannot be undone. This will permanently delete your
                                account and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                        <ScrollArea className=" h-[calc(100dvh-10px)] my-auto pb-8">
                            <BlogForm {...sheetState.blog} />
                            <ScrollBar className=" z-10" orientation={"vertical"} />
                        </ScrollArea>
                    </SheetContent>
                </Sheet>
                <div className="ml-auto">
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
};

export default PostsHeader;
