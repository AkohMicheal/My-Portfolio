// src/components/footer/Footer.tsx
'use client';

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowUp } from "react-icons/fi";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 pt-10 pb-12 border-t border-zinc-800/80 text-xs font-mono text-zinc-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Stack Info */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-300 font-semibold mb-1">
            <span className="text-emerald-400 font-mono">&lt;/&gt;</span>
            <span>Micheal Akoh · AkohTech Lab</span>
          </div>
          <p className="text-[11px] text-zinc-400">
            Engineered with Next.js 15, TypeScript, Tailwind CSS, &amp; Framer Motion. Deployed on Vercel.
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-zinc-400 text-base">
            <a
              href="https://github.com/MichealAkoh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-emerald-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/micheal-akoh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-emerald-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/AkohTech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Profile"
              className="hover:text-emerald-400 transition-colors"
            >
              <FaXTwitter />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 border border-zinc-800 text-[11px] transition-all"
          >
            <span>Top</span>
            <FiArrowUp className="text-xs" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[10px] text-zinc-600 gap-2">
        <span>&copy; {new Date().getFullYear()} Micheal Akoh. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <span>Privacy &amp; Data Ethics Respecting</span>
          <span>·</span>
          <span>Zero User Tracking</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
