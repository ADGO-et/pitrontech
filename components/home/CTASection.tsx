import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";

export default function CTASection() {
    return (
        <section className="section-padding relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative glass-card rounded-3xl p-10 md:p-16 overflow-hidden text-center">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(29,80,94,0.3)] via-[rgba(17,48,55,0.2)] to-[rgba(29,80,94,0.03)] pointer-events-none rounded-3xl" />
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(29,80,94,0.08)_0%,transparent_70%)] pointer-events-none" />

                    {/* Decorative corner lines */}
                    <div className="absolute top-5 left-5 w-12 h-12 border-l-2 border-t-2 border-[rgba(29,80,94,0.2)] rounded-tl-lg" />
                    <div className="absolute top-5 right-5 w-12 h-12 border-r-2 border-t-2 border-[rgba(29,80,94,0.2)] rounded-tr-lg" />
                    <div className="absolute bottom-5 left-5 w-12 h-12 border-l-2 border-b-2 border-[rgba(29,80,94,0.2)] rounded-bl-lg" />
                    <div className="absolute bottom-5 right-5 w-12 h-12 border-r-2 border-b-2 border-[rgba(29,80,94,0.2)] rounded-br-lg" />

                    <SectionReveal direction="up">
                        <p className="text-[#1d505e] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                            Ready to Start?
                        </p>
                        <h2 className="font-display font-black text-4xl md:text-6xl text-[var(--text-heading)] leading-tight mb-6">
                            Let&apos;s Build Your<br />
                            <span className="gradient-text">Next Big Thing</span>
                        </h2>
                        <p className="text-[var(--text-muted)] max-w-xl mx-auto text-lg mb-10">
                            From initial concept to production launch — we partner with you every step of the way. Let&apos;s talk about your project.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary flex items-center gap-2 text-base px-10 py-4">
                                Start a Conversation
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/work" className="btn-outline flex items-center gap-2 text-base px-10 py-4">
                                See Our Portfolio
                            </Link>
                        </div>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
}
