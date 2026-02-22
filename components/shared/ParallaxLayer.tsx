"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "@/lib/gsap";

interface ParallaxLayerProps {
    children: ReactNode;
    speed?: number; // positive = slower (background), negative = faster (foreground)
    className?: string;
}

export default function ParallaxLayer({
    children,
    speed = 0.3,
    className = "",
}: ParallaxLayerProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const el = ref.current;

        const tl = gsap.to(el, {
            y: () => speed * 150,
            ease: "none",
            scrollTrigger: {
                trigger: el.parentElement || el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        return () => {
            tl.scrollTrigger?.kill();
        };
    }, [speed]);

    return (
        <div ref={ref} className={`parallax-layer ${className}`}>
            {children}
        </div>
    );
}
