'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Hero3DCanvas = dynamic(() => import('../canvas/Hero3DCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[380px] sm:h-[430px] flex flex-col items-center justify-center bg-gray-50/70 rounded-2xl border border-gray-100">
      <div className="w-7 h-7 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-2 text-xs text-gray-400">Loading 3D Shaders...</p>
    </div>
  )
});

const SplineScene = dynamic(() => import('../canvas/SplineScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[380px] sm:h-[430px] flex flex-col items-center justify-center bg-gray-50/70 rounded-2xl border border-gray-100">
      <div className="w-7 h-7 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-2 text-xs text-gray-400">Streaming Spline Scene...</p>
    </div>
  )
});

type Mode = '3d' | 'profile' | 'spline';

export const Hero3DWrapper: React.FC = () => {
  const [activeMode, setActiveMode] = useState<Mode>('3d');

  return (
    <div className="flex flex-col items-center md:items-end w-full relative">
      {/* Mode Switcher Tabs */}
      <div className="flex items-center gap-1 p-1 bg-gray-100/90 backdrop-blur-md rounded-xl border border-gray-200/80 mb-3 shadow-inner">
        <button
          onClick={() => setActiveMode('3d')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            activeMode === '3d'
              ? 'bg-white text-emerald-700 shadow-sm border border-emerald-100'
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          ✦ 3D WebGL
        </button>
        <button
          onClick={() => setActiveMode('profile')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            activeMode === 'profile'
              ? 'bg-white text-emerald-700 shadow-sm border border-emerald-100'
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveMode('spline')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            activeMode === 'spline'
              ? 'bg-white text-emerald-700 shadow-sm border border-emerald-100'
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          Spline Physics
        </button>
      </div>

      {/* Main View Container */}
      <div className="relative w-full max-w-sm sm:max-w-md min-h-[380px] sm:min-h-[430px] rounded-2xl bg-white border border-gray-100 shadow-xl overflow-hidden p-2 flex items-center justify-center">
        {/* Ambient Gradient Glow */}
        <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-transparent rounded-3xl blur-2xl -z-10"></div>

        <AnimatePresence mode="wait">
          {activeMode === '3d' && (
            <motion.div
              key="3d"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <Hero3DCanvas showControls={true} />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-gray-500 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gray-100">
                <span>🖱 Drag & rotate WebGL node</span>
                <span className="font-mono text-emerald-600 font-semibold">Three.js + R3F</span>
              </div>
            </motion.div>
          )}

          {activeMode === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="w-full h-full p-2 flex flex-col"
            >
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src="/images/micheal-akoh-profile.jpg"
                  alt="Micheal Akoh-Idoko"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-base font-bold tracking-tight">Micheal Akoh-Idoko</p>
                  <p className="text-xs text-gray-200">Full-Stack Engineer · Lagos (GMT+1)</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
                <div className="px-2 py-1 bg-gray-50 rounded-lg">
                  <p className="text-xs font-semibold text-gray-900">Next.js 15</p>
                  <p className="text-[10px] text-gray-500">React 19</p>
                </div>
                <div className="px-2 py-1 bg-gray-50 rounded-lg">
                  <p className="text-xs font-semibold text-gray-900">Apache Kafka</p>
                  <p className="text-[10px] text-gray-500">Microservices</p>
                </div>
                <div className="px-2 py-1 bg-gray-50 rounded-lg">
                  <p className="text-xs font-semibold text-gray-900">FastAPI</p>
                  <p className="text-[10px] text-gray-500">Python & ML</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeMode === 'spline' && (
            <motion.div
              key="spline"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <SplineScene className="w-full h-[380px] sm:h-[430px]" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-gray-500 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gray-100">
                <span>🎮 Interactive Spline runtime</span>
                <span className="font-mono text-emerald-600 font-semibold">Spline Tool</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero3DWrapper;
