"use client";

import { motion } from "framer-motion";
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
            case 'youtube': return 'bg-[#FF0000]';
            case 'twitter': return 'bg-[#5865F2]';
            case 'instagram': return 'bg-[#E4405F]';
            default: return '';
        }
    };

    const getPlatformIcon = (platform: string): string => {
        switch (platform) {
            case 'youtube':
                return "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg";
            case 'twitter':
                return "https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg";
            case 'instagram':
                return "https://www.pngplay.com/wp-content/uploads/12/Instagram-Logo-No-Background.png";
            default: return '';
        }
    };

    const getIconSize = (platform: string): { width: number; height: number } => {
        switch (platform) {
            case 'youtube': return { width: 100, height: 40 };
            case 'instagram': return { width: 140, height: 40 };
            case 'twitter': return { width: 40, height: 40 };
            default: return { width: 40, height: 40 };
        }
    };

    return (
        <section className="py-12 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-16">
                <motion.div
                    className="mb-8 md:mb-16 px-4 md:px-2 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white/80 mb-3 md:mb-4 font-inter">
                        Follow the Channels
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-inter">
                        PJ runs three channels where he talks about sdjhba kjb. Connect and be a part of the culture.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 px-8 md:px-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {links.map((link, index) => {
                        const initialX = index === 0 ? -100 : index === 2 ? 100 : 0;
                        const initialY = index === 1 ? 100 : 0;

                        const { width, height } = getIconSize(link.platform);

                        return (
                            <motion.div
                                key={link.platform}
                                initial={{ x: initialX, y: initialY, opacity: 0 }}
                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                            >
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${getPlatformStyle(link.platform)} rounded-xl md:rounded-2xl p-6 md:p-8 relative group transition-all duration-300 min-h-[160px] md:min-h-[200px] flex flex-col justify-between `}
                                >
                                    <div className="absolute top-4 md:top-6 left-4 md:left-6 flex items-center gap-2">
                                        <Image
                                            src={getPlatformIcon(link.platform)}
                                            alt={`${link.platform} icon`}
                                            width={width}
                                            height={height}
                                            className="object-contain"
                                        />
                                        {link.platform === 'twitter' && (
                                            <span className="text-white text-base md:text-lg font-inter">
                                                X / Twitter
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex justify-between items-end mt-auto">
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
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
export default SocialLinks;
