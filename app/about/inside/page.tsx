import type { Metadata } from "next";
import Image from "next/image";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
    title: "Inside PitronTech | About",
    description: "Our story, mission, and vision — the foundation of PitronTech.",
};

export default function InsidePage() {
    const milestones = [
        { title: "Founded", desc: "PitronTech was founded with a clear purpose: to build enterprise-grade software systems that meet the operational realities and regulatory demands of organizations." },
        { title: "Evolution", desc: "What began as a focused engineering initiative has evolved into a full-scale enterprise software company delivering ERP platforms, fintech systems, SaaS infrastructure, and cloud-native solutions." },
        { title: "Early Implementations", desc: "From early implementations in financial institutions to complex multi-module enterprise systems, each project strengthened our commitment to building secure, scalable, and compliance-ready technology." },
        { title: "Technical Partners", desc: "As regulatory frameworks across Africa continue to mature, we positioned ourselves not just as developers, but as long-term technical partners." },
        { title: "Standards Alignment", desc: "We architect systems aligned with national standards, banking regulations, and institutional governance requirements." },
        { title: "Sector Support", desc: "PitronTech supports organizations across finance, government, and private sectors — delivering mission-critical systems that power operations, automate processes, and enable digital transformation." },
        { title: "Our Principle", desc: "Our journey is driven by one principle: engineering excellence with responsibility." },
    ];

    return (
        <div className="pt-[72px] min-h-screen">
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-gradient-start)] via-[var(--hero-bg)] to-[var(--hero-gradient-end)]" />
                <div className="absolute inset-0 bg-dots opacity-40" />
                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <SectionReveal trigger={false} direction="left">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(29,80,94,0.15)] text-[#1d505e] text-xs font-semibold tracking-wider uppercase mb-6">
                                Our Story
                            </div>
                            <h1 className="font-display font-black text-5xl md:text-6xl text-[var(--text-heading)] mb-6 leading-tight">
                                Inside <span className="gradient-text">PitronTech</span>
                            </h1>
                            <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-6">
                                We started with a simple belief: that African enterprises deserved the same quality of software that the world&apos;s top companies build. That belief drives every line of code we write.
                            </p>
                            <p className="text-[var(--text-muted)] leading-relaxed">
                                PitronTech is an enterprise software development company headquartered in Addis Ababa, Ethiopia. We build web, mobile, SaaS, and ERP solutions for ambitious companies who want to lead their industries.
                            </p>
                        </SectionReveal>

                        <SectionReveal direction="right" trigger={false} delay={0.2}>
                            <div className="relative h-80 rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/dev-3.png"
                                    alt="PitronTech team"
                                    fill className="object-cover"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050e10]/50 to-transparent" />
                            </div>
                        </SectionReveal>
                    </div>

                    {/* Mission/Vision */}
                    <div className="grid md:grid-cols-3 gap-5 mb-20">
                        {[
                            { title: "Mission", text: "To deliver world-class enterprise software that empowers African businesses to compete globally.", color: "#1d505e" },
                            { title: "Vision", text: "A future where every ambitious company in Africa has access to the same software engineering excellence as Silicon Valley.", color: "#4ADE80" },
                            { title: "Values", text: "Excellence, innovation, integrity, and a relentless focus on delivering real value to our clients and partners.", color: "#F472B6" },
                        ].map((item, i) => (
                            <SectionReveal key={item.title} delay={i * 0.1}>
                                <div className="glass-card rounded-2xl p-6 h-full" style={{ borderColor: `${item.color}20` }}>
                                    <h3 className="font-display font-bold text-lg mb-2" style={{ color: item.color }}>{item.title}</h3>
                                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.text}</p>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>

                    {/* Timeline */}
                    <SectionReveal className="text-center mb-12">
                        <h2 className="font-display font-bold text-3xl text-[var(--text-heading)]">Our <span className="gradient-text">Journey</span></h2>
                    </SectionReveal>

                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(29,80,94,0.2)] to-transparent hidden md:block" />
                        <div className="flex flex-col gap-8">
                            {milestones.map((m, i) => (
                                <SectionReveal key={i} delay={i * 0.06} direction={i % 2 === 0 ? "left" : "right"}>
                                    <div className={`flex flex-col md:flex-row gap-6 items-start ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                                        <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                                            <div className="glass-card rounded-xl p-5 inline-block w-full hover:border-[rgba(29,80,94,0.2)] transition-all">
                                                <h3 className="font-bold text-[var(--text-heading)] mb-1">{m.title}</h3>
                                                <p className="text-[var(--text-muted)] text-sm">{m.desc}</p>
                                            </div>
                                        </div>
                                        <div className="hidden md:flex flex-shrink-0 w-4 h-4 rounded-full border-2 border-[#1d505e] bg-[var(--background)] shadow-[0_0_10px_rgba(29,80,94,0.5)] mt-5 -ml-2 z-10" />
                                        <div className="hidden md:block flex-1" />
                                    </div>
                                </SectionReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
