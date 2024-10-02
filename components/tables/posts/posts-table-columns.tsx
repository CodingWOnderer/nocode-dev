import { ColumnDef } from "@tanstack/react-table";
import { BlogListType } from "../validations/schema";
import Image from "next/image";
import { PublishButton } from "./_components/publish-button";
import { Button } from "@/components/ui/button";

export function getColumns(): ColumnDef<BlogListType>[] {
    return [
        {
            accessorKey: "title",
            header: () => <div>Title</div>,
            cell: ({ row }) => <div className="h-full w-full transition-colors group-hover:text-foreground text-xs text-muted-foreground capitalize">{row.getValue("title")}</div>,
        },
        {
            accessorKey: "slug",
            header: () => <div>Slug</div>,
            cell: ({ row }) => <div className="h-full w-full transition-colors group-hover:text-foreground text-xs text-muted-foreground capitalize">{row.getValue("slug")}</div>,
        },
        {
            accessorKey: "date",
            header: () => <div>Date</div>,
            cell: ({ row }) => <div className="h-full w-full transition-colors group-hover:text-foreground text-xs text-muted-foreground capitalize">{row.getValue("date")}</div>,
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
            id: "actions",
            cell: function Cell({ row }) {
                return <PublishButton blog={row.original} />
            },
        },
    ];
}
