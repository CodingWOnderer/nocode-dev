import React from "react";
import { PiLinktreeLogoBold } from "react-icons/pi";
import { Skeleton } from "@/components/ui/skeleton";
import { AssitantFields } from "./message";

const MessageField = ({ message }: { message: string }) => {
    return (
        <div className="flex  space-x-2 py-3 p-2">
            <div className="h-8 w-8 bg-secondary rounded-full flex justify-center items-center">
                <PiLinktreeLogoBold />
            </div>
            <div className="text-sm max-w-sm text-start rounded-2xl p-3">{message}</div>
        </div>
    );
};

const LoadingField = () => {
    return <Skeleton />;
};

export const MessageFieldComponents: AssitantFields = {
    component: MessageField,
    loadingState: LoadingField,
};
