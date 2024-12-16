'use client';

import React from 'react';

export function VideoGridSkeleton() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="flex flex-col space-y-2">
                        <div className="w-full h-48 bg-gray-700 rounded-lg animate-pulse" />
                        <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4" />
                        <div className="h-3 bg-gray-700 rounded animate-pulse w-1/2" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export function ProfileSkeleton() {
    return (
        <div className="animate-pulse">
            {/* Banner Skeleton */}
            <div className="h-[40vh] bg-gray-700" />

            {/* Profile Image Skeleton */}
            <div className="w-[300px] h-[300px] rounded-full bg-gray-700 mx-auto mt-4" />
        </div>
    );
}
