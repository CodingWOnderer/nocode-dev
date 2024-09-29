"use client";

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
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// Zod schema for form validation
const formSchema = z
    .object({
        currentPassword: z
            .string()
            .min(1, { message: "Current password is required." }),
        newPassword: z
            .string()
            .min(8, { message: "New password must be at least 8 characters." }),
        confirmPassword: z
            .string()
            .min(1, { message: "Please confirm your new password." }),
    })
    .refine((values) => values.newPassword === values.confirmPassword, {
        message: "Password must match!",
        path: ["confirmPassword"],
    });

export function PasswordUpdateForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });

    function onSubmit(data: z.infer<typeof formSchema>) { }

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 w-full mx-auto gap-8">
            <div className=" md:col-span-2">
                <h2 className=" text-sm font-semibold">Password info</h2>
                <p className=" text-sm text-muted-foreground">
                    Update your password details.
                </p>
            </div>
            <div className="md:col-span-3">
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
                                <FormField
                                    control={form.control}
                                    name="currentPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Current password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Enter your current password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="newPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>New password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Enter your new password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                Your new password must be more than 8 characters.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirm new password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Confirm your new password"
                                                    {...field}
                                                />
                                            </FormControl>
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
                                    <Button size={"sm"} type="submit">Update password</Button>
                                </div>
                            </CardFooter>
                        </form>
                    </Form>
                </Card>
            </div>
        </div>
    );
}
