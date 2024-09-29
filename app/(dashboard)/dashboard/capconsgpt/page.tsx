"use client"
import BottomTextArea from '@/components/chat/bottom-textarea'
import React from 'react'
import { PiLinktreeLogoBold } from 'react-icons/pi'
import { TypeAnimation } from 'react-type-animation';

const BlogsPage = () => {
    return (
        <div className=' relative min-h-dvh flex flex-col justify-center items-center'>
            <div className='flex flex-col space-y-1'>
                <PiLinktreeLogoBold className="mx-auto size-6" />
                <div className=' max-w-sm text-center mx-auto'>
                    <TypeAnimation
                        sequence={[
                            'How Can i help you today?',
                            1000,
                            `Personalize the introduction to match your blog's style and tone.`,
                            2000,
                            'Blogs bridge gap between academia industry',
                            3000,
                            'Blogs discuss ethics and societal impacts.',
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className=' text-sm'
                    />
                </div>
            </div>
            <BottomTextArea />
        </div>
    )
}

export default BlogsPage