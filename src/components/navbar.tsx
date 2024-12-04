'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Badal', href: '/badal' },
    { name: 'Mohit', href: '/mohit' },
    { name: 'Priyanshu', href: '/priyanshu' },
    { name: 'Contact', href: '/contact' },
];

export function Navbar() {
    const pathname = usePathname();
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        // Check if this is the first visit
        const hasVisited = localStorage.getItem('hasVisited');
        const isHomePage = pathname === '/';
        
        if (!hasVisited && isHomePage) {
            setShouldAnimate(true);
            localStorage.setItem('hasVisited', 'true');
        } else {
            setShouldAnimate(false);
        }
    }, [pathname]);

    const isActive = (path: string) => {
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && pathname.startsWith(path)) return true;
        return false;
    };

    const NavbarContent = () => (
        <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl md:text-3xl text-[#FFC857]" style={{ fontFamily: 'Bangers' }}>MEN OF CULTURE</span>
                </Link>

                {/* Desktop Navigation Links - Simple Highlight with Smooth Hover */}
                <div className="hidden md:flex items-center gap-6">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm transition-all duration-300 ease-in-out relative group ${isActive(item.href)
                                ? 'text-[#FFC857]'
                                : 'text-gray-300 hover:text-white'
                                }`}
                        >
                            {item.name}
                            <span
                                className={`absolute -bottom-1 left-0 w-full h-[2px] transition-all duration-300 ease-in-out transform origin-left ${isActive(item.href)
                                    ? 'bg-[#FFC857] scale-x-100'
                                    : 'bg-white/30 scale-x-0 group-hover:scale-x-100'
                                    }`}
                            />
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu - Pill Style with Smooth Transitions */}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-white hover:text-white/90 transition-colors duration-200"
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
                        <nav className="flex flex-col gap-3 text-center py-4">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-lg px-4 py-2 rounded-full transition-all duration-300 ease-in-out mx-4 
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

    if (shouldAnimate) {
        return (
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50 border-b border-white/10"
            >
                <NavbarContent />
            </motion.header>
        );
    }

    return (
        <header className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50 border-b border-white/10">
            <NavbarContent />
        </header>
    );
}