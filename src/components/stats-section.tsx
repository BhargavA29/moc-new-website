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

    /*    const formatNumber = (num: number): string => {
            if (num >= 1e9) return (num / 1e9).toFixed(1) + 'bn';
            if (num >= 1e6) return (num / 1e6).toFixed(1) + 'mn';
            if (num >= 1e3) return (num / 1e3).toFixed(1) + 'k';
            return num.toString();
        };
    */
    return (
        <section ref={sectionRef} className="relative py-[8vh] md:pt-[4vh] md:pb-[20vh] px-[4vw] md:px-0 bg-[#0d1117]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2736] to-[#0d1117]" aria-hidden="true" />

            <div className="mx-auto px-[2vw] md:px-[8vw] relative z-10">
                <div className="mb-[8vh]"> {/* Reduced margin */}
                    <h2 className="text-[6vw] md:text-[4vw]  font-bold text-white"> {/* Reduced font size */}
                        Our numbers do the talking
                    </h2>
                    <p className="text-[#A1A1AA] px-[1vw] mt-[1vh] text-[3.5vw] md:text-[1.3vw]">*Combined stats of all three channels.</p>
                </div>

                <div className="grid grid-cols-2 gap-[4vh] md:gap-[4vh] max-w-[80vw] md:max-w-[50vw] mx-auto"> {/* Reduced max-width and gap */}
                    {/* Hours of Content */}
                    <div className="text-center">
                        <div className="flex flex-col items-center space-y-[1.5vh]"> {/* Reduced spacing */}
                            <div className="bg-[#FFC857]/10 p-[1.5vh] rounded-full"> {/* Reduced padding */}
                                <TvMinimalPlay className="w-[6vw] h-[6vw] md:w-[3vw] md:h-[3vw] text-[#FFC857]" /> {/* Reduced icon size */}
                            </div>
                            <span className="text-[8vw] md:text-[3vw] font-bold text-[#FFC857]"> {/* Reduced font size */}
                                {hours}+
                            </span>
                            <span className="text-[#A1A1AA] text-[3.5vw] md:text-[1vw]">hours of content</span>
                        </div>
                    </div>

                    {/* Views */}
                    <div className="text-center">
                        <div className="flex flex-col items-center space-y-[1.5vh]">
                            <div className="bg-[#FFC857]/10 p-[1.5vh] rounded-full">
                                <Eye className="w-[6vw] h-[6vw] md:w-[3vw] md:h-[3vw] text-[#FFC857]" />
                            </div>
                            <div className="flex items-baseline justify-center">
                                <span className="text-[8vw] md:text-[3vw] font-bold text-[#FFC857]">
                                    {views.toFixed(1)}
                                </span>
                                <span className="text-[8vw] md:text-[3vw] font-bold text-[#FFC857] ml-[1vw]">M</span>
                            </div>
                            <span className="text-[#A1A1AA] text-[3.5vw] md:text-[1vw]">content views</span>
                        </div>
                    </div>

                    {/* Subscribers */}
                    <div className="text-center">
                        <div className="flex flex-col items-center space-y-[1.5vh]">
                            <div className="bg-[#FFC857]/10 p-[1.5vh] rounded-full">
                                <Youtube className="w-[6vw] h-[6vw] md:w-[3vw] md:h-[3vw] text-[#FFC857]" />
                            </div>
                            <div className="flex items-baseline justify-center">
                                <span className="text-[8vw] md:text-[3vw] font-bold text-[#FFC857]">
                                    {subscribers.toFixed(1)}
                                </span>
                                <span className="text-[8vw] md:text-[3vw] font-bold text-[#FFC857] ml-[1vw]">K</span>
                            </div>
                            <span className="text-[#A1A1AA] text-[3.5vw] md:text-[1vw]">subscribers</span>
                        </div>
                    </div>

                    {/* Community */}
                    <div className="text-center">
                        <div className="flex flex-col items-center space-y-[1.5vh]">
                            <div className="bg-[#FFC857]/10 p-[1.5vh] rounded-full">
                                <Users className="w-[6vw] h-[6vw] md:w-[3vw] md:h-[3vw] text-[#FFC857]" />
                            </div>
                            <div className="flex items-baseline justify-center">
                                <span className="text-[8vw] md:text-[3vw] font-bold text-[#FFC857]">
                                    {community}
                                </span>
                                <span className="text-[8vw] md:text-[3vw] font-bold text-[#FFC857] ml-[1vw]">K+</span>
                            </div>
                            <span className="text-[#A1A1AA] text-[3.5vw] md:text-[1vw]">active community</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}