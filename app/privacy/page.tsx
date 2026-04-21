"use client";

import FadeUpStagger from "@/components/motion/FadeUpStagger";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const sections = [
  { id: "overview", number: "01", title: "Overview" },
  { id: "data-collection", number: "02", title: "Data We Collect" },
  { id: "data-use", number: "03", title: "How We Use Your Data" },
  { id: "data-sharing", number: "04", title: "Data Sharing & Disclosure" },
  { id: "your-rights", number: "05", title: "Your Rights" },
  { id: "security", number: "06", title: "Security & Retention" },
  { id: "contact", number: "07", title: "Contact Us" },
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
        .pp-root {
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

        .data-card {
          background: #0B3D91;
          border-radius: 16px;
          padding: 48px;
          margin-top: 32px;
        }

        .data-card p {
          color: rgba(255,255,255,0.65) !important;
          font-size: 14px !important;
          margin-bottom: 32px;
          max-width: 580px;
        }

        .data-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .data-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 16px 20px;
        }

        .data-dot {
          width: 6px;
          height: 6px;
          background: #C9A84C;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 5px;
        }

        .data-item-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .data-item-title {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          letter-spacing: 0.02em;
        }

        .data-item-desc {
          font-size: 12px;
          color: rgba(255,255,255,0.45) !important;
          font-weight: 300;
          line-height: 1.5;
          margin: 0 !important;
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

        .rights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 28px;
        }

        .rights-item {
          background: #ffffff;
          border: 1px solid rgba(26,26,46,0.07);
          border-radius: 12px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .rights-item-num {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #C9A84C;
          font-weight: 600;
        }

        .rights-item-title {
          font-size: 14px;
          font-weight: 600;
          color: #1A1A2E;
          letter-spacing: 0.01em;
        }

        .rights-item-desc {
          font-size: 13px;
          line-height: 1.65;
          color: rgba(26,26,46,0.55);
          font-weight: 300;
        }

        .contact-card {
          background: #F0EDE6;
          border-radius: 16px;
          padding: 40px 48px;
          margin-top: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        .contact-card-left {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact-card-label {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #C9A84C;
          font-weight: 600;
        }

        .contact-card-email {
          font-size: 18px;
          font-weight: 400;
          color: #0B3D91;
          letter-spacing: -0.01em;
          text-decoration: none;
        }

        .contact-card-email:hover {
          text-decoration: underline;
        }

        .contact-card-note {
          font-size: 13px;
          color: rgba(26,26,46,0.45);
          font-weight: 300;
          max-width: 320px;
          line-height: 1.6;
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
          .body-layout { grid-template-columns: 1fr; gap: 48px; padding: 48px 20px; }
          .sidebar { display: none; }
          .data-grid { grid-template-columns: 1fr; }
          .rights-grid { grid-template-columns: 1fr; }
          .contact-card { flex-direction: column; padding: 28px; }
          .footer { flex-direction: column; gap: 12px; text-align: center; padding: 32px 20px; }
        }
      `}</style>

      <div className="pp-root">
        {/* Progress Bar */}
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/terms.avif"
              alt="Private jet — Privacy Policy"
              fill
              priority
              className="object-cover object-center scale-105"
            />
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
                  Legal Documentation
                </span>
              </div>
            </FadeUpStagger>

            <SplitTextReveal
              as="h1"
              className="text-2xl md:text-5xl font-display font-bold text-brand-cream"
            >
              Privacy Policy
            </SplitTextReveal>

            <FadeUpStagger>
              <p className="mt-8 max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-white/65">
                Your privacy is fundamental to how we operate. This policy
                explains what data we collect, why we collect it, and how
                Skyblue Aero safeguards your information.
              </p>
            </FadeUpStagger>
          </div>
        </section>

        <div className="body-layout">
          {/* Sidebar */}
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
            {/* 01 — Overview */}
            <article id="overview" className="section">
              <div className="section-header">
                <span className="section-num">01</span>
                <h2 className="section-title">Overview</h2>
              </div>
              <p>
                At <strong>Skyblue Aero</strong>, we are committed to protecting
                the personal information of every client, partner, and visitor
                who engages with our platforms and services. This Privacy Policy
                describes how we collect, use, store, and disclose your data in
                connection with our aviation services.
              </p>
              <p>
                By using our website or engaging our services, you acknowledge
                that you have read and understood this policy. We may update
                this policy from time to time; continued use of our services
                following any change constitutes your acceptance of the revised
                terms.
              </p>
            </article>

            {/* 02 — Data We Collect */}
            <article id="data-collection" className="section">
              <div className="section-header">
                <span className="section-num">02</span>
                <h2 className="section-title">Data We Collect</h2>
              </div>
              <p>
                We collect only the information necessary to deliver our
                services, maintain regulatory compliance, and continually
                improve your experience with Skyblue Aero.
              </p>
              <div className="data-card">
                <p>
                  The following categories of data may be collected depending on
                  your engagement with our platforms.
                </p>
                <div className="data-grid">
                  {[
                    {
                      title: "Identity & Contact",
                      desc: "Full name, email address, phone number, and passport details where required for charter bookings.",
                    },
                    {
                      title: "Usage & Behavioral",
                      desc: "Pages visited, session duration, device type, and referring URLs collected via cookies.",
                    },
                    {
                      title: "Financial Information",
                      desc: "Billing details and transaction records processed securely through compliant payment partners.",
                    },
                    {
                      title: "Flight & Travel Data",
                      desc: "Itinerary preferences, passenger manifests, and special service requests tied to bookings.",
                    },
                    {
                      title: "Communication Records",
                      desc: "Emails, enquiry forms, and support interactions submitted through our platforms.",
                    },
                    {
                      title: "Legal & Compliance",
                      desc: "KYC documentation and regulatory records required under applicable aviation and financial law.",
                    },
                  ].map((item) => (
                    <div className="data-item" key={item.title}>
                      <div className="data-dot" />
                      <div className="data-item-content">
                        <span className="data-item-title">{item.title}</span>
                        <p className="data-item-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* 03 — How We Use Your Data */}
            <article id="data-use" className="section">
              <div className="section-header">
                <span className="section-num">03</span>
                <h2 className="section-title">How We Use Your Data</h2>
              </div>
              <p>
                Your data is used solely to operate, improve, and personalise
                our aviation services. We do not sell personal information to
                third parties, nor do we use your data for purposes beyond those
                outlined in this policy.
              </p>
              <p>
                Specifically, we use your information to process charter
                bookings and aircraft management requests, communicate regarding
                service updates, regulatory notices, and quotations, fulfil
                legal and compliance obligations under applicable aviation law,
                and analyse aggregate usage patterns to improve our digital
                platforms.
              </p>
              <div className="highlight-block">
                <p>
                  Where we rely on legitimate interests as a legal basis for
                  processing, we ensure those interests are not overridden by
                  your fundamental rights. You may object to such processing at
                  any time by contacting our data team.
                </p>
              </div>
            </article>

            {/* 04 — Data Sharing */}
            <article id="data-sharing" className="section">
              <div className="section-header">
                <span className="section-num">04</span>
                <h2 className="section-title">Data Sharing & Disclosure</h2>
              </div>
              <p>
                Skyblue Aero does not sell, trade, or rent your personal
                information to any third party for marketing purposes. We may
                share your data only in the following limited circumstances.
              </p>
              <p>
                Data may be disclosed to trusted aviation operators, handling
                agents, or ground service providers strictly necessary to fulfil
                a booking. We may also share information with regulatory bodies
                such as aviation authorities or law enforcement when legally
                required, and with technology partners who process data on our
                behalf under strict confidentiality obligations.
              </p>
              <div className="highlight-block">
                <p>
                  All third-party processors engaged by Skyblue Aero are bound
                  by data processing agreements that comply with applicable
                  privacy legislation. International transfers are conducted
                  under appropriate safeguards, including standard contractual
                  clauses where required.
                </p>
              </div>
            </article>

            {/* 05 — Your Rights */}
            <article id="your-rights" className="section">
              <div className="section-header">
                <span className="section-num">05</span>
                <h2 className="section-title">Your Rights</h2>
              </div>
              <p>
                Depending on your jurisdiction, you may hold several rights in
                relation to the personal data we hold about you. We are
                committed to honouring these rights promptly and transparently.
              </p>
              <div className="rights-grid">
                {[
                  {
                    num: "R — 01",
                    title: "Right of Access",
                    desc: "Request a copy of the personal data we hold about you at any time.",
                  },
                  {
                    num: "R — 02",
                    title: "Right to Rectification",
                    desc: "Ask us to correct any inaccurate or incomplete personal information.",
                  },
                  {
                    num: "R — 03",
                    title: "Right to Erasure",
                    desc: "Request deletion of your data where there is no legitimate reason to retain it.",
                  },
                  {
                    num: "R — 04",
                    title: "Right to Portability",
                    desc: "Receive your data in a structured, machine-readable format for transfer.",
                  },
                  {
                    num: "R — 05",
                    title: "Right to Object",
                    desc: "Object to processing based on legitimate interests or direct marketing.",
                  },
                  {
                    num: "R — 06",
                    title: "Right to Restrict",
                    desc: "Request that we limit processing of your data in certain circumstances.",
                  },
                ].map((r) => (
                  <div className="rights-item" key={r.num}>
                    <span className="rights-item-num">{r.num}</span>
                    <span className="rights-item-title">{r.title}</span>
                    <span className="rights-item-desc">{r.desc}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* 06 — Security & Retention */}
            <article id="security" className="section">
              <div className="section-header">
                <span className="section-num">06</span>
                <h2 className="section-title">Security & Retention</h2>
              </div>
              <p>
                We implement industry-standard technical and organisational
                measures to protect your personal data against unauthorised
                access, loss, or disclosure. These include encrypted data
                transmission, access-controlled internal systems, and regular
                security assessments.
              </p>
              <p>
                Personal data is retained only for as long as necessary to
                fulfil the purposes for which it was collected, including
                compliance with legal, accounting, or regulatory requirements.
                Once data is no longer required, it is securely deleted or
                anonymised in accordance with our internal data lifecycle
                policy.
              </p>
              <div className="highlight-block">
                <p>
                  Despite our best efforts, no method of transmission or
                  electronic storage is entirely secure. We encourage you to
                  contact us immediately if you suspect any unauthorised use of
                  your information or a potential security breach.
                </p>
              </div>
            </article>

            {/* 07 — Contact */}
            <article id="contact" className="section">
              <div className="section-header">
                <span className="section-num">07</span>
                <h2 className="section-title">Contact Us</h2>
              </div>
              <p>
                If you have any questions about this Privacy Policy, wish to
                exercise your rights, or would like to raise a concern regarding
                how we handle your data, please reach out to our dedicated
                privacy team.
              </p>
              <div className="contact-card">
                <div className="contact-card-left">
                  <span className="contact-card-label">Privacy Enquiries</span>
                  <a
                    href="mailto:ops@skyblue.aero"
                    className="contact-card-email"
                  >
                    ops@skyblue.aero
                  </a>
                </div>
                <p className="contact-card-note">
                  We aim to respond to all privacy-related requests within 30
                  days. For urgent matters, please indicate the nature of your
                  enquiry in the subject line.
                </p>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Page;
