import { flexRender } from "@tanstack/react-table";
import { TableCell, TableRow } from "@/components/ui/table";
import { Row } from "@tanstack/react-table";
import { redirect, useRouter } from "next/navigation";

interface DataRowInterface<TData> {
    row: Row<TData>;
}

export function FormRow<TData>({ row }: DataRowInterface<TData>) {
    const router = useRouter()
    return (
        <TableRow
            data-state={row.getIsSelected() && "selected"}
            className="group group-hover:bg-muted-foreground cursor-pointer"
            onClick={() => router.push(`posts/${row.getValue("slug")}`)}
        >
            {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
            ))}
        </TableRow>
    );
}
