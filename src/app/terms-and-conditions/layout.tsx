import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms & Conditions | Men of Culture',
    description: 'Terms & Conditions for Men of Culture',
}

export default function TermsAndConditionsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
} 