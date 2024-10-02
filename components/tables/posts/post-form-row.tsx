"use client";
import { flexRender } from "@tanstack/react-table";
import { TableCell, TableRow } from "@/components/ui/table";
import useBlogStore from "@/hooks/use-blog-store";
import { Row } from "@tanstack/react-table";

interface DataRowInterface<TData> {
    row: Row<TData>;
}

export function FormRow<TData>({ row }: DataRowInterface<TData>) {
    const setFormOpen = useBlogStore((state) => state.setSideFormOpen);

    return (
        <TableRow
            data-state={row.getIsSelected() && "selected"}
            onClick={() => setFormOpen({ open: true, slug: row.getValue("slug") })}
            className="group group-hover:bg-muted-foreground cursor-pointer"
        >
            {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
            ))}
        </TableRow>
    );
}
