import { ReactNode } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MotionWrapper } from '@/components/motion-wrapper';

interface ProfileLayoutProps {
    children: ReactNode;
}

export function ProfileLayout({ children }: ProfileLayoutProps) {
    return (
        <div className="min-h-screen bg-[#0d1117] overflow-hidden">
            <Navbar />
            <main>
                {children}
            </main>
            <MotionWrapper>
                <Footer />
            </MotionWrapper>
        </div>
    );
} 