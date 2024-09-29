"use client";

import * as React from "react";
import {
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
    type ColumnDef,
    ColumnFiltersState
} from "@tanstack/react-table";

interface UseDataTableProps<TData, TValue> {
    data: TData[];
    columns: ColumnDef<TData, TValue>[];
}

export function useDataTable<TData, TValue>({
    columns,
    data,
}: UseDataTableProps<TData, TValue>) {
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    );

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters,
        },
    });

    return { table };
}
