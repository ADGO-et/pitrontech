import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Users, Globe, Heart, Coffee, TrendingUp, ExternalLink } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
    title: "Careers | PitronTech",
    description: "Join PitronTech — build enterprise software that matters, with a remote-first team that puts people first.",
};

const benefits = [
    { icon: Globe, title: "Remote-First", desc: "Work from anywhere in the world. Our culture is built for distributed teams." },
    { icon: TrendingUp, title: "Growth & Learning", desc: "Dedicated learning budget, conferences, and mentorship from senior engineers." },
    { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health coverage for you and your family." },
    { icon: Coffee, title: "Flexible Hours", desc: "Results matter, not hours. Work when you are most productive." },
    { icon: Zap, title: "Cutting-Edge Stack", desc: "Work with the latest technologies on challenging enterprise-scale problems." },
    { icon: Users, title: "Strong Culture", desc: "A diverse, inclusive team that grows and wins together." },
];

const openRoles = [
    { title: "Senior Backend Engineer (Node.js / Go)", team: "Engineering", type: "Remote" },
    { title: "Senior Frontend Engineer (React / Next.js)", team: "Engineering", type: "Remote" },
    { title: "Mobile Engineer (React Native)", team: "Engineering", type: "Remote" },
    { title: "DevOps / Cloud Engineer (Azure / AWS)", team: "Infrastructure", type: "Remote" },
    { title: "UI/UX Designer", team: "Design", type: "Remote" },
];

export default function CareersPage() {
    return (
        <div className="pt-[72px] min-h-screen">
            {/* Hero */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-gradient-start)] via-[var(--hero-bg)] to-[var(--hero-gradient-end)]" />
                <div className="absolute inset-0 bg-dots opacity-40" />
                <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(29,80,94,0.15)_0%,transparent_70%)]" />
                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <SectionReveal trigger={false}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(29,80,94,0.15)] text-[#1d505e] text-xs font-semibold tracking-wider uppercase mb-6">
                            Join the Team
                        </div>
                        <h1 className="font-display font-black text-5xl md:text-7xl text-[var(--text-heading)] mb-6">
                            Build the <span className="gradient-text">Future</span><br />With Us
                        </h1>
                        <p className="text-[var(--text-muted)] text-xl max-w-2xl mx-auto mb-10">
                            We&apos;re looking for passionate engineers, designers, and problem-solvers who want to build software that truly makes a difference.
                        </p>
                        <Link
                            href="https://jobs.pitrontech.et"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4"
                        >
                            View Open Positions <ExternalLink className="w-4 h-4" />
                        </Link>
                    </SectionReveal>
                </div>
            </section>

            {/* Culture Quote */}
            <section className="py-12 border-y border-[rgba(29,80,94,0.06)]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <SectionReveal>
                        <p className="text-2xl md:text-3xl font-display font-light text-[var(--text-heading)] leading-relaxed">
                            &ldquo;Remote work is not just how we work —{" "}
                            <span className="text-[#1d505e] font-semibold">it&apos;s why we thrive.</span>&rdquo;
                        </p>
                    </SectionReveal>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionReveal className="text-center mb-14">
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-[var(--text-heading)] mb-3">
                            Why Join <span className="gradient-text">PitronTech?</span>
                        </h2>
                        <p className="text-[var(--text-muted)]">We invest in our people as much as our products.</p>
                    </SectionReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {benefits.map((b, i) => (
                            <SectionReveal key={b.title} delay={i * 0.08}>
                                <div className="glass-card rounded-2xl p-6 group hover:border-[rgba(29,80,94,0.2)] transition-all hover:-translate-y-1">
                                    <div className="w-11 h-11 rounded-xl bg-[rgba(29,80,94,0.08)] border border-[rgba(29,80,94,0.12)] flex items-center justify-center mb-4">
                                        <b.icon className="w-5 h-5 text-[#1d505e]" />
                                    </div>
                                    <h3 className="font-bold text-[var(--text-heading)] mb-2">{b.title}</h3>
                                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{b.desc}</p>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Roles removed — directs users to jobs.pitrontech.et */}
        </div>
    );
}
