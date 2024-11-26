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
                        />
                        <span className="font-bold text-xl">Men Of Culture</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-6">
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
                </nav>
            </div>
        </header>
    );
}