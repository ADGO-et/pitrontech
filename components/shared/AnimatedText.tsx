"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
    stagger?: number;
    type?: "chars" | "words" | "lines";
    trigger?: boolean;
}

export default function AnimatedText({
    text,
    className = "",
    delay = 0,
    stagger = 0.03,
    type = "chars",
    trigger = true,
}: AnimatedTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const el = containerRef.current;

        // Split into units
        const units: HTMLElement[] = [];

        if (type === "chars") {
            const words = text.split(" ");
            el.innerHTML = "";

            words.forEach((word, wi) => {
                const wordSpan = document.createElement("span");
                wordSpan.style.display = "inline-block";
                wordSpan.style.marginRight = "0.25em";

                word.split("").forEach((char) => {
                    const charWrap = document.createElement("span");
                    charWrap.style.display = "inline-block";
                    charWrap.style.overflow = "hidden";
                    charWrap.style.verticalAlign = "bottom";

                    const charEl = document.createElement("span");
                    charEl.textContent = char;
                    charEl.style.display = "inline-block";
                    units.push(charEl);

                    charWrap.appendChild(charEl);
                    wordSpan.appendChild(charWrap);
                });

                el.appendChild(wordSpan);
                if (wi < words.length - 1) {
                    el.appendChild(document.createTextNode(" "));
                }
            });
        } else if (type === "words") {
            const words = text.split(" ");
            el.innerHTML = "";

            words.forEach((word) => {
                const wordWrap = document.createElement("span");
                wordWrap.style.display = "inline-block";
                wordWrap.style.overflow = "hidden";
                wordWrap.style.verticalAlign = "bottom";
                wordWrap.style.marginRight = "0.25em";

                const wordEl = document.createElement("span");
                wordEl.textContent = word;
                wordEl.style.display = "inline-block";
                units.push(wordEl);

                wordWrap.appendChild(wordEl);
                el.appendChild(wordWrap);
            });
        }

        // Set initial state
        gsap.set(units, { y: "110%", opacity: 0 });

        const animateIn = () => {
            gsap.to(units, {
                y: "0%",
                opacity: 1,
                duration: 0.8,
                stagger,
                delay,
                ease: "power3.out",
            });
        };

        if (trigger) {
            ScrollTrigger.create({
                trigger: el,
                start: "top 85%",
                onEnter: animateIn,
                once: true,
            });
        } else {
            animateIn();
        }

        return () => {
            ScrollTrigger.getAll().forEach((st: ScrollTrigger) => {
                if (st.vars.trigger === el) st.kill();
            });
        };
    }, [text, delay, stagger, type, trigger]);

    return (
        <div ref={containerRef} className={className} aria-label={text}>
            {text}
        </div>
    );
}
