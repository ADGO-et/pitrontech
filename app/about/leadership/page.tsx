import type { Metadata } from "next";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";
import { teamMembers } from "@/lib/data/team";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
    title: "Leadership Team | PitronTech",
    description: "Meet the leadership team driving PitronTech's vision and engineering excellence.",
};

export default function LeadershipPage() {
    const leaders = teamMembers.filter((m) => m.department === "leadership");

    return (
        <div className="pt-[72px] min-h-screen">
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-gradient-start)] via-[var(--hero-bg)] to-[var(--hero-gradient-end)]" />
                <div className="absolute inset-0 bg-dots opacity-40" />
                <div className="relative max-w-7xl mx-auto px-6">
                    <SectionReveal trigger={false} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(29,80,94,0.15)] text-[#1d505e] text-xs font-semibold tracking-wider uppercase mb-6">
                            Leadership
                        </div>
                        <h1 className="font-display font-black text-5xl md:text-6xl text-[var(--text-heading)] mb-4">
                            Our <span className="gradient-text">Leadership Team</span>
                        </h1>
                        <p className="text-[var(--text-muted)] text-xl max-w-2xl mx-auto">
                            Experienced technologists and business leaders united by a shared vision for enterprise software excellence.
                        </p>
                    </SectionReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {leaders.map((member, i) => (
                            <SectionReveal key={member.id} delay={i * 0.12} direction="up" className="h-full">
                                <div className="glass-card rounded-3xl overflow-hidden group hover:border-[rgba(29,80,94,0.25)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(29,80,94,0.08)] hover:-translate-y-2 flex flex-col items-center text-center p-6 h-full">
                                    <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-[var(--background)] shadow-lg shrink-0">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col items-center">
                                        <h2 className="font-display font-bold text-xl text-[var(--text-heading)] mb-1">{member.name}</h2>
                                        <p className="text-[#1d505e] text-sm font-semibold mb-4">{member.role}</p>
                                        <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 flex-1">{member.bio}</p>
                                        <div className="flex items-center gap-3 mt-auto">
                                            <a href={member.linkedin} aria-label="LinkedIn"
                                                className="w-10 h-10 glass rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[#1d505e] hover:bg-[rgba(29,80,94,0.1)] transition-all">
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                            <a href={member.twitter} aria-label="Twitter"
                                                className="w-10 h-10 glass rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[#1d505e] hover:bg-[rgba(29,80,94,0.1)] transition-all">
                                                <Twitter className="w-4 h-4" />
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
