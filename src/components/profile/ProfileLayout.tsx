"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Inter } from "next/font/google";

interface ProfileLayoutProps {
    children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] })

export function ProfileLayout({ children }: ProfileLayoutProps) {
    return (
        <main className={`min-h-screen overflow-hidden bg-[#0d1117]  mx-auto ${inter.className}`}>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
} 