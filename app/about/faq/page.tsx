"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import { cn } from "@/lib/utils";

const faqs = [
    {
        q: "What industries does PitronTech serve?",
        a: "We primarily serve financial institutions, SACCOs, government agencies, and private enterprises requiring secure, compliant, and scalable software systems.",
    },
    {
        q: "Do you build custom ERP systems?",
        a: "Yes. We design and implement fully customized ERP platforms covering finance, HR, supply chain, operations, compliance, and reporting.",
    },
    {
        q: "Are your systems compliant with regulatory requirements?",
        a: "Yes. We engineer systems with compliance in mind, including financial reporting standards, audit requirements, and regulatory integrations based on the client's industry.",
    },
    {
        q: "Do you provide cloud or on-premise deployment?",
        a: "We support both. Systems can be deployed on Azure, AWS, Google Cloud, or on-premise environments depending on client requirements.",
    },
    {
        q: "Do you offer post-implementation support?",
        a: "Yes. We provide ongoing technical support, maintenance, system optimization, and long-term partnership models.",
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="pt-[72px] min-h-screen">
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-gradient-start)] via-[var(--hero-bg)] to-[var(--hero-gradient-end)]" />
                <div className="absolute inset-0 bg-dots opacity-40" />
                <div className="relative max-w-4xl mx-auto px-6">
                    <SectionReveal trigger={false} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(29,80,94,0.15)] text-[#1d505e] text-xs font-semibold tracking-wider uppercase mb-6">
                            FAQ
                        </div>
                        <h1 className="font-display font-black text-5xl md:text-6xl text-[var(--text-heading)] mb-4">
                            Questions <span className="gradient-text">Answered</span>
                        </h1>
                        <p className="text-[var(--text-muted)] text-xl max-w-xl mx-auto">
                            Everything you need to know about working with PitronTech.
                        </p>
                    </SectionReveal>

                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <SectionReveal key={i} delay={i * 0.05}>
                                    <div 
                                        className={cn(
                                            "glass-card rounded-2xl overflow-hidden transition-all duration-300",
                                            isOpen ? "border-[rgba(29,80,94,0.3)] shadow-[0_4px_20px_rgba(29,80,94,0.08)]" : "hover:border-[rgba(29,80,94,0.2)]"
                                        )}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : i)}
                                            className="w-full flex items-center justify-between p-6 text-left"
                                        >
                                            <h3 className={cn(
                                                "font-semibold text-base transition-colors flex items-start gap-3",
                                                isOpen ? "text-[#1d505e]" : "text-[var(--text-heading)] hover:text-[#1d505e]"
                                            )}>
                                                <span className="text-[#1d505e] font-black flex-shrink-0 mt-0.5">Q.</span>
                                                {faq.q}
                                            </h3>
                                            <ChevronDown 
                                                className={cn(
                                                    "w-5 h-5 text-[#1d505e] flex-shrink-0 transition-transform duration-300",
                                                    isOpen ? "rotate-180" : ""
                                                )} 
                                            />
                                        </button>
                                        <div 
                                            className={cn(
                                                "grid transition-all duration-300 ease-in-out",
                                                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                            )}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="text-[var(--text-muted)] text-sm leading-relaxed px-6 pb-6 pl-12">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SectionReveal>
                            );
                        })}
                    </div>

                    <SectionReveal className="text-center mt-12">
                        <p className="text-[var(--text-muted)] mb-4">Still have questions?</p>
                        <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                            Get in Touch <ArrowRight className="w-4 h-4" />
                        </Link>
                    </SectionReveal>
                </div>
            </section>
        </div>
    );
}
