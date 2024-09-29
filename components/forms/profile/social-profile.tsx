"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
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
const formSchema = z.object({
    twitter: z.string().optional(),
    facebook: z.string().optional(),
    linkedin: z.string().optional(),
});

export function SocialProfilesForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            twitter: "",
            facebook: "",
            linkedin: "",
        },
    });

    function onSubmit() { }

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 w-full mx-auto gap-8">
            <div className="md:col-span-2">
                <h2 className=" text-sm font-semibold">Social info</h2>
                <p className=" text-sm text-muted-foreground">
                    Update your Social Links.
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
                                <FormField
                                    control={form.control}
                                    name="twitter"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Twitter profile</FormLabel>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-gray-500">twitter.com/</span>
                                                <FormControl>
                                                    <Input placeholder="yourusername" {...field} />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="facebook"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Facebook profile</FormLabel>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-gray-500">facebook.com/</span>
                                                <FormControl>
                                                    <Input placeholder="yourusername" {...field} />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="linkedin"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>LinkedIn profile</FormLabel>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-gray-500">
                                                    linkedin.com/company/
                                                </span>
                                                <FormControl>
                                                    <Input placeholder="yourusername" {...field} />
                                                </FormControl>
                                            </div>
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
}
