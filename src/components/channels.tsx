import Image from 'next/image'
import Link from 'next/link'

const channels = [
    {
        id: 1,
        title: 'MoC Podcast',
        description: 'The MoC Podcast covers film. Join us for movie reviews, industry insights, and discussions on new releases and classics. There\'s something for everyone!',
        image: '/media/channels/moc-podcast.png',
        link: '#'
    },
    {
        id: 2,
        title: 'MoC Ultra',
        description: 'The MoC Podcast covers film. Join us for movie reviews, industry insights, and discussions on new releases and classics. There\'s something for everyone!',
        image: '/media/channels/moc-ultra.png',
        link: '#'
    },
    {
        id: 3,
        title: 'MoC Highlights',
        description: 'The MoC Podcast covers film. Join us for movie reviews, industry insights, and discussions on new releases and classics. There\'s something for everyone!',
        image: '/media/channels/moc-highlights.png',
        link: '#'
    }
]

export function Channels() {
    return (
        <section className="py-16 bg-[#0d1117] px-8">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl font-bold mb-8">Our Channels</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {channels.map((channel) => (
                        <div key={channel.id} className="bg-black/50 rounded-lg p-6 backdrop-blur-sm">
                            <Image
                                src={channel.image}
                                alt={channel.title}
                                width={300}
                                height={169}
                                className="rounded-lg mb-4 w-full"
                            />
                            <h3 className="text-xl font-bold mb-2">{channel.title}</h3>
                            <p className="text-gray-400 mb-4">{channel.description}</p>
                            <Link
                                href={channel.link}
                                className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2"
                            >
                                Visit channel
                                <span className="sr-only">Visit {channel.title}</span>
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 