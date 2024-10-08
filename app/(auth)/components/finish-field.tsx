
import React from "react";
import { PiLinktreeLogoBold } from "react-icons/pi";
import { Skeleton } from "@/components/ui/skeleton";
import { AssitantFields } from "./message";
import { parseJsonString, UserProfile } from "@/utils";
import { redirect } from 'next/navigation'

const FinishField = ({ message }: { message: string }) => {
    const profile = parseJsonString(message) as UserProfile;

    if (profile) {
        redirect("/setup")
    }
    return (
        <div className="flex  space-x-2 py-3 p-2">
            <div className="h-8 w-8 bg-secondary rounded-full flex justify-center items-center">
                <PiLinktreeLogoBold />
            </div>

        </div>
    );
};

const LoadingField = () => {
    return <Skeleton />;
};

export const FinishFieldFieldComponents: AssitantFields = {
    component: FinishField,
    loadingState: LoadingField,
};
