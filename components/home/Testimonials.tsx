"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data/content";
import SectionReveal from "@/components/shared/SectionReveal";

export default function Testimonials() {
    const [active, setActive] = useState(0);

    const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
    const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

    const t = testimonials[active];

    return (
        <section className="section-padding relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(29,80,94,0.05)] to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6">
                <SectionReveal className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(29,80,94,0.15)] text-[#1d505e] text-xs font-semibold tracking-wider uppercase mb-4">
                        Client Love
                    </div>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-heading)]">
                        Trusted by <span className="gradient-text">Industry Leaders</span>
                    </h2>
                </SectionReveal>

                {/* Main Quote Card */}
                <SectionReveal className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    {/* Quote icon */}
                    <Quote className="absolute top-6 right-8 w-16 h-16 text-[rgba(29,80,94,0.05)]" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                        ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-2xl text-[var(--text-heading)] font-medium leading-relaxed mb-8 max-w-3xl">
                        &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[rgba(29,80,94,0.2)]">
                                <Image src={t.avatar} alt={t.name} fill className="object-cover" unoptimized />
                            </div>
                            <div>
                                <div className="font-semibold text-[var(--text-heading)]">{t.name}</div>
                                <div className="text-sm text-[var(--text-muted)]">{t.role}</div>
                            </div>
                            <div className="hidden sm:block w-px h-10 bg-[rgba(29,80,94,0.1)]" />
                            <div className="hidden sm:block glass px-3 py-1 rounded-full text-xs text-[#1d505e] font-semibold">
                                {t.company}
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={prev}
                                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:border-[rgba(29,80,94,0.3)] transition-all"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={next}
                                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:border-[rgba(29,80,94,0.3)] transition-all"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex items-center gap-2 mt-6">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-[#1d505e]" : "w-2 bg-[rgba(29,80,94,0.2)]"
                                    }`}
                                aria-label={`Testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
}
