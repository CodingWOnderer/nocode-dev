import type { ReactNode } from 'react';
import { Button, buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const Root = ({ isActive = false, link, children }: { isActive?: boolean; children: ReactNode; link: string }) => (
    <Link href={link} className={cn('justify-start gap-3.5 px-4', isActive && 'bg-white dark:bg-gray-500/10 dark:!shadow-none dark:[--btn-border-color:theme(colors.transparent)]', buttonVariants({ variant: isActive ? "outline" : 'ghost' }))}>
        {children}
    </Link>
);

export const Icon = ({ children }: { children: ReactNode }) => (
    <Button size="sm" >
        {children}
    </Button>
);

