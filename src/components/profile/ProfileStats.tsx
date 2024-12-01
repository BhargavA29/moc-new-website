'use client';

import { useEffect, useState } from 'react';
import { useCountAnimation } from '@/hooks/useCountAnimation';
import { useInView } from 'react-intersection-observer';
import { TvMinimalPlay, Eye, Youtube } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
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

    const { ref: sectionRef, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2
    });

    // Function to format numbers to K, M, B with better precision
    const formatNumber = (num: number): { value: number; suffix: string } => {
        if (num >= 1e9) {
            return { value: parseFloat((num / 1e9).toFixed(2)), suffix: 'B' };
        }
        if (num >= 1e6) {
            return { value: parseFloat((num / 1e6).toFixed(2)), suffix: 'M' };
        }
        if (num >= 1e3) {
            return { value: parseFloat((num / 1e3).toFixed(2)), suffix: 'K' };
        }
        return { value: num, suffix: '' };
    };

    const hoursOfContent = Math.ceil((stats.videoCount * 15) / 60);
    const hours = useCountAnimation(hoursOfContent, 2000, inView);

    // Format view count
    const formattedViews = formatNumber(stats.viewCount);
    const views = useCountAnimation(formattedViews.value, 2000, inView);

    // Format subscriber count
    const formattedSubs = formatNumber(stats.subscriberCount);
    const subscribers = useCountAnimation(formattedSubs.value, 2000, inView);

    useEffect(() => {
        async function fetchChannelStats() {
            try {
                const cacheKey = `youtubeStats_${channelId}`;
                const cachedStats = sessionStorage.getItem(cacheKey);

                if (cachedStats) {
                    setStats(JSON.parse(cachedStats));
                    return;
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

                sessionStorage.setItem(cacheKey, JSON.stringify(formattedStats));
                setStats(formattedStats);
            } catch (error) {
                const cacheKey = `youtubeStats_${channelId}`;
                const cachedStats = sessionStorage.getItem(cacheKey);
                if (cachedStats) {
                    setStats(JSON.parse(cachedStats));
                }
                console.error('Error fetching YouTube stats:', error);
            }
        }

        fetchChannelStats();
    }, [channelId]);

    return (
        <section ref={sectionRef} className="relative py-16 md:py-32 px-1 md:px-16 bg-[#0d1117] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2736] to-[#0d1117]" aria-hidden="true" />

            <div className="container mx-auto px-4 md:px-16 relative z-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-6xl font-bold text-white">
                        Milestones
                    </h2>
                </motion.div>

                <div className="grid grid-cols-3 gap-2 md:gap-8 max-w-4xl mx-auto">
                    {/* Hours of Content */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex"
                    >
                        <Card className="bg-black/20 border-white/10 w-full">
                            <CardContent className="p-4 md:p-8 flex flex-col items-center justify-between h-[140px] md:h-[300px]">
                                <div className="bg-[#FFC857]/10 p-3 md:p-6 rounded-full">
                                    <TvMinimalPlay className="w-6 h-6 md:w-12 md:h-12 text-[#FFC857]" />
                                </div>
                                <div className="text-center">
                                    <span className="text-2xl md:text-[64px] font-bold text-[#FFC857]">
                                        {hours}+
                                    </span>
                                    <p className="text-sm md:text-2xl text-[#A1A1AA]">
                                        hours of content
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Views */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex"
                    >
                        <Card className="bg-black/20 border-white/10 w-full">
                            <CardContent className="p-4 md:p-8 flex flex-col items-center justify-between h-[140px] md:h-[300px]">
                                <div className="bg-[#FFC857]/10 p-3 md:p-6 rounded-full">
                                    <Eye className="w-6 h-6 md:w-12 md:h-12 text-[#FFC857]" />
                                </div>
                                <div className="text-center">
                                    <span className="text-2xl md:text-[64px] font-bold text-[#FFC857]">
                                        {views.toFixed(1)}{formattedViews.suffix}
                                    </span>
                                    <p className="text-sm md:text-2xl text-[#A1A1AA]">
                                        content views
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Subscribers */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex"
                    >
                        <Card className="bg-black/20 border-white/10 w-full">
                            <CardContent className="p-4 md:p-8 flex flex-col items-center justify-between h-[140px] md:h-[300px]">
                                <div className="bg-[#FFC857]/10 p-3 md:p-6 rounded-full">
                                    <Youtube className="w-6 h-6 md:w-12 md:h-12 text-[#FFC857]" />
                                </div>
                                <div className="text-center">
                                    <span className="text-2xl md:text-[64px] font-bold text-[#FFC857]">
                                        {subscribers.toFixed(2)}{formattedSubs.suffix}
                                    </span>
                                    <p className="text-sm md:text-2xl text-[#A1A1AA]">
                                        subscribers
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 