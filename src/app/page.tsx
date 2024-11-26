import { Hero } from '@/components/hero'
import { VideoGrid } from '@/components/video-grid'
import { Channels } from '@/components/channels'
import { Team } from '@/components/team'
import { JoinSection } from '@/components/join-section'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { StatsSection } from '@/components/stats-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white">
      <Navbar />
      <Hero />
      <VideoGrid />
      <Channels />
      <StatsSection />
      <Team />
      <JoinSection />
      <Footer />
    </main>
  )
} 