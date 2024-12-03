'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
        <div className="bg-black/50 rounded-lg p-5 md:p-6 backdrop-blur-sm">
            <Image
                src={channel.image}
                alt={channel.title}
                width={300}
                height={169}
                className="rounded-lg mb-4 w-full transform transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-xl font-bold mb-3">{channel.title}</h3>
            <p className="text-gray-400 mb-4 text-base">{channel.description}</p>
            <Link
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFC857] hover:text-[#ffd475] text-xl flex justify-between gap-2 group"
            >
                <span>Visit Channel</span>
                <svg
                    className="w-8 h-8 transform transition-transform duration-200 group-hover:-translate-y-1"
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
            </Link>
        </div>
    );
}

export function Channels() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section ref={ref} className="py-16 md:py-24 bg-[#0d1117] px-8 md:px-16 overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-6xl font-bold mb-12 md:px-16 md:mb-16">Our Channels</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 md:max-w-6xl md:mx-auto">
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
