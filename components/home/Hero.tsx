import React, { useRef, useEffect } from "react";
import Link from "next/link";

// Videos
// import falcondesk from "@/images/hero-desk.mp4";
// import falconmob from "@/images/hero-mob.mp4";

interface HeroProps {
  isLoaded: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLoaded }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  // 🎯 Control video play AFTER loader
  useEffect(() => {
    if (isLoaded) {
      desktopVideoRef.current?.play();
      mobileVideoRef.current?.play();
    }
  }, [isLoaded]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-end overflow-hidden"
    >
      {/* ─── VIDEO BACKGROUND ─── */}
      <div className="absolute inset-0">
        {/* Desktop Video */}
        <video
          ref={desktopVideoRef}
          className="hidden md:block w-full h-full object-cover"
          src={"/images/hero-desk.mp4"}
          loop
          muted
          playsInline
          preload="none"
        />

        {/* Mobile Video */}
        <video
          ref={mobileVideoRef}
          className="block md:hidden w-full h-full object-cover"
          src={"/images/hero-mob.mp4"}
          loop
          muted
          playsInline
          preload="none"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/80 to-transparent" />
      </div>

      {/* ─── CONTENT ─── */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-16 md:pb-24">
        <h1 className=" font-display font-bold text-white mb-6 text-3xl sm:text-3xl md:text-6xl">
          One Stop Solution for<br /> all your aviation needs!
        </h1>

        <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
          <p className="text-white/90 text-lg md:text-xl max-w-5xl leading-relaxed">
            We offer a full range of services from Fuel to Trip Support, from Permit Provisioning to Air Charters, 
            from 24x7 Flight Dispatch to Aircraft Sales.
             Each of our services is delivered with attention to detail, 
             ensuring you peace of mind both in the skies and on the ground.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;