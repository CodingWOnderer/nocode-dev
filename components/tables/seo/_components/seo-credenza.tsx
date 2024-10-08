import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
// import { SEOForm } from '@/components/forms/seo/seo-form'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { CgAdd } from 'react-icons/cg'
import { SeoForm } from '@/components/forms/seo/seo-form'


export const SeoCredenza = ({ slug }: { slug: string }) => {
    return (
        <Dialog>
            <DialogTrigger className={cn(buttonVariants({ variant: "ghost" }), " gap-x-1 h-8")}><CgAdd />Seo</DialogTrigger>
            <DialogContent className='max-w-2xl max-h-[600px] w-full h-full '>
                <DialogHeader>
                    <DialogTitle>Seo Control of Website</DialogTitle>
                    <DialogDescription>
                        Manage your website's SEO settings to optimize visibility on search engines.
                        Update key SEO elements like meta titles, descriptions, canonical URLs, and more.
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className='h-[calc(100dhv-300px)]'>
                    <SeoForm slug={slug} />
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}
