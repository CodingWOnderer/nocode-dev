"use client";

import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

import { SeoCredenza } from "@/components/tables/seo/_components/seo-credenza";
import { StatefulButton } from "@/components/extension/stateful-button";
import { ThemeToggle } from "@/components/toggle-theme";
import { UseFormHandleSubmit } from "react-hook-form";
import { BlogformSchema } from "@/components/forms/schemas";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const CreationHeader = ({
    handleSubmit,
    onSubmit,
    slug,
}: {
    slug: string;
    handleSubmit: UseFormHandleSubmit<
        {
            title: string;
            slug: string;
            date: Date | undefined;
            image: string | undefined;
            category: string;
            author: string;
            discription: string;
            content: string;
            userTags: string[];
        },
        undefined
    >;
    onSubmit(data: z.infer<typeof BlogformSchema>): void;
}) => {
    const router = useRouter();
    return (
        <div className="dark:bg-stone-950 bg-background border-b dark:border-none h-12 px-5 sticky inset-x-0 top-0">
            <div className=" mx-auto  flex justify-between items-center h-full ">
                <Button onClick={() => router.back()} variant={"outline"}>
                    <IoMdArrowRoundBack /> Back
                </Button>
                <div className="ml-auto flex space-x-2">
                    <SeoCredenza slug={slug} />
                    <StatefulButton
                        onClick={handleSubmit(onSubmit)}
                        variant={"ghost"}
                        size={"sm"}
                        status="idle"
                    />
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};

