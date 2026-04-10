"use client";
import { useRef, useEffect } from "react";
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
  const prefersReduced = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useGSAP(
    () => {
      if (prefersReduced.current || !containerRef.current) return;
      const children = containerRef.current.children;
      if (!children.length) return;

      gsap.from(children, {
        y,
        opacity: 0,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default FadeUpStagger;
