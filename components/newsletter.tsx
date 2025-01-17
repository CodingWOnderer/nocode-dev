import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

type Props = {}

const Newsletter = (props: Props) => {
    return (
        <section className='bg-[#F2F9F9]'>
            {/* Container */}
            <div className="mx-auto w-full  max-w-5xl px-5 py-16 md:px-10 md:py-20">
                {/* Component */}
                <div className="bg-gray-100 rounded-lg p-8 text-center sm:px-10 md:px-16">

                    {/* Title */}
                    <h2 className="mb-4 text-2xl font-bold md:text-4xl">
                        Join the Flowspark Community
                    </h2>
                    <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-500 sm:text-base md:mb-10 lg:mb-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                        purus sit amet luctus venenatis, lectus magna fringilla urna
                    </p>
                    <div className="mx-auto mb-4 flex max-w-lg justify-center">
                        <form
                            name="email-form"
                            method="get"
                            className="flex w-full flex-col gap-3 sm:flex-row"
                        >
                            <Input
                                type="email"
                                placeholder="Enter your email"
                            />
                            <Button
                                type="submit"
                                className="cursor-pointer rounded-md bg-[#1D1655] hover:bg-[#1D1655]/80 px-6 py-2 font-semibold text-white"
                            >Notify me</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter