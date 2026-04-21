"use client";

import FadeUpStagger from "@/components/motion/FadeUpStagger";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const sections = [
  { id: "overview", number: "01", title: "Overview" },
  { id: "services", number: "02", title: "Specialized Services" },
  { id: "intellectual-property", number: "03", title: "Intellectual Property" },
  { id: "liability", number: "04", title: "Limitation of Liability" },
  { id: "governing-law", number: "05", title: "Governing Law" },
];

const Page = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / total) * 100);

      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        return el ? { id, top: el.getBoundingClientRect().top } : null;
      });

      const current = offsets.filter((o) => o && o.top <= 160).pop();
      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        background: "#F7F5F0",
        minHeight: "100vh",
        color: "#1A1A2E",
      }}
    >
      <style>{`
      
        .tos-root {
          background: #F7F5F0;
          min-height: 100vh;
          color: #1A1A2E;
        }

        .progress-bar {
          position: fixed;
          top: 0; left: 0;
          height: 2px;
          background: linear-gradient(90deg, #0B3D91, #1E90C8, #C9A84C);
          z-index: 100;
          transition: width 0.1s linear;
        }

        .topbar {
          position: fixed;
          top: 2px; left: 0; right: 0;
          height: 64px;
          background: rgba(247, 245, 240, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(26,26,46,0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          z-index: 90;
        }

        .topbar-logo {
          font-family: 'Venus Rising', Georgia, serif;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #0B3D91;
          text-transform: uppercase;
        }

        .topbar-label {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #1A1A2E;
          opacity: 0.4;
          font-weight: 500;
        }

       .hero {
  position: relative;
  padding: 140px 48px 80px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-bottom: 1px solid rgba(26,26,46,0.08);
  overflow: hidden;
  min-height: 380px;
  justify-content: flex-end;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=80&auto=format&fit=crop');
  background-size: cover;
  background-position: center 60%;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(10, 12, 30, 0.82) 0%,
    rgba(10, 12, 30, 0.65) 50%,
    rgba(10, 12, 30, 0.40) 100%
  );
  z-index: 1;
}

.hero > *:not(.hero-bg):not(.hero-overlay) {
  position: relative;
  z-index: 2;
}

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C9A84C;
          font-weight: 600;
        }

        .hero-tag::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #C9A84C;
        }

        .hero-title {
          font-family: 'Venus Rising', Georgia, serif;
          font-size: clamp(52px, 7vw, 88px);
          font-weight: 300;
          line-height: 1.0;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .hero-title em {
          font-style: italic;
          color: #0B3D91;
        }

        .hero-meta {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-top: 8px;
          color: #ffffff;
        }

        .hero-date {
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #1A1A2E;
          opacity: 0.5;
          font-weight: 500;
        }

        .hero-divider {
          width: 1px;
          height: 16px;
          background: rgba(26,26,46,0.2);
        }

        .hero-desc {
          font-size: 14px;
          color: #ffffff;
          opacity: 0.55;
          line-height: 1.7;
          max-width: 520px;
          font-weight: 300;
        }

        .body-layout {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 48px;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 80px;
          align-items: start;
        }

        .sidebar {
          position: sticky;
          top: 96px;
        }

        .sidebar-label {
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #C9A84C;
          font-weight: 600;
          margin-bottom: 24px;
          display: block;
        }

        .sidebar-nav {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-family: 'Venus Rising', Georgia, serif;
        }

        .sidebar-nav a {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 12.5px;
          font-weight: 400;
          color: rgba(26,26,46,0.45);
          transition: all 0.2s ease;
          letter-spacing: 0.02em;
        }

        .sidebar-nav a:hover {
          color: #0B3D91;
          background: rgba(11,61,145,0.05);
        }

        .sidebar-nav a.active {
          color: #0B3D91;
          font-weight: 600;
          background: rgba(11,61,145,0.06);
        }

        .sidebar-nav a .num {
          font-family: 'Venus Rising', Georgia, serif;
          font-size: 11px;
          font-weight: 400;
          color: #C9A84C;
          min-width: 20px;
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: 72px;
        }

        .section {
          padding-top: 8px;
          scroll-margin-top: 96px;
        }

        .section-header {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 28px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(26,26,46,0.08);
        }

        .section-num {
          font-family: 'Venus Rising', Georgia, serif;
          font-size: 13px;
          font-weight: 400;
          color: #C9A84C;
          letter-spacing: 0.1em;
        }

        .section-title {
          font-family: 'Venus Rising', Georgia, serif;
          font-size: 28px;
          font-weight: 400;
          font-style: italic;
          color: #1A1A2E;
          letter-spacing: -0.01em;
        }

        .section p {
          font-size: 14.5px;
          line-height: 1.85;
          color: rgba(26,26,46,0.7);
          font-weight: 300;
          max-width: 680px;
        }

        .section p + p {
          margin-top: 16px;
        }

        .services-card {
          background: #0B3D91;
          border-radius: 16px;
          padding: 48px;
          margin-top: 32px;
        }

        .services-card p {
          color: rgba(255,255,255,0.65) !important;
          font-size: 14px !important;
          margin-bottom: 32px;
          max-width: 580px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .service-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 16px 20px;
        }

        .service-dot {
          width: 6px;
          height: 6px;
          background: #C9A84C;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .service-item span {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          letter-spacing: 0.02em;
        }

        .highlight-block {
          background: rgba(201,168,76,0.06);
          border-left: 2px solid #C9A84C;
          border-radius: 0 10px 10px 0;
          padding: 28px 32px;
          margin-top: 24px;
        }

        .highlight-block p {
          color: rgba(26,26,46,0.65) !important;
        }

        .footer {
          border-top: 1px solid rgba(26,26,46,0.08);
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer-logo {
          font-family: 'Venus Rising', Georgia, serif;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0B3D91;
        }

        .footer-note {
          font-size: 11px;
          color: rgba(26,26,46,0.35);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .topbar { padding: 0 20px; }
          .hero { padding: 120px 20px 60px; }
          .body-layout { grid-template-columns: 1fr; gap: 48px; padding: 48px 20px; }
          .sidebar { display: none; }
          .services-grid { grid-template-columns: 1fr; }
          .footer { flex-direction: column; gap: 12px; text-align: center; padding: 32px 20px; }
        }
      `}</style>

      <div className="tos-root">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/terms.avif"
              alt="Private jet on tarmac — Aircraft Brokerage"
              fill
              priority
              className="object-cover object-center scale-105"
            />

            {/* Overlay Layers */}
            <div className="absolute inset-0 bg-[#06111D]/45" />
            <div className="absolute inset-0 bg-linear-to-b from-[#06111D]/20 via-[#06111D]/35 to-[#06111D]/80" />
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
          <div className="relative z-10 max-w-350 mx-auto px-6 md:px-10 lg:px-16 text-center">
            <FadeUpStagger>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-5 py-2 mb-8">
                <span className="h-2 w-2 rounded-full bg-[#D7A34D] animate-pulse" />
                <span className="text-[11px] tracking-[0.35em] uppercase text-white/70 font-medium">
                  Legal Documentation
                </span>
              </div>
            </FadeUpStagger>

            <SplitTextReveal
              as="h1"
              className="text-2xl md:text-5xl font-display font-bold text-brand-cream"
            >
              Terms of Service
            </SplitTextReveal>

            <FadeUpStagger>
              <p className="mt-8 max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-white/65">
                These terms govern your engagement with Skyblue Aero's premium
                aviation services, aircraft management, and digital platforms.
              </p>
            </FadeUpStagger>
          </div>
        </section>

        <div className="body-layout">
          <aside className="sidebar">
            <span className="sidebar-label">Contents</span>
            <ul className="sidebar-nav">
              {sections.map(({ id, number, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={activeSection === id ? "active" : ""}
                  >
                    <span className="num">{number}</span>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <main className="content">
            <article id="overview" className="section">
              <div className="section-header">
                <span className="section-num">01</span>
                <h2 className="section-title">Overview</h2>
              </div>
              <p>
                Welcome to <strong>Skyblue Aero</strong>. This website and our
                specialized aviation services are operated by Skyblue Aero.
                Throughout the site, the terms "we", "us" and "our" refer to the
                Skyblue Aero team.
              </p>
              <p>
                By accessing our global charter services, aircraft acquisitions,
                or consultancy platforms, you agree to be bound by the following
                terms and conditions. If you do not agree with any part of these
                terms, you may not access our services.
              </p>
            </article>

            <article id="services" className="section">
              <div className="section-header">
                <span className="section-num">02</span>
                <h2 className="section-title">Specialized Services</h2>
              </div>
              <p>
                Skyblue Aero provides personalized aircraft management,
                executive charter planning, and expert consulting for aircraft
                acquisitions. We provide guaranteed quotes, ensuring full
                transparency compared to standard industry estimates.
              </p>
              <div className="services-card">
                <p>
                  Our suite of premium aviation services is designed to deliver
                  excellence at every altitude.
                </p>
                <div className="services-grid">
                  {[
                    "24/7 Global Charter Support",
                    "Turnkey Aircraft Management",
                    "SMS Compliant Operations",
                    "Financial Structure Consulting",
                  ].map((item) => (
                    <div className="service-item" key={item}>
                      <div className="service-dot" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article id="intellectual-property" className="section">
              <div className="section-header">
                <span className="section-num">03</span>
                <h2 className="section-title">Intellectual Property</h2>
              </div>
              <p>
                All content on this platform — including our specialized
                brochures, market analyses, logo designs, and brand materials —
                is the exclusive intellectual property of Skyblue Aero,
                protected under applicable copyright and trademark law.
              </p>
              <p>
                You may not reproduce, duplicate, copy, sell, resell, or exploit
                any portion of our Service without express written permission
                from Skyblue Aero. Unauthorized use will be pursued to the full
                extent permitted by law.
              </p>
            </article>

            <article id="liability" className="section">
              <div className="section-header">
                <span className="section-num">04</span>
                <h2 className="section-title">Limitation of Liability</h2>
              </div>
              <p>
                While we adhere to international aviation safety standards and
                provide expert consulting, Skyblue Aero does not warrant that
                all information on this website is perpetually accurate or
                up-to-date.
              </p>
              <div className="highlight-block">
                <p>
                  Our liability is limited to the maximum extent permitted by
                  law, particularly with respect to third-party fees, airport
                  disbursements, and information provided for advisory purposes
                  only. Nothing on this platform constitutes a binding
                  operational commitment unless confirmed in writing.
                </p>
              </div>
            </article>

            <article id="governing-law" className="section">
              <div className="section-header">
                <span className="section-num">05</span>
                <h2 className="section-title">Governing Law</h2>
              </div>
              <p>
                These Terms of Service and any separate agreements whereby we
                provide you Services shall be governed by and construed in
                accordance with the laws of the jurisdiction in which Skyblue
                Aero operates its primary corporate headquarters.
              </p>
              <p>
                Any disputes arising in connection with these terms shall be
                subject to the exclusive jurisdiction of the competent courts in
                that jurisdiction, and both parties consent to such jurisdiction
                and venue.
              </p>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Page;
