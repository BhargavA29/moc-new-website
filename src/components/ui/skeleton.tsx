'use client';

import React from 'react';

export function VideoGridSkeleton() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="flex flex-col space-y-2">
                        {/* Video thumbnail skeleton */}
                        <div className="w-full h-48 bg-gray-700 rounded-lg animate-pulse" />

                        {/* Title skeleton */}
                        <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4" />

                        {/* Description skeleton */}
                        <div className="h-3 bg-gray-700 rounded animate-pulse w-1/2" />
                    </div>
                ))}
            </div>
        </div>
    );
}
