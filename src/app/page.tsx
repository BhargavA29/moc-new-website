'use client';

import { Suspense, lazy, useState, useEffect } from 'react';
import { LoadingScreen } from "@/components/loading-screen";
import { AnimatePresence } from "framer-motion";
import { Navbar } from '@/components/navbar';



// Lazy load components
const Hero = lazy(() => import('@/components/hero').then(mod => ({ default: mod.Hero })));
const VideoGrid = lazy(() => import('@/components/video-grid').then(mod => ({ default: mod.VideoGrid })));
const Channels = lazy(() => import('@/components/channels').then(mod => ({ default: mod.Channels })));
const Team = lazy(() => import('@/components/team').then(mod => ({ default: mod.Team })));
const JoinSection = lazy(() => import('@/components/join-section').then(mod => ({ default: mod.JoinSection })));
const Footer = lazy(() => import('@/components/footer').then(mod => ({ default: mod.Footer })));
const StatsSection = lazy(() => import('@/components/stats-section').then(mod => ({ default: mod.StatsSection })));

export default function Home() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const video = document.createElement('video');
        video.src = '/media/backdrop.mp4';
        video.preload = 'metadata';

        video.onloadedmetadata = () => {
            setIsVideoLoaded(true);
        };

        // Fallback in case video fails to load
        video.onerror = () => {
            setIsVideoLoaded(true);
        };
    }, []);

    return (
        <>
            <AnimatePresence>
                {!isVideoLoaded && <LoadingScreen />}
            </AnimatePresence>

            <main className="min-h-screen bg-[#0d1117] font-[Inter] text-white">
                {/* Critical content - loads first */}
                <Suspense fallback={<LoadingScreen />}>
                    <Navbar />
                    <Hero />
                </Suspense>

                {/* Video Grid Section with its own loading state */}
                <Suspense>
                    <VideoGrid />
                </Suspense>

                {/* Remaining content */}
                <Suspense fallback={null}>
                    <Channels />
                    <StatsSection />
                    <Team />
                    <JoinSection />
                    <Footer />
                </Suspense>
            </main>
        </>
    );
}
