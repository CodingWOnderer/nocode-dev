import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TbUserShare } from "react-icons/tb";
import { Button } from './ui/button';

const ProfileHeader = () => {
    return (
        <div className='min-h-96 border h-full grid grid-rows-[10rem_auto] md:grid-rows-[16.25rem_6.25rem] w-full'>
            <div className='relative '>
                <Image src={"/back.jpg"} fill alt='@blogs' className=' h-full w-full object-cover' />
            </div>
            <div className='px-5'>
                <div className='max-w-6xl space-y-4 w-full md:flex-row flex-col mx-auto flex justify-between '>
                    <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3'>
                        <Avatar className=' size-24 md:size-40 -mt-12 md:-mt-16 border-4'>
                            <AvatarImage src="https://assets.lummi.ai/assets/QmbPr8hZZi7GzVCFf6dLosxQ26YM3pYvk5hYfqXB42SXFt?auto=format&w=1500" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='  flex flex-col justify-center'>
                            <h1 className=' text-xl md:text-2xl font-semibold'>Vipin Bhati</h1>
                            <span className=' text-xs md:text-sm text-muted-foreground font-normal'>vipin@capcons.com</span>
                        </div>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <Button variant={"outline"} size={"sm"} className='h-9 gap-x-1 flex items-center'>
                            <TbUserShare /> <span>Share</span>
                        </Button>
                        <Button variant={"default"} size={"sm"} >View Profile</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader