export function Stats() {
    const stats = [
        { value: '450+', label: 'hours video content' },
        { value: '200+', label: 'bn content views' },
        { value: '31', label: 'mn subscribers' },
        { value: '25k+', label: 'active community' },
    ]

    return (
        <section className="py-16 bg-zinc-900">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8">Our numbers do the talking</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div className="text-4xl font-bold text-yellow-400">{stat.value}</div>
                            <div className="text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 