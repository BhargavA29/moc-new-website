'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Youtube } from 'lucide-react'
import { useState } from 'react'

const team = [
    {
        name: 'Badal Yadav',
        role: 'Co-founder',
        image: '/media/badal.png',
        ytChannel: 'https://www.youtube.com/@BnfTV'
    },
    {
        name: 'Mohit Yodha',
        role: 'Co-founder',
        image: '/media/mohit.png',
        ytChannel: 'https://www.youtube.com/@comicverseog'
    },
    {
        name: 'Priyanshu Jaiswal',
        role: 'Co-founder',
        image: '/media/pj.png',
        ytChannel: 'https://www.youtube.com/@PJExplained'
    }
]

export function Team() {
    const [hoveredMember, setHoveredMember] = useState<string | null>(null);
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

    return (
        <section className="py-8 px-8 md:py-16 md:px-16 lg:px-32 bg-[#0d1117]">
            <div className="container mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white">People behind the screen</h2>
                <p className="text-base sm:text-lg md:text-xl text-[#4B5563] mb-8 md:mb-16">
                    The channel is led by 3 independent YouTubers who
                    <br className="hidden md:block" />
                    have a total following of more than 4 million subscribers
                    <br className="hidden md:block" />
                    across channels
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-2">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="text-center"
                        >
                            <div
                                className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 mx-auto mb-6 group"
                                onMouseEnter={() => setHoveredMember(member.name)}
                                onMouseLeave={() => setHoveredMember(null)}
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="rounded-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50 group-hover:blur-[2px]"
                                />
                                {hoveredMember === member.name && (
                                    <Link
                                        href={member.ytChannel}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-center"
                                        onMouseEnter={() => setHoveredIcon(member.name)}
                                        onMouseLeave={() => setHoveredIcon(null)}
                                    >
                                        <div className={`p-3 rounded-full ${hoveredIcon === member.name ? 'bg-white/40' : ''
                                            } transition-all duration-300`}>
                                            <Youtube className="w-5 h-5 text-red-600" strokeWidth={1.5} />
                                        </div>
                                    </Link>
                                )}
                            </div>
                            <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-2 text-white">{member.name}</h3>
                            <p className="text-[#4B5563] text-base sm:text-lg md:text-xl">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 