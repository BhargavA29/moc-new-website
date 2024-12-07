// /src/components/join-section.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MotionWrapper } from './motion-wrapper'

// Helper function to get the appropriate deep link
function getDeepLink(platform: string, url: string) {
    // Check if running on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator?.userAgent || '');

    if (!isMobile) return url;

    switch (platform) {
        case 'youtube':
            // Extract channel ID or video ID from URL
            const channelId = 'menofculture';
            return {
                android: `intent://www.youtube.com/@${channelId}#Intent;package=com.google.android.youtube;scheme=https;end`,
                ios: `youtube://www.youtube.com/@${channelId}`
            };
        case 'discord':
            // Extract server ID from URL
            const serverId = 'GAnTMVurm4';
            return {
                android: `intent://discord.com/invite/${serverId}#Intent;package=com.discord;scheme=https;end`,
                ios: `discord://discord.com/invite/${serverId}`
            };
        case 'snapchat':
            const username = 'menofculture24';
            return {
                android: `intent://add/${username}#Intent;package=com.snapchat.android;scheme=snapchat;end`,
                ios: `snapchat://add/${username}`
            };
        default:
            return url;
    }
}

export function JoinSection() {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, platform: string, url: string) => {
        e.preventDefault();

        const deepLink = getDeepLink(platform, url);

        if (typeof deepLink === 'string') {
            window.location.href = deepLink;
            return;
        }

        // Try to open app first, then fallback to web URL
        const isIOS = /iPad|iPhone|iPod/.test(navigator?.userAgent || '');
        window.location.href = isIOS ? deepLink.ios : deepLink.android;

        // Fallback to web URL after a short delay if app doesn't open
        setTimeout(() => {
            window.location.href = url;
        }, 1000);
    };

    return (
        <section className="p-[4vh] md:p-[8vh] px-[4vw] md:px-[8vw] bg-[#0d1117]">
            {/* Desktop View */}
            <div className="hidden md:block mx-auto px-[3vw]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[6vh]">
                    {/* Left Section */}
                    <MotionWrapper delay={0.1}>
                        <div className="space-y-[2vh] md:my-[6vh]">
                            <h2 className="text-[6vw] md:text-center lg:text-left md:text-[2.7vw] font-bold">Join the party</h2>
                            <p className="text-[4vw] text-left md:text-[1.2vw] text-gray-300">
                                Explore our engaging content on YouTube and connect with our
                                vibrant community on Discord. <br className='hidden md:block' /> Join us today!
                            </p>
                            <div className="space-y-[2vh]">
                                <Link
                                    href="https://www.youtube.com/@menofculture"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-[1vw] text-[4vw] w-fit"
                                >
                                    <div className="flex items-center gap-[1vw] hover:scale-105 transition-transform duration-200">
                                        <div className="hidden md:block rounded-full p-[1vh]">
                                            <Image
                                                src="https://img.icons8.com/?size=100&id=37325&format=png&color=FFFFFF"
                                                alt="YouTube"
                                                width={0}
                                                height={0}
                                                style={{ width: '3vw', height: '3vw' }}
                                                unoptimized
                                            />
                                        </div>
                                        <div className="block md:hidden rounded-full p-[1vh]">
                                            <Image
                                                src="https://img.icons8.com/?size=100&id=37325&format=png&color=FFFFFF"
                                                alt="YouTube"
                                                width={0}
                                                height={0}
                                                style={{ width: '5vw', height: '5vw' }}
                                                unoptimized
                                            />
                                        </div>
                                        <span className="text-[#FFA500] text-[3.5vw] md:text-[1.5vw]">YouTube</span>
                                        <svg className="w-[2vw] h-[2vw] text-[#FFA500]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </Link>
                                <Link
                                    href="https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-[1vw] text-[4vw] w-fit"
                                >
                                    <div className="flex items-center gap-[1vw] hover:scale-105 transition-transform duration-200">
                                        <div className="hidden md:block rounded-full p-[1vh]">
                                            <Image
                                                src="https://img.icons8.com/?size=100&id=23029&format=png&color=FFFFFF"
                                                alt="Snapchat"
                                                width={0}
                                                height={0}
                                                style={{ width: '3vw', height: '3vw' }}
                                                unoptimized
                                            />
                                        </div>
                                        <div className="block md:hidden rounded-full p-[1vh]">
                                            <Image
                                                src="https://img.icons8.com/?size=100&id=23029&format=png&color=FFFFFF"
                                                alt="Snapchat"
                                                width={0}
                                                height={0}
                                                style={{ width: '5vw', height: '5vw' }}
                                                unoptimized
                                            />
                                        </div>
                                        <span className="text-[#FFA500] text-[3.5vw] md:text-[1.5vw]">Snapchat</span>
                                        <svg className="w-[2vw] h-[2vw] text-[#FFA500]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </Link>
                                <Link
                                    href="https://discord.gg/GAnTMVurm4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-[1vw] text-[4vw] w-fit"
                                >
                                    <div className="flex items-center gap-[1vw] hover:scale-105 transition-transform duration-200">
                                        <div className="hidden md:block rounded-full p-[1vh]">
                                            <Image
                                                src="https://img.icons8.com/?size=100&id=25627&format=png&color=FFFFFF"
                                                alt="Discord"
                                                width={0}
                                                height={0}
                                                style={{ width: '3vw', height: '3vw' }}
                                                unoptimized
                                            />
                                        </div>
                                        <div className="block md:hidden rounded-full p-[1vh]">
                                            <Image
                                                src="https://img.icons8.com/?size=100&id=25627&format=png&color=FFFFFF"
                                                alt="Discord"
                                                width={0}
                                                height={0}
                                                style={{ width: '5vw', height: '5vw' }}
                                                unoptimized
                                            />
                                        </div>
                                        <span className="text-[#FFA500] text-[3.5vw] md:text-[1.5vw]">Discord</span>
                                        <svg className="w-[2vw] h-[2vw] text-[#FFA500]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </MotionWrapper>

                    {/* Right Section */}
                    <MotionWrapper delay={0.2}>
                        <div className="space-y-[2vh] bg-zinc-800/50 rounded-[2vh] p-[3vh] md:px-[4vh] md:py-[4vh]  md:mt-[2vh]">
                            <h2 className="text-[6vw] md:text-[2.7vw] font-bold">Connect</h2>
                            <p className="text-[4vw] md:text-[1.2vw] text-gray-300">
                                Explore our engaging content on YouTube and connect with our
                                vibrant community on Discord. <br className='hidden md:block' /> Join us today!
                            </p>
                            <div className="pt-[2vh]">
                                <Link
                                    href="mailto:contact@menofculture.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-[1vw] text-[4vw] w-fit"
                                >
                                    <div className="flex items-center gap-[1vw] hover:scale-105 transition-transform duration-200">
                                        <div className='block md:hidden'>
                                            <Image
                                                src="https://img.icons8.com/?size=100&id=rUgzXdXFnhmg&format=png&color=FFFFFF"
                                                alt="Email"
                                                width={0}
                                                height={0}
                                                style={{ width: '5vw', height: '5vw' }}
                                                unoptimized
                                            />
                                        </div>
                                        <div className='hidden md:block'>
                                            <Image
                                                src="https://img.icons8.com/?size=100&id=rUgzXdXFnhmg&format=png&color=FFFFFF"
                                                alt="Email"
                                                width={0}
                                                height={0}
                                                style={{ width: '3vw', height: '3vw' }}
                                                unoptimized
                                            />
                                        </div>
                                        <span className="text-[#FFA500] text-[3.5vw] md:text-[1.5vw]">Email us</span>
                                        <svg className="w-[2vw] h-[2vw] text-[#FFA500]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden px-2">
                <h2 className="text-2xl font-black text-[#FFC857] mb-[4vh] font-inter">JOIN THE PARTY</h2>

                <div className="flex flex-col gap-[2vh]">
                    <Link
                        href="https://www.youtube.com/@menofculture"
                        onClick={(e) => handleClick(e, 'youtube', 'https://www.youtube.com/@menofculture')}
                        className="w-full bg-[#FF0000] rounded-lg p-5 flex flex-col justify-between min-h-[120px]"
                    >
                        <div>
                            <Image
                                src="https://img.icons8.com/?size=100&id=37325&format=png&color=FFFFFF"
                                alt="YouTube"
                                width={28}
                                height={28}
                                unoptimized
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-white text-xl font-inter font-bold">Men of Culture</span>
                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </div>
                    </Link>

                    <Link
                        href="https://discord.gg/GAnTMVurm4"
                        onClick={(e) => handleClick(e, 'discord', 'https://discord.gg/GAnTMVurm4')}
                        className="w-full bg-[#5865F2] rounded-lg p-5 flex flex-col justify-between min-h-[120px]"
                    >
                        <div>
                            <Image
                                src="https://img.icons8.com/?size=100&id=25627&format=png&color=FFFFFF"
                                alt="Discord"
                                width={28}
                                height={28}
                                unoptimized
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-white text-xl font-inter font-bold">Men of Culture</span>
                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </div>
                    </Link>

                    <Link
                        href="https://www.snapchat.com/add/menofculture24"
                        onClick={(e) => handleClick(e, 'snapchat', 'https://www.snapchat.com/add/menofculture24')}
                        className="w-full bg-[#F7E300] rounded-lg p-5 flex flex-col justify-between min-h-[120px]"
                    >
                        <div>
                            <Image
                                src="https://img.icons8.com/?size=100&id=23029&format=png&color=000000"
                                alt="Snapchat"
                                width={28}
                                height={28}
                                unoptimized
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-black text-xl font-inter font-bold">Men of Culture</span>
                            <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </div>
                    </Link>

                    <div className="mt-4 bg-zinc-800/50 rounded-lg p-5">
                        <h3 className="text-xl font-bold text-white mb-2">Connect</h3>
                        <p className="text-gray-400 text-sm mb-3">
                            Explore our engaging content on YouTube and connect with our
                            vibrant community on Discord. Join us today!
                        </p>
                        <Link
                            href="mailto:contact@menofculture.com"
                            className="flex items-center gap-2 text-[#FFC857]"
                        >
                            <span className="font-medium">Email us</span>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
