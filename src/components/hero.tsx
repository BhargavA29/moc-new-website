// /src/components/hero.tsx
export function Hero() {
    return (
        <section className="bg-[#0d1117] relative min-h-[80vh] md:min-h-screen flex items-end pb-12 md:pb-24 pt-16">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/media/backdrop.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 to-black/80"
                aria-hidden="true"
            />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl pl-4 md:pl-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFC857] leading-tight">
                        We make<br />
                        conversations <br />
                        around cinema
                    </h1>
                </div>
            </div>
        </section>
    )
}