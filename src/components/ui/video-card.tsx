'use client';

import { Card } from './card';
import { Button } from './button';
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';

interface VideoCardProps {
    title: string;
    thumbnail: string;
    videoUrl: string;
    day?: string;
}

export function VideoCard({ title, thumbnail, videoUrl, day }: VideoCardProps) {
    return (
        <Card className="group relative overflow-hidden">
            <div className="relative aspect-video">
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                    <Button
                        variant="ghost"
                        size="lg"
                        className="text-white"
                        onClick={() => window.open(videoUrl, '_blank')}
                    >
                        <PlayCircle className="mr-2 h-6 w-6" />
                        Watch Now
                    </Button>
                </div>
                {day && (
                    <div className="absolute top-2 left-2 bg-red-600 px-2 py-1 text-sm text-white rounded">
                        {day}
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg">{title}</h3>
            </div>
        </Card>
    );
} 