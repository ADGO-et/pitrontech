import type { Metadata } from "next";
import { focuses } from "@/lib/data/content";
import SectionReveal from "@/components/shared/SectionReveal";
import * as Icons from "lucide-react";

type IconName = keyof typeof Icons;

export const metadata: Metadata = {
    title: "Focuses | PitronTech",
    description: "Our specialized focus areas: Enterprise Solutions, Fintech Systems, ERP Systems, Cloud Infrastructure, and DevOps Automation.",
};

export default function FocusesPage() {
    return (
        <div className="pt-[72px] min-h-screen">
            {/* Hero */}
            <section className="relative overflow-hidden bg-[var(--background)] py-24 lg:py-32">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-gradient-start)] via-[var(--hero-bg)] to-[var(--hero-gradient-end)]" />
                <div className="absolute inset-0 bg-dots opacity-40" />
                
                {/* Abstract Graphic (Right Side) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] hidden lg:block opacity-80">
                    <svg viewBox="0 0 400 400" className="w-full h-full text-[#113037] dark:text-[#1d505e]">
                        <circle cx="200" cy="200" r="120" fill="currentColor" />
                        <circle cx="50" cy="100" r="40" fill="currentColor" />
                        <circle cx="350" cy="80" r="50" fill="currentColor" />
                        <circle cx="80" cy="320" r="45" fill="currentColor" />
                        <circle cx="320" cy="340" r="60" fill="currentColor" />
                        
                        <line x1="200" y1="200" x2="50" y2="100" stroke="currentColor" strokeWidth="12" />
                        <line x1="200" y1="200" x2="350" y2="80" stroke="currentColor" strokeWidth="12" />
                        <line x1="200" y1="200" x2="80" y2="320" stroke="currentColor" strokeWidth="12" />
                        <line x1="200" y1="200" x2="320" y2="340" stroke="currentColor" strokeWidth="12" />
                    </svg>
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl text-center lg:text-left">
                        <SectionReveal trigger={false}>
                            <div className="text-[#1d505e] text-sm font-bold tracking-[0.2em] uppercase mb-6">
                                Focus Areas
                            </div>
                            <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-[var(--text-heading)] mb-8 leading-tight">
                                Specialized Enterprise Engineering Focuses
                            </h1>
                            <p className="text-[var(--text-muted)] text-md md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                We deliver large-scale enterprise architecture, fintech-grade systems, modular ERP implementations, cloud infrastructure, and DevOps automation.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <a href="/contact" className="px-8 py-4 rounded-full bg-[#1d505e] text-white font-bold hover:bg-[#113037] transition-colors shadow-lg hover:shadow-xl">
                                    Schedule a Consultation
                                </a>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </section>

            {/* Timeline / Feature List */}
            <section className="section-padding">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="relative">
                        {/* Vertical timeline line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(29,80,94,0.2)] to-transparent" />

                        <div className="flex flex-col gap-16">
                            {focuses.map((focus, i) => {
                                const IconComp = (Icons[focus.icon as IconName] || Icons.Star) as React.ElementType;
                                const isEven = i % 2 === 0;

                                return (
                                    <SectionReveal key={focus.id} delay={i * 0.08} direction={isEven ? "left" : "right"}>
                                        <div className={`relative flex flex-col md:flex-row items-start gap-8 ${isEven ? "" : "md:flex-row-reverse"}`}>
                                            {/* Timeline dot */}
                                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#1d505e] bg-[var(--background)] shadow-[0_0_15px_rgba(29,80,94,0.5)] z-10" />

                                            {/* Content card */}
                                            <div className={`flex-1 ml-16 md:ml-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                                                <div className="glass-card rounded-2xl p-7 group hover:border-[rgba(29,80,94,0.2)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(29,80,94,0.07)] hover:-translate-y-1">
                                                    {/* Header */}
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div
                                                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                                            style={{ backgroundColor: `${focus.color}15`, border: `1px solid ${focus.color}30` }}
                                                        >
                                                            <IconComp className="w-6 h-6" style={{ color: focus.color }} />
                                                        </div>
                                                        <div>
                                                            <h2 className="font-display font-bold text-[var(--text-heading)] text-xl group-hover:text-[#1d505e] transition-colors">
                                                                {focus.title}
                                                            </h2>
                                                            <span
                                                                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                                                                style={{ color: focus.color, backgroundColor: `${focus.color}12`, border: `1px solid ${focus.color}25` }}
                                                            >
                                                                {focus.stats}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p className="text-[var(--text-muted)] leading-relaxed">{focus.description}</p>
                                                </div>
                                            </div>

                                            {/* Spacer for alternating layout */}
                                            <div className="hidden md:block flex-1" />
                                        </div>
                                    </SectionReveal>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Summary grid */}
            <section className="section-padding border-t border-[rgba(29,80,94,0.06)]">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionReveal className="text-center mb-12">
                        <h2 className="font-display font-bold text-3xl text-[var(--text-heading)]">
                            Our <span className="gradient-text">Impact by Numbers</span>
                        </h2>
                    </SectionReveal>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 auto-rows-fr max-w-6xl mx-auto">
                        {focuses.map((f, i) => {
                            const IconComp = (Icons[f.icon as IconName] || Icons.Star) as React.ElementType;
                            return (
                                <SectionReveal key={f.id} delay={i * 0.07} className="h-full">
                                    <div className="glass-card rounded-2xl p-5 text-center group hover:border-[rgba(29,80,94,0.2)] transition-all hover:-translate-y-1 h-full flex flex-col items-center justify-center">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 flex-shrink-0"
                                            style={{ backgroundColor: `${f.color}15` }}
                                        >
                                            <IconComp className="w-5 h-5" style={{ color: f.color }} />
                                        </div>
                                        <p className="text-[var(--text-heading)] font-bold text-sm mb-1">{f.title.split(" ")[0]}</p>
                                        <p className="text-[#1d505e] text-xs font-semibold mt-auto">{f.stats}</p>
                                    </div>
                                </SectionReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

        </div>
    );
}

