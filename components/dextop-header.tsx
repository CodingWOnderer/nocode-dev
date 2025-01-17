import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { MobileHeader } from "./mobile-header";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Alert, AlertDescription } from "./ui/alert";
import { X } from "lucide-react";
import { Button } from "./ui/button";

const headerVariants = cva("mx-auto", {
    variants: {
        variant: {
            default: "max-w-7xl",
            centered:
                "max-w-4xl rounded-full mt-2 border shadow-lg dark:border-zinc-900",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

export interface HeaderProps extends VariantProps<typeof headerVariants> {
    sticky?: boolean;
    Logo: React.ReactNode;
    /**
     * Items to be displayed on mobile
     */
    mobileItems: ({
        setIsOpen,
    }: {
        setIsOpen: (open: boolean) => void;
    }) => React.ReactNode | React.ReactNode;
    /**
     * Items to be displayed on desktop
     */
    desktopItems: React.ReactNode;

    cohortLink?: string;
    cartLink?: string;
}

//======================================
export const DextopHeader = ({
    Logo,
    sticky,
    variant,
    mobileItems,
    desktopItems,
    cartLink,
    cohortLink,
}: HeaderProps) => {
    const [isVisible, setIsVisible] = React.useState(true);
    const router = useRouter();

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsVisible(false);
    };

    const handleBannerClick = () => {
        router.push(cohortLink ?? "");
    };
    return (
        <>
            {" "}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Alert
                            variant="default"
                            className="cursor-pointer bg-purple-100 rounded-none border-purple-200 hover:bg-purple-200 transition-colors"
                            onClick={handleBannerClick}
                        >
                            <AlertDescription className="text-purple-900 flex  items-center justify-between text-sm">
                                <span className="w-full text-center">
                                    Receive a FREE AI x Design Thinking Workshop Series with any
                                    {/* November cohort purchase.{" "}
                                    <Link
                                        href={cartLink}
                                        className="font-semibold underline hover:text-purple-700"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Add to your cart
                                    </Link>{" "}
                                    to redeem. */}
                                </span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-5 w-5 p-0 hover:bg-purple-200 ml-2 flex-shrink-0"
                                    onClick={handleClose}
                                >
                                    <X className="h-4 w-4" />
                                    <span className="sr-only">Close</span>
                                </Button>
                            </AlertDescription>
                        </Alert>
                    </motion.div>
                )}
            </AnimatePresence>
            <header
                className={cn(
                    "w-full dark:bg-zinc-950/50 border shadow-lg  backdrop-blur z-10 bg-zinc-50",
                    sticky && variant == "centered" && "md:sticky top-3",
                    sticky && variant == "default" && "md:sticky top-0"
                )}
            >
                <div className={cn("hidden md:block", headerVariants({ variant }))}>
                    <div className="flex items-center justify-between px-6 pb-2 pt-3 w-full gap-2">
                        {Logo}
                        <nav className="grow flex justify-end items-center gap-3 lg:gap-8">
                            {desktopItems}
                        </nav>
                    </div>
                </div>
                <MobileHeader Logo={Logo}>{mobileItems}</MobileHeader>
            </header>
        </>
    );
};
