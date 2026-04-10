"use client";

import React from "react";
import IntroAnimation from "@/components/ui/scroll-morph-hero";

const ClientSection: React.FC = () => {
  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-white">
      <div className="w-full h-full">
        <IntroAnimation />
      </div>
    </section>
  );
};

export default ClientSection;