"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FeaturesAltProps {
  features: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
}

export function FeaturesAlt({ features }: FeaturesAltProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full bg-[#ffffff]">
      <div className="grid lg:grid-cols-2 w-full max-w-[1600px] mx-auto ">

        {/* LEFT SIDE */}
        <div className="px-8 md:px-16 py-2 flex flex-col justify-center">

          <p className="text-xs tracking-widest uppercase text-gray-500 mb-12">
            A BETTER WAY TO FLY
          </p>

          <div className="border-t border-gray-300">
            {features.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  className="border-b border-gray-300 py-6 cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  {/* TITLE */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl md:text-3xl font-medium text-[#1e1e1e]">
                      {item.title}
                    </h3>

                    <span className="text-2xl">
                      {isActive ? "−" : "+"}
                    </span>
                  </div>

                  {/* DESCRIPTION (SMOOTH FIXED HEIGHT ANIMATION) */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? "max-h-40 opacity-100 mt-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm md:text-base text-gray-700 max-w-md leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative h-[500px]  w-full overflow-hidden">

          {features.map((item, index) => (
            <motion.img
              key={item.id}
              src={item.image}
              alt={item.title}
              initial={false}
              animate={{
                opacity: index === activeIndex ? 1 : 0,
                scale: index === activeIndex ? 1 : 1.05,
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1], // smooth cubic bezier
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}

        </div>

      </div>
    </section>
  );
}