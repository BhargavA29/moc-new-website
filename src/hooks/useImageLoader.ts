'use client';

import { useState, useEffect, useRef } from 'react';

export function useImageLoader(urls: string[]) {
    const [mediaLoaded, setMediaLoaded] = useState(false);
    const loadedUrlsRef = useRef(new Set<string>());
    const mountedRef = useRef(true);
    const loadingRef = useRef(false);
    const previousUrlsRef = useRef<string[]>([]);

    useEffect(() => {
        mountedRef.current = true;

        // Skip if urls haven't changed
        if (urls.every((url, i) => url === previousUrlsRef.current[i]) && 
            urls.length === previousUrlsRef.current.length) {
            return;
        }

        previousUrlsRef.current = urls;

        const loadMedia = async () => {
            // Prevent multiple simultaneous loading attempts
            if (loadingRef.current) {
                return;
            }

            console.log('Starting to load media files...');
            console.log('Total files to load:', urls.length);

            // Reset on new urls
            loadedUrlsRef.current = new Set();
            setMediaLoaded(false);
            loadingRef.current = true;

            if (!urls.length) {
                console.log('No URLs provided, setting as loaded');
                setMediaLoaded(true);
                loadingRef.current = false;
                return;
            }

            try {
                await Promise.all(
                    urls.map((url) => {
                        return new Promise((resolve) => {
                            if (!url) {
                                resolve(null);
                                return;
                            }

                            // Handle videos
                            if (url.endsWith('.mp4') || url.endsWith('.webm')) {
                                const video = document.createElement('video');
                                video.preload = 'metadata';
                                video.src = url;
                                
                                video.onloadedmetadata = () => {
                                    if (!mountedRef.current) return;
                                    loadedUrlsRef.current.add(url);
                                    if (loadedUrlsRef.current.size === urls.length) {
                                        setMediaLoaded(true);
                                        loadingRef.current = false;
                                    }
                                    resolve(url);
                                };
                                
                                video.onerror = () => {
                                    if (!mountedRef.current) return;
                                    loadedUrlsRef.current.add(url);
                                    if (loadedUrlsRef.current.size === urls.length) {
                                        setMediaLoaded(true);
                                        loadingRef.current = false;
                                    }
                                    resolve(null);
                                };
                                return;
                            }

                            // Handle images
                            const img = new Image();
                            img.src = url;
                            
                            img.onload = () => {
                                if (!mountedRef.current) return;
                                loadedUrlsRef.current.add(url);
                                if (loadedUrlsRef.current.size === urls.length) {
                                    setMediaLoaded(true);
                                    loadingRef.current = false;
                                }
                                resolve(url);
                            };
                            
                            img.onerror = () => {
                                if (!mountedRef.current) return;
                                loadedUrlsRef.current.add(url);
                                if (loadedUrlsRef.current.size === urls.length) {
                                    setMediaLoaded(true);
                                    loadingRef.current = false;
                                }
                                resolve(null);
                            };
                        });
                    })
                );

                if (mountedRef.current) {
                    setMediaLoaded(true);
                    loadingRef.current = false;
                }
            } catch (error) {
                console.error('Error loading media:', error);
                if (mountedRef.current) {
                    setMediaLoaded(true);
                    loadingRef.current = false;
                }
            }
        };

        loadMedia();

        return () => {
            mountedRef.current = false;
        };
    }, [urls]);

    return mediaLoaded;
} 