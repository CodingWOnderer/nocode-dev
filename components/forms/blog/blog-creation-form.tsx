"use client"
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
import { ImageUploader } from "@/components/common/file-upload";
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
import { TimePickerDemo } from "@/components/extension/time-picker-demo";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { InputTags } from "@/components/extension/tag-input";

const FroalaEditorComponent = dynamic(
    () => import("@/components/core/text-editor"),
    {
        ssr: false,
    }
);

interface BlogFromProps {
    form: UseFormReturn<
        {
            title: string;
            slug: string;
            date: Date | undefined;
            image: string | undefined;
            discription: string;
            category: string;
            author: string;
            content: string;
            userTags: string[];
        },
        any,
        undefined
    >;
}

export function BlogForm({ form }: BlogFromProps) {
    const imageValue = form.watch("image");

    return (
        <Form {...form}>
            <form className="space-y-8 relative">
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

                {/** Category */}
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Category" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/** Author*/}
                <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Author</FormLabel>
                            <FormControl>
                                <Input placeholder="Authors name" {...field} />
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
                                            // @ts-ignore
                                            date={new Date(field?.value ?? undefined)}
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
                                {imageValue !== undefined ? (
                                    <div className="relative p-2">
                                        <div className="aspect-video relative  overflow-clip rounded-lg">
                                            <Image src={imageValue ?? ""} alt="Blog Header" fill />
                                        </div>
                                        <Button
                                            type="button"
                                            onClick={() => form.setValue("image", undefined)}
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

                {/**tags */}
                <FormField
                    control={form.control}
                    name="userTags"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Add Tag(s)</FormLabel>
                            <FormControl>
                                <InputTags {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter up to 5 relevant tags for your blog post, like 'coding' or
                                'productivity'.
                            </FormDescription>
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
                                        <FroalaEditorComponent field={field} />
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}
