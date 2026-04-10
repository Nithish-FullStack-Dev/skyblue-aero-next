"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane } from "lucide-react";

const AERO_TEXT = "AERO";

const FlightLoader = ({
  onComplete,
  onStartSplit,
  onLogoArrived,
}: {
  onComplete?: () => void;
  onStartSplit?: () => void;
  onLogoArrived?: () => void;
}) => {
  const [typedText, setTypedText] = useState("");
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [split, setSplit] = useState(false);

  // Typewriter
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(AERO_TEXT.slice(0, i + 1));
      i++;
      if (i === AERO_TEXT.length) clearInterval(interval);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  // Progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Split trigger
useEffect(() => {
  if (done) {
    setSplit(true);

    if (onStartSplit) onStartSplit();

    // 👉 trigger logo visible AFTER movement ends
    setTimeout(() => {
      if (onLogoArrived) onLogoArrived();
    }, 900); // match animation duration

    if (onComplete) {
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  }
}, [done]);

  return (
    <AnimatePresence>
      {!split && (
        <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/sky.webp')" }}
          />

          <div className="relative text-center text-white">
            <h1 className="text-5xl md:text-7xl tracking-[8px]">SKYBLUE</h1>

            <h2 className="text-2xl md:text-4xl tracking-[12px] mt-4 h-[40px]">
              {typedText}
            </h2>

            <div className="w-[470px] h-[4px] bg-white/20 mt-10 relative ">
              <motion.div
                className="h-full bg-white"
                style={{ width: `${progress}%` }}
              />
              <motion.div
                className="absolute top-[-12px]"
                style={{ left: `${progress}%` }}
              >
                <Plane className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* SPLIT */}
      {split && (
        <motion.div className="fixed inset-0 z-[9999] flex">
          
          {/* 🔥 CENTER LOGO (NO TAILWIND TRANSLATE) */}
          <motion.img
            src="/logo.png"
            layoutId="logo"
            className="absolute z-[10000]"
            style={{
              width: 140,
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
            }}
          />

          {/* LEFT */}
          <motion.div
            className="w-1/2 h-full relative"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 1 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/sky.webp')" }}
            />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="w-1/2 h-full relative"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 1 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/sky.webp')" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlightLoader;