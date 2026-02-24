import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";
import { teamMembers, cultureStatements } from "@/lib/data/team";
import SectionReveal from "@/components/shared/SectionReveal";
import * as Icons from "lucide-react";

type IconName = keyof typeof Icons;

export const metadata: Metadata = {
    title: "About PitronTech",
    description:
        "PitronTech is a technology-driven enterprise software company delivering mission-critical systems across finance, government, and private sectors.",
};

const aboutLinks = [
    { label: "Inside PitronTech", href: "/about/inside", desc: "Our story and mission" },
    { label: "Leadership Team", href: "/about/leadership", desc: "Meet our executives" },
    { label: "Our Tech Talent", href: "/about/talent", desc: "The engineers" },
    { label: "Company Culture", href: "/about/culture", desc: "How we work" },
    { label: "Careers", href: "/careers", desc: "Join the team" },
    { label: "FAQ", href: "/about/faq", desc: "Common questions" },
];

export default function AboutPage() {
    const leadership = teamMembers.filter((m) => m.department === "leadership");
    const talent = teamMembers.filter((m) => m.department === "engineering");

    return (
        <div className="pt-[72px]">
            {/* === HERO === */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-gradient-start)] via-[var(--hero-bg)] to-[var(--hero-gradient-end)]" />
                <div className="absolute inset-0 bg-dots opacity-40" />
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(29,80,94,0.2)_0%,transparent_70%)]" />

                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <SectionReveal trigger={false}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(29,80,94,0.15)] text-[#1d505e] text-xs font-semibold tracking-wider uppercase mb-6">
                            About PitronTech
                        </div>
                        <h1 className="font-display font-black text-5xl md:text-7xl text-[var(--text-heading)] mb-6 leading-tight">
                            Who We <span className="gradient-text">Are</span>
                        </h1>
                        <p className="text-[var(--text-muted)] text-xl max-w-2xl mx-auto leading-relaxed">
                            PitronTech is a technology-driven enterprise software company committed to delivering mission-critical systems for organizations across finance, government, and private sectors.
                        </p>
                        <p className="text-[var(--text-muted)] text-base max-w-3xl mx-auto leading-relaxed mt-6">
                            Mission: Empower African enterprises with world-class software systems that improve efficiency, ensure compliance, and enable sustainable growth. Vision: Become the leading enterprise software engineering partner across Africa and beyond.
                        </p>
                    </SectionReveal>

                    {/* Quick Nav Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14 max-w-3xl mx-auto">
                        {aboutLinks.map((link, i) => (
                            <SectionReveal key={link.label} delay={i * 0.06}>
                                <Link
                                    href={link.href}
                                    className="glass-card rounded-xl p-4 text-left group hover:border-[rgba(29,80,94,0.2)] transition-all hover:-translate-y-1"
                                >
                                    <p className="text-sm font-semibold text-[var(--text-heading)] group-hover:text-[#1d505e] transition-colors">{link.label}</p>
                                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{link.desc}</p>
                                </Link>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* === OFFICE GALLERY === */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionReveal className="mb-10">
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-[var(--text-heading)]">
                            Our <span className="gradient-text">Space</span>
                        </h2>
                        <p className="text-[var(--text-muted)] mt-2">Where great software is crafted.</p>
                    </SectionReveal>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                        {[
                            { src: "/images/dev-3.png", span: "col-span-2 row-span-2", alt: "Office interior" },
                            { src: "https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?w=400", span: "", alt: "Collaboration space" },
                            { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400", span: "", alt: "Team meeting" },
                            { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400", span: "", alt: "Work environment" },
                            { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400", span: "", alt: "Team collaboration" },
                        ].map((img, i) => (
                            <SectionReveal key={i} delay={i * 0.07} className={`${img.span} relative overflow-hidden rounded-2xl group`}>
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050e10]/40 to-transparent" />
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* === CULTURE STATEMENTS === */}
            <section className="section-padding border-y border-[rgba(29,80,94,0.06)]">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionReveal className="text-center mb-12">
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-[var(--text-heading)]">
                            Our <span className="gradient-text">Values</span>
                        </h2>
                    </SectionReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cultureStatements.map((item, i) => {
                            const IconComp = (Icons[item.icon as IconName] || Icons.Star) as React.ElementType;
                            return (
                                <SectionReveal key={item.icon} delay={i * 0.1}>
                                    <div className="glass-card rounded-2xl p-6 group hover:border-[rgba(29,80,94,0.2)] transition-all">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-[rgba(29,80,94,0.08)] border border-[rgba(29,80,94,0.12)] flex items-center justify-center flex-shrink-0">
                                                <IconComp className="w-5 h-5 text-[#1d505e]" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[var(--text-heading)] mb-1">{item.title}</h3>
                                                <p className="text-[#1d505e] text-sm italic mb-2">&ldquo;{item.statement}&rdquo;</p>
                                                <p className="text-[var(--text-muted)] text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SectionReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* === LEADERSHIP TEAM === */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionReveal className="flex items-end justify-between mb-12">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(29,80,94,0.15)] text-[#1d505e] text-xs font-semibold tracking-wider uppercase mb-4">
                                Leadership
                            </div>
                            <h2 className="font-display font-bold text-3xl md:text-4xl text-[var(--text-heading)]">
                                Meet the <span className="gradient-text">Team</span>
                            </h2>
                        </div>
                        <Link href="/about/talent" className="btn-outline flex items-center gap-2 hidden md:flex">
                            All Team Members <ArrowRight className="w-4 h-4" />
                        </Link>
                    </SectionReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        {leadership.map((member, i) => (
                            <SectionReveal key={member.id} delay={i * 0.1} direction="up">
                                <div className="glass-card rounded-2xl overflow-hidden group hover:border-[rgba(29,80,94,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(29,80,94,0.08)]">
                                    <div className="relative h-64 overflow-hidden">
                                        <Image src={member.image} alt={member.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" unoptimized />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e22] via-transparent to-transparent" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-display font-bold text-[var(--text-heading)] text-base">{member.name}</h3>
                                        <p className="text-[#1d505e] text-xs font-semibold mb-2">{member.role}</p>
                                        <p className="text-[var(--text-muted)] text-xs leading-relaxed line-clamp-2 mb-3">{member.bio}</p>
                                        <div className="flex items-center gap-2">
                                            <a href={member.linkedin} className="w-7 h-7 glass rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[#1d505e] transition-colors" aria-label="LinkedIn">
                                                <Linkedin className="w-3.5 h-3.5" />
                                            </a>
                                            <a href={member.twitter} className="w-7 h-7 glass rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[#1d505e] transition-colors" aria-label="Twitter">
                                                <Twitter className="w-3.5 h-3.5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>

                    {/* Engineering Team */}
                    <SectionReveal className="mb-8">
                        <h3 className="font-display font-bold text-2xl text-[var(--text-heading)]">
                            Engineering <span className="gradient-text">Talent</span>
                        </h3>
                    </SectionReveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {talent.map((member, i) => (
                            <SectionReveal key={member.id} delay={i * 0.08}>
                                <div className="glass-card rounded-2xl p-5 group hover:border-[rgba(29,80,94,0.2)] transition-all hover:-translate-y-1 flex items-center gap-4">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[rgba(29,80,94,0.15)]">
                                        <Image src={member.image} alt={member.name} fill className="object-cover" unoptimized />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-semibold text-[var(--text-heading)] text-sm truncate">{member.name}</p>
                                        <p className="text-[#1d505e] text-xs">{member.role}</p>
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
