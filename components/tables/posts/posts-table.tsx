"use client";
import { useDataTable } from "@/hooks/use-data-table";
import { BlogListType } from "../validations/schema";
import React from "react";
import { getColumns } from "./posts-table-columns";
import { DataTable } from "./post-fata-table";
import { SearchInput } from "./posts-search-input";

interface PostsTableProps {
    postPromise: BlogListType[];
}

export function PostsTable({ postPromise }: PostsTableProps) {
    const columns = React.useMemo(() => getColumns(), []);

    const { table } = useDataTable({
        data: postPromise,
        columns,
    });

    return (
        <DataTable table={table}>
            <SearchInput table={table} />
        </DataTable>
    );
}
