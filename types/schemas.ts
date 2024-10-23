import { UseFormReturn } from "react-hook-form";

export interface BlogFromProps {
    form: UseFormReturn<
        {
            title: string;
            slug: string;
            date: Date | undefined;
            image: string | undefined;
            discription: string;
            category: string;
            author: string;
            content: string;
            userTags: string[];
        },
        any,
        undefined
    >;
}