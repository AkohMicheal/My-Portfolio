'use client';

import React from "react";
import HeroText from "./HeroText";
import Hero3DWrapper from "./Hero3DWrapper";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white rounded-xl shadow-sm p-6 mt-8 overflow-hidden section-spacing">
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <HeroText />
        <Hero3DWrapper />
      </div>
    </section>
  );
};

export default HeroSection;
