'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function MotionWrapper({
    children,
    delay = 0,
    direction = 'up'
}: {
    children: React.ReactNode,
    delay?: number,
    direction?: 'up' | 'down' | 'left' | 'right'
}) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const directions = {
        up: [50, 0],
        down: [-50, 0],
        left: [50, 0],
        right: [-50, 0]
    }

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                y: direction === 'up' || direction === 'down' ? directions[direction][0] : 0,
                x: direction === 'left' || direction === 'right' ? directions[direction][0] : 0
            }}
            animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : (direction === 'up' || direction === 'down' ? directions[direction][0] : 0),
                x: inView ? 0 : (direction === 'left' || direction === 'right' ? directions[direction][0] : 0)
            }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
        >
            {children}
        </motion.div>
    )
} 