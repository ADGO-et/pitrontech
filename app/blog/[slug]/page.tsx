import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/data/content";
import SectionReveal from "@/components/shared/SectionReveal";

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.id,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.id === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="pt-[72px] min-h-screen">
            <article className="pb-20">
                {/* Hero Section */}
                <section className="relative pt-16 pb-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-gradient-start)] via-[var(--hero-bg)] to-[var(--hero-gradient-end)]" />
                    <div className="absolute inset-0 bg-dots opacity-40" />
                    <div className="relative max-w-4xl mx-auto px-6">
                        <SectionReveal trigger={false}>
                            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] hover:text-[#1d505e] transition-colors mb-8">
                                <ArrowLeft className="w-4 h-4" /> Back to Blog
                            </Link>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[rgba(29,80,94,0.15)] border border-[rgba(29,80,94,0.25)] text-[#1d505e]">
                                    {post.category}
                                </span>
                                <span className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                                </span>
                            </div>
                            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[var(--text-heading)] mb-6 leading-tight">
                                {post.title}
                            </h1>
                            <p className="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[rgba(29,80,94,0.1)] flex items-center justify-center text-[#1d505e] font-bold text-lg border border-[rgba(29,80,94,0.2)]">
                                    {post.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-[var(--text-heading)]">{post.author}</p>
                                    <p className="text-sm text-[var(--text-muted)] flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" /> {post.date}
                                    </p>
                                </div>
                            </div>
                        </SectionReveal>
                    </div>
                </section>

                {/* Featured Image */}
                <section className="max-w-5xl mx-auto px-6 -mt-12 relative z-10 mb-16">
                    <SectionReveal delay={0.2}>
                        <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-[rgba(29,80,94,0.1)]">
                            <Image src={post.image} alt={post.title} fill className="object-cover" unoptimized />
                        </div>
                    </SectionReveal>
                </section>

                {/* Content */}
                <section className="max-w-3xl mx-auto px-6">
                    <SectionReveal>
                        <div className="prose prose-lg prose-invert max-w-none">
                            <h2 className="text-2xl font-bold text-[var(--text-heading)] mt-10 mb-4">The Challenge</h2>
                            <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                                Enterprise software development is complex. It requires a deep understanding of business processes, scalable architecture, and a focus on user experience. Many companies struggle to balance these requirements while moving fast.
                            </p>
                            <h2 className="text-2xl font-bold text-[var(--text-heading)] mt-10 mb-4">Our Approach</h2>
                            <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                                At PitronTech, we believe in a pragmatic approach to engineering. We choose the right tools for the job, prioritize maintainability, and always keep the end-user in mind.
                            </p>
                            <ul className="list-disc pl-6 text-[var(--text-muted)] space-y-2 mb-6">
                                <li>Focus on business value over technical novelty.</li>
                                <li>Build for scale from day one, but don&apos;t over-engineer.</li>
                                <li>Invest in automated testing and CI/CD.</li>
                                <li>Maintain open communication with stakeholders.</li>
                            </ul>
                            <h2 className="text-2xl font-bold text-[var(--text-heading)] mt-10 mb-4">Conclusion</h2>
                            <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                                By following these principles, we&apos;ve been able to deliver high-quality software that drives real business results for our clients.
                            </p>
                        </div>
                    </SectionReveal>
                </section>
            </article>
        </div>
    );
}
