"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Menu, X, ChevronDown, ArrowRight, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    {
        label: "About",
        href: "/about",
        hasMega: true,
        columns: [
            {
                title: "Company",
                items: [
                    { label: "Inside PitronTech", href: "/about/inside", desc: "Our story, mission & vision" },
                    { label: "Company Culture", href: "/about/culture", desc: "How we work and who we are" },
                    { label: "FAQ", href: "/about/faq", desc: "Common questions answered" },
                ],
            },
            {
                title: "Team",
                items: [
                    { label: "Leadership Team", href: "/about/leadership", desc: "Meet our executive team" },
                    { label: "Our Tech Talent", href: "/about/talent", desc: "The engineers behind the code" },
                ],
            },
            {
                title: "Opportunities",
                items: [
                    { label: "Careers", href: "/careers", desc: "Join our growing team" },
                    { label: "Job Opportunities", href: "https://jobs.pitrontech.com", desc: "Open positions →", external: true },
                    { label: "Contact Us", href: "/contact", desc: "Get in touch with us" },
                ],
            },
        ],
    },
    {
        label: "Services",
        href: "/services",
        hasMega: true,
        columns: [
            {
                title: "Web & Backend",
                items: [
                    { label: "Frontend Development", href: "/services#frontend", desc: "React, Next.js, TypeScript" },
                    { label: "Backend Development", href: "/services#backend", desc: "Node.js, Python, Go, Java" },
                    { label: "Web Development", href: "/services#web", desc: "End-to-end web solutions" },
                    { label: "CMS Development", href: "/services#cms", desc: "Custom content systems" },
                ],
            },
            {
                title: "Mobile & Design",
                items: [
                    { label: "iOS App Development", href: "/services#ios", desc: "Swift & SwiftUI" },
                    { label: "Android App Development", href: "/services#android", desc: "Kotlin & Java" },
                    { label: "Mobile App Development", href: "/services#mobile", desc: "React Native & Flutter" },
                    { label: "UI/UX Design", href: "/services#uiux", desc: "Research-driven design" },
                ],
            },
            {
                title: "Enterprise",
                items: [
                    { label: "SaaS Development", href: "/services#saas", desc: "Multi-tenant platforms" },
                    { label: "eCommerce Development", href: "/services#ecommerce", desc: "Scalable storefronts" },
                    { label: "ERP Development", href: "/services#erp", desc: "Enterprise resource planning" },
                    { label: "DevOps", href: "/services#devops", desc: "CI/CD & cloud automation" },
                ],
            },
        ],
    },
    {
        label: "Technologies",
        href: "/technologies",
        hasMega: true,
        columns: [
            {
                title: "Frontend",
                items: [
                    { label: "React & Next.js", href: "/technologies#react", desc: "Modern web frameworks" },
                    { label: "TypeScript", href: "/technologies#typescript", desc: "Type-safe development" },
                    { label: "TailwindCSS", href: "/technologies#tailwind", desc: "Utility-first CSS" },
                    { label: "JavaScript", href: "/technologies#js", desc: "Core web language" },
                ],
            },
            {
                title: "Backend",
                items: [
                    { label: "Node.js & NestJS", href: "/technologies#node", desc: "Server-side JavaScript" },
                    { label: "Python & Django", href: "/technologies#python", desc: "Versatile backend stack" },
                    { label: "Golang", href: "/technologies#go", desc: "High-performance systems" },
                    { label: "Java", href: "/technologies#java", desc: "Enterprise-grade backend" },
                ],
            },
            {
                title: "Cloud & AI",
                items: [
                    { label: "Microsoft Azure", href: "/technologies#azure", desc: "Enterprise cloud" },
                    { label: "AWS", href: "/technologies#aws", desc: "Amazon Web Services" },
                    { label: "Google Cloud", href: "/technologies#gcp", desc: "GCP infrastructure" },
                    { label: "AI & Machine Learning", href: "/technologies#ai", desc: "Intelligent systems" },
                ],
            },
        ],
    },
    { label: "Focuses", href: "/focuses" },
    { label: "Our Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
];

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        if (typeof window === "undefined") return "dark";
        const savedTheme = window.localStorage.getItem("theme");
        return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
    });
    const dropdownRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const dropdownAnimRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const openDropdown = (label: string) => {
        if (activeDropdown === label) return;
        setActiveDropdown(label);

        if (dropdownRef.current) {
            dropdownAnimRef.current?.kill();

            gsap.set(dropdownRef.current, {
                display: "block",
                clipPath: "inset(0 0 100% 0)",
                opacity: 1,
            });

            dropdownAnimRef.current = gsap.to(dropdownRef.current, {
                clipPath: "inset(0 0 0% 0)",
                duration: 0.4,
                ease: "power3.out",
            });
        }

        if (overlayRef.current) {
            gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: "block" });
        }
    };

    const closeDropdown = () => {
        if (!dropdownRef.current) return;
        dropdownAnimRef.current?.kill();

        dropdownAnimRef.current = gsap.to(dropdownRef.current, {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                if (dropdownRef.current) {
                    gsap.set(dropdownRef.current, { display: "none" });
                }
                setActiveDropdown(null);
            },
        });

        if (overlayRef.current) {
            gsap.to(overlayRef.current, { opacity: 0, duration: 0.25, display: "none" });
        }
    };

    const activeLink = navLinks.find((l) => l.label === activeDropdown);

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
        window.localStorage.setItem("theme", nextTheme);
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    scrolled
                        ? "bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--nav-border)] shadow-[0_4px_30px_rgba(29,80,94,0.05)]"
                        : "bg-transparent"
                )}
            >
                <div className="px-4 sm:px-6 lg:px-10 xl:px-14">
                    <div className="flex items-center justify-between h-[72px]">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 group"
                            onClick={() => {
                                closeDropdown();
                                setMobileOpen(false);
                                setMobileDropdown(null);
                            }}
                        >
                            {/* <Image src="/logos/pitron-logo-white-2.png" alt="Pitron Icon" width={36} height={36} className="w-9 h-9 object-contain" /> */}
                            <Image src="/logos/logo-2-white.png" alt="Pitron Logo" width={100} height={36} className="h-7 w-auto object-contain" style={{ filter: 'var(--logo-filter)' }} />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <div
                                    key={link.label}
                                    className="relative"
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                                            activeDropdown === link.label
                                                ? "text-[#1d505e] bg-[rgba(29,80,94,0.08)]"
                                                : "text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-[rgba(29,80,94,0.05)]"
                                        )}
                                        onClick={(e) => {
                                            if (link.hasMega) {
                                                e.preventDefault();
                                                if (activeDropdown === link.label) {
                                                    closeDropdown();
                                                } else {
                                                    openDropdown(link.label);
                                                }
                                            } else {
                                                closeDropdown();
                                            }
                                        }}
                                    >
                                        {link.label}
                                        {link.hasMega && (
                                            <ChevronDown
                                                className={cn(
                                                    "w-3.5 h-3.5 transition-transform duration-300",
                                                    activeDropdown === link.label ? "rotate-180 text-[#1d505e]" : ""
                                                )}
                                            />
                                        )}
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="hidden lg:flex items-center gap-2">
                            <button
                                type="button"
                                onClick={toggleTheme}
                                className="p-2 rounded-lg border border-[var(--nav-border)] text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-[rgba(29,80,94,0.06)] transition-colors"
                                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                                title={theme === "dark" ? "Light mode" : "Dark mode"}
                            >
                                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            </button>
                            <Link
                                href="/contact"
                                className="btn-primary text-sm"
                                onClick={closeDropdown}
                            >
                                Let&apos;s Chat
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="flex items-center lg:hidden">
                            <button
                                className="p-2 text-[var(--foreground)] rounded-lg hover:bg-[rgba(29,80,94,0.05)] transition-colors"
                                onClick={() => {
                                    setMobileOpen((prev) => {
                                        const next = !prev;
                                        if (!next) {
                                            setMobileDropdown(null);
                                        }
                                        return next;
                                    });
                                }}
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="lg:hidden border-t border-[var(--nav-border)] bg-[var(--nav-bg)] backdrop-blur-xl">
                        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
                            <button
                                type="button"
                                onClick={toggleTheme}
                                className="px-4 py-3 text-left rounded-lg border border-[var(--nav-border)] text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-[rgba(29,80,94,0.05)] transition-all font-medium flex items-center gap-2"
                                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                                {theme === "dark" ? "Light mode" : "Dark mode"}
                            </button>
                            {navLinks.map((link) => (
                                link.hasMega && link.columns ? (
                                    <div key={link.label} className="rounded-lg border border-[var(--nav-border)] overflow-hidden">
                                        <button
                                            type="button"
                                            className="w-full px-4 py-3 text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-[rgba(29,80,94,0.05)] transition-all font-medium flex items-center justify-between"
                                            onClick={() => {
                                                setMobileDropdown((prev) => (prev === link.label ? null : link.label));
                                            }}
                                            aria-expanded={mobileDropdown === link.label}
                                            aria-controls={`mobile-submenu-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                                        >
                                            <span>{link.label}</span>
                                            <ChevronDown
                                                className={cn(
                                                    "w-4 h-4 transition-transform duration-300",
                                                    mobileDropdown === link.label ? "rotate-180 text-[#1d505e]" : ""
                                                )}
                                            />
                                        </button>

                                        {mobileDropdown === link.label && (
                                            <div
                                                id={`mobile-submenu-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                                                className="px-4 pb-3 bg-[rgba(29,80,94,0.02)] border-t border-[var(--nav-border)]"
                                            >
                                                <Link
                                                    href={link.href}
                                                    className="block py-2 text-sm font-semibold text-[#1d505e]"
                                                    onClick={() => {
                                                        setMobileOpen(false);
                                                        setMobileDropdown(null);
                                                        closeDropdown();
                                                    }}
                                                >
                                                    Explore all {link.label}
                                                </Link>

                                                {link.columns.map((col) => (
                                                    <div key={col.title} className="pt-2">
                                                        <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)] mb-1">
                                                            {col.title}
                                                        </p>
                                                        <div className="flex flex-col">
                                                            {col.items.map((item) => (
                                                                <Link
                                                                    key={item.label}
                                                                    href={item.href}
                                                                    target={("external" in item && item.external) ? "_blank" : undefined}
                                                                    rel={("external" in item && item.external) ? "noopener noreferrer" : undefined}
                                                                    className="py-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-heading)]"
                                                                    onClick={() => {
                                                                        setMobileOpen(false);
                                                                        setMobileDropdown(null);
                                                                        closeDropdown();
                                                                    }}
                                                                >
                                                                    {item.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="px-4 py-3 text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-[rgba(29,80,94,0.05)] rounded-lg transition-all font-medium"
                                        onClick={() => {
                                            setMobileOpen(false);
                                            setMobileDropdown(null);
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            ))}
                            <Link
                                href="/contact"
                                className="btn-primary text-sm text-center mt-2"
                                onClick={() => {
                                    setMobileOpen(false);
                                    setMobileDropdown(null);
                                }}
                            >
                                Let&apos;s Chat
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Mega Dropdown Panel */}
            <div
                ref={dropdownRef}
                className="mega-dropdown hidden"
            >
                <div className="glass border-b border-[var(--glass-border)] shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
                    <div className="max-w-7xl mx-auto px-6 py-10">
                        {activeLink?.columns && (
                            <div className="flex flex-col lg:flex-row gap-12">
                                {/* Left Sidebar (Featured/Overview) */}
                                <div className="lg:w-1/3 flex flex-col gap-4 lg:border-r border-[var(--glass-border)] lg:pr-8">
                                    <h2 className="text-3xl font-display font-bold text-[var(--text-heading)] mb-2">
                                        {activeLink.label}.
                                    </h2>
                                    <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                                        Get top-tier {activeLink.label.toLowerCase()} services built around your specific business needs and goals. We provide end-to-end solutions for enterprise scale.
                                    </p>
                                    <Link 
                                        href={activeLink.href} 
                                        className="text-[#1d505e] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all w-fit"
                                        onClick={closeDropdown}
                                    >
                                        Explore all {activeLink.label.toLowerCase()} <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>

                                {/* Right Columns */}
                                <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
                                    {activeLink.columns.map((col) => (
                                        <div key={col.title}>
                                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-5 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-[#1d505e] rounded-sm"></span>
                                                {col.title}
                                            </h3>
                                            <div className="flex flex-col gap-5">
                                                {col.items.map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        href={item.href}
                                                        target={("external" in item && item.external) ? "_blank" : undefined}
                                                        rel={("external" in item && item.external) ? "noopener noreferrer" : undefined}
                                                        className="group flex flex-col gap-0.5 hover:translate-x-1 transition-transform duration-200"
                                                        onClick={closeDropdown}
                                                    >
                                                        <span className="text-sm font-medium text-[var(--text-heading)] group-hover:text-[#1d505e] transition-colors">
                                                            {item.label}
                                                        </span>
                                                        <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--text-heading)] transition-colors">{item.desc}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div
                ref={overlayRef}
                className="hidden fixed inset-0 top-[72px] z-40 bg-black/40 backdrop-blur-[2px]"
                onClick={closeDropdown}
                style={{ opacity: 0 }}
            />
        </>
    );
}
