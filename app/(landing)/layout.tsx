import Footer from "@/components/footer";
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
            <HeaderDemo variant={"centered"} sticky />
            {children}
            <Footer />
        </main>
    );
}
