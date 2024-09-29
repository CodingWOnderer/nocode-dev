"use client";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { useState } from "react";
import { ImageUploader } from "@/components/common/file-upload";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    profileImage: z
        .any()
        .refine(
            (file) =>
                file &&
                file.length > 0 &&
                ["image/jpeg", "image/png", "image/gif"].includes(file[0]?.type),
            { message: "Please upload a valid image (JPEG, PNG, or GIF)" }
        ),
});

const ProfileForms = () => {
    const [profileImage, setProfileImage] = useState(null);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            profileImage: undefined,
        },
    });

    function onSubmit(data: z.infer<typeof formSchema>) { }
    return (
        <div className="grid md:grid-cols-5 w-full mx-auto gap-8">
            <div className=" md:col-span-2">
                <h2 className=" text-sm font-semibold">Profile info</h2>
                <p className=" text-sm text-muted-foreground">
                    Update your photo and personal details.
                </p>
            </div>
            <div className="md:col-span-3 ">
                <Card>
                    <CardHeader className="">
                        <CardTitle className="sr-only">Card Title</CardTitle>
                        <CardDescription className="sr-only">
                            Card Description
                        </CardDescription>
                    </CardHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>First name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="First name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Last name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Last name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email address</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Email address"
                                                    type="email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="profileImage"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Profile Image</FormLabel>
                                            <FormControl>
                                                <ImageUploader
                                                    value={field?.value}
                                                    onValueChange={field.onChange}
                                                    maxFileCount={1}
                                                    maxSize={4 * 1024 * 1024}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                Upload an image (JPEG, PNG, GIF). Max size 800x400px.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>

                            <Separator />

                            <CardFooter className=" mt-4">
                                <div className="flex space-x-4 justify-end w-full">
                                    <Button type="button" variant="outline">
                                        Cancel
                                    </Button>
                                    <Button size={"sm"} type="submit">
                                        Save changes
                                    </Button>
                                </div>
                            </CardFooter>
                        </form>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default ProfileForms;
