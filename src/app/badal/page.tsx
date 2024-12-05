'use client';

import { ProfileLayout } from "@/components/profile/ProfileLayout";
import { ProfileHero } from "@/components/profile/ProfileHero";
import { ContentGrid } from "@/components/profile/ContentGrid";
import { ProfileStats } from "@/components/profile/ProfileStats";
import { SocialLinks } from "@/components/profile/SocialLinks";

import { useImageLoader } from "@/hooks/useImageLoader";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/loading-screen";
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
        { platform: "youtube" as const, url: "https://www.youtube.com/@BnfTV", name: "BnfTV" },
        { platform: "instagram" as const, url: "https://www.instagram.com/badal_bnftv/", name: "Badal Yadav" },
        { platform: "twitter" as const, url: "https://x.com/badal_bnftv", name: "Badal: The Cloud 🌩️" }
    ]
};

export default function BadalPage() {
    const imageUrls = [
        'https://pbs.twimg.com/profile_images/1742384377475280896/nCKMYPvB_400x400.jpg'
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
                        profileImage="https://pbs.twimg.com/profile_images/1742384377475280896/nCKMYPvB_400x400.jpg"
                        firstName="BADAL"
                        lastName="YADAV"
                        roles={["Founder - BnfTV", "Co-Founder - MoC"]}
                        firstNamePosition={{ top: '10%', left: '22%' }}
                        lastNamePosition={{ bottom: '15%', right: '25%' }}
                    />
                    <ProfileQuote
                        quote="My fans love the genuine reactions I give about movies, and my passion for storytelling"
                    />
                    <ContentGrid items={contentItems} />
                    <ProfileStats channelId="UCUinnqDgIsNFleLdkZKbP-w" />
                    <SocialLinks   {...socialLinks} />
                </ProfileLayout>
            )}
        </>
    );
}