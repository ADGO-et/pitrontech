import type { Metadata } from "next";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
    title: "Privacy Policy | PitronTech",
    description: "Learn how PitronTech collects, uses, and protects personal information across our services.",
};

const sections = [
    {
        title: "Information We Collect",
        body: "We collect account details, project requirements, and support correspondence when you interact with us. We also capture analytics data (IP address, device, session durations) to continuously improve our services.",
    },
    {
        title: "How We Use Data",
        body: "Information is used to deliver software, schedule project milestones, troubleshoot issues, and personalize communications. With your consent we may share updates about new offerings or insights relevant to your industry.",
    },
    {
        title: "Data Sharing",
        body: "We may disclose information to trusted vendors (cloud providers, payment processors) who act on our behalf. We never sell personal data to third parties and always require compliance with comparable security standards.",
    },
    {
        title: "Retention & Security",
        body: "Data is retained only as long as needed for the project's lifecycle or legal obligations. We safeguard records with encryption, multi-factor access controls, and regular security audits.",
    },
    {
        title: "Cookies & Tracking",
        body: "Cookies and similar technologies help us remember preferences, analyze site performance, and identify suspicious activity. You can manage cookie preferences via your browser settings.",
    },
    {
        title: "Your Rights",
        body: "You can request access, correction, or deletion of your personal data by contacting privacy@pitrontech.com. We aim to respond within 30 days, and may ask to verify your identity before acting.",
    },
    {
        title: "Global Transfers",
        body: "Because we operate across borders, data may be stored and processed in Ethiopia, Europe, or other jurisdictions with adequate safeguards, including EU Standard Contractual Clauses when required.",
    },
    {
        title: "Updates",
        body: "We may update this policy from time to time. Material changes will be communicated by email or posted with an updated effective date at the top of this page.",
    },
];

export default function PrivacyPage() {
    return (
        <div className="pt-[72px] min-h-screen">
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-gradient-start)] via-[var(--hero-bg)] to-[var(--hero-gradient-end)]" />
                <div className="relative max-w-5xl mx-auto px-6">
                    <SectionReveal trigger={false} className="text-center mb-12">
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#1d505e] mb-3">Privacy Policy</p>
                        <h1 className="font-display font-black text-5xl md:text-6xl text-[var(--text-heading)]">
                            Trust, clarity, and responsible data stewardship.
                        </h1>
                        <p className="text-[var(--text-muted)] text-lg mt-4">
                            We protect the personal data you entrust to PitronTech and keep transparency at the heart of everything we do.
                        </p>
                    </SectionReveal>

                    <div className="grid gap-6">
                        {sections.map((section) => (
                            <SectionReveal key={section.title}>
                                <article className="glass-card rounded-2xl p-6 border border-[rgba(29,80,94,0.15)] shadow-[0_10px_30px_rgba(5,14,16,0.35)]">
                                    <h2 className="font-display font-semibold text-2xl text-[var(--text-heading)] mb-3">
                                        {section.title}
                                    </h2>
                                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                                        {section.body}
                                    </p>
                                </article>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
