"use client";

import {
  gsap,
  ScrollTrigger,
  Flip,
  Draggable,
  MotionPathPlugin,
} from "gsap/all";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Flip, Draggable, MotionPathPlugin);
}

export { gsap, ScrollTrigger, Flip, Draggable, MotionPathPlugin };
