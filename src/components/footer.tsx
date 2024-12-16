// /src/components/footer.tsx
'use client'

import Link from 'next/link'
import { MotionWrapper } from './motion-wrapper'

const footerLinks = {
    quickLinks: [
        { name: 'Home', href: '/' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    ],
    team: [
        { name: 'Mohit', href: '/mohit' },
        { name: 'Badal', href: '/badal' },
        { name: 'Priyanshu', href: '/priyanshu' },
    ],
    socials: [
        { name: 'Instagram', href: 'https://www.instagram.com/menofculture.69', target: '_blank' },
        { name: 'Discord', href: 'https://discord.gg/GAnTMVurm4', target: '_blank' },
        { name: 'Snapchat', href: 'https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB', target: '_blank' },
        { name: 'YouTube', href: 'https://www.youtube.com/@menofculturepodcast', target: '_blank' },
    ]
}

export function Footer() {
    return (
        <MotionWrapper>
            <footer className="bg-[#0d1117] py-12 sm:py-16 border-t px-8 border-white/10">
                <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-8 sm:gap-12">
                        {/* Mobile Brand Section */}
                        <div className="md:hidden">
                            <div className="flex items-center mb-4">
                                <span className="text-2xl sm:text-3xl text-[#FFC857]" style={{ fontFamily: 'Bangers' }}>
                                    MEN OF CULTURE
                                </span>
                            </div>
                            <p className="text-sm sm:text-base text-gray-400">
                                Where comedy meets culture, and entertainment knows no bounds
                            </p>
                        </div>

                        {/* Links Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
                            {/* Desktop Brand Column */}
                            <div className="hidden md:block col-span-1">
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl lg:text-4xl text-[#FFC857]" style={{ fontFamily: 'Bangers' }}>
                                        MEN OF CULTURE
                                    </span>
                                </div>
                                <p className="text-base text-gray-400">
                                    Where comedy meets culture, and entertainment knows no bounds
                                </p>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                                <ul className="space-y-3">
                                    {footerLinks.quickLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-sm sm:text-base text-[#ffc757] hover:text-[#FFAA00] transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Team */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Team</h3>
                                <ul className="space-y-3">
                                    {footerLinks.team.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-sm sm:text-base text-[#ffc757] hover:text-[#FFAA00] transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Socials */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Socials</h3>
                                <ul className="space-y-3">
                                    {footerLinks.socials.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                target={link.target}
                                                className="text-sm sm:text-base text-[#ffc757] hover:text-[#FFAA00] transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-white/10 mt-12 pt-8">
                        <p className="text-sm text-gray-400 text-center">
                            © {new Date().getFullYear()} Men of Culture. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </MotionWrapper>
    );
}