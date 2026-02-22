import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
    company: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about/talent" },
        { label: "Culture", href: "/about/culture" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
    ],
    services: [
        { label: "Web Development", href: "/services#web" },
        { label: "Mobile Apps", href: "/services#mobile" },
        { label: "SaaS Development", href: "/services#saas" },
        { label: "ERP Systems", href: "/services#erp" },
        { label: "DevOps", href: "/services#devops" },
    ],
    technologies: [
        { label: "React & Next.js", href: "/technologies#react" },
        { label: "Node.js & NestJS", href: "/technologies#node" },
        { label: "Python & Django", href: "/technologies#python" },
        { label: "Cloud (Azure/AWS/GCP)", href: "/technologies#cloud" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
    ],
};

export default function Footer() {
    return (
        <footer className="relative bg-[var(--background)] border-t border-[var(--glass-border)]">
            {/* Top glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#1d505e]/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            {/* <Image src="/logos/pitron-logo-white-2.png" alt="Pitron Icon" width={36} height={36} className="w-9 h-9 object-contain" /> */}
                            <Image src="/logos/logo-2-white.png" alt="Pitron Logo" width={100} height={36} className="h-7 w-auto object-contain" style={{ filter: 'var(--logo-filter)' }} />
                        </Link>
                        <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xs mb-6">
                            Enterprise software engineering that scales. We build world-class digital products for ambitious companies across Africa and beyond.
                        </p>
                        {/* Contact Info */}
                        <div className="flex flex-col gap-3 mb-6">
                            <a href="mailto:hello@pitrontech.com" className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[#1d505e] transition-colors">
                                <Mail className="w-4 h-4 text-[#1d505e]" />
                                hello@pitrontech.com
                            </a>
                            <a href="tel:+251911000000" className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[#1d505e] transition-colors">
                                <Phone className="w-4 h-4 text-[#1d505e]" />
                                +251 911 000 000
                            </a>
                            <div className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                                <MapPin className="w-4 h-4 text-[#1d505e] mt-0.5 flex-shrink-0" />
                                Addis Ababa, Ethiopia
                            </div>
                        </div>
                        {/* Social */}
                        <div className="flex items-center gap-3">
                            {[
                                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                                { Icon: Github, href: "#", label: "GitHub" },
                                { Icon: Twitter, href: "#", label: "Twitter" },
                            ].map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-[var(--text-muted)] hover:text-[#1d505e] hover:border-[rgba(29,80,94,0.3)] transition-all duration-200 hover:shadow-[0_0_15px_rgba(29,80,94,0.2)]"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {[
                        { title: "Company", links: footerLinks.company },
                        { title: "Services", links: footerLinks.services },
                        { title: "Technologies", links: footerLinks.technologies },
                    ].map(({ title, links }) => (
                        <div key={title}>
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d505e] mb-4">
                                {title}
                            </h4>
                            <ul className="flex flex-col gap-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="glass-card rounded-2xl p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="font-display font-bold text-xl text-[var(--text-heading)] mb-1">
                            Ready to build something great?
                        </h3>
                        <p className="text-[var(--text-muted)] text-sm">
                            Let&apos;s turn your vision into a world-class digital product.
                        </p>
                    </div>
                    <Link href="/contact" className="btn-primary whitespace-nowrap flex-shrink-0">
                        Start a Project →
                    </Link>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-[rgba(29,80,94,0.06)]">
                    <p className="text-xs text-[var(--text-muted)]">
                        © {new Date().getFullYear()} PitronTech. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {footerLinks.legal.map((link) => (
                            <Link key={link.label} href={link.href} className="text-xs text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <p className="text-xs text-[var(--text-muted)]">
                        Built with ❤ in Addis Ababa
                    </p>
                </div>
            </div>
        </footer>
    );
}
