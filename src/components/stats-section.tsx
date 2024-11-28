'use client';
import { useEffect, useState, useMemo } from 'react';
import { useCountAnimation } from '../hooks/useCountAnimation';
import { useInView } from 'react-intersection-observer';
import { TvMinimalPlay, Eye, Youtube, Users } from 'lucide-react';

interface ChannelStats {
    subscriberCount: number;
    viewCount: number;
    videoCount: number;
}

export function StatsSection() {
    const [totalStats, setTotalStats] = useState<ChannelStats>({
        subscriberCount: 0,
        viewCount: 0,
        videoCount: 0,
    });

    const channels = useMemo(() => [
        'UC9CROGyC9hgIB1mnBuMpeoQ', // menofculturepodcast
        'UCQwh4aoymaFf4gXv7MSxpMw', // MenofCultureUltra
        'UCtD0WGExA3sz6AIRd8zF5Rg'  // menofculturehighlights
    ], []);

    const { ref: sectionRef, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2
    });

    const hoursOfContent = Math.ceil((totalStats.videoCount * 15) / 60); // Assuming average video length of 15 minutes

    const hours = useCountAnimation(hoursOfContent, 2000, inView);
    const views = useCountAnimation(Math.floor(totalStats.viewCount / 1e6), 2000, inView);
    const subscribers = useCountAnimation(Math.floor(totalStats.subscriberCount / 1e3), 2000, inView);
    const community = useCountAnimation(25, 2000, inView);

    useEffect(() => {
        async function fetchChannelStats() {
            try {
                // Try to get cached data first
                const cachedStats = localStorage.getItem('youtubeStats');
                const cacheTimestamp = localStorage.getItem('youtubeStatsTimestamp');

                // Check if we have valid cached data (less than 6 hours old)
                if (cachedStats && cacheTimestamp) {
                    const isExpired = Date.now() - parseInt(cacheTimestamp) > 6 * 60 * 60 * 1000; // 6 hours
                    if (!isExpired) {
                        setTotalStats(JSON.parse(cachedStats));
                        return;
                    }
                }

                // If no cache or expired, fetch new data
                const responses = await Promise.all(
                    channels.map(async channelId => {
                        const response = await fetch(
                            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
                        );
                        if (!response.ok) {
                            throw new Error('YouTube API request failed');
                        }
                        return response.json();
                    })
                );

                const combinedStats = responses.reduce((acc, response) => {
                    const stats = response.items?.[0]?.statistics;
                    if (stats) {
                        acc.subscriberCount += parseInt(stats.subscriberCount);
                        acc.viewCount += parseInt(stats.viewCount);
                        acc.videoCount += parseInt(stats.videoCount);
                    }
                    return acc;
                }, {
                    subscriberCount: 0,
                    viewCount: 0,
                    videoCount: 0,
                });

                // Cache the new data
                localStorage.setItem('youtubeStats', JSON.stringify(combinedStats));
                localStorage.setItem('youtubeStatsTimestamp', Date.now().toString());

                setTotalStats(combinedStats);
            } catch (error) {
                // If API fails, try to use cached data even if expired
                const cachedStats = localStorage.getItem('youtubeStats');
                if (cachedStats) {
                    setTotalStats(JSON.parse(cachedStats));
                }
                console.error('Error fetching YouTube stats:', error);
            }
        }

        fetchChannelStats();
    }, [channels]);

    /*    const formatNumber = (num: number): string => {
            if (num >= 1e9) return (num / 1e9).toFixed(1) + 'bn';
            if (num >= 1e6) return (num / 1e6).toFixed(1) + 'mn';
            if (num >= 1e3) return (num / 1e3).toFixed(1) + 'k';
            return num.toString();
        };
    */
    return (
        <section ref={sectionRef} className="relative py-16 md:py-32 px-8 md:px-16 bg-[#0d1117]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2736] to-[#0d1117]" aria-hidden="true" />

            <div className="container mx-auto px-4 md:px-16 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-6xl font-bold text-white">
                        Our numbers do the talking
                    </h2>
                    <p className="text-[#A1A1AA] mt-4 text-lg">*Combined stats of all three channels.</p>
                </div>

                <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
                    {/* Hours of Content */}
                    <div className="text-center">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="bg-[#FFC857]/10 p-4 rounded-full">
                                <TvMinimalPlay className="w-8 h-8 md:w-10 md:h-10 text-[#FFC857]" />
                            </div>
                            <span className="text-3xl sm:text-4xl md:text-[56px] font-bold text-[#FFC857]">
                                {hours}+
                            </span>
                            <span className="text-[#A1A1AA] text-lg sm:text-xl md:text-2xl">hours of content</span>
                        </div>
                    </div>

                    {/* Views */}
                    <div className="text-center">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="bg-[#FFC857]/10 p-4 rounded-full">
                                <Eye className="w-8 h-8 md:w-10 md:h-10 text-[#FFC857]" />
                            </div>
                            <div className="flex items-baseline justify-center">
                                <span className="text-3xl sm:text-4xl md:text-[56px] font-bold text-[#FFC857]">
                                    {views.toFixed(1)}
                                </span>
                                <span className="text-3xl sm:text-4xl md:text-[56px] font-bold text-[#FFC857] ml-2">M</span>
                            </div>
                            <span className="text-[#A1A1AA] text-lg sm:text-xl md:text-2xl">content views</span>
                        </div>
                    </div>

                    {/* Subscribers */}
                    <div className="text-center">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="bg-[#FFC857]/10 p-4 rounded-full">
                                <Youtube className="w-8 h-8 md:w-10 md:h-10 text-[#FFC857]" />
                            </div>
                            <div className="flex items-baseline justify-center">
                                <span className="text-3xl sm:text-4xl md:text-[56px] font-bold text-[#FFC857]">
                                    {subscribers.toFixed(1)}
                                </span>
                                <span className="text-3xl sm:text-4xl md:text-[56px] font-bold text-[#FFC857] ml-2">K</span>
                            </div>
                            <span className="text-[#A1A1AA] text-lg sm:text-xl md:text-2xl">subscribers</span>
                        </div>
                    </div>

                    {/* Community */}
                    <div className="text-center">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="bg-[#FFC857]/10 p-4 rounded-full">
                                <Users className="w-8 h-8 md:w-10 md:h-10 text-[#FFC857]" />
                            </div>
                            <div className="flex items-baseline justify-center">
                                <span className="text-3xl sm:text-4xl md:text-[56px] font-bold text-[#FFC857]">
                                    {community}
                                </span>
                                <span className="text-3xl sm:text-4xl md:text-[56px] font-bold text-[#FFC857] ml-2">k+</span>
                            </div>
                            <span className="text-[#A1A1AA] text-lg sm:text-xl md:text-2xl">active community</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 