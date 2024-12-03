'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function MotionWrapper({
    children,
    delay = 0
}: {
    children: React.ReactNode,
    delay?: number
}) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 15 }}
            animate={{ 
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 15
            }}
            transition={{
                duration: 0.3,
                delay: delay,
                ease: "easeOut"
            }}
        >
            {children}
        </motion.div>
    )
} 