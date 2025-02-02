'use client';

import { CgClose, CgMenu } from 'react-icons/cg';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Search } from './search-input';

export const MobileHeader = ({
    Logo,
    children,
}: {
    Logo: React.ReactNode;
    children: ({
        setIsOpen,
    }: {
        /**
         * Set the open state of the mobile header, use to close the header when a link is clicked
         */
        setIsOpen: (open: boolean) => void;
    }) => React.ReactNode | React.ReactNode;
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div
            className={cn(
                'md:hidden px-4 pt-2',
                isOpen && 'min-h-screen z-40 dark:bg-stone-950 bg-stone-50 size-full'
            )}
        >
            <div className="flex justify-between items-center pb-2">
                {Logo}
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    size="icon"
                    className="rounded-xl"
                    variant={'outline'}
                >
                    {isOpen ? <CgClose /> : <CgMenu />}
                </Button>
            </div>
            <div className='my-2'>
                <Search />
            </div>
            <dialog
                open={isOpen}
                className={
                    isOpen
                        ? 'animate-popover-in flex flex-col gap-3 h-full w-full pt-4 px-4 bg-inherit'
                        : 'hidden'
                }
            >
                {typeof children === 'function' ? children({ setIsOpen }) : children}
            </dialog>
        </div>
    );
};