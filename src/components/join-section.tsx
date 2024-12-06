// /src/components/join-section.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MotionWrapper } from './motion-wrapper'

export function JoinSection() {
    return (
        <section className="p-[4vh] md:p-[8vh] px-[4vw] md:px-[8vw]  bg-[#0d1117]">
            <div className="mx-auto px-[3vw]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[6vh]">
                    {/* Left Section */}
                    <MotionWrapper delay={0.1}>
                        <div className="space-y-[2vh] md:my-[6vh]">
                            <h2 className="text-[6vw] md:text-center lg:text-left md:text-[2.7vw] font-bold">Join the party</h2>
                            <p className="text-[4vw] text-left md:text-[1.2vw] text-gray-300">
                                Explore our engaging content on YouTube and connect with our
                                vibrant community on Discord. <br className='hidden md:block' /> Join us today!
                            </p>
                            <div className="space-y-[2vh]">
                                <Link
                                    href="https://www.youtube.com/@menofculture"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-[1vw] text-[4vw] w-fit"
                                >
                                    <div className="flex items-center gap-[1vw] hover:scale-105 transition-transform duration-200">
                                        <div className="hidden md:block rounded-full p-[1vh]">
                                            <Image
                                                src="https://img.icons8.com/?size=100&id=37325&format=png&color=FFFFFF"
                                                alt="YouTube"
                                                width={0}
                                                height={0}
                                                style={{ width: '3vw', height: '3vw' }}
                                                unoptimized
                                            />
                                        </div>
                                        <div className="block md:hidden rounded-full p-[1vh]">
                                            <Image
                                                src="https://img.icons8.com/?size=100&id=37325&format=png&color=FFFFFF"
                                                alt="YouTube"
                                                width={0}
                                                height={0}
                                                style={{ width: '5vw', height: '5vw' }}
                                                unoptimized
                                            />
                                        </div>
                                        <span className="text-[#FFA500] text-[3.5vw] md:text-[1.5vw]">YouTube</span>
                                        <svg className="w-[2vw] h-[2vw] text-[#FFA500]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </Link>
                                <Link
                                    href="https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-[1vw] text-[4vw] w-fit"
                                >
                                    <div className="flex items-center gap-[1vw] hover:scale-105 transition-transform duration-200">
                                        <div className="hidden md:block rounded-full p-[1vh]">
                                            <Image
                                                src="https://img.icons8.com/?size=100&id=23029&format=png&color=FFFFFF"
                                                alt="Snapchat"
                                                width={0}
                                                height={0}
                                                style={{ width: '3vw', height: '3vw' }}
                                                unoptimized
                                            />
                                        </div>
                                        <div className="block md:hidden rounded-full p-[1vh]">
                                            <Image
                                                src="https://img.icons8.com/?size=100&id=23029&format=png&color=FFFFFF"
                                                alt="Snapchat"
                                                width={0}
                                                height={0}
                                                style={{ width: '5vw', height: '5vw' }}
                                                unoptimized
                                            />
                                        </div>
                                        <span className="text-[#FFA500] text-[3.5vw] md:text-[1.5vw]">Snapchat</span>
                                        <svg className="w-[2vw] h-[2vw] text-[#FFA500]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </Link>
                                <Link
                                    href="https://discord.gg/GAnTMVurm4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-[1vw] text-[4vw] w-fit"
                                >
                                    <div className="flex items-center gap-[1vw] hover:scale-105 transition-transform duration-200">
                                        <div className="hidden md:block rounded-full p-[1vh]">
                                            <Image
                                                src="https://img.icons8.com/?size=100&id=25627&format=png&color=FFFFFF"
                                                alt="Discord"
                                                width={0}
                                                height={0}
                                                style={{ width: '3vw', height: '3vw' }}
                                                unoptimized
                                            />
                                        </div>
                                        <div className="block md:hidden rounded-full p-[1vh]">
                                            <Image
                                                src="https://img.icons8.com/?size=100&id=25627&format=png&color=FFFFFF"
                                                alt="Discord"
                                                width={0}
                                                height={0}
                                                style={{ width: '5vw', height: '5vw' }}
                                                unoptimized
                                            />
                                        </div>
                                        <span className="text-[#FFA500] text-[3.5vw] md:text-[1.5vw]">Discord</span>
                                        <svg className="w-[2vw] h-[2vw] text-[#FFA500]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </MotionWrapper>

                    {/* Right Section */}
                    <MotionWrapper delay={0.2}>
                        <div className="space-y-[2vh] bg-zinc-800/50 rounded-[2vh] p-[3vh] md:px-[4vh] md:py-[4vh]  md:mt-[2vh]">
                            <h2 className="text-[6vw] md:text-[2.7vw] font-bold">Connect</h2>
                            <p className="text-[4vw] md:text-[1.2vw] text-gray-300">
                                Explore our engaging content on YouTube and connect with our
                                vibrant community on Discord. <br className='hidden md:block' /> Join us today!
                            </p>
                            <div className="pt-[2vh]">
                                <Link
                                    href="mailto:contact@menofculture.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-[1vw] text-[4vw] w-fit"
                                >
                                    <div className="flex items-center gap-[1vw] hover:scale-105 transition-transform duration-200">
                                        <div className='block md:hidden'>
                                            <Image
                                                src="https://img.icons8.com/?size=100&id=rUgzXdXFnhmg&format=png&color=FFFFFF"
                                                alt="Email"
                                                width={0}
                                                height={0}
                                                style={{ width: '5vw', height: '5vw' }}
                                                unoptimized
                                            />
                                        </div>
                                        <div className='hidden md:block'>
                                            <Image
                                                src="https://img.icons8.com/?size=100&id=rUgzXdXFnhmg&format=png&color=FFFFFF"
                                                alt="Email"
                                                width={0}
                                                height={0}
                                                style={{ width: '3vw', height: '3vw' }}
                                                unoptimized
                                            />
                                        </div>
                                        <span className="text-[#FFA500] text-[3.5vw] md:text-[1.5vw]">Email us</span>
                                        <svg className="w-[2vw] h-[2vw] text-[#FFA500]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
            </div>
        </section>
    )
}
