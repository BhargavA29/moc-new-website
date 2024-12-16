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
            const channelId = 'UCKQ5Jj35sjTmJigRtlCPhVQ';
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
                    <h1 className="text-4xl text-[#FFC857] font-black mb-4 md:text-left text-center">MOHIT YODHA</h1>

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
                                            src="/media/mohit-pfp.jpg"
                                            alt="Mohit"
                                            width={300}
                                            height={300}
                                            className={`rounded-full transition-opacity duration-300 ${profileLoaded ? 'opacity-100' : 'opacity-0'}`}
                                            onLoadingComplete={() => setProfileLoaded(true)}
                                        />
                                    </div>
                                    <p className="text-sm pt-2 text-white/60 text-[clamp(0.875rem,1.5vw,1rem)]">
                                        Doctor | Content Creator | Entrepreneur
                                    </p>
                                </div>

                                {/* Info Table */}
                                <table className="w-full text-sm">
                                    <tbody>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Born</th>
                                            <td className="py-2">Bhopal, Madhya Pradesh</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Channels</th>
                                            <td className="py-2">
                                                <a href="https://youtube.com/@ComicVerse"
                                                    className="text-[#FFC857] hover:underline block">ComicVerse ↗</a>
                                                <a href="https://youtube.com/@FlickVerse"
                                                    className="text-[#FFC857] hover:underline block">FlickVerse ↗</a>
                                                <a href="https://youtube.com/@MohitVerse"
                                                    className="text-[#FFC857] hover:underline block">MohitVerse ↗</a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Year Started</th>
                                            <td className="py-2">2017</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Social Media</th>
                                            <td className="py-2">
                                                <a href="https://www.instagram.com/mohityodha/"
                                                    className="text-[#FFC857] hover:underline block">Instagram ↗</a>
                                                <a href="https://x.com/mohityodha"
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
                                    <span className="font-black">Mohit</span> is an Indian Content Creator, Doctor, and the founder of ComicVerse.
                                    Known for his unique perspective as a doctor-turned-YouTuber, he's also a co-host of the "Men of Culture" podcast.
                                </p>
                            </div>

                            {/* Contents Section */}
                            <div className="bg-white/5 p-4 rounded mb-8">
                                <h2 className="text-xl font-bold mb-3">Contents</h2>
                                <ul className="space-y-2">
                                    <li>1. <a href="#rooted" className="text-[#FFC857]">Rooted in Bhopal</a></li>
                                    <li>2. <a href="#childhood" className="text-[#FFC857]">Childhood and Movies as a Reward</a></li>
                                    <li>3. <a href="#army-life" className="text-[#FFC857]">Army Life and a Rekindled Passion</a></li>
                                    <li>4. <a href="#youtube" className="text-[#FFC857]">Overcoming Insecurities on YouTube</a></li>
                                    <li>5. <a href="#men-of-culture" className="text-[#FFC857]">The "Men of Culture" Connection</a></li>
                                    <li>6. <a href="#storytelling" className="text-[#FFC857]">Love for Storytelling and Celebratory Cinema</a></li>
                                </ul>
                            </div>

                            {/* Rooted in Bhopal */}
                            <section id="rooted" className="mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">Rooted in Bhopal</h2>
                                <p className="text-white/80 leading-relaxed">
                                    Mohit was born in Bhopal, Madhya Pradesh, but completed his schooling in Sanawad before returning to Bhopal for college.
                                    His Army service took him to various locations, but after completing his Short Service Commission, he returned once again to Bhopal.
                                    He describes this connection as a "love affair" with the city. Currently, Mohit runs a clinic and creates content on YouTube under
                                    the name Comicverse. Comparing himself to Marvel's Dr. Strange, he humorously calls himself a doctor-turned-YouTuber focused on comics,
                                    a rare intersection of professions.
                                </p>
                            </section>

                            {/* Childhood and Movies */}
                            <section id="childhood" className="mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">Childhood and Movies as a Reward</h2>
                                <p className="text-white/80 leading-relaxed">
                                    Growing up, Mohit's father often brought home movie CDs, which excited him. Coming from a family dominated by medical professionals,
                                    Mohit's career path was predetermined, and movie theater visits were rare. Despite his focus on studies, films remained his way of
                                    unwinding. During exam seasons, he motivated himself by treating movies as a post-exam reward.
                                </p>
                            </section>

                            {/* Army Life */}
                            <section id="army-life" className="mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">Army Life and a Rekindled Passion</h2>
                                <p className="text-white/80 leading-relaxed">
                                    Mohit's love for movies temporarily faded when he joined the Army as a doctor and was posted across the country.
                                    After his Short Service Commission ended and he returned to civilian life in Bhopal, he reconnected with his passion
                                    for movies and comics. Inspired by YouTubers he followed, Mohit started creating content on YouTube, sharing his own
                                    fan theories and insights as a passion project.
                                </p>
                            </section>

                            {/* YouTube Journey */}
                            <section id="youtube" className="mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">Overcoming Insecurities on YouTube</h2>
                                <p className="text-white/80 leading-relaxed">
                                    Initially, Mohit only did voiceovers, lacking the confidence to appear on camera. However, in his pursuit of better
                                    content quality, he pushed past his insecurities and experimented with presentation styles to make his videos more
                                    entertaining, funny, and informative. Gradually, his efforts began receiving appreciation, and he continues to grow his audience.
                                </p>
                            </section>

                            {/* Men of Culture */}
                            <section id="men-of-culture" className="mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">The "Men of Culture" Connection</h2>
                                <p className="text-white/80 leading-relaxed">
                                    Joining Men of Culture alongside <a href="/badal" className="text-[#FFC857] hover:underline">Badal ↗</a> and
                                    <a href="/priyanshu" className="text-[#FFC857] hover:underline"> PJ ↗</a> turned out to be an amazing experience for Mohit.
                                    The collaboration feels more like friends hanging out than work, and he feels grateful that his passion has connected him
                                    with so many people. A highlight was his recent trip to Japan, where he met someone who recognized him through his
                                    content—an experience he describes as surreal and unforgettable.
                                </p>
                            </section>

                            {/* Storytelling */}
                            <section id="storytelling" className="mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">Love for Storytelling and Celebratory Cinema</h2>
                                <p className="text-white/80 leading-relaxed">
                                    Mohit's ultimate goal is to experience all kinds of cinema—Indian, Hollywood, European, and more. For him, story and
                                    character development matter most; he believes good writing can outweigh technical imperfections like camera angles or
                                    lighting. He longs for the festive excitement that surrounded movies like Avengers: Endgame and Spider-Man: No Way Home,
                                    when films created a collective celebration among audiences. Mohit hopes to relive that magical atmosphere where cinema
                                    brings people together.
                                </p>
                            </section>
                        </div>

                        {/* Desktop Sidebar - Hidden on mobile */}
                        <div className="hidden md:block md:w-[350px] shrink-0">
                            <div className="bg-white/5 rounded p-6 sticky top-24">
                                <div className="text-center mb-4">
                                    <div className="relative w-[300px] h-[300px] mx-auto">
                                        {!profileLoaded && (
                                            <Skeleton className="absolute inset-0 rounded-full" />
                                        )}
                                        <Image
                                            src="/media/mohit-pfp.jpg"
                                            alt="Mohit"
                                            width={300}
                                            height={300}
                                            className={`rounded-full transition-opacity duration-300 ${profileLoaded ? 'opacity-100' : 'opacity-0'}`}
                                            onLoadingComplete={() => setProfileLoaded(true)}
                                        />
                                    </div>
                                    <p className="text-sm pt-2 text-white/60 text-[clamp(0.875rem,1.5vw,1rem)]">
                                        Doctor | Content Creator | Entrepreneur
                                    </p>
                                </div>

                                {/* Info Table */}
                                <table className="w-full text-sm">
                                    <tbody>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Born</th>
                                            <td className="py-2">Bhopal, Madhya Pradesh</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Channels</th>
                                            <td className="py-2">
                                                <a href="https://youtube.com/@ComicVerse"
                                                    className="text-[#FFC857] hover:underline block">ComicVerse ↗</a>
                                                <a href="https://youtube.com/@FlickVerse"
                                                    className="text-[#FFC857] hover:underline block">FlickVerse ↗</a>
                                                <a href="https://youtube.com/@MohitVerse"
                                                    className="text-[#FFC857] hover:underline block">MohitVerse ↗</a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Year Started</th>
                                            <td className="py-2">2017</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <th className="text-white/60 text-left py-2">Social Media</th>
                                            <td className="py-2">
                                                <a href="https://www.instagram.com/mohityodha/"
                                                    className="text-[#FFC857] hover:underline block">Instagram ↗</a>
                                                <a href="https://x.com/mohityodha"
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
                    </div>
                </div>

            </div>
            <Footer />
        </main>
    );
}