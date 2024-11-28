import { Hero } from '@/components/hero'
import { VideoGrid } from '@/components/video-grid'
import { Channels } from '@/components/channels'
import { Team } from '@/components/team'
import { JoinSection } from '@/components/join-section'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { StatsSection } from '@/components/stats-section'
import { MotionWrapper } from '@/components/motion-wrapper'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white">
      <Navbar />
      <Hero />
      <MotionWrapper>
        <VideoGrid />
      </MotionWrapper>
      <MotionWrapper delay={0.2}>
        <Channels />
      </MotionWrapper>
      <MotionWrapper delay={0.3}>
        <StatsSection />
      </MotionWrapper>
      <MotionWrapper delay={0.4}>
        <Team />
      </MotionWrapper>
      <MotionWrapper delay={0.5}>
        <JoinSection />
      </MotionWrapper>
      <MotionWrapper>
        <Footer />
      </MotionWrapper>
    </main>
  )
} 