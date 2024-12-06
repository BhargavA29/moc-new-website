'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const channels = [
    {
        id: 1,
        title: 'MoC Podcast',
        description: 'The MoC Podcast covers film. Join us for movie reviews, industry insights, and discussions on new releases and classics. There\'s something for everyone!',
        image: '/media/channels/moc-podcast.png',
        link: 'https://www.youtube.com/@menofculturepodcast',
    },
    {
        id: 2,
        title: 'MoC Ultra',
        description: 'The MoC Podcast covers film. Join us for movie reviews, industry insights, and discussions on new releases and classics. There\'s something for everyone!',
        image: '/media/channels/moc-ultra.png',
        link: 'https://www.youtube.com/@MenofCultureUltra',
    },
    {
        id: 3,
        title: 'MoC Highlights',
        description: 'The MoC Podcast covers film. Join us for movie reviews, industry insights, and discussions on new releases and classics. There\'s something for everyone!',
        image: '/media/channels/moc-highlights.png',
        link: 'https://www.youtube.com/@menofculturehighlights',
    }
]

function VideoCard({ channel }: { channel: typeof channels[0] }) {
    return (
        <>
            {/* Mobile View - Unchanged */}
            <Link
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block md:hidden"
            >
                <div className="bg-black/50 rounded-[2vh] overflow-hidden">
                    <div className="relative">
                        <Image
                            src={channel.image}
                            alt={channel.title}
                            width={500}
                            height={100}
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-[2vh]">
                            <h3 className="text-[4vw] font-bold text-white mb-[1vh]">{channel.title}</h3>
                            <p className="text-[3vw] text-white/80 line-clamp-2 mb-[1vh]">{channel.description}</p>
                            <div className="flex items-center justify-between text-[#1E90FF] text-[3vw]">
                                <span>Visit channel</span>
                                <svg
                                    className="w-[4vw] h-[4vw]"
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
                </div>
            </Link>

            {/* New Desktop Design - With synchronized hover effects */}
            <Link
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block group"
            >
                <div className="bg-black/50 rounded-[1vh] overflow-hidden">
                    <div className="relative">
                        <div className="overflow-hidden">
                            <Image
                                src={channel.image}
                                alt={channel.title}
                                width={500}
                                height={100}
                                className="w-full h-auto transition-transform duration-200 ease-out group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-[2vh]">
                            <h3 className="text-[1.8vw] font-bold text-white mb-[1vh]">{channel.title}</h3>

                            {/* Description with Tooltip */}
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <p className="text-[1vw] text-white/80 line-clamp-2 mb-[1vh] cursor-pointer">
                                            {channel.description}
                                        </p>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        className="bg-zinc-900/95 backdrop-blur-sm border-zinc-800 text-white/90 text-[0.9vw] max-w-[30vw] p-[1vh]"
                                        side="top"
                                    >
                                        {channel.description}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <div className="flex items-center justify-between">
                                <span className="text-[#1E90FF] text-[1.2vw] font-medium transition-opacity duration-200 group-hover:opacity-80">
                                    Visit channel
                                </span>
                                <svg
                                    className="w-[2vw] h-[2vw] ml-[1vw] text-[#1E90FF] transform transition-transform duration-200 group-hover:-translate-y-[0.3vh] group-hover:translate-x-[0.3vh]"
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
                </div>
            </Link>
        </>
    );
}

export function Channels() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section ref={ref} className="py-[8vh] md:py-[16vh] bg-[#0d1117] px-[4vw] md:px-[8vw] overflow-hidden">
            <div className="mx-auto">
                <motion.h2
                    className="text-[7vw] md:text-[4vw] font-bold text-white mb-[6vh] px-[4vw] md:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Our Channels
                </motion.h2>

                {/* Mobile View - Stays the same */}
                <div className="md:hidden flex flex-col gap-[3vh] px-[4vw]">
                    {channels.map((channel) => (
                        <motion.div
                            key={channel.id}
                            initial={{
                                opacity: 0,
                                y: 50
                            }}
                            animate={inView ? {
                                opacity: 1,
                                y: 0
                            } : {}}
                            transition={{
                                duration: 0.8,
                                delay: channel.id * 0.2,
                                ease: [0.21, 0.47, 0.32, 0.98]
                            }}
                        >
                            <VideoCard channel={channel} />
                        </motion.div>
                    ))}
                </div>

                {/* Desktop View - Updated Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-y-[6vh] gap-x-[3vw] px-[4vw] md:px-0">
                    {channels.map((channel) => (
                        <motion.div
                            key={channel.id}
                            initial={{
                                opacity: 0,
                                y: 50
                            }}
                            animate={inView ? {
                                opacity: 1,
                                y: 0
                            } : {}}
                            transition={{
                                duration: 0.8,
                                delay: channel.id * 0.2,
                                ease: [0.21, 0.47, 0.32, 0.98]
                            }}
                        >
                            <VideoCard channel={channel} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
