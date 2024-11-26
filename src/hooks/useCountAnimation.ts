import { useState, useEffect, useCallback } from 'react';

export function useCountAnimation(endValue: number, duration: number = 2000, isVisible: boolean = false) {
    const [count, setCount] = useState(0);

    const easeOutQuart = (x: number): number => {
        return 1 - Math.pow(1 - x, 4);
    };

    const animate = useCallback(() => {
        const startTime = Date.now();

        const updateCount = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Use easing function for smoother animation
            const easedProgress = easeOutQuart(progress);
            const currentValue = Math.floor(endValue * easedProgress);

            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            }
        };

        requestAnimationFrame(updateCount);
    }, [endValue, duration]);

    useEffect(() => {
        if (isVisible) {
            setCount(0); // Reset to 0
            const timeout = setTimeout(() => {
                animate();
            }, 100); // Small delay to ensure reset is visible

            return () => clearTimeout(timeout);
        } else {
            setCount(0);
        }
    }, [isVisible, animate]);

    return count;
} 