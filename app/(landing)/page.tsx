import { BlogSection } from "@/components/blog-section";
import BlogComponent from "@/components/blog-section2";
import { WordRotate } from "@/components/extension/word-rotation";
import FAQ from "@/components/faq-section";
import Newsletter from "@/components/newsletter";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const LandingPage = () => {
    return (
        <div>
            <header>
                {" "}
                {/* Hero Container */}{" "}
                <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-10 md:py-20">
                    {" "}
                    {/* Component */}{" "}
                    <div className="grid items-center justify-items-start gap-x-8 sm:gap-x-20 grid-cols-1 md:grid-cols-2">
                        {" "}
                        {/* Hero Content */}{" "}
                        <div className="flex flex-col mx-auto md: w-full">
                            {" "}
                            {/* Hero Title */}{" "}
                            <h2 className="text-4xl mx-auto md:mx-0 md:text-start text-center max-w-96 font-light leading-[60px]">
                                Gain the skills & confidence to
                            </h2>
                            {/* <WordRotate
                                className="mb-8 text-3xl highlight highlight-primary text-black p-2 font-semibold md:text-4xl"
                                words={[
                                    `help you create compelling blogs effortlessly`,
                                    `help you produce high-quality content in less time.`,
                                    `help you share your stories with the world effortlessly.`,
                                    `help you craft unique and impactful narratives.`,
                                ]}
                            /> */}
                            <div className="mb-8 mx-auto md:mx-0 md:text-start text-center  text-4xl text-black space-y-2 p-2 font-bold md:text-5xl">
                                <div className="highlight leading-[80px] max-w-fit highlight-yellow-300 w-full">
                                    understand ,
                                </div>
                                <div className="highlight leading-[80px] max-w-fit highlight-yellow-300 w-full">motivate and</div>
                                <div className="highlight leading-[80px] max-w-fit highlight-yellow-300 w-full"> inspire.</div>
                            </div>
                            <p className="mb-6 mx-auto md:mx-0 md:text-start text-center  max-w-lg text-lg font-serif font-medium  md:mb-10 lg:mb-12">
                                {" "}
                                {`Grow your career with online learning from award-winning human-centered design firm IDEO.`}
                            </p>
                        </div>
                        <div className="relative  mx-auto md:mx-0   max-w-xl w-full h-full aspect-square rounded-md ">
                            <div className="absolute z-[1] -left-10 sm:-left-20 -rotate-45">
                                <svg className=" h-28 w-28 md:h-auto md:w-auto" viewBox="0 0 107 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M96.9415 3C83.9651 12.7688 62.6129 29.9891 69.2488 49.8971C72.474 59.573 73.6933 67.4991 83.5725 72.1785C103.66 81.6933 111.734 46.8067 93.8645 37.4832C58.0667 18.8058 19.9441 43.0797 20.5479 81.7278C20.8272 99.6036 29.9675 116.662 45.3758 126.078C52.6148 130.502 64.8727 133.272 68.2939 122.153C75.9073 97.4083 44.9218 80.5504 24.2615 91.9135C-8.99973 110.207 0.847845 158.246 25.853 178.705C25.9998 178.825 45.1635 193.231 45.1635 189.103C45.1635 180.949 29.0848 160.842 32.113 168.413C35.1128 175.913 42.3016 179.139 47.2857 184.435C49.6022 186.896 24.8867 202.189 20.5479 205.443" stroke="#1C1C1C" strokeWidth="5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <Image
                                src="	https://assets.lummi.ai/assets/Qmf5yGsNTBoo88N6aNbmnmiwsr7v7AQ9diMmZyJrqcvvmj?auto=format&w=1500"
                                alt=""
                                fill
                                className="inline-block h-full w-full max-w-2xl"
                            />
                        </div>

                        <div className="grid lg:grid-cols-2 md:col-span-2 lg:col-span-1 col-span-1 gap-4 lg:gap-2 mx-auto w-2/3 mt-5 lg:mt-0 lg:w-full items-center">
                            <Button className=" font-bold">{`Create Blogs`}</Button>
                            <Button variant={"outline"} className="flex font-bold items-center">
                                <MdOutlineArrowOutward /> <p>View Blogs</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            {/* <BlogSection /> */}

            <BlogComponent />

            <FAQ />
            <Newsletter />
        </div>
    );
};

export default LandingPage;
