import type { Metadata } from "next";
import { cultureStatements } from "@/lib/data/team";
import SectionReveal from "@/components/shared/SectionReveal";
import * as Icons from "lucide-react";
import DevelopmentProcess from "@/components/about/DevelopmentProcess";

type IconName = keyof typeof Icons;

export const metadata: Metadata = {
    title: "Company Culture | PitronTech",
    description: "Discover how we work, collaborate, and grow together at PitronTech.",
};

const principles = [
    "We hire for curiosity and character, not just credentials.",
    "We communicate openly, even when it's uncomfortable.",
    "We celebrate effort and learning, not just results.",
    "We protect our team's focus and energy.",
    "We treat every client problem as our own.",
    "We always ship with care and never compromise on quality.",
];

export default function CulturePage() {
    return (
        <div className="pt-[72px] min-h-screen">
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-gradient-start)] via-[var(--hero-bg)] to-[var(--hero-gradient-end)]" />
                <div className="absolute inset-0 bg-dots opacity-40" />
                <div className="relative max-w-7xl mx-auto px-6">
                    <SectionReveal trigger={false} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(29,80,94,0.15)] text-[#1d505e] text-xs font-semibold tracking-wider uppercase mb-6">
                            Culture
                        </div>
                        <h1 className="font-display font-black text-5xl md:text-6xl text-[var(--text-heading)] mb-4">
                            How We <span className="gradient-text">Work</span>
                        </h1>
                        <p className="text-[var(--text-muted)] text-xl max-w-2xl mx-auto">
                            Culture is not a perk — it&apos;s the engine that drives everything we do.
                        </p>
                    </SectionReveal>

                    {/* Culture Statements */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {cultureStatements.map((item, i) => {
                            const IconComp = (Icons[item.icon as IconName] || Icons.Star) as React.ElementType;
                            return (
                                <SectionReveal key={item.icon} delay={i * 0.1} className="h-full">
                                    <div 
                                        className="rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
                                        style={{ 
                                            backgroundColor: `${item.color}08`, 
                                            border: `1px solid ${item.color}40`,
                                            boxShadow: `0 4px 20px ${item.color}10`
                                        }}
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.color }}>
                                                <IconComp className="w-5 h-5 text-white" />
                                            </div>
                                            <h2 className="font-display font-bold text-[var(--text-heading)] text-lg leading-tight uppercase tracking-wide">
                                                {item.title}
                                            </h2>
                                        </div>
                                        
                                        <div 
                                            className="bg-[var(--background)] rounded-xl p-5 flex-grow border"
                                            style={{ borderColor: `${item.color}40` }}
                                        >
                                            <p className="text-[var(--text-heading)] font-semibold mb-3 text-sm">&ldquo;{item.statement}&rdquo;</p>
                                            <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </SectionReveal>
                            );
                        })}
                    </div>

                    {/* Principles */}
                    <SectionReveal className="mb-8">
                        <h2 className="font-display font-bold text-3xl text-[var(--text-heading)] text-center mb-2">
                            Our <span className="gradient-text">Principles</span>
                        </h2>
                    </SectionReveal>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
                        {principles.map((p, i) => (
                            <SectionReveal key={i} delay={i * 0.06} className="h-full">
                                <div className="glass-card rounded-xl p-5 flex items-start gap-3 hover:border-[rgba(29,80,94,0.2)] transition-all h-full">
                                    <span className="text-[#1d505e] font-black text-lg leading-none">{String(i + 1).padStart(2, "0")}</span>
                                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{p}</p>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Process Section */}
            <DevelopmentProcess />
        </div>
    );
}
