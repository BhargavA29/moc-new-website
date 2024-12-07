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
                <h2 className="md:hidden font-black text-2xl text-[#FFC857] font-inter">PEOPLE BEHIND THE SCREEN</h2>
                <h2 className="hidden md:block font-bold text-[4vw] text-white font-inter">People Behind The Screen</h2>
                <p className="hidden md:block text-[1.3vw] text-[#4B5563] mb-[8vh]">
                    The channel is led by 3 independent YouTubers who
                    <br />
                    have a total following of more than 4 million subscribers
                    <br />
                    across channels
                </p>
                <div className="flex flex-col md:grid md:grid-cols-3 gap-[5vh] md:gap-[1vw] mt-[5vh] md:mt-0">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="flex items-center md:block md:text-center"
                        >
                            <Link
                                href={member.link}
                                className="relative w-[25vw] h-[25vw] md:w-[20vw] md:h-[20vw] md:mx-auto md:mb-[3vh] block group overflow-hidden rounded-full"
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
                            <div className="ml-[4vw] md:ml-0">
                                <h3 className="font-bold text-[5vw] md:text-[2vw] mb-[1vh] text-white font-inter">{member.name}</h3>
                                <p className="text-[#56799C] text-[4vw] md:text-[1.5vw] font-inter font-medium">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}