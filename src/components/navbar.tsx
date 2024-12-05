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
        <div className="mx-auto pl-[4vw] pr-[2vw] md:px-[5vw]">
            <nav className="flex items-center justify-between h-[8vh]">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-[1vw]">
                    <span className="text-[5vw] md:text-[2vw] text-[#FFC857]" style={{ fontFamily: 'Bangers' }}>MEN OF CULTURE</span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-[3vw]">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-[1vw] transition-all duration-300 ease-in-out relative group ${isActive(item.href)
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
                            className="md:hidden text-white hover:text-white/90 transition-colors duration-200"
                        >
                            <Menu className="h-[3vh] w-[3vh]" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[80vw] sm:w-[50vw] bg-zinc-950/90 backdrop-blur-sm border-white/10">
                        <DialogClose className="absolute right-[2vw] top-[2vh] rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none">
                            <X className="h-[3vh] w-[3vh] text-white" />
                            <span className="sr-only">Close</span>
                        </DialogClose>
                        <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
                        <nav className="flex flex-col gap-[2vh] text-center py-[2vh]">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-[4vw] px-[2vw] py-[1vh] rounded-full transition-all duration-300 ease-in-out mx-[2vw] 
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
        <header className={`fixed top-0 w-full ${isScrolled ? 'bg-[#0D1117]' : 'bg-black/50'
            } backdrop-blur-sm z-50 border-b border-[#2C3E50] transition-colors duration-300`}>
            <NavbarContent />
        </header>
    );
}