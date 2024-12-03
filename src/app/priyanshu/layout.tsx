import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Priyanshu | Men of Culture',
    description: 'Founder - PJ Explained | Co-Founder - MoC',
}

export default function PriyanshuLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
} 