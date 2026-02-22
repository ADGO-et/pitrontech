import { cultureStatements } from "@/lib/data/team";
import SectionReveal from "@/components/shared/SectionReveal";
import * as Icons from "lucide-react";

type IconName = keyof typeof Icons;

export default function CultureHighlight() {
    return (
        <section className="section-padding relative">
            <div className="max-w-7xl mx-auto px-6">
                <SectionReveal className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(29,80,94,0.15)] text-[#1d505e] text-xs font-semibold tracking-wider uppercase mb-4">
                        Our Culture
                    </div>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-heading)]">
                        The PitronTech <span className="gradient-text">Way</span>
                    </h2>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cultureStatements.map((item, i) => {
                        const IconComp = (Icons[item.icon as IconName] || Icons.Star) as React.ElementType;
                        return (
                            <SectionReveal key={item.icon} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                                <div className="glass-card rounded-2xl p-7 h-full group hover:border-[rgba(29,80,94,0.2)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(29,80,94,0.06)]">
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-[rgba(29,80,94,0.08)] border border-[rgba(29,80,94,0.12)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(29,80,94,0.12)] transition-colors">
                                            <IconComp className="w-6 h-6 text-[#1d505e]" />
                                        </div>
                                        <div>
                                            <h3 className="font-display font-bold text-[var(--text-heading)] text-lg mb-1">{item.title}</h3>
                                            <p className="text-[#1d505e] text-sm font-medium italic mb-3">&ldquo;{item.statement}&rdquo;</p>
                                            <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </SectionReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
