// /src/components/footer.tsx
'use client'

import Link from 'next/link'
import { MotionWrapper } from './motion-wrapper'

const footerLinks = {
    quickLinks: [
        { name: 'About', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
    ],
    team: [
        { name: 'Careers', href: '#' },
        { name: 'News', href: '#' },
    ],
    socials: [
        { name: 'Instagram', href: 'https://www.instagram.com/menofculture.69', target: '_blank' },
        { name: 'Discord', href: 'https://discord.gg/GAnTMVurm4', target: '_blank' },
        { name: 'Snapchat', href: 'https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB', target: '_blank' },
    ]
}

export function Footer() {
    return (
        <MotionWrapper>
            <footer className="bg-[#0d1117] py-[4vh] md:py-[8vh] border-t border-white/10 px-[6vw] md:px-[8vw]">
                <div className="mx-auto">
                    <div className="flex flex-col gap-[4vh]">
                        <div className="w-full block md:hidden">
                            <div className="flex items-center gap-[1vw] mb-[2vh]">
                                <span className="text-[6vw] md:text-[2vw] text-[#FFC857]" style={{ fontFamily: 'Bangers' }}>
                                    MEN OF CULTURE
                                </span>
                            </div>
                            <p className="text-gray-400 text-[3vw] md:text-[1vw]">
                                Where comedy meets culture, and entertainment knows no bounds
                            </p>
                        </div>

                        {/* Links Section - Row layout on mobile */}
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-[4vw] md:gap-[4vw]">
                            {/* Brand Column - Full width on mobile */}
                            <div className="w-full hidden md:block">
                                <div className="flex items-center gap-[1vw] mb-[2vh]">
                                    <span className="text-[6vw] md:text-[2vw] text-[#FFC857]" style={{ fontFamily: 'Bangers' }}>
                                        MEN OF CULTURE
                                    </span>
                                </div>
                                <p className="text-gray-400 text-[3vw] md:text-[1vw]">
                                    Where comedy meets culture, and entertainment knows no bounds
                                </p>
                            </div>
                            {/* Quick Links */}
                            <div>
                                <h3 className="text-[3.5vw] md:text-[1.5vw] font-semibold text-white mb-[1vh]">Quick Links</h3>
                                <ul className="space-y-[1vh]">
                                    {footerLinks.quickLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-[3vw] md:text-[1vw] text-[#ffc757] hover:text-[#FFAA00] transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Team */}
                            <div>
                                <h3 className="text-[3.5vw] md:text-[1.5vw] font-semibold text-white mb-[1vh]">Team</h3>
                                <ul className="space-y-[1vh]">
                                    {footerLinks.team.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-[3vw] md:text-[1vw] text-[#ffc757] hover:text-[#FFAA00] transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Socials */}
                            <div>
                                <h3 className="text-[3.5vw] md:text-[1.5vw] font-semibold text-white mb-[1vh]">Socials</h3>
                                <ul className="space-y-[1vh]">
                                    {footerLinks.socials.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                target={link.target}
                                                className="text-[3vw] md:text-[1vw] text-[#ffc757] hover:text-[#FFAA00] transition-colors"
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
                    <div className="border-t border-white/10 mt-[4vh] pt-[2vh]">
                        <p className="text-gray-400 text-[2.5vw] md:text-[0.9vw] text-center">
                            © {new Date().getFullYear()} Men of Culture. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </MotionWrapper>
    );
}