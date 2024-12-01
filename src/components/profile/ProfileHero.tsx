"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image";

interface ProfileHeroProps {
    coverImage: string;
    profileImage: string;
    name: string;
    title: string;
    quote: string;
}

export function ProfileHero({ coverImage, profileImage, name, title, quote }: ProfileHeroProps) {
    return (
        <section className="overflow-hidden">
            {/* Cover Image with fade-in */}
            <div className="pt-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-[300px] md:h-[400px]"
                >
                    <Image
                        src={coverImage}
                        alt="Cover"
                        fill
                        className="object-cover md:object-[0px_-90px]"
                        priority
                    />
                    {/* Add a subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1117]/80" />
                </motion.div>

                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col items-center text-center">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Avatar className="w-48 h-48 mt-[-100px] border-4 border-[#0d1117]">
                            <AvatarImage src={profileImage} alt={name} />
                            <AvatarFallback>{name[0]}</AvatarFallback>
                        </Avatar>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-6 space-y-2"
                    >
                        <h1 className="text-4xl font-bold text-[#FFC857] font-inter">
                            {name}
                        </h1>
                        <p className="text-lg text-[#4B9CD3] font-inter">
                            {title}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="container mx-auto px-16 -mt-24 hidden md:block">
                <div className="flex items-center gap-6 mb-8">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Avatar className="w-32 h-32 md:w-[300px] md:h-[300px] border-4 border-[#0d1117]">
                            <AvatarImage src={profileImage} alt={name} />
                            <AvatarFallback>{name[0]}</AvatarFallback>
                        </Avatar>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col mt-16"
                    >
                        <h1 className="text-4xl md:text-8xl font-bold text-[#FFC857] font-inter">
                            {name}
                        </h1>
                        <p className="text-lg md:text-2xl text-[#4B9CD3] mt-2 font-inter">
                            {title}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Quote - Slides in from bottom */}
            {quote && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="my-32 flex justify-center items-center"
                >
                    <blockquote className="text-3xl md:text-7xl font-bold text-white max-w-5xl font-inter leading-normal md:leading-tight text-center px-4 md:px-0">
                        &ldquo;{quote}&rdquo;
                    </blockquote>
                </motion.div>
            )}
        </section>
    );
} 