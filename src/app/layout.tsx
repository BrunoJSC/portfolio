import React from "react";

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {Header} from "@/components/header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Bruno de Jesus",
    description: "portfolio developer",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Header/>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
