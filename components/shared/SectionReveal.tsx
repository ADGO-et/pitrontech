"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface SectionRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "fade";
    once?: boolean;
    trigger?: boolean;
}

export default function SectionReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
    once = true,
    trigger = true,
}: SectionRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const el = ref.current;

        if (!trigger) {
            gsap.set(el, { opacity: 1, x: 0, y: 0 });
            return;
        }

        const fromVars: gsap.TweenVars = { opacity: 0, delay };

        switch (direction) {
            case "up":
                fromVars.y = 60;
                break;
            case "down":
                fromVars.y = -60;
                break;
            case "left":
                fromVars.x = 80;
                break;
            case "right":
                fromVars.x = -80;
                break;
            case "fade":
                break;
        }

        gsap.set(el, fromVars);

        const scrollTrigger = ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            once,
            onEnter: () => {
                gsap.to(el, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    delay,
                });
            },
        });

        return () => scrollTrigger.kill();
    }, [delay, direction, once, trigger]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
