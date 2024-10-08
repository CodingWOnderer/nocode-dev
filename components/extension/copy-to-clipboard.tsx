"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

//parent component should have position:relative or absolute
export const CopyToClipboardProps: React.FC<{
    className?: string;
    text: string;
}> = ({ className, text }) => {
    const [copied, setCopiedState] = useState(false);

    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            className={cn(
                                "absolute right-6 top-5 p-0.5 border dark:border-neutral-800 rounded-md backdrop-blur-2xl z-[2]",
                                className
                            )}
                            onClick={() => {
                                if (copied) return;
                                navigator.clipboard.writeText(text);

                                setCopiedState(true);
                                setTimeout(() => {
                                    setCopiedState(false);
                                }, 1000);
                            }}
                        >
                            {copied ? <CheckMark /> : <ClipBoard />}
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Copy Link</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    );
};

const ClipBoard = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={"scale-[0.70] dark:stroke-neutral-400 stroke-neutral-800"}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
);
const CheckMark = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={"scale-[0.70] dark:stroke-neutral-400 stroke-neutral-800"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M20 6 9 17l-5-5" />
    </svg>
);
