"use client";

import { Sparkles } from "@/components/ui/sparkles";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { useTheme } from "next-themes";

const IMAGES = [
  "/images/clients/imgi_3_avplat.png",
  "/images/clients/imgi_10_hp.png",
  "/images/clients/imgi_11_jet.png",
  "/images/clients/imgi_12_mai.png",
  "/images/clients/imgi_13_rege.png",
  "/images/clients/imgi_14_Reliance-Industries.png",
  "/images/clients/imgi_15_vista.png",
  "/images/clients/imgi_16_adani.png",
  "/images/clients/imgi_17_aditya.png",
  "/images/clients/imgi_18_air-india.png",
  "/images/clients/imgi_19_Bharat-Petroleum-logo.png",
  "/images/clients/imgi_20_chinna.png",
  "/images/clients/imgi_21_fal.png",
];

export default function ClientsSection() {
  const { theme } = useTheme();

  return (
    <section className="relative w-full pt-20 overflow-hidden bg-white dark:bg-black">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold">
          <span className="">Trusted by experts</span>
         
        </h2>
      </div>

      {/* LOGO SLIDER */}
      <div className="relative h-16 md:h-20 w-full overflow-hidden">
  <InfiniteSlider className="flex h-full items-center" gap={60} duration={30}>
    {IMAGES.map((src, index) => (
      <div
        key={index}
        className="w-36 h-16 flex shrink-0 items-center justify-center"
      >
        <img
          src={src}
          alt="client logo"
          className="max-h-full max-w-full object-contain opacity-80 transition hover:opacity-100"
        />
      </div>
    ))}
  </InfiniteSlider>

  <ProgressiveBlur
    direction="left"
    blurLayers={12}
    blurIntensity={22}
    className="absolute left-0 top-0 z-10 h-full w-20 md:w-[400px]"
  />

  <ProgressiveBlur
    direction="right"
    blurLayers={12}
    blurIntensity={22}
    className="absolute right-0 top-0 z-10 h-full w-20 md:w-[400px]"
  />
</div>

      {/* ARC + SPARKLES SECTION */}
      <div className="relative -mt-20 h-[150px] w-full overflow-hidden">
        {/* Glow Background */}
        <div
          className="absolute inset-0 before:absolute before:inset-0
          before:bg-[radial-gradient(circle_at_bottom_center,#fff,transparent_0%)]
          before:opacity-40"
        />

        {/* CURVED ARC SHAPE */}
        <div
          className="
          absolute
          -left-1/2
          top-1/2
          w-[200%]
          h-[200px]
          rounded-[50%]
          border-t
          border-zinc-300/30
          dark:border-white/20
          bg-white
          dark:bg-black
        "
        />

        {/* SPARKLES */}
        {/* <Sparkles
          density={1200}
          className="absolute inset-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_80%)]"
          color={theme === "dark" ? "#ffffff" : "#000000"}
        /> */}
      </div>
    </section>
  );
}