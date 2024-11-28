// /src/components/join-section.tsx
import Link from 'next/link'
import Image from 'next/image'

export function JoinSection() {
    return (
        <section className="p-16 md:px-16 lg:px-32 bg-[#0d1117]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    {/* Left Section */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-center lg:text-left md:text-5xl font-bold">Join the party</h2>
                        <p className="text-lg text-left md:text-2xl text-gray-300">
                            Explore our engaging content on YouTube and connect with our
                            vibrant community on Discord. Join us today!
                        </p>
                        <div className="space-y-6">
                            <Link
                                href="https://www.youtube.com/@menofculturepodcast"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-xl group"
                            >
                                <div className="rounded-full group-hover:bg-[#FF0000] p-2 transition-all duration-300">
                                    <Image
                                        src="https://img.icons8.com/?size=100&id=37325&format=png&color=FFFFFF"
                                        alt="YouTube"
                                        height={40}
                                        width={40}
                                    />
                                </div>
                                <span className="text-[#FFA500] text-lg md:text-xl group-hover:text-[#FF0000] transition-all duration-300">YouTube</span>
                                <svg className="w-5 h-5 text-[#FFA500] group-hover:text-[#FF0000] transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-xl group"
                            >
                                <div className="rounded-full group-hover:bg-[#fffc00] p-2 transition-all duration-300">
                                    <Image
                                        src="https://img.icons8.com/?size=100&id=23029&format=png&color=FFFFFF"
                                        alt="Snapchat"
                                        height={40}
                                        width={40}
                                    />
                                </div>
                                <span className="text-[#FFA500] text-lg md:text-xl group-hover:text-[#fffc00] transition-all duration-300">Snapchat</span>
                                <svg className="w-5 h-5 text-[#FFA500] group-hover:text-[#fffc00] transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="https://discord.gg/GAnTMVurm4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-xl group"
                            >
                                <div className="rounded-full group-hover:bg-[#5865F2] p-2 transition-all duration-300">
                                    <Image
                                        src="https://img.icons8.com/?size=100&id=25627&format=png&color=FFFFFF"
                                        alt="Discord"
                                        height={40}
                                        width={40}
                                    />
                                </div>
                                <span className="text-[#FFA500] text-lg md:text-xl group-hover:text-[#5865F2] transition-all duration-300">Discord</span>
                                <svg className="w-5 h-5 text-[#FFA500] group-hover:text-[#5865F2] transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="space-y-6 bg-zinc-800/50 rounded-3xl p-6 md:p-12">
                        <h2 className="text-3xl md:text-5xl font-bold">Connect</h2>
                        <p className="text-l md:text-2xl text-gray-300">
                            Explore our engaging content on YouTube and connect with our
                            vibrant community on Discord. Join us today!
                        </p>
                        <div className="pt-6">
                            <Link
                                href="mailto:contact@menofculture.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-xl"
                            >
                                <div>
                                    <Image
                                        src="https://img.icons8.com/?size=100&id=rUgzXdXFnhmg&format=png&color=FFFFFF"
                                        alt="Email"
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <span className="text-[#FFA500] text-lg md:text-xl">Email us</span>
                                <svg className="w-5 h-5 text-[#FFA500]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
