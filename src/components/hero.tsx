// /src/components/hero.tsx
'use client'

import { motion } from 'framer-motion';
import { Bangers } from 'next/font/google';
import Marquee from 'react-fast-marquee';

const bangers = Bangers({
    weight: '400',
    subsets: ['latin'],
});

export function Hero() {
    return (
        <section className="bg-[#0d1117] relative min-h-[60vh] md:min-h-screen flex items-end pb-8 md:pb-24 pt-12 md:pt-16">
            {/* Background Video with Fade In */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/media/backdrop.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Modified Overlay - Bottom to Top gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            {/* Marquee Text */}
            <div className="absolute bottom-6 w-full z-10">
                <Marquee
                    speed={150} // Adjust this value to control speed (lower = slower)
                    gradient={false}
                    className="overflow-hidden"
                >
                    <div className={`${bangers.className} text-[#FFC857] text-4xl md:text-9xl whitespace-nowrap flex items-center`}>
                        <span>We make conversations around cinema</span>
                        <span className="mx-20"> </span> {/* Dot separator with spacing */}
                        <span>We make conversations around cinema</span>
                        <span className="mx-20"> </span>
                    </div>
                </Marquee>
            </div>
        </section>
    );
}