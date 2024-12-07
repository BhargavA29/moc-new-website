'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigationItems = [
    { name: 'BADAL', href: '/badal' },
    { name: 'MOHIT', href: '/mohit' },
    { name: 'PRIYANSHU', href: '/priyanshu' },
    { name: 'CONTACT', href: '/contact' },
];

export function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const isActive = (path: string) => {
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && pathname.startsWith(path)) return true;
        return false;
    };

    const NavbarContent = () => (
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[2000px]">
            <nav className="flex items-center justify-between h-16 md:h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-[#FFC857]" style={{ fontFamily: 'Bangers' }}>
                        MEN OF CULTURE
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-base font-inter font-semibold lg:text-lg transition-all duration-300 ease-in-out relative group ${isActive(item.href)
                                ? 'text-[#55799C]'
                                : 'text-[#E5E7EB] hover:text-[#55799C] hover:scale-105'
                                }`}
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
                            className="md:hidden text-white hover:text-white/90"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[90%] max-w-md bg-zinc-950/90 backdrop-blur-sm border-white/10">
                        <DialogClose className="absolute right-4 top-4">
                            <X className="h-6 w-6 text-white" />
                            <span className="sr-only">Close</span>
                        </DialogClose>
                        <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
                        <nav className="flex flex-col gap-4 py-6">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-lg sm:text-xl px-4 py-2 rounded-full transition-all duration-300 ease-in-out
                                        text-center
                                        ${isActive(item.href)
                                            ? 'text-black bg-[#FFC857] font-medium scale-105'
                                            : 'text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </DialogContent>
                </Dialog>
            </nav>
        </div>
    );

    return (
        <header className={`fixed top-0 w-full ${isScrolled ? 'bg-[#0D1117]' : 'bg-black/50'} 
            backdrop-blur-sm z-50 border-b border-[#2C3E50] transition-colors duration-300`}>
            <NavbarContent />
        </header>
    );
}