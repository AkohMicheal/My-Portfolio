// src/components/hero/HeroSection.tsx
'use client';

import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 md:pt-36 md:pb-20 overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <div className="lg:col-span-7 xl:col-span-7">
          <HeroText />
        </div>
        <div className="lg:col-span-5 xl:col-span-5">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
