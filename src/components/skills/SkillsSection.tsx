// src/components/skills/SkillsSection.tsx
'use client';

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs, 
  SiPython, 
  SiFastapi, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiAmazonwebservices, 
  SiDocker, 
  SiGit, 
  SiTensorflow, 
  SiOpencv, 
  SiSocketdotio,
  SiFigma
} from "react-icons/si";
import { FiCheckCircle, FiTerminal } from "react-icons/fi";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "aiml" | "cloud" | "database";
  level: "Core Production" | "Advanced" | "Research" | "Infrastructure";
  icon: React.ComponentType<{ className?: string }>;
  highlight?: string;
}

const skillsList: SkillItem[] = [
  // Frontend
  { name: "React 19 / 18", category: "frontend", level: "Core Production", icon: SiReact, highlight: "Component Architecture" },
  { name: "Next.js 15 (App Router)", category: "frontend", level: "Core Production", icon: SiNextdotjs, highlight: "RSC & Performance" },
  { name: "TypeScript", category: "frontend", level: "Core Production", icon: SiTypescript, highlight: "Strict Type Safety" },
  { name: "JavaScript (ES6+)", category: "frontend", level: "Core Production", icon: SiJavascript, highlight: "Async / Web APIs" },
  { name: "Tailwind CSS", category: "frontend", level: "Core Production", icon: SiTailwindcss, highlight: "Design Systems" },
  { name: "Figma to Code", category: "frontend", level: "Core Production", icon: SiFigma, highlight: "Pixel-Accurate Handoff" },

  // Backend
  { name: "Node.js", category: "backend", level: "Core Production", icon: SiNodedotjs, highlight: "Event-Driven Backends" },
  { name: "Python", category: "backend", level: "Advanced", icon: SiPython, highlight: "Scientific & Automation" },
  { name: "FastAPI", category: "backend", level: "Advanced", icon: SiFastapi, highlight: "High-Throughput REST" },
  { name: "Socket.io", category: "backend", level: "Core Production", icon: SiSocketdotio, highlight: "Bi-directional Sockets" },

  // AI/ML
  { name: "TensorFlow & Keras", category: "aiml", level: "Research", icon: SiTensorflow, highlight: "Dual-Stream CNNs" },
  { name: "OpenCV", category: "aiml", level: "Research", icon: SiOpencv, highlight: "Video & Image Pipelines" },
  { name: "Deep Learning (GRU/LSTM)", category: "aiml", level: "Research", icon: FiTerminal, highlight: "Sequential Intrusion Models" },
  { name: "XAI (Grad-CAM)", category: "aiml", level: "Research", icon: FiCheckCircle, highlight: "Explainable Visual Heatmaps" },

  // Cloud & DevOps
  { name: "AWS (EC2 & RDS)", category: "cloud", level: "Infrastructure", icon: SiAmazonwebservices, highlight: "Cloud Hosting & Databases" },
  { name: "Docker", category: "cloud", level: "Infrastructure", icon: SiDocker, highlight: "Containerization" },
  { name: "CI/CD & Git Workflows", category: "cloud", level: "Infrastructure", icon: SiGit, highlight: "Automated Deployments" },

  // Database
  { name: "PostgreSQL", category: "database", level: "Core Production", icon: SiPostgresql, highlight: "Relational Modeling" },
  { name: "MongoDB", category: "database", level: "Core Production", icon: SiMongodb, highlight: "Document Store" },
  { name: "MySQL", category: "database", level: "Core Production", icon: SiMysql, highlight: "Relational Schemas" },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend & Architecture" },
  { id: "backend", label: "Backend & APIs" },
  { id: "aiml", label: "AI / ML & Vision" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "database", label: "Databases" },
];

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const ref = useRef(null);

  const filteredSkills = activeTab === "all" 
    ? skillsList 
    : skillsList.filter((s) => s.category === activeTab);

  return (
    <section 
      id="skillssection" 
      ref={ref} 
      className="py-16 md:py-24 border-t border-zinc-800/80 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              CAPABILITIES &amp; STACK
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Technical Stack &amp; Tools
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
              Production-hardened technologies applied across commercial web clients, distributed LMS architectures, and machine learning research.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/20 px-3 py-1.5 rounded-lg border border-emerald-500/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>20+ Verified Core Competencies</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === cat.id
                  ? "bg-emerald-500 text-zinc-950 font-semibold shadow-md shadow-emerald-500/10"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="glass-panel glass-panel-hover rounded-xl p-4 flex items-center gap-3.5 group"
                >
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-colors shrink-0">
                    <Icon className="text-xl" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-zinc-200 group-hover:text-zinc-100 truncate">
                      {skill.name}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 truncate mt-0.5">
                      {skill.highlight}
                    </div>
                  </div>

                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-400 border border-zinc-700/50 shrink-0">
                    {skill.level}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
