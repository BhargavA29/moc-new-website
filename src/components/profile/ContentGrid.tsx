"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ContentGridProps {
    items: {
        image: string;
        caption: string;
        isImageLeft: boolean;
    }[];
}

export function ContentGrid({ items }: ContentGridProps) {
    return (
        <section className="py-16 md:py-32">
            <div className="container mx-auto px-4 md:px-16 space-y-16 md:space-y-32">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
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
            </div>
        </section>
    );
} 