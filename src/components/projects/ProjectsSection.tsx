'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "./ProjectsData";
import ProjectCard from "./ProjectsCard";
import Link from "next/link";

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projectsection"
      className="relative bg-white rounded-xl shadow-sm p-6 mt-8 overflow-hidden section-spacing"
    >
      <div className="relative z-10" ref={ref}>
        <p className="text-green-600 font-semibold">• Projects</p>
        <h2 className="text-3xl font-bold mb-6">Featured Case Studies</h2>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link href="/projects">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
              View All Projects
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
