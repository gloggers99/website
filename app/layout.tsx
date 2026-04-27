import type { Metadata } from "next";
import {Open_Sans, Playfair} from "next/font/google";
import "./globals.css";
import React from "react";

const playfair = Playfair({
    variable: "--font-playfair",
    subsets: ["latin"]
})

const openSans = Open_Sans({
    variable: "--font-opensans",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Lucas' Personal Website",
    description: "The home of Lucas Marta's cool stuff!",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${playfair.variable} ${openSans.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
