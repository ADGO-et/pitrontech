import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
    title: "Our Work | PitronTech",
    description: "Explore PitronTech's portfolio of enterprise software projects.",
};

export default function WorkPage() {
    const categories = ["All", "Construction", "Manufacturing", "Technology", "Healthcare", "Finance"];

    return (
        <div className="pt-25 min-h-screen bg-background">
            {/* Hero */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionReveal trigger={false}>
                        <h1 className="font-display font-black text-3xl md:text-5xl text-text-heading mb-6 max-w-4xl">
                            Enterprise Software Built To Last
                        </h1>
                        <p className="text-text-muted text-lg max-w-2xl mb-12">
                            Real products, real impact. A selection of enterprise systems we&apos;ve designed, built, and shipped.
                        </p>

                        {/* Filter Pills */}
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category, index) => (
                                <button
                                    key={category}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                                        index === 0
                                            ? "bg-[#1d505e] text-white"
                                            : "bg-transparent border border-gray-200 text-text-muted hover:border-[#1d505e] hover:text-[#1d505e]"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </SectionReveal>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {projects.map((project, i) => (
                            <SectionReveal key={project.id} delay={i * 0.08} direction="up">
                                <Link
                                    href={`/work/${project.id}`}
                                    className="group flex flex-col h-full glass-card rounded-2xl overflow-hidden hover:border-accent-glow transition-all duration-500 hover:shadow-[0_0_40px_rgba(29,80,94,0.07)] hover:-translate-y-2"
                                >
                                    {/* Image */}
                                    <div className="relative h-56 shrink-0 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-dark-2 via-dark-2/20 to-transparent" />
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
                                        {project.featured && (
                                            <div className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold bg-[rgba(29,80,94,0.15)] border border-[rgba(29,80,94,0.3)] text-[#1d505e]">
                                                Featured
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col grow">
                                        <h3 className="font-display font-bold text-text-heading text-lg mb-2 group-hover:text-[#1d505e] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-text-muted text-sm leading-relaxed mb-4 grow">
                                            {project.shortDesc}
                                        </p>

                                        {/* Tech tags */}
                                        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                                            {project.technologies.map((tech) => (
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

            {/* CTA */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <SectionReveal>
                        <div className="max-w-4xl mx-auto bg-primary dark:bg-[#1d505e] rounded-3xl p-10 md:p-16 relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                                    Got a project in mind?
                                </h2>
                                <p className="text-white/80 text-lg mb-10">
                                    We&apos;d love to hear about your vision. Let&apos;s build something great together.
                                </p>
                                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-primary dark:text-[#1d505e] font-semibold hover:bg-gray-100 transition-colors gap-2">
                                    Start a Project <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </SectionReveal>
                </div>
            </section>
        </div>
    );
}
