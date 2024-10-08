import Image from "next/image";
import React from "react";
import { FallbackProps } from "react-error-boundary";

export const ErrorBoundryFallback = ({
    error,
    resetErrorBoundary,
}: FallbackProps) => {
    return (
        <div className="flex justify-center items-center">
            <div className="relative aspect-square w-40">
                <Image
                    src={"/error.svg"}
                    alt="something wen wrong"
                    fill
                    className=" object-fill size-full"
                />
            </div>
        </div>
    );
};
