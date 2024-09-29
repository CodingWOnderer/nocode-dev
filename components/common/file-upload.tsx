"use client";
import { useControllableState } from "@/hooks/use-controllable-state";
import React from "react";
import { FC } from "react";
import Dropzone, { DropzoneProps, FileRejection } from "react-dropzone";
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast } from "sonner";

interface FileUploaderProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: File[];
    onValueChange?: (files: File[]) => void;
    onUpload?: (files: File[]) => Promise<void>;
    progresses?: Record<string, number>;
    accept?: DropzoneProps["accept"];
    maxSize?: DropzoneProps["maxSize"];
    maxFileCount?: DropzoneProps["maxFiles"];
    multiple?: boolean;
    disabled?: boolean;
}

export type FileWithPreview = File & { preview: string }

function isFileWithPreview(file: File): file is FileWithPreview {
    return "preview" in file && typeof file.preview === "string";
}

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
        disabled = false,
    } = props;

    const [files, setFiles] = useControllableState({
        prop: valueProp,
        onChange: onValueChange,
    });

    const onDrop = React.useCallback(
        (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
            if (!multiple && maxFileCount === 1 && acceptedFiles.length > 1) {
                toast.error("Cannot upload more than 1 file at a time");
                return;
            }

            if ((files?.length ?? 0) + acceptedFiles.length > maxFileCount) {
                toast.error(`Cannot upload more than ${maxFileCount} files`);
                return;
            }

            const newFiles = acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            );

            const updatedFiles = files ? [...files, ...newFiles] : newFiles;

            setFiles(updatedFiles);

            if (rejectedFiles.length > 0) {
                rejectedFiles.forEach(({ file }) => {
                    toast.error(`File ${file.name} was rejected`);
                });
            }

            if (
                onUpload &&
                updatedFiles.length > 0 &&
                updatedFiles.length <= maxFileCount
            ) {
                const target =
                    updatedFiles.length > 0 ? `${updatedFiles.length} files` : `file`;

                toast.promise(onUpload(updatedFiles), {
                    loading: `Uploading ${target}...`,
                    success: () => {
                        setFiles([]);
                        return `${target} uploaded`;
                    },
                    error: `Failed to upload ${target}`,
                });
            }
        },

        [files, maxFileCount, multiple, onUpload, setFiles]
    );

    function onRemove(index: number) {
        if (!files) return;
        const newFiles = files.filter((_, i) => i !== index);
        setFiles(newFiles);
        onValueChange?.(newFiles);
    }

    // Revoke preview url when component unmounts
    React.useEffect(() => {
        return () => {
            if (!files) return;
            files.forEach((file) => {
                if (isFileWithPreview(file)) {
                    URL.revokeObjectURL(file.preview);
                }
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isDisabled = disabled || (files?.length ?? 0) >= maxFileCount;

    return (
        <Dropzone onDrop={onDrop}
            accept={accept}
            maxSize={maxSize}
            maxFiles={maxFileCount}
            multiple={maxFileCount > 1 || multiple}
            disabled={isDisabled}
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
                    </div>
                </section>
            )}
        </Dropzone>
    );
};
