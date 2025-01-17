"use client"

import * as React from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MonitorPlay, Clock } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const courses = [
    {
        title: "Innovating with Data",
        description: "Understand the human behavior behind the data",
        image: "https://assets.lummi.ai/assets/QmTAfuAtiaFZpZwT1uK1tZ7GchbqVtpuUqyUsKU9snYwTm?auto=format&w=1500"
    },
    {
        title: "Creative Thinking for Complex Problem Solving",
        description: "Tap into the power of imagination to tackle complex problems",
        image: "https://assets.lummi.ai/assets/QmXYQ4ez2DpCcvvNoqzVz7zAUSF6cCENEW7SiUcx4Q15wB?auto=format&w=1500"
    },
    {
        title: "Activating Strategy",
        description: "Human-centered approaches for bringing strategy to life",
        image: "https://assets.lummi.ai/assets/QmRhytCxhHnDh59hCJ8rZvSYWLRkuZs4Vv7infVK77ji9F?auto=format&w=1500"
    }
]

export default function BlogComponent() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Starts Soon</h2>
            <p className="text-lg text-center font-serif  mb-8">
                Upcoming courses and certificate programs
            </p>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className=" mx-auto max-w-6xl">
                    {courses.map((course, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 ">
                                <Card className="h-full min-w-36 h- overflow-clip rounded-lg flex flex-col">
                                    <CardHeader className="p-0">
                                        <div className="relative">
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className="w-full h-[200px] object-cover"
                                            />
                                            <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                                                STARTING SOON
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-4 flex-grow flex flex-col">
                                        <h2 className="text-xl h-[60px] font-bold mb-2">{course.title}</h2>
                                        <p className="text-muted-foreground mb-4 text-sm font-serif text-stone-800 h-[40px] flex-grow">{course.description}</p>
                                        <div className="flex text-xs flex-col gap-4 text-stone-800 text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <MonitorPlay size={16} />
                                                <span>COHORT COURSE</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock size={16} />
                                                <span>5 WEEKS</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="mt-auto">
                                        <Button className="w-full bg-[#E5F4F2] text-black">LEARN MORE</Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}