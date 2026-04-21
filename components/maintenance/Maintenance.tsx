"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Wrench,
  ClipboardCheck,
  Award,
  Star,
  Users,
} from "lucide-react";

import SplitTextReveal from "@/components/motion/SplitTextReveal";
import FadeUpStagger from "@/components/motion/FadeUpStagger";
import ClipReveal from "@/components/motion/ClipReveal";

/* ─── TAB DATA ────────────────────────────────────────────────── */

const tabs = [
  {
    id: "maintenance",
    label: "Maintenance History",
    tagline: "Maintenance History",
    title: "A Strict Regime of Airworthiness",
    image: "/images/Engineering.jpg",
    content: (
      <div className="space-y-6">
        <p className="text-base md:text-lg leading-relaxed text-[#06111D]/80">
          The aircraft has undergone a comprehensive C-Check in accordance with
          the approved maintenance program and is maintained to the highest
          standards of airworthiness.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#06111D]/80">
          All scheduled and unscheduled maintenance is carried out by
          DGCA-approved maintenance organizations, with full compliance to
          regulatory requirements. Technical records, including aircraft
          logbooks, are accurately maintained and up to date, ensuring complete
          traceability of all maintenance activities.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#06111D]/80">
          The aircraft continues to operate under a strict maintenance and
          inspection regime, reflecting our commitment to safety, reliability,
          and regulatory compliance.
        </p>
      </div>
    ),
    badge: {
      icon: ShieldCheck,
      title: "DGCA Compliant",
      desc: "Ensuring complete traceability of all maintenance activities and fully updated technical logs.",
    },
    features: [
      {
        icon: Wrench,
        title: "C-Check Complete",
        desc: "Comprehensive program approved",
      },
      {
        icon: ClipboardCheck,
        title: "Total Traceability",
        desc: "100% up-to-date aircraft logs",
      },
    ],
  },
  {
    id: "pilot",
    label: "Pilot Experience",
    tagline: "Pilot Experience",
    title: "Elite Captains & DGCA Examiners",
    image: "/images/pexp.jpg",
    content: (
      <div className="space-y-6">
        <p className="text-base md:text-lg leading-relaxed text-[#06111D]/80">
          Our pilot panel comprises DGCA-approved examiners and senior captains
          with extensive operational and instructional experience.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#06111D]/80">
          The team includes captains with individual flying experience ranging
          from <strong className="text-[#06111D]">3,100 to 13,000 hours</strong>
          , bringing deep expertise across line operations, training, and
          regulatory evaluation.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#06111D]/80">
          With multiple DGCA examiners within the panel, all assessments and
          training inputs are aligned with current regulatory standards and
          industry expectations.
        </p>
      </div>
    ),
    badge: {
      icon: Award,
      title: "Senior Instructors",
      desc: "Aligned with global standard regulatory expectations.",
    },
    features: [
      {
        icon: Star,
        title: "Up to 13,000 Hours",
        desc: "Individual Captain Flying Experience",
      },
      {
        icon: Users,
        title: "DGCA Examiners",
        desc: "Direct regulatory alignment in training",
      },
    ],
  },
];

export default function Maintenance() {
  const [activeTab, setActiveTab] = useState("maintenance");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <main className="bg-[#F6F4EF] overflow-hidden">
      {/* ════════════════════════════════ HERO ═══════════════════════════════ */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/maintenance.jpg"
            alt="Aircraft Maintenance and Pilot Expertise"
            fill
            priority
            className="object-cover object-center scale-105"
          />

          {/* Overlay Layers */}
          <div className="absolute inset-0 bg-[#06111D]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06111D]/40 via-[#06111D]/50 to-[#06111D]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,163,77,0.25),transparent_40%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <FadeUpStagger>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-5 py-2 mb-8 shadow-[0_0_20px_rgba(215,163,77,0.15)]">
              <span className="h-2 w-2 rounded-full bg-[#D7A34D] animate-pulse" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-white/70 font-medium">
                Uncompromising Safety
              </span>
            </div>
          </FadeUpStagger>

          <SplitTextReveal
            as="h1"
            className="text-3xl md:text-5xl font-display font-bold text-brand-cream"
          >
            Maintenance & Pilot Excellence.
          </SplitTextReveal>

          <FadeUpStagger>
            <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-white/75 font-light">
              Maintained to the highest standards of airworthiness and operated
              by elite DGCA-approved examiners and senior captains.
            </p>
          </FadeUpStagger>
        </div>
      </section>

      {/* ════════════════════════════════ TABS & CONTENT ══════════════════════════════ */}
      <section className="relative py-10 md:py-20 bg-[#F6F4EF]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          {/* Tabs Navigation */}
          <div className="mb-4 md:mb-10  flex justify-center">
            <div className="inline-flex items-center rounded-full border border-[#06111D]/10 bg-white/80 p-1.5 shadow-[0_20px_50px_rgba(6,17,29,0.06)] backdrop-blur-xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center justify-center rounded-full px-4 md:px-6 py-2.5 md:py-3 text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-[#1570AA] text-white shadow-[0_10px_30px_rgba(6,17,29,0.18)]"
                      : "text-[#06111D]/65 hover:text-[#06111D]"
                  }`}
                >
                  <span className="relative z-10">{tab.label}</span>

                  {activeTab === tab.id && (
                    <div className="absolute inset-0 rounded-full border border-white/10" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center min-h-[600px]">
            {/* Image & Badge Column */}
            <div className="relative order-2 lg:order-1">
              <ClipReveal key={`img-${activeTab}`}>
                <div className="relative rounded-[40px] overflow-hidden h-[400px] md:h-[550px] shadow-[0_40px_100px_rgba(6,17,29,0.08)] group border border-[#06111D]/5">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06111D]/90 via-[#06111D]/20 to-transparent" />

                  {/* Floating Badge */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="rounded-[24px] border border-white/10 bg-[#06111D]/30 p-8 shadow-2xl transition-all duration-500">
                      <div className="flex items-center gap-4 mb-4">
                        <active.badge.icon className="h-8 w-8 text-[#D7A34D]" />
                        <span className="text-xs tracking-[0.25em] uppercase text-white/80 font-bold">
                          {active.badge.title}
                        </span>
                      </div>
                      <p className="text-white/85 text-[15px] leading-relaxed">
                        {active.badge.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ClipReveal>
            </div>

            {/* Text & Features Column */}
            <div className="order-1 lg:order-2">
              <FadeUpStagger key={`content-${activeTab}`}>
                <div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-[#D7A34D]/15 bg-[#D7A34D]/10 backdrop-blur-md px-5 py-2 mb-8">
                    <span className="h-2 w-2 rounded-full bg-[#ed7e0a]" />
                    <span className="text-[11px] tracking-[0.35em] uppercase text-[#ed7e0a] font-bold">
                      {active.tagline}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-3xl leading-[1.1] tracking-[-0.01em] font-bold text-[#06111D]">
                    {active.title}
                  </h2>

                  <div className="mt-4">{active.content}</div>

                  {/* Highlights/Features */}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {active.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl border border-[#06111D]/5 text-[#1671a9] shrink-0">
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#06111D] mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-[#06111D]/60 leading-relaxed">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUpStagger>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
