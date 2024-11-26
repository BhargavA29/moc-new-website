'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const videos = [
    // First Row Videos (2 landscape videos)
    {
        id: 1,
        thumbnail: '/media/video-grid/shaktimaan.jpg',
        link: 'https://youtube.com/watch?v=O-AQpi1baSk',
        title: 'This is a Nightmare! Shaktimaan, Kanguva - Men of Culture - 156',
        type: 'regular',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/video/upload/v1732636934/moc-website-preview/o9wcr32fdqkex9mj7ixz.mp4'
    },
    {
        id: 2,
        thumbnail: '/media/video-grid/CID.jpg',
        title: '🙏 Please Don\'t Cancel Us! Men of Culture - 153',
        type: 'regular',
        link: 'https://www.youtube.com/watch?v=KtK6eefsQOU',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/video/upload/v1732636955/moc-website-preview/bp1gjzqll03qvplc9lwh.mp4'
    },

    {
        id: 3,
        thumbnail: '/media/video-grid/japan.png',
        title: 'We Are Finally in Japan - Episode 1',
        type: 'regular',
        link: 'https://www.youtube.com/watch?v=Ss8yhFSeiT8',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/video/upload/v1732636979/moc-website-preview/pydduinvsi6ianforprf.mp4'
    },
    {
        id: 4,
        thumbnail: '/media/video-grid/bb3.png',
        title: 'How BHOOL BHULAIYAA 3 was Made😭',
        type: 'short',
        link: 'https://www.youtube.com/shorts/J6GAV9Bgqg8',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/video/upload/v1732636942/moc-website-preview/ni8rmd2bmhlhcxzc7iso.mp4'
    },
    // Second Row Videos
    {
        id: 5,
        thumbnail: '/media/video-grid/kanguva.png',
        link: 'https://youtube.com/watch?v=M5Vp4NbfiSg',
        title: 'They used AI in KANGUVA😧',
        type: 'short',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/video/upload/v1732636926/moc-website-preview/aj86bmgn7c8horzshs4v.mp4'
    },
    {
        id: 6,
        thumbnail: '/media/video-grid/stree2.jpg',
        link: 'https://www.youtube.com/watch?v=_vPBw2ckwVA',
        title: 'Making Of Stree Universe With The Director Himself | Amar Kaushik | Men Of Culture 149',
        type: 'regular',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/video/upload/v1732636952/moc-website-preview/tg8syios8f2q28pcofj9.mp4'
    },
    {
        id: 7,
        thumbnail: '/media/video-grid/delhi.jpg',
        link: 'https://www.youtube.com/watch?v=s_G-YNcPNqM',
        title: 'Men of Culture Delhi ki Bakc#odi - MEGA vlog',
        type: 'regular',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/video/upload/v1732636988/moc-website-preview/mzn4r1xzqnswisq2noyr.mp4'
    },
    {
        id: 8,
        thumbnail: '/media/video-grid/red-hulk.jpg',
        link: 'https://www.youtube.com/watch?v=A88FuOSvWSE',
        title: 'Marvel is Cooking, So are We!😉 Men of culture - 155',
        type: 'regular',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/video/upload/v1732636940/moc-website-preview/hwnmadrus5arsihrmx3e.mp4'
    }

]

function LandscapeVideoCard({ video }: { video: typeof videos[0] }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.currentTime = 0;
            videoElement.play().catch(err => console.log("Video play error:", err));
        }
    };

    const handleMouseLeave = () => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
    };

    return (
        <div
            className="relative aspect-video bg-zinc-800 rounded-lg overflow-hidden group cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                src={video.thumbnail}
                alt={video.title || 'Video thumbnail'}
                fill
                className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                loop
                muted
                playsInline
            >
                <source src={video.previewVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 flex items-center justify-center">
                <Button
                    asChild
                    variant="secondary"
                    className="opacity-0 scale-95 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                >
                    <Link href={video.link} target="_blank" rel="noopener noreferrer">
                        Watch Video
                    </Link>
                </Button>
            </div>
        </div>
    );
}

function ShortsVideoCard({ video }: { video: typeof videos[0] }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.currentTime = 0;
            videoElement.play().catch(err => console.log("Video play error:", err));
        }
    };

    const handleMouseLeave = () => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
    };

    return (
        <div
            className="relative aspect-[9/16] bg-zinc-800 rounded-lg overflow-hidden group cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                src={video.thumbnail}
                alt={video.title || 'Video thumbnail'}
                fill
                className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                loop
                muted
                playsInline
            >
                <source src={video.previewVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 flex items-center justify-center">
                <Button
                    asChild
                    variant="secondary"
                    className="opacity-0 scale-95 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                >
                    <Link href={video.link} target="_blank" rel="noopener noreferrer">
                        Watch Short
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export function VideoGrid() {
    return (
        <section className="py-8 md:py-16 px-16">
            <div className="container mx-auto px-4">
                <div className="space-y-4 md:space-y-6">
                    {/* First Main Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {/* First 2/3 Section */}
                        <div className="md:col-span-2 grid gap-4 md:gap-6">
                            {/* Top Two Landscape Videos */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                {videos.slice(0, 2).map((video) => (
                                    <LandscapeVideoCard key={video.id} video={video} />
                                ))}
                            </div>
                            {/* Bottom Single Landscape Video */}
                            <LandscapeVideoCard video={videos[2]} />
                        </div>

                        {/* Last 1/3 - Single Shorts Video */}
                        <div className="hidden md:block h-full">
                            <ShortsVideoCard video={videos[3]} />
                        </div>
                    </div>

                    {/* Mobile-only Shorts Video */}
                    <div className="md:hidden">
                        <ShortsVideoCard video={videos[3]} />
                    </div>

                    {/* Second Main Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {/* First 1/3 - Single Shorts Video */}
                        <div className="hidden md:block h-full">
                            <ShortsVideoCard video={videos[4]} />
                        </div>

                        {/* Mobile-only Shorts Video */}
                        <div className="md:hidden">
                            <ShortsVideoCard video={videos[4]} />
                        </div>

                        {/* Last 2/3 Section */}
                        <div className="md:col-span-2 grid gap-4 md:gap-6">
                            {/* Top Two Landscape Videos */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                {videos.slice(5, 7).map((video) => (
                                    <LandscapeVideoCard key={video.id} video={video} />
                                ))}
                            </div>
                            {/* Bottom Single Landscape Video */}
                            <LandscapeVideoCard video={videos[7]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}