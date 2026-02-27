import type { Metadata } from "next";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";
import { teamMembers } from "@/lib/data/team";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
    title: "Our Tech Talent | PitronTech",
    description: "Meet the engineers and designers who build PitronTech's world-class software.",
};

export default function TalentPage() {
    const engineers = teamMembers.filter((m) => m.department === "engineering");

    return (
        <div className="pt-[72px] min-h-screen">
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-gradient-start)] via-[var(--hero-bg)] to-[var(--hero-gradient-end)]" />
                <div className="absolute inset-0 bg-dots opacity-40" />
                <div className="relative max-w-7xl mx-auto px-6">
                    <SectionReveal trigger={false} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(29,80,94,0.15)] text-[#1d505e] text-xs font-semibold tracking-wider uppercase mb-6">
                            Engineering Talent
                        </div>
                        <h1 className="font-display font-black text-5xl md:text-6xl text-[var(--text-heading)] mb-4">
                            The People Behind <span className="gradient-text">the Code</span>
                        </h1>
                        <p className="text-[var(--text-muted)] text-xl max-w-2xl mx-auto">
                            Senior engineers who have shipped production systems for millions of users. Curious, driven, and relentlessly focused on quality.
                        </p>
                    </SectionReveal>

                    {/* Stats strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        {[
                            { value: "15+", label: "Senior Engineers" },
                            { value: "8+", label: "Specializations" },
                            { value: "100%", label: "Onsite-First" },
                            { value: "3+", label: "Languages Spoken" },
                        ].map((s) => (
                            <div key={s.label} className="glass-card rounded-2xl p-5 text-center">
                                <p className="font-display font-black text-2xl text-[#1d505e] mb-1">{s.value}</p>
                                <p className="text-[var(--text-muted)] text-xs">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {engineers.map((member, i) => (
                            <SectionReveal key={member.id} delay={i * 0.1} direction="up" className="h-full">
                                <div className="glass-card rounded-2xl overflow-hidden group hover:border-[rgba(29,80,94,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(29,80,94,0.08)] relative h-[400px] flex flex-col justify-end">
                                    <Image src={member.image} alt={member.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" unoptimized />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                    <div className="relative z-10 p-6 flex flex-col items-start text-left w-full">
                                        <h3 className="font-display font-bold text-white text-xl mb-1">{member.name}</h3>
                                        <p className="text-white/90 text-sm font-semibold mb-3">{member.role}</p>
                                        <p className="text-white/80 text-xs leading-relaxed line-clamp-3 mb-4">{member.bio}</p>
                                        <div className="flex gap-2 mt-auto">
                                            <a href={member.linkedin} aria-label="LinkedIn" className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                                                <Linkedin className="w-3.5 h-3.5" />
                                            </a>
                                            <a href={member.twitter} aria-label="Twitter" className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                                                <Twitter className="w-3.5 h-3.5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
