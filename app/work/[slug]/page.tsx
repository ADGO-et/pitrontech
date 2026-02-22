import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.id === slug);
    if (!project) return { title: "Project Not Found" };
    return { title: `${project.title} | PitronTech`, description: project.shortDesc };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.id === slug);
    if (!project) notFound();

    const others = projects.filter((p) => p.id !== slug).slice(0, 2);

    return (
        <div className="pt-[72px] min-h-screen">
            {/* Back */}
            <div className="max-w-7xl mx-auto px-6 pt-8">
                <Link href="/work" className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Work
                </Link>
            </div>

            {/* Hero Image */}
            <div className="relative h-[50vh] mt-6 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-10">
                    <div
                        className="inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-3"
                        style={{ backgroundColor: `${project.color}20`, border: `1px solid ${project.color}40`, color: project.color }}
                    >
                        {project.category}
                    </div>
                    <h1 className="font-display font-black text-4xl md:text-6xl text-[var(--text-heading)]">{project.title}</h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-10">
                    {/* Main */}
                    <div className="md:col-span-2">
                        <h2 className="font-display font-bold text-2xl text-[var(--text-heading)] mb-4">Project Overview</h2>
                        <p className="text-[var(--text-muted)] leading-relaxed text-lg mb-8">{project.description}</p>
                        <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                            Start a Similar Project <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Sidebar */}
                    <div className="flex flex-col gap-5">
                        <div className="glass-card rounded-2xl p-6">
                            <h3 className="text-[#1d505e] text-xs font-bold uppercase tracking-wider mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="px-3 py-1 rounded-full text-xs font-semibold text-[#1d505e] bg-[rgba(29,80,94,0.08)] border border-[rgba(29,80,94,0.15)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="glass-card rounded-2xl p-6">
                            <h3 className="text-[#1d505e] text-xs font-bold uppercase tracking-wider mb-3">Category</h3>
                            <p className="text-[var(--text-heading)] font-semibold">{project.category}</p>
                        </div>
                    </div>
                </div>

                {/* Related */}
                {others.length > 0 && (
                    <div className="mt-16 pt-10 border-t border-[rgba(29,80,94,0.08)]">
                        <h2 className="font-display font-bold text-2xl text-[var(--text-heading)] mb-8">More Projects</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {others.map((p) => (
                                <Link key={p.id} href={`/work/${p.id}`} className="glass-card rounded-2xl overflow-hidden group hover:border-[rgba(29,80,94,0.2)] transition-all hover:-translate-y-1">
                                    <div className="relative h-40 overflow-hidden">
                                        <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--hero-bg)] to-transparent" />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-[var(--text-heading)] group-hover:text-[#1d505e] transition-colors">{p.title}</h3>
                                        <p className="text-[var(--text-muted)] text-sm mt-1">{p.shortDesc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
