'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navigationItems = [
    { name: 'Badal', href: '/badal' },
    { name: 'Mohit', href: '/mohit' },
    { name: 'Priyanshu', href: '/priyanshu' },
    { name: 'Contact', href: '/contact' },
];

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50 border-b border-white/10"
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/media/logo.png"
                            alt="MoC Logo"
                            width={40}
                            height={40}
                            className="w-8 h-8 md:w-10 md:h-10"
                        />
                        <span className="honk-brand text-xl md:text-3xl">MEN OF CULTURE</span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm text-gray-300 hover:text-white transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="w-[300px] sm:w-[400px] bg-zinc-950/90 backdrop-blur-sm border-white/10">
                            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none">
                                <X className="h-6 w-6 text-white" />
                                <span className="sr-only">Close</span>
                            </DialogClose>
                            <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
                            <nav className="flex flex-col gap-4 text-center">
                                {navigationItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-lg text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </DialogContent>
                    </Dialog>
                </nav>
            </div>
        </motion.header>
    );
}