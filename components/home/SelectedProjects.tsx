"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import SectionReveal from "@/components/shared/SectionReveal";

const featured = projects.filter((p) => p.featured);

export default function SelectedProjects() {
    return (
        <section className="section-padding">
            <div className="max-w-7xl mx-auto px-6">
                <SectionReveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-14">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(29,80,94,0.15)] text-[#1d505e] text-xs font-semibold tracking-wider uppercase mb-4">
                            Selected Work
                        </div>
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-heading)]">
                            Projects That <span className="gradient-text">Define Us</span>
                        </h2>
                    </div>
                    <Link href="/work" className="btn-outline flex items-center gap-2 flex-shrink-0">
                        View All Work <ArrowRight className="w-4 h-4" />
                    </Link>
                </SectionReveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {featured.map((project, i) => (
                        <SectionReveal key={project.id} delay={i * 0.1} direction="up">
                            <Link
                                href={`/work/${project.id}`}
                                className="group flex flex-col h-full glass-card rounded-2xl overflow-hidden hover:border-[rgba(29,80,94,0.2)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(29,80,94,0.07)] hover:-translate-y-2"
                            >
                                {/* Image */}
                                <div className="relative h-52 flex-shrink-0 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e22]/80 to-transparent" />
                                    {/* Category Badge */}
                                    <div
                                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                                        style={{
                                            backgroundColor: `${project.color}20`,
                                            border: `1px solid ${project.color}40`,
                                            color: project.color,
                                        }}
                                    >
                                        {project.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="font-display font-bold text-[var(--text-heading)] text-lg mb-2 group-hover:text-[#1d505e] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4 flex-grow">
                                        {project.shortDesc}
                                    </p>

                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span key={tech} className="px-2 py-0.5 rounded text-xs text-[#1d505e] bg-[rgba(29,80,94,0.06)] border border-[rgba(29,80,94,0.12)]">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-1 text-xs font-semibold text-[#1d505e] opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        View Case Study <ArrowRight className="w-3 h-3" />
                                    </div>
                                </div>
                            </Link>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
