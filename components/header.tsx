"use client";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Button } from "./ui/button";
import { DextopHeader } from "./dextop-header";
import { PiLinktreeLogoBold } from "react-icons/pi";
import { ThemeToggle } from "./toggle-theme";
import React from "react";
import { Search } from "./search-input";

const headerLinks = [
    { name: "Courses", href: "/courses" },
    { name: "Certificates", href: "/certificates" },
    { name: "Teams", href: "/teams" },
    { name: "About", href: "/about" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Blogs", href: "/login" },
];
const icons = [
    {
        name: "Twitter",
        icon: <FaXTwitter size="14" />,
        href: "https://x.com",
    },
    {
        name: "GitHub",
        icon: <FaGithub size="14" />,
        href: "https://github.com",
    },
];
const HeaderLink = (props: { href: string; name: string }) => {
    return <Link href={props.href} className=" after:content-[' '] transition-all duration-500 after:bottom-0 after:left-0 relative after:bg-stone-700 after:h-0.5 after:m2  hover:after:w-full after:transition-all after:w-0 after:absolute text-stone-700">{props.name}</Link>;
};
export const HeaderDemo = ({
    variant = "default",
    sticky,
}: {
    variant: "default" | "centered";
    sticky: boolean;
}) => (
    <DextopHeader
        Logo={
            <Link href={"/"} hrefLang={"en"}>
                <PiLinktreeLogoBold className="mx-auto size-6" />
            </Link>
        }
        variant={variant}
        sticky={sticky}
        desktopItems={
            <>
                <div className=" w-full max-w-4xl flex justify-between items-center">
                    <div className="flex-1 w-full space-x-4">
                        {headerLinks.map((link, i) => (
                            <HeaderLink key={i} href={link.href} name={link.name} />
                        ))}
                    </div>
                    <Search />
                </div>
                <ThemeToggle />
            </>
        }
        mobileItems={({ setIsOpen }) => (
            <>
                {headerLinks.map((link) => (
                    <Button
                        key={link.href}
                        asChild
                        variant={"outline"}
                        className="w-full rounded-xl justify-center"
                        size="lg"
                        onClick={() => setIsOpen(false)}
                    >
                        <Link href={link.href}>{link.name}</Link>
                    </Button>
                ))}

                <div className="flex-row-end w-full gap-3 border-t pt-4 border-dashed">
                    {icons && (
                        <div className="flex-row-center grow gap-2">
                            {icons.map((icon) => (
                                <Button
                                    key={icon.name}
                                    size="icon"
                                    className="rounded-full"
                                    variant={"outline"}
                                    asChild
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Link href={icon.href}>{icon.icon}</Link>
                                </Button>
                            ))}
                        </div>
                    )}
                </div>
            </>
        )}
    />
);
