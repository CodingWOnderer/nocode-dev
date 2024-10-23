"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
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
import Link from "next/link";
import { PiLinktreeLogoBold } from "react-icons/pi";
import { Separator } from "../ui/separator";
import { useState } from "react";

const signInSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export function SignInForm() {
    const form = useForm({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [nextstep, setNextStep] = useState(true);
    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 30 },
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 },
        }),
    };

    const [direction, setDirection] = useState(1);

    const watchValue = form.watch("email")

    function onSubmit(data: z.infer<typeof signInSchema>) { }

    return (
        <div className="max-w-sm mx-auto w-full">
            <div>
                <div className="flex justify-between">
                    <Link href={"/"} hrefLang={"en"}>
                        <PiLinktreeLogoBold className="mx-auto size-6" />
                    </Link>

                    {!nextstep && <Button
                        onClick={() => {
                            setDirection(-1);
                            setNextStep(true);
                        }}
                        variant={"ghost"}
                        className="text-xs border rounded-xl h-6"
                    >
                        back
                    </Button>}
                </div>

                <h1 className="mb-1 font-semibold text-2xl mt-12">
                    Sign In to Capcons Sage
                </h1>

                <p className="my-0 text-sm text-muted-foreground">
                    Welcome back! Sign in to continue
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 my-8">
                    {/* Use Framer Motion to animate the form fields */}
                    <motion.div
                        key={nextstep ? "email" : "password"}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="relative"
                    >
                        {nextstep ? (
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <div className="flex border focus-within:ring-1 focus-within:ring-ring rounded-md p-1">
                                                <Input
                                                    type="email"
                                                    className="file:text-foreground  border-none focus-visible:outline-none focus-visible:ring-0  disabled:cursor-not-allowed disabled:opacity-50"
                                                    placeholder="you@example.com"
                                                    {...field}
                                                />
                                                <Button
                                                    type="button"
                                                    disabled={watchValue.length === 0}
                                                    className=" text-xs font-semibold px-2"
                                                    size={"icon"}
                                                    onClick={() => {
                                                        setDirection(1);
                                                        setNextStep(false);
                                                    }}
                                                >
                                                    Next
                                                </Button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ) : (
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <div className="flex border focus-within:ring-1 focus-within:ring-ring rounded-md p-1">
                                                <Input
                                                    type="password"
                                                    className="file:text-foreground  border-none focus-visible:outline-none focus-visible:ring-0  disabled:cursor-not-allowed disabled:opacity-50"
                                                    placeholder="********"
                                                    {...field}
                                                />
                                                <Button
                                                    type="submit"
                                                    className=" text-xs  font-semibold w-12 px-2"
                                                    size={"icon"}
                                                >
                                                    Log In
                                                </Button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                    </motion.div>
                </form>
            </Form>

            <div className="my-0 w-full text-sm">
                Don&apos;t have an account ?{" "}
                <Link className="underline text-sm text-foreground" href="/onboarding">
                    Create account
                </Link>
            </div>

            <Separator className="mb-6 mt-36 md:mt-40 lg:mt-24" />

            <div className="text-muted-foreground text-sm">
                By proceeding, you consent to get calls, WhatsApp or SMS messages,
                including by automated means, from Capcons and its affiliates to the
                number provided.
            </div>
        </div>
    );
}
