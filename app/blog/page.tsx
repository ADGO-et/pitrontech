"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/data/content";
import SectionReveal from "@/components/shared/SectionReveal";
import { cn } from "@/lib/utils";

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const filtered = blogPosts.filter((p) => {
        const matchesCategory = activeCategory === "all" || p.category === activeCategory;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // For the top featured section, we take the first 3 posts if no filters are applied
    const isFiltering = activeCategory !== "all" || searchQuery !== "";
    const featuredPosts = isFiltering ? [] : blogPosts.slice(0, 3);
    const gridPosts = isFiltering ? filtered : blogPosts.slice(3);

    return (
        <div className="pt-[72px] min-h-screen bg-[var(--background)]">
            {/* Featured Section */}
            {!isFiltering && featuredPosts.length >= 3 && (
                <section className="pt-12 pb-8">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Large Featured Post (Left) */}
                            <SectionReveal className="lg:col-span-2 h-full">
                                <Link href={`/blog/${featuredPosts[0].id}`} className="group block relative h-full min-h-[400px] rounded-3xl overflow-hidden">
                                    <Image src={featuredPosts[0].image} alt={featuredPosts[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 group-hover:text-[#1d505e] transition-colors">
                                            {featuredPosts[0].title}
                                        </h2>
                                        <div className="flex items-center gap-2 text-[#1d505e] font-semibold">
                                            Read More <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </SectionReveal>

                            {/* Small Featured Posts (Right) */}
                            <div className="flex flex-col gap-6 h-full">
                                {featuredPosts.slice(1, 3).map((post, i) => (
                                    <SectionReveal key={post.id} delay={0.1 * (i + 1)} className="flex-1">
                                        <Link href={`/blog/${post.id}`} className="group block relative h-full min-h-[200px] rounded-3xl overflow-hidden">
                                            <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-[#1d505e] transition-colors line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-[#1d505e] font-semibold text-sm">
                                                    Read More <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </Link>
                                    </SectionReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Filter Bar */}
            <section className="py-6 border-b border-[var(--glass-border)] sticky top-[72px] z-40 bg-[var(--background)]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Category Dropdown */}
                    <div className="relative w-full sm:w-64">
                        <button 
                            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                            className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-[var(--glass-border)] bg-[var(--background)] text-[var(--text-heading)] font-medium hover:border-[#1d505e] transition-colors"
                        >
                            {blogCategories.find(c => c.id === activeCategory)?.label || "Category"}
                            <ChevronDown className={cn("w-4 h-4 transition-transform", isCategoryOpen && "rotate-180")} />
                        </button>
                        
                        {isCategoryOpen && (
                            <div className="absolute top-full left-0 right-0 mt-2 py-2 rounded-xl border border-[var(--glass-border)] bg-[var(--background)] shadow-xl z-50">
                                {blogCategories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => {
                                            setActiveCategory(cat.id);
                                            setIsCategoryOpen(false);
                                        }}
                                        className={cn(
                                            "w-full text-left px-4 py-2 text-sm transition-colors",
                                            activeCategory === cat.id ? "bg-[#1d505e]/10 text-[#1d505e] font-semibold" : "text-[var(--text-muted)] hover:bg-[var(--glass-border)] hover:text-[var(--text-heading)]"
                                        )}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full sm:w-80">
                        <input 
                            type="text" 
                            placeholder="Search" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[var(--glass-border)] bg-[var(--background)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#1d505e] transition-colors"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto px-6">
                    {gridPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {gridPosts.map((post, i) => (
                                <SectionReveal key={post.id} delay={i * 0.05}>
                                    <Link href={`/blog/${post.id}`} className="group bg-[var(--background)] rounded-2xl overflow-hidden border border-[var(--glass-border)] hover:border-[#1d505e]/50 transition-all hover:-translate-y-1 hover:shadow-lg h-full flex flex-col">
                                        <div className="relative h-56 overflow-hidden flex-shrink-0">
                                            <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="font-display font-bold text-xl text-[var(--text-heading)] mb-3 group-hover:text-[#1d505e] transition-colors line-clamp-2">{post.title}</h3>
                                            <div className="flex items-center gap-2 text-[#c25e30] font-semibold text-sm mt-auto">
                                                Read More <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </Link>
                                </SectionReveal>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-[var(--text-muted)] text-lg">No posts found matching your criteria.</p>
                        </div>
                    )}

                    {/* Pagination (Static UI for now) */}
                    {gridPosts.length > 0 && (
                        <div className="mt-16 flex items-center justify-center gap-2">
                            <button className="w-8 h-8 flex items-center justify-center rounded-full text-[#c25e30] font-bold text-sm">1</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full text-[var(--text-muted)] hover:text-[var(--text-heading)] font-bold text-sm transition-colors">2</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full text-[var(--text-muted)] hover:text-[var(--text-heading)] font-bold text-sm transition-colors">3</button>
                            <span className="text-[var(--text-muted)]">...</span>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full text-[var(--text-muted)] hover:text-[var(--text-heading)] font-bold text-sm transition-colors">10</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full text-[var(--text-heading)] hover:text-[#1d505e] transition-colors ml-2">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
