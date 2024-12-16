/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/skeleton';

interface ChannelStats {
    subscriberCount: number;
    viewCount: number;
    videoCount: number;
}

function formatNumber(num: number): string {
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `${(num / 1e3).toFixed(2)}K`;
    return num.toString();
}

function StatsTable() {
    const [stats, setStats] = useState<ChannelStats>({
        subscriberCount: 0,
        viewCount: 0,
        videoCount: 0,
    });

    useEffect(() => {
        async function fetchChannelStats() {
            const channelId = 'UCUinnqDgIsNFleLdkZKbP-w';
            try {
                const cacheKey = `youtubeStats_${channelId}`;
                const now = new Date().getTime();

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

                if (!response.ok) throw new Error('YouTube API request failed');

                const data = await response.json();
                const channelStats = data.items[0].statistics;

                const formattedStats = {
                    subscriberCount: parseInt(channelStats.subscriberCount),
                    viewCount: parseInt(channelStats.viewCount),
                    videoCount: parseInt(channelStats.videoCount),
                };

                const cacheData = {
                    data: formattedStats,
                    expiry: now + (24 * 60 * 60 * 1000)
                };
                localStorage.setItem(cacheKey, JSON.stringify(cacheData));
                setStats(formattedStats);
            } catch (error) {
                console.error('Error fetching YouTube stats:', error);
                const cachedData = localStorage.getItem(`youtubeStats_${channelId}`);
                if (cachedData) {
                    const { data } = JSON.parse(cachedData);
                    setStats(data);
                }
            }
        }

        fetchChannelStats();
    }, []);

    return (
        <>
            <tr className="border-b border-white/10">
                <th className="text-white/60 text-left py-2">YouTube Stats</th>
                <td className="py-2">
                    <div className="space-y-1">
                        <div>Subscribers: {formatNumber(stats.subscriberCount)}</div>
                        <div>Total Views: {formatNumber(stats.viewCount)}</div>
                        <div>Total Videos: {stats.videoCount}</div>
                    </div>
                </td>
            </tr>
            <tr className="border-b border-white/10">
                <th className="text-white/60 text-left py-2">Instagram</th>
                <td className="py-2">239K+ Followers</td>
            </tr>
            <tr className="border-b border-white/10">
                <th className="text-white/60 text-left py-2">Twitter</th>
                <td className="py-2">73K+ Followers</td>
            </tr>
        </>
    );
}

export default function ProfilePage() {
    const [bannerLoaded, setBannerLoaded] = useState(false);
    const [profileLoaded, setProfileLoaded] = useState(false);

    return (
        <main className="min-h-screen bg-[#0d1117] text-white/90">
            <Navbar />
            {/* Banner Section */}
            <div className="pt-16">
                <div className="max-w-[1400px] mx-auto px-4">
                    <div className="relative h-[40vh] overflow-hidden">
                        {!bannerLoaded && (
                            <div className="absolute inset-0 bg-white/10" />
                        )}
                        <Image
                            src="/media/banner.jpg"
                            alt="Cover"
                            fill
                            className={`object-cover transition-opacity duration-300 ${bannerLoaded ? 'opacity-100' : 'opacity-0'}`}
                            priority
                            onLoadingComplete={() => setBannerLoaded(true)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1117]" />
                    </div>
                </div>
            </div>
            <div className="px-3 md:px-0">

                {/* Main Content */}
                <div className="max-w-[1400px] mx-auto px-4 py-8">
                    {/* Title - Centered on mobile */}
                    <h1 className="text-4xl text-[#FFC857] font-black mb-4 md:text-left text-center">BADAL YADAV</h1>

                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Info Box Sidebar - Moves below title on mobile */}
                        <div className="md:hidden w-full">
                            <div className="bg-white/5 rounded p-6">
                                <div className="text-center mb-4">
                                    <div className="relative w-[300px] h-[300px] mx-auto">
                                        {!profileLoaded && (
                                            <Skeleton className="absolute inset-0 rounded-full" />
                                        )}
                                        <Image
                                            src="/media/badal-pfp.jpg"
                                            alt="Badal"
                                            width={300}
                                            height={300}
                                            className={`rounded-full transition-opacity duration-300 ${profileLoaded ? 'opacity-100' : 'opacity-0'}`}
                                            onLoadingComplete={() => setProfileLoaded(true)}
                                        />
                                    </div>
                                    <p className="text-sm pt-2 text-white/60 text-[clamp(0.875rem,1.5vw,1rem)]">
                                        Content Creator | Storyteller | Entrepreneur
                                    </p>
                                </div>

                                {/* Info Table */}
                                <table className="w-full text-sm">
                                    <tbody>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Born</th>
                                            <td className="py-2">Mumbai, Raised in Kolhapur</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Channels</th>
                                            <td className="py-2">
                                                <a href="https://youtube.com/@BnfTV"
                                                    className="text-[#FFC857] hover:underline block">BnfTV ↗</a>
                                                <a href="https://youtube.com/@Animecloud9"
                                                    className="text-[#FFC857] hover:underline block">AnimeCloud ↗</a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Year Started</th>
                                            <td className="py-2">2016</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Social Media</th>
                                            <td className="py-2">
                                                <a href="https://www.instagram.com/badal_bnftv/"
                                                    className="text-[#FFC857] hover:underline block">Instagram ↗</a>
                                                <a href="https://x.com/badal_bnftv"
                                                    className="text-[#FFC857] hover:underline block">Twitter ↗</a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Associated with</th>
                                            <td className="py-2">
                                                <a href="https://www.youtube.com/@menofculturepodcast"
                                                    className="text-[#FFC857] hover:underline">Men of Culture ↗</a>
                                            </td>
                                        </tr>
                                        <StatsTable />
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-grow">
                            {/* Quick Description */}
                            <div className="bg-white/5 p-6 rounded mb-6">
                                <p className="text-lg mb-1">
                                    <span className="font-black">Badal</span> is an Indian Content Creator and founder of BnfTV.
                                    Starting as an accountant, he transformed his passion for storytelling into a full-time career
                                    and is now a co-host of the "Men of Culture" podcast.
                                </p>
                            </div>

                            {/* Contents Section */}
                            <div className="bg-white/5 p-6 rounded mb-8">
                                <h2 className="text-xl font-bold mb-3">Contents</h2>
                                <ul className="space-y-2">
                                    <li>1. <a href="#growing-up" className="text-[#FFC857]">Growing Up and Love for Movies</a></li>
                                    <li>2. <a href="#youtube-beginning" className="text-[#FFC857]">The Beginning of YouTube</a></li>
                                    <li>3. <a href="#balancing" className="text-[#FFC857]">Balancing YouTube and Education</a></li>
                                    <li>4. <a href="#men-of-culture" className="text-[#FFC857]">The Birth of "Men of Culture"</a></li>
                                    <li>5. <a href="#looking-ahead" className="text-[#FFC857]">Looking Ahead: Celebrating Cinema</a></li>
                                </ul>
                            </div>

                            {/* Growing Up */}
                            <section id="growing-up" className="mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">Growing Up and Love for Movies</h2>
                                <p className="text-white/80 leading-relaxed">
                                    Badal was born in Mumbai but spent most of his life in Kolhapur, where he completed his schooling.
                                    For him, movies were more than just entertainment—they provided an escape from reality and introduced
                                    him to characters and experiences he could never encounter in his daily life.
                                </p>
                            </section>

                            {/* Beginning of YouTube */}
                            <section id="youtube-beginning" className="mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">The Beginning of YouTube</h2>
                                <p className="text-white/80 leading-relaxed">
                                    Life took an unexpected turn when Badal discovered YouTube out of personal interest. While working
                                    as an accountant after completing his B.Com, the film Andhadhun sparked online discussions about
                                    its mysterious ending. Eager to contribute as a fan, Badal recorded his thoughts and uploaded them
                                    to YouTube. The video garnered 15-16k views, and the appreciation he received motivated him to create
                                    more content. What began as a hobby soon turned into a secondary source of income.
                                </p>
                            </section>

                            {/* Balancing YouTube and Education */}
                            <section id="balancing" className="mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">Balancing YouTube and Education</h2>
                                <p className="text-white/80 leading-relaxed">
                                    Although the growth of his channel started slowly, it gained momentum over time. When Badal decided
                                    to pursue an MBA, he realized his YouTube earnings could help fund it. During his MBA, he began
                                    contributing more consistently to his channel, which eventually surpassed a million subscribers.
                                    Now, YouTube has become his profession. Badal doesn't see himself as a critic or reviewer; instead,
                                    he positions himself as a friend who watches movies, shows, and anime, sharing recommendations to
                                    help people find stories worth their time and money.
                                </p>
                            </section>

                            {/* Men of Culture */}
                            <section id="men-of-culture" className="mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">The Birth of "Men of Culture"</h2>
                                <p className="text-white/80 leading-relaxed">
                                    In November 2021, Badal joined fellow YouTubers <a href="/priyanshu" className="text-[#FFC857] hover:underline">PJ ↗</a> and
                                    <a href="/mohit" className="text-[#FFC857] hover:underline"> Mohit ↗</a> for a live stream of the DC Fandom event.
                                    Their different perspectives created an engaging conversation that both Badal and the audience enjoyed.
                                    Inspired by the response, he proposed the idea of doing this regularly. This led to the creation of
                                    Men of Culture, a weekly podcast where the three friends casually discuss movies, shows, and anime.
                                    The setup is relaxed, with unfiltered conversations on Discord that resonate with viewers.
                                </p>
                            </section>

                            {/* Looking Ahead */}
                            <section id="looking-ahead" className="mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">Looking Ahead: Celebrating Cinema</h2>
                                <p className="text-white/80 leading-relaxed">
                                    Badal hopes Men of Culture will give them opportunities to meet directors and other creators behind
                                    the magic of movies, allowing him, as a fan, to better understand the art of filmmaking. His ultimate
                                    goal is for his audience to see him as a friend they can rely on to discover their next favorite story to watch.
                                </p>
                            </section>
                        </div>

                        {/* Desktop Sidebar - Hidden on mobile */}
                        <div className="hidden md:block md:w-[350px] shrink-0">
                            <div className="bg-white/5 rounded p-4 sticky top-24">
                                <div className="text-center mb-4">
                                    <div className="relative w-[300px] h-[300px] mx-auto">
                                        {!profileLoaded && (
                                            <Skeleton className="absolute inset-0 rounded-full" />
                                        )}
                                        <Image
                                            src="/media/badal-pfp.jpg"
                                            alt="Badal"
                                            width={300}
                                            height={300}
                                            className={`rounded-full transition-opacity duration-300 ${profileLoaded ? 'opacity-100' : 'opacity-0'
                                                }`}
                                            onLoadingComplete={() => setProfileLoaded(true)}
                                        />
                                    </div>
                                    <p className="text-sm pt-2 text-white/60 text-[clamp(0.875rem,1.5vw,1rem)]">
                                        Content Creator | Storyteller | Entrepreneur
                                    </p>
                                </div>

                                {/* Info Table */}
                                <table className="w-full text-sm">
                                    <tbody>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Born</th>
                                            <td className="py-2">Mumbai, Raised in Kolhapur</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Channel</th>
                                            <td className="py-2">
                                                <a href="https://www.youtube.com/@BnfTV"
                                                    className="text-[#FFC857] hover:underline">BnfTV ↗</a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Year Started</th>
                                            <td className="py-2">2016</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Social Media</th>
                                            <td className="py-2">
                                                <a href="https://www.instagram.com/badal_bnftv/"
                                                    className="text-[#FFC857] hover:underline">Instagram ↗</a>
                                                <br />
                                                <a href="https://x.com/badal_bnftv"
                                                    className="text-[#FFC857] hover:underline">Twitter ↗</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="text-white/60 text-left py-2">Associated with</th>
                                            <td className="py-2">
                                                <a href="https://www.youtube.com/@menofculturepodcast"
                                                    className="text-[#FFC857] hover:underline">Men of Culture ↗</a>
                                            </td>
                                        </tr>

                                        <StatsTable />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </main>
    );
}