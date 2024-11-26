'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

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

                    {/* Navigation Links - Hidden on mobile */}
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

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        className="md:hidden"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </Button>
                </nav>
            </div>
        </header>
    );
}