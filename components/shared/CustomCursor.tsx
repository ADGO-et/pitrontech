"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const dot = dotRef.current;
        if (!cursor || !dot) return;

        // Disable on touch devices
        if (window.matchMedia("(pointer: coarse)").matches) {
            cursor.style.display = "none";
            dot.style.display = "none";
            return;
        }

        let isInitialized = false;

        const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });
        const dotXTo = gsap.quickTo(dot, "x", { duration: 0, ease: "none" });
        const dotYTo = gsap.quickTo(dot, "y", { duration: 0, ease: "none" });

        let isHovering = false;

        const onMouseMove = (e: MouseEvent) => {
            if (!isInitialized) {
                gsap.set(cursor, { x: e.clientX, y: e.clientY });
                gsap.set(dot, { x: e.clientX, y: e.clientY });
                isInitialized = true;
            } else {
                xTo(e.clientX);
                yTo(e.clientY);
                dotXTo(e.clientX);
                dotYTo(e.clientY);
            }
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = target.closest('a, button, [role="button"]');
            
            if (isClickable && !isHovering) {
                isHovering = true;
                gsap.to(cursor, { scale: 1.5, backgroundColor: "rgba(29,80,94,0.1)", duration: 0.2 });
                gsap.to(dot, { scale: 0, duration: 0.2 });
            } else if (!isClickable && isHovering) {
                isHovering = false;
                gsap.to(cursor, { scale: 1, backgroundColor: "transparent", duration: 0.2 });
                gsap.to(dot, { scale: 1, duration: 0.2 });
            }
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseover", onMouseOver);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseover", onMouseOver);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-8 h-8 border-2 border-[#1d505e] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
            />
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-[#1d505e] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
            />
        </>
    );
}
