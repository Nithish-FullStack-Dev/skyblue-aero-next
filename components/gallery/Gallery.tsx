"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import Image from "next/image";
import FadeUpStagger from "../motion/FadeUpStagger";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/Diwan Seats.JPG",
  "/images/gallery/Executive Lounge Chair.JPG",
  "/images/gallery/Executive Lounge Chairs.JPG",
  "/images/gallery/Executive Lounge_Fwd.JPG",
  "/images/gallery/Front Left.JPG",
  "/images/gallery/Fwd Cabin.JPG",
  "/images/gallery/Head on Pic.JPG",
  "/images/gallery/Middle Club Seats_Fwd Dacing.JPG",
  "/images/gallery/Middle Club Seats_Rear Facing.JPG",
  "/images/gallery/Nose_Left.JPG",
  "/images/gallery/Reg No.JPG",
  "/images/gallery/Side Pic_Left.JPG",
  "/images/gallery/Side Pic_Right.JPG",
  "/images/gallery/Side Pic_RWY.JPG",
  "/images/gallery/Side Profile.JPG",
  "/images/gallery/TEM09531.jpg",
  "/images/gallery/TEM09537.jpg",
  "/images/gallery/TEM09541.jpg",
  "/images/gallery/TEM09545.jpg",
  "/images/gallery/TEM09548.jpg",
  "/images/gallery/TEM09561.jpg",
  "/images/gallery/TEM09576.jpg",
  "/images/gallery/TEM09579.jpg",
  "/images/gallery/TEM09606.jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const next = () => setIndex((prev) => ((prev ?? 0) + 1) % images.length);

  const prev = () =>
    setIndex((prev) => ((prev ?? 0) - 1 + images.length) % images.length);

  return (
    <main>
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/hero.jpg"
            alt="Skyblue Aero Gallery Showcase"
            fill
            priority
            className="object-cover object-center scale-105"
          />

          {/* Overlay Layers */}
          <div className="absolute inset-0 bg-[#06111D]/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06111D]/20 via-[#06111D]/35 to-[#06111D]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,163,77,0.18),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,17,29,0.82),rgba(6,17,29,0.28),rgba(6,17,29,0.78))]" />
        </div>

        {/* Grain Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "180px 180px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <FadeUpStagger>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-5 py-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-[#D7A34D] animate-pulse" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-white/70 font-medium">
                Skyblue Aero Gallery
              </span>
            </div>
          </FadeUpStagger>

          <SplitTextReveal
            as="h1"
            className="text-2xl md:text-5xl font-display font-bold text-brand-cream"
          >
            Explore Moments of Aviation Excellence
          </SplitTextReveal>

          <FadeUpStagger>
            <p className="mt-8 max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-white/65">
              Discover a curated collection of private jets, luxury interiors,
              charter experiences, and global aviation milestones that reflect
              the prestige, innovation, and elegance of Skyblue Aero.
            </p>
          </FadeUpStagger>
        </div>
      </section>
      <section className="bg-brand-cream py-10 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <SplitTextReveal
            as="h1"
            className="text-fluid-heading font-display font-bold text-brand-navy mb-6"
          >
            Gallery
          </SplitTextReveal>

          {/* MASONRY GRID */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((src, i) => (
              <motion.div
                key={i}
                layoutId={`image-${i}`}
                className="overflow-hidden rounded-xl cursor-pointer break-inside-avoid"
                onClick={() => setIndex(i)}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={src}
                  alt={`gallery-${i}`}
                  className="w-full object-cover rounded-xl"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* CLOSE */}
            <button
              onClick={() => setIndex(null)}
              className="absolute top-6 right-6 text-white text-3xl z-50"
            >
              ✕
            </button>

            {/* IMAGE */}
            <motion.img
              key={index}
              src={images[index]}
              layoutId={`image-${index}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100) next();
                if (info.offset.x > 100) prev();
              }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
            />

            {/* NAV */}
            <button
              onClick={prev}
              className="absolute left-6 text-white text-4xl"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute right-6 text-white text-4xl"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
