'use client';

import { ProfileLayout } from "@/components/profile/ProfileLayout";
import { ProfileHero } from "@/components/profile/ProfileHero";
import { ContentGrid } from "@/components/profile/ContentGrid";
import { ProfileStats } from "@/components/profile/ProfileStats";
import { SocialLinks } from "@/components/profile/SocialLinks";

import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/loading-screen";
import { useImageLoader } from "@/hooks/useImageLoader";
import { ProfileQuote } from "@/components/profile/ProfileQuote";

const contentItems = [
    {
        image: "/media/content-grid/white-bg.png",
        caption: "Creating engaging content that connects with viewers through storytelling and analysis",
        isImageLeft: true
    },
    {
        image: "/media/content-grid/white-bg.png",
        caption: "Breaking down complex movie plots and theories in an easy-to-understand way",
        isImageLeft: false
    },
    {
        image: "/media/content-grid/white-bg.png",
        caption: "Building a community of movie enthusiasts who love deep discussions and analysis",
        isImageLeft: true
    }
];

const socialLinks = {
    links: [
        { platform: "youtube" as const, url: "https://www.youtube.com/@comicverseog", name: "ComicVerse" },
        { platform: "instagram" as const, url: "https://www.instagram.com/comicverseyt/", name: "ComicVerseYT" },
        { platform: "twitter" as const, url: "https://x.com/comicverseyt", name: "MohitVerse" }
    ]
};

export default function MohitPage() {
    const imageUrls = [
        'https://pbs.twimg.com/profile_images/1677944567155552257/9RIHfcOd_400x400.jpg',
        // Add all image URLs used in the profile page
    ];

    const imagesLoaded = useImageLoader(imageUrls);
    return (
        <>
            <AnimatePresence>
                {!imagesLoaded && <LoadingScreen />}
            </AnimatePresence>

            {imagesLoaded && (
                <ProfileLayout>
                    <ProfileHero
                        coverImage="/media/banner.jpg"
                        profileImage="https://pbs.twimg.com/profile_images/1677944567155552257/9RIHfcOd_400x400.jpg"
                        name="MOHIT YODHA"
                        title="Founder - ComicVerse | Co-Founder - MoC"
                    />
                    <ProfileQuote
                        quote="My fans love the genuine reactions I give about movies, and my passion for storytelling"
                    />
                    <ContentGrid items={contentItems} />
                    <ProfileStats channelId="UCKQ5Jj35sjTmJigRtlCPhVQ" />
                    <SocialLinks {...socialLinks} />
                </ProfileLayout>
            )}
        </>
    );
} 