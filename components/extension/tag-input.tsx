"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input, InputProps } from "@/components/ui/input";
import { PencilIcon, XIcon } from "lucide-react";
import React, { useImperativeHandle, useRef } from "react";
import { Dispatch, SetStateAction, forwardRef, useState } from "react";

type InputTagsProps = InputProps & {
    value: string[];
    onChange: Dispatch<SetStateAction<string[]>>;
    onError?: (error: string) => void;
    validator?: (value: string) => boolean;
};

export const InputTags = forwardRef<HTMLInputElement, InputTagsProps>(
    ({ value, onChange, onError, validator = () => true, ...props }, ref) => {
        const [pendingDataPoint, setPendingDataPoint] = useState("");
        const inputRef = useRef<HTMLInputElement>(null);
        useImperativeHandle(ref, () => inputRef.current!);

        const addPendingDataPoint = () => {
            if (pendingDataPoint) {
                const newDataPoints = new Set([...value, pendingDataPoint]);
                onChange(Array.from(newDataPoints));
                setPendingDataPoint("");
                if (onError) onError("");
            } else if (!validator(pendingDataPoint)) {
                if (onError) onError("Invalid input: " + pendingDataPoint);
            }
        };

        return (
            <>
                <div className=" focus-within:ring-1 mx-0.5 focus-within:ring-ring rounded-md border flex">
                    <Input
                        value={pendingDataPoint}
                        onChange={(e) => setPendingDataPoint(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                addPendingDataPoint();
                            } else if (e.key === "," || e.key === " ") {
                                e.preventDefault();
                                addPendingDataPoint();
                            }
                        }}
                        className="rounded-r-none focus-visible:outline-none focus-visible:border-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none "
                        {...props}
                        ref={ref}
                    />
                    <Button
                        type="button"
                        variant="secondary"
                        className="rounded-l-none focus-visible:outline-none focus-visible:border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm border-l-0"
                        onClick={addPendingDataPoint}
                    >
                        Add
                    </Button>
                </div>
                <div className="border rounded-md min-h-[2.5rem] mx-0.5 overflow-y-auto p-2 flex gap-2 flex-wrap items-center">
                    {value.map((item, idx) => (
                        <Badge key={idx} variant="secondary">
                            {item}
                            <button
                                type="button"
                                className="w-3 ml-2"
                                onClick={() => {
                                    onChange(value.filter((i) => i !== item));
                                }}
                            >
                                <XIcon className="w-3" />
                            </button>
                            <button
                                type="button"
                                className="w-3 ml-2"
                                onClick={() => {
                                    setPendingDataPoint(item);
                                    onChange(value.filter((i) => i !== item));
                                    if (inputRef.current) {
                                        inputRef.current.focus();
                                    }
                                }}
                            >
                                <PencilIcon className="w-3" />
                            </button>
                        </Badge>
                    ))}
                </div>
            </>
        );
    }
);

InputTags.displayName = "InputTags";