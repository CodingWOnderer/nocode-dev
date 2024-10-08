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
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// Define the schema with zod
const formSchema = z.object({
    streetAddress: z.string().min(1, { message: "Street address is required" }),
    apartmentNumber: z.string().optional(),
    city: z.string().min(1, { message: "City is required" }),
    state: z.string().min(2, { message: "State/Province is required" }),
    postalCode: z.string().min(4, { message: "Postal code is required" }),
    country: z.string().min(1, { message: "Country is required" }),
    phoneNumber: z
        .string()
        .regex(/^\+?\d{7,15}$/, { message: "Enter a valid phone number" })
        .optional(),
});



export function AddressForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            streetAddress: "",
            apartmentNumber: "",
            city: "",
            state: "",
            postalCode: "",
            country: "Australia",
            phoneNumber: "",
        },
    });

    function onSubmit() { }

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 w-full mx-auto gap-8">
            <div className=" md:col-span-2">
                <h2 className=" text-sm font-semibold">Address info</h2>
                <p className=" text-sm text-muted-foreground">
                    Update your Address info
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
                                {/* Street Address */}
                                <FormField
                                    control={form.control}
                                    name="streetAddress"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Street Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="100 Smith Street" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Apartment/Suite Number */}
                                <FormField
                                    control={form.control}
                                    name="apartmentNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Apartment/Suite (optional)</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Apt/Suite Number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* City */}
                                <FormField
                                    control={form.control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>City</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Collingwood" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* State/Province and Postal Code */}
                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="state"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>State/Province</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="VIC" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="postalCode"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Postal Code</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="3066" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Country */}
                                <FormField
                                    control={form.control}
                                    name="country"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Country</FormLabel>
                                            <FormControl>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a country" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Australia">Australia</SelectItem>
                                                        <SelectItem value="USA">USA</SelectItem>
                                                        <SelectItem value="Canada">Canada</SelectItem>
                                                        {/* Add more countries as needed */}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Phone Number */}
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number (optional)</FormLabel>
                                            <FormControl>
                                                <Input placeholder="+61 123 456 789" {...field} />
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
