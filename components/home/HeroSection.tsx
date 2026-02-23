"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const HERO_STATS = [
    { target: 50, suffix: "+", label: "Projects Delivered" },
    { target: 12, suffix: "+", label: "SaaS Products" },
    { target: 99.9, suffix: "%", label: "Uptime Achieved" },
    { target: 5, suffix: "+", label: "Years Excellence" },
];

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const statValueRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // --- Headline split animation ---
            if (headlineRef.current) {
                const lines = headlineRef.current.querySelectorAll(".hero-line");
                gsap.set(lines, { y: 50, opacity: 0 });
                gsap.to(lines, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power4.out",
                    delay: 0.2,
                });
            }

            // --- Sub headline ---
            if (subRef.current) {
                gsap.set(subRef.current, { opacity: 0, y: 20 });
                gsap.to(subRef.current, {
                    opacity: 1, y: 0, duration: 1, delay: 0.7, ease: "power3.out",
                });
            }

            // --- CTA ---
            if (ctaRef.current) {
                const btns = ctaRef.current.querySelectorAll(".cta-btn");
                gsap.set(btns, { opacity: 0, y: 20 });
                gsap.to(btns, {
                    opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 0.9, ease: "power3.out",
                });
            }

            // --- Stats ---
            if (statsRef.current) {
                const statItems = statsRef.current.querySelectorAll(".stat-item");
                gsap.set(statItems, { opacity: 0, y: 20 });
                gsap.to(statItems, {
                    opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 1.2, ease: "power3.out",
                });

                statValueRefs.current.forEach((node, index) => {
                    if (!node) return;
                    const { target, suffix } = HERO_STATS[index];
                    gsap.fromTo(
                        node,
                        { textContent: 0 },
                        {
                            textContent: target,
                            duration: 1.4,
                            delay: 1.25 + index * 0.08,
                            ease: "power2.out",
                            snap: Number.isInteger(target) ? { textContent: 1 } : undefined,
                            onUpdate: () => {
                                const current = Number(node.textContent ?? 0);
                                node.textContent = `${Number.isInteger(target) ? Math.round(current) : current.toFixed(1)}${suffix}`;
                            },
                        }
                    );
                });
            }

            // --- Hero scroll fade ---
            if (containerRef.current) {
                gsap.to(containerRef.current.querySelector(".hero-content"), {
                    opacity: 0,
                    y: -40,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "50% top",
                        end: "bottom top",
                        scrub: 1,
                    },
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[var(--hero-bg)]"
            aria-label="Hero section"
        >
            {/* === RIGHT SIDE IMAGE WITH FADE === */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[-5%] w-full lg:w-[55%] h-[85%] opacity-40 lg:opacity-100 pointer-events-none">
                {/* Gradient masks to blend the image into the background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--hero-bg)] via-[var(--hero-bg)]/90 to-transparent z-10 lg:via-[var(--hero-bg)]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--hero-bg)] via-transparent to-[var(--hero-bg)] z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--hero-bg)] via-transparent to-transparent z-10" />
                
                {/* Stronger left fade to remove hard edge */}
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[var(--hero-bg)] to-transparent z-10" />
                
                <Image 
                    src="/images/dev-8.webp" 
                    alt="Software Engineering Team" 
                    fill 
                    className="object-cover object-center lg:object-right" 
                    unoptimized 
                    priority
                />
            </div>

            {/* === HERO CONTENT === */}
            <div className="hero-content relative z-20 max-w-7xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Content (Spans 8 columns on large screens) */}
                    <div className="lg:col-span-8 text-left pt-10 lg:pt-0">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 p-4 rounded-full border-none text-[#1d505e] text-xs font-bold tracking-wider uppercase mb-8 bg-[rgba(29,80,94,0.1)] backdrop-blur-sm">
                            {/* <span className="w-1.5 h-1.5 rounded-full bg-[#1d505e] animate-pulse" />
                            Enterprise Software Engineering */}
                        </div>

                        {/* Main Headline */}
                        <h1 ref={headlineRef} className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.05] tracking-tight mb-6">
                            <div className="overflow-hidden pb-2">
                                <span className="hero-line block text-[var(--text-heading)]">Accelerate Your</span>
                            </div>
                            <div className="overflow-hidden pb-2">
                                <span className="hero-line block text-[var(--text-heading)]">
                                    Roadmap With Our
                                </span>
                            </div>
                            <div className="overflow-hidden pb-2">
                                <span className="hero-line block gradient-text text-glow">
                                    Vetted Engineers
                                </span>
                            </div>
                        </h1>

                        {/* Sub headline */}
                        <p ref={subRef} className="text-[var(--text-muted)] text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
                            Access timezone-aligned software engineers with experience in AI, Cloud, and 100+ other technologies. We build world-class solutions that uniquely fit your needs.
                        </p>

                        {/* CTA Buttons */}
                        <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-4 mb-16">
                            <Link href="/contact" className="cta-btn btn-primary flex items-center justify-center gap-2 text-base px-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1">
                                Schedule a Call
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/work" className="cta-btn btn-outline flex items-center justify-center gap-2 text-base px-8 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1">
                                <Play className="w-4 h-4" />
                                View Our Work
                            </Link>
                        </div>

                        {/* Stats */}
                        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[var(--glass-border)]">
                            {HERO_STATS.map((stat, index) => (
                                <div key={stat.label} className="stat-item">
                                    <div
                                        ref={(element) => {
                                            statValueRefs.current[index] = element;
                                        }}
                                        className="text-2xl font-display font-black text-[var(--text-heading)] mb-1"
                                    >
                                        0{stat.suffix}
                                    </div>
                                    <div className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
