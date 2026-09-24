'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const HeroText: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center md:text-left"
    >
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-green-600 font-semibold mb-2 flex items-center justify-center md:justify-start gap-2"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        Currently: Open to Opportunities
      </motion.p>
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold leading-tight"
      >
        Hi, I&apos;m <span className="text-green-600">Micheal Akoh</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-lg text-gray-600 max-w-2xl leading-relaxed"
      >
        I build full-stack systems that scale — from AI-powered deepfake detectors to cloud-native e-commerce platforms serving real users. Currently engineering at Lampnet Technologies, where I ship production code across 3+ concurrent client projects.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
      >
        <Link href="/projects">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
            View Projects
          </button>
        </Link>
        <Link href="#contactsection" scroll={true}>
          <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition">
            Contact Me
          </button>
        </Link>
        <a href="https://github.com/MichealAkoh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition gap-2">
          <FaGithub className="text-xl" />
          <span>GitHub</span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
