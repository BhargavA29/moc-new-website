"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface ProfileLayoutProps {
    children: React.ReactNode;
}

export function ProfileLayout({ children }: ProfileLayoutProps) {
    return (
        <main className="min-h-screen bg-[#0d1117]">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
} 