// src/components/projects/ProjectsSection.tsx
'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "./ProjectsData";
import ProjectCard from "./ProjectsCard";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section
      id="projectsection"
      ref={ref}
      className="py-16 md:py-24 border-t border-zinc-800/80 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Featured Systems &amp; Case Studies
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
              In-depth engineering breakdowns highlighting architecture choices, technical constraints, and measurable outcomes.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>View Complete Project Archive</span>
            <FiArrowRight className="text-sm" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
