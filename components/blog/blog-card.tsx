import React, { forwardRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps extends React.ComponentPropsWithoutRef<"a"> {
    category: string;
    authorName: string;
    authorImage: string;
    title: string;
    description: string;
    isLoading?: boolean;
    blogImg: string;
    slug: string;
}

export const ArticleCard = forwardRef<HTMLAnchorElement, ArticleCardProps>(
    ({ category, authorName, slug, blogImg, className, authorImage, title, description }, ref) => {

        return (
            <Link ref={ref} href={slug} className={cn("flex flex-col gap-4 hover:opacity-75 cursor-pointer", className)}>
                <div className="bg-muted relative rounded-md aspect-video">
                    <Image src={blogImg} fill alt="" />
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <Badge>{category}</Badge>
                    <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">By</span>{" "}
                        <Avatar className="h-6 w-6">
                            <AvatarImage src={authorImage} />
                            <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{authorName}</span>
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="max-w-3xl text-2xl tracking-tight">{title}</h3>
                    <p className="max-w-3xl text-muted-foreground text-sm">{description}</p>
                </div>
            </Link>
        );
    }
);

ArticleCard.displayName = "ArticleCard";


