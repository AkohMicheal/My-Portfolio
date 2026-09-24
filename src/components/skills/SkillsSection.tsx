'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SkillsIcons from "./SkillsIcons";
import SkillsList from "./SkillsList";
import { skillIcons, skillDetails } from "./SkillsData";

const SkillsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-white rounded-xl shadow-sm p-6 mt-8 overflow-hidden section-spacing">
      <div className="relative z-10" ref={ref}>
        <p className="text-green-600 font-semibold">• Skills</p>
        <h2 className="text-3xl font-bold mb-6">What I Can Do</h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <SkillsIcons icons={skillIcons} />
          <SkillsList skills={skillDetails} />
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
