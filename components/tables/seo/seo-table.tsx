"use client";
import { useDataTable } from "@/hooks/use-data-table";
import { SeoListType } from "../validations/schema";
import React from "react";
import { getColumns } from "./seo-table-columns";
import { DataTable } from "./seo-data-table";
import { SearchInput } from "./seo-search-input";
import useBlogStore from "@/hooks/use-blog-store";

export function SeoTable() {
    const PostTableData: SeoListType[] = useBlogStore(
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
