import {
    flexRender,
    type Table as TankstackTable,
} from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import React from "react";
import { FormRow } from "./post-form-row";

interface DataTableProps<TData> extends React.HTMLAttributes<HTMLDivElement> {
    table: TankstackTable<TData>;
}

export function DataTable<TData>({
    table,
    children,
    className,
    ...props
}: DataTableProps<TData>) {
    return (
        <div
            className={cn("w-full space-y-2.5 overflow-auto", className)}
            {...props}
        >
            <div className=" w-full">
                <Table className=" w-full">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <>{children}</>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table
                                .getRowModel()
                                .rows.map((row) => <FormRow key={row.id} row={row} />)
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={table.getAllColumns().length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
