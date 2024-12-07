'use client';
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image";
interface ProfileHeroProps {
    coverImage: string;
    profileImage: string;
    name: string;
    title: string;
}



export function ProfileHero({ coverImage, profileImage, name, title }: ProfileHeroProps) {
    return (
        <section className="pb-16 font-inter overflow-hidden">
            {/* Cover Image with fade-in */}
            <div className="pt-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px]"
                >
                    <Image
                        src={coverImage}
                        alt="Cover"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1117]/80" />
                </motion.div>

                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col items-center text-center px-4">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Avatar className="w-48 h-48 sm:w-48 sm:h-48 -mt-20 border-4 border-[#0d1117]">
                            <AvatarImage src={profileImage} alt={name} />
                            <AvatarFallback>{name?.[0] || '?'}</AvatarFallback>
                        </Avatar>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-6 space-y-2"
                    >
                        <h1 className="text-3xl font-black text-[#FFC857]">
                            {name}
                        </h1>
                        <p className="font-medium text-sm sm:text-lg text-[#4B9CD3]">
                            {title}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="max-w-[2000px] mx-auto  md:px-16 -mt-24 hidden md:block">
                <div className="flex items-center gap-8 mb-16">
                    <motion.div>
                        <Avatar className="w-48 h-48 lg:w-64 lg:h-64 border-4 border-[#0d1117]">
                            <AvatarImage src={profileImage} alt={name} />
                            <AvatarFallback>{name?.[0] || '?'}</AvatarFallback>
                        </Avatar>
                    </motion.div>
                    <motion.div className="flex flex-col mt-16">
                        <h1 className="text-5xl md:text-7xl font-black text-[#FFC857]">
                            {name}
                        </h1>
                        <p className="text-xl lg:text-2xl text-[#4B9CD3] mt-4 font-medium">
                            {title}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}