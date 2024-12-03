import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mohit | Men of Culture',
    description: 'Founder - ComicVerse | Co-Founder - MoC',
}

export default function MohitLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
} 