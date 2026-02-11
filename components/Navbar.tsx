"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const bgOpacity = useTransform(scrollY, [0, 150], [0, 1]);
    const borderOpacity = useTransform(scrollY, [0, 150], [0, 0.15]);

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12"
            style={{ y: 0 }}
        >
            <motion.div
                className="relative flex items-center justify-between h-16 md:h-20 mx-auto max-w-[1600px]"
                style={{
                    backgroundColor: useTransform(
                        bgOpacity,
                        (v) => `rgba(10, 10, 10, ${v * 0.85})`
                    ),
                    backdropFilter: useTransform(
                        bgOpacity,
                        (v) => `blur(${v * 24}px) saturate(${100 + v * 80}%)`
                    ),
                    borderBottom: useTransform(
                        borderOpacity,
                        (v) => `1px solid rgba(212, 175, 55, ${v})`
                    ),
                    borderRadius: useTransform(bgOpacity, (v) =>
                        v > 0.5 ? "0 0 8px 8px" : "0px"
                    ),
                    padding: "0 1.5rem",
                }}
            >
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-pagani-gold/40 flex items-center justify-center rotate-45">
                        <span className="font-display text-[10px] text-pagani-gold -rotate-45 tracking-[0.15em]">
                            AM
                        </span>
                    </div>
                    <div className="hidden sm:block">
                        <p className="font-display text-[10px] tracking-[0.3em] text-white/90 uppercase">
                            Aston Martin
                        </p>
                        <p className="font-display text-[8px] tracking-[0.25em] text-pagani-gold/70 uppercase">
                            Valkyrie
                        </p>
                    </div>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {["Overview", "Design", "Performance", "Specifications"].map(
                        (item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="font-display text-[10px] tracking-[0.25em] uppercase text-white/50 hover:text-pagani-gold transition-colors duration-300"
                            >
                                {item}
                            </a>
                        )
                    )}
                </div>

                {/* CTA */}
                <a
                    href="#inquire"
                    className="font-display text-[9px] tracking-[0.3em] uppercase px-5 py-2 border border-pagani-gold/30 text-pagani-gold hover:bg-pagani-gold/10 hover:border-pagani-gold/60 transition-all duration-300"
                >
                    Inquire
                </a>
            </motion.div>
        </motion.nav>
    );
}
