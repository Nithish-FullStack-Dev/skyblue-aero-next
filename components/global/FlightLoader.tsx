"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane } from "lucide-react";

const FlightLoader = ({
  onComplete,
  onLogoArrived,
}: {
  onComplete?: () => void;
  onLogoArrived?: () => void;
}) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  // 📊 Progress
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

  // 🚀 Complete trigger
  useEffect(() => {
    if (done) {
      if (onLogoArrived) {
        setTimeout(() => {
          onLogoArrived();
        }, 400);
      }

      if (onComplete) {
        setTimeout(() => {
          onComplete();
        }, 900);
      }
    }
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* BG */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/sky.webp')" }}
          />

          {/* CONTENT */}
          <div className="relative flex flex-col items-center">
            {/* ✈️ LOGO */}
            <motion.img
              src="/logo.png"
              layoutId="logo"
              className="w-[200px] mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />

            {/* PROGRESS BAR */}
            <div className="w-[220px] h-[4px] bg-white/20 relative">
              <motion.div
                className="h-full bg-white"
                style={{ width: `${progress}%` }}
              />

              {/* ✈️ Plane */}
              <motion.div
                className="absolute top-1/2"
                style={{
                  left: `${progress}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Plane className="w-5 h-5 text-white drop-shadow-[0_0_6px_white]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlightLoader;