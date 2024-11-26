import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY
});

const CHANNEL_IDS = {
    podcast: 'UCEr-xMKBUqPuXtYVHRUkCSw',
    ultra: 'UCpqmGX1gqHwEcVE_7Qr_dUQ',
    highlights: 'UCpqmGX1gqHwEcVE_7Qr_dUQ'
};

export async function GET() {
    try {
        const response = await youtube.channels.list({
            id: Object.values(CHANNEL_IDS),
            part: ['statistics']
        });

        const totalStats = response.data.items?.reduce((acc, channel) => {
            const stats = channel.statistics;
            return {
                viewCount: acc.viewCount + Number(stats?.viewCount || 0),
                subscriberCount: acc.subscriberCount + Number(stats?.subscriberCount || 0),
                videoCount: acc.videoCount + Number(stats?.videoCount || 0),
            };
        }, { viewCount: 0, subscriberCount: 0, videoCount: 0 });

        return NextResponse.json(totalStats);
    } catch (err: unknown) {
        // Log the error for debugging
        console.error('YouTube API Error:', err);

        return NextResponse.json(
            { error: 'Failed to fetch stats' },
            { status: 500 }
        );
    }
}
