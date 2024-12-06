"use client";

import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { MotionWrapper } from "@/components/motion-wrapper";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#0d1117]  overflow-hidden">
            <Navbar />
            <div className="container mx-auto px-16 md:px-auto py-16 md:py-24">
                <MotionWrapper>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#FFC857] text-center mt-4 mb-8">
                        Contact Us
                    </h1>
                </MotionWrapper>

                <MotionWrapper delay={0.1}>
                    <ContactForm />
                </MotionWrapper>

                <MotionWrapper delay={0.2}>
                    <ContactInfo />
                </MotionWrapper>
            </div>
            <Footer />
        </main>
    );
} 