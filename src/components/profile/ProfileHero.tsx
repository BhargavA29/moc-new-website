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
                        className="absolute top-1/2 pt-[8vh] left-1/2 -translate-x-1/2 -translate-y-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative w-[33vw] h-[33vw] max-w-[600px] max-h-[600px] group">
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
                            className={`${inter.className} text-center mt-[4vh]`}
                        >
                            {roles.map((role, index) => (
                                <p key={index} className="text-white/80 text-[1.3vw] mb-[1vh]">
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
                        className={`${bangers.className} text-[10vw] text-[#FFC857] absolute z-10`}
                        style={firstNamePosition}
                    >
                        {firstName}
                    </motion.h1>

                    {/* Last Name with custom position */}
                    <motion.h1
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`${bangers.className} text-[10vw] text-[#FFC857] absolute z-10`}
                        style={lastNamePosition}
                    >
                        {lastName}
                    </motion.h1>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center px-[4vw] py-[16vh] min-h-screen">


                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full max-w-[80vw] aspect-square mb-[1vh]"
                >
                    <Image
                        src={profileImage}
                        alt="Profile"
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105 rounded-full"
                        priority
                    />
                </motion.div>
                <div className='flex gap-[3vw]  '>
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`${bangers.className} text-[13vw] text-[#FFC857] `}
                    >
                        {firstName}
                    </motion.h1>

                    <motion.h1
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`${bangers.className} text-[13vw] text-[#FFC857] mb-[4vh]`}
                    >
                        {lastName}
                    </motion.h1>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`${inter.className} text-center`}
                >
                    {roles.map((role, index) => (
                        <p key={index} className="text-white/80 text-[4vw] mb-[1vh]">
                            {role}
                        </p>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 