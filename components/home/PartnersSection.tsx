"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { partners, type Partner } from "@/lib/data/partners";

export default function PartnersSection() {
    return (
        <section className="py-20 relative overflow-hidden border-y border-[rgba(29,80,94,0.06)] bg-[var(--background)]">
            {/* Gradient masks for smooth fade in/out on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(29,80,94,0.15)] text-[#1d505e] text-xs font-semibold tracking-wider uppercase mb-4">
                    Our Network
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-[var(--text-heading)] mb-3">
                    Trusted by <span className="gradient-text">Industry Leaders</span>
                </h2>
                <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg">
                    We collaborate with top-tier organizations to deliver exceptional solutions and drive innovation forward.
                </p>
            </div>

            {/* Static Grid */}
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center py-4">
                    {partners.map((partner, i) => (
                        <PartnerLogo key={`partner-${i}`} partner={partner} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PartnerLogo({ partner }: { partner: Partner }) {
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Use a small timeout to avoid the synchronous setState warning
        // and ensure we're fully mounted before rendering theme-dependent UI
        const timer = setTimeout(() => {
            setMounted(true);
            setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
        }, 0);
        
        // Listen for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "data-theme") {
                    setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
                }
            });
        });
        
        observer.observe(document.documentElement, { attributes: true });
        
        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    // Prevent hydration mismatch by not rendering the image until mounted
    if (!mounted) {
        return (
            <div className="flex items-center justify-center w-52 h-28 md:w-56 md:h-32 opacity-90 hover:opacity-100 transition-all duration-300 cursor-pointer group">
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Empty placeholder with same dimensions to prevent layout shift */}
                </div>
            </div>
        );
    }

    const logoSrc = isDark && partner.darkLogo ? partner.darkLogo : partner.logo;

    const content = (
        <div className="flex items-center justify-center w-52 h-28 md:w-56 md:h-32 opacity-90 hover:opacity-100 transition-all duration-300 cursor-pointer group">
            <div className="relative w-full h-full flex items-center justify-center">
                <Image
                    src={logoSrc}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    unoptimized
                    sizes="(min-width: 768px) 224px, 208px"
                />
            </div>
        </div>
    );

    if (partner.url) {
        return (
            <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
                {content}
            </a>
        );
    }

    return content;
}
