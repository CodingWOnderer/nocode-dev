'use client';
import * as React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';
import { cn } from '@/lib/utils';
import { ImSpinner2 } from 'react-icons/im';
import { LuSendHorizonal } from 'react-icons/lu';

export function StatefulButton({ status, ...rest }: ButtonProps & { status: string }) {
    const variants = {
        initial: { opacity: 0, y: 15 },
        show: { opacity: 100, y: 0, transition: { delay: 0.1, duration: 0.4 } },
        hidden: { opacity: 0, y: -15, transition: { duration: 0.3 } },
    };
    return (
        <Button
            disabled={status == 'loading'}
            {...rest}
            variant={status === 'error' ? 'destructive' : rest.variant}
            className={cn('w-40 rounded-lg overflow-hidden gap-2', rest.className)}
        >
            <span key="label">
                {status == 'idle'
                    ? 'Submit'
                    : status == 'loading'
                        ? 'Pending...'
                        : 'Completed'}
            </span>
            <AnimatePresence mode="wait">
                {status === 'idle' ? (
                    <motion.span
                        key={status}
                        variants={variants}
                        initial={'initial'}
                        animate={'show'}
                        exit={'hidden'}
                    >
                        <LuSendHorizonal className="size-4" />
                    </motion.span>
                ) : status === 'loading' ? (
                    <motion.span
                        key={status}
                        variants={variants}
                        initial={'initial'}
                        animate={'show'}
                        exit={'hidden'}
                    >
                        <ImSpinner2 className="animate-spin size-4" />
                    </motion.span>
                ) : (
                    <motion.span
                        key={status}
                        variants={variants}
                        initial={'initial'}
                        animate={'show'}
                        exit={'hidden'}
                    >
                        {status === 'success' && <FaCircleCheck className="size-4" />}
                        {status === 'error' && <FaCircleXmark className="size-4" />}
                    </motion.span>
                )}
            </AnimatePresence>
        </Button>
    );
}