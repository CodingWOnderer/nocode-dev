import InteractiveBanner from "@/components/alert-banner";
import Footer from "@/components/footer";
import Footer2 from "@/components/footer2";
import { HeaderDemo } from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Capcons Sage",
    description: "Capcons Sage is an Ai Blogging platform byt Capcons.INC",
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-full  ">
            <HeaderDemo variant={"default"} sticky />
            {children}
            <Footer2 />
        </main>
    );
}
