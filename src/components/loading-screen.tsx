'use client';

import { motion } from 'framer-motion';
import localFont from 'next/font/local';

const bangersFont = localFont({ 
    src: '../../public/fonts/Bangers-Regular.ttf',
    display: 'swap',
});

export function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
            <div className="relative">
                <motion.div
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="w-32 h-32 border-4 border-yellow-400 rounded-full border-t-transparent"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`${bangersFont.className} absolute inset-0 flex items-center justify-center text-4xl text-yellow-400`}
                >
                    MoC
                </motion.div>
            </div>
        </motion.div>
    );
}