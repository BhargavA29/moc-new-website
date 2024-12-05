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
        { platform: "youtube" as const, url: "https://www.youtube.com/@PJExplained", name: "PJ Explained" },
        { platform: "instagram" as const, url: "https://www.instagram.com/pjexplained", name: "PJ Explained" },
        { platform: "twitter" as const, url: "https://x.com/pjexplained", name: "PJ Explained" }
    ]
};

export default function PriyanshuPage() {
    const imageUrls = [
        'https://s3-alpha-sig.figma.com/img/e59d/6f52/c004cbea24c5d6df79a0c8c60d28246b?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IkOyETMj4PuGOY6bhRE1-R5vwa2s7Mex3cABQFCNoe2EzAXtbU2fZAzPmiZvdZy5KywJdoX61IrZ0WPVvfaU0hvqxE~c1HSuSIGKoSPn50J9kxKTiwgTUZqc-Yut~Bn56s-h09geQ3No9pSd3h4LA64U~nN5H7pVqilKs5-P7Z~wDs7WJI36TC1MEoWulrBQFKcJ3axcfdREedIIQ5acQSVGzcTFm~WYTLoTPWUYrCwIF~4a76iumbU-H9w3fdtWg3UhBmkovO42Bkjqzdo2KM8i9Givplh8e9aafkocPuCyix8RlV07D5tIcVhWG-qcKZJ0mtbmPgEir~UfkPBbow__',

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
                        firstName="PRIYANSHU"
                        lastName="JAISWAL"
                        profileImage="https://s3-alpha-sig.figma.com/img/e59d/6f52/c004cbea24c5d6df79a0c8c60d28246b?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IkOyETMj4PuGOY6bhRE1-R5vwa2s7Mex3cABQFCNoe2EzAXtbU2fZAzPmiZvdZy5KywJdoX61IrZ0WPVvfaU0hvqxE~c1HSuSIGKoSPn50J9kxKTiwgTUZqc-Yut~Bn56s-h09geQ3No9pSd3h4LA64U~nN5H7pVqilKs5-P7Z~wDs7WJI36TC1MEoWulrBQFKcJ3axcfdREedIIQ5acQSVGzcTFm~WYTLoTPWUYrCwIF~4a76iumbU-H9w3fdtWg3UhBmkovO42Bkjqzdo2KM8i9Givplh8e9aafkocPuCyix8RlV07D5tIcVhWG-qcKZJ0mtbmPgEir~UfkPBbow__"
                        roles={["Founder - PJ Explained", "Co-Founder - MoC"]}
                        lastNamePosition={{ bottom: '16%', right: '18%' }}
                        firstNamePosition={{ top: '10%', left: '8%' }}
                    />
                    <ProfileQuote
                        quote="My fans love the genuine reactions I give about movies, and my passion for storytelling"
                    />
                    <ContentGrid items={contentItems} />
                    <ProfileStats channelId="UCWkHlUiYLeRSIMP8yM7rxxg" />
                    <SocialLinks   {...socialLinks} />
                </ProfileLayout>
            )}
        </>
    );
} 