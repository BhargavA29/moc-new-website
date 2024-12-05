'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const videos = [
    // First Row Videos (2 landscape videos)
    {
        id: 1,
        thumbnail: '/media/video-grid/shaktimaan.jpg',
        link: 'https://youtube.com/watch?v=O-AQpi1baSk',
        title: 'This is a Nightmare! Shaktimaan, Kanguva - Men of Culture - 156',
        type: 'regular',
        views: '304K+',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/image/upload/v1732782857/moc-website-preview-gifs/bpszjueyad3yjuhql7uj.gif'
    },
    {
        id: 2,
        thumbnail: '/media/video-grid/CID.jpg',
        title: '🙏 Please Don\'t Cancel Us! Men of Culture - 153',
        type: 'regular',
        views: '315K+',
        link: 'https://www.youtube.com/watch?v=KtK6eefsQOU',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/image/upload/v1732782879/moc-website-preview-gifs/i5j97nxal0bma9ekvoty.gif'
    },

    {
        id: 3,
        thumbnail: '/media/video-grid/japan.png',
        title: 'We Are Finally in Japan - Episode 1',
        type: 'regular',
        views: '473K+',
        link: 'https://www.youtube.com/watch?v=Ss8yhFSeiT8',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/image/upload/v1732782870/moc-website-preview-gifs/pxkhrstrr51onuqimvbe.gif'
    },
    {
        id: 4,
        thumbnail: '/media/video-grid/bb3.png',
        title: 'How BHOOL BHULAIYAA 3 was Made😭',
        type: 'short',
        views: '87K+',
        link: 'https://www.youtube.com/shorts/J6GAV9Bgqg8',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/image/upload/v1732782858/moc-website-preview-gifs/boytzxp1rle6ww8uxaxf.gif'
    },
    // Second Row Videos
    {
        id: 5,
        thumbnail: '/media/video-grid/kanguva.png',
        link: 'https://youtube.com/watch?v=M5Vp4NbfiSg',
        title: 'They used AI in KANGUVA😧',
        views: '44K+',
        type: 'short',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/image/upload/v1732782886/moc-website-preview-gifs/cd9vu10vfpdf6qdpw4o0.gif'
    },
    {
        id: 6,
        thumbnail: '/media/video-grid/stree2.jpg',
        link: 'https://www.youtube.com/watch?v=_vPBw2ckwVA',
        title: 'Making Of Stree Universe With The Director Himself | Amar Kaushik | Men Of Culture 149',
        type: 'regular',
        views: '522K+',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/image/upload/v1732782870/moc-website-preview-gifs/u7uw6af2ah3msgfdvauj.gif'
    },
    {
        id: 7,
        thumbnail: '/media/video-grid/delhi.jpg',
        link: 'https://www.youtube.com/watch?v=s_G-YNcPNqM',
        title: 'Men of Culture Delhi ki Bakc#odi - MEGA vlog',
        type: 'regular',
        views: '44K+',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/image/upload/v1732782878/moc-website-preview-gifs/rl3xcjkga7dyxjxpt82h.gif'
    },
    {
        id: 8,
        thumbnail: '/media/video-grid/red-hulk.jpg',
        link: 'https://www.youtube.com/watch?v=A88FuOSvWSE',
        title: 'Marvel is Cooking, So are We!😉 Men of culture - 155',
        type: 'regular',
        views: '304K+',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/image/upload/v1732782859/moc-website-preview-gifs/rb8vvwb8mqqb1agryju3.gif'
    }
]

function VideoCard({ video, isShort = false, index }: { video: typeof videos[0], isShort?: boolean, index: number }) {
    const [isClient, setIsClient] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <div
                className={`relative ${isShort ? 'aspect-[9/16]' : 'aspect-video'} bg-zinc-800 rounded-lg overflow-hidden`}
            />
        );
    }

    const CardContent = () => (
        <Link
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative ${isShort ? 'aspect-[9/16]' : 'aspect-video'} bg-zinc-800 rounded-[2vh] overflow-hidden group block transform transition-all duration-200 ease-in-out hover:scale-105 hover:z-30 z-10`}
        >
            <Image
                src={video.thumbnail}
                alt={video.title || 'Video thumbnail'}
                fill
                className="object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                sizes={isShort ? "(max-width: 640px) 100vw, 33vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"}
                loading="lazy"
            />
            <Image
                src={video.previewVideo}
                alt={`${video.title || 'Video'} preview`}
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                sizes={isShort ? "(max-width: 640px) 100vw, 33vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"}
                loading="lazy"
            />

            {/* Overlay with title and icons */}
            <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                {/* Top right views counter */}
                <div className="absolute top-[0.75vh] right-[0.75vh] flex items-center gap-[0.5vw] bg-black/40 rounded-full px-[0.75vw] py-[0.375vh] translate-y-[-1vh] opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                    <Eye className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">{video.views}</span>
                </div>

                {/* Gradient overlay for better text visibility */}
                <div className="absolute bottom-0 left-0 right-0 h-[6vh] bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Bottom title with arrow */}
                <div className="absolute bottom-0 left-0 right-0 p-[1vh] translate-y-[1vh] opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex items-center justify-between gap-4">
                        <p className="text-white font-medium truncate text-shadow">
                            {video.title}
                        </p>
                        <svg
                            className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 transform transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M7 17L17 7M17 7H7M17 7V17"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );

    return (
        <>
            {/* Mobile Version */}
            <div className="md:hidden">
                <CardContent />
            </div>

            {/* Desktop Version with Animation */}
            <div className="hidden md:block">
                <motion.div
                    ref={ref}
                    initial={{
                        opacity: 0,
                        y: 50  // Move up from bottom
                    }}
                    animate={{
                        opacity: inView ? 1 : 0,
                        y: inView ? 0 : 50  // Move to original position when in view
                    }}
                    transition={{
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: [0.21, 0.47, 0.32, 0.98]
                    }}
                >
                    <CardContent />
                </motion.div>
            </div>
        </>
    );
}

export function VideoGrid() {
    return (
        <section className="py-[4vh] md:py-[4vh] px-[2vw] md:px-[8vw]">
            <div className="mx-auto px-[4vw] md:px-[8vw]">
                {/* Desktop View */}
                <div className="hidden md:block space-y-[1vh] md:space-y-[1.5vh]">
                    {/* First Main Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[1vh] md:gap-[1.5vh]">
                        <div className="md:col-span-2 grid gap-[1vh] md:gap-[1.5vh]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1vh] md:gap-[1.5vh]">
                                {videos.slice(0, 2).map((video, index) => (
                                    <VideoCard key={video.id} video={video} index={index} />
                                ))}
                            </div>
                            <VideoCard video={videos[2]} index={2} />
                        </div>
                        <div className="hidden md:block h-full">
                            <VideoCard video={videos[3]} index={3} isShort />
                        </div>
                    </div>

                    {/* Second Main Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[1vh] md:gap-[1.5vh]">
                        <div className="hidden md:block h-full">
                            <VideoCard video={videos[4]} index={4} isShort />
                        </div>
                        <div className="md:col-span-2 grid gap-[1vh] md:gap-[1.5vh]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1vh] md:gap-[1.5vh]">
                                {videos.slice(5, 7).map((video, index) => (
                                    <VideoCard key={video.id} video={video} index={index + 5} />
                                ))}
                            </div>
                            <VideoCard video={videos[7]} index={7} />
                        </div>
                    </div>
                </div>

                {/* Mobile View with Horizontal Scroll */}
                <div className="md:hidden w-full relative">
                    <ScrollArea className="w-full whitespace-nowrap">
                        <div className="flex gap-[2vw] pb-[1vh]">
                            {/* First Column */}
                            <div className="flex-none w-[150vw] flex gap-[2vw]">
                                {/* Regular videos */}
                                <div className="w-[75vw] space-y-[2vh]">
                                    {videos.slice(0, 3).map((video, index) => (
                                        <VideoCard key={video.id} video={video} index={index} />
                                    ))}
                                </div>
                                {/* Short video */}
                                <div className="w-[75vw]">
                                    <VideoCard video={videos[3]} index={3} isShort />
                                </div>
                            </div>

                            {/* Second Column */}
                            <div className="flex-none w-[150vw] flex gap-[2vw]">
                                {/* Regular videos */}
                                <div className="w-[75vw] space-y-[2vh]">
                                    {videos.slice(5, 8).map((video, index) => (
                                        <VideoCard key={video.id} video={video} index={index + 5} />
                                    ))}
                                </div>
                                {/* Short video */}
                                <div className="w-[75vw]">
                                    <VideoCard video={videos[4]} index={4} isShort />
                                </div>
                            </div>
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>

                    {/* Right gradient overlay */}
                    <div className="absolute -right-1 top-0 bottom-0 w-[20vw] bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}