'use client'

import Image from 'next/image'
import Link from 'next/link'

const team = [
    {
        name: 'Badal Yadav',
        role: 'Co-founder',
        image: '/media/badal.png',
        link: '/badal',
    },
    {
        name: 'Mohit Yodha',
        role: 'Co-founder',
        image: '/media/mohit.png',
        link: '/mohit',
    },
    {
        name: 'Priyanshu Jaiswal',
        role: 'Co-founder',
        image: '/media/pj.png',
        link: '/priyanshu',
    }
]

export function Team() {
    return (
        <section className="py-8 px-16 md:py-16 lg:px-32 bg-[#0d1117]">
            <div className="container mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 text-white">People behind the screen</h2>
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
                            <Link
                                href={member.link}
                                className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 mx-auto mb-6 block group overflow-hidden rounded-full"
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="rounded-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                />
                                {/* Overlay with arrow */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center rounded-full">
                                    <svg
                                        className="w-8 h-8 text-white transform transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
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
                            </Link>
                            <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-2 text-white">{member.name}</h3>
                            <p className="text-[#4B5563] text-base sm:text-lg md:text-xl">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}