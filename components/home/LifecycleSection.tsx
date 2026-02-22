"use client";

import SectionReveal from "@/components/shared/SectionReveal";
import { Code2, Wrench, Rocket, Activity } from "lucide-react";

export default function LifecycleSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-[var(--background)]">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <SectionReveal direction="up">
                        <p className="text-[#1d505e] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                            Empower your business with end-to-end software solutions
                        </p>
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-heading)] mb-6 leading-tight">
                            Continuous excellence across the software development lifecycle
                        </h2>
                        <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                            Embed quality, scalability, and performance directly into your digital products. From initial architecture design to production deployment, PitronTech provides consistent engineering excellence without slowing down innovation.
                        </p>
                    </SectionReveal>
                </div>

                <SectionReveal direction="up" delay={0.2} className="relative max-w-4xl mx-auto h-[600px] hidden md:flex items-center justify-center">
                    {/* Central Hub */}
                    <div className="absolute z-30 w-40 h-40 bg-[var(--background)] rounded-full shadow-[0_0_40px_rgba(29,80,94,0.15)] border-4 border-[#1d505e] flex items-center justify-center flex-col gap-2">
                        <div className="text-2xl font-display font-bold text-[var(--text-heading)]">PitronTech</div>
                        <div className="text-[10px] font-semibold text-[#1d505e] uppercase tracking-widest text-center px-2">Engineering Core</div>
                    </div>

                    {/* Circular Track */}
                    <div className="absolute z-10 w-[400px] h-[400px] rounded-full border-2 border-dashed border-[var(--glass-border)] animate-[spin_60s_linear_infinite]" />
                    <div className="absolute z-10 w-[500px] h-[500px] rounded-full border border-[rgba(29,80,94,0.05)]" />

                    {/* Quadrants */}
                    <div className="absolute inset-0 z-20">
                        {/* Top Left: Code */}
                        <Quadrant 
                            icon={Code2} 
                            title="Design" 
                            color="#3b82f6" 
                            position="top-left"
                            items={["System Architecture", "UI/UX Prototyping", "Tech Stack Selection"]}
                        />
                        
                        {/* Top Right: Build */}
                        <Quadrant 
                            icon={Wrench} 
                            title="Develop" 
                            color="#8b5cf6" 
                            position="top-right"
                            items={["Agile Sprints", "Code Reviews", "Automated Testing"]}
                        />

                        {/* Bottom Right: Deploy */}
                        <Quadrant 
                            icon={Rocket} 
                            title="Deploy" 
                            color="#10b981" 
                            position="bottom-right"
                            items={["CI/CD Pipelines", "Cloud Provisioning", "Zero-downtime Release"]}
                        />

                        {/* Bottom Left: Run */}
                        <Quadrant 
                            icon={Activity} 
                            title="Maintain" 
                            color="#f59e0b" 
                            position="bottom-left"
                            items={["Performance Monitoring", "Security Patching", "Feature Scaling"]}
                        />
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
}

function Quadrant({ icon: Icon, title, color, position, items }: { icon: React.ElementType, title: string, color: string, position: string, items: string[] }) {
    const posClasses = {
        "top-left": "top-[10%] left-[15%] items-end text-right",
        "top-right": "top-[10%] right-[15%] items-start text-left",
        "bottom-right": "bottom-[10%] right-[15%] items-start text-left",
        "bottom-left": "bottom-[10%] left-[15%] items-end text-right",
    };

    const isRight = position.includes("right");

    return (
        <div className={`absolute flex flex-col gap-4 ${posClasses[position as keyof typeof posClasses]}`}>
            <div className={`flex items-center gap-3 ${isRight ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-12 h-12 rounded-2xl bg-[var(--background)] shadow-lg border border-[var(--glass-border)] flex items-center justify-center" style={{ color }}>
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-[var(--text-heading)]">{title}</h3>
            </div>
            <div className="flex flex-col gap-2">
                {items.map((item, i) => (
                    <div key={i} className={`px-4 py-2 rounded-lg bg-[rgba(29,80,94,0.03)] border border-[var(--glass-border)] text-sm font-medium text-[var(--text-muted)] shadow-sm backdrop-blur-sm transition-transform hover:scale-105 cursor-default ${isRight ? 'origin-left' : 'origin-right'}`}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
