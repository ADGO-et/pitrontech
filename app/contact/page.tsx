"use client";

import { useState, useRef, FormEvent } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, CheckCircle } from "lucide-react";
import { gsap } from "@/lib/gsap";
import SectionReveal from "@/components/shared/SectionReveal";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const successRef = useRef<HTMLDivElement>(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
    });
    const [focused, setFocused] = useState<Record<string, boolean>>({});

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate submission delay
        await new Promise((r) => setTimeout(r, 1500));

        setLoading(false);
        setSubmitted(true);

        // Animate success state
        if (successRef.current) {
            gsap.fromTo(
                successRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
            );
        }
    };

    const isFloated = (field: string) =>
        focused[field] || form[field as keyof typeof form];

    return (
        <div className="pt-[72px] min-h-screen">
            {/* Hero */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-gradient-start)] via-[var(--hero-bg)] to-[var(--hero-gradient-end)]" />
                <div className="absolute inset-0 bg-dots opacity-40" />
                <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(29,80,94,0.04)_0%,transparent_70%)]" />
                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <SectionReveal trigger={false}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(29,80,94,0.15)] text-[#1d505e] text-xs font-semibold tracking-wider uppercase mb-6">
                            Contact
                        </div>
                        <h1 className="font-display font-black text-5xl md:text-7xl text-[var(--text-heading)] mb-6">
                            Let&apos;s <span className="gradient-text">Chat</span>
                        </h1>
                        <p className="text-[var(--text-muted)] text-xl max-w-xl mx-auto">
                            Have a project in mind? We&apos;d love to hear from you. Our team typically responds within 24 hours.
                        </p>
                    </SectionReveal>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-5 gap-10 items-start">
                        {/* Left: Info */}
                        <div className="md:col-span-2 flex flex-col gap-6">
                            <SectionReveal direction="left">
                                <div className="glass-card rounded-2xl p-6">
                                    <h2 className="font-display font-bold text-xl text-[var(--text-heading)] mb-5">Get In Touch</h2>
                                    <div className="flex flex-col gap-5">
                                        <a href="mailto:hello@pitrontech.com" className="flex items-start gap-3 group">
                                            <div className="w-10 h-10 rounded-xl bg-[rgba(29,80,94,0.08)] border border-[rgba(29,80,94,0.12)] flex items-center justify-center flex-shrink-0">
                                                <Mail className="w-5 h-5 text-[#1d505e]" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-[#4a7a88] uppercase tracking-wider mb-0.5">Email</p>
                                                <p className="text-[var(--text-heading)] text-sm group-hover:text-[#1d505e] transition-colors">hello@pitrontech.com</p>
                                            </div>
                                        </a>
                                        <a href="tel:+251911000000" className="flex items-start gap-3 group">
                                            <div className="w-10 h-10 rounded-xl bg-[rgba(29,80,94,0.08)] border border-[rgba(29,80,94,0.12)] flex items-center justify-center flex-shrink-0">
                                                <Phone className="w-5 h-5 text-[#1d505e]" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-[#4a7a88] uppercase tracking-wider mb-0.5">Phone</p>
                                                <p className="text-[var(--text-heading)] text-sm group-hover:text-[#1d505e] transition-colors">+251 911 000 000</p>
                                            </div>
                                        </a>
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-[rgba(29,80,94,0.08)] border border-[rgba(29,80,94,0.12)] flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-5 h-5 text-[#1d505e]" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-[#4a7a88] uppercase tracking-wider mb-0.5">Office</p>
                                                <p className="text-[var(--text-heading)] text-sm">Addis Ababa, Ethiopia</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Socials */}
                                    <div className="mt-6 pt-6 border-t border-[rgba(29,80,94,0.08)]">
                                        <p className="text-xs text-[#4a7a88] uppercase tracking-wider mb-3">Follow Us</p>
                                        <div className="flex gap-3">
                                            {[{ Icon: Linkedin, label: "LinkedIn" }, { Icon: Github, label: "GitHub" }, { Icon: Twitter, label: "Twitter" }].map(({ Icon, label }) => (
                                                <a key={label} href="#" aria-label={label}
                                                    className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-[var(--text-muted)] hover:text-[#1d505e] hover:border-[rgba(29,80,94,0.3)] transition-all duration-200 hover:shadow-[0_0_15px_rgba(29,80,94,0.15)]">
                                                    <Icon className="w-4 h-4" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SectionReveal>

                            {/* Map placeholder */}
                            <SectionReveal direction="left" delay={0.1}>
                                <div className="glass-card rounded-2xl overflow-hidden h-48 relative">
                                    <iframe
                                        src="https://www.openstreetmap.org/export/embed.html?bbox=38.6,8.9,38.9,9.1&layer=mapnik"
                                        width="100%"
                                        height="100%"
                                        className="opacity-60 grayscale"
                                        style={{ border: 0, filter: "var(--map-filter, invert(0.9) hue-rotate(170deg))" }}
                                        title="PitronTech Office Location"
                                    />
                                    <div className="absolute inset-0 pointer-events-none border border-[rgba(29,80,94,0.1)] rounded-2xl" />
                                </div>
                            </SectionReveal>
                        </div>

                        {/* Right: Form */}
                        <div className="md:col-span-3">
                            <SectionReveal direction="right">
                                {submitted ? (
                                    <div ref={successRef} className="glass-card rounded-2xl p-12 text-center">
                                        <div className="w-20 h-20 rounded-full bg-[rgba(29,80,94,0.1)] border border-[rgba(29,80,94,0.3)] flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle className="w-10 h-10 text-[#1d505e]" />
                                        </div>
                                        <h3 className="font-display font-bold text-2xl text-[var(--text-heading)] mb-3">Message Sent! 🎉</h3>
                                        <p className="text-[var(--text-muted)] mb-6">
                                            Thank you for reaching out. Our team will get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", service: "", message: "" }); }}
                                            className="btn-outline text-sm"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 flex flex-col gap-6">
                                        <h2 className="font-display font-bold text-xl text-[var(--text-heading)] mb-2">Start a Conversation</h2>

                                        {/* Name + Email row */}
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            {["name", "email"].map((field) => (
                                                <div key={field} className="relative">
                                                    <input
                                                        id={field}
                                                        type={field === "email" ? "email" : "text"}
                                                        required
                                                        value={form[field as keyof typeof form]}
                                                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                                                        onFocus={() => setFocused({ ...focused, [field]: true })}
                                                        onBlur={() => setFocused({ ...focused, [field]: false })}
                                                        className="w-full bg-[rgba(29,80,94,0.04)] border border-[rgba(29,80,94,0.15)] rounded-xl px-4 pt-6 pb-2 text-[var(--text-heading)] text-sm focus:outline-none focus:border-[rgba(29,80,94,0.4)] focus:bg-[rgba(29,80,94,0.06)] transition-all peer"
                                                    />
                                                    <label
                                                        htmlFor={field}
                                                        className={`absolute left-4 transition-all duration-200 pointer-events-none text-[#4a7a88] ${isFloated(field) ? "top-2 text-xs text-[#1d505e]" : "top-4 text-sm"
                                                            }`}
                                                    >
                                                        {field.charAt(0).toUpperCase() + field.slice(1)} *
                                                    </label>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Company */}
                                        <div className="relative">
                                            <input
                                                id="company"
                                                type="text"
                                                value={form.company}
                                                onChange={(e) => setForm({ ...form, company: e.target.value })}
                                                onFocus={() => setFocused({ ...focused, company: true })}
                                                onBlur={() => setFocused({ ...focused, company: false })}
                                                className="w-full bg-[rgba(29,80,94,0.04)] border border-[rgba(29,80,94,0.15)] rounded-xl px-4 pt-6 pb-2 text-[var(--text-heading)] text-sm focus:outline-none focus:border-[rgba(29,80,94,0.4)] focus:bg-[rgba(29,80,94,0.06)] transition-all"
                                            />
                                            <label
                                                htmlFor="company"
                                                className={`absolute left-4 transition-all duration-200 pointer-events-none text-[#4a7a88] ${isFloated("company") ? "top-2 text-xs text-[#1d505e]" : "top-4 text-sm"
                                                    }`}
                                            >
                                                Company Name
                                            </label>
                                        </div>

                                        {/* Service Select */}
                                        <div className="relative">
                                            <select
                                                id="service"
                                                value={form.service}
                                                onChange={(e) => setForm({ ...form, service: e.target.value })}
                                                className="w-full bg-[rgba(29,80,94,0.04)] border border-[rgba(29,80,94,0.15)] rounded-xl px-4 py-4 text-[var(--text-heading)] text-sm focus:outline-none focus:border-[rgba(29,80,94,0.4)] transition-all appearance-none"
                                            >
                                                <option value="" className="bg-[var(--background)]">Service of Interest</option>
                                                <option value="web" className="bg-[var(--background)]">Web Development</option>
                                                <option value="mobile" className="bg-[var(--background)]">Mobile App Development</option>
                                                <option value="saas" className="bg-[var(--background)]">SaaS Development</option>
                                                <option value="erp" className="bg-[var(--background)]">ERP Development</option>
                                                <option value="devops" className="bg-[var(--background)]">DevOps & Cloud</option>
                                                <option value="design" className="bg-[var(--background)]">UI/UX Design</option>
                                                <option value="other" className="bg-[var(--background)]">Other</option>
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div className="relative">
                                            <textarea
                                                id="message"
                                                required
                                                rows={5}
                                                value={form.message}
                                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                onFocus={() => setFocused({ ...focused, message: true })}
                                                onBlur={() => setFocused({ ...focused, message: false })}
                                                className="w-full bg-[rgba(29,80,94,0.04)] border border-[rgba(29,80,94,0.15)] rounded-xl px-4 pt-6 pb-2 text-[var(--text-heading)] text-sm focus:outline-none focus:border-[rgba(29,80,94,0.4)] focus:bg-[rgba(29,80,94,0.06)] transition-all resize-none"
                                            />
                                            <label
                                                htmlFor="message"
                                                className={`absolute left-4 transition-all duration-200 pointer-events-none text-[#4a7a88] ${isFloated("message") ? "top-2 text-xs text-[#1d505e]" : "top-4 text-sm"
                                                    }`}
                                            >
                                                Your Message *
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="btn-primary flex items-center justify-center gap-2 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {loading ? (
                                                <>
                                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </SectionReveal>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
