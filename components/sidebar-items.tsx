"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, memo } from "react";
import { buttonVariants } from "./ui/button";
import { Label } from "./ui/label";

interface SideItemProps {
    href: string;
    label: string;
    Icon?: React.ReactElement;
}

export const SideItem: FC<SideItemProps> = memo(({ href, label, Icon }) => {
    const selected = usePathname();
    const isActive = selected === href;
    return (
        <Link
            href={href}
            className={cn(
                buttonVariants({ variant: "ghost" }),
                " rounded-[0.375rem] gap-3.5 flex items-center justify-start", isActive && " bg-accent text-accent-foreground"
            )}
        >
            {Icon && Icon}
            <Label>{label}</Label>
        </Link>
    );
});

SideItem.displayName = "SideItem";