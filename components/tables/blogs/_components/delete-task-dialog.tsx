"use client"

import * as React from "react"
import { ReloadIcon, TrashIcon } from "@radix-ui/react-icons"
import { type Row } from "@tanstack/react-table"
import { toast } from "sonner"

import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { BlogListType } from "../../validations/schema"
import useBlogStore from "@/hooks/use-blog-store"

interface DeleteTasksDialogProps
    extends React.ComponentPropsWithoutRef<typeof Dialog> {
    blog: Row<BlogListType>["original"]

}

export function DeleteTasksDialog({
    blog,
    ...props
}: DeleteTasksDialogProps) {
    const [isDeletePending, startDeleteTransition] = React.useState(false);
    const deleteBlog = useBlogStore((state) => state.deleteBlog);
    const isDesktop = useMediaQuery("(min-width: 640px)")

    function onDelete() {
        startDeleteTransition(true);
        deleteBlog(blog.slug);
        props.onOpenChange?.(false)
        toast.success("Tasks deleted")
        startDeleteTransition(false)
    }

    if (isDesktop) {
        return (
            <Dialog {...props}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your{" "}
                            <span className="font-medium">1</span>
                            Blog from our servers.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="gap-2 sm:space-x-0">
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button
                            aria-label="Delete selected rows"
                            variant="destructive"
                            onClick={onDelete}
                            disabled={isDeletePending}
                        >
                            {isDeletePending && (
                                <ReloadIcon
                                    className="mr-2 size-4 animate-spin"
                                    aria-hidden="true"
                                />
                            )}
                            Delete
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer {...props}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>
                        This action cannot be undone. This will permanently delete your{" "}
                        <span className="font-medium">1</span>
                        Blog from our servers.
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className="gap-2 sm:space-x-0">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                    <Button
                        aria-label="Delete selected rows"
                        variant="destructive"
                        onClick={onDelete}
                        disabled={isDeletePending}
                    >
                        {isDeletePending && (
                            <ReloadIcon
                                className="mr-2 size-4 animate-spin"
                                aria-hidden="true"
                            />
                        )}
                        Delete
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
