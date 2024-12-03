import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Badal | Men of Culture',
    description: 'Founder - BnfTV | Co-Founder - MoC',
}

export default function BadalLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
} 