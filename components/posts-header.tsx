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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { BlogForm } from "./forms/blog/blog-creation-form";

const PostsHeader = () => {
    return (
        <div className="bg-stone-950 h-12 px-5 sticky inset-x-0 top-0">
            <div className=" mx-auto  flex justify-between items-center h-full ">
                <Sheet>
                    <SheetTrigger >
                        {" "}
                        <Button
                            size={"sm"}
                            variant={"ghost"}
                            className="flex items-center space-x-1 justify-between"
                        >
                            <IoMdAdd />
                            <span>New Item</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="min-w-[100vw] md:min-w-[55rem]">
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your
                                account and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                        <ScrollArea className=" h-[calc(100dvh-100px)] my-auto py-4">
                            <BlogForm />
                            <ScrollBar className=" z-10" orientation={"vertical"} />
                        </ScrollArea>
                    </SheetContent>
                </Sheet>
                <ModeToggle />
            </div>
        </div>
    );
};

export default PostsHeader;
