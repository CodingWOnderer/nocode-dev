// app/components/Footer.tsx

"use client"; // Add this if you are using client-side hooks

import Link from "next/link";
import Image from "next/image";
import { PiLinktreeLogoBold } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="block">
            {/* Container */}
            <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
                {/* Component */}
                <div className="flex flex-col items-center">
                    {/* <Link href="/" className="mb-8 inline-block max-w-full text-black">
                        <Image
                            src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94d6f4e6cf96_Group%2047874-3.png"
                            alt="Logo"
                            width={160}
                            height={40}
                            className="inline-block max-h-10"
                        />
                    </Link> */}
                    <Link href={"/"} className="flex items-center space-x-2" hrefLang={"en"}>
                        <PiLinktreeLogoBold className="mx-auto size-6" />
                        <h2 className=" font-bold text-2xl mb-2">Blogspark</h2>
                    </Link>
                    <div className="text-center font-semibold">
                        <Link
                            href="#"
                            className="inline-block px-6 py-2 font-normal text-black transition hover:text-blue-600"
                        >
                            About
                        </Link>
                        <Link
                            href="#"
                            className="inline-block px-6 py-2 font-normal text-black transition hover:text-blue-600"
                        >
                            Features
                        </Link>
                        <Link
                            href="#"
                            className="inline-block px-6 py-2 font-normal text-black transition hover:text-blue-600"
                        >
                            Works
                        </Link>
                        <Link
                            href="#"
                            className="inline-block px-6 py-2 font-normal text-black transition hover:text-blue-600"
                        >
                            Support
                        </Link>
                        <Link
                            href="#"
                            className="inline-block px-6 py-2 font-normal text-black transition hover:text-blue-600"
                        >
                            Help
                        </Link>
                    </div>
                    <div className="mb-8 mt-8 border-b border-gray-300 w-48"></div>
                    <div className="mb-12 grid grid-cols-4 w-full max-w-52 gap-3">
                        <Link
                            href="#"
                            className="mx-auto flex flex-col max-w-6 items-center justify-center text-black"
                        >
                            <Image
                                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945b4ae6cf7b_Vector-1.svg"
                                alt="Icon 1"
                                width={24}
                                height={24}
                                className="inline-block"
                            />
                        </Link>
                        <Link
                            href="#"
                            className="mx-auto flex flex-col max-w-6 items-center justify-center text-black"
                        >
                            <Image
                                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945560e6cf77_Vector.svg"
                                alt="Icon 2"
                                width={24}
                                height={24}
                                className="inline-block"
                            />
                        </Link>
                        <Link
                            href="#"
                            className="mx-auto flex flex-col max-w-6 items-center justify-center text-black"
                        >
                            <Image
                                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940535e6cf7a_Vector-3.svg"
                                alt="Icon 3"
                                width={24}
                                height={24}
                                className="inline-block"
                            />
                        </Link>
                        <Link
                            href="#"
                            className="mx-auto flex flex-col max-w-6 items-center justify-center text-black"
                        >
                            <Image
                                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9433a9e6cf88_Vector-2.svg"
                                alt="Icon 4"
                                width={24}
                                height={24}
                                className="inline-block"
                            />
                        </Link>
                    </div>
                    <p className="text-sm sm:text-base">
                        © Copyright 2021. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
