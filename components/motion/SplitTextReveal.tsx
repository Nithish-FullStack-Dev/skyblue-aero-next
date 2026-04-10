"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  triggerStart?: string;
  duration?: number;
  stagger?: number;
}

const SplitTextReveal = ({
  children,
  className = "",
  as: Tag = "h2",
  triggerStart = "top 85%",
  duration = 0.7,
  stagger = 0.05,
}: SplitTextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const words = children.split(" ");

  useGSAP(
    () => {
      if (prefersReduced.current || !containerRef.current) return;
      const wordEls = containerRef.current.querySelectorAll(".split-word-inner");

      gsap.from(wordEls, {
        yPercent: 100,
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
    <div ref={containerRef}>
      <Tag className={className}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <span className="split-word-inner inline-block">{word}</span>
          </span>
        ))}
      </Tag>
    </div>
  );
};

export default SplitTextReveal;
