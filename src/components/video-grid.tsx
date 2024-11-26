'use client'

import { useRef, useState, useEffect } from 'react'
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
        previewVideo: '/media/video-grid/preview/shaktimaan.mp4'
    },
    {
        id: 2,
        thumbnail: '/media/video-grid/CID.jpg',
        title: '🙏 Please Don\'t Cancel Us! Men of Culture - 153',
        type: 'regular',
        link: 'https://www.youtube.com/watch?v=KtK6eefsQOU',
        previewVideo: '/media/video-grid/preview/CID.mp4'
    },

    {
        id: 3,
        thumbnail: '/media/video-grid/japan.png',
        title: 'We Are Finally in Japan - Episode 1',
        type: 'regular',
        link: 'https://www.youtube.com/watch?v=Ss8yhFSeiT8',
        previewVideo: '/media/video-grid/preview/japan.mp4'
    },
    {
        id: 4,
        thumbnail: '/media/video-grid/bb3.png',
        title: 'How BHOOL BHULAIYAA 3 was Made😭',
        type: 'short',
        link: 'https://www.youtube.com/shorts/J6GAV9Bgqg8',
        previewVideo: '/media/video-grid/preview/bb3.mp4'
    },
    // Second Row Videos
    {
        id: 5,
        thumbnail: '/media/video-grid/kanguva.png',
        link: 'https://youtube.com/watch?v=M5Vp4NbfiSg',
        title: 'They used AI in KANGUVA😧',
        type: 'short',
        previewVideo: '/media/video-grid/preview/kanguva.mp4'
    },
    {
        id: 6,
        thumbnail: '/media/video-grid/stree2.jpg',
        link: 'https://www.youtube.com/watch?v=_vPBw2ckwVA',
        title: 'Making Of Stree Universe With The Director Himself | Amar Kaushik | Men Of Culture 149',
        type: 'regular',
        previewVideo: '/media/video-grid/preview/stree2.mp4'
    },
    {
        id: 7,
        thumbnail: '/media/video-grid/delhi.jpg',
        link: 'https://www.youtube.com/watch?v=s_G-YNcPNqM',
        title: 'Men of Culture Delhi ki Bakc#odi - MEGA vlog',
        type: 'regular',
        previewVideo: '/media/video-grid/preview/delhi.mp4'
    },
    {
        id: 8,
        thumbnail: '/media/video-grid/red-hulk.jpg',
        link: 'https://www.youtube.com/watch?v=A88FuOSvWSE',
        title: 'Marvel is Cooking, So are We!😉 Men of culture - 155',
        type: 'regular',
        previewVideo: '/media/video-grid/preview/red-hulk.mp4'
    }

]

function VideoCard({ video, isShort = false }: { video: typeof videos[0], isShort?: boolean }) {
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Handle client-side mounting
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [isMounted]);

    // Only attach event handlers on client side
    const handleMouseEnter = () => {
        if (!videoRef.current || !isMounted) return;
        videoRef.current.src = video.previewVideo;
        videoRef.current.load();
        videoRef.current.play().catch(() => { });
    };

    const handleMouseLeave = () => {
        if (!videoRef.current || !isMounted) return;
        videoRef.current.src = '';
        videoRef.current.load();
    };

    return (
        <div
            ref={containerRef}
            className={`relative ${isShort ? 'aspect-[9/16]' : 'aspect-video'} bg-zinc-800 rounded-lg overflow-hidden group cursor-pointer`}
            onMouseEnter={isMounted ? handleMouseEnter : undefined}
            onMouseLeave={isMounted ? handleMouseLeave : undefined}
        >
            {isVisible && (
                <>
                    <Image
                        src={video.thumbnail}
                        alt={video.title || 'Video thumbnail'}
                        fill
                        className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                        sizes={isShort ? "(max-width: 640px) 100vw, 33vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"}
                        loading="lazy"
                    />
                    <video
                        ref={videoRef}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                        loop
                        muted
                        playsInline
                        preload="none"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 flex items-center justify-center">
                        <Button
                            asChild
                            variant="secondary"
                            className="opacity-0 scale-95 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                        >
                            <Link href={video.link} target="_blank" rel="noopener noreferrer">
                                Watch {isShort ? 'Short' : 'Video'}
                            </Link>
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}

export function VideoGrid() {
    return (
        <section className="py-8 md:py-16 px-8 md:px-24">
            <div className="container mx-auto px-4">
                <div className="space-y-4 md:space-y-6">
                    {/* First Main Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <div className="md:col-span-2 grid gap-4 md:gap-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                {videos.slice(0, 2).map((video) => (
                                    <VideoCard key={video.id} video={video} />
                                ))}
                            </div>
                            <VideoCard video={videos[2]} />
                        </div>
                        <div className="hidden md:block h-full">
                            <VideoCard video={videos[3]} isShort />
                        </div>
                    </div>

                    <div className="md:hidden">
                        <VideoCard video={videos[3]} isShort />
                    </div>

                    {/* Second Main Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <div className="hidden md:block h-full">
                            <VideoCard video={videos[4]} isShort />
                        </div>
                        <div className="md:hidden">
                            <VideoCard video={videos[4]} isShort />
                        </div>
                        <div className="md:col-span-2 grid gap-4 md:gap-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                {videos.slice(5, 7).map((video) => (
                                    <VideoCard key={video.id} video={video} />
                                ))}
                            </div>
                            <VideoCard video={videos[7]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}