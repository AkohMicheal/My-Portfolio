'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AboutCard from "./AboutCard";
import { aboutItems } from "./AboutData";

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative bg-white rounded-xl shadow-sm p-6 mt-8 overflow-hidden section-spacing">
      <div className="relative z-10" ref={ref}>
        <p className="text-green-600 font-semibold">• About Me</p>
        <h2 className="text-3xl font-bold mb-6">Get to Know Me</h2>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {aboutItems.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <AboutCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
