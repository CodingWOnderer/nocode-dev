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
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import {
    ImageUploader,
} from "@/components/common/file-upload";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { TimePickerDemo } from "@/components/extension/time-picker-demo";
import { cn } from "@/lib/utils";
import useBlogStore from "@/hooks/use-blog-store";


const formSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    discription: z.string().min(10, { message: "atleast 10 words" }),
    slug: z
        .string()
        .min(1, { message: "Slug is required" })
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
            message: "Slug must be lowercase and hyphenated",
        }),
    date: z.date().optional(),
    image: z.string().optional(),
    content: z.string().min(1, { message: "Content is required" }),
});

export type BlogTypes = z.infer<typeof formSchema>;

export function BlogForm() {

    const { setLocalBlog } = useBlogStore();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            slug: "",
            date: undefined,
            image: undefined,
            discription: "",
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

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data);
        setLocalBlog({ ...data, date: data.date?.toISOString() })
        toast.success("Your blog has been created");
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
            >
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

                {/** Discription */}
                <FormField
                    control={form.control}
                    name="discription"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Discription</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Enter discription" {...field} rows={4} />
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
                        <FormItem className="flex flex-col">
                            <FormLabel>Date</FormLabel>
                            <Popover>
                                <FormControl>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {field.value ? (
                                                format(field.value, "PPP HH:mm:ss")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                </FormControl>
                                <PopoverContent className="w-auto mr-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        initialFocus
                                    />
                                    <div className="p-3 border-t border-border">
                                        <TimePickerDemo
                                            setDate={field.onChange}
                                            date={field.value}
                                        />
                                    </div>
                                </PopoverContent>
                            </Popover>
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
                                {form.getValues("image") !== undefined ? (
                                    <div className="relative p-2">
                                        <div className="aspect-video relative  overflow-clip rounded-lg">
                                            <Image
                                                src={form?.getValues("image") ?? ""}
                                                alt="Blog Header"
                                                fill
                                            />
                                        </div>
                                        <Button
                                            type="button"
                                            onClick={() => form.resetField("image")}
                                            className=" absolute -left-0.5 -top-2 bg-background hover:bg-background rounded-full shadow-none p-0 size-6 text-red-500"
                                            size={"icon"}
                                        >
                                            <IoIosCloseCircle size={24} />
                                        </Button>
                                    </div>
                                ) : (
                                    <ImageUploader
                                        value={field.value}
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
                <Button type="submit" size={"sm"} className=" float-right w-[80px]">
                    Save
                </Button>
            </form>
        </Form>
    );
}
