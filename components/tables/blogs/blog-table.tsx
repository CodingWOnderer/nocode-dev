"use client";
import { useDataTable } from "@/hooks/use-data-table";
import { BlogListType } from "../validations/schema";
import React from "react";
import { getColumns } from "./blog-table-columns";
import { DataTable } from "./blog-data-table";
import { SearchInput } from "./blog-search-input";
import useBlogStore from "@/hooks/use-blog-store";

export function BlogTable() {
    const PostTableData: BlogListType[] = useBlogStore(
        (state) => state.blogList
    ).filter((item) => item.publish === true).map((item) => ({
        title: item.title,
        slug: item.slug,
        date: `${item.date}`,
        image: `${item.image}`,
    }));

    const columns = React.useMemo(() => getColumns(), []);

    const { table } = useDataTable({
        data: PostTableData,
        columns,
    });

    return (
        <DataTable table={table}>
            <SearchInput table={table} />
        </DataTable>
    );
}
