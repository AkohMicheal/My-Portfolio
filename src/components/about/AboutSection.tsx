// src/components/about/AboutSection.tsx
'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCode, FiCpu, FiTrendingUp, FiBookOpen, FiCompass } from "react-icons/fi";

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section 
      id="aboutsection" 
      ref={ref} 
      className="py-16 md:py-24 border-t border-zinc-800/80 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            ENGINEERING PROFILE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Architectural Philosophy &amp; Experience
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            I don&apos;t build superficial templates. I architect end-to-end systems that marry polished, accessible user experiences with resilient backend and cloud foundations.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Card 1: End-to-End System Ownership (Span 2) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <FiCode className="text-lg" />
                </div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  Full-Stack Architecture
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-zinc-100 mb-2">
                End-to-End System Ownership
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
                Proficient across the full software lifecycle. I design intuitive interfaces in Next.js/React, engineer robust REST &amp; WebSocket APIs with Node.js and FastAPI, manage relational and document databases, and deploy containerized workloads directly onto AWS infrastructure.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-zinc-800/80">
              {["Next.js 15", "TypeScript", "Node.js", "FastAPI", "PostgreSQL", "AWS EC2/RDS", "Docker"].map((tech) => (
                <span 
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Applied AI Research */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <FiCpu className="text-lg" />
                </div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  Applied ML
                </span>
              </div>

              <h3 className="text-xl font-bold text-zinc-100 mb-2">
                Research Grounded in Code
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                My B.Tech thesis engineered a dual-stream Deepfake Detection system fusing spatial feature maps with frequency DCT spectrum analysis and Explainable AI (Grad-CAM). I apply state-of-the-art ML models to real security challenges.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>Thesis Project</span>
              <span className="text-zinc-400">Grad-CAM XAI</span>
            </div>
          </motion.div>

          {/* Card 3: Production Speed at Lampnet */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <FiTrendingUp className="text-lg" />
                </div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  Delivery
                </span>
              </div>

              <h3 className="text-xl font-bold text-zinc-100 mb-2">
                Speed &amp; Production Quality
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                At Lampnet Technologies, I consistently deliver ahead of sprint cycles across 3+ concurrent client projects, translating complex design files into pixel-accurate, accessible components backed by comprehensive QA workflows.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 text-xs font-mono text-zinc-400">
              3+ Concurrent Client Deployments
            </div>
          </motion.div>

          {/* Card 4: Academic Foundation */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <FiBookOpen className="text-lg" />
                </div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  Education
                </span>
              </div>

              <h3 className="text-xl font-bold text-zinc-100 mb-2">
                B.Tech in Software Engineering
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Federal University of Technology Akure (FUTA), 2020–2026. Built on rigorous algorithmic foundations, data structures, network security, and distributed computing principles.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 text-xs font-mono text-zinc-400">
              FUTA · 2020 - 2026
            </div>
          </motion.div>

          {/* Card 5: Current Technical Focus */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-emerald-500/30 bg-emerald-950/10"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  <FiCompass className="text-lg" />
                </div>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Focus
                </span>
              </div>

              <h3 className="text-xl font-bold text-zinc-100 mb-2">
                Emerging Tech Lab
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Currently exploring adversarial attack mitigation for Generative AI, serverless edge runtimes, and building high-performance AI tools for developer workflows. Always engineering the next frontier.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>Open to Collaborations</span>
              <span>Lab 2026</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
