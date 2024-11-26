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
        <section className="py-16 px-8 bg-[#0d1117]">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold mb-4 text-white">People behind the screen</h2>
                <p className="text-xl text-[#4B5563] mb-16">
                    The channel is led by 3 independent YouTubers who<br />
                    have a total following of more than 4 million subscribers<br />
                    across channels
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {team.map((member) => (
                        <div key={member.name} className="text-center">
                            <div className="relative w-64 h-64 mx-auto mb-6">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <h3 className="font-bold text-2xl mb-2 text-white">{member.name}</h3>
                            <p className="text-[#4B5563] text-lg">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 