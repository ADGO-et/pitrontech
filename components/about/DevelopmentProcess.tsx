"use client";

import SectionReveal from "@/components/shared/SectionReveal";
import { ClipboardCheck, Presentation, Code2, MonitorPlay, Search } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Assess",
        desc: "We evaluate your current technical infrastructure, business requirements, and user needs to identify the optimal solution.",
        color: "#3b82f6", // Blue
        bg: "rgba(59, 130, 246, 0.1)",
        icon: ClipboardCheck,
        left: "70.58%",
        top: "21.68%",
    },
    {
        id: 2,
        title: "Plan",
        desc: "We design the system architecture, select the right tech stack, and create a comprehensive agile roadmap.",
        color: "#eab308", // Yellow
        bg: "rgba(234, 179, 8, 0.1)",
        icon: Presentation,
        left: "83.28%",
        top: "60.83%",
    },
    {
        id: 3,
        title: "Execute",
        desc: "Our engineering team writes clean, maintainable code, building your product with rigorous testing and CI/CD practices.",
        color: "#f97316", // Orange
        bg: "rgba(249, 115, 22, 0.1)",
        icon: Code2,
        left: "50%",
        top: "85%",
    },
    {
        id: 4,
        title: "Monitor",
        desc: "We deploy to production, continuously tracking system performance, security metrics, and user analytics.",
        color: "#a855f7", // Purple
        bg: "rgba(168, 85, 247, 0.1)",
        icon: MonitorPlay,
        left: "16.72%",
        top: "60.83%",
    },
    {
        id: 5,
        title: "Refine",
        desc: "We iterate based on real-world data and feedback, scaling the application and adding new features.",
        color: "#84cc16", // Green
        bg: "rgba(132, 204, 22, 0.1)",
        icon: Search,
        left: "29.42%",
        top: "21.68%",
    },
];

export default function DevelopmentProcess() {
    return (
        <section className="py-24 relative overflow-hidden bg-background border-t border-(--glass-border)">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <SectionReveal direction="left">
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-(--text-heading) mb-6 leading-tight">
                            Our Enterprise <span className="text-primary dark:text-[#1d505e]">Software Development Process</span>
                        </h2>
                        <p className="text-(--text-muted) text-lg mb-10">
                            Our engineering lifecycle starts with a <em className="font-semibold">Technology Blueprint</em> — where we architect scalable, secure, and high-performance software tailored to your business:
                        </p>

                        <div className="flex flex-col gap-6">
                            {steps.map((step) => (
                                <div key={step.id} className="flex gap-4">
                                    <div className="font-display font-bold text-lg mt-0.5" style={{ color: step.color }}>
                                        {step.id}
                                    </div>
                                    <div>
                                        <p className="text-(--text-muted) leading-relaxed">
                                            <strong style={{ color: step.color }}>{step.title}:</strong> {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionReveal>

                    {/* Right Diagram */}
                    <SectionReveal direction="right" delay={0.2} className="relative h-[500px] md:h-[600px] flex items-center justify-center">
                        <div className="relative w-full max-w-[500px] aspect-square">
                            {/* SVG Circle and Arrows */}
                            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full text-primary dark:text-[#1d505e]">
                                <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                                {/* Arrows */}
                                {[0, 72, 144, 216, 288].map((angle) => (
                                    <g key={angle} transform={`rotate(${angle} 200 200) translate(200 60)`}>
                                        <polygon points="-6,-5 6,0 -6,5" fill="currentColor" opacity="0.8" />
                                    </g>
                                ))}
                            </svg>

                            {/* Nodes */}
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    className="absolute flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-background shadow-lg border-2 transition-transform hover:scale-110 z-10"
                                    style={{
                                        left: step.left,
                                        top: step.top,
                                        transform: "translate(-50%, -50%)",
                                        borderColor: step.color,
                                    }}
                                >
                                    <div
                                        className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-1"
                                        style={{ backgroundColor: step.bg, color: step.color }}
                                    >
                                        <step.icon className="w-6 h-6 md:w-7 md:h-7" />
                                    </div>
                                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider" style={{ color: step.color }}>
                                        {step.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
}
