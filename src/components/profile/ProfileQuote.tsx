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
        <section className="bg-[#0d1117] py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="max-w-6xl mx-auto"
                >
                    <p className={`${inter.className} text-7xl text-white font-bold italic text-left leading-normal`}>
                        &ldquo;{quote}&rdquo;
                    </p>
                </motion.div>
            </div>
        </section>
    );
} 