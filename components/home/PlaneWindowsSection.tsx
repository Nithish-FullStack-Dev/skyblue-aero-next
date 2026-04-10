import React from "react";
import { motion } from "framer-motion";

const windows = [
  {
    title: "Global Reach",
    desc: "Access 4000+ destinations worldwide with seamless connectivity.",
    img: "/images/interior1.jpg",
  },
  {
    title: "Luxury Experience",
    desc: "Premium interiors crafted for unmatched comfort and style.",
    img: "/images/interior2.jpg",
  },
  {
    title: "Private Charter",
    desc: "Fly on your schedule with complete privacy and flexibility.",
    img: "/images/interior3.jpg",
  },
  {
    title: "Safety First",
    desc: "World-class safety standards with certified crew & aircraft.",
    img: "/images/interior4.jpg",
  },
];

const PlaneWindowsSection: React.FC = () => {
  return (
    <section className="bg-brand-cream py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-bold text-brand-navy mb-16">
          Aviation Excellence, Redefined
        </h2>

        {/* Windows Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {windows.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Window Frame */}
              <div className="relative w-full aspect-[3/4] bg-gray-200 rounded-[120px] shadow-lg overflow-hidden">
                
                {/* INSIDE IMAGE */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500" />

                {/* TEXT */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-80">
                    {item.desc}
                  </p>
                </div>

                {/* WINDOW SHADE (OPEN ANIMATION) */}
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: "-100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300 rounded-[120px] flex items-center justify-center"
                >
                  {/* Handle */}
                  <div className="w-10 h-2 bg-gray-400 rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaneWindowsSection;