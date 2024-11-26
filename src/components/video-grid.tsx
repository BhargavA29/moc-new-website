import Image from 'next/image'
import Link from 'next/link'

const videos = [
    // First Row Videos (2 landscape videos)
    {
        id: 1,
        thumbnail: '/media/video-grid/shaktimaan.jpg',
        link: 'https://youtube.com/watch?v=O-AQpi1baSk',
        title: 'This is a Nightmare! Shaktimaan, Kanguva - Men of Culture - 156',
        type: 'regular'
    },
    {
        id: 2,
        thumbnail: '/media/video-grid/CID.jpg',
        title: '🙏 Please Don\'t Cancel Us! Men of Culture - 153',
        type: 'regular',
        link: 'https://www.youtube.com/watch?v=KtK6eefsQOU'
    },

    {
        id: 3,
        thumbnail: '/media/video-grid/japan.png',
        title: 'We Are Finally in Japan - Episode 1',
        type: 'regular',
        link: 'https://www.youtube.com/watch?v=Ss8yhFSeiT8'
    },
    {
        id: 4,
        thumbnail: '/media/video-grid/bb3.png',
        title: 'How BHOOL BHULAIYAA 3 was Made😭',
        type: 'short',
        link: 'https://www.youtube.com/shorts/J6GAV9Bgqg8'
    },
    // Second Row Videos
    {
        id: 5,
        thumbnail: '/media/video-grid/kanguva.png',
        link: 'https://youtube.com/watch?v=M5Vp4NbfiSg',
        title: 'They used AI in KANGUVA😧',
        type: 'short'
    },
    {
        id: 6,
        thumbnail: '/media/video-grid/stree2.jpg',
        link: 'https://www.youtube.com/watch?v=_vPBw2ckwVA',
        title: 'Making Of Stree Universe With The Director Himself | Amar Kaushik | Men Of Culture 149',
        type: 'regular'
    },
    {
        id: 7,
        thumbnail: '/media/video-grid/delhi.jpg',
        link: 'https://www.youtube.com/watch?v=s_G-YNcPNqM',
        title: 'Men of Culture Delhi ki Bakc#odi - MEGA vlog',
        type: 'regular'
    },
    {
        id: 8,
        thumbnail: '/media/video-grid/red-hulk.jpg',
        link: 'https://www.youtube.com/watch?v=A88FuOSvWSE',
        title: 'Marvel is Cooking, So are We!😉 Men of culture - 155',
        type: 'regular'
    }

]

export function VideoGrid() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="space-y-6">
                    {/* First Main Row */}
                    <div className="grid grid-cols-3 gap-6 px-8">
                        {/* First 2/3 Section */}
                        <div className="col-span-2 grid gap-6">
                            {/* Top Two Landscape Videos (id 1,2) */}
                            <div className="grid grid-cols-2 gap-6">
                                {videos.slice(0, 2).map((video) => (
                                    <div key={video.id} className="relative aspect-video bg-zinc-800 rounded-lg overflow-hidden">
                                        <Image
                                            src={video.thumbnail}
                                            alt={video.title || 'Video thumbnail'}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Bottom Single Landscape Video (id 3) */}
                            <div className="relative aspect-video bg-zinc-800 rounded-lg overflow-hidden">
                                <Image
                                    src={videos[2].thumbnail}
                                    alt={videos[2].title || 'Video thumbnail'}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Last 1/3 - Single Shorts Video (id 4) */}
                        <div className="relative aspect-[9/16] bg-zinc-800 rounded-lg overflow-hidden">
                            <Image
                                src={videos[3].thumbnail}
                                alt="Short video thumbnail"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Second Main Row */}
                    <div className="grid grid-cols-3 gap-6 px-8">
                        {/* First 1/3 - Single Shorts Video (id 5) */}
                        <div className="relative aspect-[9/16] bg-zinc-800 rounded-lg overflow-hidden">
                            <Image
                                src={videos[4].thumbnail}
                                alt="Short video thumbnail"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Last 2/3 Section */}
                        <div className="col-span-2 grid gap-6">
                            {/* Top Two Landscape Videos (id 6,7) */}
                            <div className="grid grid-cols-2 gap-6">
                                {videos.slice(5, 7).map((video) => (
                                    <div key={video.id} className="relative aspect-video bg-zinc-800 rounded-lg overflow-hidden">
                                        <Image
                                            src={video.thumbnail}
                                            alt={video.title || 'Video thumbnail'}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Bottom Single Landscape Video (id 8) */}
                            <div className="relative aspect-video bg-zinc-800 rounded-lg overflow-hidden">
                                <Image
                                    src={videos[7].thumbnail}
                                    alt={videos[7].title || 'Video thumbnail'}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}