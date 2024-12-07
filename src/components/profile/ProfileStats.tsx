'use client';

import { useEffect, useState } from 'react';
import { useCountAnimation } from '@/hooks/useCountAnimation';
import { useInView } from 'react-intersection-observer';
import { TvMinimalPlay, Eye, Youtube, Instagram } from 'lucide-react';
import { motion } from "framer-motion";

interface ChannelStats {
    subscriberCount: number;
    viewCount: number;
    videoCount: number;
}

interface ProfileStatsProps {
    channelId: string;
}


export function ProfileStats({ channelId }: ProfileStatsProps) {
    const [stats, setStats] = useState<ChannelStats>({
        subscriberCount: 0,
        viewCount: 0,
        videoCount: 0,
    });

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const formatNumber = (num: number): { value: number; suffix: string } => {
        if (num >= 1e9) return { value: parseFloat((num / 1e9).toFixed(2)), suffix: 'B' };
        if (num >= 1e6) return { value: parseFloat((num / 1e6).toFixed(2)), suffix: 'M' };
        if (num >= 1e3) return { value: parseFloat((num / 1e3).toFixed(2)), suffix: 'K' };
        return { value: num, suffix: '' };
    };

    const hoursOfContent = Math.ceil((stats.videoCount * 15) / 60);
    const hours = useCountAnimation(hoursOfContent, 2000, inView);

    const formattedViews = formatNumber(stats.viewCount);
    const views = useCountAnimation(formattedViews.value, 2000, inView);

    const formattedSubs = formatNumber(stats.subscriberCount);
    const subscribers = useCountAnimation(formattedSubs.value, 2000, inView);

    useEffect(() => {
        async function fetchChannelStats() {
            try {
                const cacheKey = `youtubeStats_${channelId}`;
                const now = new Date().getTime();

                // Check cache and its expiry
                const cachedData = localStorage.getItem(cacheKey);
                if (cachedData) {
                    const { data, expiry } = JSON.parse(cachedData);
                    if (now < expiry) {
                        setStats(data);
                        return;
                    }
                }

                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
                );

                if (!response.ok) {
                    throw new Error('YouTube API request failed');
                }

                const data = await response.json();
                const channelStats = data.items[0].statistics;

                const formattedStats = {
                    subscriberCount: parseInt(channelStats.subscriberCount),
                    viewCount: parseInt(channelStats.viewCount),
                    videoCount: parseInt(channelStats.videoCount),
                };

                // Cache the data with 1-day expiry
                const cacheData = {
                    data: formattedStats,
                    expiry: now + (24 * 60 * 60 * 1000) // 24 hours
                };
                localStorage.setItem(cacheKey, JSON.stringify(cacheData));
                setStats(formattedStats);
            } catch (error) {
                console.error('Error fetching YouTube stats:', error);
                // Try to use cached data even if expired in case of error
                const cachedData = localStorage.getItem(`youtubeStats_${channelId}`);
                if (cachedData) {
                    const { data } = JSON.parse(cachedData);
                    setStats(data);
                }
            }
        }

        fetchChannelStats();
    }, [channelId]);

    return (
        <section ref={ref} className="relative py-12 sm:py-16 bg-[#0d1117] overflow-hidden max-w-[2000px] mx-auto">
            {/* Desktop View */}
            <div className="hidden md:block">
                <motion.div
                    className="mx-auto px-[8vw] relative z-10"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-[8vh]">
                        <h2 className="text-[4vw] font-bold text-white">
                            Milestones
                        </h2>
                    </div>

                    <div className="grid grid-cols-3 gap-[4vh] max-w-[80vw] mx-auto">
                        {/* Hours of Content */}
                        <div className="bg-[#161C26] rounded-lg p-8">
                            <div className="flex flex-col items-center space-y-[2vh]">
                                <div className="bg-[#FFC857]/10 p-4 rounded-full">
                                    <TvMinimalPlay className="w-[3vw] h-[3vw] text-[#FFC857]" />
                                </div>
                                <span className="text-[3vw] font-bold text-[#FFC857]">
                                    {hours}+
                                </span>
                                <span className="text-[#A1A1AA] text-[1vw]">
                                    hours of content
                                </span>
                            </div>
                        </div>

                        {/* Views */}
                        <div className="bg-[#161C26] rounded-lg p-8">
                            <div className="flex flex-col items-center space-y-[2vh]">
                                <div className="bg-[#FFC857]/10 p-4 rounded-full">
                                    <Eye className="w-[3vw] h-[3vw] text-[#FFC857]" />
                                </div>
                                <div className="flex items-baseline justify-center">
                                    <span className="text-[3vw] font-bold text-[#FFC857]">
                                        {views}{formattedViews.suffix}
                                    </span>
                                </div>
                                <span className="text-[#A1A1AA] text-[1vw]">
                                    content views
                                </span>
                            </div>
                        </div>

                        {/* Subscribers */}
                        <div className="bg-[#161C26] rounded-lg p-8">
                            <div className="flex flex-col items-center space-y-[2vh]">
                                <div className="bg-[#FFC857]/10 p-4 rounded-full">
                                    <Youtube className="w-[3vw] h-[3vw] text-[#FFC857]" />
                                </div>
                                <div className="flex items-baseline justify-center">
                                    <span className="text-[3vw] font-bold text-[#FFC857]">
                                        {subscribers}{formattedSubs.suffix}
                                    </span>
                                </div>
                                <span className="text-[#A1A1AA] text-[1vw]">
                                    subscribers
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden  bg-background: linear-gradient(180deg, rgba(13, 17, 23, 0) 0%, #2A3B4C 100%);
 px-6 py-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-[#FFC857] text-2xl font-black font-inter mb-6">
                        OUR NUMBERS DO THE TALKING...
                    </h2>

                    <div className="flex flex-col space-y-4">
                        {/* Hours of Content */}
                        <div className="bg-[#161C26] rounded-lg p-4 flex items-center">
                            <div className="bg-[#161C26] p-2 rounded-full">
                                <TvMinimalPlay className="w-6 h-6 text-[#FFC857]" />
                            </div>
                            <div className="ml-4">
                                <span className="text-white text-2xl font-black font-inter">
                                    {hours}
                                </span>
                                <p className="text-[#A1A1AA] text-sm font-semibold font-inter">
                                    hours of content
                                </p>
                            </div>
                        </div>

                        {/* Views */}
                        <div className="bg-[#161C26] rounded-lg p-4 flex items-center">
                            <div className="bg-[#161C26] p-2 rounded-full">
                                <Eye className="w-6 h-6 text-[#FFC857]" />
                            </div>
                            <div className="ml-4">
                                <span className="text-white text-2xl font-black font-inter">
                                    {views} {formattedViews.suffix}
                                </span>
                                <p className="text-[#A1A1AA] text-sm font-semibold font-inter">
                                    content views
                                </p>
                            </div>
                        </div>

                        {/* Subscribers */}
                        <div className="bg-[#161C26] rounded-lg p-4 flex items-center">
                            <div className="bg-[#161C26] p-2 rounded-full">
                                <Youtube className="w-6 h-6 text-[#FFC857]" />
                            </div>
                            <div className="ml-4">
                                <span className="text-white text-2xl font-black font-inter">
                                    {subscribers} {formattedSubs.suffix}
                                </span>
                                <p className="text-[#A1A1AA] text-sm font-semibold font-inter">
                                    subscribers
                                </p>
                            </div>
                        </div>

                        {/* Active Community - Static Value */}
                        <div className="bg-[#161C26] rounded-lg p-4 flex items-center">
                            <div className="bg-[#161C26] p-2 rounded-full">
                                <Instagram className="w-6 h-6 text-[#FFC857]" />
                            </div>
                            <div className="ml-4">
                                <span className="text-white text-2xl font-black font-inter">
                                    633K+
                                </span>
                                <p className="text-[#A1A1AA] text-sm font-semibold font-inter">
                                    Instagram Followers
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 