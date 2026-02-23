"use client";

import Image from "next/image";
import { technologies } from "@/lib/data/technologies";

export default function FeaturedTech() {
    const doubled = [...technologies, ...technologies];

    return (
        <section className="section-padding relative overflow-hidden border-y border-[rgba(29,80,94,0.06)]">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(29,80,94,0.15)] text-[#1d505e] text-xs font-semibold tracking-wider uppercase mb-4">
                    Our Stack
                </div>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-heading)] mb-3">
                    Technologies We <span className="gradient-text">Master</span>
                </h2>
            </div>

            {/* Marquee Track */}
            <div className="relative flex overflow-hidden mb-4">
                <div className="animate-marquee flex gap-6 flex-shrink-0">
                    {doubled.map((tech, i) => (
                        <TechPill key={`a-${i}`} tech={tech} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TechPill({ tech }: { tech: { name: string; icon: string; color: string; url?: string } }) {
    const content = (
        <div className="glass-card flex-shrink-0 flex items-center gap-4 px-6 py-4 rounded-full hover:border-[rgba(29,80,94,0.2)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(29,80,94,0.08)] cursor-pointer group">
            <div className="w-10 h-10 relative flex-shrink-0">
                <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                    unoptimized
                />
            </div>
            <span className="text-base font-medium text-[var(--text-muted)] group-hover:text-[var(--text-heading)] transition-colors whitespace-nowrap">
                {tech.name}
            </span>
        </div>
    );

    if (tech.url) {
        return (
            <a href={tech.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                {content}
            </a>
        );
    }

    return content;
}
