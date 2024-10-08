"use client";

import { useChat } from "ai/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { parseJsonString } from "@/utils";
import { AssistantMessageKeysType, MessageUi } from "../components/message";
import { useEffect, useRef } from "react";
import { Marquee } from "@/components/extension/Marquee";
import React from "react";
import { PiLinktreeLogoBold } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import {
    CarouselImage,
    imageUrls1,
    imageUrls2,
    imageUrls3,
} from "./image-comp";
import { FormComponent } from "./bottom-input";


export const AssitantInputContainer = () => {
    const { messages, input, handleInputChange, isLoading, handleSubmit } = useChat();

    const bottomRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const smoothTransition = {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5,
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <div  >
            <AnimatePresence mode="wait">
                {messages.length === 0 && (
                    <motion.div
                        key="noMessages"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={containerVariants}
                        transition={smoothTransition}
                        className="max-h-dvh flex flex-col"
                    >
                        <div className="storybook-fix relative flex h-full max-h-96 min-h-72 w-full min-w-72 items-center justify-center overflow-hidden rounded bg-background">
                            <div className="relative max-w-2xl mx-auto flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background dark:md:shadow-xl">
                                <Marquee pauseOnHover className="[--duration:20s]">
                                    {imageUrls1.map((item, index) => (
                                        <CarouselImage key={index} src={item} />
                                    ))}
                                </Marquee>
                                <Marquee reverse pauseOnHover className="[--duration:20s]">
                                    {imageUrls2.map((item, index) => (
                                        <CarouselImage key={index} src={item} />
                                    ))}
                                </Marquee>
                                <Marquee pauseOnHover className="[--duration:20s]">
                                    {imageUrls3.map((item, index) => (
                                        <CarouselImage key={index} src={item} />
                                    ))}
                                </Marquee>
                                <div className="pointer-events-none absolute flex justify-center items-center inset-0 bg-gradient-to-r from-white via-transparent/20 to-background dark:via-transparent/50 dark:to-background dark:from-background"></div>
                            </div>
                        </div>

                        <div className="h-[calc(100dvh-18rem)] relative w-full max-w-xl mx-auto flex justify-center items-center">
                            <div className="flex flex-col space-y-1">
                                <div className="bg-secondary mx-auto rounded-full p-2 size-10 flex justify-center items-center">
                                    <PiLinktreeLogoBold className="mx-auto size-6" />
                                </div>
                                <div className="max-w-sm text-center mx-auto">
                                    <motion.span
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={smoothTransition}
                                    >
                                        <TypeAnimation
                                            sequence={[
                                                "Hi there! Get started by typing hi",
                                                1000
                                            ]}
                                            wrapper="span"
                                            cursor={true}
                                            repeat={0}
                                            className="text-sm"
                                        />
                                    </motion.span>
                                </div>
                            </div>
                        </div>

                        {/* Common Form Component */}
                        <FormComponent
                            input={input}
                            handleInputChange={handleInputChange}
                            handleSubmit={handleSubmit}
                            isLoading
                        />
                    </motion.div>
                )}

                {messages.length > 0 && (
                    <motion.div
                        key="withMessages"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={containerVariants}
                        transition={smoothTransition}
                        layout
                    >
                        <ScrollArea className="h-[calc(100dvh)] pt-5 pb-[100px] w-full">
                            <div className="max-w-2xl mx-auto">
                                {messages.map((item) => {
                                    if (item.role === "assistant") {
                                        const data = parseJsonString(item.content);
                                        const AssistantMessage =
                                            MessageUi[
                                                (data?.key as AssistantMessageKeysType) ?? "USERNAME"
                                            ].component;
                                        return (
                                            <motion.div
                                                key={item.id}
                                                layout
                                                transition={smoothTransition}

                                            >
                                                <AssistantMessage
                                                    message={JSON.stringify(data?.message) ?? ""}
                                                />
                                            </motion.div>
                                        );
                                    }
                                    return (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={smoothTransition}
                                            layout
                                            className="flex justify-end space-x-2 py-3 p-2"
                                        >
                                            <div className="text-sm max-w-sm bg-secondary rounded-2xl p-3">
                                                {item.content}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Common Form Component */}
                            <FormComponent
                                input={input}
                                handleInputChange={handleInputChange}
                                handleSubmit={handleSubmit}
                                isLoading
                            />

                            <div id="anchor" ref={bottomRef}></div>
                        </ScrollArea>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
