"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface FadeUpStaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
  y?: number;
  triggerStart?: string;
}

const FadeUpStagger = ({
  children,
  className = "",
  stagger = 0.1,
  duration = 0.8,
  y = 50,
  triggerStart = "top 85%",
}: FadeUpStaggerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const items = Array.from(containerRef.current.children);

      if (!items.length) return;

      gsap.set(items, {
        opacity: 0,
        y,
      });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: "power3.out",
        overwrite: "auto",
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          once: true,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: containerRef, dependencies: [stagger, duration, y, triggerStart] },
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default FadeUpStagger;
