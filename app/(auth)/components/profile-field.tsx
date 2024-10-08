import React from "react";
import { PiLinktreeLogoBold } from "react-icons/pi";
import { Skeleton } from "@/components/ui/skeleton";
import { AssitantFields } from "./message";
import { ImageUploader } from "@/components/common/file-upload";
import Image from "next/image";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import {
    Credenza,
    CredenzaBody,
    CredenzaClose,
    CredenzaContent,
    CredenzaDescription,
    CredenzaFooter,
    CredenzaHeader,
    CredenzaTitle,
} from "@/components/ui/credenza";
import { Button } from "@/components/ui/button";
import { CopyToClipboardProps } from "@/components/extension/copy-to-clipboard";

const ProflieField = ({ message }: { message: string }) => {
    const [imageUrl, setImageUrl] = useState<string>("");
    const [uploadImage, setupImage] = useState<boolean>(true);
    return (
        <>
            <Credenza open={uploadImage}>
                <CredenzaContent>
                    <CredenzaHeader>
                        <CredenzaTitle>Capcons Sage</CredenzaTitle>
                        <CredenzaDescription>{message}</CredenzaDescription>
                    </CredenzaHeader>
                    <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
                        <div className="flex space-x-2">
                            <div className="relative ">
                                <div className="relative w-32 aspect-square p-2  rounded-lg flex justify-center items-center border overflow-clip">
                                    <Image
                                        key={imageUrl}
                                        src={imageUrl}
                                        alt="@CapconsSage"
                                        fill
                                        className="w-full object-cover h-full"
                                    />
                                </div>
                                <Button
                                    type="button"
                                    onClick={() => setImageUrl("")}
                                    className=" absolute -top-1 -left-1 bg-background hover:bg-background rounded-full shadow-none p-0 size-4 text-red-500"
                                    size={"icon"}
                                >
                                    <IoIosCloseCircle size={24} />
                                </Button>
                            </div>
                            <ImageUploader
                                value={imageUrl}
                                onValueChange={(url) => {
                                    setImageUrl(url);
                                }}
                                maxFileCount={1}
                                maxSize={4 * 1024 * 1024}
                            />
                            <CopyToClipboardProps text={imageUrl} />
                        </div>
                    </CredenzaBody>
                    <CredenzaFooter>
                        <CredenzaClose asChild>
                            <Button onClick={() => setupImage(false)} variant="outline">
                                Close
                            </Button>
                        </CredenzaClose>
                    </CredenzaFooter>
                </CredenzaContent>
            </Credenza>
            <div className="flex  space-x-2 py-3 p-2">
                <div className="h-8 w-8 bg-secondary rounded-full flex justify-center items-center">
                    <PiLinktreeLogoBold />
                </div>
                <div className="text-sm max-w-sm text-start rounded-2xl p-3">
                    {message}
                </div>
            </div>
        </>
    );
};

const LoadingField = () => {
    return <Skeleton />;
};

export const ProfileFieldComponents: AssitantFields = {
    component: ProflieField,
    loadingState: LoadingField,
};
