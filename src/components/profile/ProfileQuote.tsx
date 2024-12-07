"use client";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    style: 'italic',
    weight: '800',
});

interface ProfileQuoteProps {
    quote: string;
}

export function ProfileQuote({ quote }: ProfileQuoteProps) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <section className="bg-[#0d1117] py-12 sm:py-16 lg:py-20">
            <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="max-w-[90%] md:max-w-[80%] lg:max-w-[1200px] mx-auto"
                >
                    <p className={`${inter.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold italic text-left leading-normal`}>
                        &ldquo;{quote}&rdquo;
                    </p>
                </motion.div>
            </div>
        </section>
    );
} 