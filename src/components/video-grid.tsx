'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
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
        previewVideo: 'https://res.cloudinary.com/drag8k9na/image/upload/v1732782857/moc-website-preview-gifs/bpszjueyad3yjuhql7uj.gif'
    },
    {
        id: 2,
        thumbnail: '/media/video-grid/CID.jpg',
        title: '🙏 Please Don\'t Cancel Us! Men of Culture - 153',
        type: 'regular',
        link: 'https://www.youtube.com/watch?v=KtK6eefsQOU',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/image/upload/v1732782879/moc-website-preview-gifs/i5j97nxal0bma9ekvoty.gif'
    },

    {
        id: 3,
        thumbnail: '/media/video-grid/japan.png',
        title: 'We Are Finally in Japan - Episode 1',
        type: 'regular',
        link: 'https://www.youtube.com/watch?v=Ss8yhFSeiT8',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/image/upload/v1732782870/moc-website-preview-gifs/pxkhrstrr51onuqimvbe.gif'
    },
    {
        id: 4,
        thumbnail: '/media/video-grid/bb3.png',
        title: 'How BHOOL BHULAIYAA 3 was Made😭',
        type: 'short',
        link: 'https://www.youtube.com/shorts/J6GAV9Bgqg8',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/image/upload/v1732782858/moc-website-preview-gifs/boytzxp1rle6ww8uxaxf.gif'
    },
    // Second Row Videos
    {
        id: 5,
        thumbnail: '/media/video-grid/kanguva.png',
        link: 'https://youtube.com/watch?v=M5Vp4NbfiSg',
        title: 'They used AI in KANGUVA😧',
        type: 'short',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/image/upload/v1732782886/moc-website-preview-gifs/cd9vu10vfpdf6qdpw4o0.gif'
    },
    {
        id: 6,
        thumbnail: '/media/video-grid/stree2.jpg',
        link: 'https://www.youtube.com/watch?v=_vPBw2ckwVA',
        title: 'Making Of Stree Universe With The Director Himself | Amar Kaushik | Men Of Culture 149',
        type: 'regular',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/image/upload/v1732782870/moc-website-preview-gifs/u7uw6af2ah3msgfdvauj.gif'
    },
    {
        id: 7,
        thumbnail: '/media/video-grid/delhi.jpg',
        link: 'https://www.youtube.com/watch?v=s_G-YNcPNqM',
        title: 'Men of Culture Delhi ki Bakc#odi - MEGA vlog',
        type: 'regular',
        previewVideo: 'https://res.cloudinary.com/drag8k9na/image/upload/v1732782878/moc-website-preview-gifs/rl3xcjkga7dyxjxpt82h.gif'
    },
    {
        id: 8,
        thumbnail: '/media/video-grid/red-hulk.jpg',
        link: 'https://www.youtube.com/watch?v=A88FuOSvWSE',
        title: 'Marvel is Cooking, So are We!😉 Men of culture - 155',
        type: 'regular',
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

    const fromLeft = index % 2 === 0;

    if (!isClient) {
        return (
            <div
                className={`relative ${isShort ? 'aspect-[9/16]' : 'aspect-video'} bg-zinc-800 rounded-lg overflow-hidden`}
            />
        );
    }

    const CardContent = () => (
        <div className={`relative ${isShort ? 'aspect-[9/16]' : 'aspect-video'} bg-zinc-800 rounded-lg overflow-hidden group`}>
            <Image
                src={video.thumbnail}
                alt={video.title || 'Video thumbnail'}
                fill
                className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                sizes={isShort ? "(max-width: 640px) 100vw, 33vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"}
                loading="lazy"
            />
            <Image
                src={video.previewVideo}
                alt={`${video.title || 'Video'} preview`}
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                sizes={isShort ? "(max-width: 640px) 100vw, 33vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"}
                loading="lazy"
            />

            {/* Arrow Button */}
            <Link
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group/arrow"
            >
                <div className="relative">
                    <div className="absolute inset-[-8px] rounded-full bg-white opacity-0 group-hover/arrow:opacity-40 transition-opacity duration-300" />
                    <ArrowUpRight
                        className="w-5 h-5 text-white relative z-10 transition-colors duration-300"
                        strokeWidth={1.5}
                    />
                </div>
            </Link>

            <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100" />
        </div>
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
                        x: fromLeft ? -50 : 50
                    }}
                    animate={{
                        opacity: inView ? 1 : 0,
                        x: inView ? 0 : (fromLeft ? -50 : 50)
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
        <section className="py-8 md:py-16 px-8 md:px-32">
            <div className="container mx-auto px-4">
                {/* Desktop View */}
                <div className="hidden md:block space-y-4 md:space-y-6">
                    {/* First Main Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <div className="md:col-span-2 grid gap-4 md:gap-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <div className="hidden md:block h-full">
                            <VideoCard video={videos[4]} index={4} isShort />
                        </div>
                        <div className="md:col-span-2 grid gap-4 md:gap-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                {videos.slice(5, 7).map((video, index) => (
                                    <VideoCard key={video.id} video={video} index={index + 5} />
                                ))}
                            </div>
                            <VideoCard video={videos[7]} index={7} />
                        </div>
                    </div>
                </div>

                {/* Mobile View with Horizontal Scroll */}
                <div className="md:hidden w-full">
                    <ScrollArea className="w-full whitespace-nowrap">
                        <div className="flex gap-8 pb-4">
                            {/* First Column */}
                            <div className="flex-none w-[600px] flex gap-8">
                                {/* Regular videos */}
                                <div className="w-[300px] space-y-8">
                                    {videos.slice(0, 3).map((video, index) => (
                                        <VideoCard key={video.id} video={video} index={index} />
                                    ))}
                                </div>
                                {/* Short video */}
                                <div className="w-[300px]">
                                    <VideoCard video={videos[3]} index={3} isShort />
                                </div>
                            </div>

                            {/* Second Column */}
                            <div className="flex-none w-[600px] flex gap-8">
                                {/* Regular videos */}
                                <div className="w-[300px] space-y-8">
                                    {videos.slice(5, 8).map((video, index) => (
                                        <VideoCard key={video.id} video={video} index={index + 5} />
                                    ))}
                                </div>
                                {/* Short video */}
                                <div className="w-[300px]">
                                    <VideoCard video={videos[4]} index={4} isShort />
                                </div>
                            </div>
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            </div>
        </section>
    );
}