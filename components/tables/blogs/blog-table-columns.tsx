import { ColumnDef } from "@tanstack/react-table";
import { BlogListType } from "../validations/schema";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import React from "react";
import { DeleteTasksDialog } from "./_components/delete-task-dialog";
import Link from "next/link";

export function getColumns(): ColumnDef<BlogListType>[] {
    return [
        {
            accessorKey: "title",
            header: () => <div>Title</div>,
            cell: ({ row }) => (
                <div className="h-full w-full transition-colors group-hover:text-foreground text-xs text-muted-foreground capitalize">
                    {row.getValue("title")}
                </div>
            ),
        },
        {
            accessorKey: "slug",
            header: () => <div>Slug</div>,
            cell: ({ row }) => (
                <div className="h-full w-full transition-colors group-hover:text-foreground text-xs text-muted-foreground capitalize">
                    {row.getValue("slug")}
                </div>
            ),
        },
        {
            accessorKey: "date",
            header: () => <div>Date</div>,
            cell: ({ row }) => (
                <div className="h-full w-full transition-colors group-hover:text-foreground text-xs text-muted-foreground capitalize">
                    {row.getValue("date")}
                </div>
            ),
        },
        {
            accessorKey: "image",
            header: () => <div>Image</div>,
            cell: ({ row }) => (
                <div className="relative aspect-video h-10 rounded-md overflow-clip">
                    <Image src={row.getValue("image")} alt={row.getValue("title")} fill />
                </div>
            ),
        },
        {
            id: "preview",
            cell: function Cell({ row }) {
                return (
                    <Link
                        className={buttonVariants({ variant: "link" })}
                        href={`/dashboard/preview/${row["original"].slug}`}
                    >
                        Preview
                    </Link>
                );
            },
        },
        {
            id: "actions",
            cell: function Cell({ row }) {
                const [showDeleteTaskDialog, setShowDeleteTaskDialog] =
                    React.useState(false);

                return (
                    <>
                        <DeleteTasksDialog
                            open={showDeleteTaskDialog}
                            onOpenChange={setShowDeleteTaskDialog}
                            blog={row.original}
                        />
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button
                                    aria-label="Open menu"
                                    variant="ghost"
                                    className="flex size-8 p-0 data-[state=open]:bg-muted"
                                >
                                    <DotsHorizontalIcon className="size-4" aria-hidden="true" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-40">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onSelect={() => setShowDeleteTaskDialog(true)}
                                >
                                    Delete
                                    <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>
                );
            },
        },
    ];
}
