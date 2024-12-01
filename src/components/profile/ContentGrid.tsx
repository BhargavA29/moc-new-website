import { motion } from "framer-motion";
import Image from "next/image";

interface ContentItem {
    image: string;
    caption: string;
    isImageLeft: boolean;
}

interface ContentGridProps {
    items: ContentItem[];
}

export function ContentGrid({ items }: ContentGridProps) {
    return (
        <section className="py-16 container mx-auto px-8 md:px-16 overflow-hidden">
            <div className="space-y-8 md:space-y-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`grid md:grid-cols-2 md:gap-4 gap-8 items-center`}
                    >
                        {/* Image */}
                        <motion.div
                            initial={{
                                x: index % 2 === 0 ? -100 : 100,
                                opacity: 0
                            }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`${!item.isImageLeft ? 'md:order-2' : ''}`}
                        >
                            <Image
                                src={item.image}
                                alt={item.caption}
                                className="w-full h-[400px] object-cover rounded-2xl"
                            />
                        </motion.div>

                        {/* Caption */}
                        <motion.div
                            initial={{
                                x: index % 2 === 0 ? 100 : -100,
                                opacity: 0
                            }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={`${!item.isImageLeft ? 'md:order-1' : ''}`}
                        >
                            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-inter">
                                {item.caption}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
} 