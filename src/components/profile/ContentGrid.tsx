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
        <section ref={ref} className="py-16 px-4 md:px-16 md:py-32">
            <motion.div 
                className="container mx-auto px-4 md:px-16 space-y-16 md:space-y-32"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`flex flex-col ${item.isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                            } items-center gap-8 md:gap-16`}
                    >
                        <div className="w-full md:w-1/2">
                            <div className="relative aspect-video">
                                <Image
                                    src={item.image}
                                    alt={item.caption}
                                    fill
                                    className="object-cover rounded-xl"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <p className="text-xl md:text-3xl text-white/80 font-inter">
                                {item.caption}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
} 