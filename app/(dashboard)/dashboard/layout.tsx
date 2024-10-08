import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function DashboardLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <>
            {children}
            {modal}
        </>
    );
}
