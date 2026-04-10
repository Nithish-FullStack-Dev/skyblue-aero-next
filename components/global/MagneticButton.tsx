"use client";

import { useRef, useCallback } from "react";
import type { MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

const MagneticButton = ({
  children,
  className = "",
  onClick,
  strength = 0.25,
}: MagneticButtonProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;

      wrapperRef.current.style.transform = `translate(${x}px, ${y}px)`;
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (!wrapperRef.current) return;
    wrapperRef.current.style.transform = "translate(0px, 0px)";
  }, []);

  return (
    <div className="flex w-full items-center justify-center">
      <motion.div
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-flex will-change-transform transition-transform duration-300 ease-out"
      >
        <motion.button
          onClick={onClick}
          initial="rest"
          animate="rest"
          whileHover="hover"  
          whileTap={{ scale: 0.97 }}
          className={`
            group relative inline-flex items-center justify-center gap-1
            rounded-full overflow-hidden
            bg-[#f4f1ec] text-[#1a1a1a]
            px-6 py-3
            font-semibold text-sm
            shadow-md hover:shadow-xl
            transition-shadow duration-300
            ${className}
          `}
        >
          <motion.span
            variants={{
              rest: { y: 0 },
              hover: { y: -1 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10"
          >
            {children}
          </motion.span>

          <motion.span
            variants={{
              rest: {
                x: 0,
                scale: 1,
              },
              hover: {
                x: 4,
                scale: 1.04,
              },
            }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative z-10 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full"
          >
            <motion.span
              variants={{
                rest: {
                  x: 0,
                  y: 0,
                  rotate: 0,
                },
                hover: {
                  x: 2,
                  y: -2,
                  rotate: -18,
                },
              }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="relative z-10 flex items-center justify-center font-bold"
            >
              <Plane size={20} />
            </motion.span>

            <motion.span
              variants={{
                rest: {
                  scaleX: 0.35,
                  opacity: 0.3,
                  x: 0,
                },
                hover: {
                  scaleX: 1,
                  opacity: 0.85,
                  x: -2,
                },
              }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="absolute left-1.5 top-1/2 h-[1px] w-3 -translate-y-1/2 origin-left rounded-full bg-orange-500"
            />
          </motion.span>

          <motion.span
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 rounded-full bg-white/10"
          />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MagneticButton;