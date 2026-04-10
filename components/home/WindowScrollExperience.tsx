"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WindowScrollExperience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 1. Window shade opening
  const shadeY = useTransform(scrollYProgress, [0.05, 0.25], ["0%", "-100%"]);

  // 2. Window zoom
  const frameScale = useTransform(scrollYProgress, [0.28, 0.52], [1, 35]);
  const bgScale = useTransform(scrollYProgress, [0.28, 0.52], [1, 1.1]);

  // 3. Frame fade
  const frameOpacity = useTransform(scrollYProgress, [0.44, 0.56], [1, 0]);

  // 4. Background dark overlay
  const bgOverlayOpacity = useTransform(scrollYProgress, [0.38, 0.6], [0, 0.45]);

  // ✅ HEADING (first scroll)
  const headingOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.25, 0.35], [30, 0]);

  // ✅ PARAGRAPH (second scroll)
  const paraOpacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const paraY = useTransform(scrollYProgress, [0.45, 0.6], [30, 0]);

  return (
    <section ref={ref} className="relative h-[260vh] bg-black">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        
        {/* BACKGROUND */}
        <motion.img
          style={{ scale: bgScale }}
          src="/images/jet-interior.jpg"
          alt="Sky View"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}
        <motion.div
          style={{ opacity: bgOverlayOpacity }}
          className="absolute inset-0 z-10 bg-black"
        />

        {/* WINDOW FRAME */}
        <motion.div
          style={{ scale: frameScale, opacity: frameOpacity }}
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          {/* SHADE */}
          <div className="absolute z-20 h-[450px] w-[300px] overflow-hidden rounded-[150px]">
            <motion.div
              style={{ y: shadeY }}
              className="absolute inset-0 flex flex-col justify-end rounded-b-[140px] bg-gradient-to-b from-[#e5e5e5] to-[#c4c4c4] pb-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="mx-auto flex h-4 w-20 items-center justify-center rounded-full bg-[#bebebe] shadow-inner">
                <div className="h-1 w-10 rounded-full bg-[#999] opacity-60" />
              </div>
            </motion.div>
          </div>

          {/* SVG WALL */}
            {/* SVG WALL */}
          <svg
            viewBox="-1500 -1500 3000 3000"
            className="pointer-events-none absolute z-30 h-[3000px] w-[3000px] max-w-none"
          >
            <defs>
              <mask id="windowHole">
                <rect
                  x="-1500"
                  y="-1500"
                  width="3000"
                  height="3000"
                  fill="white"
                />
                <rect
                  x="-150"
                  y="-225"
                  width="300"
                  height="450"
                  rx="150"
                  fill="black"
                />
              </mask>

              <linearGradient id="outerBevel" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#888888" />
              </linearGradient>

              <linearGradient id="innerTrack" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#999999" />
                <stop offset="100%" stopColor="#e5e5e5" />
              </linearGradient>
            </defs>

            <rect
              x="-1500"
              y="-1500"
              width="3000"
              height="3000"
              fill="#000"
              mask="url(#windowHole)"
            />

            <rect
              x="-190"
              y="-265"
              width="380"
              height="530"
              rx="190"
              fill="none"
              stroke="url(#outerBevel)"
              strokeWidth="40"
              mask="url(#windowHole)"
              opacity="0.9"
            />

            <rect
              x="-165"
              y="-240"
              width="330"
              height="480"
              rx="165"
              fill="none"
              stroke="url(#innerTrack)"
              strokeWidth="20"
              mask="url(#windowHole)"
            />

            <rect
              x="-154"
              y="-229"
              width="308"
              height="458"
              rx="154"
              fill="none"
              stroke="#c4c4c4"
              strokeWidth="4"
            />
          </svg>
        </motion.div>

        {/* TEXT CONTENT */}
        <div className="pointer-events-none absolute inset-0 z-[60] flex flex-col items-center justify-center px-6 text-center">
          
          {/* HEADING */}
          <motion.h2
            style={{ opacity: headingOpacity, y: headingY }}
            className="mb-6 max-w-4xl text-4xl font-bold text-white md:text-6xl"
          >
            Where Every Journey Becomes Exceptional
          </motion.h2>

          {/* PARAGRAPH */}
          <motion.p
            style={{ opacity: paraOpacity, y: paraY }}
            className="max-w-2xl text-base text-gray-200 md:text-xl"
          >
            Experience seamless private aviation with Sky Blue Aero.
             Book private jet charters on demand, access a global fleet, and rely on expert trip support, all tailored to your schedule.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WindowScrollExperience;