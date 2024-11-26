// /src/components/footer.tsx
import Link from 'next/link'
import Image from 'next/image'

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
        { name: 'Instagram', href: '#' },
        { name: 'Discord', href: '#' },
    ],
}

export function Footer() {
    return (
        <footer className="bg-[#0d1117] py-16 border-t border-white/10 px-16 text-xl">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-12">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="honk-brand text-5xl">MEN OF CULTURE</span>
                        </div>
                        <p className="text-gray-400">
                            Where comedy meets <br />
                            culture, and entertainment <br />
                            knows no bounds
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[#1E90FF] hover:text-[#291eff] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Team */}
                    <div>
                        <h3 className="font-bold mb-4">Team</h3>
                        <ul className="space-y-2">
                            {footerLinks.team.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[#1E90FF] hover:text-[#291eff] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="font-bold mb-4">Socials</h3>
                        <ul className="space-y-2">
                            {footerLinks.socials.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[#1E90FF] hover:text-[#291eff] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8">
                    <p className="text-gray-400 text-sm text-center">
                        © {new Date().getFullYear()} Men of Culture. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}