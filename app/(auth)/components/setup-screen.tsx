"use client";

import { Marquee } from "@/components/extension/Marquee";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { PiLinktreeLogoBold } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion components
import {
    CarouselImage,
    imageUrls1,
    imageUrls2,
    imageUrls3,
} from "./image-comp";

export const SetupScreen = () => {
    const [visible, setVisible] = useState<boolean>(true);

    const springTransition = {
        type: "spring",
        stiffness: 300,
        damping: 30,
    };

    return (
        <div className="min-h-dvh flex flex-col">
            <div className="storybook-fix relative flex h-full max-h-96 min-h-72 w-full min-w-72 items-center justify-center overflow-hidden rounded bg-background">
                <div className="relative max-w-2xl mx-auto flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {imageUrls1.map((item, index) => {
                            return <CarouselImage key={index} src={item} />;
                        })}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {imageUrls2.map((item, index) => {
                            return <CarouselImage key={index} src={item} />;
                        })}
                    </Marquee>
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {imageUrls3.map((item, index) => {
                            return <CarouselImage key={index} src={item} />;
                        })}
                    </Marquee>
                    <div className="pointer-events-none absolute flex justify-center items-center inset-0 bg-gradient-to-r from-white dark:via-transparent/50 dark:to-background dark:from-background"></div>
                </div>
            </div>

            <div className="h-[calc(100dvh-18rem)] w-full max-w-xl mx-auto flex justify-center items-center">
                <div className="flex flex-col space-y-1">
                    <div className="bg-secondary mx-auto rounded-full p-2 size-10 flex justify-center items-center">
                        <PiLinktreeLogoBold className="mx-auto size-6" />
                    </div>
                    <div className="max-w-sm text-center mx-auto">
                        <AnimatePresence>
                            {visible ? (
                                <motion.span
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={springTransition}
                                >
                                    <TypeAnimation
                                        sequence={[
                                            "Hello, I am Capcons Sage",
                                            1000,
                                            "Setting Up Your Dashboard For First Time Use",
                                            2000,
                                            "Cooking Up Some Editor and SEO Setup For you",
                                            3000,
                                            "Finishing Setting Up....",
                                            () => setVisible(false),
                                        ]}
                                        wrapper="span"
                                        cursor={true}
                                        repeat={0}
                                        className="text-sm"
                                    />
                                </motion.span>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={springTransition}
                                    className="py-10 space-y-2"
                                >
                                    <h1>Welcome to Blog Spark</h1>
                                    <Button className="text-sm gap-x-1">
                                        Get Started <ArrowRight size={16} />
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};
