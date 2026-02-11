"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ValkyriCanvas from "./ValkyriCanvas";
import { carData } from "@/data/carData";

export default function AstonMartinValkyri() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    /* ─── Phase opacities (0→1 mapped to scroll ranges) ─── */

    // HERO: 0%–33%
    const heroOpacity = useTransform(scrollYProgress, [0, 0.22, 0.28, 0.33], [1, 1, 0.5, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.33], [0, -60]);

    // DESIGN: 33%–66%
    const designOpacity = useTransform(
        scrollYProgress,
        [0.28, 0.36, 0.56, 0.62],
        [0, 1, 1, 0]
    );
    const designY = useTransform(scrollYProgress, [0.28, 0.36, 0.56, 0.66], [40, 0, 0, -40]);

    // ENGINE: 66%–100%
    const engineOpacity = useTransform(
        scrollYProgress,
        [0.60, 0.68, 0.90, 1],
        [0, 1, 1, 1]
    );
    const engineY = useTransform(scrollYProgress, [0.60, 0.68], [40, 0]);

    // Vignette intensity
    const vignetteOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.4, 0.6]);

    // Scroll indicator
    const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

    return (
        <section ref={containerRef} className="relative" style={{ height: "500vh" }} id="overview">
            {/* Sticky viewport */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Canvas background */}
                <ValkyriCanvas scrollYProgress={scrollYProgress} />

                {/* Vignette overlay */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        opacity: vignetteOpacity,
                        background:
                            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)",
                    }}
                />

                {/* Bottom gradient for readability */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
                    style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                    }}
                />

                {/* ═══════════════ HERO PHASE (0-33%) ═══════════════ */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-6"
                    style={{ opacity: heroOpacity, y: heroY }}
                >
                    {/* Top accent line */}
                    <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-pagani-gold/60 mb-6" />

                    {/* Subtitle */}
                    <p className="font-display text-[10px] md:text-xs tracking-[0.5em] text-pagani-gold/80 uppercase mb-4">
                        {carData.tagline}
                    </p>

                    {/* Title */}
                    <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[0.08em] uppercase leading-[0.95] mb-6">
                        <span className="block text-white">Aston Martin</span>
                        <span className="block text-gold-gradient mt-1">Valkyrie</span>
                    </h1>

                    {/* Price */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-[1px] bg-pagani-gold/40" />
                        <p className="font-display text-sm md:text-base tracking-[0.3em] text-white/70">
                            {carData.price}
                        </p>
                        <div className="w-8 h-[1px] bg-pagani-gold/40" />
                    </div>

                    {/* CTA */}
                    <a
                        href="#inquire"
                        className="pointer-events-auto font-display text-[10px] md:text-xs tracking-[0.35em] uppercase px-8 py-3 border border-pagani-gold/40 text-pagani-gold hover:bg-pagani-gold/10 hover:border-pagani-gold/70 transition-all duration-500 relative group"
                    >
                        <span className="relative z-10">Inquire Now</span>
                        <div className="absolute inset-0 bg-pagani-gold/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </a>

                    {/* Bottom accent */}
                    <div className="mt-8 w-[1px] h-8 bg-gradient-to-b from-pagani-gold/40 to-transparent" />
                </motion.div>

                {/* ═══════════════ DESIGN PHASE (33-66%) ═══════════════ */}
                <motion.div
                    className="absolute inset-0 flex items-center pointer-events-none px-6 md:px-16 lg:px-24"
                    style={{ opacity: designOpacity, y: designY }}
                >
                    <div className="max-w-xl">
                        {/* Section indicator */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 border border-pagani-gold/60 rotate-45" />
                            <p className="font-display text-[9px] tracking-[0.5em] text-pagani-gold/60 uppercase">
                                Design Philosophy
                            </p>
                        </div>

                        {/* Title */}
                        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.06em] uppercase text-white leading-[1.05] mb-4">
                            {carData.design.title}
                        </h2>

                        {/* Gold divider */}
                        <div className="gold-divider w-24 mb-6" />

                        {/* Body */}
                        <div className="space-y-4">
                            {carData.design.body.split("\n\n").map((paragraph, i) => (
                                <p
                                    key={i}
                                    className="font-body text-sm md:text-base leading-relaxed text-white/65 tracking-wide"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Bottom detail */}
                        <div className="mt-8 flex items-center gap-4">
                            <div className="w-6 h-[1px] bg-pagani-gold/30" />
                            <p className="font-display text-[8px] tracking-[0.4em] text-pagani-gold/40 uppercase">
                                Red Bull Advanced Technologies
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* ═══════════════ ENGINE PHASE (66-100%) ═══════════════ */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-end pointer-events-none px-6 md:px-16 lg:px-24"
                    style={{ opacity: engineOpacity, y: engineY }}
                >
                    <div className="text-right max-w-md">
                        {/* Section indicator */}
                        <div className="flex items-center justify-end gap-3 mb-6">
                            <p className="font-display text-[9px] tracking-[0.5em] text-pagani-gold/60 uppercase">
                                Powertrain
                            </p>
                            <div className="w-2 h-2 border border-pagani-gold/60 rotate-45" />
                        </div>

                        {/* Title */}
                        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.06em] uppercase text-white leading-[1.05] mb-8">
                            {carData.engine.title}
                        </h2>

                        {/* Specs block */}
                        <div className="space-y-5">
                            {[
                                { label: "ENGINE", value: carData.engine.type },
                                { label: "POWER", value: carData.engine.power },
                                { label: "REDLINE", value: carData.engine.redline },
                                { label: "CONSTRUCTION", value: carData.engine.construction },
                            ].map((spec) => (
                                <div key={spec.label} className="border-b border-white/10 pb-4">
                                    <p className="spec-label mb-1">{spec.label}</p>
                                    <p className="font-body text-lg md:text-xl font-semibold tracking-wide text-white">
                                        {spec.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom detail */}
                        <div className="mt-8 flex items-center justify-end gap-4">
                            <p className="font-display text-[8px] tracking-[0.4em] text-pagani-gold/40 uppercase">
                                Cosworth × Rimac
                            </p>
                            <div className="w-6 h-[1px] bg-pagani-gold/30" />
                        </div>
                    </div>
                </motion.div>

                {/* ═══════════════ SCROLL INDICATOR ═══════════════ */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
                    style={{ opacity: scrollIndicatorOpacity }}
                >
                    <p className="font-display text-[8px] tracking-[0.5em] text-white/30 uppercase">
                        Scroll to explore
                    </p>
                    <div className="w-[1px] h-8 bg-gradient-to-b from-pagani-gold/50 to-transparent overflow-hidden">
                        <div className="w-full h-3 bg-pagani-gold/80 animate-scan-line" />
                    </div>
                </motion.div>

                {/* ═══════════════ CORNER HUD DECORATIONS ═══════════════ */}
                <div className="absolute top-24 left-6 md:left-12 pointer-events-none">
                    <div className="w-4 h-4 border-t border-l border-pagani-gold/20" />
                </div>
                <div className="absolute top-24 right-6 md:right-12 pointer-events-none">
                    <div className="w-4 h-4 border-t border-r border-pagani-gold/20" />
                </div>
                <div className="absolute bottom-24 left-6 md:left-12 pointer-events-none">
                    <div className="w-4 h-4 border-b border-l border-pagani-gold/20" />
                </div>
                <div className="absolute bottom-24 right-6 md:right-12 pointer-events-none">
                    <div className="w-4 h-4 border-b border-r border-pagani-gold/20" />
                </div>
            </div>
        </section>
    );
}
