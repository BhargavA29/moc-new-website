"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface ContentGridProps {
    items: {
        image: string;
        caption: string;
        isImageLeft: boolean;
    }[];
}

export function ContentGrid({ items }: ContentGridProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section ref={ref} className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="space-y-12 sm:space-y-16 lg:space-y-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`flex flex-col ${item.isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                } items-center gap-8 lg:gap-12 max-w-[1400px] mx-auto`}
                        >
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-video rounded-xl overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.caption}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <p className="text-base sm:text-lg lg:text-xl text-white/80">
                                    {item.caption}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 