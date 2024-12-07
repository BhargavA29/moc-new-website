// /src/components/hero.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Bangers } from 'next/font/google';
import Marquee from 'react-fast-marquee';
import { Clapperboard } from 'lucide-react';

const bangers = Bangers({
    weight: '400',
    subsets: ['latin'],
});

export function Hero() {
    const [marqueeSpeed, setMarqueeSpeed] = useState(150);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const updateMarqueeSpeed = () => {
            if (window.innerWidth >= 1920) {
                setMarqueeSpeed(200);
            } else if (window.innerWidth >= 1280) {
                setMarqueeSpeed(175);
            } else {
                setMarqueeSpeed(150);
            }
        };

        // Debounce resize event for better performance
        let resizeTimer: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(updateMarqueeSpeed, 100);
        };

        updateMarqueeSpeed();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimer);
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.preload = 'auto';

            const handleCanPlay = () => {
                setIsVideoLoaded(true);
            };

            video.addEventListener('canplay', handleCanPlay);

            // Fallback if video takes too long
            const timeoutId = setTimeout(() => {
                if (!isVideoLoaded) {
                    setIsVideoLoaded(true);
                }
            }, 2000);

            return () => {
                video.removeEventListener('canplay', handleCanPlay);
                clearTimeout(timeoutId);
            };
        }
    }, [isVideoLoaded]);

    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-end overflow-hidden">
            {/* Background Video with Fade In */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full"
            >
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    poster="/media/backdrop-poster.jpg"
                >
                    <source
                        src="/media/backdrop.mp4"
                        type="video/mp4"
                    />
                </video>
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            {/* Marquee Text - Fixed Sizing for md and above */}
            <div className="absolute bottom-[8vh] md:bottom-[1vh] w-full z-20">
                <Marquee speed={marqueeSpeed} gradient={false} className="overflow-hidden">
                    <div
                        className={`${bangers.className} text-[#FFC857] text-[clamp(2rem,5vw,4rem)] whitespace-nowrap flex items-center`}
                    >
                        {/* First span with original fill styling */}
                        <span className="mx-[2vw] text-[20vw] md:text-[8vw]">We make conversations around cinema</span>

                        {/* Clapperboard separator with fixed sizing */}
                        <span className="mx-[2vw]">
                            <Clapperboard
                                className='hidden md:block'
                                color="#FFC857"
                                width={0}
                                height={0}
                                style={{ width: '5vw', height: '5vw' }}
                                strokeWidth={1}
                            />
                            <Clapperboard
                                className='block md:hidden'
                                color="#FFC857"
                                width={0}
                                height={0}
                                style={{ width: '12vw', height: '12vw' }}
                                strokeWidth={1}
                            />
                        </span>

                        {/* Second span with improved visibility */}
                        <span
                            className="text-[20vw] md:text-[8vw] mx-[2vw]"
                            style={{
                                WebkitTextStroke: '2px #FFC857',
                                color: 'transparent',
                            }}
                        >
                            We make conversations around cinema
                        </span>

                        {/* Clapperboard separator with fixed sizing */}
                        <span className="mx-[2vw]">
                            <Clapperboard
                                className='hidden md:block'
                                color="#FFC857"
                                width={0}
                                height={0}
                                style={{ width: '5vw', height: '5vw' }}
                                strokeWidth={1}
                            />
                            <Clapperboard
                                className='block md:hidden'
                                color="#FFC857"
                                width={0}
                                height={0}
                                style={{ width: '12vw', height: '12vw' }}
                                strokeWidth={1}
                            />
                        </span>
                    </div>
                </Marquee>
            </div>
        </section>
    );
}
