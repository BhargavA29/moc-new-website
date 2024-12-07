"use client";

import { motion } from "framer-motion";
import { Youtube, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SocialLink {
    platform: 'youtube' | 'instagram' | 'twitter';
    url: string;
    name: string;
}

interface SocialLinksProps {
    links: SocialLink[];
}

function getDeepLink(platform: string, url: string) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator?.userAgent || '');

    if (!isMobile) return url;

    switch (platform) {
        case 'youtube':
            const channelId = 'menofculture';
            return {
                android: `intent://www.youtube.com/@${channelId}#Intent;package=com.google.android.youtube;scheme=https;end`,
                ios: `youtube://www.youtube.com/@${channelId}`
            };
        case 'instagram':
            const username = 'menofculture';
            return {
                android: `intent://instagram.com/_u/${username}#Intent;package=com.instagram.android;scheme=https;end`,
                ios: `instagram://user?username=${username}`
            };
        case 'twitter':
            const twitterUsername = 'menofculture';
            return {
                android: `intent://twitter.com/${twitterUsername}#Intent;package=com.twitter.android;scheme=https;end`,
                ios: `twitter://user?screen_name=${twitterUsername}`
            };
        default:
            return url;
    }
}

function getPlatformStyle(platform: string) {
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
}

function getPlatformIcon(platform: string) {
    switch (platform) {
        case 'youtube':
            return <Youtube className="w-7 h-7 text-white" strokeWidth={1.5} />;
        case 'instagram':
            return <Instagram className="w-7 h-7 text-white" strokeWidth={1.5} />;
        case 'twitter':
            return (
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg"
                    alt="X logo"
                    width={28}
                    height={28}
                    className="object-contain"
                />
            );
        default:
            return null;
    }
}

export function SocialLinks({ links }: SocialLinksProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, platform: string, url: string) => {
        e.preventDefault();

        const deepLink = getDeepLink(platform, url);

        if (typeof deepLink === 'string') {
            window.location.href = deepLink;
            return;
        }

        const isIOS = /iPad|iPhone|iPod/.test(navigator?.userAgent || '');
        window.location.href = isIOS ? deepLink.ios : deepLink.android;

        setTimeout(() => {
            window.location.href = url;
        }, 1000);
    };

    // Desktop View
    const desktopView = (
        <div className="hidden md:block mx-auto px-[4vw]">
            <motion.div className="mb-[4vh] text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/80 mb-[2vh] font-inter">
                    Follow our Socials
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-white/60 font-inter">
                    Connect and be a part of the culture.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2vw] max-w-[1400px] mx-auto">
                {links.map((link, index) => (
                    <motion.div
                        key={link.platform}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                    >
                        <Link
                            href={link.url}
                            onClick={(e) => handleClick(e, link.platform, link.url)}
                            className={`${getPlatformStyle(link.platform)} 
                                rounded-xl p-[3vh] 
                                relative group transition-all duration-300 
                                min-h-[180px] md:min-h-[220px] 
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
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );

    // Mobile View
    const mobileView = (
        <div className="block md:hidden px-2">
            <motion.div className="mb-[4vh] text-left">
                <h2 className="text-[8vw] font-black text-[#FFC857] mb-[2vh] font-inter">
                    Follow our Socials
                </h2>
                <p className="text-lg text-white/60 font-inter">
                    Connect and be a part of the culture.
                </p>
            </motion.div>

            <div className="flex flex-col gap-[2vh]">
                {links.map((link) => {
                    let bgColor = '';
                    const textColor = 'text-white';
                    let icon = null;

                    switch (link.platform) {
                        case 'youtube':
                            bgColor = 'bg-[#FF0000]';
                            icon = <Youtube className="w-7 h-7 text-white" strokeWidth={1.5} />;
                            break;
                        case 'instagram':
                            bgColor = 'relative overflow-hidden';
                            icon = <Instagram className="w-7 h-7 text-white" strokeWidth={1.5} />;
                            break;
                        case 'twitter':
                            bgColor = 'bg-black';
                            icon = (
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg"
                                    alt="X logo"
                                    width={28}
                                    height={28}
                                    className="object-contain"
                                />
                            );
                            break;
                    }

                    return (
                        <Link
                            key={link.platform}
                            href={link.url}
                            onClick={(e) => handleClick(e, link.platform, link.url)}
                            className={`w-full ${bgColor} rounded-lg p-5 flex flex-col justify-between min-h-[120px] relative`}
                        >
                            {link.platform === 'instagram' && (
                                <Image
                                    src="/media/content-grid/instagram-gradient.png"
                                    alt="Instagram gradient"
                                    fill
                                    className="object-cover rounded-lg"
                                    priority
                                />
                            )}

                            <div className="relative z-10">
                                {icon}
                            </div>

                            <div className="flex items-center justify-between relative z-10">
                                <span className={`text-xl font-bold ${textColor} font-inter`}>
                                    {link.name}
                                </span>
                                <svg
                                    className={`w-5 h-5 ${textColor}`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 17L17 7M17 7H7M17 7V17"
                                    />
                                </svg>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );

    return (
        <section className="py-[8vh] px-[4vw] overflow-hidden max-w-[2000px] mx-auto">
            {desktopView}
            {mobileView}
        </section>
    );
}
