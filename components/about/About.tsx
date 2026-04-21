"use client";

import Image from "next/image";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import FadeUpStagger from "@/components/motion/FadeUpStagger";
import ClipReveal from "@/components/motion/ClipReveal";

const About = () => {
  return (
    <main>
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/jet-aerial.jpg"
            alt="Aviation crew"
            fill
            priority
            className="object-cover object-top scale-105"
          />

          <div className="absolute inset-0 bg-[#06111D]/45" />
          <div className="absolute inset-0 bg-linear-to-b from-[#06111D]/20 via-[#06111D]/35 to-[#06111D]/80" />
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

        <div className="relative z-10 max-w-350 mx-auto w-full px-6 md:px-10 pb-16 md:pb-24">
          <p className="font-body text-brand-gold text-xs tracking-[0.3em] uppercase mb-4">
            About Us
          </p>
          <SplitTextReveal
            as="h1"
            className="text-fluid-heading font-display font-bold text-brand-cream"
          >
            Built on Trust. Driven by Excellence.
          </SplitTextReveal>
        </div>
      </section>

      <section className="bg-brand-cream py-10 md:py-24">
        <div className="max-w-350 mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUpStagger>
            <p className="font-body text-brand-gold text-xs tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-display text-fluid-subheading font-bold text-brand-navy mb-6">
              Aviation Expertise,
              <br />
              Delivered with Precision.
            </h2>
            <p className="font-body text-brand-navy/70 text-base leading-relaxed mb-4">
              SkyBlue Aero is an aviation services company owned by Captain
              Sylvester Vijay Moni, bringing over 15 years of industry
              experience. The company is built on practical expertise, strong
              global connections, and a deep understanding of aviation
              operations. At its core, SkyBlue Aero focuses on simplifying
              aviation for its clients. From international trip support and
              flight planning to fuel coordination, ground handling, and charter
              assistance, the team ensures smooth and reliable operations across
              every stage of a journey.
            </p>
            <p className="font-body text-brand-navy/60 text-base leading-relaxed">
              With a trusted global network of professionals—including pilots,
              engineers, and operational teams—SkyBlue Aero works closely with
              aircraft owners and operators to deliver efficient, compliant, and
              well-coordinated aviation solutions. With a commitment to
              professionalism, compliance, and operational excellence, SkyBlue
              Aero simplifies the complexities of aviation, allowing clients to
              focus on what matters most—flying with confidence and efficiency..
            </p>
          </FadeUpStagger>

          <ClipReveal direction="left">
            <div className="relative w-full aspect-4/3">
              <Image
                src="/images/crew.jpg"
                alt="Our team"
                fill
                className="object-cover"
              />
            </div>
          </ClipReveal>
        </div>
      </section>

      <section className="bg-brand-cream py-10 border-t border-brand-navy/08">
        <div className="max-w-350 mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="font-body text-brand-gold text-xs tracking-[0.3em] uppercase mb-4">
              Our Values
            </p>
            <SplitTextReveal
              as="h2"
              className="text-fluid-subheading font-display font-bold text-brand-navy"
            >
              The Principles That Guide Us
            </SplitTextReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                desc: "Every decision, recommendation, and operation is evaluated through the lens of safety — no exceptions, no compromise.",
              },
              {
                title: "Client Focus",
                desc: "We work as an extension of your team, aligning every solution to your operational priorities and business objectives.",
              },
              {
                title: "Integrity",
                desc: "Transparent communication, honest advice, and ethical operations form the foundation of every client relationship.",
              },
            ].map((v) => (
              <FadeUpStagger key={v.title}>
                <div className="text-center px-6">
                  <div className="w-10 h-px bg-brand-gold mx-auto mb-6" />
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-4">
                    {v.title}
                  </h3>
                  <p className="font-body text-brand-navy/60 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </FadeUpStagger>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
