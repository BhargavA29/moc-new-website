"use client";

import { motion } from 'framer-motion';
import { Bangers } from 'next/font/google';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const bangers = Bangers({
    weight: '400',
    subsets: ['latin'],
});

const inter = Inter({
    subsets: ['latin'],
});

interface Position {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
}

interface ProfileHeroProps {
    firstName: string;
    lastName: string;
    profileImage: string;
    roles: string[];
    firstNamePosition: Position;
    lastNamePosition: Position;
}

export function ProfileHero({
    firstName,
    lastName,
    profileImage,
    roles,
    firstNamePosition,
    lastNamePosition,
}: ProfileHeroProps) {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#0d1117]">
            {/* Desktop Layout */}
            <div className="hidden md:block relative min-h-screen">
                <div className="container mx-auto relative h-screen">
                    {/* Image Container */}
                    <motion.div 
                        className="absolute top-1/2 pt-16 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative w-[500px] h-[500px] group">
                            <Image
                                src={profileImage}
                                alt="Profile"
                                fill
                                className="object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                                priority
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className={`${inter.className} text-center mt-8`}
                        >
                            {roles.map((role, index) => (
                                <p key={index} className="text-white/80 text-xl mb-2">
                                    {role}
                                </p>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* First Name with custom position */}
                    <motion.h1
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`${bangers.className} text-[120px] xl:text-[150px] text-[#FFC857] absolute z-10`}
                        style={firstNamePosition}
                    >
                        {firstName}
                    </motion.h1>

                    {/* Last Name with custom position */}
                    <motion.h1
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`${bangers.className} text-[120px] xl:text-[150px] text-[#FFC857] absolute z-10`}
                        style={lastNamePosition}
                    >
                        {lastName}
                    </motion.h1>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center px-4 py-16 min-h-screen">
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`${bangers.className} text-6xl text-[#FFC857] mb-8`}
                >
                    {firstName}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full max-w-[300px] aspect-square mb-8"
                >
                    <Image
                        src={profileImage}
                        alt="Profile"
                        fill
                        className="object-cover rounded-full"
                        priority
                    />
                </motion.div>

                <motion.h1
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`${bangers.className} text-6xl text-[#FFC857] mb-8`}
                >
                    {lastName}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`${inter.className} text-center`}
                >
                    {roles.map((role, index) => (
                        <p key={index} className="text-white/80 text-lg mb-2">
                            {role}
                        </p>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 