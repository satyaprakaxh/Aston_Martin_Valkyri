"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";
import { TOTAL_FRAMES, getFramePath } from "@/data/carData";

interface ValkyriCanvasProps {
    scrollYProgress: MotionValue<number>;
}

export default function ValkyriCanvas({ scrollYProgress }: ValkyriCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef<number>(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const rafRef = useRef<number | null>(null);

    // Preload all frames
    useEffect(() => {
        let loadedCount = 0;
        const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

        const onLoad = () => {
            loadedCount++;
            if (loadedCount === TOTAL_FRAMES) {
                imagesRef.current = images;
                setIsLoaded(true);
                // Draw the first frame
                drawFrame(0);
            }
        };

        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = getFramePath(i + 1);
            img.onload = onLoad;
            img.onerror = onLoad; // count errors too to avoid hanging
            images[i] = img;
        }

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Canvas drawing with contain behavior
    const drawFrame = useCallback((frameIndex: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const images = imagesRef.current;
        if (!images.length) return;

        const clampedIndex = Math.max(0, Math.min(frameIndex, TOTAL_FRAMES - 1));
        const img = images[clampedIndex];
        if (!img || !img.complete || !img.naturalWidth) return;

        const dpr = window.devicePixelRatio || 1;
        const displayWidth = canvas.clientWidth;
        const displayHeight = canvas.clientHeight;

        // Only resize canvas buffer if dimensions changed
        if (
            canvas.width !== displayWidth * dpr ||
            canvas.height !== displayHeight * dpr
        ) {
            canvas.width = displayWidth * dpr;
            canvas.height = displayHeight * dpr;
            ctx.scale(dpr, dpr);
        }

        // Clear
        ctx.clearRect(0, 0, displayWidth, displayHeight);

        // Object-fit: cover behavior
        const imgAspect = img.naturalWidth / img.naturalHeight;
        const canvasAspect = displayWidth / displayHeight;

        let drawWidth: number, drawHeight: number, drawX: number, drawY: number;

        if (imgAspect > canvasAspect) {
            // Image is wider — fit height, crop sides
            drawHeight = displayHeight;
            drawWidth = displayHeight * imgAspect;
            drawX = (displayWidth - drawWidth) / 2;
            drawY = 0;
        } else {
            // Image is taller — fit width, crop top/bottom
            drawWidth = displayWidth;
            drawHeight = displayWidth / imgAspect;
            drawX = 0;
            drawY = (displayHeight - drawHeight) / 2;
        }

        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    }, []);

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            drawFrame(currentFrameRef.current);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [drawFrame]);

    // Map scroll progress to frame index — only redraw when frame changes
    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const newFrame = Math.min(
            Math.floor(v * TOTAL_FRAMES),
            TOTAL_FRAMES - 1
        );
        if (newFrame !== currentFrameRef.current) {
            currentFrameRef.current = newFrame;
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => drawFrame(newFrame));
        }
    });

    return (
        <div className="absolute inset-0 w-full h-full">
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
                style={{ background: "#000" }}
            />
            {/* Loading overlay */}
            {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-10">
                    <div className="w-12 h-12 border border-pagani-gold/40 flex items-center justify-center rotate-45 mb-6 animate-pulse">
                        <span className="font-display text-xs text-pagani-gold -rotate-45 tracking-[0.15em]">
                            AM
                        </span>
                    </div>
                    <p className="font-display text-[10px] tracking-[0.4em] text-white/40 uppercase">
                        Loading Experience
                    </p>
                    <div className="mt-4 w-32 h-[1px] bg-carbon-gray overflow-hidden">
                        <div className="h-full bg-pagani-gold/60 animate-shimmer" style={{ width: '60%' }} />
                    </div>
                </div>
            )}
        </div>
    );
}
