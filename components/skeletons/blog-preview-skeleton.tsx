import { Skeleton } from "@/components/ui/skeleton"

export default function BlogPreviewSkeleton() {
    return (
        <div className="px-5">
            <div className="max-w-4xl py-16 lg:py-24 gap-16 flex flex-col mx-auto">
                <div className="space-y-6">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-10 w-full max-w-2xl" />
                    <Skeleton className="h-20 w-full max-w-3xl" />
                </div>

                <div>
                    <Skeleton className="w-full aspect-[343/240] md:aspect-[1216/640] rounded-md" />
                    <div className="flex py-3 space-x-1">
                        {[1, 2, 3].map((_, index) => (
                            <Skeleton key={index} className="h-6 w-16" />
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex items-center space-x-6 w-full">
                        <div className="flex flex-col space-y-2">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-6 w-24" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-6 w-32" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                {[1, 2, 3, 4, 5].map((_, index) => (
                    <Skeleton key={index} className="h-4 w-full" />
                ))}
                <Skeleton className="h-64 w-full" />
                {[1, 2, 3, 4, 5].map((_, index) => (
                    <Skeleton key={index} className="h-4 w-full" />
                ))}
            </div>
        </div>
    )
}