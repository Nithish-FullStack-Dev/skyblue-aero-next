"use client";

import Image from "next/image";
import {
  Globe2,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Clock,
  DollarSign,
  Fuel,
  TrendingDown,
  ArrowRight,
  FileText,
} from "lucide-react";

import SplitTextReveal from "@/components/motion/SplitTextReveal";
import FadeUpStagger from "@/components/motion/FadeUpStagger";
import ClipReveal from "@/components/motion/ClipReveal";

/* ─── DATA ──────────────────────────────────────────────────── */

const features = [
  {
    icon: Globe2,
    title: "SINGLE SOURCE GLOBAL SUPPLY",
    desc: "A unified approach to fuel procurement, providing you with a reliable single source for aviation fuel across 4,000+ worldwide locations.",
  },
  {
    icon: DollarSign,
    title: "DISCOUNTED FUEL RATES",
    desc: "Leveraging our immense purchasing power and global volume to secure highly competitive, discounted jet fuel rates for every uplift.",
  },
  {
    icon: Clock,
    title: "24x7 OPS TEAM COORDINATION",
    desc: "Every single fuel uplift is painstakingly coordinated by our dedicated 24x7 Operations Team, ensuring no delays and exact timing.",
  },
  {
    icon: Fuel,
    title: "PROMPT SERVICE AT THE BAY",
    desc: "We prioritize seamless ground experiences to guarantee prompt, priority service at the bay, putting your aircraft back in the air swiftly.",
  },
];

const markets = [
  "NORTH AMERICA",
  "EUROPE",
  "MIDDLE EAST",
  "ASIA PACIFIC",
  "AFRICA",
];

export default function ContractFuel() {
  return (
    <main className="bg-[#F6F4EF] overflow-hidden">
      {/* ════════════════════════════════ HERO ═══════════════════════════════ */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/28950.jpg"
            alt="Private Jet Night Operations - Contract Fuel"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Overlay Layers */}
          <div className="absolute inset-0 bg-[#06111D]/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06111D]/40 via-[#06111D]/50 to-[#06111D]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,163,77,0.25),transparent_40%)]" />
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
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-5 py-2 mb-8 shadow-lg shadow-[#D7A34D]/5">
              <span className="h-2 w-2 rounded-full bg-[#D7A34D] animate-pulse" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-white/70 font-medium">
                Contract Fuel
              </span>
            </div>
          </FadeUpStagger>

          <SplitTextReveal
            as="h1"
            className="text-3xl md:text-6xl font-display font-bold text-brand-cream"
          >
            Flexibility, Control and Convenience.
          </SplitTextReveal>

          <FadeUpStagger>
            <p className="mt-8 max-w-3xl mx-auto text-base md:text-xl leading-relaxed text-white/75 font-light">
              We provide you with a single source global fuel supply at over
              4000 world-wide locations, at discounted rates.
            </p>
          </FadeUpStagger>
        </div>
      </section>

      {/* ════════════════════════════════ INTRO ══════════════════════════════ */}
      <section className="relative py-12 md:py-24 bg-[#F6F4EF]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeUpStagger>
              <div>
                <FadeUpStagger>
                  <div className="inline-flex items-center gap-3 rounded-full border border-[#D7A34D]/15 bg-[#D7A34D]/10 backdrop-blur-md px-5 py-2 mb-8">
                    <span className="h-2 w-2 rounded-full bg-[#ed7e0a] animate-pulse" />
                    <span className="text-[11px] tracking-[0.35em] uppercase text-[#ed7e0a] font-medium">
                      Global Supply
                    </span>
                  </div>
                </FadeUpStagger>
                <h2 className="text-3xl md:text-5xl leading-[1.1] tracking-[-0.01em] font-bold text-[#06111D]">
                  Every Uplift Coordinated By Our 24x7 Ops Team
                </h2>
                <p className="mt-8 text-base md:text-lg leading-relaxed text-[#06111D]/70 group">
                  With access to over <strong>4,000 locations worldwide</strong>
                  , our robust fuel supply network ensures that your operations
                  never face disruptions. Every single fuel uplift is
                  coordinated by our 24x7 Operations Team, ensuring prompt
                  service directly at the bay.
                </p>
                <p className="mt-6 text-[1rem] leading-relaxed text-[#06111D]/60 whitespace-pre-line">
                  Avoid hidden fees and excessive premiums. Our contract fuel
                  program focuses on delivering unmatched flexibility, ultimate
                  control over your fuel expenses, and pure convenience built
                  around your flight schedule.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  {markets.map((m) => (
                    <span
                      key={m}
                      className="inline-flex items-center gap-2 rounded-full border border-[#06111D]/10 bg-[#06111D]/5 px-5 py-2 text-sm font-medium text-[#06111D]/75 hover:bg-[#D7A34D] hover:text-white transition-colors duration-300"
                    >
                      <MapPin className="h-3 w-3 text-[#EF7C00] group-hover:text-white" />
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUpStagger>

            <ClipReveal>
              <div className="relative rounded-[40px] overflow-hidden h-[580px] shadow-[0_40px_100px_rgba(6,17,29,0.05)] border border-[#06111D]/5 border-opacity-20 group">
                <Image
                  src="/images/contractfuel.jpg"
                  alt="Skyblue Aviation Fuel Services"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06111D]/90 via-[#06111D]/30 to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="rounded-[24px] border border-white/10 bg-[#06111D]/50 p-8 shadow-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingDown className="h-6 w-6 text-[#D7A34D]" />
                      <span className="text-xs tracking-[0.25em] uppercase text-white/80 font-semibold">
                        Maximum Cost Efficiency
                      </span>
                    </div>
                    <p className="text-white/85 text-[15px] leading-relaxed">
                      Leveraging substantial volume, we negotiate fiercely on
                      your behalf to guarantee high-quality jet fuel at deeply
                      discounted global rates.
                    </p>
                  </div>
                </div>
              </div>
            </ClipReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ THE SKYBLUE ADVANTAGE ════════════════════════ */}
      <section className="py-12 md:py-24 bg-[#1671a9] relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#D7A34D]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[700px] w-[700px] rounded-full bg-[#06111D]/30 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <FadeUpStagger>
            <div className="max-w-5xl mb-16 text-center mx-auto">
              <FadeUpStagger>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-5 py-2 mb-8 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#D7A34D] animate-pulse" />
                  <span className="text-[11px] tracking-[0.35em] uppercase text-[#D7A34D] font-medium">
                    The Skyblue Promise
                  </span>
                </div>
              </FadeUpStagger>
              <h2 className="text-3xl md:text-5xl leading-[1.1] tracking-[-0.01em] font-bold text-white">
                Reliability Meets Incredible Value
              </h2>
            </div>
          </FadeUpStagger>

          <FadeUpStagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-md p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D7A34D]/40 hover:bg-white/[0.06] hover:shadow-[0_32px_80px_rgba(0,0,0,0.25)]"
                  >
                    {/* Glow Accents */}
                    <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#D7A34D] blur-[80px] opacity-0 transition-opacity duration-700 group-hover:opacity-20" />

                    <div className="relative z-10">
                      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff]/50 border border-white/10 text-[#ee7f08] transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-lg">
                        <Icon className="h-7 w-7" />
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold leading-[1.3] text-white tracking-wide">
                        {item.title}
                      </h3>

                      <p className="mt-5 text-[16px] leading-relaxed text-white/70">
                        {item.desc}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-gradient-to-r from-[#D7A34D] to-[#ed7e0a] transition-all duration-700 ease-out group-hover:w-full" />
                  </div>
                );
              })}
            </div>
          </FadeUpStagger>
        </div>
      </section>
    </main>
  );
}
