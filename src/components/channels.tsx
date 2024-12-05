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
        <div className="bg-black/50 rounded-[1vh] p-[2vh] md:p-[3vh] backdrop-blur-sm">
            <Image
                src={channel.image}
                alt={channel.title}
                width={300}
                height={169}
                className="rounded-[1vh] mb-[2vh] w-full h-auto transform transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-[4vw] md:text-[2vw] font-bold mb-[1vh]">{channel.title}</h3>
            <p className="text-gray-400 mb-[2vh] text-[3vw] md:text-[1.5vw]">{channel.description}</p>
            <Link
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E90FF] text-[3vw] md:text-[1.5vw] flex justify-between items-center group"
            >
                <span>Visit Channel</span>
                <svg
                    className="w-[4vw] h-[4vw] md:w-[2vw] md:h-[2vw] transform transition-transform duration-200 group-hover:-translate-y-[0.5vh]"
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
        <section ref={ref} className="py-[8vh] md:py-[12vh] bg-[#0d1117] px-[4vw] md:px-[8vw] overflow-hidden">
            <div className="mx-auto">
                <h2 className="text-[8vw] md:text-[4vw] font-bold mb-[2vh] px-[2vw] md:px-0 md:mb-[6vh]">Our Channels</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vh] px-[4vw] md:px-0 md:gap-[3vw]">
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
