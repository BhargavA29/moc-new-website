
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us | Men of Culture',
    description: 'Contact Us',
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#0d1117] overflow-hidden">
            <Navbar />
            <div className="container mx-auto px-4 py-16 md:py-24">
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-[#FFC857] text-center mb-16"
                >
                    Contact Us
                </motion.h1>
                <ContactForm />
                <ContactInfo />
            </div>
            <Footer />
        </main>
    );
} 