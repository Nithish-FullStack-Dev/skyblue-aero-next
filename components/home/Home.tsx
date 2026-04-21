"use client";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import Link from "next/link";
import heroImg from "/images/hero-jet.jpg";
import interiorImg from "/images/jet-interior.jpg";
import tarmacImg from "/images/jet-tarmac.jpg";
import aerialImg from "/images/jet-aerial.jpg";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import FadeUpStagger from "@/components/motion/FadeUpStagger";
import ClipReveal from "@/components/motion/ClipReveal";
import HorizontalPin from "@/components/motion/HorizontalPin";
import AnimatedCounter from "@/components/global/AnimatedCounter";
import MagneticButton from "@/components/global/MagneticButton";
import Hero from "@/components/home/Hero";
import PlaneWindowsSection from "@/components/home/PlaneWindowsSection";
import WindowScrollExperience from "@/components/home/WindowScrollExperience";
import ServicesSection from "@/components/home/ServicesSection";
import Falcon900ExperienceSection from "@/components/home/Falcon900ExperienceSection";
import { DemoAlt } from "@/components/home/demo-alt";
import ScrollAnimation from "@/components/home/ScrollAnimation";
import { Users, Globe, Map, Plane } from "lucide-react";
import ServicesPage from "@/components/home/ServicesPage";

import OrbitingSkills from "@/components/ui/orbiting-skills";
import ClientsSection from "@/components/home/clients-section";
import CharterServicesGrid from "./charter-services-grid";


gsap.registerPlugin(ScrollTrigger);

// const services = [
//   {
//     title: "Air Charters",
//     desc: "Bespoke private flight solutions tailored to your schedule, anywhere in the world.",
//     path: "/charters",
//     image: heroImg,
//   },
//   {
//     title: "Aircraft Brokerage",
//     desc: "Expert acquisition and sales advisory for discerning aircraft buyers and sellers.",
//     path: "/brokerage",
//     image: tarmacImg,
//   },
//   {
//     title: "Trip Support",
//     desc: "Comprehensive international flight planning, permits, and ground handling.",
//     path: "/trip-support",
//     image: aerialImg,
//   },
//   {
//     title: "Maintenance",
//     desc: "Full-spectrum MRO services and aircraft management programmes.",
//     path: "/maintenance",
//     image: interiorImg,
//   },
// ];
interface HomeProps {
  isLoaded: boolean;
}

const Home: React.FC<HomeProps> = ({ isLoaded }) => {
  
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);

// useEffect(() => {
//   const timer = setTimeout(() => {
//     ScrollTrigger.refresh();
//   }, 100);

//   return () => clearTimeout(timer);
// }, []);

// useGSAP(
//   (context) => {
//     if (!heroImgRef.current) return;

//     const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     if (prefersReduced) return;

//     const animation = gsap.to(heroImgRef.current, {
//       scale: 0.92,
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: 1,
//       },
//     });

//     return () => {
//       animation.kill(); // ✅ clean only this animation
//     };
//   },
//   { scope: heroRef }
// );

  return (
    <main>
      {/* ─── HERO ─── */}
      <Hero isLoaded={isLoaded} />
      {/* <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden">
        <div ref={heroImgRef} className="absolute inset-0">
          <img
            src={heroImg}
            alt="Luxury private jet flying above golden clouds"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/70 via-brand-obsidian/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-16 md:pb-24">
          <SplitTextReveal
            as="h1"
            className="text-fluid-display font-display font-bold text-brand-cream mb-6"
          >
            Luxury in Air. Personalised.
          </SplitTextReveal>

          <FadeUpStagger className="flex flex-col md:flex-row items-start md:items-end gap-6">
            <p className="font-body text-brand-cream/70 text-lg md:text-xl max-w-md leading-relaxed">
              Unparalleled global reach. Uncompromising personal luxury.
            </p>
            <Link to="/charters">
              <MagneticButton className="bg-orange-500 text-brand-obsidian px-8 py-4 font-body text-sm font-semibold tracking-wide">
                Explore Charters
              </MagneticButton>
            </Link>
          </FadeUpStagger>
        </div>
      </section> */}
      <ScrollAnimation />
{/* <WindowScrollExperience /> */}
{/* services */}
{/* <FalconTour /> */}

{/* Counter section */}

<section className="bg-brand-cream py-16 md:py-24">
  <div className="max-w-[1400px] mx-auto px-6 md:px-10">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

      <AnimatedCounter
        end={150}
        suffix="+"
        label="Countries we Serve"
        icon={<Users size={180} />}
      />

      
      <AnimatedCounter
        end={1000}
        suffix="+"
        label="Airports Served World Wide"
        icon={<Map size={180} />}
      />

      <AnimatedCounter
        end={300}
        suffix="+"
        label="Aircraft Managed"
        icon={<Plane size={180} />}
      />
      {/* ✅ FIXED 24/7 */}
      <AnimatedCounter
        end={24}
        secondaryValue={7}
        label="Operations"
        icon={<Globe size={180} />}
      />


    </div>
  </div>
</section>
      {/* ─── EDITORIAL INTRO ─── */}
      {/* <PlaneWindowsSection /> */}
      {/* <section className="bg-brand-cream py-24 md:py-2">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <SplitTextReveal as="h2" className="text-fluid-heading font-display font-bold text-brand-navy mb-6">
              Aviation Excellence, Redefined
            </SplitTextReveal>
            <FadeUpStagger>
              <p className="font-body text-brand-navy/70 text-base md:text-lg leading-relaxed mb-6">
                Skyblue Aero delivers end-to-end aviation solutions with the precision of engineering and the warmth of personal service. From charter flights to aircraft management, every detail is orchestrated with care.
              </p>
              <p className="font-body text-brand-navy/60 text-base leading-relaxed">
                Our global network spans over 4,000 locations, staffed by professionals who understand that in aviation, excellence is not optional — it is the baseline.
              </p>
            </FadeUpStagger>
          </div>

          <ClipReveal direction="left">
            <img
              src={interiorImg}
              alt="Luxury jet interior with cream leather"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </ClipReveal>
        </div>
      </section> */}

{/* <CharterServicesGrid /> */}
 {/* features */}
 {/* <Falcon900ExperienceSection /> */}
{/* services */}

{/* <ServicesPage />  */}

  <ServicesSection />
 <OrbitingSkills />

{/* available */}
<DemoAlt />
{/* <ClientSection /> */}
{/* <ClientsSection /> */}

      
    </main>
  );
};

export default Home;
