"use client";
import { InputBlock } from "@/components/extension/search-input";
import { Table } from "@tanstack/react-table";
import { SearchIcon } from "lucide-react";
import React from "react";

interface DataTableSearchInputProps<TData>
    extends React.HTMLAttributes<HTMLDivElement> {
    table: Table<TData>;
}

export function SearchInput<TData>({
    table,
    children,
    className,
    ...props
}: DataTableSearchInputProps<TData>) {
    return (
        <InputBlock
            type={"text"}
            placeholder="Search..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
                table.getColumn("title")?.setFilterValue(event.target.value)
            }
            root={{ variant: "ghost", size: "default" }}
            className="w-full text-muted-foreground text-sm"
            leftIcon={<SearchIcon size={14} />}
        />
    );
}
