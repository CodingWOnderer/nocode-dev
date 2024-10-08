import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    'size-full bg-transparent ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium dark:placeholder:text-stone-600 placeholder:text-stone-400 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none text-base',
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);

const rootVariants = cva(
    'py-1 px-2 flex rounded gap-1 items-center transition duration-200',
    {
        variants: {
            variant: {
                // outline
                default:
                    'border ring-stone-800 ring-stone-300 focus-within:ring-2 focus-within:ring-offset-2 dark:focus-within:ring-stone-400 focus-within:ring-offset-white dark:focus-within:ring-offset-black focus-within:ring-stone-600',

                underlined:
                    'border-b-[1px] dark:border-stone-800 focus-within:border-b-2 dark:focus-within:border-stone-400 focus-within:border-stone-500 rounded-none px-0',

                filled:
                    'bg-stone-100 dark:bg-stone-900 dark:text-stone-100 focus-within:bg-stone-200 dark:focus-within:bg-stone-800',

                ghost:
                    'bg-transparent dark:bg-transparent dark:text-stone-100 focus-within:bg-stone-100 dark:focus-within:bg-stone-900',
                neubrutalism:
                    'border border-stone-700 rounded-sm shadow-[2px_2px_0px_rgb(82,82,91)] dark:shadow-[2px_2px_0px_rgb(82,82,91)] focus-within:bg-yellow-50 dark:focus-within:bg-stone-900/40',
                // with floating label
            },
            size: {
                sm: 'h-8',
                default: 'h-10',
                lg: 'h-12',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

type InputBlockProps = {
    root?: VariantProps<typeof rootVariants> & {
        className?: string;
    };
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
} & InputProps;

const InputBlock = ({
    root: { size, variant, className } = { size: 'default', variant: 'default' },
    leftIcon,
    rightIcon,
    ...input
}: InputBlockProps) => (
    <div className={cn(rootVariants({ variant, size, className }), "border-t  w-full")}>
        {leftIcon && <span className="px-1">{leftIcon}</span>}
        <Input {...input} />
        {rightIcon && <span className="px-1">{rightIcon}</span>}
    </div>
);

export { Input, InputBlock };

Input.displayName = 'Input';
InputBlock.displayName = 'InputBlock';