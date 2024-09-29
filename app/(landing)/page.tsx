import { BlogSection } from "@/components/blog-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

type Props = {};

const LandingPage = (props: Props) => {
    return (
        <div>
            <header>
                {" "}
                {/* Hero Container */}{" "}
                <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-20">
                    {" "}
                    {/* Component */}{" "}
                    <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
                        {" "}
                        {/* Hero Content */}{" "}
                        <div className="flex flex-col">
                            {" "}
                            {/* Hero Title */}{" "}
                            <h1 className="mb-4 text-3xl font-bold md:text-5xl">
                                {" "}
                                The Website You Want Without The Dev Time.{" "}
                            </h1>
                            <p className="mb-6 max-w-lg text-sm text-gray-500  md:mb-10 lg:mb-12">
                                {" "}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                                aliquam, purus sit amet luctus venenatis, lectus{" "}
                            </p>{" "}
                            {/* Hero Button */}{" "}
                            <div className="flex space-x-2 items-center">
                                <Button>
                                    Let's Talk
                                </Button>
                                <Button variant={"ghost"} className="flex items-center">
                                    <MdOutlineArrowOutward /> <p>View Showreel</p>
                                </Button>

                            </div>
                        </div>{" "}

                        <div className="relative aspect-square max-w-2xl w-full h-full rounded-md overflow-clip">
                            <Image
                                src="https://assets.lummi.ai/assets/QmcgZd2Cc7vu8JQT3T18ENumdYeaZiGdpFxWtD7UV4kTBa?auto=format&w=1500"
                                alt=""
                                fill
                                className="inline-block h-full w-full max-w-2xl"
                            />
                        </div>
                    </div>
                </div>
            </header>
            <BlogSection />
        </div>
    );
};

export default LandingPage;
