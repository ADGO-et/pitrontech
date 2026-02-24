"use client";

import { useState, useRef } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";
import { services, serviceCategories } from "@/lib/data/services";
import { gsap, Flip } from "@/lib/gsap";
import SectionReveal from "@/components/shared/SectionReveal";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

type IconName = keyof typeof Icons;

export default function ServicesPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const gridRef = useRef<HTMLDivElement>(null);

    const filtered =
        activeCategory === "all"
            ? services
            : services.filter((s) => s.category === activeCategory);

    const handleFilter = (cat: string) => {
        if (cat === activeCategory) return;
        if (!gridRef.current) { setActiveCategory(cat); return; }

        const state = Flip.getState(gridRef.current.querySelectorAll(".service-item"));
        flushSync(() => {
            setActiveCategory(cat);
        });

        Flip.from(state, {
            duration: 0.5,
            ease: "power2.inOut",
            stagger: 0.05,
            absolute: false,
            nested: true,
            onEnter: (els: Element[]) => gsap.fromTo(els, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.35 }),
            onLeave: (els: Element[]) => gsap.to(els, { opacity: 0, scale: 0.94, duration: 0.25 }),
        });
    };

    return (
        <div className="pt-[72px] min-h-screen">
            {/* Hero */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-gradient-start)] via-[var(--hero-bg)] to-[var(--hero-gradient-end)]" />
                <div className="absolute inset-0 bg-dots opacity-40" />
                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <SectionReveal trigger={false}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(29,80,94,0.15)] text-[#1d505e] text-xs font-semibold tracking-wider uppercase mb-6">
                            Services
                        </div>
                        <h1 className="font-display font-black text-5xl md:text-7xl text-[var(--text-heading)] mb-6">
                            Enterprise <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-[var(--text-muted)] text-xl max-w-2xl mx-auto">
                            Enterprise ERP development, SaaS platform engineering, fintech solutions, cloud DevOps, and custom web/mobile applications.
                        </p>
                    </SectionReveal>
                </div>
            </section>

            {/* Filter Tabs + Grid */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Filter Pills */}
                    <SectionReveal className="flex flex-wrap gap-3 justify-center mb-12">
                        {serviceCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => handleFilter(cat.id)}
                                className={cn(
                                    "px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300",
                                    activeCategory === cat.id
                                        ? "bg-[#1d505e] text-[var(--background)] border-[#1d505e] shadow-[0_0_20px_rgba(29,80,94,0.4)]"
                                        : "border-[rgba(29,80,94,0.2)] text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:border-[rgba(29,80,94,0.4)]"
                                )}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </SectionReveal>

                    {/* Grid */}
                    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filtered.map((service) => {
                            const IconComponent = (Icons[service.icon as IconName] || Icons.Code) as React.ElementType;
                            return (
                                <div
                                    key={service.id}
                                    className="service-item glass-card rounded-2xl p-7 group hover:border-[rgba(29,80,94,0.2)] transition-all duration-400 hover:shadow-[0_0_30px_rgba(29,80,94,0.07)] hover:-translate-y-1"
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: `${service.color}15`, border: `1px solid ${service.color}30` }}
                                    >
                                        <IconComponent className="w-7 h-7" style={{ color: service.color }} />
                                    </div>
                                    {/* Category */}
                                    <div
                                        className="inline-flex px-2 py-0.5 rounded text-xs font-semibold mb-3"
                                        style={{ color: service.color, backgroundColor: `${service.color}12`, border: `1px solid ${service.color}25` }}
                                    >
                                        {service.category}
                                    </div>
                                    <h3 className="font-display font-bold text-[var(--text-heading)] text-xl mb-3 group-hover:text-[#1d505e] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Enterprise Banner */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(29,80,94,0.3)] to-transparent rounded-3xl" />
                        <div className="relative grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="font-display font-bold text-3xl md:text-4xl text-[var(--text-heading)] mb-4">
                                    Need Mission-Critical Delivery?
                                </h2>
                                <p className="text-[var(--text-muted)] mb-6">
                                    We design, build, and scale secure systems for organizations across finance, government, and private sectors.
                                </p>
                                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                                    Request a Consultation →
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {services.filter(s => s.category === "enterprise").map(s => {
                                    const IconComponent = (Icons[s.icon as IconName] || Icons.Code) as React.ElementType;
                                    return (
                                        <div key={s.id} className="glass rounded-xl p-4 flex items-center gap-3">
                                            <IconComponent className="w-5 h-5 flex-shrink-0" style={{ color: s.color }} />
                                            <span className="text-[var(--text-heading)] text-sm font-medium">{s.title}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
