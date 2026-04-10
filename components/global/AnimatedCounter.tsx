"use client";
import { useRef, cloneElement, isValidElement, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  icon?: ReactNode;
  secondaryValue?: number;
}

const AnimatedCounter = ({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
  icon,
  secondaryValue,
}: AnimatedCounterProps) => {
  const numRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!numRef.current || !containerRef.current) return;

      const obj = { val: 0 };

      gsap.to(obj, {
        val: end,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (numRef.current) {
            numRef.current.textContent = `${prefix}${Math.round(obj.val).toLocaleString()}`;
          }
        },
      });
    },
    { scope: containerRef }
  );

  const responsiveIcon =
    icon && isValidElement(icon)
      ? cloneElement(icon as React.ReactElement, {
          className: `w-[90px] h-[90px] md:w-[120px] md:h-[120px] xl:w-[180px] xl:h-[180px] ${
            (icon.props as { className?: string }).className || ""
          }`,
        })
      : icon;

  return (
    <div
      ref={containerRef}
      className="relative text-center flex flex-col items-center justify-center"
    >
      {/*  ICON BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 text-brand-navy/50 pointer-events-none mb-8">
        {responsiveIcon}
      </div>

      {/* NUMBER */}
      <div className="relative flex items-end justify-center gap-1 z-10">
        <span
          ref={numRef}
          className="font-display text-4xl md:text-5xl font-bold text-brand-navy"
        >
          {prefix}0
        </span>

        {/* ✅ Special case: 24/7 */}
        {secondaryValue !== undefined ? (
          <>
            <span className="text-orange-500 font-display text-2xl md:text-3xl font-semibold">
              /
            </span>
            <span className="font-display text-4xl md:text-5xl font-bold text-brand-navy">
              {secondaryValue}
            </span>
          </>
        ) : (
          suffix && (
            <span className="text-orange-500 font-display text-2xl md:text-3xl font-semibold">
              {suffix}
            </span>
          )
        )}
      </div>

      {/* LABEL */}
      <span className="relative z-10 font-body text-sm text-brand-navy/60 tracking-wide mt-2 block">
        {label}
      </span>
    </div>
  );
};

export default AnimatedCounter;