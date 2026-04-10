import React, { useRef } from "react";
import { Link } from "react-router-dom";

// Replace these paths with your actual assets
import cloudGif from "/images/cloud.mp4";
import planeImg from "/images/p2.png";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-end overflow-hidden"
    >
      {/* ─── CLOUD BACKGROUND (GIF) ─── */}
      <div className="absolute inset-0">
        <video
          src={cloudGif}
          autoPlay
          loop
          muted
          
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* ─── PLANE IMAGE (FLYING EFFECT) ─── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={planeImg}
          alt="Flying plane"
          className="w-[250px] sm:w-[350px] md:w-[500px] lg:w-[650px] xl:w-[750px] 
                     animate-float object-contain"
        />
      </div>

      {/* ─── CONTENT ─── */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-16 md:pb-24">
        <h1 className="text-fluid-display font-display font-bold text-white mb-6">
          Luxury in Air. Personalised.
        </h1>

        <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
          <p className="text-white/80 text-lg md:text-xl max-w-md leading-relaxed">
            Unparalleled global reach. Uncompromising personal luxury.
          </p>

          <Link to="/charters">
            <button className="bg-yellow-500 text-black px-8 py-4 text-sm font-semibold tracking-wide">
              Explore Charters
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;