'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Menu } from 'lucide-react';

export function Navbar() {
    return (
        <header className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50 border-b border-white/10">
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
                        {['Badal', 'Mohit', 'Priyanshu'].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="text-sm text-gray-300 hover:text-white transition-colors"
                            >
                                {item}
                            </Link>
                        ))}

                        <Button
                            variant="secondary"
                            className="ml-4"
                        >
                            Contact Us
                        </Button>
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
                            <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
                            <nav className="flex flex-col gap-4 text-center">
                                {['Badal', 'Mohit', 'Priyanshu'].map((item) => (
                                    <Link
                                        key={item}
                                        href="#"
                                        className="text-lg text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
                                    >
                                        {item}
                                    </Link>
                                ))}
                                <Button
                                    variant="secondary"
                                    className="mt-4 w-full"
                                >
                                    Contact Us
                                </Button>
                            </nav>
                        </DialogContent>
                    </Dialog>
                </nav>
            </div>
        </header>
    );
}