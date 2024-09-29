"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditorComponent from "react-froala-wysiwyg";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import {
    FileWithPreview,
    ImageUploader,
} from "@/components/common/file-upload";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";

// Zod schema for form validation
const formSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    slug: z
        .string()
        .min(1, { message: "Slug is required" })
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
            message: "Slug must be lowercase and hyphenated",
        }),
    date: z.string().min(1, { message: "Date is required" }),
    image: z
        .any()
        .refine((file) => file.length > 0, { message: "Image is required" }),
    content: z.string().min(1, { message: "Content is required" }),
});

export function BlogForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            slug: "",
            date: "",
            image: undefined,
            content: "",
        },
    });

    const config = {
        key: process.env.NEXT_PUBLIC_FROALA_EDITOR_KEY,
        toolbarInline: false,
        toolbarSticky: false,
        charCounterCount: false,
        tooltips: false,
        placeholderText: "Unveil your story...",
        toolbarButtons: [
            "bold",
            "italic",
            "underline",
            "fontSize",
            "alignLeft",
            "alignCenter",
            "alignRight",
            "alignJustify",
            "formatOL",
            "formatUL",
            "paragraphFormat",
            "quote",
            "insertLink",
            "insertImage",
            "insertVideo",
            "insertTable",
            "embedly",
            "insertFile",
            "fullscreen",
            "getPDF",
            "html",
        ],
        quickInsertEnabled: false,
        theme: "dark",
    };

    function onSubmit() { }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Title */}
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Slug */}
                <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Slug</FormLabel>
                            <FormControl>
                                <Input placeholder="yoursite.url/blog/" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Date */}
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Date</FormLabel>
                            <FormControl>
                                <Input
                                    type="date"
                                    {...field}
                                    onChange={(e) =>
                                        field.onChange(
                                            format(new Date(e.target.value), "MM/dd/yyyy")
                                        )
                                    }
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Image */}
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Image</FormLabel>
                            <FormControl>
                                {(form.getValues("image") as unknown as FileWithPreview[])?.[0]
                                    ?.preview ? (
                                    <div className="relative p-2">
                                        <div className="aspect-video relative  overflow-clip rounded-lg">
                                            <Image
                                                src={
                                                    (
                                                        form.getValues(
                                                            "image"
                                                        ) as unknown as FileWithPreview[]
                                                    )[0]?.preview
                                                }
                                                alt="Blog Header"
                                                fill
                                            />
                                        </div>
                                        <Button className=" absolute -left-0.5 -top-2 bg-background hover:bg-background rounded-full shadow-none p-0 size-6 text-red-500" size={"icon"}>
                                            <IoIosCloseCircle size={24} />
                                        </Button>
                                    </div>
                                ) : (
                                    <ImageUploader
                                        value={field?.value}
                                        onValueChange={field.onChange}
                                        maxFileCount={1}
                                        maxSize={4 * 1024 * 1024}
                                    />
                                )}
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Content */}
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <div className="editor-container pt-5 mx-auto max-w-4xl">
                                    <div className="editor-title-input">
                                        <FroalaEditorComponent
                                            tag="textarea"
                                            model={field.value}
                                            onModelChange={field.onChange}
                                            config={config}
                                        />
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" size={"sm"} className=" float-right w-[80px]">Save</Button>
            </form>
        </Form>
    );
}
