'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroText: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center md:text-left"
    >
      {/* Availability Status Badge */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-4"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Full-Stack Software Engineer · Open to Global Remote Roles
      </motion.div>

      {/* Main Headline */}
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl sm:text-5xl font-extrabold text-gray-950 leading-[1.15] tracking-tight"
      >
        Hi, I&apos;m <span className="text-green-600">Micheal Akoh-Idoko</span>
      </motion.h1>

      {/* Senior Professional Engineering Copy */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed"
      >
        I architect and engineer resilient full-stack systems, distributed microservices, and high-performance web applications. Specialized in <strong>React 19</strong>, <strong>Next.js (App Router)</strong>, <strong>TypeScript</strong>, <strong>Apache Kafka</strong>, and <strong>Supabase / Drizzle ORM</strong> with cryptographic payment idempotency.
      </motion.p>

      {/* CTAs & Social Links */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start"
      >
        <Link href="/projects">
          <button className="px-6 py-2.5 bg-green-600 text-white font-medium rounded-lg shadow-sm hover:bg-green-700 transition cursor-pointer">
            View Projects
          </button>
        </Link>
        <Link href="#contactsection" scroll={true}>
          <button className="px-6 py-2.5 border border-green-600 text-green-700 font-medium rounded-lg hover:bg-green-50 transition cursor-pointer">
            Contact Me
          </button>
        </Link>
        <a 
          href="https://github.com/AkohMicheal" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition gap-2"
        >
          <FaGithub className="text-lg" />
          <span>GitHub</span>
        </a>
        <a 
          href="https://linkedin.com/in/micheal-akoh" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition gap-2"
        >
          <FaLinkedin className="text-lg text-[#0A66C2]" />
          <span>LinkedIn</span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
