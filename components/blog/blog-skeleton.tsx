import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import React from "react"

export function BlogSkeleton({ className }: { className?: React.ComponentProps<"div">["className"] }) {

    return (
        <div className={cn("flex flex-col gap-4", className)}>
            <Skeleton className="w-full aspect-video rounded-md" />
            <div className="flex flex-row gap-4 items-center">
                <Skeleton className="h-5 w-16" />
                <div className="flex flex-row gap-2 items-center">
                    <Skeleton className="h-4 w-8" />
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <Skeleton className="h-7 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
            </div>
        </div>
    )
}