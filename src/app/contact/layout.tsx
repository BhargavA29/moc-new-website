import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us | Men of Culture',
    description: 'Get in touch with Men of Culture',
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
} 