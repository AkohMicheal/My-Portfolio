'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroImage: React.FC = () => {
  return (
    <div className="flex justify-center md:justify-end w-full relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-sm sm:max-w-md"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute -inset-2 bg-gradient-to-tr from-green-500/20 via-emerald-500/10 to-transparent rounded-3xl blur-2xl -z-10"></div>

        {/* Profile Card Container */}
        <div className="relative bg-white p-3 sm:p-4 rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
          {/* Main Profile Image */}
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gray-100">
            <Image
              src="/images/micheal-akoh-profile.jpg"
              alt="Micheal Akoh-Idoko — Full-Stack Software Engineer"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Gradient Overlay for subtle bottom contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent"></div>

            {/* In-Photo Tag */}
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <p className="text-base font-bold tracking-tight">Micheal Akoh-Idoko</p>
              <p className="text-xs text-gray-200">Full-Stack Engineer · Lagos (GMT+1)</p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-3 pt-3 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
            <div className="px-2 py-1 bg-gray-50 rounded-lg">
              <p className="text-xs font-semibold text-gray-900">Next.js & React</p>
              <p className="text-[10px] text-gray-500">Modern App Router</p>
            </div>
            <div className="px-2 py-1 bg-gray-50 rounded-lg">
              <p className="text-xs font-semibold text-gray-900">Kafka & Node</p>
              <p className="text-[10px] text-gray-500">Microservices</p>
            </div>
            <div className="px-2 py-1 bg-gray-50 rounded-lg">
              <p className="text-xs font-semibold text-gray-900">Python & ML</p>
              <p className="text-[10px] text-gray-500">FastAPI & Pytest</p>
            </div>
          </div>
        </div>

        {/* Floating Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute -bottom-3 -left-3 sm:-left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gray-200 shadow-md flex items-center gap-2"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-gray-800">Available for Global Roles</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroImage;
