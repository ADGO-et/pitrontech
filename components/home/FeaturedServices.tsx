"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { services } from "@/lib/data/services";
import SectionReveal from "@/components/shared/SectionReveal";
import * as Icons from "lucide-react";

type IconName = keyof typeof Icons;

const featuredServices = [
    services.find(s => s.id === "enterprise-erp"),
    services.find(s => s.id === "saas-platform"),
    services.find(s => s.id === "fintech-solutions"),
    services.find(s => s.id === "cloud-devops"),
].filter(Boolean) as typeof services;

export default function FeaturedServices() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!gridRef.current) return;

        const cards = gridRef.current.querySelectorAll(".service-card");
        gsap.set(cards, { opacity: 0, y: 50 });

        ScrollTrigger.create({
            trigger: gridRef.current,
            start: "top 80%",
            once: true,
            onEnter: () => {
                gsap.to(cards, {
                    opacity: 1, y: 0,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out",
                });
            },
        });
    }, []);

    return (
        <section className="py-24 relative bg-[#f0f8fa] dark:bg-[#051114] overflow-hidden rounded-tr-[100px] rounded-bl-[100px] my-12 mx-4 md:mx-8 transition-colors duration-500">
            {/* Abstract Graphic Bottom Left */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 opacity-80 pointer-events-none">
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#1d505e] rounded-full" />
                <div className="absolute bottom-40 left-40 w-20 h-20 bg-[#1d505e] rounded-full" />
                <div className="absolute bottom-10 left-60 w-24 h-24 bg-[#1d505e] rounded-full" />
                <div className="absolute bottom-60 left-10 w-16 h-16 bg-[#1d505e] rounded-full" />
                {/* Connecting lines */}
                <div className="absolute bottom-30 left-30 w-20 h-2 bg-[#1d505e] rotate-45 origin-left" />
                <div className="absolute bottom-20 left-40 w-24 h-2 bg-[#1d505e] -rotate-12 origin-left" />
                <div className="absolute bottom-40 left-20 w-16 h-2 bg-[#1d505e] -rotate-60 origin-left" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Header */}
                    <SectionReveal className="text-left">
                        <h2 className="font-display font-bold text-5xl md:text-6xl text-[var(--text-heading)] dark:text-white mb-6 leading-[1.1]">
                            Core<br />
                            Capabilities<br />
                            <span className="text-[#113037] dark:text-[#1d505e]">for Enterprise</span><br />
                            Systems
                        </h2>
                        <p className="text-[var(--text-muted)] dark:text-gray-400 max-w-md text-lg">
                            We build secure, scalable, and future-ready digital systems with deep technical expertise and measurable business outcomes.
                        </p>
                        <Link href="/services" className="inline-flex items-center gap-2 mt-10 text-[#1d505e] dark:text-[#0ea5e9] font-semibold hover:gap-3 transition-all">
                            View All Services <ArrowRight className="w-4 h-4" />
                        </Link>
                    </SectionReveal>

                    {/* Right: Grid */}
                    <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {featuredServices.map((service) => {
                            const IconComponent = (Icons[service.icon as IconName] || Icons.Code) as React.ElementType;

                            return (
                                <div
                                    key={service.id}
                                    className="service-card group [perspective:1000px] aspect-square"
                                >
                                    <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                        {/* Front */}
                                        <div className="absolute inset-0 [backface-visibility:hidden] bg-[#1d505e] dark:bg-[#0a191e] border border-[#113037] dark:border-[#132a31] rounded-xl p-8 flex flex-col justify-end shadow-lg">
                                            <div className="mb-auto">
                                                <IconComponent className="w-8 h-8 text-white dark:text-[#0ea5e9] group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                            <h3 className="font-display font-bold text-white text-lg uppercase tracking-wide leading-tight">
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Back */}
                                        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#113037] dark:bg-[#0d2128] border border-[#0a1d22] dark:border-[#1d404b] rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-lg">
                                            <p className="text-white/90 dark:text-gray-300 text-sm leading-relaxed mb-6">
                                                {service.description}
                                            </p>
                                            <Link
                                                href={`/services#${service.id}`}
                                                className="inline-flex items-center gap-2 text-white dark:text-[#0ea5e9] text-sm font-semibold hover:gap-3 transition-all"
                                            >
                                                Learn more <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
