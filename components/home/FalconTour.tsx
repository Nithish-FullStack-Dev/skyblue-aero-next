"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import MagneticButton from "@/components/global/MagneticButton";

import heroImg from "/images/TEM09606.jpg";
import interiorImg from "/images/jet-interior.jpg";
import detailImg from "/images/ef.png";
import tarmacImg from "/images/TEM09548.jpg";
import crew from "/images/onb.png";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "Air Charters",
    subtitle: "Air Charters",
    desc: "Charter private aircraft on demand with access to a worldwide fleet. Experience unmatched flexibility, complete privacy, and a journey tailored entirely around your schedule.",
    img: heroImg,
    path: "/charters",
  },
  {
    title: "Aircraft Brokerage",
    subtitle: "Aircraft Brokerage",
    desc: "Specialized aircraft brokerage for acquisition, sale, and leasing—connecting you with the right opportunities through a trusted global network.",
    img: interiorImg,
    path: "/brokerage",
  },
  {
    title: "Trip Support",
    subtitle: "Trip Support",
    desc: "Comprehensive global trip support covering permits, fuel coordination, ground handling, and logistics—ensuring every flight operates with precision across all destinations.",
    img: detailImg,
    path: "/trip-support",
  },
  {
    title: "Maintenance",
    subtitle: "Maintenance",
    desc: "Dependable maintenance solutions that uphold the highest standards of safety, compliance, and performance—delivered with meticulous attention to detail.",
    img: tarmacImg,
    path: "/maintenance",
  },
  {
    title: "Crew Leasing",
    subtitle: "Crew Leasing",
    desc: "Access highly trained pilots and cabin crew who bring professionalism, safety, and world-class service to every operation.",
    img: crew,
    path: "/crew-leasing",
  },
];

export default function FalconTour() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesWrapperRef = useRef<HTMLDivElement>(null);

 useGSAP(
  () => {
    if (!containerRef.current || !slidesWrapperRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;


const totalSlides = slides.length;

gsap.to(slidesWrapperRef.current, {
  xPercent: -100 * (totalSlides - 1),
  ease: "none",
  scrollTrigger: {
    trigger: containerRef.current,
    pin: true,
    scrub: 1,
    anticipatePin: 1,

    snap: {
      snapTo: 1 / (totalSlides - 1),
      duration: 0.3,
      ease: "power1.inOut",
    },

    end: () =>
      `+=${containerRef.current!.offsetWidth * (totalSlides - 1)}`,

    invalidateOnRefresh: true,
  },
});
    
  },
  { scope: containerRef }
);

  return (
    <section
      ref={containerRef}
      className="bg-brand-obsidian text-white h-screen overflow-hidden border-t border-white/5 relative"
    >
      {/* ✅ Heading (no overlap now) */}
      <div className="absolute top-10 md:top-20 left-6 md:left-20 z-20">
        <h2 className="font-display text-2xl md:text-4xl text-brand-gold">
          Our Services
        </h2>
        <p className="font-body text-white/50 text-sm md:text-base mt-2  hidden sm:block">
          Aviation Solutions, Precisely Tailored to Every Journey
        </p>
      </div>

      <div
        ref={slidesWrapperRef}
        className="h-full flex"
        style={{ width: `${slides.length * 100}vw` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="
              tour-slide w-[100vw] h-full flex flex-col md:flex-row
              items-center md:items-start
              justify-center
              px-6 md:px-20
              gap-10 md:gap-24
              relative
              
              pt-28 md:pt-40   /* ✅ FIX: pushes content below heading */
            "
          >
            {/* Background Number */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-display font-bold text-white/5 pointer-events-none select-none z-0">
              0{index + 1}
            </span>

            {/* Image */}
            <div className="w-full md:w-1/2 relative h-[40vh] md:h-[65vh] overflow-hidden rounded-sm border border-white/10 z-10">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-[120%] h-full object-cover origin-center -translate-x-10"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-5/12 z-10 flex flex-col justify-center md:mt-10">
              <span className="font-display text-brand-gold tracking-[0.2em] text-xs md:text-sm uppercase mb-3">
                {slide.subtitle}
              </span>

              <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-5 leading-tight">
                {slide.title}
              </h2>

              <p className="font-body text-brand-cloud text-base md:text-lg leading-relaxed max-w-lg mb-8 font-light">
                {slide.desc}
              </p>

              <Link to={slide.path} className="self-start">
                <MagneticButton className="bg-transparent  border border-white/30 text-white text-xs md:text-sm tracking-[0.1em] uppercase  text-center hover:bg-brand-gold hover:text-brand-obsidian hover:border-brand-gold transition-colors">
                  {slide.title}
                </MagneticButton>
              </Link>

              {/* Progress */}
              <div className="mt-12 hidden md:flex items-center gap-4">
                <div className="text-brand-cloud/30 font-display text-xs tracking-widest uppercase">
                  Slide {index + 1} of {slides.length}
                </div>
                <div className="flex-1 h-[1px] bg-white/10 relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-brand-gold"
                    style={{
                      width: `${((index + 1) / slides.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}