"use client";

import Image from "next/image";
import {
  ArrowRight,
  Users,
  Globe2,
  ShieldCheck,
  Award,
  FileText,
  Plane,
  CheckCircle2,
  Briefcase,
  Star,
  Phone,
  Clock3,
  MapPin,
  FileCheck,
  GraduationCap,
} from "lucide-react";

import SplitTextReveal from "@/components/motion/SplitTextReveal";
import FadeUpStagger from "@/components/motion/FadeUpStagger";
import ClipReveal from "@/components/motion/ClipReveal";

const crewRoles = [
  {
    title: "Pilots",
    description:
      "Type-rated captains and first officers for business jets, commercial aircraft, and helicopter operations.",
    icon: Plane,
  },
  {
    title: "Cabin Crew",
    description:
      "Experienced luxury-trained cabin attendants, flight attendants, and inflight service professionals.",
    icon: Star,
  },
  {
    title: "Aircraft Engineers",
    description:
      "Licensed aircraft maintenance engineers, technicians, and AOG support specialists.",
    icon: ShieldCheck,
  },
  {
    title: "Flight Dispatchers",
    description:
      "Experienced dispatch and operations personnel to support mission planning and flight coordination.",
    icon: Briefcase,
  },
  {
    title: "Ground Operations",
    description:
      "Qualified ground handling, customer support, and airport operations professionals.",
    icon: Users,
  },
  {
    title: "Management Staff",
    description:
      "Senior aviation managers, postholders, trainers, auditors, and operational leadership personnel.",
    icon: Award,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Requirement Assessment",
    desc: "We begin by understanding your crew requirement, operational profile, aircraft type, and location.",
  },
  {
    step: "02",
    title: "Candidate Selection",
    desc: "Suitable aviation professionals are shortlisted from our global network of experienced personnel.",
  },
  {
    step: "03",
    title: "Screening & Verification",
    desc: "All crew undergo background checks, licence verification, and regulatory compliance review.",
  },
  {
    step: "04",
    title: "Placement & Mobilisation",
    desc: "Selected personnel are positioned quickly and efficiently to minimise operational disruption.",
  },
  {
    step: "05",
    title: "Ongoing Support",
    desc: "We continue to support both the operator and crew throughout the contract period.",
  },
  {
    step: "06",
    title: "Flexible Contract Options",
    desc: "Short-term, long-term, project-based, and urgent AOG crew solutions are available.",
  },
];

const stats = [
  { value: "4,000+", label: "Aviation Professionals", icon: Users },
  { value: "24/7", label: "Crew Support", icon: Phone },
  { value: "Global", label: "Crew Coverage", icon: Globe2 },
  { value: "Fast", label: "Deployment Time", icon: Clock3 },
];

const markets = ["CANADA", "USA", "SINGAPORE", "INDIA"];

const whyUs = [
  {
    icon: Globe2,
    title: "UNPARALLELED INTERNATIONAL EXPERIENCE",
    desc: `Skyblue has supplied crew for major business and
commercial aircraft types in on all 5 continents.
Specialized in the following regions: India, Middle
East, Russia, Africa, China, South-East Asia, North
& South America.`,
  },
  {
    icon: Users,
    title: "CULTURAL AWARENESS & SENSITIVITY",
    desc: `Skyblue personnel and pilots are aware and mindful
of the varied cultural distinctions around the world.
Utmost respect and discretion are paramount to our
success.`,
  },
  {
    icon: ShieldCheck,
    title: "SAFETY: OUR NUMBER ONE PRIORITY",
    desc: `Skyblue adheres to all international safety standards
and we can supply pilots to Safety Management
System (SMS) compliant owners and operators.
Skyblue pilots attend regular training to ensure
currency in regulatory and safety matters.`,
  },
  {
    icon: GraduationCap,
    title: "SELF SUFFICIENCY (PROFICIENCY TRAINING)",
    desc: `Impeccable track record in assisting flight
departments obtain complete autonomy using
Skyblue pilots (training captains). Complete training
of client’s pilots with a gradual transition towards a
self-sufficient operation.`,
  },
  {
    icon: FileCheck,
    title: "VISAS AND VALIDATIONS",
    desc: `Extensive experience with civil aviation regulatory
authorities and governmental agencies, enabling
Skyblue to efficiently obtain pilot visas and foreign
license validations.`,
  },
  {
    icon: Clock3,
    title: "QUICK RESPONSE, PROFESSIONAL SERVICE",
    desc: `Accustomed to managing challenging, last-minute
requests. Experienced management team, with over
50 aviation professionals on staff. 24-hour, 7-day a
week, 365-day a year client support provided.`,
  },
];
const pilotSupportCards = [
  {
    id: 1,
    badge: "Pilot Availability",
    title: "Pilots Available For",
    icon: Plane,
    bgClass: "bg-white/10 hover:bg-white/15",
    items: [
      "Inspection Flights",
      "Private Operations",
      "Commercial Operations",
      "Pilot Training",
      "Test Flights",
      "Acceptance Flights",
      "Charter Flights",
      "Airline Support",
      "Ferry / Delivery Flights",
      "Demonstration Flights",
    ],
  },
  {
    id: 2,
    badge: "Training Captains",
    title: "Training Captains",
    icon: GraduationCap,
    bgClass: "bg-[#0f5d8b]/80 hover:bg-[#0f5d8b]",
    items: [
      "CFI Certified Flight Instructor",
      "CFII Certified Flight Instructor and Instrumentation",
      "TRE Type Rating Examiner",
      "TRI Type Rating Instructor",
      "Check Airman",
      "Ground Instructors",
      "Simulator Instructors",
    ],
  },
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
export default function CrewLeasing() {
  return (
    <main className="bg-[#F6F4EF] overflow-hidden">
      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Crew-Leasing.png"
            alt="Aviation crew"
            fill
            priority
            className="object-cover object-center scale-105"
          />

          <div className="absolute inset-0 bg-[#06111D]/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06111D]/20 via-[#06111D]/35 to-[#06111D]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,163,77,0.18),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,17,29,0.82),rgba(6,17,29,0.28),rgba(6,17,29,0.78))]" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "180px 180px",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <FadeUpStagger>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-5 py-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-[#D7A34D] animate-pulse" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-white/70 font-medium">
                Crew Leasing
              </span>
            </div>
          </FadeUpStagger>

          <SplitTextReveal
            as="h1"
            className="text-2xl md:text-5xl font-display font-bold text-white"
          >
            Expert Crew. On Demand.
          </SplitTextReveal>

          <FadeUpStagger>
            <p className="mt-8 max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-white/65">
              Access one of the world’s largest networks of experienced business
              and commercial aviation professionals for short-term, long-term,
              and urgent crew requirements.
            </p>
          </FadeUpStagger>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative py-10 md:py-20 bg-[#F6F4EF]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeUpStagger>
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#D7A34D]/15 bg-[#D7A34D]/10 px-5 py-2 mb-8">
                  <span className="h-2 w-2 rounded-full bg-[#ed7e0a] animate-pulse" />
                  <span className="text-[11px] tracking-[0.35em] uppercase text-[#ed7e0a] font-medium">
                    Global Crew Network
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl leading-[1.2] tracking-[-0.01em] font-bold text-[#06111D]">
                  Qualified Aviation Professionals Ready To Support Your
                  Operation
                </h2>

                <p className="mt-8 text-base md:text-lg leading-relaxed text-[#06111D]/70">
                  Skyblue provides access to over 4,000 experienced aviation
                  professionals worldwide, including pilots, cabin crew,
                  engineers, dispatchers, and operational support staff.
                </p>

                <p className="mt-5 text-[1rem] leading-relaxed text-[#06111D]/60">
                  Whether you require temporary crew coverage, urgent AOG
                  support, or long-term placement solutions, we deliver highly
                  qualified personnel quickly and efficiently.
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
                    href="https://skyblue.aero/mainsite/wp-content/uploads/2013/10/Skyblue-Crew-Leasing.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 rounded-full bg-[#1671a9] px-7 py-4 text-sm font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-[#11192C]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EF7C00]/10 border border-[#EF7C00]/20">
                      <FileText className="h-5 w-5 text-[#EF7C00]" />
                    </div>

                    <div className="flex flex-col items-start">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                        Download Brochure
                      </span>
                      <span className="text-sm font-semibold text-white">
                        Crew Leasing PDF
                      </span>
                    </div>

                    <ArrowRight className="h-4 w-4 text-[#EF7C00] transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </FadeUpStagger>

            <ClipReveal>
              <div className="relative rounded-[40px] overflow-hidden h-[580px]">
                <Image
                  src="/images/7378.jpg"
                  alt="Professional aviation crew"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06111D]/80 via-[#06111D]/20 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="rounded-[24px] border border-white/15 bg-[#06111D]/50  p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-5 w-5 text-[#D7A34D]" />
                      <span className="text-xs tracking-[0.25em] uppercase text-white/70 font-medium">
                        Aviation Talent Network
                      </span>
                    </div>

                    <p className="text-white/85 text-sm leading-relaxed">
                      Supporting operators worldwide with experienced aviation
                      professionals across business aviation and commercial
                      aviation.
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
                    className="group relative overflow-hidden rounded-[36px] border border-[#06111D]/10 bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(6,17,29,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#ff8400] hover:shadow-[0_32px_80px_rgba(6,17,29,0.12)]"
                  >
                    {/* Glow */}
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#ff8400] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

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

      <section className="relative overflow-hidden bg-[#1671a9] py-10 md:py-20">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-white/10 blur-[140px]" />
          <div className="absolute bottom-[-120px] right-[-80px] h-[460px] w-[460px] rounded-full bg-[#0f5d8b] blur-[160px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.04),transparent,rgba(0,0,0,0.08))]" />
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top_right,white,transparent_45%)]" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          {/* Heading */}
          <FadeUpStagger>
            <div className="max-w-4xl mx-auto text-center mb-14 md:mb-16">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 mb-8 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#F7931E] animate-pulse" />
                <span className="text-[11px] tracking-[0.35em] uppercase text-white/80 font-medium">
                  Pilot Support Services
                </span>
              </div>

              <h2 className="mx-auto text-2xl md:text-5xl leading-[1.2] tracking-[-0.01em] font-bold text-white">
                Pilot Support Services For Short-Term, Long-Term And Full-Time
                Placement
              </h2>

              <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-white/70">
                Skyblue provides experienced pilot support across business
                aviation, commercial aviation, inspection operations, training
                environments, and aircraft delivery requirements worldwide.
              </p>
            </div>
          </FadeUpStagger>
          <FadeUpStagger>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {pilotSupportCards.map((card) => {
                const Icon = card.icon;

                return (
                  <FadeUpStagger key={card.id}>
                    <div
                      className={`group relative h-full overflow-hidden rounded-[36px] border border-white/15 ${card.bgClass} backdrop-blur-xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#F7931E]/30`}
                    >
                      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F7931E]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#F7931E]/20 bg-[#F7931E]/15">
                            <Icon className="h-6 w-6 text-[#F7931E]" />
                          </div>

                          <div>
                            <p className="text-[11px] tracking-[0.3em] uppercase text-white/50 mb-1">
                              {card.badge}
                            </p>
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                              {card.title}
                            </h3>
                          </div>
                        </div>

                        <div
                          className={
                            card.id === 1
                              ? "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4"
                              : "space-y-4"
                          }
                        >
                          {card.items.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F7931E]" />
                              <span className="text-sm leading-relaxed text-white/80">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#F7931E] transition-all duration-500 group-hover:w-full" />
                    </div>
                  </FadeUpStagger>
                );
              })}
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
                  Aircraft Expertise
                </span>
              </div>

              <h2 className="text-2xl md:text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-[#06111D]">
                Crew Available On All Aircraft Types From The Following
                Manufacturers
              </h2>

              <p className="mt-5 max-w-3xl mx-auto text-[#06111D]/60 text-base leading-relaxed">
                Skyblue supplies experienced crew for a wide range of business
                and commercial aircraft platforms across the world’s leading
                aircraft manufacturers.
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
