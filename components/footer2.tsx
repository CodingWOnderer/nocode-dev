import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Footer2() {
    return (
        <footer className="bg-[#1D1655] text-white py-12 px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 text-xs md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="font-bold mb-4">ONLINE LEARNING</h2>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:underline">Courses</Link></li>
                            <li><Link href="#" className="hover:underline">Certificates</Link></li>
                            <li><Link href="#" className="hover:underline">Teams</Link></li>
                            <li><Link href="#" className="hover:underline">Calendar</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold mb-4">RESOURCES</h2>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:underline">Blog</Link></li>
                            <li><Link href="#" className="hover:underline">Podcast</Link></li>
                            <li><Link href="#" className="hover:underline">Design Thinking Overview</Link></li>
                            <li><Link href="#" className="hover:underline">Design Thinking Resources</Link></li>
                            <li><Link href="#" className="hover:underline">Brainstorming Overview</Link></li>
                            <li><Link href="#" className="hover:underline">Brainstorming Resources</Link></li>
                            <li><Link href="#" className="hover:underline">Innovation Overview</Link></li>
                            <li><Link href="#" className="hover:underline">Innovation Resources</Link></li>
                            <li><Link href="#" className="hover:underline">Collaboration</Link></li>
                            <li><Link href="#" className="hover:underline">Collaboration Resources</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold mb-4">COMPANY</h2>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:underline">Learning Experience</Link></li>
                            <li><Link href="#" className="hover:underline">Our Story</Link></li>
                            <li><Link href="#" className="hover:underline">Our Instructors</Link></li>
                            <li><Link href="#" className="hover:underline">Learner Stories</Link></li>
                            <li><Link href="#" className="hover:underline">Refer a Friend</Link></li>
                            <li><Link href="#" className="hover:underline">Financial Assistance Program</Link></li>
                            <li><Link href="#" className="hover:underline">FAQ</Link></li>
                            <li><Link href="#" className="hover:underline">Careers</Link></li>
                            <li><Link href="#" className="hover:underline">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="md:text-right">
                        <h2 className="text-3xl font-bold mb-4">BlogSpark</h2>
                        <div className="flex justify-start md:justify-end space-x-4">
                            <Link href="#" className="hover:text-gray-300"><Twitter className="w-6 h-6" /></Link>
                            <Link href="#" className="hover:text-gray-300"><Facebook className="w-6 h-6" /></Link>
                            <Link href="#" className="hover:text-gray-300"><Linkedin className="w-6 h-6" /></Link>
                            <Link href="#" className="hover:text-gray-300"><Instagram className="w-6 h-6" /></Link>
                            <Link href="#" className="hover:text-gray-300"><Youtube className="w-6 h-6" /></Link>
                            <Link href="#" className="hover:text-gray-300">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-700 text-xs">
                    <ul className="flex flex-wrap justify-center md:justify-start space-x-6">
                        <li><Link href="#" className="hover:underline">Privacy</Link></li>
                        <li><Link href="#" className="hover:underline">Do Not Sell My Information</Link></li>
                        <li><Link href="#" className="hover:underline">CA User Rights</Link></li>
                        <li><Link href="#" className="hover:underline">Terms & Refund Policy</Link></li>
                    </ul>
                    <p className="mt-4 text-center md:text-left">&copy; 2024 BlogSpark U</p>
                </div>
            </div>
        </footer>
    )
}