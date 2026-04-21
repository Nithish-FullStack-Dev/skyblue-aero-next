"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ClipRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  duration?: number;
  triggerStart?: string;
}

const ClipReveal = ({
  children,
  className = "",
  direction = "up",
  duration = 0.3,
  triggerStart = "top 80%",
}: ClipRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const clipFrom = {
    up: "inset(100% 0 0 0)",
    left: "inset(0 100% 0 0)",
    right: "inset(0 0 0 100%)",
  };

  useGSAP(
    () => {
      if (!ref.current) return;
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) {
        gsap.set(ref.current, { clipPath: "inset(0 0 0 0)" });
        return;
      }

      gsap.fromTo(
        ref.current,
        { clipPath: clipFrom[direction] },
        {
          clipPath: "inset(0 0 0 0)",
          duration,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ref.current,
            start: triggerStart,
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className={className}
      style={{ clipPath: clipFrom[direction] }}
    >
      {children}
    </div>
  );
};

export default ClipReveal;
