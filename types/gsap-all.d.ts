declare module "gsap/all" {
  import gsap from "gsap";

  export { gsap };

  export class ScrollTrigger {
    static create(config: Record<string, unknown>): ScrollTrigger;
    static getAll(): ScrollTrigger[];
    vars: { trigger?: unknown };
    kill(): void;
  }

  export class Flip {
    static getState(targets: unknown): unknown;
    static from(state: unknown, vars: Record<string, unknown>): void;
  }

  export class Draggable {
    static create(target: unknown, vars: Record<string, unknown>): Draggable[];
    kill(): void;
  }

  export const MotionPathPlugin: object;
}
