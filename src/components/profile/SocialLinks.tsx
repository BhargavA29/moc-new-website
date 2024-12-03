"use client";

import { motion } from "framer-motion";
import { Youtube, Instagram } from "lucide-react";
import Image from "next/image";

interface SocialLink {
    platform: 'youtube' | 'instagram' | 'twitter';
    url: string;
    name: string;
}

interface SocialLinksProps {
    links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
    const getPlatformStyle = (platform: string): string => {
        switch (platform) {
            case 'youtube': 
                return 'bg-[#FF0000]';
            case 'instagram': 
                return 'relative overflow-hidden';
            case 'twitter': 
                return 'bg-black';
            default: 
                return '';
        }
    };

    const getPlatformIcon = (platform: string) => {
        switch (platform) {
            case 'youtube':
                return <Youtube className="w-8 h-8 text-white" strokeWidth={1.5} />;
            case 'instagram':
                return <Instagram className="w-8 h-8 text-white" strokeWidth={1.5} />;
            case 'twitter':
                return (
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg"
                        alt="X logo"
                        width={32}
                        height={32}
                        className="object-contain"
                    />
                );
            default:
                return null;
        }
    };

    return (
        <section className="py-12 md:py-32 px-4 md:px-16 overflow-hidden">
            <div className="container mx-auto px-4 md:px-16">
                <motion.div
                    className="mb-8 md:mb-16 px-4 md:px-2 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white/80 mb-3 md:mb-4 font-inter">
                        Follow our Socials
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-inter">
                        Connect and be a part of the culture.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 px-8 md:px-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {links.map((link, index) => (
                        <motion.div
                            key={link.platform}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                        >
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${getPlatformStyle(link.platform)} 
                                    rounded-xl md:rounded-2xl p-6 md:p-8 
                                    relative group transition-all duration-300 
                                    min-h-[160px] md:min-h-[200px] 
                                    flex flex-col justify-between 
                                    hover:scale-[1.02]`}
                            >
                                {link.platform === 'instagram' && (
                                    <Image
                                        src="/media/content-grid/instagram-gradient.png"
                                        alt="Instagram gradient"
                                        fill
                                        className="object-cover rounded-xl md:rounded-2xl"
                                        priority
                                    />
                                )}
                                
                                <div className="absolute top-4 md:top-6 left-4 md:left-6 z-10">
                                    {getPlatformIcon(link.platform)}
                                </div>

                                <div className="flex justify-between items-end mt-auto relative z-10">
                                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-inter">
                                        {link.name}
                                    </span>
                                    <svg
                                        className="w-5 h-5 md:w-6 md:h-6 text-white transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 17L17 7M17 7H7M17 7V17"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
