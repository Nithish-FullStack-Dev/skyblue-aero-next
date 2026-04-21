"use client";

import Image from "next/image";
import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  LineChart,
  FileText,
  Search,
  Plane,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";

import SplitTextReveal from "@/components/motion/SplitTextReveal";
import FadeUpStagger from "@/components/motion/FadeUpStagger";
import ClipReveal from "@/components/motion/ClipReveal";

/* ─── DATA FROM PDF ─────────────────────────────────────────── */

const services = [
  {
    title: "Aircraft Acquisition",
    description:
      "We define your mission profile, source the ideal aircraft globally — both on-market and off-market — negotiate on your behalf, and manage the entire acquisition journey from search to delivery.",
    icon: Search,
    accent: "#D7A34D",
  },
  {
    title: "Aircraft Sales",
    description:
      "Our global buyer network and targeted marketing strategies ensure your aircraft reaches qualified prospects at the right price. We manage all enquiries, negotiations, and closing logistics.",
    icon: Plane,
    accent: "#D7A34D",
  },
  {
    title: "Market Intelligence & Valuation",
    description:
      "Continuous monitoring of global aircraft market trends, inventory movements, and valuations provides our clients with accurate and timely data for sharp decision-making.",
    icon: LineChart,
    accent: "#D7A34D",
  },
  {
    title: "Contracting & Documentation",
    description:
      "From letter of intent to purchase agreement, we structure every legal instrument with precision — covering financing, warranties, and transfer documentation.",
    icon: FileText,
    accent: "#D7A34D",
  },
  {
    title: "Pre-Purchase Inspection",
    description:
      "We coordinate and manage independent pre-purchase inspections with qualified MRO providers globally, ensuring buyers have full visibility of aircraft condition before closing.",
    icon: ShieldCheck,
    accent: "#D7A34D",
  },
  {
    title: "Entry Into Service",
    description:
      "Post-transaction, our team ensures seamless aircraft delivery, crew readiness, regulatory compliance, and entry into operational service — coordinated start to finish.",
    icon: Award,
    accent: "#D7A34D",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Sales Representation & Acquisition",
    desc: "Sales representation and acquisition service for new or pre-owned business aircraft across global markets.",
  },
  {
    step: "02",
    title: "Aircraft Appraisals",
    desc: "Independent aircraft appraisal services provided through Bond Aviation for accurate valuation support.",
  },
  {
    step: "03",
    title: "Market Evaluation Reports",
    desc: "Comprehensive aircraft market evaluation reports by Ascend to support informed transaction decisions.",
  },
  {
    step: "04",
    title: "Contract Negotiation",
    desc: "Professional contract negotiation support to secure favourable terms and protect client interests.",
  },
  {
    step: "05",
    title: "Pre-Purchase Inspection",
    desc: "Full management and coordination of pre-purchase inspections before transaction completion.",
  },
  {
    step: "06",
    title: "Marketing Support",
    desc: "Targeted aircraft marketing support to position aircraft effectively for the right buyers.",
  },
  {
    step: "07",
    title: "Financing Support",
    desc: "Assistance with aircraft financing solutions and coordination with financial partners.",
  },
  {
    step: "08",
    title: "Delivery Coordination",
    desc: "Complete delivery planning and coordination to ensure seamless aircraft handover.",
  },
  {
    step: "09",
    title: "In-House Legal Counsel",
    desc: "Dedicated in-house legal counsel support for transaction documentation and regulatory matters.",
  },
];

const stats = [
  { value: "25+", label: "Years Aviation Experience", icon: Award },
  { value: "8", label: "Global Markets Served", icon: Globe2 },
  { value: "24/7", label: "Client Support", icon: Phone },
  { value: "100%", label: "Confidential Process", icon: ShieldCheck },
];

const manufacturers = [
  {
    name: "Airbus",
    image: "/images/planes/airbus.jpg",
  },
  {
    name: "Beechcraft",
    image: "/images/planes/beechcraft.jpg",
  },
  {
    name: "Boeing",
    image: "/images/planes/boeing.jpg",
  },
  {
    name: "Bombardier",
    image: "/images/planes/bombardier.jpg",
  },
  {
    name: "Cessna",
    image: "/images/planes/cessna.jpg",
  },
  {
    name: "Dassault",
    image: "/images/planes/dassault.jpg",
  },
  {
    name: "Embraer",
    image: "/images/planes/embraer.jpg",
  },
  {
    name: "Gulfstream",
    image: "/images/planes/gulfstream.jpg",
  },
  {
    name: "Hawker",
    image: "/images/planes/hawker.jpg",
  },
];

const markets = ["CANADA", "USA", "SINGAPORE", "INDIA"];

const whyUs = [
  {
    icon: Globe2,
    title: "KEY RELATIONSHIPS AND INTERNATIONAL EXPERTISE",
    desc: `Extensive global network including aircraft owners and operators, major aircraft manufacturers as well
as aviation brokers, advisors and service providers. Extensive real-world experience and vital working knowledge in the following regions: India, Middle East, Russia, Africa, China, South-East Asia, North and South America.`,
  },
  {
    icon: TrendingUp,
    title: "Accurate Aircraft Appraisal",
    desc: `Our strategic tie-up with Ascend enables us to provide objective, accurate and highly professional aircraft appraisals for buyers, sellers and financing institutions.`,
  },
  {
    icon: Users,
    title: "ACCESS TO ON AND OFF-MARKET AIRCRAFT",
    desc: `Established partnerships and a worldwide network
of aviation professionals enables us to access
privileged information on the availability of offmarket aircraft.`,
  },
  {
    icon: Star,
    title: "MARKET INTELLIGENCE",
    desc: `Constant monitoring of fluctuating trends affecting
the value of business aircraft. Proprietary software
systems designed to efficiently manage aircraft
intelligence and inventory.`,
  },
  {
    icon: Star,
    title: "MARKET EXPOSURE",
    desc: `As a worldwide provider of operational support
services for business aviation, ACASS is a trusted
partner for aircraft owners. This gives us tremendous
exposure to potential transaction opportunities,
often in priority, with the full confidence of the client.`,
  },
  {
    icon: Star,
    title: "ENTRY INTO SERVICE (EIS) SPECIALISTS",
    desc: `Complete EIS turnkey service available for
continued support at the conclusion of a transaction.
We provide a hands-free, seamless and timely
delivery and operation startup of the newly acquired
aircraft.`,
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

export default function Brokerage() {
  return (
    <main className="bg-[#F6F4EF] overflow-hidden">
      {/* ════════════════════════════════ HERO ═══════════════════════════════ */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/36302.jpg"
            alt="Private jet on tarmac — Aircraft Brokerage"
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
                Aircraft Brokerage
              </span>
            </div>
          </FadeUpStagger>

          <SplitTextReveal
            as="h1"
            className="text-2xl md:text-5xl font-display font-bold text-brand-cream"
          >
            Global Aircraft Brokerage For Elite Buyers & Sellers
          </SplitTextReveal>

          <FadeUpStagger>
            <p className="mt-8 max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-white/65">
              Strategic aircraft acquisition, sales, valuation, and advisory
              services for discerning buyers, operators, and fleet owners
              worldwide.
            </p>
          </FadeUpStagger>
        </div>
      </section>

      {/* ════════════════════════════════ INTRO ══════════════════════════════ */}
      <section className="relative py-10 md:py-20 bg-[#F6F4EF]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeUpStagger>
              <div>
                <FadeUpStagger>
                  <div className="inline-flex items-center gap-3 rounded-full border border-[#D7A34D]/15 bg-[#D7A34D]/10 backdrop-blur-md px-5 py-2 mb-8">
                    <span className="h-2 w-2 rounded-full bg-[#ed7e0a] animate-pulse" />
                    <span className="text-[11px] tracking-[0.35em] uppercase text-[#ed7e0a] font-medium">
                      Who We Are
                    </span>
                  </div>
                </FadeUpStagger>
                <h2 className="text-2xl md:text-4xl leading-[1.2] tracking-[-0.01em] font-bold text-[#06111D]">
                  Trusted Aircraft Advisory Across Global Markets
                </h2>
                <p className="mt-8 text-base md:text-lg leading-relaxed text-[#06111D]/70">
                  Skyblue is a specialist aircraft brokerage providing highly
                  personalised advisory services for corporate buyers,
                  high-net-worth individuals, and fleet operators. With
                  operating bases in India, the USA, the Canada and Singapore,
                  we bring institutional-grade expertise with a personal touch.
                </p>
                <p className="mt-5 text-[1rem] leading-relaxed text-[#06111D]/60">
                  We combine decades of international relationships, real-world
                  transaction experience, and a deeply confidential process to
                  help clients buy and sell aircraft with complete confidence.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  {markets.map((m) => (
                    <span
                      key={m}
                      className="inline-flex items-center gap-2 rounded-full border border-[#06111D]/10 bg-[#06111D]/5 px-5 py-2 text-sm font-medium text-[#06111D]/75"
                    >
                      <MapPin className="h-3 w-3 text-[#EF7C00]" />
                      {m}
                    </span>
                  ))}
                </div>

                <div className="mt-10">
                  <a
                    href="https://www.skyblue.aero/wp-content/uploads/2019/09/Skyblue-Aircraft-Brokerage.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 rounded-full bg-[#1671a9] px-7 py-4 text-sm font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-[#11192C] hover:shadow-[0_20px_60px_rgba(6,17,29,0.18)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EF7C00]/10 border border-[#EF7C00]/20">
                      <FileText className="h-5 w-5 text-[#EF7C00]" />
                    </div>

                    <div className="flex flex-col items-start">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                        Download Brochure
                      </span>
                      <span className="text-sm font-semibold text-white">
                        Aircraft Brokerage PDF
                      </span>
                    </div>

                    <ArrowRight className="h-4 w-4 text-[#EF7C00] transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </FadeUpStagger>

            <ClipReveal>
              <div className="relative rounded-[40px] overflow-hidden h-[580px] shadow-[0_40px_100px_rgba(6,17,29,0)]">
                <Image
                  src="/images/brokeage.png"
                  alt="Skyblue Aircraft — Global Brokerage"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06111D]/80 via-[#06111D]/20 to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="rounded-[24px] border border-white/15 bg-[#06111D]/50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe2 className="h-5 w-5 text-[#D7A34D]" />
                      <span className="text-xs tracking-[0.25em] uppercase text-white/70 font-medium">
                        International Expertise
                      </span>
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed">
                      Operating across 4 global markets with a single mission —
                      delivering world-class aircraft transaction advisory for
                      elite clients.
                    </p>
                  </div>
                </div>
              </div>
            </ClipReveal>
          </div>
        </div>
      </section>
      {/* ════════════════════════════════ WHY SKYBLUE ════════════════════════ */}
      <section className="py-10 md:py-20 bg-[#F6F4EF]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <FadeUpStagger>
            <div className="max-w-5xl mb-16">
              <FadeUpStagger>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#D7A34D]/15 bg-[#D7A34D]/10 backdrop-blur-md px-5 py-2 mb-8">
                  <span className="h-2 w-2 rounded-full bg-[#ed7e0a] animate-pulse" />
                  <span className="text-[11px] tracking-[0.35em] uppercase text-[#ed7e0a] font-medium">
                    Why Skyblue
                  </span>
                </div>
              </FadeUpStagger>
              <h2 className="text-2xl md:text-5xl leading-[1.1] tracking-[-0.01em] font-bold text-[#06111D]">
                The Skyblue Advantage
              </h2>
            </div>
          </FadeUpStagger>

          <FadeUpStagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyUs.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-[36px] border border-[#06111D]/10 bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(6,17,29,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#EF7E03]/30 hover:shadow-[0_32px_80px_rgba(6,17,29,0.12)]"
                  >
                    {/* Glow */}
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#EF7E03] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Number */}
                    <div className="absolute right-6 top-5 text-[4rem] font-bold leading-none tracking-[-0.04em] text-[#06111D]/10">
                      0{whyUs.findIndex((w) => w.title === item.title) + 1}
                    </div>

                    <div className="relative z-10">
                      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1671a9] text-[#EE7D03] transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                        <Icon className="h-7 w-7" />
                      </div>

                      <h3 className=" text-xl font-bold leading-[1.3] text-[#06111D]">
                        {item.title}
                      </h3>

                      <p className="mt-5 text-[15px] leading-7 text-[#06111D]/70">
                        {item.desc}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#D7A34D] transition-all duration-500 group-hover:w-full" />
                  </div>
                );
              })}
            </div>
          </FadeUpStagger>
        </div>
      </section>
      {/* ════════════════════════════════ PROCESS ════════════════════════════ */}
      <section className="bg-[#1671a9] py-10 md:py-20 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[#D7A34D]/8 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-white/4 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#D7A34D]/4 blur-[120px] pointer-events-none" />

        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <FadeUpStagger>
            <div className="text-center max-w-6xl mx-auto mb-20">
              <FadeUpStagger>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#D7A34D]/15 bg-[#D7A34D]/20 backdrop-blur-md px-5 py-2 mb-8">
                  <span className="h-2 w-2 rounded-full bg-[#f9b267] animate-pulse" />
                  <span className="text-[11px] tracking-[0.35em] uppercase text-[#ed7e0a] font-medium">
                    Transaction Process
                  </span>
                </div>
              </FadeUpStagger>
              <h2 className="mx-auto max-w-5xl text-2xl md:text-5xl leading-[1.2] tracking-[-0.01em] font-bold text-white">
                Every Detail Managed From Start To Finish
              </h2>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-white">
                Our proven six-stage process ensures a seamless transaction
                experience — from the first conversation to aircraft delivery.
              </p>
            </div>
          </FadeUpStagger>

          <FadeUpStagger>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 min-h-[320px] transition-all duration-500 hover:-translate-y-2 hover:border-[#D7A34D]/40 hover:bg-white/10 hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
                >
                  {/* Glow */}
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#D7A34D]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden xl:block absolute top-14 -right-6 z-10 h-[1px] w-12 bg-gradient-to-r from-[#D7A34D]/40 to-transparent" />
                  )}

                  {/* Top Section */}
                  <div className="relative z-10 mb-8 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D7A34D]/20 bg-[#D7A34D]/10">
                      <CheckCircle2 className="h-6 w-6 text-[#D7A34D]" />
                    </div>

                    <span className="text-[4rem] md:text-[4.5rem] font-bold leading-none tracking-[-0.04em] text-white/10">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="max-w-[260px] text-xl md:text-2xl font-bold leading-[1.1] text-white">
                      {step.title}
                    </h3>

                    <p className="mt-5 text-[15px] leading-7 text-white">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#D7A34D] transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </FadeUpStagger>
        </div>
      </section>

      {/* ════════════════════════════════ FULL-WIDTH IMAGE ═══════════════════ */}
      <section className="bg-[#F6F4EF] py-10 md:py-20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-10">
          <FadeUpStagger>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#D7A34D]/15 bg-[#D7A34D]/10 px-5 py-2 mb-6">
                <span className="h-2 w-2 rounded-full bg-[#D7A34D] animate-pulse" />
                <span className="text-[11px] tracking-[0.35em] uppercase text-[#D7A34D] font-medium">
                  Aircraft Manufacturers
                </span>
              </div>

              <h2 className="text-2xl md:text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-[#06111D]">
                Experience Across Leading Aircraft Manufacturers
              </h2>

              <p className="mt-5 max-w-2xl mx-auto text-[#06111D]/60 text-base leading-relaxed">
                Extensive experience representing aircraft from the world’s most
                recognised business aviation manufacturers.
              </p>
            </div>
          </FadeUpStagger>
        </div>

        {/* Auto Scrolling Manufacturers */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#F6F4EF] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#F6F4EF] to-transparent" />

          <div className="group overflow-hidden">
            <div className="flex w-max animate-[scroll_30s_linear_infinite] gap-5 group-hover:[animation-play-state:paused]">
              {[...manufacturers, ...manufacturers].map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="w-[240px] shrink-0 overflow-hidden rounded-[28px] border border-[#06111D]/10 bg-white shadow-[0_20px_60px_rgba(6,17,29,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(6,17,29,0.12)]"
                >
                  <div className="relative h-[180px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#06111D]/80 via-[#06111D]/10 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-4 py-2">
                        <span className="text-sm font-semibold text-white">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
