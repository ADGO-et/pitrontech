"use client";

import SectionReveal from "@/components/shared/SectionReveal";
import { Bell, Ticket, Clock, AlertCircle, PowerOff, FileText, CheckCircle2 } from "lucide-react";

export default function WorkflowSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <SectionReveal direction="left">
                        <p className="text-[#1d505e] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                            Accelerate delivery with automated CI/CD pipelines
                        </p>
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-heading)] mb-6 leading-tight">
                            Intelligent, automated<br />development workflows
                        </h2>
                        <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-lg">
                            PitronTech streamlines your software development lifecycle. We automatically run tests, manage deployments, and monitor code quality. Teams can tailor multi-step pipelines to match internal quality gates – reducing time-to-market, improving code reliability, and driving measurable results at scale.
                        </p>
                    </SectionReveal>

                    {/* Right Diagram */}
                    <SectionReveal direction="right" delay={0.2} className="relative h-[500px] hidden md:flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-[600px] h-full flex items-center">
                            
                            {/* Central Card */}
                            <div className="absolute left-0 z-20 w-64 bg-[var(--background)] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[var(--glass-border)] overflow-hidden">
                                <div className="bg-[#1d505e] text-white px-4 py-3 flex items-center gap-2 font-semibold text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    4 Checks Failed
                                </div>
                                <div className="p-2 flex flex-col gap-1 bg-[rgba(29,80,94,0.02)]">
                                    <div className="px-3 py-2 text-xs font-medium text-[var(--text-heading)] border-b border-[var(--glass-border)]">1. Unit Test Failure</div>
                                    <div className="px-3 py-2 text-xs font-medium text-[var(--text-heading)] border-b border-[var(--glass-border)]">2. Linting Errors</div>
                                    <div className="px-3 py-2 text-xs font-medium text-[var(--text-heading)] border-b border-[var(--glass-border)]">3. Security Vulnerability</div>
                                    <div className="px-3 py-2 text-xs font-medium text-[var(--text-heading)]">4. Coverage Drop</div>
                                </div>
                            </div>

                            {/* Connecting Lines (SVG) */}
                            <svg className="absolute left-64 top-0 w-[calc(100%-16rem)] h-full z-0" style={{ strokeDasharray: "4 4" }}>
                                {/* Top branch */}
                                <path d="M 0 250 L 40 250 L 40 100 L 300 100" fill="none" stroke="#1d505e" strokeWidth="1.5" opacity="0.5" />
                                {/* Middle branch */}
                                <path d="M 0 250 L 150 250" fill="none" stroke="#1d505e" strokeWidth="1.5" opacity="0.5" />
                                {/* Bottom branch 1 */}
                                <path d="M 0 250 L 40 250 L 40 350 L 250 350" fill="none" stroke="#1d505e" strokeWidth="1.5" opacity="0.5" />
                                {/* Bottom branch 2 */}
                                <path d="M 40 350 L 40 450 L 250 450" fill="none" stroke="#1d505e" strokeWidth="1.5" opacity="0.5" />
                            </svg>

                            {/* Nodes */}
                            {/* Top Branch Nodes */}
                            <WorkflowNode icon={Bell} label="Notify Team" top="100px" left="calc(16rem + 60px)" alert />
                            <WorkflowNode icon={Ticket} label="Create Jira Issue" top="100px" left="calc(16rem + 140px)" />
                            <WorkflowNode icon={Clock} label="Run Fixer" top="100px" left="calc(16rem + 220px)" dark />
                            <WorkflowNode icon={Bell} label="Re-test" top="100px" left="calc(16rem + 300px)" alert />

                            {/* Middle Branch Nodes */}
                            <WorkflowNode icon={PowerOff} label="Block Merge" top="250px" left="calc(16rem + 60px)" dark alert />
                            <WorkflowNode icon={Bell} label="Notify Team" top="250px" left="calc(16rem + 140px)" />

                            {/* Bottom Branch 1 Nodes */}
                            <WorkflowNode icon={Bell} label="Notify Team" top="350px" left="calc(16rem + 60px)" alert />
                            <WorkflowNode icon={FileText} label="Request Review" top="350px" left="calc(16rem + 140px)" dark />
                            <WorkflowNode icon={CheckCircle2} label="Approve PR" top="350px" left="calc(16rem + 220px)" dark />

                            {/* Bottom Branch 2 Nodes */}
                            <WorkflowNode icon={Bell} label="Notify Team" top="450px" left="calc(16rem + 60px)" alert />
                            <WorkflowNode icon={Clock} label="Wait for Fix" top="450px" left="calc(16rem + 140px)" dark />
                            <WorkflowNode icon={Bell} label="Deploy to Staging" top="450px" left="calc(16rem + 220px)" alert />

                            {/* Connector Diamond */}
                            <div className="absolute left-[calc(16rem-12px)] top-[238px] w-6 h-6 bg-[#1d505e] rotate-45 rounded-sm z-10 flex items-center justify-center shadow-md">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                        </div>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
}

function WorkflowNode({ icon: Icon, label, top, left, dark = false, alert = false }: { icon: React.ElementType, label: string, top: string, left: string, dark?: boolean, alert?: boolean }) {
    return (
        <div className="absolute z-10 flex flex-col items-center gap-2 -translate-x-1/2 -translate-y-1/2" style={{ top, left }}>
            <div className={`relative w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border ${dark ? 'bg-[#4b5563] border-[#374151] text-white' : 'bg-[var(--background)] border-[var(--glass-border)] text-[var(--text-heading)]'}`}>
                <Icon className="w-5 h-5" />
                {alert && (
                    <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#1d505e] text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-[var(--background)]">
                        !
                    </div>
                )}
            </div>
            <div className="bg-[rgba(29,80,94,0.05)] px-2 py-0.5 rounded text-[10px] font-semibold text-[var(--text-muted)] whitespace-nowrap border border-[var(--glass-border)]">
                {label}
            </div>
        </div>
    );
}
