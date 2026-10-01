// src/components/navigationbar/Navbar.tsx
"use client";

import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "#projectsection" },
    { name: "Experience", href: "#experiencesection" },
    { name: "Skills", href: "#skillssection" },
    { name: "About", href: "#aboutsection" },
    { name: "Contact", href: "#contactsection" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-6xl z-50"
    >
      <nav 
        aria-label="Main Navigation"
        className="glass-panel rounded-full px-5 py-3 flex items-center justify-between shadow-2xl border border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md"
      >
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group transition-transform focus-visible:ring-1 focus-visible:ring-emerald-400 rounded-lg px-1.5 py-0.5"
        >
          <span className="font-mono text-emerald-400 text-lg font-bold group-hover:scale-110 transition-transform">
            &lt;/&gt;
          </span>
          <span className="font-semibold text-zinc-100 tracking-tight text-sm sm:text-base group-hover:text-emerald-300 transition-colors">
            Micheal Akoh
          </span>
          <span className="hidden lg:inline-flex items-center gap-1.5 ml-2 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SWE
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6 text-xs lg:text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-zinc-100 transition-colors py-1 px-1 rounded-md focus-visible:ring-1 focus-visible:ring-emerald-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Action Cluster */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 text-zinc-400 border-r border-zinc-800 pr-3 mr-1">
            <a
              href="https://github.com/MichealAkoh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 hover:text-emerald-400 transition-colors rounded-lg focus-visible:ring-1 focus-visible:ring-emerald-400"
            >
              <FaGithub className="text-base" />
            </a>
            <a
              href="https://linkedin.com/in/micheal-akoh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 hover:text-emerald-400 transition-colors rounded-lg focus-visible:ring-1 focus-visible:ring-emerald-400"
            >
              <FaLinkedin className="text-base" />
            </a>
            <a
              href="https://x.com/AkohTech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) Profile"
              className="p-1.5 hover:text-emerald-400 transition-colors rounded-lg focus-visible:ring-1 focus-visible:ring-emerald-400"
            >
              <FaXTwitter className="text-base" />
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1edfv5JOUJO6ppSqy39pqgHvW1jLwoRxV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium transition-all hover:border-emerald-500/50 shadow-sm"
          >
            <FiDownload className="text-xs" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="md:hidden p-2 text-zinc-300 hover:text-white rounded-lg focus-visible:ring-1 focus-visible:ring-emerald-400"
        >
          {menuOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="glass-panel rounded-2xl mt-2 p-5 bg-zinc-950/95 border border-zinc-800 shadow-2xl flex flex-col gap-4 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3 text-zinc-400 text-lg">
                <a
                  href="https://github.com/MichealAkoh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="hover:text-emerald-400"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/micheal-akoh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="hover:text-emerald-400"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/AkohTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X Profile"
                  className="hover:text-emerald-400"
                >
                  <FaXTwitter />
                </a>
              </div>

              <a
                href="https://drive.google.com/file/d/1edfv5JOUJO6ppSqy39pqgHvW1jLwoRxV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium"
              >
                <FiDownload className="text-xs" />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
