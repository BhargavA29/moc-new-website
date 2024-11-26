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
        <section className="py-16 bg-[#0d1117] backdrop-blur-sm px-8">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold mb-12">Our numbers do <br />the talking</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                            <div className="text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 