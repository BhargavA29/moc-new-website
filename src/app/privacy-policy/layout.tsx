import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | Men of Culture',
    description: 'Privacy Policy for Men of Culture',
}

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
} 