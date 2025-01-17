'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { X } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'

interface BannerProps {
    cohortLink: string
    cartLink: string
}

export default function InteractiveBanner({ cohortLink, cartLink }: BannerProps) {
    const [isVisible, setIsVisible] = useState(true)
    const router = useRouter()

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsVisible(false)
    }

    const handleBannerClick = () => {
        router.push(cohortLink)
    }

    return (
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
                        <AlertDescription className="text-purple-900 flex items-center justify-between text-sm">
                            <span>
                                Receive a FREE AI x Design Thinking Workshop Series with any November cohort purchase.{' '}
                                <Link
                                    href={cartLink}
                                    className="font-semibold underline hover:text-purple-700"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Add to your cart
                                </Link>{' '}
                                to redeem.
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
    )
}
