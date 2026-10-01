// src/components/experience/ExperienceSection.tsx
'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "./ExperienceData";
import { FiBriefcase, FiMapPin, FiCalendar, FiCheck } from "react-icons/fi";

const ExperienceSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section 
      id="experiencesection" 
      ref={ref} 
      className="py-16 md:py-24 border-t border-zinc-800/80 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            CAREER TRAJECTORY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Work Experience &amp; Engineering Roles
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
            Demonstrated track record of delivering resilient code, managing AWS infrastructure, and shipping ahead of sprint deadlines.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-zinc-800 ml-4 sm:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Connector Node */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-zinc-950 border-2 border-emerald-500 group-hover:scale-125 group-hover:bg-emerald-500 transition-all duration-300" />

              {/* Experience Card Surface */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7">
                {/* Meta Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm mt-0.5">
                      <FiBriefcase className="text-xs" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">
                      <FiCalendar className="text-emerald-400 text-[11px]" />
                      {exp.date}
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">
                      <FiMapPin className="text-zinc-400 text-[11px]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Role Description / Highlights */}
                <ul className="space-y-2.5 my-4 text-sm text-zinc-300">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <FiCheck className="text-emerald-400 mt-1 shrink-0 text-sm" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-zinc-900/80 text-[11px] font-mono text-zinc-400 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
