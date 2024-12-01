import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Honk } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const honk = Honk({
    subsets: ["latin"],
    variable: "--font-honk",
    weight: "400",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Men of Culture",
    description: "Official Website of Men of Culture",
    icons: {
        icon: '/media/logo.png',
        apple: '/media/logo.png',
        shortcut: '/media/logo.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${honk.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
