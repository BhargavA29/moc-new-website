// /src/components/hero.tsx
'use client'

import { motion } from 'framer-motion';

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

            {/* Overlay */}
            <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 to-black/80"
                aria-hidden="true"
            />

            {/* Content */}
            <div className="container mx-auto px-4 md:px-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0.21, 0.47, 0.32, 0.98]
                    }}
                    className="max-w-[90%] sm:max-w-2xl"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#FFC857] leading-tight">
                        We make<br />
                        conversations <br />
                        around cinema
                    </h1>
                </motion.div>
            </div>
        </section>
    );
}