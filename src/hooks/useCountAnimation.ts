import { useState, useEffect } from 'react';

export function useCountAnimation(endValue: number, duration: number, isVisible: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) {
            setCount(0);
            return;
        }

        // Don't animate if the end value is 0
        if (endValue === 0) {
            setCount(0);
            return;
        }

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) {
                startTime = currentTime;
            }

            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                // Round to 2 decimal places during animation to prevent glitchy numbers
                const currentValue = endValue * Math.min(progress, 1);
                setCount(Math.round(currentValue * 100) / 100);
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(endValue);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [endValue, duration, isVisible]);

    return count;
} 