import { ImageUploader } from "@/components/common/file-upload";
import { WithErrorImage } from "@/components/common/fallback-image";
import { useState } from "react";
import { Button } from "../button";
import { IoIosCloseCircle } from "react-icons/io";
import React from "react";

export function ImageUploadForm() {
    const [imageUrl, setImageUrl] = useState<string>("");

    return (
        <div className="flex space-x-2">
            <div className="relative ">
                <div className="relative w-32 aspect-square p-2  rounded-lg flex justify-center items-center border overflow-clip">
                    <WithErrorImage
                        key={imageUrl}
                        src={imageUrl}
                        alt="@CapconsSage"
                        fill
                        className="w-full object-cover h-full"
                        errorText="@CapconsSage"
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
                onValueChange={(url) => setImageUrl(url)}
                maxFileCount={1}
                maxSize={4 * 1024 * 1024}
            />
        </div>
    );
}
