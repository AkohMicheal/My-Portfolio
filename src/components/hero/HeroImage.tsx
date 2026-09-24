'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeLines = [
  "const developer = {",
  "  name: 'Micheal Akoh',",
  "  role: 'Full-Stack Engineer',",
  "  passion: 'Building scalable systems',",
  "  skills: ['Next.js', 'Node.js', 'Python']",
  "};",
  "",
  "developer.deploy();"
];

const HeroImage: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        setDisplayedLines(prev => [...prev, codeLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center md:justify-end w-full relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md"
      >
        <div className="absolute -inset-1 bg-green-500 rounded-lg blur opacity-25 animate-pulse"></div>
        <div className="relative bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden font-mono text-sm sm:text-base ">
          <div className="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto text-xs text-gray-400">bash</div>
          </div>
          <div className="p-4 min-h-[250px] text-green-400">
            {displayedLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="whitespace-pre"
              >
                {line}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-green-400 ml-1 translate-y-1"
            ></motion.div>
          </div>
        </div>

        {/* Floating elements */}
        {['{', '}', '<', '/>'].map((char, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500/30 text-2xl font-mono font-bold select-none pointer-events-none"
            animate={{
              y: [0, -20, 0],
              x: [0, (i % 2 === 0 ? 15 : -15), 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              top: `${20 + i * 20}%`,
              [i % 2 === 0 ? 'left' : 'right']: '-10%',
            }}
          >
            {char}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroImage;
