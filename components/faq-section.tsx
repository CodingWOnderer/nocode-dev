"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function FAQ() {
    const [openItems, setOpenItems] = useState<number[]>([])

    const faqItems = [
        {
            question: "What is a typical course schedule and structure?",
            answer: "Our courses typically run for 8-12 weeks, with weekly live sessions and self-paced assignments. The structure includes lectures, hands-on projects, and peer collaboration."
        },
        {
            question: "How do certificate programs work?",
            answer: "Certificate programs consist of a series of courses in a specific field. Upon completion of all required courses and projects, you'll receive a certificate of achievement."
        },
        {
            question: "Can I take multiple cohort courses at the same time?",
            answer: "While it's possible, we recommend focusing on one course at a time to ensure you can fully engage with the material and your cohort."
        },
        {
            question: "Does my time zone matter?",
            answer: "We offer courses in various time zones. When enrolling, you can choose a cohort that best fits your schedule."
        },
        {
            question: "Which course best suits me?",
            answer: "The best course depends on your goals and experience level. We offer a free consultation to help you choose the right course for your needs."
        },
        {
            question: "Can I enroll my team?",
            answer: "Yes, we offer team enrollment options. Contact our sales team for more information on group discounts and custom training programs."
        },
        {
            question: "Are there any discounts?",
            answer: "We offer early bird discounts, referral bonuses, and occasional promotional offers. Sign up for our newsletter to stay informed about upcoming discounts."
        },
        {
            question: "How do I purchase my course?",
            answer: "You can purchase courses directly through our website. Simply select your desired course, choose your cohort, and proceed to checkout."
        }
    ]

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        )
    }

    return (
        <div className="w-full max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqItems.map((item, index) => (
                    <Collapsible
                        key={index}
                        open={openItems.includes(index)}
                        onOpenChange={() => toggleItem(index)}
                    >
                        <div className="border-b border-gray-200 py-4">
                            <CollapsibleTrigger className="w-full flex justify-between items-center text-left text-lg font-medium">
                                {item.question}
                                {openItems.includes(index) ? (
                                    <Minus className="flex-shrink-0 h-5 w-5" />
                                ) : (
                                    <Plus className="flex-shrink-0 h-5 w-5" />
                                )}
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pt-4">
                                <p className="text-gray-600">{item.answer}</p>
                            </CollapsibleContent>
                        </div>
                    </Collapsible>
                ))}
            </div>
        </div>
    )
}