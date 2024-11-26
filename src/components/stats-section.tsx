'use client';

import { useEffect, useState } from 'react';
import { SlotCounter } from '@/components/ui/slot-counter';

interface Stats {
    viewCount: number;
    subscriberCount: number;
    videoCount: number;
}

const stats = [
    { value: '450+', label: 'hours video content' },
    { value: '200+', label: 'bn content views' },
    { value: '31', label: 'mn subscribers' },
    { value: '25k+', label: 'active community' },
]

export function StatsSection() {
    return (
        <section className="relative py-32 px-16 bg-[#0d1117]">
            <div
                className="absolute inset-0 bg-gradient-to-t from-[#1E2736] to-[#0d1117]"
                aria-hidden="true"
            />

            <div className="container mx-auto px-16 relative z-10">
                <h2 className="text-6xl font-bold mb-16 text-white">
                    Our numbers do<br />
                    the talking
                </h2>

                <div className="grid grid-cols-4 gap-8">
                    <div>
                        <div className="text-[56px] font-bold text-[#FFC857] ">450+</div>
                        <div className="text-[56px] font-bold text-[#FFC857] mb-4">hours</div>
                        <div className="text-[#A1A1AA] text-2xl">video content</div>
                    </div>

                    <div>
                        <div className="text-[56px] font-bold text-[#FFC857]">200+</div>
                        <div className="text-[56px] font-bold text-[#FFC857] mb-4">bn</div>
                        <div className="text-[#A1A1AA] text-2xl">content views</div>
                    </div>

                    <div>
                        <div className="text-[56px] font-bold text-[#FFC857]">3.1</div>
                        <div className="text-[56px] font-bold text-[#FFC857] mb-4">mn</div>
                        <div className="text-[#A1A1AA] text-2xl">subscribers</div>
                    </div>

                    <div>
                        <div className="text-[56px] font-bold text-[#FFC857]">25k+</div>
                        <div className="text-[56px] font-bold text-[#FFC857] mb-4">active</div>
                        <div className="text-[#A1A1AA] text-2xl">community</div>
                    </div>
                </div>
            </div>
        </section>
    )
} 