import type { Metadata } from "next";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
    title: "Terms of Service | PitronTech",
    description: "PitronTech's Terms of Service governing the use of our enterprise engineering services and digital platforms.",
};

const sections = [
    {
        title: "Acceptance and Scope",
        body: "By accessing PitronTech services, you agree to be bound by these Terms of Service. They apply to all clients, partners, and visitors interacting with our digital presence, bespoke software, and managed services contracts.",
    },
    {
        title: "Service Commitments",
        body: "We deliver enterprise-grade software, integrations, and cloud solutions following the scope defined in statements of work. Every engagement includes delivery milestones, quality gates, and post-launch support plans that are documented per project.",
    },
    {
        title: "Usage Responsibilities",
        body: "Clients must provide accurate business requirements, timely feedback, and required data access. You are responsible for storing backups of user-generated content and securing credentials we provide, such as sandbox environments or access tokens.",
    },
    {
        title: "Billing and Payment",
        body: "Unless otherwise agreed, invoices are issued monthly or at milestone completion and payable within 30 days. Late payments may accrue interest at 1.5% per month and could result in paused service until resolved.",
    },
    {
        title: "Intellectual Property",
        body: "Unless assigned otherwise, we retain ownership of reusable tools, frameworks, and templates. Clients receive perpetual rights to the specific deliverables produced for their engagement, while PitronTech keeps ownership of the underlying platform components.",
    },
    {
        title: "Limitation of Liability",
        body: "PitronTech is not liable for indirect damages, loss of profits, or service interruptions beyond our control. Our total liability for any claim arising from these Terms is limited to the fees paid for the affected services in the prior six months.",
    },
    {
        title: "Termination",
        body: "Either party may terminate with 30 days' notice. Termination of an ongoing project results in final invoicing for work completed to date and a handover package covering code, docs, and outstanding recommendations.",
    },
    {
        title: "Contact",
        body: "Questions about these terms can be sent to legal@pitrontech.com. We review updates annually and will notify you by email if material changes are made.",
    },
];

export default function TermsPage() {
    return (
        <div className="pt-[72px] min-h-screen">
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-gradient-start)] via-[var(--hero-bg)] to-[var(--hero-gradient-end)]" />
                <div className="relative max-w-5xl mx-auto px-6">
                    <SectionReveal trigger={false} className="text-center mb-12">
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#1d505e] mb-3">Terms of Service</p>
                        <h1 className="font-display font-black text-5xl md:text-6xl text-[var(--text-heading)]">
                            The agreement that keeps us accountable.
                        </h1>
                        <p className="text-[var(--text-muted)] text-lg mt-4">
                            These terms govern every interaction with PitronTech’s digital platforms, consulting, custom software, and managed operations services.
                        </p>
                    </SectionReveal>

                    <div className="grid gap-6">
                        {sections.map((section) => (
                            <SectionReveal key={section.title}>
                                <article className="glass-card rounded-2xl p-6 border border-[rgba(29,80,94,0.15)] shadow-[0_10px_30px_rgba(5,14,16,0.4)]">
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
