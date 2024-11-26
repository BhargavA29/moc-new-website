import Image from 'next/image'

const team = [
    {
        name: 'Badal Yadav',
        role: 'Co-founder',
        image: '/media/badal.png'
    },
    {
        name: 'Mohit Yodha',
        role: 'Co-founder',
        image: '/media/mohit.png'
    },
    {
        name: 'Priyanshu Jaiswal',
        role: 'Co-founder',
        image: '/media/pj.png'
    }
]

export function Team() {
    return (
        <section className="py-8 md:py-16 px-4 md:px-16 bg-[#0d1117]">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">People behind the screen</h2>
                <p className="text-lg md:text-xl text-[#4B5563] mb-8 md:mb-16">
                    The channel is led by 3 independent YouTubers who
                    <br className="hidden md:block" />
                    have a total following of more than 4 million subscribers
                    <br className="hidden md:block" />
                    across channels
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-2">
                    {team.map((member) => (
                        <div key={member.name} className="text-center">
                            <div className="relative w-48 h-48 md:w-72 md:h-72 mx-auto mb-6">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <h3 className="font-bold text-xl md:text-2xl mb-2 text-white">{member.name}</h3>
                            <p className="text-[#4B5563] text-base md:text-lg">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 