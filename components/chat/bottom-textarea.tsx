import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "../ui/button";
import { FaArrowUp } from "react-icons/fa6";

const BottomTextArea = () => {
    return (
        <div className="bottom-0 px-5 absolute inset-x-0 flex flex-col justify-center items-center">
            <div className="mx-auto max-w-lg w-full flex items-center mb-5 justify-center space-x-2">
                <TextareaAutosize
                    maxRows={4}
                    placeholder="Ask me anything....."
                    className="dark:bg-background/20 bg-accent border placeholder:text-stone-300 flex flex-col justify-center focus:outline focus:border-none shadow-2xl outline-border dark:outline-stone-700 px-4 py-3.5 text-sm resize-none rounded-full w-full  "
                />
                <Button className="rounded-full">
                    <FaArrowUp />
                </Button>
            </div>
        </div>
    );
};

export default BottomTextArea;
