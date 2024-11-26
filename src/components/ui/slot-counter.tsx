'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface SlotCounterProps {
    value: number;
    duration?: number;
}

export function SlotCounter({ value, duration = 2 }: SlotCounterProps) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    const spring = useSpring(0, {
        mass: 1,
        stiffness: 100,
        damping: 30
    });

    const display = useTransform(spring, (current) =>
        Math.floor(current).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [spring, value, isInView]);

    return (
        <motion.span
            ref={ref}
            onViewportEnter={() => setIsInView(true)}
            className="tabular-nums"
        >
            {display}
        </motion.span>
    );
} 