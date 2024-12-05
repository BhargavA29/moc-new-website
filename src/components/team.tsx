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
        <section className="py-[4vh] px-[4vw] md:py-[8vh] md:px-[8vw] bg-[#0d1117]">
            <div className="px-[2vw] md:px-0 mx-auto">
                <h2 className="text-[5vw] sm:text-[5vw] md:text-[4vw] font-bold  text-white">People behind the screen</h2>
                <p className="text-[3.5vw] sm:text-[3vw] md:text-[1.3vw] text-[#4B5563] mb-[4vh] md:mb-[8vh]">
                    The channel is led by 3 independent YouTubers who
                    <br className="hidden md:block" />
                    have a total following of more than 4 million subscribers
                    <br className="hidden md:block" />
                    across channels
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1vh] md:gap-[1vw]">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="text-center"
                        >
                            <Link
                                href={member.link}
                                className="relative w-[40vw] h-[40vw]  md:w-[20vw] md:h-[20vw] mx-auto mb-[3vh] block group overflow-hidden rounded-full"
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
                                        className="w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw] text-white transform transition-all duration-300 translate-y-[2vh] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
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
                            <h3 className="font-bold text-[4vw] sm:text-[3vw] md:text-[2vw] mb-[1vh] text-white">{member.name}</h3>
                            <p className="text-[#4B5563] text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw]">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}