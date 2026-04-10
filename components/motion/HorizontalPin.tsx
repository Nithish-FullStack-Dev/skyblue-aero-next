"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalPinProps {
  children: React.ReactNode;
  className?: string;
}

const HorizontalPin = ({ children, className = "" }: HorizontalPinProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useGSAP(
    () => {
      if (prefersReduced.current || !sectionRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const scrollAmount = track.scrollWidth - window.innerWidth;

      if (scrollAmount <= 0) return;

      gsap.to(track, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollAmount}`,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <div ref={sectionRef} className={`overflow-hidden ${className}`}>
      {/* Desktop: horizontal pin */}
      <div
        ref={trackRef}
        className="hidden md:flex gap-8 will-change-transform"
      >
        {children}
      </div>
      {/* Mobile: scroll-snap fallback */}
      <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-6 pb-4 -mx-4 px-4 scrollbar-hide">
        {children}
      </div>
    </div>
  );
};

export default HorizontalPin;
