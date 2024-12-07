'use client';
import { useEffect, useState, useMemo } from 'react';
import { useCountAnimation } from '../hooks/useCountAnimation';
import { useInView } from 'react-intersection-observer';
import { TvMinimalPlay, Eye, Youtube, Instagram } from 'lucide-react';

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

    const formatNumber = (num: number): { value: number; suffix: string } => {
        if (num >= 1e9) return { value: parseFloat((num / 1e9).toFixed(2)), suffix: 'B' };
        if (num >= 1e6) return { value: parseFloat((num / 1e6).toFixed(2)), suffix: 'M' };
        if (num >= 1e3) return { value: parseFloat((num / 1e3).toFixed(2)), suffix: 'K' };
        return { value: num, suffix: '' };
    };

    const hoursOfContent = Math.ceil((totalStats.videoCount * 15) / 60);
    const formattedViews = formatNumber(totalStats.viewCount);
    const formattedSubs = formatNumber(totalStats.subscriberCount);

    const hours = useCountAnimation(hoursOfContent, 2000, inView);
    const views = useCountAnimation(Math.floor(totalStats.viewCount / 1e6), 2000, inView);
    const subscribers = useCountAnimation(Math.floor(totalStats.subscriberCount / 1e3), 2000, inView);


    useEffect(() => {
        async function fetchChannelStats() {
            try {
                const cachedStats = localStorage.getItem('youtubeStats');
                const cacheTimestamp = localStorage.getItem('youtubeStatsTimestamp');

                if (cachedStats && cacheTimestamp) {
                    const isExpired = Date.now() - parseInt(cacheTimestamp) > 24 * 60 * 60 * 1000; // 24 hours
                    if (!isExpired) {
                        setTotalStats(JSON.parse(cachedStats));
                        return;
                    }
                }

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

                localStorage.setItem('youtubeStats', JSON.stringify(combinedStats));
                localStorage.setItem('youtubeStatsTimestamp', Date.now().toString());

                setTotalStats(combinedStats);
            } catch (error) {
                const cachedStats = localStorage.getItem('youtubeStats');
                if (cachedStats) {
                    setTotalStats(JSON.parse(cachedStats));
                }
                console.error('Error fetching YouTube stats:', error);
            }
        }

        fetchChannelStats();
    }, [channels]);

    return (
        <section ref={sectionRef} className="relative py-[4vh] md:pt-[4vh] md:pb-[20vh] px-0 md:px-0 bg-[#0d1117]">
            {/* Desktop View */}
            <div className="hidden md:block">
                <div className="mx-auto px-[2vw] md:px-[8vw] relative z-10">
                    <div className="mb-[8vh]">
                        <h2 className="text-[6vw] md:text-[4vw] font-bold text-white">
                            Our numbers do the talking
                        </h2>
                        <p className="text-[#A1A1AA] px-[1vw] mt-[1vh] text-[3.5vw] md:text-[1.3vw]">
                            *Combined stats of all three channels.
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-[4vh] md:gap-[4vh] max-w-[90vw] md:max-w-[80vw] mx-auto">
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
                                        {views.toFixed(1)}{formattedViews.suffix}
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
                                        {subscribers.toFixed(1)}{formattedSubs.suffix}
                                    </span>
                                </div>
                                <span className="text-[#A1A1AA] text-[1vw]">
                                    subscribers
                                </span>
                            </div>
                        </div>

                        {/* Instagram Followers */}
                        <div className="bg-[#161C26] rounded-lg p-8">
                            <div className="flex flex-col items-center space-y-[2vh]">
                                <div className="bg-[#FFC857]/10 p-4 rounded-full">
                                    <Instagram className="w-[3vw] h-[3vw] text-[#FFC857]" />
                                </div>
                                <div className="flex items-baseline justify-center">
                                    <span className="text-[3vw] font-bold text-[#FFC857]">
                                        44K+
                                    </span>
                                </div>
                                <span className="text-[#A1A1AA] text-[1vw]">
                                    Instagram followers
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden background: linear-gradient(180deg, rgba(13, 17, 23, 0) 0%, #2A3B4C 100%);
 px-6 py-8">
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
                                {hours}+
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
                                {views.toFixed(1)}{formattedViews.suffix}
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
                                {subscribers.toFixed(1)}{formattedSubs.suffix}
                            </span>
                            <p className="text-[#A1A1AA] text-sm font-semibold font-inter">
                                subscribers
                            </p>
                        </div>
                    </div>

                    {/* Instagram Followers - Static Value */}
                    <div className="bg-[#161C26] rounded-lg p-4 flex items-center">
                        <div className="bg-[#161C26] p-2 rounded-full">
                            <Instagram className="w-6 h-6 text-[#FFC857]" />
                        </div>
                        <div className="ml-4">
                            <span className="text-white text-2xl font-black font-inter">
                                44K+
                            </span>
                            <p className="text-[#A1A1AA] text-sm font-semibold font-inter">
                                Instagram followers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}