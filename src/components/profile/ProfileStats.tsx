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
        <section ref={ref} className="relative py-[8vh] md:py-[16vh] px-[4vw] md:px-[8vw] bg-[#0d1117] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2736] to-[#0d1117]" aria-hidden="true" />

            <motion.div
                className="container mx-auto px-[4vw] relative z-10"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div className="text-center mb-[6vh]">
                    <h2 className="text-[6vw] md:text-[4vw] font-bold text-white">
                        Milestones
                    </h2>
                </motion.div>

                <div className="grid grid-cols-3 gap-[2vw] md:gap-[4vw] max-w-[90vw] md:max-w-[80vw] mx-auto">
                    {/* Hours of Content Card */}
                    <Card className="bg-black/20 border-white/10">
                        <CardContent className="p-[2vh] md:p-[4vh] flex flex-col items-center justify-between h-[20vh] md:h-[35vh]">
                            <div className="bg-[#FFC857]/10 p-[1.5vh] md:p-[2vh] rounded-full">
                                <TvMinimalPlay className="w-[6vw] h-[6vw] md:w-[3vw] md:h-[3vw] text-[#FFC857]" />
                            </div>
                            <div className="text-center">
                                <span className="text-[5vw] md:text-[3vw] font-bold text-[#FFC857]">
                                    {hours}+
                                </span>
                                <p className="text-[2vw] md:text-[1.5vw] text-[#A1A1AA]">
                                    hours of content
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Views Card */}
                    <Card className="bg-black/20 border-white/10">
                        <CardContent className="p-[2vh] md:p-[4vh] flex flex-col items-center justify-between h-[20vh] md:h-[35vh]">
                            <div className="bg-[#FFC857]/10 p-[1.5vh] md:p-[2vh] rounded-full">
                                <Eye className="w-[6vw] h-[6vw] md:w-[3vw] md:h-[3vw] text-[#FFC857]" />
                            </div>
                            <div className="text-center">
                                <span className="text-[5vw] md:text-[3vw] font-bold text-[#FFC857]">
                                    {views.toFixed(1)}{formattedViews.suffix}
                                </span>
                                <p className="text-[2vw] md:text-[1.5vw] text-[#A1A1AA]">
                                    content views
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Subscribers Card */}
                    <Card className="bg-black/20 border-white/10">
                        <CardContent className="p-[2vh] md:p-[4vh] flex flex-col items-center justify-between h-[20vh] md:h-[35vh]">
                            <div className="bg-[#FFC857]/10 p-[1.5vh] md:p-[2vh] rounded-full">
                                <Youtube className="w-[6vw] h-[6vw] md:w-[3vw] md:h-[3vw] text-[#FFC857]" />
                            </div>
                            <div className="text-center">
                                <span className="text-[5vw] md:text-[3vw] font-bold text-[#FFC857]">
                                    {subscribers.toFixed(2)}{formattedSubs.suffix}
                                </span>
                                <p className="text-[2vw] md:text-[1.5vw] text-[#A1A1AA]">
                                    subscribers
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </motion.div>
        </section>
    );
} 