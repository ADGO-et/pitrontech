"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { technologies, techCategories } from "@/lib/data/technologies";
import { gsap, Draggable } from "@/lib/gsap";
import SectionReveal from "@/components/shared/SectionReveal";
import { cn } from "@/lib/utils";

export default function TechnologiesPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const sliderRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const draggableRef = useRef<Draggable[]>([]);

    const filtered =
        activeCategory === "all"
            ? technologies
            : technologies.filter((t) => t.category === activeCategory);

    useEffect(() => {
        if (!sliderRef.current || !trackRef.current) return;
        gsap.registerPlugin(Draggable);

        draggableRef.current = Draggable.create(trackRef.current, {
            type: "x",
            bounds: sliderRef.current,
            inertia: true,
            cursor: "grab",
            activeCursor: "grabbing",
            edgeResistance: 0.65,
        });

        return () => {
            draggableRef.current.forEach((d) => d.kill());
        };
    }, []);

    return (
        <div className="pt-[72px] min-h-screen">
            {/* Hero */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-gradient-start)] via-[var(--hero-bg)] to-[var(--hero-gradient-end)]" />
                <div className="absolute inset-0 bg-dots opacity-40" />
                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <SectionReveal trigger={false}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(29,80,94,0.15)] text-[#1d505e] text-xs font-semibold tracking-wider uppercase mb-6">
                            Our Stack
                        </div>
                        <h1 className="font-display font-black text-4xl md:text-6xl text-[var(--text-heading)] mb-6">
                            Technology <span className="gradient-text">Mastery</span>
                        </h1>
                        <p className="text-[var(--text-muted)] text-xl max-w-2xl mx-auto">
                            We are fluent in the languages, frameworks, and platforms that define modern enterprise software.
                        </p>
                    </SectionReveal>
                </div>
            </section>

            {/* Draggable Horizontal Slider */}
            <section className="py-8 overflow-hidden border-y border-[rgba(29,80,94,0.06)]">
                <div className="max-w-7xl mx-auto px-6 mb-4">
                    <p className="text-[#4a7a88] text-xs tracking-wider uppercase">← Drag to explore →</p>
                </div>
                <div ref={sliderRef} className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none" style={{ height: "100px" }}>
                    <div ref={trackRef} className="flex gap-4 absolute pl-6" style={{ width: "max-content" }}>
                        {[...technologies, ...technologies].map((tech, i) => (
                            <div
                                key={`${tech.id}-${i}`}
                                className="glass-card flex-shrink-0 flex items-center gap-3 px-5 py-4 rounded-2xl hover:border-[rgba(29,80,94,0.25)] transition-all"
                                style={{ minWidth: "160px" }}
                            >
                                <div className="w-8 h-8 relative flex-shrink-0">
                                    <Image src={tech.icon} alt={tech.name} width={32} height={32} className="object-contain" unoptimized />
                                </div>
                                <div>
                                    <p className="text-[var(--text-heading)] text-sm font-semibold whitespace-nowrap">{tech.name}</p>
                                    <p className="text-[var(--text-muted)] text-xs capitalize">{tech.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filter + Grid */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Category tabs */}
                    <SectionReveal className="flex flex-wrap gap-3 justify-center mb-12">
                        {techCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={cn(
                                    "px-5 py-2 rounded-full text-sm font-semibold border transition-all",
                                    activeCategory === cat.id
                                        ? "bg-[#1d505e] text-[var(--background)] border-[#1d505e] shadow-[0_0_20px_rgba(29,80,94,0.4)]"
                                        : "border-[rgba(29,80,94,0.2)] text-[var(--text-muted)] hover:text-[var(--text-heading)]"
                                )}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </SectionReveal>

                    {/* Tech Cards Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                        {filtered.map((tech, i) => {
                            const content = (
                                <div
                                    className="glass-card rounded-2xl p-6 flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:-translate-y-2 h-full"
                                    style={{ "--tech-color": tech.color } as React.CSSProperties}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget;
                                        el.style.borderColor = `${tech.color}40`;
                                        el.style.boxShadow = `0 0 30px ${tech.color}15`;
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget;
                                        el.style.borderColor = "";
                                        el.style.boxShadow = "";
                                    }}
                                >
                                    {/* 3D-effect icon container */}
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-115 group-hover:rotate-6"
                                        style={{ backgroundColor: `${tech.color}12`, border: `1px solid ${tech.color}25` }}
                                    >
                                        <Image src={tech.icon} alt={tech.name} width={40} height={40} className="object-contain" unoptimized />
                                    </div>
                                    <h3 className="font-semibold text-[var(--text-heading)] text-sm group-hover:text-[#1d505e] transition-colors">{tech.name}</h3>
                                    <p className="text-[var(--text-muted)] text-xs capitalize mt-1">{tech.category}</p>
                                </div>
                            );

                            return (
                                <SectionReveal key={tech.id} delay={i * 0.06} direction="up">
                                    {tech.url ? (
                                        <a href={tech.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                                            {content}
                                        </a>
                                    ) : (
                                        content
                                    )}
                                </SectionReveal>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
