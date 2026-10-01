// src/components/hero/HeroText.tsx
'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const HeroText: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-left"
    >
      {/* Status Eyebrow Badge */}
      <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
        <span className="text-xs font-mono font-medium text-emerald-400 tracking-wide">
          AVAILABLE FOR SOFTWARE ROLES
        </span>
        <span className="text-zinc-600 hidden sm:inline">•</span>
        <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
          Lagos, NG · Global Remote
        </span>
      </div>

      {/* Main Display Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100 leading-[1.08] mb-6">
        Architecting scalable <br className="hidden sm:inline" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
          full-stack systems
        </span>{" "}
        &amp; applied AI.
      </h1>

      {/* Narrative Subtext */}
      <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8">
        Hi, I&apos;m <strong className="text-zinc-100 font-semibold">Micheal Akoh</strong> — a Software Engineer focused on building high-performance web architectures, cloud infrastructure on AWS, and real-time deep learning applications. Currently engineering enterprise client platforms at <span className="text-zinc-200 font-medium">Lampnet Technologies</span>.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3.5 mb-10">
        <a 
          href="#projectsection"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 active:scale-[0.98]"
        >
          <span>Explore Case Studies</span>
          <FaArrowRight className="text-xs" />
        </a>

        <a 
          href="#contactsection"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 font-medium text-sm transition-all duration-200 active:scale-[0.98]"
        >
          <HiOutlineMail className="text-base text-emerald-400" />
          <span>Get in Touch</span>
        </a>

        <a 
          href="https://github.com/MichealAkoh" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Visit Micheal Akoh's GitHub Profile"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/80 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80 text-sm font-medium transition-all"
        >
          <FaGithub className="text-base" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>

      {/* Key Metric Telemetry Strip */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800/70 max-w-lg">
        <div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-zinc-100 tracking-tight">3+</div>
          <div className="text-xs text-zinc-400 font-medium mt-0.5">Enterprise Clients</div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 tracking-tight">98.4%</div>
          <div className="text-xs text-zinc-400 font-medium mt-0.5">AI Thesis Accuracy</div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-zinc-100 tracking-tight">99.9%</div>
          <div className="text-xs text-zinc-400 font-medium mt-0.5">Cloud Uptime SLA</div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroText;
