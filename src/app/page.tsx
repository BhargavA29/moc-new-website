'use client';

import { Suspense, lazy } from 'react';
import { LoadingScreen } from "@/components/loading-screen";
import { useImageLoader } from "@/hooks/useImageLoader";
import { AnimatePresence } from "framer-motion";
import { Navbar } from '@/components/navbar'

// Lazy load components
const Hero = lazy(() => import('@/components/hero').then(mod => ({ default: mod.Hero })));
const VideoGrid = lazy(() => import('@/components/video-grid').then(mod => ({ default: mod.VideoGrid })));
const Channels = lazy(() => import('@/components/channels').then(mod => ({ default: mod.Channels })));
const Team = lazy(() => import('@/components/team').then(mod => ({ default: mod.Team })));
const JoinSection = lazy(() => import('@/components/join-section').then(mod => ({ default: mod.JoinSection })));
const Footer = lazy(() => import('@/components/footer').then(mod => ({ default: mod.Footer })));
const StatsSection = lazy(() => import('@/components/stats-section').then(mod => ({ default: mod.StatsSection })));
const MotionWrapper = lazy(() => import('@/components/motion-wrapper').then(mod => ({ default: mod.MotionWrapper })));

export default function Home() {
    const mediaUrls = [
        '/media/backdrop.mp4',
        '/media/video-grid/shaktimaan.jpg',
        'https://res.cloudinary.com/drag8k9na/image/upload/v1732782857/moc-website-preview-gifs/bpszjueyad3yjuhql7uj.gif',
        '/media/video-grid/CID.jpg',
        'https://res.cloudinary.com/drag8k9na/image/upload/v1732782879/moc-website-preview-gifs/i5j97nxal0bma9ekvoty.gif',
        '/media/video-grid/japan.png',
        'https://res.cloudinary.com/drag8k9na/image/upload/v1732782870/moc-website-preview-gifs/pxkhrstrr51onuqimvbe.gif',
        '/media/video-grid/bb3.png',
        'https://res.cloudinary.com/drag8k9na/image/upload/v1732782858/moc-website-preview-gifs/boytzxp1rle6ww8uxaxf.gif',
        '/media/video-grid/kanguva.png',
        'https://res.cloudinary.com/drag8k9na/image/upload/v1732782886/moc-website-preview-gifs/cd9vu10vfpdf6qdpw4o0.gif',
        '/media/video-grid/stree2.jpg',
        'https://res.cloudinary.com/drag8k9na/image/upload/v1732782870/moc-website-preview-gifs/u7uw6af2ah3msgfdvauj.gif',
        '/media/video-grid/delhi.jpg',
        'https://res.cloudinary.com/drag8k9na/image/upload/v1732782878/moc-website-preview-gifs/rl3xcjkga7dyxjxpt82h.gif',
        '/media/video-grid/red-hulk.jpg',
        'https://res.cloudinary.com/drag8k9na/image/upload/v1732782859/moc-website-preview-gifs/rb8vvwb8mqqb1agryju3.gif',
        '/media/channels/moc-podcast.png',
        '/media/channels/moc-ultra.png',
        '/media/channels/moc-highlights.png',
        '/media/badal.png',
        '/media/mohit.png',
        '/media/pj.png',
    ];

    const isLoaded = useImageLoader(mediaUrls);

    return (
        <>
            <AnimatePresence>
                {!isLoaded && <LoadingScreen />}
            </AnimatePresence>

            {isLoaded && (
                <main className="min-h-screen bg-[#0d1117] font-[Inter] text-white">


                    {/* Critical content - loads first */}
                    <Suspense fallback={<LoadingScreen />}>
                        <Navbar />
                        <Hero />
                    </Suspense>

                    {/* Primary content group */}
                    <Suspense fallback={<LoadingScreen />}>
                        <MotionWrapper>
                            <VideoGrid />
                        </MotionWrapper>
                        <MotionWrapper delay={0.2}>
                            <Channels />
                        </MotionWrapper>
                    </Suspense>

                    {/* Secondary content group */}
                    <Suspense fallback={<LoadingScreen />}>
                        <MotionWrapper delay={0.3}>
                            <StatsSection />
                        </MotionWrapper>
                        <MotionWrapper delay={0.4}>
                            <Team />
                        </MotionWrapper>
                    </Suspense>

                    {/* Footer content group */}
                    <Suspense fallback={<LoadingScreen />}>
                        <MotionWrapper delay={0.5}>
                            <JoinSection />
                        </MotionWrapper>
                        <MotionWrapper>
                            <Footer />
                        </MotionWrapper>
                    </Suspense>
                </main>
            )}
        </>
    );
}
