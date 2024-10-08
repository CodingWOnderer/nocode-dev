import TextareaAutosize from "react-textarea-autosize";
import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa";
import React, { useEffect } from "react";
import { ChatRequestOptions } from "ai";

// Common Form Component
export const FormComponent = ({
    input,
    handleInputChange,
    handleSubmit,
    isLoading
}: {
    handleInputChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    handleSubmit: (
        event?: {
            preventDefault?: () => void;
        },
        chatRequestOptions?: ChatRequestOptions
    ) => void;
    input: string;
    isLoading: boolean,
}) => {
    const inputRef = React.useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);


    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            if (isLoading) return;

            e.preventDefault();
            handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
        }
    };



    return <form
        className="fixed bg-transparent bottom-0 inset-x-0"
        onSubmit={handleSubmit}
    >
        <div className="mx-auto max-w-lg bg-transparent w-full flex items-center mb-5 justify-center space-x-2">
            <TextareaAutosize
                autoComplete="off"
                ref={inputRef}
                maxRows={4}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="Ask me anything....."
                className=" max-h-24 px-14 bg-accent py-[16px] text-sm placeholder:text-muted-foreground focus-visible:outline-none border focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full  rounded-full flex items-center h-16 resize-none overflow-hidden dark:bg-card"
            />
            <Button className="rounded-2xl h-12 ">
                <FaArrowUp />
            </Button>
        </div>
    </form>
};
