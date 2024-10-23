"use client";
import { useImageUpload } from "@/hooks/api/use-image-upload";
import { useControllableState } from "@/hooks/use-controllable-state";
import React from "react";
import { FC } from "react";
import Dropzone, { DropzoneProps, FileRejection } from "react-dropzone";
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress"

interface FileUploaderProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: string;
    onValueChange?: (files: string) => void;
    onUpload?: (files: File[]) => Promise<void>;
    progresses?: Record<string, number>;
    accept?: DropzoneProps["accept"];
    maxSize?: DropzoneProps["maxSize"];
    maxFileCount?: DropzoneProps["maxFiles"];
    multiple?: boolean;
}

export type FileWithPreview = File & { preview: string }

export const ImageUploader: FC<FileUploaderProps> = (props) => {
    const {
        value: valueProp,
        onValueChange,
        onUpload,
        accept = {
            "image/*": [],
        },
        maxSize = 1024 * 1024 * 2,
        maxFileCount = 1,
        multiple = false,
    } = props;

    const [files, setFiles] = useControllableState({
        prop: valueProp,
        onChange: onValueChange,
    });

    const { uploadProgress, UploadImage, setUploadProgress } = useImageUpload();

    const onDrop = React.useCallback(
        (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
            if (!multiple && maxFileCount === 1 && acceptedFiles.length > 1) {
                toast.error("Cannot upload more than 1 file at a time");
                return;
            }

            if (rejectedFiles.length > 0) {
                rejectedFiles.forEach((item) => {
                    toast.error(`${item.file.name} has been rejected`)
                })
            }

            if (acceptedFiles[0]) {
                UploadImage(acceptedFiles[0], "PROFILE", (data) => {
                    setFiles(data.url);
                    setUploadProgress(0)
                });
            }
        },

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [files, maxFileCount, multiple, onUpload, setFiles]
    );

    return (
        <Dropzone onDrop={onDrop}
            accept={accept}
            maxSize={maxSize}
            maxFiles={maxFileCount}
            multiple={maxFileCount > 1 || multiple}

        >
            {({ getRootProps, getInputProps }) => (
                <section className="w-full">
                    <div
                        className="border cursor-pointer hover:bg-white/10 transition-all duration-300 h-32 rounded-md border-dashed flex justify-center items-center w-full flex-col"
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <div className="border p-2 rounded-lg">
                            <IoCloudUploadOutline size={24} />
                        </div>
                        <p className=" text-muted-foreground text-sm max-w-xs text-center mt-2">
                            <span className=" text-xs font-semibold">Click to upload</span> or
                            drag and drop SVG, PNG, JPG or GIF (max. 800x400px)
                        </p>

                        {uploadProgress > 0 && <Progress value={uploadProgress} className="w-[10%] mx-auto my-2 h-1 transition-all" />}
                    </div>

                </section>
            )}
        </Dropzone>
    );
};
