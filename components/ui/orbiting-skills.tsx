"use client";

import React, { useEffect, useMemo, useState, memo } from "react";

// --- Types ---
type GlowColor =  "sky" | "navy" | "royal" | "gold" | "obsidian";

interface ClientItem {
  id: string;
  src: string;
  label: string;
}

interface OrbitClientConfig extends ClientItem {
  orbitRadius: number;
  size: number;
  speed: number;
  phaseShift: number;
  glowColor: GlowColor;
}

interface OrbitingClientProps {
  config: OrbitClientConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Your client images ---
// Replace these image paths with your real client logo/image paths
const clientImages: ClientItem[] = [
  { id: "client-01", src: "/images/clients/imgi_3_avplat.png", label: "avplat" },
  { id: "client-02", src: "/images/clients/imgi_10_hp.png", label: "hp" },
  { id: "client-03", src: "/images/clients/imgi_11_jet.png", label: "Client 03" },
  { id: "client-04", src: "/images/clients/imgi_12_mai.png", label: "Client 04" },
  { id: "client-05", src: "/images/clients/imgi_13_rege.png", label: "Client 05" },
  { id: "client-06", src: "/images/clients/imgi_14_Reliance-Industries.png", label: "Client 06" },
  { id: "client-07", src: "/images/clients/imgi_15_vista.png", label: "Client 07" },
  { id: "client-08", src: "/images/clients/imgi_16_adani.png", label: "Client 08" },
  { id: "client-09", src: "/images/clients/imgi_17_aditya.png", label: "Client 09" },
  { id: "client-10", src: "/images/clients/imgi_18_air-india.png", label: "Client 10" },
  { id: "client-11", src: "/images/clients/imgi_19_Bharat-Petroleum-logo.png", label: "Client 11" },
  { id: "client-12", src: "/images/clients/imgi_20_chinna.png", label: "Client 12" },
  { id: "client-13", src: "/images/clients/imgi_21_fal.png", label: "Client 13" },
];

// --- Memoized Orbit Client Card ---
const OrbitingClient = memo(({ config, angle }: OrbitingClientProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, src, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 30 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full overflow-visible
    bg-transparent border-0 shadow-none
    flex items-center justify-center
    transition-all duration-300 cursor-pointer
    ${isHovered ? "scale-110" : "scale-100"}
        `}
        style={{
        //   boxShadow: isHovered
        //     ? "0 16px 40px rgba(0,0,0,0.28), 0 0 24px rgba(255,255,255,0.2)"
        //     : "0 10px 28px rgba(0,0,0,0.18)",
        }}
      >
        <img
          src={src}
          alt={label}
          className="h-full w-full object-contain p-2"
          draggable={false}
        />

        {/* {isHovered && (
          <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/85 px-2 py-1 text-[10px] font-medium text-white shadow-lg">
            {label}
          </div>
        )} */}
      </div>
    </div>
  );
});
OrbitingClient.displayName = "OrbitingClient";

// --- Orbit Glow Path ---
const GlowingOrbitPath = memo(
  ({ radius, glowColor = "sky", animationDelay = 0 }: GlowingOrbitPathProps) => {
    // const glowColors = {
    //   cyan: {
    //     primary: "rgba(6, 182, 212, 0.22)",
    //     secondary: "rgba(6, 182, 212, 0.12)",
    //     border: "rgba(6, 182, 212, 0.24)",
    //   },
    //   purple: {
    //     primary: "rgba(147, 51, 234, 0.22)",
    //     secondary: "rgba(147, 51, 234, 0.12)",
    //     border: "rgba(147, 51, 234, 0.24)",
    //   },
    // };
    const glowColors = {
  sky: {
    primary: "rgba(135, 206, 235, 0.25)",   // #87CEEB
    secondary: "rgba(135, 206, 235, 0.12)",
    border: "rgba(135, 206, 235, 0.30)",
  },
  navy: {
    primary: "rgba(20, 112, 169, 0.25)",    // #1470A9
    secondary: "rgba(20, 112, 169, 0.12)",
    border: "rgba(20, 112, 169, 0.30)",
  },
  royal: {
    primary: "rgba(88, 130, 165, 0.25)",    // #5882A5
    secondary: "rgba(88, 130, 165, 0.12)",
    border: "rgba(88, 130, 165, 0.30)",
  },
  gold: {
    primary: "rgba(239, 125, 5, 0.25)",     // #EF7D05
    secondary: "rgba(239, 125, 5, 0.12)",
    border: "rgba(239, 125, 5, 0.30)",
  },
  obsidian: {
    primary: "rgba(15, 23, 42, 0.35)",      // #0F172A (stronger for dark glow)
    secondary: "rgba(15, 23, 42, 0.18)",
    border: "rgba(15, 23, 42, 0.40)",
  },
};

    const colors = glowColors[glowColor];

    return (
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          animationDelay: `${animationDelay}s`,
        }}
      >
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: `radial-gradient(circle, transparent 52%, ${colors.secondary} 78%, ${colors.primary} 100%)`,
            boxShadow: `0 0 40px ${colors.primary}, inset 0 0 32px ${colors.secondary}`,
            animation: "pulse 4s ease-in-out infinite",
            animationDelay: `${animationDelay}s`,
          }}
        />

        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 18px ${colors.secondary}`,
          }}
        />
      </div>
    );
  }
);
GlowingOrbitPath.displayName = "GlowingOrbitPath";

// --- Main Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime((prevTime) => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitRadii = isMobile
    ? [78, 126, 174]
    : [110, 175, 240];

  const orbitSizes = isMobile
  ? [60, 68, 64]
  : [78, 88, 82];

  const clientConfigs = useMemo<OrbitClientConfig[]>(() => {
    const groups = [
      { start: 0, count: 4, radius: orbitRadii[0], size: orbitSizes[0], speed: 0.9, glowColor: "navy" as GlowColor },
      { start: 4, count: 4, radius: orbitRadii[1], size: orbitSizes[1], speed: -0.65, glowColor: "gold" as GlowColor },
      { start: 8, count: 5, radius: orbitRadii[2], size: orbitSizes[2], speed: 0.45, glowColor: "navy" as GlowColor },
    ];

    return groups.flatMap((group) => {
      return clientImages.slice(group.start, group.start + group.count).map((item, index) => ({
        ...item,
        orbitRadius: group.radius,
        size: group.size,
        speed: group.speed,
        phaseShift: (index * 2 * Math.PI) / group.count,
        glowColor: group.glowColor,
      }));
    });
  }, [isMobile, orbitRadii, orbitSizes]);

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: orbitRadii[0], glowColor: "sky", delay: 0 },
    { radius: orbitRadii[1], glowColor: "gold", delay: 1.3 },
    { radius: orbitRadii[2], glowColor: "navy", delay: 2.2 },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white text-brand-obsidian">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-60">
        <div
          className="absolute inset-0"
          // style={{
          //   background:
          //     "radial-gradient(circle at 18% 20%, rgba(6,182,212,0.16) 0%, transparent 28%), radial-gradient(circle at 82% 24%, rgba(147,51,234,0.16) 0%, transparent 30%), radial-gradient(circle at 50% 85%, rgba(255,255,255,0.06) 0%, transparent 35%)",
          // }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center justify-between gap-12 px-5 py-14 sm:px-6 md:px-10 lg:flex-row lg:items-center lg:gap-10 lg:px-16 lg:py-20">
        {/* Left content on desktop / bottom content on mobile */}
        <div className="order-2 w-full max-w-xl text-center lg:order-1 lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">
            Trusted Collaborations
          </p>

          <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[0.95] tracking-tight">
            Our clients
            <br />
            move with us.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/72 md:text-base lg:mx-0">
            Built with trust, performance, and long-term partnerships, our work
            is backed by brands and businesses that rely on consistency,
            precision, and creative execution.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
              13+ Clients
            </div>
            <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
              Design & Development
            </div>
            <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
              Brand Partnerships
            </div>
          </div>
        </div>

        {/* Orbit on right desktop / top mobile */}
        <div className="order-1 flex w-full items-center justify-center lg:order-2 lg:justify-end">
          <main
            className="relative flex items-center justify-center overflow-visible"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative flex h-[340px] w-[340px] items-center justify-center sm:h-[390px] sm:w-[390px] md:h-[460px] md:w-[460px] lg:h-[560px] lg:w-[560px]">
              {/* Center Logo */}
              <div className="relative z-20 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md sm:h-28 sm:w-28 md:h-32 md:w-32">
                {/* <div className="absolute inset-0 rounded-full bg-cyan-400/15 blur-2xl" />
                <div className="absolute inset-0 rounded-full bg-purple-500/15 blur-3xl" /> */}
                <img
                  src="/images/logo.png"
                  alt="Brand Logo"
                  className="relative z-10 h-16 w-16 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
                />
              </div>

              {/* Orbit paths */}
              {orbitConfigs.map((config) => (
                <GlowingOrbitPath
                  key={`orbit-${config.radius}`}
                  radius={config.radius}
                  glowColor={config.glowColor}
                  animationDelay={config.delay}
                />
              ))}

              {/* Orbiting client images */}
              {clientConfigs.map((config) => {
                const angle = time * config.speed + config.phaseShift;

                return (
                  <OrbitingClient
                    key={config.id}
                    config={config}
                    angle={angle}
                  />
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}