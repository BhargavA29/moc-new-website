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
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)} B`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)} M`;
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
            const channelId = 'UCWkHlUiYLeRSIMP8yM7rxxg';
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

    const hoursOfContent = Math.ceil((stats.videoCount * 15) / 60);

    return (
        <>
            <tr className="border-b border-white/10">
                <th className="text-white/60 text-left py-2">YouTube Stats</th>
                <td className="py-2">
                    <div className="space-y-1">
                        <div>Subscribers: {formatNumber(stats.subscriberCount)}</div>
                        <div>Total Views: {formatNumber(stats.viewCount)}</div>
                        <div>Total Videos: {stats.videoCount}</div>
                        <div>Content Hours: {hoursOfContent}+</div>
                    </div>
                </td>
            </tr>
            <tr className="border-b border-white/10">
                <th className="text-white/60 text-left py-2">Instagram</th>
                <td className="py-2">633K+ Followers</td>
            </tr>
        </>
    );
}


export default function ProfilePage() {
    const [bannerLoaded, setBannerLoaded] = useState(false);
    const [profileLoaded, setProfileLoaded] = useState(false);

    return (
        <main className="min-h-screen bg-[#0d1117] text-white/90">
            {/* Navbar */}
            <Navbar />

            {/* Banner Section with padding */}
            <div className="pt-16">
                <div className="max-w-[1400px] mx-auto px-4">
                    <div className="relative h-[40vh]  overflow-hidden">
                        {!bannerLoaded && (
                            <Skeleton className="absolute inset-0" />
                        )}
                        <Image
                            src="/media/banner.jpg"
                            alt="Cover"
                            fill
                            className={`object-cover transition-opacity duration-300 ${bannerLoaded ? 'opacity-100' : 'opacity-0'
                                }`}
                            priority
                            onLoadingComplete={() => setBannerLoaded(true)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1117]" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1400px] mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Main Content */}
                    <div className="flex-grow">
                        <h1 className="text-4xl text-[#FFC857] font-black mb-4">PRIYANSHU JAISWAL</h1>

                        {/* Quick Description */}
                        <div className="bg-white/5 p-4 rounded mb-6">
                            <p className="text-lg mb-1">
                                <span className="font-black">Priyanshu Jaiswal</span> aka PJ is an Indian Content Creator, known for founding PJ Explained,
                                India's #2 pop culture content channel, and co-founding the "Men of Culture" podcast.
                            </p>
                        </div>

                        {/* Introduction */}


                        {/* Contents Section */}
                        <div className="bg-white/5 p-4 rounded mb-8">
                            <h2 className="text-xl font-bold mb-3">Contents</h2>
                            <ul className="space-y-2">
                                <li>1. <a href="#childhood" className="text-[#FFC857]">Childhood and Love for Movies</a></li>
                                <li>2. <a href="#discovering-youtube" className="text-[#FFC857]">Discovering YouTube in School</a></li>
                                <li>3. <a href="#surprising-revelation" className="text-[#FFC857]">A Surprising Revelation</a></li>
                                <li>4. <a href="#college-life" className="text-[#FFC857]">College Life and Part-Time Hustle</a></li>
                                <li>5. <a href="#covid-turning-point" className="text-[#FFC857]">The Turning Point During COVID-19</a></li>
                                <li>6. <a href="#men-of-culture" className="text-[#FFC857]">The "Men of Culture" Podcast</a></li>
                                <li>7. <a href="#diverse-stories" className="text-[#FFC857]">Sharing Diverse Stories Through Film</a></li>
                                <li>8. <a href="#philosophy" className="text-[#FFC857]">PJ's Philosophy</a></li>
                            </ul>
                        </div>

                        {/* Childhood and Love for Movies */}
                        <section id="childhood" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">Childhood and Love for Movies</h2>
                            <p className="text-white/80 leading-relaxed">
                                Growing up in Azamgarh, Uttar Pradesh, PJ developed a deep connection with cinema during his childhood.
                                For him, movies weren't just entertainment; they served as windows to different worlds, allowing him to
                                explore new places and understand diverse perspectives without leaving his hometown.
                            </p>
                        </section>

                        {/* Discovering YouTube in School */}
                        <section id="discovering-youtube" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">Discovering YouTube in School</h2>
                            <p className="text-white/80 leading-relaxed">
                                During his school days, PJ discovered YouTube and began making videos for fun. However, when exams
                                approached, he stopped creating content and didn't return to it for a long time, believing his videos
                                weren't appreciated.
                            </p>
                        </section>

                        {/* A Surprising Revelation */}
                        <section id="surprising-revelation" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">A Surprising Revelation</h2>
                            <p className="text-white/80 leading-relaxed">
                                Unexpectedly, someone reuploaded PJ's old videos on their channel, where they gained more views than
                                they had originally. This surprising outcome made him reconsider his decision and sparked the thought
                                that people might actually enjoy his content.
                            </p>
                        </section>

                        {/* College Life and Part-Time Hustle */}
                        <section id="college-life" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">College Life and Part-Time Hustle</h2>
                            <p className="text-white/80 leading-relaxed">
                                While in college, PJ resumed making YouTube videos as a hobby. At the same time, he worked part-time
                                in sales to support himself financially. Initially, YouTube was just a side activity to share his
                                passion and earn a bit of extra money.
                            </p>
                        </section>

                        {/* The Turning Point During COVID-19 */}
                        <section id="covid-turning-point" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">The Turning Point During COVID-19</h2>
                            <p className="text-white/80 leading-relaxed">
                                The COVID-19 pandemic brought significant changes. With more people consuming online content, PJ's
                                channel began to grow. He realized YouTube could help him achieve a personal dream: buying back an
                                ancestral shop that his family had lost. What started as a hobby evolved into a full-time career.
                                Today, his channel, PJ Explained, is the #2 pop culture content channel in India.
                            </p>
                        </section>

                        {/* The "Men of Culture" Podcast */}
                        <section id="men-of-culture" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">The "Men of Culture" Podcast</h2>
                            <p className="text-white/80 leading-relaxed">
                                Collaborating with fellow YouTuber <a href="/badal" className="text-[#FFC857] hover:underline">BnfTV (Badal) ↗</a>,
                                PJ launched a podcast called Men of Culture. In this podcast, they discuss movies with honesty,
                                sometimes to the point of missing out on invitations to premieres. Despite this, their viewers
                                appreciate their authenticity, which remains their priority.
                            </p>
                        </section>

                        {/* Sharing Diverse Stories Through Film */}
                        <section id="diverse-stories" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">Sharing Diverse Stories Through Film</h2>
                            <p className="text-white/80 leading-relaxed">
                                PJ's passion lies in sharing films from different places and cultures. His goal is to encourage
                                himself and his audience to explore diverse perspectives, embrace various viewpoints, and foster
                                mutual understanding—one story at a time.
                            </p>
                        </section>

                        {/* PJ's Philosophy */}
                        <section id="philosophy" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">PJ's Philosophy</h2>
                            <p className="text-white/80 leading-relaxed">
                                At the heart of PJ's content is a commitment to authenticity and genuine storytelling. He believes
                                in the power of cinema to bridge cultural gaps and create understanding between different communities.
                                His approach to content creation focuses on honest reviews and in-depth analysis, prioritizing
                                viewer trust over industry relationships.
                            </p>
                        </section>
                    </div>

                    {/* Info Box Sidebar */}
                    <div className="md:w-[350px] shrink-0">
                        <div className="bg-white/5 rounded p-4 sticky top-24">
                            <div className="text-center mb-4">
                                <div className="relative w-[300px] h-[300px] mx-auto">
                                    {!profileLoaded && (
                                        <Skeleton className="absolute inset-0 rounded-full" />
                                    )}
                                    <Image
                                        src="/media/pj.png"
                                        alt="Priyanshu Jaiswal"
                                        width={300}
                                        height={300}
                                        className={`rounded-full transition-opacity duration-300 ${profileLoaded ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        onLoadingComplete={() => setProfileLoaded(true)}
                                    />
                                </div>
                                <p className="text-sm pt-2 text-white/60">Content Creator | Film Critic | Entrepreneur</p>
                            </div>

                            {/* Info Table */}
                            <table className="w-full text-sm">
                                <tbody>
                                    <tr className="border-b border-white/10">
                                        <th className="text-white/60 text-left py-2">Born</th>
                                        <td className="py-2">Azamgarh, Uttar Pradesh</td>
                                    </tr>
                                    <tr className="border-b border-white/10">
                                        <th className="text-white/60 text-left py-2">Channels</th>
                                        <td className="py-2">
                                            <a href="https://www.youtube.com/channel/UCWkHlUiYLeRSIMP8yM7rxxg"
                                                className="text-[#FFC857] hover:underline">PJ Explained ↗</a>
                                            <br />
                                            <a href="https://www.youtube.com/channel/UCbPUDwXjjV7KOYGdz3tLpXw"
                                                className="text-[#FFC857] hover:underline">thePJ ↗</a>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-white/10">
                                        <th className="text-white/60 text-left py-2">Year Started</th>
                                        <td className="py-2">2017</td>
                                    </tr>
                                    <tr className="border-b border-white/10">
                                        <th className="text-white/60 text-left py-2">Social Media</th>
                                        <td className="py-2">
                                            <a href="https://www.instagram.com/pjexplained"
                                                className="text-[#FFC857] hover:underline">Instagram ↗</a>
                                            <br />
                                            <a href="https://x.com/pjexplained"
                                                className="text-[#FFC857] hover:underline">Twitter ↗</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-white/60 text-left py-2">Associated with</th>
                                        <td className="py-2">
                                            <a href="https://www.youtube.com/@menofculturepodcast" className="text-[#FFC857] hover:underline">Men of Culture ↗</a>
                                        </td>
                                    </tr>

                                    <StatsTable />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>

    );
}