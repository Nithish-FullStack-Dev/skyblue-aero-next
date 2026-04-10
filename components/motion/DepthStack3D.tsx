"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface DepthStack3DProps {
  cards: { id: string; content: React.ReactNode }[];
  className?: string;
}

const DepthStack3D = ({ cards, className = "" }: DepthStack3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useGSAP(
    () => {
      if (prefersReduced.current || !containerRef.current) return;

      const cardEls = containerRef.current.querySelectorAll(".depth-card");

      cardEls.forEach((card, i) => {
        if (i === 0) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
          onUpdate: (self) => {
            const prev = cardEls[i - 1] as HTMLElement;
            if (prev) {
              gsap.set(prev, {
                rotateX: -10 * self.progress,
                scale: 1 - 0.05 * self.progress,
                filter: `brightness(${1 - 0.2 * self.progress})`,
              });
            }
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ perspective: "1200px" }}>
      {cards.map((card) => (
        <div
          key={card.id}
          className="depth-card relative bg-brand-cream rounded-sm shadow-2xl mb-8 md:mb-12"
          style={{ transformOrigin: "center top" }}
        >
          {card.content}
        </div>
      ))}
    </div>
  );
};

export default DepthStack3D;
