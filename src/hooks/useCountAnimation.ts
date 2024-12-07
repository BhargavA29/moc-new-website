import { useState, useEffect } from 'react';

export function useCountAnimation(endValue: number, duration: number, isVisible: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) {
            setCount(0);
            return;
        }

        if (endValue === 0) {
            setCount(0);
            return;
        }

        let startTime: number;
        let animationFrame: number;

        const easeOutQuart = (x: number): number => {
            return 1 - Math.pow(1 - x, 4);
        };

        const animate = (currentTime: number) => {
            if (!startTime) {
                startTime = currentTime;
            }

            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            if (progress < 1) {
                const easedProgress = easeOutQuart(progress);
                const currentValue = endValue * easedProgress;

                // For numbers less than 100, keep one decimal
                // For larger numbers, round to whole numbers
                const roundedValue = endValue < 100
                    ? Math.round(currentValue * 10) / 10
                    : Math.round(currentValue);

                setCount(roundedValue);
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